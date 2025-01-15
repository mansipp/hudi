"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[7100],{84444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"flink-quick-start-guide","title":"Flink Guide","description":"This guide provides a quick peek at Hudi\'s capabilities using flink SQL client. Using flink SQL, we will walk through","source":"@site/versioned_docs/version-0.8.0/flink-quick-start-guide.md","sourceDirName":".","slug":"/flink-quick-start-guide","permalink":"/cn/docs/0.8.0/flink-quick-start-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.8.0/flink-quick-start-guide.md","tags":[],"version":"0.8.0","frontMatter":{"version":"0.8.0","title":"Flink Guide","toc":true,"last_modified_at":"2020-03-16T03:40:57.000Z"},"sidebar":"docs","previous":{"title":"Spark Guide","permalink":"/cn/docs/0.8.0/quick-start-guide"},"next":{"title":"\u4f7f\u7528\u6848\u4f8b","permalink":"/cn/docs/0.8.0/use_cases"}}');var a=t(74848),s=t(28453);const r={version:"0.8.0",title:"Flink Guide",toc:!0,last_modified_at:new Date("2020-03-16T03:40:57.000Z")},o=void 0,l={},d=[{value:"Setup",id:"setup",level:2},{value:"Step.1 download flink jar",id:"step1-download-flink-jar",level:3},{value:"Step.2 start flink cluster",id:"step2-start-flink-cluster",level:3},{value:"Step.3 start flink SQL client",id:"step3-start-flink-sql-client",level:3},{value:"Insert data",id:"insert-data",level:2},{value:"Query data",id:"query-data",level:2},{value:"Update data",id:"update-data",level:2},{value:"Streaming query",id:"streaming-query",level:2},{value:"Delete data",id:"deletes",level:2},{value:"Where to go from here?",id:"where-to-go-from-here",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This guide provides a quick peek at Hudi's capabilities using flink SQL client. Using flink SQL, we will walk through\ncode snippets that allows you to insert and update a Hudi table of default table type:\n",(0,a.jsx)(n.a,{href:"/docs/concepts#copy-on-write-table",children:"Copy on Write"})," and ",(0,a.jsx)(n.a,{href:"/docs/concepts#merge-on-read-table",children:"Merge On Read"}),".\nAfter each write operation we will also show how to read the data snapshot (incrementally read is already on the roadmap)."]}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(n.p,{children:["We use the ",(0,a.jsx)(n.a,{href:"https://ci.apache.org/projects/flink/flink-docs-stable/dev/table/sqlClient",children:"Flink Sql Client"})," because it's a good\nquick start tool for SQL users."]}),"\n",(0,a.jsx)(n.h3,{id:"step1-download-flink-jar",children:"Step.1 download flink jar"}),"\n",(0,a.jsxs)(n.p,{children:["Hudi works with Flink-1.11.x version. You can follow instructions ",(0,a.jsx)(n.a,{href:"https://flink.apache.org/downloads",children:"here"})," for setting up flink.\nThe hudi-flink-bundle jar is archived with scala 2.11, so it\u2019s recommended to use flink 1.11 bundled with scala 2.11."]}),"\n",(0,a.jsx)(n.h3,{id:"step2-start-flink-cluster",children:"Step.2 start flink cluster"}),"\n",(0,a.jsx)(n.p,{children:"Start a standalone flink cluster within hadoop environment.\nBefore you start up the cluster, we suggest to config the cluster as follows:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["in ",(0,a.jsx)(n.code,{children:"$FLINK_HOME/conf/flink-conf.yaml"}),", add config option ",(0,a.jsx)(n.code,{children:"taskmanager.numberOfTaskSlots: 4"})]}),"\n",(0,a.jsxs)(n.li,{children:["in ",(0,a.jsx)(n.code,{children:"$FLINK_HOME/conf/workers"}),", add item ",(0,a.jsx)(n.code,{children:"localhost"})," as 4 lines so that there are 4 workers on the local cluster"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Now starts the cluster:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n# Start the flink standalone cluster\n./bin/start-cluster.sh\n"})}),"\n",(0,a.jsx)(n.h3,{id:"step3-start-flink-sql-client",children:"Step.3 start flink SQL client"}),"\n",(0,a.jsxs)(n.p,{children:["Hudi has a prepared bundle jar for flink, which should be loaded in the flink SQL Client when it starts up.\nYou can build the jar manually under path ",(0,a.jsx)(n.code,{children:"hudi-source-dir/packaging/hudi-flink-bundle"}),", or download it from the\n",(0,a.jsx)(n.a,{href:"https://repo.maven.apache.org/maven2/org/apache/hudi/hudi-flink-bundle_2.11/",children:"Apache Official Repository"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Now starts the SQL CLI:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n./bin/sql-client.sh embedded -j .../hudi-flink-bundle_2.1?-*.*.*.jar shell\n"})}),"\n",(0,a.jsxs)("div",{className:"notice--info",children:[(0,a.jsx)("h4",{children:"Please note the following: "}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"We suggest hadoop 2.9.x+ version because some of the object storage has filesystem implementation only after that"}),(0,a.jsx)("li",{children:"The flink-parquet and flink-avro formats are already packaged into the hudi-flink-bundle jar"})]})]}),"\n",(0,a.jsx)(n.p,{children:"Setup table name, base path and operate using SQL for this guide.\nThe SQL CLI only executes the SQL line by line."}),"\n",(0,a.jsx)(n.h2,{id:"insert-data",children:"Insert data"}),"\n",(0,a.jsxs)(n.p,{children:["Creates a flink hudi table first and insert data into the Hudi table using SQL ",(0,a.jsx)(n.code,{children:"VALUES"})," as below."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- sets up the result mode to tableau to show the results directly in the CLI\nset execution.result-mode=tableau;\n\nCREATE TABLE t1(\n  uuid VARCHAR(20),\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = 'schema://base-path',\n  'table.type' = 'MERGE_ON_READ' -- this creates a MERGE_ON_READ table, by default is COPY_ON_WRITE\n);\n\n-- insert data using values\nINSERT INTO t1 VALUES\n  ('id1','Danny',23,TIMESTAMP '1970-01-01 00:00:01','par1'),\n  ('id2','Stephen',33,TIMESTAMP '1970-01-01 00:00:02','par1'),\n  ('id3','Julian',53,TIMESTAMP '1970-01-01 00:00:03','par2'),\n  ('id4','Fabian',31,TIMESTAMP '1970-01-01 00:00:04','par2'),\n  ('id5','Sophia',18,TIMESTAMP '1970-01-01 00:00:05','par3'),\n  ('id6','Emma',20,TIMESTAMP '1970-01-01 00:00:06','par3'),\n  ('id7','Bob',44,TIMESTAMP '1970-01-01 00:00:07','par4'),\n  ('id8','Han',56,TIMESTAMP '1970-01-01 00:00:08','par4');\n"})}),"\n",(0,a.jsx)(n.h2,{id:"query-data",children:"Query data"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- query from the hudi table\nselect * from t1;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This query provides snapshot querying of the ingested data.\nRefer to ",(0,a.jsx)(n.a,{href:"/docs/concepts#table-types--queries",children:"Table types and queries"})," for more info on all table types and query types supported.\n{: .notice--info}"]}),"\n",(0,a.jsx)(n.h2,{id:"update-data",children:"Update data"}),"\n",(0,a.jsx)(n.p,{children:"This is similar to inserting new data."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- this would update the record with key 'id1'\ninsert into t1 values\n  ('id1','Danny',27,TIMESTAMP '1970-01-01 00:00:01','par1');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Notice that the save mode is now ",(0,a.jsx)(n.code,{children:"Append"}),". In general, always use append mode unless you are trying to create the table for the first time.\n",(0,a.jsx)(n.a,{href:"#query-data",children:"Querying"})," the data again will now show updated records. Each write operation generates a new ",(0,a.jsx)(n.a,{href:"/docs/concepts",children:"commit"}),"\ndenoted by the timestamp. Look for changes in ",(0,a.jsx)(n.code,{children:"_hoodie_commit_time"}),", ",(0,a.jsx)(n.code,{children:"age"})," fields for the same ",(0,a.jsx)(n.code,{children:"_hoodie_record_key"}),"s in previous commit.\n{: .notice--info}"]}),"\n",(0,a.jsx)(n.h2,{id:"streaming-query",children:"Streaming query"}),"\n",(0,a.jsx)(n.p,{children:"Hudi flink also provides capability to obtain a stream of records that changed since given commit timestamp.\nThis can be achieved using Hudi's streaming querying and providing a start time from which changes need to be streamed.\nWe do not need to specify endTime, if we want all changes after the given commit (as is the common case)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE t1(\n  uuid VARCHAR(20),\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = 'oss://vvr-daily/hudi/t1',\n  'table.type' = 'MERGE_ON_READ',\n  'read.streaming.enabled' = 'true',  -- this option enable the streaming read\n  'read.streaming.start-commit' = '20210316134557' -- specifies the start commit instant time\n  'read.streaming.check-interval' = '4' -- specifies the check interval for finding new source commits, default 60s.\n);\n\n-- Then query the table in stream mode\nselect * from t1;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will give all changes that happened after the ",(0,a.jsx)(n.code,{children:"read.streaming.start-commit"})," commit. The unique thing about this\nfeature is that it now lets you author streaming pipelines on streaming or batch data source.\n{: .notice--info}"]}),"\n",(0,a.jsx)(n.h2,{id:"deletes",children:"Delete data"}),"\n",(0,a.jsx)(n.p,{children:"When consuming data in streaming query, hudi flink source can also accepts the change logs from the underneath data source,\nit can then applies the UPDATE and DELETE by per-row level. You can then sync a NEAR-REAL-TIME snapshot on hudi for all kinds\nof RDBMS."}),"\n",(0,a.jsx)(n.h2,{id:"where-to-go-from-here",children:"Where to go from here?"}),"\n",(0,a.jsxs)(n.p,{children:["We used flink here to show case the capabilities of Hudi. However, Hudi can support multiple table types/query types and\nHudi tables can be queried from query engines like Hive, Spark, Flink, Presto and much more. We have put together a\n",(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VhNgUsxdrD0",children:"demo video"})," that show cases all of this on a docker based setup with all\ndependent systems running locally. We recommend you replicate the same setup and run the demo yourself, by following\nsteps ",(0,a.jsx)(n.a,{href:"/docs/docker_demo",children:"here"})," to get a taste for it. Also, if you are looking for ways to migrate your existing data\nto Hudi, refer to ",(0,a.jsx)(n.a,{href:"/docs/migration_guide",children:"migration guide"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);