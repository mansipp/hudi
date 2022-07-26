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
import org.apache.hudi.common.model.EmptyHoodieRecordPayload;
import org.apache.hudi.common.model.HoodieAvroRecord;
import org.apache.hudi.common.model.HoodieKey;
import org.apache.hudi.common.model.HoodieRecord;
import org.apache.hudi.common.model.HoodieRecordLocation;
import org.apache.hudi.common.model.HoodieRecordPayload;
import org.apache.hudi.common.table.HoodieTableMetaClient;
import org.apache.hudi.common.table.timeline.HoodieTimeline;
import org.apache.hudi.common.util.Option;
import org.apache.hudi.common.util.ValidationUtils;
import org.apache.hudi.config.HoodieDynamoDBIndexConfig;
import org.apache.hudi.config.HoodieWriteConfig;
import org.apache.hudi.data.HoodieJavaRDD;
import org.apache.hudi.exception.HoodieIndexException;
import org.apache.hudi.index.HoodieIndex;
import org.apache.hudi.table.HoodieTable;

import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.regions.RegionUtils;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperConfig;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
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
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.spark.Partitioner;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.function.Function2;
import org.joda.time.DateTime;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import scala.Tuple2;

public class SparkHoodieDynamoDBIndex extends HoodieIndex<Object, Object> {
  private static Set<TableStatus> availableStatuses;
  private static final Logger LOG = LogManager.getLogger(SparkHoodieDynamoDBIndex.class);
  private static AmazonDynamoDB dynamoDB;
  private static DynamoDB ddb;
  private String tableName;
  private String dynamoDBPartitionKey;
  private long totalNumInserts;
  private int numWriteStatusWithInserts;

  static {
    availableStatuses = new HashSet<>();
    availableStatuses.add(TableStatus.ACTIVE);
    availableStatuses.add(TableStatus.UPDATING);
  }

