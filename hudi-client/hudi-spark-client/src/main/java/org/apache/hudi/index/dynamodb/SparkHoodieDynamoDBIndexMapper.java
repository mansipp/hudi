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

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;

@DynamoDBTable(tableName = "hudi_index_test")
public class SparkHoodieDynamoDBIndexMapper {

  public String dynamoRecordKey;
  public String dynamoCommitTs;
  public String dynamoFileId;
  public String dynamoPartitionPath;
  @DynamoDBHashKey(attributeName = "recordKey")
  public String getDynamoRecordKey() {
    return dynamoRecordKey;
  }

  public void setDynamoRecordKey(String dynamoRecordKey) {
    this.dynamoRecordKey = dynamoRecordKey;
  }

  @DynamoDBAttribute(attributeName = "commitTs")
  public String getDynamoCommitTs() {
    return dynamoCommitTs;
  }

  public void setDynamoCommitTs(String dynamoCommitTs) {
    this.dynamoCommitTs = dynamoCommitTs;
  }

  @DynamoDBAttribute(attributeName = "fileId")
  public String getDynamoFileId() {
    return dynamoFileId;
  }

  public void setDynamoFileId(String dynamoFileId) {
    this.dynamoFileId = dynamoFileId;
  }

  @DynamoDBAttribute(attributeName = "partitionPath")
  public String getDynamoPartitionPath() {
    return dynamoPartitionPath;
  }

  public void setDynamoPartitionPath(String dynamoPartitionPath) {
    this.dynamoPartitionPath = dynamoPartitionPath;
  }
}
