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
import org.apache.hudi.client.SparkRDDWriteClient;
import org.apache.hudi.client.WriteStatus;
import org.apache.hudi.client.functional.TestHoodieMetadataBase;
import org.apache.hudi.common.model.EmptyHoodieRecordPayload;
import org.apache.hudi.common.model.HoodieAvroRecord;
import org.apache.hudi.common.model.HoodieKey;
import org.apache.hudi.common.model.HoodieRecord;
import org.apache.hudi.common.model.HoodieRecordPayload;
import org.apache.hudi.common.table.HoodieTableMetaClient;
import org.apache.hudi.common.testutils.HoodieTestDataGenerator;
import org.apache.hudi.config.HoodieCompactionConfig;
import org.apache.hudi.config.HoodieDynamoDBIndexConfig;
import org.apache.hudi.config.HoodieIndexConfig;
import org.apache.hudi.config.HoodieStorageConfig;
import org.apache.hudi.config.HoodieWriteConfig;
import org.apache.hudi.index.HoodieIndex;
import org.apache.hudi.table.HoodieSparkTable;
import org.apache.hudi.table.HoodieTable;

import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.regions.RegionUtils;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.model.BillingMode;
import com.amazonaws.services.dynamodbv2.model.DescribeTableRequest;
import com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
import com.amazonaws.services.dynamodbv2.model.TableStatus;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.spark.api.java.JavaRDD;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import static org.apache.hudi.testutils.Assertions.assertNoWriteErrors;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestSparkHoodieGlobalDynamoDBIndex extends TestHoodieMetadataBase {
  public static final Logger LOG = LogManager.getLogger(TestSparkHoodieGlobalDynamoDBIndex.class);
  private HoodieTestDataGenerator dataGen;
  private static AmazonDynamoDB dynamoDB;
  private static Set<TableStatus> availableStatuses;

  static {
    availableStatuses = new HashSet<>();
    availableStatuses.add(TableStatus.ACTIVE);
    availableStatuses.add(TableStatus.UPDATING);
  }

  @BeforeEach
  public void setUp() throws Exception {
    initSparkContexts();
    initPath();
    initFileSystem();
    initMetaClient();
    dataGen = new HoodieTestDataGenerator();
  }

  @Test
  public void testCreateTable() {
    HoodieWriteConfig hoodieWriteConfig = getConfig();
    dynamoDB = getDynamoDBClient(hoodieWriteConfig);
    SparkHoodieGlobalDynamoDBIndex sparkHoodieDynamoDBIndex = new SparkHoodieGlobalDynamoDBIndex(hoodieWriteConfig);
    final DescribeTableResult result = dynamoDB.describeTable(new DescribeTableRequest().withTableName(hoodieWriteConfig.getDynamoDBIndexTableName()));
    assertTrue(availableStatuses.contains(TableStatus.fromValue(result.getTable().getTableStatus())));
  }

  private AmazonDynamoDB getDynamoDBClient(HoodieWriteConfig config) {
    String region = config.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_INDEX_REGION.key());
    String endpointURL = config.getProps().containsKey(HoodieDynamoDBIndexConfig.DYNAMODB_ENDPOINT_URL.key())
            ? config.getProps().getString(HoodieDynamoDBIndexConfig.DYNAMODB_ENDPOINT_URL.key())
            : RegionUtils.getRegion(region).getServiceEndpoint(AmazonDynamoDB.ENDPOINT_PREFIX);
    AwsClientBuilder.EndpointConfiguration dynamodbEndpoint =
            new AwsClientBuilder.EndpointConfiguration(endpointURL, region);
    return AmazonDynamoDBClientBuilder.standard()
            .withEndpointConfiguration(dynamodbEndpoint)
            .withCredentials(HoodieAWSCredentialsProviderFactory.getAwsCredentialsProvider(config.getProps()))
            .build();
  }

  @Test
  public void testSimpleTagLocation() throws Exception {

    final String newCommitTime = "001";
    final int numRecords = 200;
    List<HoodieRecord> records = dataGen.generateInserts(newCommitTime, numRecords);
    JavaRDD<HoodieRecord> writeRecords = jsc.parallelize(records, 1);

    // Load to memory
    HoodieWriteConfig config = getConfig();
    SparkHoodieGlobalDynamoDBIndex index = new SparkHoodieGlobalDynamoDBIndex(config);
    try (SparkRDDWriteClient writeClient = getHoodieWriteClient(config);) {
      metaClient = HoodieTableMetaClient.reload(metaClient);
      HoodieTable hoodieTable = HoodieSparkTable.create(config, context, metaClient);

      // Test tagLocation without any entries in index
      JavaRDD<HoodieRecord> records1 = tagLocation(index, writeRecords, hoodieTable);
      assertEquals(0, records1.filter(record -> record.isCurrentLocationKnown()).count());
    }
  }

  @Test
  public void testSimpleTagLocationAndUpdate() throws Exception {
    final String newCommitTime = "001";
    final int numRecords = 20;
    List<HoodieRecord> records = dataGen.generateInserts(newCommitTime, numRecords);
    JavaRDD<HoodieRecord> writeRecords = jsc.parallelize(records, 1);

    // Load to memory
    HoodieWriteConfig config = getConfig();
    SparkHoodieGlobalDynamoDBIndex index = new SparkHoodieGlobalDynamoDBIndex(config);
    try (SparkRDDWriteClient writeClient = getHoodieWriteClient(config);) {
      metaClient = HoodieTableMetaClient.reload(metaClient);
      HoodieTable hoodieTable = HoodieSparkTable.create(config, context, metaClient);

      // Test tagLocation without any entries in index
      JavaRDD<HoodieRecord> records1 = tagLocation(index, writeRecords, hoodieTable);
      assertEquals(0, records1.filter(record -> record.isCurrentLocationKnown()).count());

      // Insert records
      writeClient.startCommitWithTime(newCommitTime);
      JavaRDD<WriteStatus> writeStatues = writeClient.upsert(writeRecords, newCommitTime);
      assertNoWriteErrors(writeStatues.collect());

      // Now tagLocation for these records, dynamodb index should not tag them since commit never occurred
      JavaRDD<HoodieRecord> records2 = tagLocation(index, writeRecords, hoodieTable);
      assertEquals(0, records2.filter(record -> record.isCurrentLocationKnown()).count());

      // Now commit this & update location of records inserted and validate no errors
      writeClient.commit(newCommitTime, writeStatues);

      // Now tagLocation for these records, DynamoDB Index should tag them correctly
      metaClient = HoodieTableMetaClient.reload(metaClient);
      hoodieTable = HoodieSparkTable.create(config, context, metaClient);
      List<HoodieRecord> records3 = tagLocation(index, writeRecords, hoodieTable).collect();
      assertEquals(numRecords, records3.stream().filter(record -> record.isCurrentLocationKnown()).count());
      assertEquals(numRecords, records3.stream().map(record -> record.getKey().getRecordKey()).distinct().count());
      assertEquals(numRecords, records3.stream().filter(record -> (record.getCurrentLocation() != null
          && record.getCurrentLocation().getInstantTime().equals(newCommitTime))).distinct().count());
    }
  }

  @Test
  public void testTagLocationAndPartitionPathUpdate() throws Exception {
    final String newCommitTime = "001";
    final int numRecords = 10;
    final String oldPartitionPath = "2020/20/20";
    final String emptyHoodieRecordPayloadClassName = EmptyHoodieRecordPayload.class.getName();

    List<HoodieRecord> newRecords = dataGen.generateInserts(newCommitTime, numRecords);
    List<HoodieRecord> oldRecords = new LinkedList();
    for (HoodieRecord newRecord: newRecords) {
      HoodieKey key = new HoodieKey(newRecord.getRecordKey(), oldPartitionPath);
      HoodieRecord hoodieRecord = new HoodieAvroRecord(key, (HoodieRecordPayload) newRecord.getData());
      oldRecords.add(hoodieRecord);
    }

    JavaRDD<HoodieRecord> newWriteRecords = jsc.parallelize(newRecords, 1);
    JavaRDD<HoodieRecord> oldWriteRecords = jsc.parallelize(oldRecords, 1);

    HoodieWriteConfig config = getConfig(true, false);
    SparkHoodieGlobalDynamoDBIndex index = new SparkHoodieGlobalDynamoDBIndex(config);

    try (SparkRDDWriteClient writeClient = getHoodieWriteClient(config);) {
      metaClient = HoodieTableMetaClient.reload(metaClient);
      HoodieTable hoodieTable = HoodieSparkTable.create(config, context, metaClient);

      // Commit old records first
      JavaRDD<HoodieRecord> oldHoodieRecord = tagLocation(index, oldWriteRecords, hoodieTable);
      assertEquals(0, oldHoodieRecord.filter(record -> record.isCurrentLocationKnown()).count());
      writeClient.startCommitWithTime(newCommitTime);
      JavaRDD<WriteStatus> writeStatues = writeClient.upsert(oldWriteRecords, newCommitTime);
      writeClient.commit(newCommitTime, writeStatues);
      assertNoWriteErrors(writeStatues.collect());

      metaClient = HoodieTableMetaClient.reload(metaClient);
      hoodieTable = HoodieSparkTable.create(config, context, metaClient);
      // Tag the location for new records while updatePartitionPath flag enabled
      List<HoodieRecord> records1 = tagLocation(index, newWriteRecords, hoodieTable).collect();
      assertEquals(numRecords * 2L, records1.stream().count());
      // Verify the number of deleted records
      assertEquals(numRecords, records1.stream().filter(record -> record.getKey().getPartitionPath().equals(oldPartitionPath)
          && record.getData().getClass().getName().equals(emptyHoodieRecordPayloadClassName)).count());
      // Verify the number of inserted records
      assertEquals(numRecords, records1.stream().filter(record -> !record.getKey().getPartitionPath().equals(oldPartitionPath)).count());

      // Commit the new records
      final String newRecordCommitTime = "002";
      writeClient.startCommitWithTime(newRecordCommitTime);
      JavaRDD<WriteStatus> writeStatue = writeClient.upsert(newWriteRecords, newRecordCommitTime);
      writeClient.commit(newRecordCommitTime, writeStatue);
      assertNoWriteErrors(writeStatue.collect());
      // Tag the new records, DynamoDB index should tag them with the new file id of new partition path
      List<HoodieRecord> records2 = tagLocation(index, newWriteRecords, hoodieTable).collect();
      assertEquals(numRecords, records2.stream().filter(record -> record.isCurrentLocationKnown()).count());

      // It will tag the new records with the old partition path when updatePartitionPath flag is disabled
      index = new SparkHoodieGlobalDynamoDBIndex(getConfig(false, false));
      List<HoodieRecord> notAllowPathChangeRecords = tagLocation(index, newWriteRecords, hoodieTable).collect();
      assertEquals(numRecords, notAllowPathChangeRecords.stream().count());
      assertEquals(numRecords, records1.stream().filter(hoodieRecord -> hoodieRecord.isCurrentLocationKnown()
          && hoodieRecord.getKey().getPartitionPath().equals(oldPartitionPath)).count());
    }
  }

  private HoodieWriteConfig getConfig() {
    return getConfigBuilder(false, false).build();
  }

  private HoodieWriteConfig getConfig(boolean updatePartitionPath, boolean rollbackSync) {
    return getConfigBuilder(updatePartitionPath, rollbackSync).build();
  }

  private HoodieWriteConfig.Builder getConfigBuilder(boolean updatePartitionPath, boolean rollbackSync) {
    return HoodieWriteConfig.newBuilder().withPath(basePath).withSchema(HoodieTestDataGenerator.TRIP_EXAMPLE_SCHEMA)
        .withParallelism(1, 1).withDeleteParallelism(1)
        .withCompactionConfig(HoodieCompactionConfig.newBuilder().compactionSmallFileSize(1024 * 1024)
            .withInlineCompaction(false).build())
        .withAutoCommit(false).withStorageConfig(HoodieStorageConfig.newBuilder()
            .hfileMaxFileSize(1024 * 1024).parquetMaxFileSize(1024 * 1024).build())
        .forTable("test-trip-table")
        .withIndexConfig(HoodieIndexConfig.newBuilder().withIndexType(HoodieIndex.IndexType.GLOBAL_DYNAMODB)
            .withDynamoDBIndexConfig(new HoodieDynamoDBIndexConfig.Builder()
                .dynamodbTableName("hudi_index_test")
                .dynamoDBIndexPartitionKey("recordKey")
                .dynamoDBIndexBillingMode(BillingMode.PAY_PER_REQUEST.name())
                .dynamoDBIndexReadCapacity("0")
                .dynamoDBIndexWriteCapacity("0")
                .dynamoDBIndexUpdatePartitionPathEnable(updatePartitionPath).build())
            .build());
  }
}
