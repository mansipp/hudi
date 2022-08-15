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
import org.apache.hudi.common.model.EmptyHoodieRecordPayload;
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
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
import com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
import com.amazonaws.services.dynamodbv2.model.KeysAndAttributes;
import com.amazonaws.services.dynamodbv2.model.PutRequest;
import com.amazonaws.services.dynamodbv2.model.TableStatus;
import com.amazonaws.services.dynamodbv2.model.WriteRequest;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
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
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

public class SparkHoodieGlobalDynamoDBIndex extends SparkHoodieDynamoDBIndex {
  private static Set<TableStatus> availableStatuses;
  private static final Logger LOG = LogManager.getLogger(SparkHoodieGlobalDynamoDBIndex.class);
  private static AmazonDynamoDBAsync dynamoDB;
  private static String ddbRecordKey = "recordKey";
  private static String ddbPartitionPath = "partitionPath";
  private static String ddbFileId = "fileId";
  private static String ddbCommitTs = "commitTs";
  private static List<Future<BatchWriteItemResult>> writeItemFuture = new ArrayList<>();

  static {
    availableStatuses = new HashSet<>();
    availableStatuses.add(TableStatus.ACTIVE);
    availableStatuses.add(TableStatus.UPDATING);
  }

  public SparkHoodieGlobalDynamoDBIndex(HoodieWriteConfig hoodieWriteConfig) {
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
      boolean updatePartitionPath = config.getDynamoDBIndexUpdatePartitionPath();

      // grab DynamoDB connection
      if (this.dynamoDB == null) {
        this.dynamoDB = getDynamoDBClient();
      }

      List<HoodieRecord<R>> taggedRecords = new ArrayList<>();
      List<Map<String, AttributeValue>> itemsToGet = new ArrayList<>();
      List<Future<BatchGetItemResult>> getItemFuture = new ArrayList<>();
      try {
        List<HoodieRecord> currentBatchOfRecords = new LinkedList<>();
        // Do the tagging.
        while (hoodieRecordIterator.hasNext()) {
          Map<String, KeysAndAttributes> keysAndAttributes = new HashMap<>();
          HoodieRecord rec = hoodieRecordIterator.next();
          currentBatchOfRecords.add(rec);
          Map<String, AttributeValue> key = new HashMap<>();
          key.put(dynamoDBPartitionKey, new AttributeValue().withS(rec.getRecordKey()));
          itemsToGet.add(key);
          if (hoodieRecordIterator.hasNext() && itemsToGet.size() < batchSize) {
            continue;
          }
          keysAndAttributes.put(tableName, new KeysAndAttributes().withKeys(itemsToGet));
          getItemFuture.add(dynamoDB.batchGetItemAsync(keysAndAttributes));
          itemsToGet.clear();
        }
        if (getItemFuture.isEmpty()) {
          currentBatchOfRecords.stream().forEach(i -> taggedRecords.add(i));
          currentBatchOfRecords.clear();
          return taggedRecords.iterator();
        }
        for (Future<BatchGetItemResult> result : getItemFuture) {
          BatchGetItemResult responses = result.get(10,TimeUnit.SECONDS);
          if (responses.getResponses().get(tableName).size() == 0) {
            continue;
          }
          List<Map<String, AttributeValue>> items = responses.getResponses().get(tableName);
          for (Map<String, AttributeValue> item : items) {
            if (item.isEmpty()) {
              continue;
            }
            HoodieRecord currentRecord = currentBatchOfRecords.stream()
                .filter(x -> x.getRecordKey().equals(item.get(ddbRecordKey).getS())).reduce((a, b) -> {
                  throw new RuntimeException("Record not found");
                }).get();
            currentBatchOfRecords.removeIf(x -> x.getRecordKey().equals(item.get(ddbRecordKey).getS()));
            String keyFromResult = item.get(ddbRecordKey).getS();
            String commitTs = item.get(ddbCommitTs).getS();
            String fileId = item.get(ddbFileId).getS();
            String partitionPath = item.get(ddbPartitionPath).getS();
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
          currentBatchOfRecords.clear();
        }
      } catch (HoodieIndexException e) {
        throw new HoodieIndexException("Failed to Tag indexed locations because of exception with DynamoDB Client", e);
      }
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
      final long startTimeForWriteTask = DateTime.now().getMillis();
      LOG.info("start time of write task for this task: " + startTimeForWriteTask);

      try {
        while (statusIterator.hasNext()) {
          WriteStatus writeStatus = statusIterator.next();
          try {
            List<WriteRequest> writeRequests = new ArrayList<>();
            long numOfInserts = writeStatus.getStat().getNumInserts();
            LOG.info("Num of inserts in this WriteStatus: " + numOfInserts);
            LOG.info("Total inserts in this job: " + this.totalNumInserts);
            for (HoodieRecord rec : writeStatus.getWrittenRecords()) {
              if (!writeStatus.isErrored(rec.getKey())) {
                Option<HoodieRecordLocation> loc = rec.getNewLocation();
                if (loc.isPresent()) {
                  if (rec.getCurrentLocation() != null) {
                    // This is an update, no need to update index
                    continue;
                  }
                  Map<String, AttributeValue> attributes = new HashMap<>();
                  attributes.put(ddbRecordKey, new AttributeValue().withS(rec.getRecordKey()));
                  attributes.put(ddbPartitionPath, new AttributeValue().withS(rec.getPartitionPath()));
                  attributes.put(ddbFileId, new AttributeValue().withS(loc.get().getFileId()));
                  attributes.put(ddbCommitTs, new AttributeValue().withS(loc.get().getInstantTime()));
                  writeRequests.add(new WriteRequest(new PutRequest(attributes)));
                }
              }
              if (writeRequests.size() < 24) {
                // DynamoDB batchWrite operation has a limit of 25 items per batch.
                continue;
              }
              putWriteRequests(writeRequests);
              writeRequests = new ArrayList<>();
            }
            putWriteRequests(writeRequests);
            for (final Future<BatchWriteItemResult> result : writeItemFuture) {
              try {
                result.get(10, TimeUnit.SECONDS);
              } catch (final Exception ex) {
                LOG.error("The data in this write request haven't executed due to some reason.", ex);
              }
            }
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

  private void putWriteRequests(List<WriteRequest> writeItemRequests) {
    Map<String, List<WriteRequest>> requests = new HashMap<>();
    requests.put(tableName, writeItemRequests);
    writeItemFuture.add(dynamoDB.batchWriteItemAsync(requests));
  }

  @Override
  public boolean isGlobal() {
    return true;
  }

  @Override
  public boolean rollbackCommit(String instantTime) {
    return true;
  }
}