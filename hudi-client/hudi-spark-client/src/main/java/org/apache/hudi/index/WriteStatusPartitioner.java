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

package org.apache.hudi.index;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.spark.Partitioner;

import java.util.Map;

/**
 * Partitions each WriteStatus with inserts into a unique single partition. WriteStatus without inserts will be
 * assigned to random partitions. This partitioner will be useful to utilize max parallelism with spark operations
 * that are based on inserts in each WriteStatus.
 */
public class WriteStatusPartitioner extends Partitioner {
  private static final Logger LOG = LogManager.getLogger(WriteStatusPartitioner.class);
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