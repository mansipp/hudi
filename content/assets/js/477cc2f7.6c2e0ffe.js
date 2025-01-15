"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[26260],{20976:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"faq_writing_tables","title":"Writing Tables","description":"What are some ways to write a Hudi table?","source":"@site/docs/faq_writing_tables.md","sourceDirName":".","slug":"/faq_writing_tables","permalink":"/docs/next/faq_writing_tables","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/faq_writing_tables.md","tags":[],"version":"current","frontMatter":{"title":"Writing Tables","keywords":["hudi","writing","reading"]},"sidebar":"docs","previous":{"title":"Design & Concepts","permalink":"/docs/next/faq_design_and_concepts"},"next":{"title":"Reading Tables","permalink":"/docs/next/faq_reading_tables"}}');var r=i(74848),o=i(28453);const n={title:"Writing Tables",keywords:["hudi","writing","reading"]},s="Writing Tables FAQ",d={},l=[{value:"What are some ways to write a Hudi table?",id:"what-are-some-ways-to-write-a-hudi-table",level:3},{value:"How is a Hudi writer job deployed?",id:"how-is-a-hudi-writer-job-deployed",level:3},{value:"Can I implement my own logic for how input records are merged with record on storage?",id:"can-i-implement-my-own-logic-for-how-input-records-are-merged-with-record-on-storage",level:3},{value:"How do I delete records in the dataset using Hudi?",id:"how-do-i-delete-records-in-the-dataset-using-hudi",level:3},{value:"Should I need to worry about deleting all copies of the records in case of duplicates?",id:"should-i-need-to-worry-about-deleting-all-copies-of-the-records-in-case-of-duplicates",level:3},{value:"How does Hudi handle duplicate record keys in an input?",id:"how-does-hudi-handle-duplicate-record-keys-in-an-input",level:3},{value:"How can I pass hudi configurations to my spark writer job?",id:"how-can-i-pass-hudi-configurations-to-my-spark-writer-job",level:3},{value:"How to create Hive style partition folder structure?",id:"how-to-create-hive-style-partition-folder-structure",level:3},{value:"Can I register my Hudi table with Apache Hive metastore?",id:"can-i-register-my-hudi-table-with-apache-hive-metastore",level:3},{value:"What&#39;s Hudi&#39;s schema evolution story?",id:"whats-hudis-schema-evolution-story",level:3},{value:"What performance/ingest latency can I expect for Hudi writing?",id:"what-performanceingest-latency-can-i-expect-for-hudi-writing",level:3},{value:"What performance can I expect for Hudi reading/queries?",id:"what-performance-can-i-expect-for-hudi-readingqueries",level:3},{value:"How do I to avoid creating tons of small files?",id:"how-do-i-to-avoid-creating-tons-of-small-files",level:3},{value:"How do I use DeltaStreamer or Spark DataSource API to write to a Non-partitioned Hudi table ?",id:"how-do-i-use-deltastreamer-or-spark-datasource-api-to-write-to-a-non-partitioned-hudi-table-",level:3},{value:"How can I reduce table versions created by Hudi in AWS Glue Data Catalog/ metastore?",id:"how-can-i-reduce-table-versions-created-by-hudi-in-aws-glue-data-catalog-metastore",level:3},{value:"If there are failed writes in my timeline, do I see duplicates?",id:"if-there-are-failed-writes-in-my-timeline-do-i-see-duplicates",level:3},{value:"How are conflicts detected in Hudi between multiple writers?",id:"how-are-conflicts-detected-in-hudi-between-multiple-writers",level:3},{value:"Can single-writer inserts have duplicates?",id:"can-single-writer-inserts-have-duplicates",level:3},{value:"Can concurrent inserts cause duplicates?",id:"can-concurrent-inserts-cause-duplicates",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"writing-tables-faq",children:"Writing Tables FAQ"})}),"\n",(0,r.jsx)(t.h3,{id:"what-are-some-ways-to-write-a-hudi-table",children:"What are some ways to write a Hudi table?"}),"\n",(0,r.jsxs)(t.p,{children:["Typically, you obtain a set of partial updates/inserts from your source and issue ",(0,r.jsx)(t.a,{href:"/docs/write_operations/",children:"write operations"})," against a Hudi table. If you ingesting data from any of the standard sources like Kafka, or tailing DFS, the ",(0,r.jsx)(t.a,{href:"/docs/hoodie_streaming_ingestion#hudi-streamer",children:"delta streamer"})," tool is invaluable and provides an easy, self-managed solution to getting data written into Hudi. You can also write your own code to capture data from a custom source using the Spark datasource API and use a ",(0,r.jsx)(t.a,{href:"writing_data#spark-datasource-api",children:"Hudi datasource"})," to write into Hudi."]}),"\n",(0,r.jsx)(t.h3,{id:"how-is-a-hudi-writer-job-deployed",children:"How is a Hudi writer job deployed?"}),"\n",(0,r.jsx)(t.p,{children:"The nice thing about Hudi writing is that it just runs like any other spark job would on a YARN/Mesos or even a K8S cluster. So you could simply use the Spark UI to get visibility into write operations."}),"\n",(0,r.jsx)(t.h3,{id:"can-i-implement-my-own-logic-for-how-input-records-are-merged-with-record-on-storage",children:"Can I implement my own logic for how input records are merged with record on storage?"}),"\n",(0,r.jsx)(t.p,{children:"Here is the payload interface that is used in Hudi to represent any hudi record."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"public interface HoodieRecordPayload<T extends HoodieRecordPayload> extends Serializable {\n /**\n   * When more than one HoodieRecord have the same HoodieKey, this function combines them before attempting to insert/upsert by taking in a property map.\n   * Implementation can leverage the property to decide their business logic to do preCombine.\n   * @param another instance of another {@link HoodieRecordPayload} to be combined with.\n   * @param properties Payload related properties. For example pass the ordering field(s) name to extract from value in storage.\n   * @return the combined value\n   */\n  default T preCombine(T another, Properties properties);\n/**\n   * This methods lets you write custom merging/combining logic to produce new values as a function of current value on storage and whats contained\n   * in this object. Implementations can leverage properties if required.\n   * <p>\n   * eg:\n   * 1) You are updating counters, you may want to add counts to currentValue and write back updated counts\n   * 2) You may be reading DB redo logs, and merge them with current image for a database row on storage\n   * </p>\n   *\n   * @param currentValue Current value in storage, to merge/combine this payload with\n   * @param schema Schema used for record\n   * @param properties Payload related properties. For example pass the ordering field(s) name to extract from value in storage.\n   * @return new combined/merged value to be written back to storage. EMPTY to skip writing this record.\n   */\n  default Option<IndexedRecord> combineAndGetUpdateValue(IndexedRecord currentValue, Schema schema, Properties properties) throws IOException;\n   \n/**\n   * Generates an avro record out of the given HoodieRecordPayload, to be written out to storage. Called when writing a new value for the given\n   * HoodieKey, wherein there is no existing record in storage to be combined against. (i.e insert) Return EMPTY to skip writing this record.\n   * Implementations can leverage properties if required.\n   * @param schema Schema used for record\n   * @param properties Payload related properties. For example pass the ordering field(s) name to extract from value in storage.\n   * @return the {@link IndexedRecord} to be inserted.\n   */\n  @PublicAPIMethod(maturity = ApiMaturityLevel.STABLE)\n  default Option<IndexedRecord> getInsertValue(Schema schema, Properties properties) throws IOException;\n/**\n   * This method can be used to extract some metadata from HoodieRecordPayload. The metadata is passed to {@code WriteStatus.markSuccess()} and\n   * {@code WriteStatus.markFailure()} in order to compute some aggregate metrics using the metadata in the context of a write success or failure.\n   * @return the metadata in the form of Map<String, String> if any.\n   */\n  @PublicAPIMethod(maturity = ApiMaturityLevel.STABLE)\n  default Option<Map<String, String>> getMetadata() {\n    return Option.empty();\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["As you could see, (",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieRecordPayload.java",children:"combineAndGetUpdateValue(), getInsertValue()"}),") that control how the record on storage is combined with the incoming update/insert to generate the final value to be written back to storage. preCombine() is used to merge records within the same incoming batch."]}),"\n",(0,r.jsx)(t.h3,{id:"how-do-i-delete-records-in-the-dataset-using-hudi",children:"How do I delete records in the dataset using Hudi?"}),"\n",(0,r.jsxs)(t.p,{children:["GDPR has made deletes a must-have tool in everyone's data management toolbox. Hudi supports both soft and hard deletes. For details on how to actually perform them, see ",(0,r.jsx)(t.a,{href:"writing_data#deletes",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"should-i-need-to-worry-about-deleting-all-copies-of-the-records-in-case-of-duplicates",children:"Should I need to worry about deleting all copies of the records in case of duplicates?"}),"\n",(0,r.jsxs)(t.p,{children:["No. Hudi removes all the copies of a record key when deletes are issued. Here is the long form explanation - Sometimes accidental user errors can lead to duplicates introduced into a Hudi table by either ",(0,r.jsx)(t.a,{href:"faq_writing_tables#can-concurrent-inserts-cause-duplicates",children:"concurrent inserts"})," or by ",(0,r.jsx)(t.a,{href:"faq_writing_tables#can-single-writer-inserts-have-duplicates",children:"not deduping the input records"})," for an insert operation. However, using the right index (e.g., in the default ",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/index/simple/HoodieSimpleIndex.java#L116",children:"Simple Index"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/index/bloom/HoodieBloomIndex.java#L309",children:"Bloom Index"}),"), any subsequent updates and deletes are applied to all copies of the same primary key. This is because the indexing phase identifies records of a primary key in all locations.\xa0 So deletes in Hudi remove all copies of the same primary key, i.e., duplicates, and comply with GDPR or CCPA requirements.\xa0 Here are two examples ",(0,r.jsx)(t.a,{href:"https://gist.github.com/yihua/6eb11ce3f888a71935dbf21c77199a48",children:"1"}),", ",(0,r.jsx)(t.a,{href:"https://gist.github.com/yihua/e3afe0f34400e60f81f6da925560118e",children:"2"})," demonstrating that duplicates are properly deleted from a Hudi table. Hudi is adding ",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/pull/8107",children:"auto key generation"}),", which will remove the burden of key generation from the user for insert workloads."]}),"\n",(0,r.jsx)(t.h3,{id:"how-does-hudi-handle-duplicate-record-keys-in-an-input",children:"How does Hudi handle duplicate record keys in an input?"}),"\n",(0,r.jsxs)(t.p,{children:["When issuing an ",(0,r.jsx)(t.code,{children:"upsert"})," operation on a table and the batch of records provided contains multiple entries for a given key, then all of them are reduced into a single final value by repeatedly calling payload class's ",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/d3edac4612bde2fa9deca9536801dbc48961fb95/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieRecordPayload.java#L40",children:"preCombine()"})," method . By default, we pick the record with the greatest value (determined by calling .compareTo()) giving latest-write-wins style semantics. ",(0,r.jsx)(t.a,{href:"faq_writing_tables#can-i-implement-my-own-logic-for-how-input-records-are-merged-with-record-on-storage",children:"This FAQ entry"})," shows the interface for HoodieRecordPayload if you are interested."]}),"\n",(0,r.jsxs)(t.p,{children:["For an insert or bulk_insert operation, no such pre-combining is performed. Thus, if your input contains duplicates, the table would also contain duplicates. If you don't want duplicate records either issue an ",(0,r.jsx)(t.strong,{children:"upsert"})," or consider specifying option to de-duplicate input in either datasource using ",(0,r.jsx)(t.a,{href:"/docs/configurations#hoodiedatasourcewriteinsertdropduplicates",children:(0,r.jsx)(t.code,{children:"hoodie.datasource.write.insert.drop.duplicates"})})," & ",(0,r.jsx)(t.a,{href:"/docs/configurations/#hoodiecombinebeforeinsert",children:(0,r.jsx)(t.code,{children:"hoodie.combine.before.insert"})})," or in deltastreamer using ",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/d3edac4612bde2fa9deca9536801dbc48961fb95/hudi-utilities/src/main/java/org/apache/hudi/utilities/deltastreamer/HoodieDeltaStreamer.java#L229",children:(0,r.jsx)(t.code,{children:"--filter-dupes"})}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"how-can-i-pass-hudi-configurations-to-my-spark-writer-job",children:"How can I pass hudi configurations to my spark writer job?"}),"\n",(0,r.jsxs)(t.p,{children:["Hudi configuration options covering the datasource and low level Hudi write client (which both deltastreamer & datasource internally call) are ",(0,r.jsx)(t.a,{href:"/docs/configurations/",children:"here"}),". Invoking ",(0,r.jsx)(t.em,{children:"--help"})," on any tool such as DeltaStreamer would print all the usage options. A lot of the options that control upsert, file sizing behavior are defined at the write client level and below is how we pass them to different options available for writing data."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'For Spark DataSource, you can use the "options" API of DataFrameWriter to pass in these configs.'}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scala",children:'inputDF.write().format("org.apache.hudi")\n  .options(clientOpts) // any of the Hudi client opts can be passed in as well\n  .option("hoodie.datasource.write.recordkey.field", "_row_key")\n  ...\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["When using ",(0,r.jsx)(t.code,{children:"HoodieWriteClient"})," directly, you can simply construct HoodieWriteConfig object with the configs in the link you mentioned."]}),"\n",(0,r.jsxs)(t.li,{children:['When using HoodieDeltaStreamer tool to ingest, you can set the configs in properties file and pass the file as the cmdline argument "',(0,r.jsx)(t.em,{children:"--props"}),'"']}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-create-hive-style-partition-folder-structure",children:"How to create Hive style partition folder structure?"}),"\n",(0,r.jsx)(t.p,{children:"By default Hudi creates the partition folders with just the partition values, but if would like to create partition folders similar to the way Hive will generate the structure, with paths that contain key value pairs, like country=us/\u2026 or datestr=2021-04-20. This is Hive style (or format) partitioning. The paths include both the names of the partition keys and the values that each path represents."}),"\n",(0,r.jsx)(t.p,{children:"To enable hive style partitioning, you need to add this hoodie config when you write your data:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plain",children:"hoodie.datasource.write.hive_style_partitioning: true\n"})}),"\n",(0,r.jsx)(t.h3,{id:"can-i-register-my-hudi-table-with-apache-hive-metastore",children:"Can I register my Hudi table with Apache Hive metastore?"}),"\n",(0,r.jsxs)(t.p,{children:["Yes. This can be performed either via the standalone ",(0,r.jsx)(t.a,{href:"/docs/syncing_metastore#hive-sync-tool",children:"Hive Sync tool"})," or using options in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/d3edac4612bde2fa9deca9536801dbc48961fb95/docker/demo/sparksql-incremental.commands#L50",children:"Hudi Streamer"})," tool or ",(0,r.jsx)(t.a,{href:"/docs/configurations#hoodiedatasourcehive_syncenable",children:"datasource"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"whats-hudis-schema-evolution-story",children:"What's Hudi's schema evolution story?"}),"\n",(0,r.jsxs)(t.p,{children:["Hudi uses Avro as the internal canonical representation for records, primarily due to its nice ",(0,r.jsx)(t.a,{href:"https://docs.confluent.io/platform/current/schema-registry/avro.html",children:"schema compatibility & evolution"})," properties. This is a key aspect of having reliability in your ingestion or ETL pipelines. As long as the schema passed to Hudi (either explicitly in Hudi Streamer schema provider configs or implicitly by Spark Datasource's Dataset schemas) is backwards compatible (e.g no field deletes, only appending new fields to schema), Hudi will seamlessly handle read/write of old and new data and also keep the Hive schema up-to date."]}),"\n",(0,r.jsxs)(t.p,{children:["Starting 0.11.0, Spark SQL DDL support (experimental) was added for Spark 3.1.x and Spark 3.2.1 via ALTER TABLE syntax. Please refer to the ",(0,r.jsx)(t.a,{href:"/docs/schema_evolution",children:"schema evolution guide"})," for more details on  Schema-on-read for Spark.."]}),"\n",(0,r.jsx)(t.h3,{id:"what-performanceingest-latency-can-i-expect-for-hudi-writing",children:"What performance/ingest latency can I expect for Hudi writing?"}),"\n",(0,r.jsxs)(t.p,{children:["The speed at which you can write into Hudi depends on the ",(0,r.jsx)(t.a,{href:"/docs/write_operations",children:"write operation"})," and some trade-offs you make along the way like file sizing. Just like how databases incur overhead over direct/raw file I/O on disks, Hudi operations may have overhead from supporting database like features compared to reading/writing raw DFS files. That said, Hudi implements advanced techniques from database literature to keep these minimal. User is encouraged to have this perspective when trying to reason about Hudi performance. As the saying goes : there is no free lunch (not yet atleast)"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Storage Type"}),(0,r.jsx)(t.th,{children:"Type of workload"}),(0,r.jsx)(t.th,{children:"Performance"}),(0,r.jsx)(t.th,{children:"Tips"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"copy on write"}),(0,r.jsx)(t.td,{children:"bulk_insert"}),(0,r.jsx)(t.td,{children:"Should match vanilla spark writing + an additional sort to properly size files"}),(0,r.jsxs)(t.td,{children:["properly size ",(0,r.jsx)(t.a,{href:"/docs/configurations#hoodiebulkinsertshuffleparallelism",children:"bulk insert parallelism"})," to get right number of files. Use insert if you want this auto tuned. Configure ",(0,r.jsx)(t.a,{href:"/docs/configurations#hoodiebulkinsertsortmode",children:"hoodie.bulkinsert.sort.mode"})," for better file sizes at the cost of memory. The default value ",(0,r.jsx)(t.code,{children:"NONE"})," offers the fastest performance and matches ",(0,r.jsx)(t.code,{children:"spark.write.parquet()"})," in terms of number of files, overheads."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"copy on write"}),(0,r.jsx)(t.td,{children:"insert"}),(0,r.jsx)(t.td,{children:"Similar to bulk insert, except the file sizes are auto tuned requiring input to be cached into memory and custom partitioned."}),(0,r.jsxs)(t.td,{children:["Performance would be bound by how parallel you can write the ingested data. Tune ",(0,r.jsx)(t.a,{href:"/docs/configurations#hoodieinsertshuffleparallelism",children:"this limit"})," up, if you see that writes are happening from only a few executors."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"copy on write"}),(0,r.jsx)(t.td,{children:"upsert/ de-duplicate & insert"}),(0,r.jsx)(t.td,{children:"Both of these would involve index lookup. Compared to naively using Spark (or similar framework)'s JOIN to identify the affected records, Hudi indexing is often 7-10x faster as long as you have ordered keys (discussed below) or less than 50% updates. Compared to naively overwriting entire partitions, Hudi write can be several magnitudes faster depending on how many files in a given partition is actually updated. For example, if a partition has 1000 files out of which only 100 is dirtied every ingestion run, then Hudi would only read/merge a total of 100 files and thus 10x faster than naively rewriting entire partition."}),(0,r.jsxs)(t.td,{children:["Ultimately performance would be bound by how quickly we can read and write a parquet file and that depends on the size of the parquet file, configured ",(0,r.jsx)(t.a,{href:"/docs/configurations#hoodieparquetmaxfilesize",children:"here"}),". Also be sure to properly tune your ",(0,r.jsx)(t.a,{href:"/docs/configurations#INDEX",children:"bloom filters"}),". ",(0,r.jsx)(t.a,{href:"https://issues.apache.org/jira/browse/HUDI-56",children:"HUDI-56"})," will auto-tune this."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"merge on read"}),(0,r.jsx)(t.td,{children:"bulk insert"}),(0,r.jsxs)(t.td,{children:["Currently new data only goes to parquet files and thus performance here should be similar to copy on write bulk insert. This has the nice side-effect of getting data into parquet directly for query performance. ",(0,r.jsx)(t.a,{href:"https://issues.apache.org/jira/browse/HUDI-86",children:"HUDI-86"})," will add support for logging inserts directly and this up drastically."]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"merge on read"}),(0,r.jsx)(t.td,{children:"insert"}),(0,r.jsx)(t.td,{children:"Similar to above"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"merge on read"}),(0,r.jsx)(t.td,{children:"upsert/ de-duplicate & insert"}),(0,r.jsx)(t.td,{children:"Indexing performance would remain the same as copy-on-write, while ingest latency for updates (costliest I/O operation in copy on write) are sent to log files and thus with asynchronous compaction provides very good ingest performance with low write amplification."}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Like with many typical system that manage time-series data, Hudi performs much better if your keys have a timestamp prefix or monotonically increasing/decreasing. You can almost always achieve this. Even if you have UUID keys, you can follow tricks like ",(0,r.jsx)(t.a,{href:"https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/",children:"this"})," to get keys that are ordered. See also ",(0,r.jsx)(t.a,{href:"/docs/tuning-guide",children:"Tuning Guide"})," for more tips on JVM and other configurations."]}),"\n",(0,r.jsx)(t.h3,{id:"what-performance-can-i-expect-for-hudi-readingqueries",children:"What performance can I expect for Hudi reading/queries?"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"For ReadOptimized views, you can expect the same best in-class columnar query performance as a standard parquet table in Hive/Spark/Presto"}),"\n",(0,r.jsx)(t.li,{children:"For incremental views, you can expect speed up relative to how much data usually changes in a given time window and how much time your entire scan takes. For e.g, if only 100 files changed in the last hour in a partition of 1000 files, then you can expect a speed of 10x using incremental pull in Hudi compared to full scanning the partition to find out new data."}),"\n",(0,r.jsx)(t.li,{children:"For real time views, you can expect performance similar to the same avro backed table in Hive/Spark/Presto"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"how-do-i-to-avoid-creating-tons-of-small-files",children:"How do I to avoid creating tons of small files?"}),"\n",(0,r.jsx)(t.p,{children:"A key design decision in Hudi was to avoid creating small files and always write properly sized files."}),"\n",(0,r.jsx)(t.p,{children:"There are 2 ways to avoid creating tons of small files in Hudi and both of them have different trade-offs:"}),"\n",(0,r.jsxs)(t.p,{children:["a) ",(0,r.jsx)(t.strong,{children:"Auto Size small files during ingestion"}),": This solution trades ingest/writing time to keep queries always efficient. Common approaches to writing very small files and then later stitching them together only solve for system scalability issues posed by small files and also let queries slow down by exposing small files to them anyway."]}),"\n",(0,r.jsxs)(t.p,{children:["Hudi has the ability to maintain a configured target file size, when performing ",(0,r.jsx)(t.strong,{children:"upsert/insert"})," operations. (Note: ",(0,r.jsx)(t.strong,{children:"bulk_insert"})," operation does not provide this functionality and is designed as a simpler replacement for normal ",(0,r.jsx)(t.code,{children:"spark.write.parquet"})," )"]}),"\n",(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.strong,{children:"copy-on-write"}),", this is as simple as configuring the ",(0,r.jsx)(t.a,{href:"/docs/configurations#hoodieparquetmaxfilesize",children:"maximum size for a base/parquet file"})," and the ",(0,r.jsx)(t.a,{href:"/docs/configurations#hoodieparquetsmallfilelimit",children:"soft limit"})," below which a file should be considered a small file. For the initial bootstrap to Hudi table, tuning record size estimate is also important to ensure sufficient records are bin-packed in a parquet file. For subsequent writes, Hudi automatically uses average record size based on previous commit. Hudi will try to add enough records to a small file at write time to get it to the configured maximum limit. For e.g , with ",(0,r.jsx)(t.code,{children:"hoodie.parquet.max.file.size=100MB"})," and hoodie.parquet.small.file.limit=120MB, Hudi will pick all files < 100MB and try to get them upto 120MB."]}),"\n",(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.strong,{children:"merge-on-read"}),", there are few more configs to set. MergeOnRead works differently for different INDEX choices."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Indexes with ",(0,r.jsx)(t.strong,{children:"canIndexLogFiles = true"})," : Inserts of new data go directly to log files. In this case, you can configure the ",(0,r.jsx)(t.a,{href:"/docs/configurations#hoodielogfilemaxsize",children:"maximum log size"})," and a ",(0,r.jsx)(t.a,{href:"/docs/configurations#hoodielogfiletoparquetcompressionratio",children:"factor"})," that denotes reduction in size when data moves from avro to parquet files."]}),"\n",(0,r.jsxs)(t.li,{children:["Indexes with ",(0,r.jsx)(t.strong,{children:"canIndexLogFiles = false"})," : Inserts of new data go only to parquet files. In this case, the same configurations as above for the COPY_ON_WRITE case applies."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"NOTE : In either case, small files will be auto sized only if there is no PENDING compaction or associated log file for that particular file slice. For example, for case 1: If you had a log file and a compaction C1 was scheduled to convert that log file to parquet, no more inserts can go into that log file. For case 2: If you had a parquet file and an update ended up creating an associated delta log file, no more inserts can go into that parquet file. Only after the compaction has been performed and there are NO log files associated with the base parquet file, can new inserts be sent to auto size that parquet file."}),"\n",(0,r.jsxs)(t.p,{children:["b) ",(0,r.jsx)(t.a,{href:"/blog/2021/01/27/hudi-clustering-intro",children:(0,r.jsx)(t.strong,{children:"Clustering"})})," : This is a feature in Hudi to group small files into larger ones either synchronously or asynchronously. Since first solution of auto-sizing small files has a tradeoff on ingestion speed (since the small files are sized during ingestion), if your use-case is very sensitive to ingestion latency where you don't want to compromise on ingestion speed which may end up creating a lot of small files, clustering comes to the rescue. Clustering can be scheduled through the ingestion job and an asynchronus job can stitch small files together in the background to generate larger files. NOTE that during this, ingestion can continue to run concurrently."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Please note that Hudi always creates immutable files on disk. To be able to do auto-sizing or clustering, Hudi will always create a newer version of the smaller file, resulting in 2 versions of the same file. The cleaner service will later kick in and delte the older version small file and keep the latest one."})}),"\n",(0,r.jsx)(t.h3,{id:"how-do-i-use-deltastreamer-or-spark-datasource-api-to-write-to-a-non-partitioned-hudi-table-",children:"How do I use DeltaStreamer or Spark DataSource API to write to a Non-partitioned Hudi table ?"}),"\n",(0,r.jsx)(t.p,{children:"Hudi supports writing to non-partitioned tables. For writing to a non-partitioned Hudi table and performing hive table syncing, you need to set the below configurations in the properties passed:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plain",children:"hoodie.datasource.write.keygenerator.class=org.apache.hudi.keygen.NonpartitionedKeyGenerator\nhoodie.datasource.hive_sync.partition_extractor_class=org.apache.hudi.hive.NonPartitionedExtractor\n"})}),"\n",(0,r.jsx)(t.h3,{id:"how-can-i-reduce-table-versions-created-by-hudi-in-aws-glue-data-catalog-metastore",children:"How can I reduce table versions created by Hudi in AWS Glue Data Catalog/ metastore?"}),"\n",(0,r.jsx)(t.p,{children:"With each commit, Hudi creates a new table version in the metastore. This can be reduced by setting the option"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/configurations#hoodiedatasourcemeta_syncconditionsync",children:"hoodie.datasource.meta_sync.condition.sync"})," to true."]}),"\n",(0,r.jsx)(t.p,{children:"This will ensure that hive sync is triggered on schema or partitions changes."}),"\n",(0,r.jsx)(t.h3,{id:"if-there-are-failed-writes-in-my-timeline-do-i-see-duplicates",children:"If there are failed writes in my timeline, do I see duplicates?"}),"\n",(0,r.jsxs)(t.p,{children:["No, Hudi does not expose uncommitted files/blocks to the readers. Further, Hudi strives to automatically manage the table for the user, by actively cleaning up files created from failed/aborted writes. See ",(0,r.jsx)(t.a,{href:"/blog/2021/08/18/improving-marker-mechanism/",children:"marker mechanism"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"how-are-conflicts-detected-in-hudi-between-multiple-writers",children:"How are conflicts detected in Hudi between multiple writers?"}),"\n",(0,r.jsxs)(t.p,{children:["Hudi employs ",(0,r.jsx)(t.a,{href:"concurrency_control",children:"optimistic concurrency control"})," between writers, while implementing MVCC based concurrency control between writers and the table services. Concurrent writers to the same table need to be configured with the same lock provider configuration, to safely perform writes. By default (implemented in \u201c",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/client/transaction/SimpleConcurrentFileWritesConflictResolutionStrategy.java",children:"SimpleConcurrentFileWritesConflictResolutionStrategy"}),"\u201d), Hudi allows multiple writers to concurrently write data and commit to the timeline if there is no conflicting writes to the same underlying file group IDs. This is achieved by holding a lock, checking for changes that modified the same file IDs. Hudi then supports a pluggable interface \u201c",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/client/transaction/ConflictResolutionStrategy.java",children:"ConflictResolutionStrategy"}),"\u201d that determines how conflicts are handled. By default, the later conflicting write is aborted. Hudi also support eager conflict detection to help speed up conflict detection and release cluster resources back early to reduce costs."]}),"\n",(0,r.jsx)(t.h3,{id:"can-single-writer-inserts-have-duplicates",children:"Can single-writer inserts have duplicates?"}),"\n",(0,r.jsxs)(t.p,{children:["By default, Hudi turns off key based de-duplication for INSERT/BULK_INSERT operations and thus the table could contain duplicates. If users believe, they have duplicates in inserts, they can either issue UPSERT or consider specifying the option to de-duplicate input in either datasource using ",(0,r.jsx)(t.a,{href:"/docs/configurations#hoodiedatasourcewriteinsertdropduplicates",children:(0,r.jsx)(t.code,{children:"hoodie.datasource.write.insert.drop.duplicates"})})," & ",(0,r.jsx)(t.a,{href:"/docs/configurations/#hoodiecombinebeforeinsert",children:(0,r.jsx)(t.code,{children:"hoodie.combine.before.insert"})})," or in deltastreamer using ",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/d3edac4612bde2fa9deca9536801dbc48961fb95/hudi-utilities/src/main/java/org/apache/hudi/utilities/deltastreamer/HoodieDeltaStreamer.java#L229",children:(0,r.jsx)(t.code,{children:"--filter-dupes"})}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"can-concurrent-inserts-cause-duplicates",children:"Can concurrent inserts cause duplicates?"}),"\n",(0,r.jsxs)(t.p,{children:["Yes. As mentioned before, the default conflict detection strategy only check for conflicting updates to the same file group IDs. In the case of concurrent inserts, inserted records end up creating new file groups and thus can go undetected. Most common workload patterns use multi-writer capability in the case of running ingestion of new data and concurrently backfilling/deleting older data, with NO overlap in the primary keys of the records.\xa0However, this can be implemented (or better yet contributed) by a new \u201c",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/client/transaction/ConflictResolutionStrategy.java",children:"ConflictResolutionStrategy"}),"\u201d, that reads out keys of new conflicting operations, to check the uncommitted data against other concurrent writes and then decide whether or not to commit/abort. This is rather a fine tradeoff between saving the additional cost of reading keys on most common workloads.\xa0Historically, users have preferred to take this into their control to save costs e.g we turned off de-duplication for inserts due to the same feedback. Hudi supports a pre-commit validator mechanism already where such tests can be authored as well."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>s});var a=i(96540);const r={},o=a.createContext(r);function n(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);