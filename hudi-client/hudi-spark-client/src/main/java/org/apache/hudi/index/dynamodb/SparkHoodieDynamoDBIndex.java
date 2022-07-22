/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.hudi.index.dynamodb;

import org.apache.hudi.aws.credentials.HoodieAWSCredentialsProviderFactory;
import org.apache.hudi.client.WriteStatus;
import org.apache.hudi.client.utils.SparkMemoryUtils;
import org.apache.hudi.common.data.HoodieData;
import org.apache.hudi.common.engine.HoodieEngineContext;
import org.apache.hudi.common.model.HoodieRecord;
import org.apache.hudi.common.table.HoodieTableMetaClient;
import org.apache.hudi.common.table.timeline.HoodieTimeline;
import org.apache.hudi.common.util.ValidationUtils;
import org.apache.hudi.config.HoodieDynamoDBIndexConfig;
import org.apache.hudi.config.HoodieWriteConfig;
import org.apache.hudi.data.HoodieJavaRDD;
import org.apache.hudi.exception.HoodieIndexException;
import org.apache.hudi.index.HoodieIndex;
import org.apache.hudi.index.WriteStatusPartitioner;
import org.apache.hudi.table.HoodieTable;

import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.regions.RegionUtils;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.model.AttributeDefinition;
import com.amazonaws.services.dynamodbv2.model.BillingMode;
import com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
import com.amazonaws.services.dynamodbv2.model.DescribeTableRequest;
import com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
import com.amazonaws.services.dynamodbv2.model.KeySchemaElement;
import com.amazonaws.services.dynamodbv2.model.KeyType;
import com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;
import com.amazonaws.services.dynamodbv2.model.ResourceNotFoundException;
import com.amazonaws.services.dynamodbv2.model.TableStatus;
import com.amazonaws.services.dynamodbv2.util.TableUtils;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.function.Function2;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import scala.Tuple2;

public class SparkHoodieDynamoDBIndex extends HoodieIndex<Object, Object> {

  protected String tableName;
  protected String dynamoDBPartitionKey;
  protected String dynamoDBSortKey;
  private static Set<TableStatus> availableStatuses;
  protected long totalNumInserts;
  protected int numWriteStatusWithInserts;
  protected IndexType indexType;
  protected Integer batchSize = 100;

  static {
    availableStatuses = new HashSet<>();
    availableStatuses.add(TableStatus.ACTIVE);
    availableStatuses.add(TableStatus.UPDATING);
  }