  public SparkHoodieDynamoDBIndex(HoodieWriteConfig hoodieWriteConfig) {
    super(hoodieWriteConfig);
    checkRequiredProps(hoodieWriteConfig);
    this.tableName = config.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_TABLE_NAME.key());
    this.dynamoDBPartitionKey = config.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_PARTITION_KEY.key());
    if (this.dynamoDB == null) {
      this.dynamoDB = getDynamoDBClient();
      this.ddb = new DynamoDB(dynamoDB);
    }
    if (!indexTableExists()) {
      // LOG.info("Table doesn't exists.");
      createTableInDynamoDB(dynamoDB, hoodieWriteConfig);
    }
  }

  private <R> Function2<Integer, Iterator<HoodieRecord<R>>, Iterator<HoodieRecord<R>>> locationTagFunction(
      HoodieTableMetaClient metaClient) {
    return (partitionNum, hoodieRecordIterator) -> {
      boolean updatePartitionPath = config.getDynamoDBIndexUpdatePartitionPath();
      // grab DynamoDB connection
      if (this.dynamoDB == null) {
        this.dynamoDB = getDynamoDBClient();
        this.ddb = new DynamoDB(dynamoDB);
      }

      List<HoodieRecord<R>> taggedRecords = new ArrayList<>();
      DynamoDBMapperConfig mapperConfig = DynamoDBMapperConfig.builder()
          .withConsistentReads(DynamoDBMapperConfig.ConsistentReads.CONSISTENT)
          .withTableNameOverride(DynamoDBMapperConfig.TableNameOverride.withTableNameReplacement(tableName))
          .build();
      DynamoDBMapper mapper = new DynamoDBMapper(dynamoDB, mapperConfig);
      List<Object> itemsToGet = new ArrayList<>();

      try {
        List<HoodieRecord> currentBatchOfRecords = new LinkedList<>();
        // Do the tagging.
        while (hoodieRecordIterator.hasNext()) {
          HoodieRecord rec = hoodieRecordIterator.next();
          SparkHoodieDynamoDBIndexMapper sparkHoodieDynamoDBIndexMapper = new SparkHoodieDynamoDBIndexMapper();
          sparkHoodieDynamoDBIndexMapper.setDynamoRecordKey(rec.getRecordKey());
          itemsToGet.add(sparkHoodieDynamoDBIndexMapper);
          currentBatchOfRecords.add(rec);
          if (hoodieRecordIterator.hasNext()) {
            continue;
          }

          Map<String, List<Object>> items = mapper.batchLoad(itemsToGet);
          if (items.get(tableName).isEmpty()) {
            currentBatchOfRecords.stream().forEach(i -> taggedRecords.add(i));
            continue;
          }
          for (Map.Entry<String, List<Object>> item : items.entrySet()) {
            int itemSize = item.getValue().size();
            for (int i = 0; i < itemSize; i++) {
              SparkHoodieDynamoDBIndexMapper sp = (SparkHoodieDynamoDBIndexMapper) item.getValue().remove(0);
              HoodieRecord currentRecord = currentBatchOfRecords.stream().filter(x -> x.getRecordKey().equals(sp.getDynamoRecordKey())).reduce((a, b) -> {
                throw new RuntimeException("Record not found");
              }).get();
              currentBatchOfRecords.removeIf(x -> x.getRecordKey().equals(sp.getDynamoRecordKey()));

              String keyFromResult = sp.getDynamoRecordKey();
              String commitTs = sp.getDynamoCommitTs();
              String fileId = sp.getDynamoFileId();
              String partitionPath = sp.getDynamoPartitionPath();
              if (!checkIfValidCommit(metaClient, commitTs)) {
                // if commit is invalid, treat this as a new taggedRecord
                taggedRecords.add(currentRecord);
                continue;
              }
              if (updatePartitionPath && !partitionPath.equals(currentRecord.getPartitionPath())) {
                // delete partition old data record
                HoodieRecord emptyRecord = new HoodieAvroRecord(new HoodieKey(currentRecord.getRecordKey(), partitionPath),
                    new EmptyHoodieRecordPayload());
                emptyRecord.unseal();
                emptyRecord.setCurrentLocation(new HoodieRecordLocation(commitTs, fileId));
                emptyRecord.seal();
                // insert partition new data record
                currentRecord = new HoodieAvroRecord(new HoodieKey(currentRecord.getRecordKey(), currentRecord.getPartitionPath()),
                    (HoodieRecordPayload) currentRecord.getData());
                taggedRecords.add(emptyRecord);
                taggedRecords.add(currentRecord);
              } else {
                currentRecord = new HoodieAvroRecord(new HoodieKey(currentRecord.getRecordKey(), partitionPath),
                    (HoodieRecordPayload) currentRecord.getData());
                currentRecord.unseal();
                currentRecord.setCurrentLocation(new HoodieRecordLocation(commitTs, fileId));
                currentRecord.seal();
                taggedRecords.add(currentRecord);
                assert (currentRecord.getRecordKey().contentEquals(keyFromResult));
              }
            }
          }
          if (!currentBatchOfRecords.isEmpty()) {
            currentBatchOfRecords.stream().forEach(i -> taggedRecords.add(i));
          }
        }
      } catch (HoodieIndexException e) {
        throw new HoodieIndexException("Failed to Tag indexed locations because of exception with DynamoDB Client", e);
      }
      return taggedRecords.iterator();
    };
  }

  private boolean checkIfValidCommit(HoodieTableMetaClient metaClient, String commitTs) {
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

  private Function2<Integer, Iterator<WriteStatus>, Iterator<WriteStatus>> locationUpdateFunction() {
    return (partition, statusIterator) -> {

      List<WriteStatus> writeStatusList = new ArrayList<>();
      DynamoDBMapper mapper = new DynamoDBMapper(dynamoDB);
      List<SparkHoodieDynamoDBIndexMapper> mapperPutList = new ArrayList<>();
      List<SparkHoodieDynamoDBIndexMapper> mapperDeleteList = new ArrayList<>();
      // Grab the dynamodb connection
      if (dynamoDB == null) {
        dynamoDB = getDynamoDBClient();
        ddb = new DynamoDB(dynamoDB);
      }
      final long startTimeForWriteTask = DateTime.now().getMillis();
      LOG.info("start time of write task for this task: " + startTimeForWriteTask);

      try {
        while (statusIterator.hasNext()) {
          WriteStatus writeStatus = statusIterator.next();
          try {
            long numOfInserts = writeStatus.getStat().getNumInserts();
            LOG.info("Num of inserts in this WriteStatus: " + numOfInserts);
            LOG.info("Total inserts in this job: " + this.totalNumInserts);
            for (HoodieRecord rec : writeStatus.getWrittenRecords()) {
              SparkHoodieDynamoDBIndexMapper sparkHoodieDynamoDBIndexMapper = new SparkHoodieDynamoDBIndexMapper();
              if (!writeStatus.isErrored(rec.getKey())) {
                Option<HoodieRecordLocation> loc = rec.getNewLocation();
                if (loc.isPresent()) {
                  if (rec.getCurrentLocation() != null) {
                    // This is an update, no need to update index
                    continue;
                  }
                  sparkHoodieDynamoDBIndexMapper.setDynamoRecordKey(rec.getRecordKey());
                  sparkHoodieDynamoDBIndexMapper.setDynamoPartitionPath(rec.getPartitionPath());
                  sparkHoodieDynamoDBIndexMapper.setDynamoCommitTs(loc.get().getInstantTime());
                  sparkHoodieDynamoDBIndexMapper.setDynamoFileId(loc.get().getFileId());
                  mapperPutList.add(sparkHoodieDynamoDBIndexMapper);
                } else {
                  sparkHoodieDynamoDBIndexMapper.setDynamoRecordKey(rec.getRecordKey());
                  mapperDeleteList.add(sparkHoodieDynamoDBIndexMapper);
                }
              }
            }
          } catch (Exception e) {
            Exception ue = new Exception("Error updating index for " + writeStatus, e);
            LOG.error(ue);
            writeStatus.setGlobalError(ue);
          }
          writeStatusList.add(writeStatus);
        }
        mapper.batchWrite(mapperPutList,mapperDeleteList);
        final long endWriteTime = DateTime.now().getMillis();
        LOG.info("dynamodb write task time for this task: " + (endWriteTime - startTimeForWriteTask));
      } catch (Exception e) {
        throw new HoodieIndexException("Failed to Update Index locations because of exception with DynamoDB Client", e);
      }
      return writeStatusList.iterator();
    };
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
    LOG.info("Update Location call");
    JavaRDD<WriteStatus> writeStatusRDD = HoodieJavaRDD.getJavaRDD(writeStatus);
    final JavaPairRDD<Long, Integer> insertOnlyWriteStatusRDD = writeStatusRDD
        .filter(w -> w.getStat().getNumInserts() > 0).mapToPair(w -> new Tuple2<>(w.getStat().getNumInserts(), 1));
    final Tuple2<Long, Integer> numPutsParallelismTuple = insertOnlyWriteStatusRDD.fold(new Tuple2<>(0L, 0), (w, c) -> new Tuple2<>(w._1 + c._1, w._2 + c._2));
    this.totalNumInserts = numPutsParallelismTuple._1;
    this.numWriteStatusWithInserts = numPutsParallelismTuple._2;
    final Map<String, Integer> fileIdPartitionMap = mapFileWithInsertsToUniquePartition(writeStatusRDD);
    JavaRDD<WriteStatus> partitionedRDD = this.numWriteStatusWithInserts == 0 ? writeStatusRDD :
        writeStatusRDD.mapToPair(w -> new Tuple2<>(w.getFileId(), w))
            .partitionBy(new SparkHoodieDynamoDBIndex.WriteStatusPartitioner(fileIdPartitionMap,
                this.numWriteStatusWithInserts))
            .map(w -> w._2());
    JavaRDD<WriteStatus> writeStatusJavaRDD = partitionedRDD.mapPartitionsWithIndex(locationUpdateFunction(),
        true);
    writeStatusJavaRDD = writeStatusJavaRDD.persist(SparkMemoryUtils.getWriteStatusStorageLevel(config.getProps()));
    writeStatusJavaRDD.count();
    return HoodieJavaRDD.of(writeStatusJavaRDD);
  }

  /**
   * Partitions each WriteStatus with inserts into a unique single partition. WriteStatus without inserts will be
   * assigned to random partitions. This partitioner will be useful to utilize max parallelism with spark operations
   * that are based on inserts in each WriteStatus.
   */
  public static class WriteStatusPartitioner extends Partitioner {
    private int totalPartitions;
    final Map<String, Integer> fileIdPartitionMap;

    public WriteStatusPartitioner(final Map<String, Integer> fileIdPartitionMap, final int totalPartitions) {
      this.totalPartitions = totalPartitions;
      this.fileIdPartitionMap = fileIdPartitionMap;
    }

    @Override
    public int numPartitions() {
      return this.totalPartitions;
    }

    @Override
    public int getPartition(Object key) {
      final String fileId = (String) key;
      if (!fileIdPartitionMap.containsKey(fileId)) {
        LOG.info("This writestatus(fileId: " + fileId + ") is not mapped because it doesn't have any inserts. "
            + "In this case, we can assign a random partition to this WriteStatus.");
        // Assign random spark partition for the `WriteStatus` that has no inserts. For a spark operation that depends
        // on number of inserts, there won't be any performance penalty in packing these WriteStatus'es together.
        return Math.abs(fileId.hashCode()) % totalPartitions;
      }
      return fileIdPartitionMap.get(fileId);
    }
  }

  @Override
  public boolean rollbackCommit(String instantTime) {
    return false;
  }

  @Override
  public boolean isGlobal() {
    return true;
  }

  @Override
  public boolean canIndexLogFiles() {
    return true;
  }

  @Override
  public boolean isImplicitWithStorage() {
    return false;
  }

  private AmazonDynamoDB getDynamoDBClient() {
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

  private void checkRequiredProps(final HoodieWriteConfig hoodieWriteConfig) {
    ValidationUtils.checkArgument(hoodieWriteConfig.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_TABLE_NAME.key()) != null);
    ValidationUtils.checkArgument(hoodieWriteConfig.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_REGION.key()) != null);
    ValidationUtils.checkArgument(hoodieWriteConfig.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_PARTITION_KEY.key()) != null);
    hoodieWriteConfig.getProps().putIfAbsent(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_BILLING_MODE.key(), BillingMode.PAY_PER_REQUEST.name());
    hoodieWriteConfig.getProps().putIfAbsent(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_READ_CAPACITY.key(), "20");
    hoodieWriteConfig.getProps().putIfAbsent(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_WRITE_CAPACITY.key(), "10");
    hoodieWriteConfig.getProps().putIfAbsent(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_TABLE_CREATION_TIMEOUT.key(), "600000");
  }

  public boolean indexTableExists() {
    try {
      final DescribeTableResult result = dynamoDB.describeTable(new DescribeTableRequest().withTableName(tableName));
      return availableStatuses.contains(TableStatus.fromValue(result.getTable().getTableStatus()));
    } catch (final ResourceNotFoundException e) {
      // This exception indicates the table doesn't exist.
      return false;
    }
  }

  public void createTableInDynamoDB(AmazonDynamoDB dynamoDB, HoodieWriteConfig hoodieWriteConfig) {
    LOG.info("Create table in DynamoDB for Hudi index");

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
    LOG.info("Table Description:  \n" + dynamoDB.describeTable(tableName));
  }
}