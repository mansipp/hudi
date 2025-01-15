"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[52282],{72785:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"querying_data","title":"Querying Data","description":"Conceptually, Hudi stores data physically once on DFS, while providing 3 different ways of querying, as explained before.","source":"@site/versioned_docs/version-0.11.0/querying_data.md","sourceDirName":".","slug":"/querying_data","permalink":"/cn/docs/0.11.0/querying_data","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.0/querying_data.md","tags":[],"version":"0.11.0","frontMatter":{"title":"Querying Data","keywords":["hudi","hive","spark","sql","presto"],"summary":"In this page, we go over how to enable SQL queries on Hudi built tables.","toc":true,"last_modified_at":"2019-12-30T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Streaming Ingestion","permalink":"/cn/docs/0.11.0/hoodie_deltastreamer"},"next":{"title":"Flink Setup","permalink":"/cn/docs/0.11.0/flink_configuration"}}');var i=r(74848),s=r(28453);const a={title:"Querying Data",keywords:["hudi","hive","spark","sql","presto"],summary:"In this page, we go over how to enable SQL queries on Hudi built tables.",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},d=void 0,l={},o=[{value:"Spark Datasource",id:"spark-datasource",level:2},{value:"Snapshot query",id:"spark-snap-query",level:3},{value:"Incremental query",id:"spark-incr-query",level:3},{value:"Spark SQL",id:"spark-sql",level:3},{value:"Copy On Write tables",id:"copy-on-write-tables",level:4},{value:"Merge On Read tables",id:"merge-on-read-tables",level:4},{value:"Flink SQL",id:"flink-sql",level:2},{value:"Hive",id:"hive",level:2},{value:"Incremental query",id:"incremental-query",level:3},{value:"PrestoDB",id:"prestodb",level:2},{value:"Trino",id:"trino",level:2},{value:"Impala (3.4 or later)",id:"impala-34-or-later",level:2},{value:"Snapshot Query",id:"snapshot-query",level:3},{value:"Redshift Spectrum",id:"redshift-spectrum",level:2},{value:"StarRocks",id:"starrocks",level:2},{value:"Support Matrix",id:"support-matrix",level:2},{value:"Copy-On-Write tables",id:"copy-on-write-tables-1",level:3},{value:"Merge-On-Read tables",id:"merge-on-read-tables-1",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Conceptually, Hudi stores data physically once on DFS, while providing 3 different ways of querying, as explained ",(0,i.jsx)(t.a,{href:"/docs/concepts#query-types",children:"before"}),".\nOnce the table is synced to the Hive metastore, it provides external Hive tables backed by Hudi's custom inputformats. Once the proper hudi\nbundle has been installed, the table can be queried by popular query engines like Hive, Spark SQL, Spark Datasource API and PrestoDB."]}),"\n",(0,i.jsx)(t.p,{children:"In sections, below we will discuss specific setup to access different query types from different query engines."}),"\n",(0,i.jsx)(t.h2,{id:"spark-datasource",children:"Spark Datasource"}),"\n",(0,i.jsxs)(t.p,{children:["The Spark Datasource API is a popular way of authoring Spark ETL pipelines. Hudi tables can be queried via the Spark datasource with a simple ",(0,i.jsx)(t.code,{children:"spark.read.parquet"}),".\nSee the ",(0,i.jsx)(t.a,{href:"/docs/quick-start-guide",children:"Spark Quick Start"})," for more examples of Spark datasource reading queries."]}),"\n",(0,i.jsxs)(t.p,{children:["To setup Spark for querying Hudi, see the ",(0,i.jsx)(t.a,{href:"/docs/0.11.0/query_engine_setup#spark",children:"Query Engine Setup"})," page."]}),"\n",(0,i.jsx)(t.h3,{id:"spark-snap-query",children:"Snapshot query"}),"\n",(0,i.jsx)(t.p,{children:"Retrieve the data table at the present point in time."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-scala",children:'val hudiIncQueryDF = spark\n     .read()\n     .format("hudi")\n     .option(DataSourceReadOptions.QUERY_TYPE_OPT_KEY(), DataSourceReadOptions.QUERY_TYPE_SNAPSHOT_OPT_VAL())\n     .load(tablePath) \n'})}),"\n",(0,i.jsx)(t.h3,{id:"spark-incr-query",children:"Incremental query"}),"\n",(0,i.jsxs)(t.p,{children:["Of special interest to spark pipelines, is Hudi's ability to support incremental queries, like below. A sample incremental query, that will obtain all records written since ",(0,i.jsx)(t.code,{children:"beginInstantTime"}),", looks like below.\nThanks to Hudi's support for record level change streams, these incremental pipelines often offer 10x efficiency over batch counterparts by only processing the changed records."]}),"\n",(0,i.jsxs)(t.p,{children:["The following snippet shows how to obtain all records changed after ",(0,i.jsx)(t.code,{children:"beginInstantTime"})," and run some SQL on them."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:' Dataset<Row> hudiIncQueryDF = spark.read()\n     .format("org.apache.hudi")\n     .option(DataSourceReadOptions.QUERY_TYPE_OPT_KEY(), DataSourceReadOptions.QUERY_TYPE_INCREMENTAL_OPT_VAL())\n     .option(DataSourceReadOptions.BEGIN_INSTANTTIME_OPT_KEY(), <beginInstantTime>)\n     .option(DataSourceReadOptions.INCR_PATH_GLOB_OPT_KEY(), "/year=2020/month=*/day=*") // Optional, use glob pattern if querying certain partitions\n     .load(tablePath); // For incremental query, pass in the root/base path of table\n     \nhudiIncQueryDF.createOrReplaceTempView("hudi_trips_incremental")\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n'})}),"\n",(0,i.jsxs)(t.p,{children:["For examples, refer to ",(0,i.jsx)(t.a,{href:"/docs/quick-start-guide#incremental-query",children:"Incremental Queries"})," in the Spark quickstart.\nPlease refer to ",(0,i.jsx)(t.a,{href:"/docs/configurations#SPARK_DATASOURCE",children:"configurations"})," section, to view all datasource options."]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, ",(0,i.jsx)(t.code,{children:"HoodieReadClient"})," offers the following functionality using Hudi's implicit indexing."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"API"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"read(keys)"}),(0,i.jsx)(t.td,{children:"Read out the data corresponding to the keys as a DataFrame, using Hudi's own index for faster lookup"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filterExists()"}),(0,i.jsxs)(t.td,{children:["Filter out already existing records from the provided ",(0,i.jsx)(t.code,{children:"RDD[HoodieRecord]"}),". Useful for de-duplication"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"checkExists(keys)"}),(0,i.jsx)(t.td,{children:"Check if the provided keys exist in a Hudi table"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"spark-sql",children:"Spark SQL"}),"\n",(0,i.jsx)(t.p,{children:"Once the Hudi tables have been registered to the Hive metastore, they can be queried using the Spark-Hive integration.\nBy default, Spark SQL will try to use its own parquet reader instead of Hive SerDe when reading from Hive metastore parquet tables.\nThe following are important settings to consider when querying COPY_ON_WRITE or MERGE_ON_READ tables."}),"\n",(0,i.jsx)(t.h4,{id:"copy-on-write-tables",children:"Copy On Write tables"}),"\n",(0,i.jsx)(t.p,{children:"For COPY_ON_WRITE tables, Spark's default parquet reader can be used to retain Sparks built-in optimizations for reading parquet files like vectorized reading on Hudi Hive tables.\nIf using the default parquet reader, a path filter needs to be pushed into sparkContext as follows."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-scala",children:'spark.sparkContext.hadoopConfiguration.setClass("mapreduce.input.pathFilter.class", classOf[org.apache.hudi.hadoop.HoodieROTablePathFilter], classOf[org.apache.hadoop.fs.PathFilter]);\n'})}),"\n",(0,i.jsx)(t.h4,{id:"merge-on-read-tables",children:"Merge On Read tables"}),"\n",(0,i.jsx)(t.p,{children:"No special configurations are needed for querying MERGE_ON_READ tables with Hudi version 0.9.0+"}),"\n",(0,i.jsxs)(t.p,{children:["If you are querying MERGE_ON_READ tables using Hudi version <= 0.8.0, you need to turn off the SparkSQL default parquet reader by setting: ",(0,i.jsx)(t.code,{children:"spark.sql.hive.convertMetastoreParquet=false"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"$ spark-shell --driver-class-path /etc/hive/conf  --packages org.apache.hudi:hudi-spark-bundle_2.11:0.5.3,org.apache.spark:spark-avro_2.11:2.4.4 --conf spark.sql.hive.convertMetastoreParquet=false\n\nscala> sqlContext.sql(\"select count(*) from hudi_trips_mor_rt where datestr = '2016-10-02'\").show()\nscala> sqlContext.sql(\"select count(*) from hudi_trips_mor_rt where datestr = '2016-10-02'\").show()\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Note: COPY_ON_WRITE tables can also still be read if you turn off the default parquet reader."})}),"\n",(0,i.jsx)(t.h2,{id:"flink-sql",children:"Flink SQL"}),"\n",(0,i.jsxs)(t.p,{children:["Once the flink Hudi tables have been registered to the Flink catalog, it can be queried using the Flink SQL. It supports all query types across both Hudi table types,\nrelying on the custom Hudi input formats again like Hive. Typically notebook users and Flink SQL CLI users leverage flink sql for querying Hudi tables. Please add hudi-flink-bundle as described in the ",(0,i.jsx)(t.a,{href:"/docs/flink-quick-start-guide",children:"Flink Quickstart"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"By default, Flink SQL will try to use its own parquet reader instead of Hive SerDe when reading from Hive metastore parquet tables."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n./bin/sql-client.sh embedded -j .../hudi-flink-bundle_2.1?-*.*.*.jar shell\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"-- this defines a COPY_ON_WRITE table named 't1'\nCREATE TABLE t1(\n  uuid VARCHAR(20), -- you can use 'PRIMARY KEY NOT ENFORCED' syntax to specify the field as record key\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = 'table_base+path'\n);\n\n-- query the data\nselect * from t1 where `partition` = 'par1';\n"})}),"\n",(0,i.jsx)(t.p,{children:"Flink's built-in support parquet is used for both COPY_ON_WRITE and MERGE_ON_READ tables,\nadditionally partition prune is applied by Flink engine internally if a partition path is specified\nin the filter. Filters push down is not supported yet (already on the roadmap)."}),"\n",(0,i.jsxs)(t.p,{children:["For MERGE_ON_READ table, in order to query hudi table as a streaming, you need to add option ",(0,i.jsx)(t.code,{children:"'read.streaming.enabled' = 'true'"}),",\nwhen querying the table, a Flink streaming pipeline starts and never ends until the user cancel the job manually.\nYou can specify the start commit with option ",(0,i.jsx)(t.code,{children:"read.start-commit"})," and source monitoring interval with option\n",(0,i.jsx)(t.code,{children:"read.streaming.check-interval"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"hive",children:"Hive"}),"\n",(0,i.jsxs)(t.p,{children:["To setup Hive for querying Hudi, see the ",(0,i.jsx)(t.a,{href:"/docs/0.11.0/query_engine_setup#hive",children:"Query Engine Setup"})," page."]}),"\n",(0,i.jsx)(t.h3,{id:"incremental-query",children:"Incremental query"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"HiveIncrementalPuller"})," allows incrementally extracting changes from large fact/dimension tables via HiveQL, combining the benefits of Hive (reliably process complex SQL queries) and\nincremental primitives (speed up querying tables incrementally instead of scanning fully). The tool uses Hive JDBC to run the hive query and saves its results in a temp table.\nthat can later be upserted. Upsert utility (",(0,i.jsx)(t.code,{children:"HoodieDeltaStreamer"}),") has all the state it needs from the directory structure to know what should be the commit time on the target table.\ne.g: ",(0,i.jsx)(t.code,{children:"/app/incremental-hql/intermediate/{source_table_name}_temp/{last_commit_included}"}),".The Delta Hive table registered will be of the form ",(0,i.jsx)(t.code,{children:"{tmpdb}.{source_table}_{last_commit_included}"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The following are the configuration options for HiveIncrementalPuller"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Config"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Default"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"hiveUrl"}),(0,i.jsx)(t.td,{children:"Hive Server 2 URL to connect to"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"hiveUser"}),(0,i.jsx)(t.td,{children:"Hive Server 2 Username"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"hivePass"}),(0,i.jsx)(t.td,{children:"Hive Server 2 Password"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"queue"}),(0,i.jsx)(t.td,{children:"YARN Queue name"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tmp"}),(0,i.jsx)(t.td,{children:"Directory where the temporary delta data is stored in DFS. The directory structure will follow conventions. Please see the below section."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"extractSQLFile"}),(0,i.jsx)(t.td,{children:"The SQL to execute on the source table to extract the data. The data extracted will be all the rows that changed since a particular point in time."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sourceTable"}),(0,i.jsx)(t.td,{children:"Source Table Name. Needed to set hive environment properties."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sourceDb"}),(0,i.jsx)(t.td,{children:"Source DB name. Needed to set hive environment properties."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"targetTable"}),(0,i.jsx)(t.td,{children:"Target Table Name. Needed for the intermediate storage directory structure."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"targetDb"}),(0,i.jsx)(t.td,{children:"Target table's DB name."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tmpdb"}),(0,i.jsx)(t.td,{children:"The database to which the intermediate temp delta table will be created"}),(0,i.jsx)(t.td,{children:"hoodie_temp"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fromCommitTime"}),(0,i.jsx)(t.td,{children:"This is the most important parameter. This is the point in time from which the changed records are queried from."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxCommits"}),(0,i.jsx)(t.td,{children:"Number of commits to include in the query. Setting this to -1 will include all the commits from fromCommitTime. Setting this to a value > 0, will include records that ONLY changed in the specified number of commits after fromCommitTime. This may be needed if you need to catch up say 2 commits at a time."}),(0,i.jsx)(t.td,{children:"3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"help"}),(0,i.jsx)(t.td,{children:"Utility Help"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Setting fromCommitTime=0 and maxCommits=-1 will fetch the entire source table and can be used to initiate backfills. If the target table is a Hudi table,\nthen the utility can determine if the target table has no commits or is behind more than 24 hour (this is configurable),\nit will automatically use the backfill configuration, since applying the last 24 hours incrementally could take more time than doing a backfill. The current limitation of the tool\nis the lack of support for self-joining the same table in mixed mode (snapshot and incremental modes)."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE on Hive incremental queries that are executed using Fetch task:"}),"\nSince Fetch tasks invoke InputFormat.listStatus() per partition, Hoodie metadata can be listed in\nevery such listStatus() call. In order to avoid this, it might be useful to disable fetch tasks\nusing the hive session property for incremental queries: ",(0,i.jsx)(t.code,{children:"set hive.fetch.task.conversion=none;"})," This\nwould ensure Map Reduce execution is chosen for a Hive query, which combines partitions (comma\nseparated) and calls InputFormat.listStatus() only once with all those partitions."]}),"\n",(0,i.jsx)(t.h2,{id:"prestodb",children:"PrestoDB"}),"\n",(0,i.jsxs)(t.p,{children:["To setup PrestoDB for querying Hudi, see the ",(0,i.jsx)(t.a,{href:"/docs/0.11.0/query_engine_setup#prestodb",children:"Query Engine Setup"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"trino",children:"Trino"}),"\n",(0,i.jsxs)(t.p,{children:["To setup Trino for querying Hudi, see the ",(0,i.jsx)(t.a,{href:"/docs/0.11.0/query_engine_setup#trino",children:"Query Engine Setup"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"impala-34-or-later",children:"Impala (3.4 or later)"}),"\n",(0,i.jsx)(t.h3,{id:"snapshot-query",children:"Snapshot Query"}),"\n",(0,i.jsxs)(t.p,{children:["Impala is able to query Hudi Copy-on-write table as an ",(0,i.jsx)(t.a,{href:"https://docs.cloudera.com/documentation/enterprise/6/6.3/topics/impala_tables.html#external_tables",children:"EXTERNAL TABLE"})," on HDFS."]}),"\n",(0,i.jsx)(t.p,{children:"To create a Hudi read optimized table on Impala:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"CREATE EXTERNAL TABLE database.table_name\nLIKE PARQUET '/path/to/load/xxx.parquet'\nSTORED AS HUDIPARQUET\nLOCATION '/path/to/load';\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Impala is able to take advantage of the physical partition structure to improve the query performance.\nTo create a partitioned table, the folder should follow the naming convention like ",(0,i.jsx)(t.code,{children:"year=2020/month=1"}),".\nImpala use ",(0,i.jsx)(t.code,{children:"="})," to separate partition name and partition value.",(0,i.jsx)(t.br,{}),"\n","To create a partitioned Hudi read optimized table on Impala:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"CREATE EXTERNAL TABLE database.table_name\nLIKE PARQUET '/path/to/load/xxx.parquet'\nPARTITION BY (year int, month int, day int)\nSTORED AS HUDIPARQUET\nLOCATION '/path/to/load';\nALTER TABLE database.table_name RECOVER PARTITIONS;\n"})}),"\n",(0,i.jsx)(t.p,{children:"After Hudi made a new commit, refresh the Impala table to get the latest results."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"REFRESH database.table_name\n"})}),"\n",(0,i.jsx)(t.h2,{id:"redshift-spectrum",children:"Redshift Spectrum"}),"\n",(0,i.jsxs)(t.p,{children:["To set up Redshift Spectrum for querying Hudi, see the ",(0,i.jsx)(t.a,{href:"/docs/0.11.0/query_engine_setup#redshift-spectrum",children:"Query Engine Setup"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"starrocks",children:"StarRocks"}),"\n",(0,i.jsxs)(t.p,{children:["To set up StarRocks for querying Hudi, see the ",(0,i.jsx)(t.a,{href:"/docs/0.11.0/query_engine_setup#starrocks",children:"Query Engine Setup"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"support-matrix",children:"Support Matrix"}),"\n",(0,i.jsx)(t.p,{children:"Following tables show whether a given query is supported on specific query engine."}),"\n",(0,i.jsx)(t.h3,{id:"copy-on-write-tables-1",children:"Copy-On-Write tables"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Query Engine"}),(0,i.jsx)(t.th,{children:"Snapshot Queries"}),(0,i.jsx)(t.th,{children:"Incremental Queries"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Hive"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"Y"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Spark SQL"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"Y"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Spark Datasource"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"Y"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Flink SQL"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"N"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"PrestoDB"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"N"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Trino"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"N"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Impala"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"N"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Redshift Spectrum"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"N"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"StarRocks"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"N"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Note that ",(0,i.jsx)(t.code,{children:"Read Optimized"})," queries are not applicable for COPY_ON_WRITE tables."]}),"\n",(0,i.jsx)(t.h3,{id:"merge-on-read-tables-1",children:"Merge-On-Read tables"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Query Engine"}),(0,i.jsx)(t.th,{children:"Snapshot Queries"}),(0,i.jsx)(t.th,{children:"Incremental Queries"}),(0,i.jsx)(t.th,{children:"Read Optimized Queries"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Hive"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"Y"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Spark SQL"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"Y"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Spark Datasource"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"Y"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Flink SQL"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"Y"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"PrestoDB"})}),(0,i.jsx)(t.td,{children:"Y"}),(0,i.jsx)(t.td,{children:"N"}),(0,i.jsx)(t.td,{children:"Y"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Trino"})}),(0,i.jsx)(t.td,{children:"N"}),(0,i.jsx)(t.td,{children:"N"}),(0,i.jsx)(t.td,{children:"Y"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Impala"})}),(0,i.jsx)(t.td,{children:"N"}),(0,i.jsx)(t.td,{children:"N"}),(0,i.jsx)(t.td,{children:"Y"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);