  public SparkHoodieDynamoDBIndex(HoodieWriteConfig hoodieWriteConfig) {
    super(hoodieWriteConfig);
    checkRequiredProps(hoodieWriteConfig);
    this.tableName = config.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_TABLE_NAME.key());
    this.indexType = config.getIndexType();
    this.dynamoDBSortKey = indexType.equals(IndexType.DYNAMODB) ? config.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_SORT_KEY.key()) : null;
    this.dynamoDBPartitionKey = config.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_PARTITION_KEY.key());
  }

  public  <R> Function2<Integer, Iterator<HoodieRecord<R>>, Iterator<HoodieRecord<R>>> locationTagFunction(
      HoodieTableMetaClient metaClient) {
    return null;
  }

  public boolean checkIfValidCommit(HoodieTableMetaClient metaClient, String commitTs) {
    HoodieTimeline commitTimeline = metaClient.getCommitsTimeline().filterCompletedInstants();
    // Check if the last commit ts for this row is 1) present in the timeline or
    // 2) is less than the first commit ts in the timeline
    return !commitTimeline.empty()
        && commitTimeline.containsOrBeforeTimelineStarts(commitTs);
  }

  @Override
  public <R> HoodieData<HoodieRecord<R>> tagLocation(
      HoodieData<HoodieRecord<R>> records, HoodieEngineContext context,
      HoodieTable hoodieTable) {
    return HoodieJavaRDD.of(HoodieJavaRDD.getJavaRDD(records)
        .mapPartitionsWithIndex(locationTagFunction(hoodieTable.getMetaClient()), true));
  }

  public Function2<Integer, Iterator<WriteStatus>, Iterator<WriteStatus>> locationUpdateFunction() {
    return null;
  }

  Map<String, Integer> mapFileWithInsertsToUniquePartition(JavaRDD<WriteStatus> writeStatusRDD) {
    final Map<String, Integer> fileIdPartitionMap = new HashMap<>();
    int partitionIndex = 0;
    // Map each fileId that has inserts to a unique partition Id. This will be used while
    // repartitioning RDD<WriteStatus>
    final List<String> fileIds = writeStatusRDD.filter(w -> w.getStat().getNumInserts() > 0)
        .map(w -> w.getFileId()).collect();
    for (final String fileId : fileIds) {
      fileIdPartitionMap.put(fileId, partitionIndex++);
    }
    return fileIdPartitionMap;
  }

  @Override
  public HoodieData<WriteStatus> updateLocation(HoodieData<WriteStatus> writeStatus, HoodieEngineContext context, HoodieTable hoodieTable) throws HoodieIndexException {
    JavaRDD<WriteStatus> writeStatusRDD = HoodieJavaRDD.getJavaRDD(writeStatus);
    final JavaPairRDD<Long, Integer> insertOnlyWriteStatusRDD = writeStatusRDD
        .filter(w -> w.getStat().getNumInserts() > 0).mapToPair(w -> new Tuple2<>(w.getStat().getNumInserts(), 1));
    final Tuple2<Long, Integer> numPutsParallelismTuple = insertOnlyWriteStatusRDD.fold(new Tuple2<>(0L, 0), (w, c) -> new Tuple2<>(w._1 + c._1, w._2 + c._2));
    this.totalNumInserts = numPutsParallelismTuple._1;
    this.numWriteStatusWithInserts = numPutsParallelismTuple._2;
    final Map<String, Integer> fileIdPartitionMap = mapFileWithInsertsToUniquePartition(writeStatusRDD);
    JavaRDD<WriteStatus> partitionedRDD = this.numWriteStatusWithInserts == 0 ? writeStatusRDD :
        writeStatusRDD.mapToPair(w -> new Tuple2<>(w.getFileId(), w))
            .partitionBy(new WriteStatusPartitioner(fileIdPartitionMap,
                this.numWriteStatusWithInserts))
            .map(w -> w._2());
    JavaRDD<WriteStatus> writeStatusJavaRDD = partitionedRDD.mapPartitionsWithIndex(locationUpdateFunction(),
        true);
    writeStatusJavaRDD = writeStatusJavaRDD.persist(SparkMemoryUtils.getWriteStatusStorageLevel(config.getProps()));
    writeStatusJavaRDD.count();
    return HoodieJavaRDD.of(writeStatusJavaRDD);
  }

  @Override
  public boolean rollbackCommit(String instantTime) {
    return false;
  }

  @Override
  public boolean isGlobal() {
    return false;
  }

  @Override
  public boolean canIndexLogFiles() {
    return true;
  }

  @Override
  public boolean isImplicitWithStorage() {
    return false;
  }

  protected AmazonDynamoDB getDynamoDBClient() {
    String region = this.config.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_REGION.key());
    String endpointURL = this.config.getProps().containsKey(HoodieDynamoDBIndexConfig.DYNAMODB_ENDPOINT_URL.key())
        ? this.config.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_ENDPOINT_URL.key())
        : RegionUtils.getRegion(region).getServiceEndpoint(AmazonDynamoDB.ENDPOINT_PREFIX);
    AwsClientBuilder.EndpointConfiguration dynamodbEndpoint =
        new AwsClientBuilder.EndpointConfiguration(endpointURL, region);
    return AmazonDynamoDBClientBuilder.standard()
        .withEndpointConfiguration(dynamodbEndpoint)
        .withCredentials(HoodieAWSCredentialsProviderFactory.getAwsCredentialsProvider(config.getProps()))
        .build();
  }

  protected void checkRequiredProps(final HoodieWriteConfig hoodieWriteConfig) {
    ValidationUtils.checkArgument(hoodieWriteConfig.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_TABLE_NAME.key()) != null);
    ValidationUtils.checkArgument(hoodieWriteConfig.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_REGION.key()) != null);
    ValidationUtils.checkArgument(hoodieWriteConfig.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_PARTITION_KEY.key()) != null);
    hoodieWriteConfig.getProps().putIfAbsent(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_BILLING_MODE.key(), BillingMode.PAY_PER_REQUEST.name());
    hoodieWriteConfig.getProps().putIfAbsent(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_READ_CAPACITY.key(), "20");
    hoodieWriteConfig.getProps().putIfAbsent(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_WRITE_CAPACITY.key(), "10");
    hoodieWriteConfig.getProps().putIfAbsent(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_TABLE_CREATION_TIMEOUT.key(), "600000");
  }

  protected boolean indexTableExists(AmazonDynamoDB dynamoDB) {
    try {
      final DescribeTableResult result = dynamoDB.describeTable(new DescribeTableRequest().withTableName(tableName));
      List<KeySchemaElement> keySchemaElementList = result.getTable().getKeySchema();
      if (keySchemaElementList.size() == 1 && config.getIndexType().equals("DYNAMODB")) {
        return false;
      }
      return availableStatuses.contains(TableStatus.fromValue(result.getTable().getTableStatus()));
    } catch (final ResourceNotFoundException e) {
      // This exception indicates the table doesn't exist.
      return false;
    }
  }

  protected void createTableInDynamoDB(AmazonDynamoDB dynamoDB, HoodieWriteConfig hoodieWriteConfig) {
    if (dynamoDB == null) {
      dynamoDB = getDynamoDBClient();
    }
    String billingMode = config.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_BILLING_MODE.key());

    // Define attributes
    List<AttributeDefinition> attributeDefinitions = new ArrayList<AttributeDefinition>();
    attributeDefinitions.add(new AttributeDefinition()
        .withAttributeName(dynamoDBPartitionKey)
        .withAttributeType("S"));

    // Define key schema
    ArrayList<KeySchemaElement> tableKeySchema = new ArrayList<KeySchemaElement>();
    tableKeySchema.add(new KeySchemaElement()
        .withAttributeName(dynamoDBPartitionKey)
        .withKeyType(KeyType.HASH));  //Partition key

    if (indexType.equals(IndexType.DYNAMODB)) {
      attributeDefinitions.add(new AttributeDefinition()
          .withAttributeName(dynamoDBSortKey)
          .withAttributeType("S"));
      tableKeySchema.add(new KeySchemaElement()
          .withAttributeName(dynamoDBSortKey)
          .withKeyType(KeyType.RANGE));  //Sort key
    }

    // Create table request
    CreateTableRequest request = new CreateTableRequest()
        .withTableName(tableName)
        .withKeySchema(tableKeySchema)
        .withAttributeDefinitions(attributeDefinitions)
        .withBillingMode(billingMode);

    // if it's PAY_PER_REQUEST then read and write capacity is on demand. No need to set RCU and WCU
    // If billing mode is PROVISIONED then we need to define read and write capacity units (RCU and WCU)
    if (billingMode.equals(BillingMode.PROVISIONED.name())) {
      request.withProvisionedThroughput(new ProvisionedThroughput()
          .withReadCapacityUnits(Long.parseLong(hoodieWriteConfig.getDynamoDBIndexReadCapacity()))
          .withWriteCapacityUnits(Long.parseLong(hoodieWriteConfig.getDynamoDBIndexBillingMode())));
    }

    dynamoDB.createTable(request);

    try {
      TableUtils.waitUntilActive(dynamoDB, tableName, Integer.parseInt(hoodieWriteConfig.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_TABLE_CREATION_TIMEOUT.key())), 20 * 1000);
    } catch (TableUtils.TableNeverTransitionedToStateException e) {
      throw new HoodieIndexException("Created dynamoDB table never transits to active", e);
    } catch (InterruptedException e) {
      throw new HoodieIndexException("Thread interrupted while waiting for dynamoDB table to turn active", e);
    }
  }
}