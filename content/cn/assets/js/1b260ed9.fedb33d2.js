"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[96470],{33428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"flink-quick-start-guide","title":"Flink Guide","description":"This page introduces Flink-Hudi integration. We can feel the unique charm of how Flink brings in the power of streaming into Hudi.","source":"@site/versioned_docs/version-0.12.2/flink-quick-start-guide.md","sourceDirName":".","slug":"/flink-quick-start-guide","permalink":"/cn/docs/0.12.2/flink-quick-start-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.2/flink-quick-start-guide.md","tags":[],"version":"0.12.2","frontMatter":{"title":"Flink Guide","toc":true,"last_modified_at":"2020-08-12T07:19:57.000Z"},"sidebar":"docs","previous":{"title":"Spark Guide","permalink":"/cn/docs/0.12.2/quick-start-guide"},"next":{"title":"Docker Demo","permalink":"/cn/docs/0.12.2/docker_demo"}}');var a=t(74848),r=t(28453),s=t(11470),o=t(19365);const l={title:"Flink Guide",toc:!0,last_modified_at:new Date("2020-08-12T07:19:57.000Z")},d=void 0,c={},u=[{value:"Quick Start",id:"quick-start",level:2},{value:"Setup",id:"setup",level:3},{value:"Step.1 download Flink jar",id:"step1-download-flink-jar",level:4},{value:"Step.2 start Flink cluster",id:"step2-start-flink-cluster",level:4},{value:"Step.3 start Flink SQL client",id:"step3-start-flink-sql-client",level:4},{value:"Insert Data",id:"insert-data",level:3},{value:"Query Data",id:"query-data",level:3},{value:"Update Data",id:"update-data",level:3},{value:"Streaming Query",id:"streaming-query",level:3},{value:"Delete Data",id:"deletes",level:3},{value:"Where To Go From Here?",id:"where-to-go-from-here",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This page introduces Flink-Hudi integration. We can feel the unique charm of how Flink brings in the power of streaming into Hudi.\nThis guide helps you quickly start using Flink on Hudi, and learn different modes for reading/writing Hudi by Flink:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Quick Start"})," : Read ",(0,a.jsx)(n.a,{href:"#quick-start",children:"Quick Start"})," to get started quickly Flink sql client to write to(read from) Hudi."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Configuration"})," : For ",(0,a.jsx)(n.a,{href:"/docs/0.12.2/flink_configuration#global-configurations",children:"Global Configuration"}),", sets up through ",(0,a.jsx)(n.code,{children:"$FLINK_HOME/conf/flink-conf.yaml"}),". For per job configuration, sets up through ",(0,a.jsx)(n.a,{href:"/docs/0.12.2/flink_configuration#table-options",children:"Table Option"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Writing Data"})," : Flink supports different modes for writing, such as ",(0,a.jsx)(n.a,{href:"/docs/0.12.2/hoodie_deltastreamer#cdc-ingestion",children:"CDC Ingestion"}),", ",(0,a.jsx)(n.a,{href:"/docs/0.12.2/hoodie_deltastreamer#bulk-insert",children:"Bulk Insert"}),", ",(0,a.jsx)(n.a,{href:"/docs/0.12.2/hoodie_deltastreamer#index-bootstrap",children:"Index Bootstrap"}),", ",(0,a.jsx)(n.a,{href:"/docs/0.12.2/hoodie_deltastreamer#changelog-mode",children:"Changelog Mode"})," and ",(0,a.jsx)(n.a,{href:"/docs/0.12.2/hoodie_deltastreamer#append-mode",children:"Append Mode"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Querying Data"})," : Flink supports different modes for reading, such as ",(0,a.jsx)(n.a,{href:"querying_data#streaming-query",children:"Streaming Query"})," and ",(0,a.jsx)(n.a,{href:"/docs/querying_data#incremental-query",children:"Incremental Query"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Tuning"})," : For write/read tasks, this guide gives some tuning suggestions, such as ",(0,a.jsx)(n.a,{href:"/docs/0.12.2/flink_configuration#memory-optimization",children:"Memory Optimization"})," and ",(0,a.jsx)(n.a,{href:"/docs/0.12.2/flink_configuration#write-rate-limit",children:"Write Rate Limit"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Optimization"}),": Offline compaction is supported ",(0,a.jsx)(n.a,{href:"/docs/compaction#flink-offline-compaction",children:"Offline Compaction"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Query Engines"}),": Besides Flink, many other engines are integrated: ",(0,a.jsx)(n.a,{href:"/docs/syncing_metastore#flink-setup",children:"Hive Query"}),", ",(0,a.jsx)(n.a,{href:"/docs/0.12.2/query_engine_setup#prestodb",children:"Presto Query"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,a.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(s.A,{defaultValue:"flinksql",values:[{label:"Flink SQL",value:"flinksql"},{label:"DataStream API",value:"dataStream"}],children:[(0,a.jsxs)(o.A,{value:"flinksql",children:[(0,a.jsxs)(n.p,{children:["We use the ",(0,a.jsx)(n.a,{href:"https://ci.apache.org/projects/flink/flink-docs-release-1.13/docs/dev/table/sqlclient/",children:"Flink Sql Client"})," because it's a good\nquick start tool for SQL users."]}),(0,a.jsx)(n.h4,{id:"step1-download-flink-jar",children:"Step.1 download Flink jar"}),(0,a.jsxs)(n.p,{children:["Hudi works with both Flink 1.13, Flink 1.14 and Flink 1.15. You can follow the\ninstructions ",(0,a.jsx)(n.a,{href:"https://flink.apache.org/downloads",children:"here"})," for setting up Flink. Then choose the desired Hudi-Flink bundle\njar to work with different Flink and Scala versions:"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"hudi-flink1.13-bundle"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"hudi-flink1.14-bundle"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"hudi-flink1.15-bundle"})}),"\n"]}),(0,a.jsx)(n.h4,{id:"step2-start-flink-cluster",children:"Step.2 start Flink cluster"}),(0,a.jsx)(n.p,{children:"Start a standalone Flink cluster within hadoop environment.\nBefore you start up the cluster, we suggest to config the cluster as follows:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["in ",(0,a.jsx)(n.code,{children:"$FLINK_HOME/conf/flink-conf.yaml"}),", add config option ",(0,a.jsx)(n.code,{children:"taskmanager.numberOfTaskSlots: 4"})]}),"\n",(0,a.jsxs)(n.li,{children:["in ",(0,a.jsx)(n.code,{children:"$FLINK_HOME/conf/flink-conf.yaml"}),", ",(0,a.jsx)(n.a,{href:"/docs/0.12.2/flink_configuration#global-configurations",children:"add other global configurations according to the characteristics of your task"})]}),"\n",(0,a.jsxs)(n.li,{children:["in ",(0,a.jsx)(n.code,{children:"$FLINK_HOME/conf/workers"}),", add item ",(0,a.jsx)(n.code,{children:"localhost"})," as 4 lines so that there are 4 workers on the local cluster"]}),"\n"]}),(0,a.jsx)(n.p,{children:"Now starts the cluster:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n# Start the Flink standalone cluster\n./bin/start-cluster.sh\n"})}),(0,a.jsx)(n.h4,{id:"step3-start-flink-sql-client",children:"Step.3 start Flink SQL client"}),(0,a.jsxs)(n.p,{children:["Hudi has a prepared bundle jar for Flink, which should be loaded in the Flink SQL Client when it starts up.\nYou can build the jar manually under path ",(0,a.jsx)(n.code,{children:"hudi-source-dir/packaging/hudi-flink-bundle"})," (see ",(0,a.jsx)(n.a,{href:"/docs/syncing_metastore#install",children:"Build Flink Bundle Jar"}),"), or download it from the\n",(0,a.jsx)(n.a,{href:"https://repo.maven.apache.org/maven2/org/apache/hudi/hudi-flink-bundle_2.11/",children:"Apache Official Repository"}),"."]}),(0,a.jsx)(n.p,{children:"Now starts the SQL CLI:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n./bin/sql-client.sh embedded -j .../hudi-flink-bundle_2.1?-*.*.*.jar shell\n"})}),(0,a.jsxs)("div",{className:"notice--info",children:[(0,a.jsx)("h4",{children:"Please note the following: "}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"We suggest hadoop 2.9.x+ version because some of the object storage has filesystem implementation only after that"}),(0,a.jsx)("li",{children:"The flink-parquet and flink-avro formats are already packaged into the hudi-flink-bundle jar"})]})]}),(0,a.jsx)(n.p,{children:"Setup table name, base path and operate using SQL for this guide.\nThe SQL CLI only executes the SQL line by line."})]}),(0,a.jsxs)(o.A,{value:"dataStream",children:[(0,a.jsx)(n.p,{children:"Hudi works with Flink 1.13, Flink 1.14 and Flink 1.15. Please add the desired\ndependency to your project:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"\x3c!-- Flink 1.13 --\x3e\n<dependency>\n    <groupId>org.apache.hudi</groupId>\n    <artifactId>hudi-flink1.13-bundle</artifactId>\n    <version>0.12.2</version>\n</dependency>\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"\x3c!-- Flink 1.14 --\x3e\n<dependency>\n    <groupId>org.apache.hudi</groupId>\n    <artifactId>hudi-flink1.14-bundle</artifactId>\n    <version>0.12.2</version>\n</dependency>\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"\x3c!-- Flink 1.15 --\x3e\n<dependency>\n    <groupId>org.apache.hudi</groupId>\n    <artifactId>hudi-flink1.15-bundle</artifactId>\n    <version>0.12.2</version>\n</dependency>\n"})})]})]}),"\n",(0,a.jsx)(n.h3,{id:"insert-data",children:"Insert Data"}),"\n",(0,a.jsxs)(s.A,{defaultValue:"flinksql",values:[{label:"Flink SQL",value:"flinksql"},{label:"DataStream API",value:"dataStream"}],children:[(0,a.jsxs)(o.A,{value:"flinksql",children:[(0,a.jsxs)(n.p,{children:["Creates a Flink Hudi table first and insert data into the Hudi table using SQL ",(0,a.jsx)(n.code,{children:"VALUES"})," as below."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- sets up the result mode to tableau to show the results directly in the CLI\nset sql-client.execution.result-mode = tableau;\n\nCREATE TABLE t1(\n  uuid VARCHAR(20) PRIMARY KEY NOT ENFORCED,\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${path}',\n  'table.type' = 'MERGE_ON_READ' -- this creates a MERGE_ON_READ table, by default is COPY_ON_WRITE\n);\n\n-- insert data using values\nINSERT INTO t1 VALUES\n  ('id1','Danny',23,TIMESTAMP '1970-01-01 00:00:01','par1'),\n  ('id2','Stephen',33,TIMESTAMP '1970-01-01 00:00:02','par1'),\n  ('id3','Julian',53,TIMESTAMP '1970-01-01 00:00:03','par2'),\n  ('id4','Fabian',31,TIMESTAMP '1970-01-01 00:00:04','par2'),\n  ('id5','Sophia',18,TIMESTAMP '1970-01-01 00:00:05','par3'),\n  ('id6','Emma',20,TIMESTAMP '1970-01-01 00:00:06','par3'),\n  ('id7','Bob',44,TIMESTAMP '1970-01-01 00:00:07','par4'),\n  ('id8','Han',56,TIMESTAMP '1970-01-01 00:00:08','par4');\n"})})]}),(0,a.jsxs)(o.A,{value:"dataStream",children:[(0,a.jsx)(n.p,{children:"Creates a Flink Hudi table first and insert data into the Hudi table using DataStream API as below."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import org.apache.flink.streaming.api.datastream.DataStream;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.table.data.RowData;\nimport org.apache.hudi.common.model.HoodieTableType;\nimport org.apache.hudi.configuration.FlinkOptions;\nimport org.apache.hudi.util.HoodiePipeline;\n\nStreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\nString targetTable = "t1";\nString basePath = "file:///tmp/t1";\n\nMap<String, String> options = new HashMap<>();\noptions.put(FlinkOptions.PATH.key(), basePath);\noptions.put(FlinkOptions.TABLE_TYPE.key(), HoodieTableType.MERGE_ON_READ.name());\noptions.put(FlinkOptions.PRECOMBINE_FIELD.key(), "ts");\n\nDataStream<RowData> dataStream = env.addSource(...);\nHoodiePipeline.Builder builder = HoodiePipeline.builder(targetTable)\n    .column("uuid VARCHAR(20)")\n    .column("name VARCHAR(10)")\n    .column("age INT")\n    .column("ts TIMESTAMP(3)")\n    .column("`partition` VARCHAR(20)")\n    .pk("uuid")\n    .partition("partition")\n    .options(options);\n\nbuilder.sink(dataStream, false); // The second parameter indicating whether the input data stream is bounded\nenv.execute("Api_Sink");\n'})})]})]}),"\n",(0,a.jsx)(n.h3,{id:"query-data",children:"Query Data"}),"\n",(0,a.jsxs)(s.A,{defaultValue:"flinksql",values:[{label:"Flink SQL",value:"flinksql"},{label:"DataStream API",value:"dataStream"}],children:[(0,a.jsx)(o.A,{value:"flinksql",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- query from the Hudi table\nselect * from t1;\n"})})}),(0,a.jsx)(o.A,{value:"dataStream",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import org.apache.flink.streaming.api.datastream.DataStream;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.table.data.RowData;\nimport org.apache.hudi.common.model.HoodieTableType;\nimport org.apache.hudi.configuration.FlinkOptions;\nimport org.apache.hudi.util.HoodiePipeline;\n\nStreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\nString targetTable = "t1";\nString basePath = "file:///tmp/t1";\n\nMap<String, String> options = new HashMap<>();\noptions.put(FlinkOptions.PATH.key(), basePath);\noptions.put(FlinkOptions.TABLE_TYPE.key(), HoodieTableType.MERGE_ON_READ.name());\noptions.put(FlinkOptions.READ_AS_STREAMING.key(), "true"); // this option enable the streaming read\noptions.put(FlinkOptions.READ_START_COMMIT.key(), "\'20210316134557\'"); // specifies the start commit instant time\n    \nHoodiePipeline.Builder builder = HoodiePipeline.builder(targetTable)\n    .column("uuid VARCHAR(20)")\n    .column("name VARCHAR(10)")\n    .column("age INT")\n    .column("ts TIMESTAMP(3)")\n    .column("`partition` VARCHAR(20)")\n    .pk("uuid")\n    .partition("partition")\n    .options(options);\n\nDataStream<RowData> rowDataDataStream = builder.source(env);\nrowDataDataStream.print();\nenv.execute("Api_Source");\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["This statement queries snapshot view of the dataset.\nRefers to ",(0,a.jsx)(n.a,{href:"/docs/concepts#table-types--queries",children:"Table types and queries"})," for more info on all table types and query types supported."]}),"\n",(0,a.jsx)(n.h3,{id:"update-data",children:"Update Data"}),"\n",(0,a.jsx)(n.p,{children:"This is similar to inserting new data."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- this would update the record with key 'id1'\ninsert into t1 values\n  ('id1','Danny',27,TIMESTAMP '1970-01-01 00:00:01','par1');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Notice that the save mode is now ",(0,a.jsx)(n.code,{children:"Append"}),". In general, always use append mode unless you are trying to create the table for the first time.\n",(0,a.jsx)(n.a,{href:"#query-data",children:"Querying"})," the data again will now show updated records. Each write operation generates a new ",(0,a.jsx)(n.a,{href:"/docs/concepts",children:"commit"}),"\ndenoted by the timestamp. Look for changes in ",(0,a.jsx)(n.code,{children:"_hoodie_commit_time"}),", ",(0,a.jsx)(n.code,{children:"age"})," fields for the same ",(0,a.jsx)(n.code,{children:"_hoodie_record_key"}),"s in previous commit."]}),"\n",(0,a.jsx)(n.h3,{id:"streaming-query",children:"Streaming Query"}),"\n",(0,a.jsx)(n.p,{children:"Hudi Flink also provides capability to obtain a stream of records that changed since given commit timestamp.\nThis can be achieved using Hudi's streaming querying and providing a start time from which changes need to be streamed.\nWe do not need to specify endTime, if we want all changes after the given commit (as is the common case)."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The bundle jar with ",(0,a.jsx)(n.strong,{children:"hive profile"})," is needed for streaming query, by default the officially released flink bundle is built ",(0,a.jsx)(n.strong,{children:"without"}),"\n",(0,a.jsx)(n.strong,{children:"hive profile"}),", the jar needs to be built manually, see ",(0,a.jsx)(n.a,{href:"/docs/syncing_metastore#install",children:"Build Flink Bundle Jar"})," for more details."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE t1(\n  uuid VARCHAR(20) PRIMARY KEY NOT ENFORCED,\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${path}',\n  'table.type' = 'MERGE_ON_READ',\n  'read.streaming.enabled' = 'true',  -- this option enable the streaming read\n  'read.start-commit' = '20210316134557', -- specifies the start commit instant time\n  'read.streaming.check-interval' = '4' -- specifies the check interval for finding new source commits, default 60s.\n);\n\n-- Then query the table in stream mode\nselect * from t1;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will give all changes that happened after the ",(0,a.jsx)(n.code,{children:"read.start-commit"})," commit. The unique thing about this\nfeature is that it now lets you author streaming pipelines on streaming or batch data source."]}),"\n",(0,a.jsx)(n.h3,{id:"deletes",children:"Delete Data"}),"\n",(0,a.jsx)(n.p,{children:"When consuming data in streaming query, Hudi Flink source can also accepts the change logs from the underneath data source,\nit can then applies the UPDATE and DELETE by per-row level. You can then sync a NEAR-REAL-TIME snapshot on Hudi for all kinds\nof RDBMS."}),"\n",(0,a.jsx)(n.h2,{id:"where-to-go-from-here",children:"Where To Go From Here?"}),"\n",(0,a.jsxs)(n.p,{children:["Check out the ",(0,a.jsx)(n.a,{href:"/docs/0.12.2/flink_configuration",children:"Flink Setup"})," how-to page for deeper dive into configuration settings."]}),"\n",(0,a.jsx)(n.p,{children:"If you are relatively new to Apache Hudi, it is important to be familiar with a few core concepts:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/timeline",children:"Hudi Timeline"})," \u2013 How Hudi manages transactions and other table services"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/file_layouts",children:"Hudi File Layout"})," - How the files are laid out on storage"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/table_types",children:"Hudi Table Types"})," \u2013 ",(0,a.jsx)(n.code,{children:"COPY_ON_WRITE"})," and ",(0,a.jsx)(n.code,{children:"MERGE_ON_READ"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/table_types#query-types",children:"Hudi Query Types"})," \u2013 Snapshot Queries, Incremental Queries, Read-Optimized Queries"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'See more in the "Concepts" section of the docs.'}),"\n",(0,a.jsxs)(n.p,{children:["Take a look at recent ",(0,a.jsx)(n.a,{href:"/blog",children:"blog posts"})," that go in depth on certain topics or use cases."]}),"\n",(0,a.jsxs)(n.p,{children:["Hudi tables can be queried from query engines like Hive, Spark, Flink, Presto and much more. We have put together a\n",(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VhNgUsxdrD0",children:"demo video"})," that show cases all of this on a docker based setup with all\ndependent systems running locally. We recommend you replicate the same setup and run the demo yourself, by following\nsteps ",(0,a.jsx)(n.a,{href:"/docs/docker_demo",children:"here"})," to get a taste for it. Also, if you are looking for ways to migrate your existing data\nto Hudi, refer to ",(0,a.jsx)(n.a,{href:"/docs/migration_guide",children:"migration guide"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var i=t(34164);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var i=t(96540),a=t(34164),r=t(23104),s=t(56347),o=t(205),l=t(57485),d=t(31682),c=t(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=h(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[d,u]=m({queryString:t,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),x=(()=>{const e=d??f;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=t(74848);function b(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==i&&(d(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=f(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,k.jsx)(b,{...n,...e}),(0,k.jsx)(j,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,k.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);