"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[76683],{58278:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"hoodie_deltastreamer","title":"Streaming Ingestion","description":"DeltaStreamer","source":"@site/versioned_docs/version-0.9.0/hoodie_deltastreamer.md","sourceDirName":".","slug":"/hoodie_deltastreamer","permalink":"/cn/docs/0.9.0/hoodie_deltastreamer","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.9.0/hoodie_deltastreamer.md","tags":[],"version":"0.9.0","frontMatter":{"title":"Streaming Ingestion","keywords":["hudi","deltastreamer","hoodiedeltastreamer"]}}');var r=a(74848),o=a(28453);const n={title:"Streaming Ingestion",keywords:["hudi","deltastreamer","hoodiedeltastreamer"]},s=void 0,l={},c=[{value:"DeltaStreamer",id:"deltastreamer",level:2},{value:"MultiTableDeltaStreamer",id:"multitabledeltastreamer",level:2},{value:"Concurrency Control",id:"concurrency-control",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"deltastreamer",children:"DeltaStreamer"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"HoodieDeltaStreamer"})," utility (part of hudi-utilities-bundle) provides the way to ingest from different sources such as DFS or Kafka, with the following capabilities."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Exactly once ingestion of new events from Kafka, ",(0,r.jsx)(t.a,{href:"https://sqoop.apache.org/docs/1.4.2/SqoopUserGuide#_incremental_imports",children:"incremental imports"})," from Sqoop or output of ",(0,r.jsx)(t.code,{children:"HiveIncrementalPuller"})," or files under a DFS folder"]}),"\n",(0,r.jsx)(t.li,{children:"Support json, avro or a custom record types for the incoming data"}),"\n",(0,r.jsx)(t.li,{children:"Manage checkpoints, rollback & recovery"}),"\n",(0,r.jsxs)(t.li,{children:["Leverage Avro schemas from DFS or Confluent ",(0,r.jsx)(t.a,{href:"https://github.com/confluentinc/schema-registry",children:"schema registry"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Support for plugging in transformations"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Command line options describe capabilities in more detail"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"[hoodie]$ spark-submit --class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` --help\nUsage: <main class> [options]\nOptions:\n    --checkpoint\n      Resume Delta Streamer from this checkpoint.\n    --commit-on-errors\n      Commit even when some records failed to be written\n      Default: false\n    --compact-scheduling-minshare\n      Minshare for compaction as defined in\n      https://spark.apache.org/docs/latest/job-scheduling\n      Default: 0\n    --compact-scheduling-weight\n      Scheduling weight for compaction as defined in\n      https://spark.apache.org/docs/latest/job-scheduling\n      Default: 1\n    --continuous\n      Delta Streamer runs in continuous mode running source-fetch -> Transform\n      -> Hudi Write in loop\n      Default: false\n    --delta-sync-scheduling-minshare\n      Minshare for delta sync as defined in\n      https://spark.apache.org/docs/latest/job-scheduling\n      Default: 0\n    --delta-sync-scheduling-weight\n      Scheduling weight for delta sync as defined in\n      https://spark.apache.org/docs/latest/job-scheduling\n      Default: 1\n    --disable-compaction\n      Compaction is enabled for MoR table by default. This flag disables it\n      Default: false\n    --enable-hive-sync\n      Enable syncing to hive\n      Default: false\n    --filter-dupes\n      Should duplicate records from source be dropped/filtered out before\n      insert/bulk-insert\n      Default: false\n    --help, -h\n\n    --hoodie-conf\n      Any configuration that can be set in the properties file (using the CLI\n      parameter \"--propsFilePath\") can also be passed command line using this\n      parameter\n      Default: []\n    --max-pending-compactions\n      Maximum number of outstanding inflight/requested compactions. Delta Sync\n      will not happen unlessoutstanding compactions is less than this number\n      Default: 5\n    --min-sync-interval-seconds\n      the min sync interval of each sync in continuous mode\n      Default: 0\n    --op\n      Takes one of these values : UPSERT (default), INSERT (use when input is\n      purely new data/inserts to gain speed)\n      Default: UPSERT\n      Possible Values: [UPSERT, INSERT, BULK_INSERT]\n    --payload-class\n      subclass of HoodieRecordPayload, that works off a GenericRecord.\n      Implement your own, if you want to do something other than overwriting\n      existing value\n      Default: org.apache.hudi.common.model.OverwriteWithLatestAvroPayload\n    --props\n      path to properties file on localfs or dfs, with configurations for\n      hoodie client, schema provider, key generator and data source. For\n      hoodie client props, sane defaults are used, but recommend use to\n      provide basic things like metrics endpoints, hive configs etc. For\n      sources, referto individual classes, for supported properties.\n      Default: file:///Users/vinoth/bin/hoodie/src/test/resources/delta-streamer-config/dfs-source.properties\n    --schemaprovider-class\n      subclass of org.apache.hudi.utilities.schema.SchemaProvider to attach\n      schemas to input & target table data, built in options:\n      org.apache.hudi.utilities.schema.FilebasedSchemaProvider.Source (See\n      org.apache.hudi.utilities.sources.Source) implementation can implement\n      their own SchemaProvider. For Sources that return Dataset<Row>, the\n      schema is obtained implicitly. However, this CLI option allows\n      overriding the schemaprovider returned by Source.\n    --source-class\n      Subclass of org.apache.hudi.utilities.sources to read data. Built-in\n      options: org.apache.hudi.utilities.sources.{JsonDFSSource (default), \n      AvroDFSSource, AvroKafkaSource, CsvDFSSource, HiveIncrPullSource, \n      JdbcSource, JsonKafkaSource, ORCDFSSource, ParquetDFSSource, \n      S3EventsHoodieIncrSource, S3EventsSource, SqlSource}\n      Default: org.apache.hudi.utilities.sources.JsonDFSSource\n    --source-limit\n      Maximum amount of data to read from source. Default: No limit For e.g:\n      DFS-Source => max bytes to read, Kafka-Source => max events to read\n      Default: 9223372036854775807\n    --source-ordering-field\n      Field within source record to decide how to break ties between records\n      with same key in input data. Default: 'ts' holding unix timestamp of\n      record\n      Default: ts\n    --spark-master\n      spark master to use.\n      Default: local[2]\n  * --table-type\n      Type of table. COPY_ON_WRITE (or) MERGE_ON_READ\n  * --target-base-path\n      base path for the target hoodie table. (Will be created if did not exist\n      first time around. If exists, expected to be a hoodie table)\n  * --target-table\n      name of the target table in Hive\n    --transformer-class\n      subclass of org.apache.hudi.utilities.transform.Transformer. Allows\n      transforming raw source Dataset to a target Dataset (conforming to\n      target schema) before writing. Default : Not set. E:g -\n      org.apache.hudi.utilities.transform.SqlQueryBasedTransformer (which\n      allows a SQL query templated to be passed as a transformation function)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The tool takes a hierarchically composed property file and has pluggable interfaces for extracting data, key generation and providing schema. Sample configs for ingesting from kafka and dfs are\nprovided under ",(0,r.jsx)(t.code,{children:"hudi-utilities/src/test/resources/delta-streamer-config"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["For e.g: once you have Confluent Kafka, Schema registry up & running, produce some test data using (",(0,r.jsx)(t.a,{href:"https://docs.confluent.io/current/ksql/docs/tutorials/generate-custom-test-data",children:"impressions.avro"})," provided by schema-registry repo)"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"[confluent-5.0.0]$ bin/ksql-datagen schema=../impressions.avro format=avro topic=impressions key=impressionid\n"})}),"\n",(0,r.jsx)(t.p,{children:"and then ingest it as follows."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"[hoodie]$ spark-submit --class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` \\\n  --props file://${PWD}/hudi-utilities/src/test/resources/delta-streamer-config/kafka-source.properties \\\n  --schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n  --source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n  --source-ordering-field impresssiontime \\\n  --target-base-path file:\\/\\/\\/tmp/hudi-deltastreamer-op \\ \n  --target-table uber.impressions \\\n  --op BULK_INSERT\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In some cases, you may want to migrate your existing table into Hudi beforehand. Please refer to ",(0,r.jsx)(t.a,{href:"/docs/migration_guide",children:"migration guide"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"multitabledeltastreamer",children:"MultiTableDeltaStreamer"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"HoodieMultiTableDeltaStreamer"}),", a wrapper on top of ",(0,r.jsx)(t.code,{children:"HoodieDeltaStreamer"}),", enables one to ingest multiple tables at a single go into hudi datasets. Currently it only supports sequential processing of tables to be ingested and COPY_ON_WRITE storage type. The command line options for ",(0,r.jsx)(t.code,{children:"HoodieMultiTableDeltaStreamer"})," are pretty much similar to ",(0,r.jsx)(t.code,{children:"HoodieDeltaStreamer"})," with the only exception that you are required to provide table wise configs in separate files in a dedicated config folder. The following command line options are introduced"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"  * --config-folder\n    the path to the folder which contains all the table wise config files\n    --base-path-prefix\n    this is added to enable users to create all the hudi datasets for related tables under one path in FS. The datasets are then created under the path - <base_path_prefix>/<database>/<table_to_be_ingested>. However you can override the paths for every table by setting the property hoodie.deltastreamer.ingestion.targetBasePath\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The following properties are needed to be set properly to ingest data using ",(0,r.jsx)(t.code,{children:"HoodieMultiTableDeltaStreamer"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"hoodie.deltastreamer.ingestion.tablesToBeIngested\n  comma separated names of tables to be ingested in the format <database>.<table>, for example db1.table1,db1.table2\nhoodie.deltastreamer.ingestion.targetBasePath\n  if you wish to ingest a particular table in a separate path, you can mention that path here\nhoodie.deltastreamer.ingestion.<database>.<table>.configFile\n  path to the config file in dedicated config folder which contains table overridden properties for the particular table to be ingested.\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Sample config files for table wise overridden properties can be found under ",(0,r.jsx)(t.code,{children:"hudi-utilities/src/test/resources/delta-streamer-config"}),". The command to run ",(0,r.jsx)(t.code,{children:"HoodieMultiTableDeltaStreamer"})," is also similar to how you run ",(0,r.jsx)(t.code,{children:"HoodieDeltaStreamer"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"[hoodie]$ spark-submit --class org.apache.hudi.utilities.deltastreamer.HoodieMultiTableDeltaStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` \\\n  --props file://${PWD}/hudi-utilities/src/test/resources/delta-streamer-config/kafka-source.properties \\\n  --config-folder file://tmp/hudi-ingestion-config \\\n  --schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n  --source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n  --source-ordering-field impresssiontime \\\n  --base-path-prefix file:\\/\\/\\/tmp/hudi-deltastreamer-op \\ \n  --target-table uber.impressions \\\n  --op BULK_INSERT\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For detailed information on how to configure and use ",(0,r.jsx)(t.code,{children:"HoodieMultiTableDeltaStreamer"}),", please refer ",(0,r.jsx)(t.a,{href:"/blog/2020/08/22/ingest-multiple-tables-using-hudi",children:"blog section"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"concurrency-control",children:"Concurrency Control"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"HoodieDeltaStreamer"})," utility (part of hudi-utilities-bundle) provides ways to ingest from different sources such as DFS or Kafka, with the following capabilities."]}),"\n",(0,r.jsx)(t.p,{children:"Using optimistic_concurrency_control via delta streamer requires adding the above configs to the properties file that can be passed to the\njob. For example below, adding the configs to kafka-source.properties file and passing them to deltastreamer will enable optimistic concurrency.\nA deltastreamer job can then be triggered as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"[hoodie]$ spark-submit --class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` \\\n  --props file://${PWD}/hudi-utilities/src/test/resources/delta-streamer-config/kafka-source.properties \\\n  --schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n  --source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n  --source-ordering-field impresssiontime \\\n  --target-base-path file:\\/\\/\\/tmp/hudi-deltastreamer-op \\ \n  --target-table uber.impressions \\\n  --op BULK_INSERT\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Read more in depth about concurrency control in the ",(0,r.jsx)(t.a,{href:"/docs/concurrency_control",children:"concurrency control concepts"})," section"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>s});var i=a(96540);const r={},o=i.createContext(r);function n(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);