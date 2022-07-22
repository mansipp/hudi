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

package org.apache.hudi.config;

import com.amazonaws.regions.RegionUtils;
import com.amazonaws.services.dynamodbv2.model.BillingMode;
import org.apache.hudi.common.config.ConfigClassProperty;
import org.apache.hudi.common.config.ConfigGroups;
import org.apache.hudi.common.config.ConfigProperty;
import org.apache.hudi.common.config.HoodieConfig;
import org.apache.hudi.common.util.Option;

import java.util.Properties;

@ConfigClassProperty(name = "DynamoDB Index Configs",
    groupName = ConfigGroups.Names.WRITE_CLIENT,
    description = "Configurations that control indexing behavior "
        + "(when DynamoDB based indexing is enabled), which tags incoming "
        + "records as either inserts or updates to older records.")

public class HoodieDynamoDBIndexConfig extends HoodieConfig {

  public static final String DYNAMODB_BASED_INDEX_PROPERTY_PREFIX = "hoodie.index.dynamodb.";

  public static final ConfigProperty<String> DYNAMODB_INDEX_TABLE_NAME = ConfigProperty
      .key(DYNAMODB_BASED_INDEX_PROPERTY_PREFIX + "table")
      .noDefaultValue()
      .sinceVersion("0.12.1")
      .withDocumentation("For DynamoDB based indexing, DynamoDB table name will be used as an index for Hudi table.");

  public static final ConfigProperty<String> DYNAMODB_INDEX_REGION = ConfigProperty
      .key(DYNAMODB_BASED_INDEX_PROPERTY_PREFIX + "region")
      .defaultValue("us-east-1")
      .sinceVersion("0.12.1")
      .withInferFunction(cfg -> {
        String regionFromEnv = System.getenv("AWS_REGION");
        if (regionFromEnv != null) {
          return Option.of(RegionUtils.getRegion(regionFromEnv).getName());
        }
        return Option.empty();
      })
      .withDocumentation("For DynamoDB based indexing, the region used in endpoint for Amazon DynamoDB service."
          + " Would try to first get it from AWS_REGION environment variable. If not find, by default use us-east-1");

  public static final ConfigProperty<String> DYNAMODB_INDEX_BILLING_MODE = ConfigProperty
      .key(DYNAMODB_BASED_INDEX_PROPERTY_PREFIX + "billing_mode")
      .defaultValue(BillingMode.PAY_PER_REQUEST.name())
      .sinceVersion("0.12.1")
      .withDocumentation("For DynamoDB based indexing, by default it is PAY_PER_REQUEST mode");

  public static final ConfigProperty<String> DYNAMODB_INDEX_READ_CAPACITY = ConfigProperty
      .key(DYNAMODB_BASED_INDEX_PROPERTY_PREFIX + "read_capacity")
      .defaultValue("20")
      .sinceVersion("0.12.1")
      .withDocumentation("For DynamoDB based indexing, read capacity units when using PROVISIONED billing mode");

  public static final ConfigProperty<String> DYNAMODB_INDEX_WRITE_CAPACITY = ConfigProperty
      .key(DYNAMODB_BASED_INDEX_PROPERTY_PREFIX + "write_capacity")
      .defaultValue("10")
      .sinceVersion("0.12.1")
      .withDocumentation("For DynamoDB based indexing, write capacity units when using PROVISIONED billing mode");

  public static final ConfigProperty<String> DYNAMODB_INDEX_TABLE_CREATION_TIMEOUT = ConfigProperty
      .key(DYNAMODB_BASED_INDEX_PROPERTY_PREFIX + "table_creation_timeout")
      .defaultValue(String.valueOf(10 * 60 * 1000))
      .sinceVersion("0.12.1")
      .withDocumentation("For DynamoDB based indexing, the maximum number of milliseconds to wait for creating DynamoDB table");

  public static final ConfigProperty<String> DYNAMODB_ENDPOINT_URL = ConfigProperty
      .key(DYNAMODB_BASED_INDEX_PROPERTY_PREFIX + "endpoint_url")
      .noDefaultValue()
      .sinceVersion("0.12.1")
      .withDocumentation("For DynamoDB based indexing, the url endpoint used for Amazon DynamoDB service."
          + " Useful for development with a local dynamodb instance.");

  public static final ConfigProperty<Boolean> DYNAMODB_INDEX_UPDATE_PARTITION_PATH_ENABLE = ConfigProperty
      .key(DYNAMODB_BASED_INDEX_PROPERTY_PREFIX + "update_partition_path")
      .defaultValue(false)
      .sinceVersion("0.12.1")
      .withDocumentation("Only applies if index type is DYNAMODB. "
          + "When an already existing record is upserted to a new partition compared to whats in storage, "
          + "this config when set, will delete old record in old partition "
          + "and will insert it as new record in new partition.");

  private HoodieDynamoDBIndexConfig() {
    super();
  }

  public static HoodieDynamoDBIndexConfig.Builder newBuilder() {
    return new HoodieDynamoDBIndexConfig.Builder();
  }

  public static class Builder {

    private final HoodieDynamoDBIndexConfig dynamoDBIndexConfig = new HoodieDynamoDBIndexConfig();

    public HoodieDynamoDBIndexConfig.Builder fromProperties(Properties props) {
      this.dynamoDBIndexConfig.getProps().putAll(props);
      return this;
    }

    public HoodieDynamoDBIndexConfig.Builder dynamodbTableName(String tableName) {
      dynamoDBIndexConfig.setValue(DYNAMODB_INDEX_TABLE_NAME, tableName);
      return this;
    }

    public HoodieDynamoDBIndexConfig.Builder dynamoDBIndexBillingMode(String billingMode) {
      dynamoDBIndexConfig.setValue(DYNAMODB_INDEX_BILLING_MODE, billingMode);
      return this;
    }

    public HoodieDynamoDBIndexConfig.Builder dynamoDBIndexReadCapacity(String readCapacity) {
      dynamoDBIndexConfig.setValue(DYNAMODB_INDEX_READ_CAPACITY, readCapacity);
      return this;
    }

    public HoodieDynamoDBIndexConfig.Builder dynamoDBIndexWriteCapacity(String writeCapacity) {
      dynamoDBIndexConfig.setValue(DYNAMODB_INDEX_WRITE_CAPACITY, writeCapacity);
      return this;
    }

    public HoodieDynamoDBIndexConfig.Builder dynamoDBIndexUpdatePartitionPathEnable(boolean updatePartitionPath) {
      dynamoDBIndexConfig.setValue(DYNAMODB_INDEX_UPDATE_PARTITION_PATH_ENABLE, String.valueOf(updatePartitionPath));
      return this;
    }

    public HoodieDynamoDBIndexConfig build() {
      dynamoDBIndexConfig.setDefaults(HoodieDynamoDBIndexConfig.class.getName());
      return dynamoDBIndexConfig;
    }
  }
}