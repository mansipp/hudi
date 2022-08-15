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

import org.apache.hudi.client.WriteStatus;
import org.apache.hudi.common.model.HoodieAvroRecord;
import org.apache.hudi.common.model.HoodieKey;
import org.apache.hudi.common.model.HoodieRecord;
import org.apache.hudi.common.model.HoodieRecordLocation;
import org.apache.hudi.common.model.HoodieRecordPayload;
import org.apache.hudi.common.table.HoodieTableMetaClient;
import org.apache.hudi.common.util.Option;
import org.apache.hudi.config.HoodieWriteConfig;
import org.apache.hudi.exception.HoodieIndexException;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDBAsync;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperConfig;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.spark.api.java.function.Function2;
import org.joda.time.DateTime;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class SparkHoodieNonGlobalDynamoDBIndex extends SparkHoodieDynamoDBIndex {
  private static final Logger LOG = LogManager.getLogger(SparkHoodieNonGlobalDynamoDBIndex.class);
  private static AmazonDynamoDBAsync dynamoDB;
  private Integer batchSize = 100;

  public SparkHoodieNonGlobalDynamoDBIndex(HoodieWriteConfig hoodieWriteConfig) {
    super(hoodieWriteConfig);
    if (this.dynamoDB == null) {
      this.dynamoDB = getDynamoDBClient();
    }
    if (!indexTableExists(dynamoDB)) {
      LOG.info("Table " + tableName + " does not exist in DynamoDB, initiating create table for " + tableName);
      createTableInDynamoDB(dynamoDB, hoodieWriteConfig);
    }
  }

  public  <R> Function2<Integer, Iterator<HoodieRecord<R>>, Iterator<HoodieRecord<R>>> locationTagFunction(
      HoodieTableMetaClient metaClient) {
    return (partitionNum, hoodieRecordIterator) -> {
      // grab DynamoDB connection
      if (this.dynamoDB == null) {
        this.dynamoDB = getDynamoDBClient();
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
          SparkHoodieDynamoDBNonGlobalIndexMapper sparkHoodieDynamoDBIndexMapper = new SparkHoodieDynamoDBNonGlobalIndexMapper();
          sparkHoodieDynamoDBIndexMapper.setDynamoRecordKey(rec.getRecordKey());
          sparkHoodieDynamoDBIndexMapper.setDynamoPartitionPath(rec.getPartitionPath());
          itemsToGet.add(sparkHoodieDynamoDBIndexMapper);
          currentBatchOfRecords.add(rec);
          if (hoodieRecordIterator.hasNext() && itemsToGet.size() < batchSize) {
            continue;
          }
          Map<String, List<Object>> items = mapper.batchLoad(itemsToGet);
          itemsToGet.clear();
          if (items.get(tableName).isEmpty()) {
            currentBatchOfRecords.stream().forEach(i -> taggedRecords.add(i));
            currentBatchOfRecords.clear();
            continue;
          }
          List<Object> item = items.get(tableName);
          int itemSize = item.size();
          for (int i = 0; i < itemSize; i++) {
            SparkHoodieDynamoDBNonGlobalIndexMapper sp = (SparkHoodieDynamoDBNonGlobalIndexMapper) item.remove(0);
            HoodieRecord currentRecord = currentBatchOfRecords.stream()
                .filter(x -> x.getRecordKey().equals(sp.getDynamoRecordKey()) && x.getPartitionPath().equals(sp.getDynamoPartitionPath())).reduce((a, b) -> {
                  throw new RuntimeException("Record not found");
                }).get();
            currentBatchOfRecords.removeIf(x -> x.getRecordKey().equals(sp.getDynamoRecordKey()) && x.getPartitionPath().equals(sp.getDynamoPartitionPath()));
            String keyFromResult = sp.getDynamoRecordKey();
            String commitTs = sp.getDynamoCommitTs();
            String fileId = sp.getDynamoFileId();
            String partitionPath = sp.getDynamoPartitionPath();
            if (!checkIfValidCommit(metaClient, commitTs)) {
              // if commit is invalid, treat this as a new taggedRecord
              taggedRecords.add(currentRecord);
              continue;
            }
            currentRecord = new HoodieAvroRecord(new HoodieKey(currentRecord.getRecordKey(), partitionPath),
                (HoodieRecordPayload) currentRecord.getData());
            currentRecord.unseal();
            currentRecord.setCurrentLocation(new HoodieRecordLocation(commitTs, fileId));
            currentRecord.seal();
            taggedRecords.add(currentRecord);
            assert (currentRecord.getRecordKey().contentEquals(keyFromResult));
          }
        }
      } catch (HoodieIndexException e) {
        throw new HoodieIndexException("Failed to Tag indexed locations because of exception with DynamoDB Client", e);
      }
      LOG.info("taggedRecords : " + taggedRecords);
      return taggedRecords.iterator();
    };
  }

  public Function2<Integer, Iterator<WriteStatus>, Iterator<WriteStatus>> locationUpdateFunction() {
    return (partition, statusIterator) -> {
      // Grab the dynamodb connection
      if (dynamoDB == null) {
        dynamoDB = getDynamoDBClient();
      }
      List<WriteStatus> writeStatusList = new ArrayList<>();
      DynamoDBMapperConfig mapperConfig = DynamoDBMapperConfig.builder()
          .withConsistentReads(DynamoDBMapperConfig.ConsistentReads.CONSISTENT)
          .withTableNameOverride(DynamoDBMapperConfig.TableNameOverride.withTableNameReplacement(tableName))
          .build();
      DynamoDBMapper mapper = new DynamoDBMapper(dynamoDB, mapperConfig);

      final long startTimeForWriteTask = DateTime.now().getMillis();
      LOG.info("start time of write task for this task: " + startTimeForWriteTask);

      try {
        while (statusIterator.hasNext()) {
          WriteStatus writeStatus = statusIterator.next();
          List<SparkHoodieDynamoDBNonGlobalIndexMapper> mapperPutList = new ArrayList<>();
          List<SparkHoodieDynamoDBNonGlobalIndexMapper> mapperDeleteList = new ArrayList<>();
          try {
            long numOfInserts = writeStatus.getStat().getNumInserts();
            LOG.info("Num of inserts in this WriteStatus: " + numOfInserts);
            LOG.info("Total inserts in this job: " + this.totalNumInserts);
            for (HoodieRecord rec : writeStatus.getWrittenRecords()) {
              SparkHoodieDynamoDBNonGlobalIndexMapper sparkHoodieDynamoDBIndexMapper = new SparkHoodieDynamoDBNonGlobalIndexMapper();
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
                  sparkHoodieDynamoDBIndexMapper.setDynamoRecordKey(rec.getPartitionPath());
                  mapperDeleteList.add(sparkHoodieDynamoDBIndexMapper);
                }
              }
              if (mapperPutList.size() + mapperDeleteList.size() < batchSize) {
                continue;
              }
              mapper.batchWrite(mapperPutList,mapperDeleteList);
              mapperPutList.clear();
              mapperDeleteList.clear();
            }
            mapper.batchWrite(mapperPutList,mapperDeleteList);
            mapperPutList.clear();
            mapperDeleteList.clear();
          } catch (Exception e) {
            Exception ue = new Exception("Error updating index for " + writeStatus, e);
            LOG.error(ue);
            writeStatus.setGlobalError(ue);
          }
          writeStatusList.add(writeStatus);
        }
        final long endWriteTime = DateTime.now().getMillis();
        LOG.info("dynamodb write task time for this task: " + (endWriteTime - startTimeForWriteTask));
      } catch (Exception e) {
        throw new HoodieIndexException("Failed to Update Index locations because of exception with DynamoDB Client", e);
      }
      return writeStatusList.iterator();
    };
  }

  @Override
  public boolean isGlobal() {
    return false;
  }
}