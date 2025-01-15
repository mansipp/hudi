"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[69384],{73926:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>l});var n=t(8662),s=t(74848),r=t(28453);const i={title:"Change Capture Using AWS Database Migration Service and Hudi",excerpt:"In this blog, we will build an end-end solution for capturing changes from a MySQL instance running on AWS RDS to a Hudi table on S3, using capabilities in the Hudi 0.5.1 release.",author:"vinoth",category:"blog",image:"/assets/images/blog/change-capture-architecture.png",tags:["how-to","change data capture","cdc","apache hudi"]},o=void 0,d={authorsImageUrls:[void 0]},l=[{value:"Extracting Change logs from MySQL",id:"extracting-change-logs-from-mysql",level:3},{value:"Applying Change Logs using Hudi DeltaStreamer",id:"applying-change-logs-using-hudi-deltastreamer",level:2}];function c(e){const a={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"One of the core use-cases for Apache Hudi is enabling seamless, efficient database ingestion to your data lake. Even though a lot has been talked about and even users already adopting this model, content on how to go about this is sparse."}),"\n",(0,s.jsxs)(a.p,{children:["In this blog, we will build an end-end solution for capturing changes from a MySQL instance running on AWS RDS to a Hudi table on S3, using capabilities in the Hudi  ",(0,s.jsx)(a.strong,{children:"0.5.1 release"})]}),"\n",(0,s.jsx)(a.p,{children:"We can break up the problem into two pieces."}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Extracting change logs from MySQL"}),"  : Surprisingly, this is still a pretty tricky problem to solve and often Hudi users get stuck here. Thankfully, at-least for AWS users, there is a  ",(0,s.jsx)(a.a,{href:"https://aws.amazon.com/dms/",children:"Database Migration service"}),"  (DMS for short), that does this change capture and uploads them as parquet files on S3"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Applying these change logs to your data lake table"}),"  : Once there are change logs in some form, the next step is to apply them incrementally to your table. This mundane task can be fully automated using the Hudi  ",(0,s.jsx)(a.a,{href:"http://hudi.apache.org/docs/hoodie_streaming_ingestion#hudi-streamer",children:"DeltaStreamer"}),"  tool."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["The actual end-end architecture looks something like this.\n",(0,s.jsx)(a.img,{alt:"enter image description here",src:t(47736).A+"",width:"1200",height:"241"})]}),"\n",(0,s.jsxs)(a.p,{children:["Let's now illustrate how one can accomplish this using a simple ",(0,s.jsx)(a.em,{children:"orders"})," table, stored in MySQL (these instructions should broadly apply to other database engines like Postgres, or Aurora as well, though SQL/Syntax may change)"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"CREATE DATABASE hudi_dms;\nUSE hudi_dms;\n     \nCREATE TABLE orders(\n   order_id INTEGER,\n   order_qty INTEGER,\n   customer_name VARCHAR(100),\n   updated_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),\n   created_at TIMESTAMP DEFAULT NOW(),\n   CONSTRAINT orders_pk PRIMARY KEY(order_id)\n);\n \nINSERT INTO orders(order_id, order_qty, customer_name) VALUES(1, 10, 'victor');\nINSERT INTO orders(order_id, order_qty, customer_name) VALUES(2, 20, 'peter');\n"})}),"\n",(0,s.jsxs)(a.p,{children:["In the table, ",(0,s.jsx)(a.em,{children:"order_id"})," is the primary key which will be enforced on the Hudi table as well. Since a batch of change records can contain changes to the same primary key, we also include ",(0,s.jsx)(a.em,{children:"updated_at"})," and ",(0,s.jsx)(a.em,{children:"created_at"})," fields, which are kept upto date as writes happen to the table."]}),"\n",(0,s.jsx)(a.h3,{id:"extracting-change-logs-from-mysql",children:"Extracting Change logs from MySQL"}),"\n",(0,s.jsxs)(a.p,{children:["Before we can configure DMS, we first need to ",(0,s.jsx)(a.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/enable-binary-logging-aurora/",children:"prepare the MySQL instance"}),"  for change capture, by ensuring backups are enabled and binlog is turned on.\n",(0,s.jsx)(a.img,{src:t(48402).A+"",width:"2930",height:"302"})]}),"\n",(0,s.jsxs)(a.p,{children:["Now, proceed to create endpoints in DMS that capture MySQL data and  ",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3",children:"store in S3, as parquet files"}),"."]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Source ",(0,s.jsx)(a.em,{children:"hudi-source-db"})," endpoint, points to the DB server and provides basic authentication details"]}),"\n",(0,s.jsxs)(a.li,{children:["Target ",(0,s.jsx)(a.em,{children:"parquet-s3"})," endpoint, points to the bucket and folder on s3 to store the change logs records as parquet files\n",(0,s.jsx)(a.img,{src:t(74276).A+"",width:"836",height:"548"}),"\n",(0,s.jsx)(a.img,{src:t(4191).A+"",width:"849",height:"575"}),"\n",(0,s.jsx)(a.img,{src:t(21582).A+"",width:"1025",height:"305"})]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Then proceed to create a migration task, as below. Give it a name, connect the source to the target and be sure to pick the right ",(0,s.jsx)(a.em,{children:"Migration type"})," as shown below, to ensure ongoing changes are continuously replicated to S3. Also make sure to specify, the rules using which DMS decides which MySQL schema/tables to replicate. In this example, we simply whitelist ",(0,s.jsx)(a.em,{children:"orders"})," table under the ",(0,s.jsx)(a.em,{children:"hudi_dms"})," schema, as specified in the table SQL above."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.img,{src:t(9296).A+"",width:"507",height:"503"}),"\n",(0,s.jsx)(a.img,{src:t(62795).A+"",width:"816",height:"583"})]}),"\n",(0,s.jsx)(a.p,{children:"Starting the DMS task and should result in an initial load, like below."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:t(67441).A+"",width:"607",height:"436"})}),"\n",(0,s.jsx)(a.p,{children:"Simply reading the raw initial load file, shoud give the same values as the upstream table"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'scala> spark.read.parquet("s3://hudi-dms-demo/orders/hudi_dms/orders/*").sort("updated_at").show\n \n+--------+---------+-------------+-------------------+-------------------+\n|order_id|order_qty|customer_name|         updated_at|         created_at|\n+--------+---------+-------------+-------------------+-------------------+\n|       2|       10|        peter|2020-01-20 20:12:22|2020-01-20 20:12:22|\n|       1|       10|       victor|2020-01-20 20:12:31|2020-01-20 20:12:31|\n+--------+---------+-------------+-------------------+-------------------+\n\n'})}),"\n",(0,s.jsx)(a.h2,{id:"applying-change-logs-using-hudi-deltastreamer",children:"Applying Change Logs using Hudi DeltaStreamer"}),"\n",(0,s.jsxs)(a.p,{children:["Now, we are ready to start consuming the change logs. Hudi DeltaStreamer runs as Spark job on your favorite workflow scheduler (it also supports a continuous mode using ",(0,s.jsx)(a.em,{children:"--continuous"})," flag, where it runs as a long running Spark job), that tails a given path on S3 (or any DFS implementation) for new files and can issue an ",(0,s.jsx)(a.em,{children:"upsert"})," to a target hudi dataset. The tool automatically checkpoints itself and thus to repeatedly ingest, all one needs to do is to keep executing the DeltaStreamer periodically."]}),"\n",(0,s.jsx)(a.p,{children:"With an initial load already on S3, we then run the following command (deltastreamer command, here on) to ingest the full load first and create a Hudi dataset on S3."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"spark-submit --class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer  \\\n  --packages org.apache.spark:spark-avro_2.11:2.4.4 \\\n  --master yarn --deploy-mode client \\\n  hudi-utilities-bundle_2.11-0.5.1-SNAPSHOT.jar \\\n  --table-type COPY_ON_WRITE \\\n  --source-ordering-field updated_at \\\n  --source-class org.apache.hudi.utilities.sources.ParquetDFSSource \\\n  --target-base-path s3://hudi-dms-demo/hudi_orders --target-table hudi_orders \\\n  --transformer-class org.apache.hudi.utilities.transform.AWSDmsTransformer \\\n  --payload-class org.apache.hudi.payload.AWSDmsAvroPayload \\\n  --hoodie-conf hoodie.datasource.write.recordkey.field=order_id,hoodie.datasource.write.partitionpath.field=customer_name,hoodie.deltastreamer.source.dfs.root=s3://hudi-dms-demo/orders/hudi_dms/orders\n"})}),"\n",(0,s.jsx)(a.p,{children:"A few things are going on here"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["First, we specify the ",(0,s.jsx)(a.em,{children:"--table-type"})," as COPY_ON_WRITE. Hudi also supports another _MERGE_ON_READ ty_pe you can use if you choose from."]}),"\n",(0,s.jsxs)(a.li,{children:["To handle cases where the input parquet files contain multiple updates/deletes or insert/updates to the same record, we use ",(0,s.jsx)(a.em,{children:"updated_at"})," as the ordering field. This ensures that the change record which has the latest timestamp will be reflected in Hudi."]}),"\n",(0,s.jsx)(a.li,{children:"We specify a target base path and a table table, all needed for creating and writing to the Hudi table"}),"\n",(0,s.jsxs)(a.li,{children:["We use a special payload class - ",(0,s.jsx)(a.em,{children:"AWSDMSAvroPayload"})," , to handle the different change operations correctly. The parquet files generated have an ",(0,s.jsx)(a.em,{children:"Op"})," field, that indicates whether a given change record is an insert (I), delete (D) or update (U) and the payload implementation uses this field to decide how to handle a given change record."]}),"\n",(0,s.jsxs)(a.li,{children:["You may also notice a special transformer class ",(0,s.jsx)(a.em,{children:"AWSDmsTransformer"})," , being specified. The reason here is tactical, but important. The initial load file does not contain an ",(0,s.jsx)(a.em,{children:"Op"})," field, so this adds one to Hudi table schema additionally."]}),"\n",(0,s.jsxs)(a.li,{children:["Finally, we specify the record key for the Hudi table as same as the upstream table. Then we specify partitioning by ",(0,s.jsx)(a.em,{children:"customer_name"}),"  and also the root of the DMS output."]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"Once the command is run, the Hudi table should be created and have same records as the upstream table (with all the _hoodie fields as well)."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'scala> spark.read.format("org.apache.hudi").load("s3://hudi-dms-demo/hudi_orders/*/*.parquet").show\n+-------------------+--------------------+------------------+----------------------+--------------------+--------+---------+-------------+-------------------+-------------------+---+\n|_hoodie_commit_time|_hoodie_commit_seqno|_hoodie_record_key|_hoodie_partition_path|   _hoodie_file_name|order_id|order_qty|customer_name|         updated_at|         created_at| Op|\n+-------------------+--------------------+------------------+----------------------+--------------------+--------+---------+-------------+-------------------+-------------------+---+\n|     20200120205028|  20200120205028_0_1|                 2|                 peter|af9a2525-a486-40e...|       2|       10|        peter|2020-01-20 20:12:22|2020-01-20 20:12:22|   |\n|     20200120205028|  20200120205028_1_1|                 1|                victor|8e431ece-d51c-4c7...|       1|       10|       victor|2020-01-20 20:12:31|2020-01-20 20:12:31|   |\n+-------------------+--------------------+------------------+----------------------+--------------------+--------+---------+-------------+-------------------+-------------------+---+\n'})}),"\n",(0,s.jsx)(a.p,{children:"Now, let's do an insert and an update"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"INSERT INTO orders(order_id, order_qty, customer_name) VALUES(3, 30, 'sandy');\nUPDATE orders set order_qty = 20 where order_id = 2;\n"})}),"\n",(0,s.jsx)(a.p,{children:"This will add a new parquet file to the DMS output folder and when the deltastreamer command is run again, it will go ahead and apply these to the Hudi table."}),"\n",(0,s.jsxs)(a.p,{children:["So, querying the Hudi table now would yield 3 rows and the ",(0,s.jsx)(a.em,{children:"hoodie_commit_time"})," accurately reflects when these writes happened. You can notice that order_qty for order_id=2, is updated from 10 to 20!"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"+-------------------+--------------------+------------------+----------------------+--------------------+---+--------+---------+-------------+-------------------+-------------------+\n|_hoodie_commit_time|_hoodie_commit_seqno|_hoodie_record_key|_hoodie_partition_path|   _hoodie_file_name| Op|order_id|order_qty|customer_name|         updated_at|         created_at|\n+-------------------+--------------------+------------------+----------------------+--------------------+---+--------+---------+-------------+-------------------+-------------------+\n|     20200120211526|  20200120211526_0_1|                 2|                 peter|af9a2525-a486-40e...|  U|       2|       20|        peter|2020-01-20 21:11:47|2020-01-20 20:12:22|\n|     20200120211526|  20200120211526_1_1|                 3|                 sandy|566eb34a-e2c5-44b...|  I|       3|       30|        sandy|2020-01-20 21:11:24|2020-01-20 21:11:24|\n|     20200120205028|  20200120205028_1_1|                 1|                victor|8e431ece-d51c-4c7...|   |       1|       10|       victor|2020-01-20 20:12:31|2020-01-20 20:12:31|\n+-------------------+--------------------+------------------+----------------------+--------------------+---+--------+---------+-------------+-------------------+-------------------+\n"})}),"\n",(0,s.jsx)(a.p,{children:"A nice debugging aid would be read all of the DMS output now and sort it by update_at, which should give us a sequence of changes that happened on the upstream table. As we can see, the Hudi table above is a compacted snapshot of this raw change log."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"+----+--------+---------+-------------+-------------------+-------------------+\n|  Op|order_id|order_qty|customer_name|         updated_at|         created_at|\n+----+--------+---------+-------------+-------------------+-------------------+\n|null|       2|       10|        peter|2020-01-20 20:12:22|2020-01-20 20:12:22|\n|null|       1|       10|       victor|2020-01-20 20:12:31|2020-01-20 20:12:31|\n|   I|       3|       30|        sandy|2020-01-20 21:11:24|2020-01-20 21:11:24|\n|   U|       2|       20|        peter|2020-01-20 21:11:47|2020-01-20 20:12:22|\n+----+--------+---------+-------------+-------------------+-------------------+\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Initial load with no ",(0,s.jsx)(a.em,{children:"Op"})," field value , followed by an insert and an update."]}),"\n",(0,s.jsx)(a.p,{children:"Now, lets do deletes an inserts"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"DELETE FROM orders WHERE order_id = 2;\nINSERT INTO orders(order_id, order_qty, customer_name) VALUES(4, 40, 'barry');\nINSERT INTO orders(order_id, order_qty, customer_name) VALUES(5, 50, 'nathan');\n"})}),"\n",(0,s.jsx)(a.p,{children:"This should result in more files on S3, written by DMS , which the DeltaStreamer command will continue to process incrementally (i.e only the newly written files are read each time)"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:t(79013).A+"",width:"1127",height:"568"})}),"\n",(0,s.jsxs)(a.p,{children:["Running the deltastreamer command again, would result in the follow state for the Hudi table. You can notice the two new records and that the ",(0,s.jsx)(a.em,{children:"order_id=2"})," is now gone"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"+-------------------+--------------------+------------------+----------------------+--------------------+---+--------+---------+-------------+-------------------+-------------------+\n|_hoodie_commit_time|_hoodie_commit_seqno|_hoodie_record_key|_hoodie_partition_path|   _hoodie_file_name| Op|order_id|order_qty|customer_name|         updated_at|         created_at|\n+-------------------+--------------------+------------------+----------------------+--------------------+---+--------+---------+-------------+-------------------+-------------------+\n|     20200120212522|  20200120212522_1_1|                 5|                nathan|3da94b20-c70b-457...|  I|       5|       50|       nathan|2020-01-20 21:23:00|2020-01-20 21:23:00|\n|     20200120212522|  20200120212522_2_1|                 4|                 barry|8cc46715-8f0f-48a...|  I|       4|       40|        barry|2020-01-20 21:22:49|2020-01-20 21:22:49|\n|     20200120211526|  20200120211526_1_1|                 3|                 sandy|566eb34a-e2c5-44b...|  I|       3|       30|        sandy|2020-01-20 21:11:24|2020-01-20 21:11:24|\n|     20200120205028|  20200120205028_1_1|                 1|                victor|8e431ece-d51c-4c7...|   |       1|       10|       victor|2020-01-20 20:12:31|2020-01-20 20:12:31|\n+-------------------+--------------------+------------------+----------------------+--------------------+---+--------+---------+-------------+-------------------+-------------------+\n"})}),"\n",(0,s.jsx)(a.p,{children:"Our little informal change log query yields the following."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"+----+--------+---------+-------------+-------------------+-------------------+\n|  Op|order_id|order_qty|customer_name|         updated_at|         created_at|\n+----+--------+---------+-------------+-------------------+-------------------+\n|null|       2|       10|        peter|2020-01-20 20:12:22|2020-01-20 20:12:22|\n|null|       1|       10|       victor|2020-01-20 20:12:31|2020-01-20 20:12:31|\n|   I|       3|       30|        sandy|2020-01-20 21:11:24|2020-01-20 21:11:24|\n|   U|       2|       20|        peter|2020-01-20 21:11:47|2020-01-20 20:12:22|\n|   D|       2|       20|        peter|2020-01-20 21:11:47|2020-01-20 20:12:22|\n|   I|       4|       40|        barry|2020-01-20 21:22:49|2020-01-20 21:22:49|\n|   I|       5|       50|       nathan|2020-01-20 21:23:00|2020-01-20 21:23:00|\n+----+--------+---------+-------------+-------------------+-------------------+\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Note that the delete and update have the same ",(0,s.jsx)(a.em,{children:"updated_at,"})," value. thus it can very well order differently here.. In short this way of looking at the changelog has its caveats. For a true changelog of the Hudi table itself, you can issue an ",(0,s.jsx)(a.a,{href:"http://hudi.apache.org/docs/querying_data",children:"incremental query"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"And Life goes on ..... Hope this was useful to all the data engineers out there!"})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},47736:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/change-capture-architecture-dc9c69c50296a6a38721ec93fee9ba71.png"},48402:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/change-logs-mysql-a76f7760403ba59c5d11ba48b12cd4d6.png"},79013:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/dms-demo-files-2c926cf6a9fb12b5e9bc44a65df8e2b7.png"},67441:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/dms-task-cf605b4a3c85bea264a16a20a1645608.png"},74276:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/s3-endpoint-configuration-1-6246a9d09772ac527a13f5b26a6fb38e.png"},4191:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/s3-endpoint-configuration-2-b275c182ed2fa52e4c7a33bffba394d5.png"},21582:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/s3-endpoint-list-8d89e05bd7f4d82958a6c11a0cc0c8ea.png"},9296:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/s3-migration-task-1-61e22d0e163cf67bb9a9dd0879222177.png"},62795:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/s3-migration-task-2-797ea4b89d2a3be41d476785040e2886.png"},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>o});var n=t(96540);const s={},r=n.createContext(s);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:a},e.children)}},8662:e=>{e.exports=JSON.parse('{"permalink":"/blog/2020/01/20/change-capture-using-aws","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-01-20-change-capture-using-aws.md","source":"@site/blog/2020-01-20-change-capture-using-aws.md","title":"Change Capture Using AWS Database Migration Service and Hudi","description":"One of the core use-cases for Apache Hudi is enabling seamless, efficient database ingestion to your data lake. Even though a lot has been talked about and even users already adopting this model, content on how to go about this is sparse.","date":"2020-01-20T00:00:00.000Z","tags":[{"inline":true,"label":"how-to","permalink":"/blog/tags/how-to"},{"inline":true,"label":"change data capture","permalink":"/blog/tags/change-data-capture"},{"inline":true,"label":"cdc","permalink":"/blog/tags/cdc"},{"inline":true,"label":"apache hudi","permalink":"/blog/tags/apache-hudi"}],"readingTime":7.42,"hasTruncateMarker":true,"authors":[{"name":"vinoth","key":null,"page":null}],"frontMatter":{"title":"Change Capture Using AWS Database Migration Service and Hudi","excerpt":"In this blog, we will build an end-end solution for capturing changes from a MySQL instance running on AWS RDS to a Hudi table on S3, using capabilities in the Hudi 0.5.1 release.","author":"vinoth","category":"blog","image":"/assets/images/blog/change-capture-architecture.png","tags":["how-to","change data capture","cdc","apache hudi"]},"unlisted":false,"prevItem":{"title":"Export Hudi datasets as a copy or as different formats","permalink":"/blog/2020/03/22/exporting-hudi-datasets"},"nextItem":{"title":"Delete support in Hudi","permalink":"/blog/2020/01/15/delete-support-in-hudi"}}')}}]);