"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[80458],{19667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"ingestion_flink","title":"Using Flink","description":"CDC Ingestion","source":"@site/docs/ingestion_flink.md","sourceDirName":".","slug":"/ingestion_flink","permalink":"/cn/docs/next/ingestion_flink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/ingestion_flink.md","tags":[],"version":"current","frontMatter":{"title":"Using Flink","keywords":["hudi","flink","streamer","ingestion"]},"sidebar":"docs","previous":{"title":"Using Spark","permalink":"/cn/docs/next/hoodie_streaming_ingestion"},"next":{"title":"Using Kafka Connect","permalink":"/cn/docs/next/ingestion_kafka_connect"}}');var s=n(74848),d=n(28453);const r={title:"Using Flink",keywords:["hudi","flink","streamer","ingestion"]},l=void 0,c={},o=[{value:"CDC Ingestion",id:"cdc-ingestion",level:3},{value:"Bulk Insert",id:"bulk-insert",level:3},{value:"Options",id:"options",level:4},{value:"Index Bootstrap",id:"index-bootstrap",level:3},{value:"Options",id:"options-1",level:4},{value:"How To Use",id:"how-to-use",level:4},{value:"Changelog Mode",id:"changelog-mode",level:3},{value:"Options",id:"options-2",level:4},{value:"Append Mode",id:"append-mode",level:3},{value:"Inline Clustering",id:"inline-clustering",level:4},{value:"Async Clustering",id:"async-clustering",level:4},{value:"Clustering Plan Strategy",id:"clustering-plan-strategy",level:4},{value:"Bucket Index",id:"bucket-index",level:3},{value:"Options",id:"options-3",level:4},{value:"Rate Limit",id:"rate-limit",level:3},{value:"Options",id:"options-4",level:4}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"cdc-ingestion",children:"CDC Ingestion"}),"\n",(0,s.jsx)(t.p,{children:"CDC(change data capture) keep track of the data changes evolving in a source system so a downstream process or system can action that change.\nWe recommend two ways for syncing CDC data into Hudi:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"slide1 title",src:n(32620).A+"",width:"1440",height:"626"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Using the Ververica ",(0,s.jsx)(t.a,{href:"https://github.com/ververica/flink-cdc-connectors",children:"flink-cdc-connectors"})," directly connect to DB Server to sync the binlog data into Hudi.\nThe advantage is that it does not rely on message queues, but the disadvantage is that it puts pressure on the db server;"]}),"\n",(0,s.jsx)(t.li,{children:"Consume data from a message queue (for e.g, the Kafka) using the flink cdc format, the advantage is that it is highly scalable,\nbut the disadvantage is that it relies on message queues."}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If the upstream data cannot guarantee the order, you need to specify option ",(0,s.jsx)(t.code,{children:"write.precombine.field"})," explicitly;"]}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"bulk-insert",children:"Bulk Insert"}),"\n",(0,s.jsxs)(t.p,{children:["For the demand of snapshot data import. If the snapshot data comes from other data sources, use the ",(0,s.jsx)(t.code,{children:"bulk_insert"})," mode to quickly\nimport the snapshot data into Hudi."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"bulk_insert"})," eliminates the serialization and data merging. The data deduplication is skipped, so the user need to guarantee the uniqueness of the data."]})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"bulk_insert"})," is more efficient in the ",(0,s.jsx)(t.code,{children:"batch execution mode"}),". By default, the ",(0,s.jsx)(t.code,{children:"batch execution mode"})," sorts the input records\nby the partition path and writes these records to Hudi, which can avoid write performance degradation caused by\nfrequent ",(0,s.jsx)(t.code,{children:"file handle"})," switching."]})}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:["The parallelism of ",(0,s.jsx)(t.code,{children:"bulk_insert"})," is specified by ",(0,s.jsx)(t.code,{children:"write.tasks"}),". The parallelism will affect the number of small files.\nIn theory, the parallelism of ",(0,s.jsx)(t.code,{children:"bulk_insert"})," is the number of ",(0,s.jsx)(t.code,{children:"bucket"}),"s (In particular, when each bucket writes to maximum file size, it\nwill rollover to the new file handle. Finally, ",(0,s.jsx)(t.code,{children:"the number of files"})," >= ",(0,s.jsx)(t.a,{href:"/docs/configurations#writebucket_assigntasks",children:(0,s.jsx)(t.code,{children:"write.bucket_assign.tasks"})}),"."]})]}),"\n",(0,s.jsx)(t.h4,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option Name"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"write.operation"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"true"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"upsert"})}),(0,s.jsxs)(t.td,{children:["Setting as ",(0,s.jsx)(t.code,{children:"bulk_insert"})," to open this function"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"write.tasks"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"4"})}),(0,s.jsxs)(t.td,{children:["The parallelism of ",(0,s.jsx)(t.code,{children:"bulk_insert"}),", ",(0,s.jsx)(t.code,{children:"the number of files"})," >= ",(0,s.jsx)(t.a,{href:"/docs/configurations#writebucket_assigntasks",children:(0,s.jsx)(t.code,{children:"write.bucket_assign.tasks"})})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"write.bulk_insert.shuffle_input"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"true"})}),(0,s.jsx)(t.td,{children:"Whether to shuffle data according to the input field before writing. Enabling this option will reduce the number of small files, but there may be a risk of data skew"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"write.bulk_insert.sort_input"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"true"})}),(0,s.jsx)(t.td,{children:"Whether to sort data according to the input field before writing. Enabling this option will reduce the number of small files when a write task writes multiple partitions"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"write.sort.memory"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"128"})}),(0,s.jsxs)(t.td,{children:["Available managed memory of sort operator. default  ",(0,s.jsx)(t.code,{children:"128"})," MB"]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"index-bootstrap",children:"Index Bootstrap"}),"\n",(0,s.jsxs)(t.p,{children:["For the demand of ",(0,s.jsx)(t.code,{children:"snapshot data"})," + ",(0,s.jsx)(t.code,{children:"incremental data"})," import. If the ",(0,s.jsx)(t.code,{children:"snapshot data"})," already insert into Hudi by  ",(0,s.jsx)(t.a,{href:"#bulk-insert",children:"bulk insert"}),".\nUser can insert ",(0,s.jsx)(t.code,{children:"incremental data"})," in real time and ensure the data is not repeated by using the index bootstrap function."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["If you think this process is very time-consuming, you can add resources to write in streaming mode while writing ",(0,s.jsx)(t.code,{children:"snapshot data"}),",\nand then reduce the resources to write ",(0,s.jsx)(t.code,{children:"incremental data"})," (or open the rate limit function)."]})}),"\n",(0,s.jsx)(t.h4,{id:"options-1",children:"Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option Name"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"index.bootstrap.enabled"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"true"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"When index bootstrap is enabled, the remain records in Hudi table will be loaded into the Flink state at one time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"index.partition.regex"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"*"})}),(0,s.jsx)(t.td,{children:"Optimize option. Setting regular expressions to filter partitions. By default, all partitions are loaded into flink state"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"how-to-use",children:"How To Use"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"CREATE TABLE"})," creates a statement corresponding to the Hudi table. Note that the ",(0,s.jsx)(t.code,{children:"table.type"})," must be correct."]}),"\n",(0,s.jsxs)(t.li,{children:["Setting ",(0,s.jsx)(t.code,{children:"index.bootstrap.enabled"})," = ",(0,s.jsx)(t.code,{children:"true"})," to enable the index bootstrap function."]}),"\n",(0,s.jsxs)(t.li,{children:["Setting Flink checkpoint failure tolerance in ",(0,s.jsx)(t.code,{children:"flink-conf.yaml"})," : ",(0,s.jsx)(t.code,{children:"execution.checkpointing.tolerable-failed-checkpoints = n"})," (depending on Flink checkpoint scheduling times)."]}),"\n",(0,s.jsx)(t.li,{children:"Waiting until the first checkpoint succeeds, indicating that the index bootstrap completed."}),"\n",(0,s.jsx)(t.li,{children:"After the index bootstrap completed, user can exit and save the savepoint (or directly use the externalized checkpoint)."}),"\n",(0,s.jsxs)(t.li,{children:["Restart the job, setting ",(0,s.jsx)(t.code,{children:"index.bootstrap.enable"})," as ",(0,s.jsx)(t.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Index bootstrap is blocking, so checkpoint cannot be completed during index bootstrap."}),"\n",(0,s.jsx)(t.li,{children:"Index bootstrap triggers by the input data. User need to ensure that there is at least one record in each partition."}),"\n",(0,s.jsxs)(t.li,{children:["Index bootstrap executes concurrently. User can search in log by ",(0,s.jsx)(t.code,{children:"finish loading the index under partition"})," and ",(0,s.jsx)(t.code,{children:"Load record form file"})," to observe the progress of index bootstrap."]}),"\n",(0,s.jsx)(t.li,{children:"The first successful checkpoint indicates that the index bootstrap completed. There is no need to load the index again when recovering from the checkpoint."}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"changelog-mode",children:"Changelog Mode"}),"\n",(0,s.jsx)(t.p,{children:"Hudi can keep all the intermediate changes (I / -U / U / D) of messages, then consumes through stateful computing of flink to have a near-real-time\ndata warehouse ETL pipeline (Incremental computing). Hudi MOR table stores messages in the forms of rows, which supports the retention of all change logs (Integration at the format level).\nAll changelog records can be consumed with Flink streaming reader."}),"\n",(0,s.jsx)(t.h4,{id:"options-2",children:"Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option Name"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Remarks"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"changelog.enabled"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsxs)(t.td,{children:["It is turned off by default, to have the ",(0,s.jsx)(t.code,{children:"upsert"})," semantics, only the merged messages are ensured to be kept, intermediate changes may be merged. Setting to true to support consumption of all changes"]})]})})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Batch (Snapshot) read still merge all the intermediate changes, regardless of whether the format has stored the intermediate changelog messages."})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["After setting ",(0,s.jsx)(t.code,{children:"changelog.enable"})," as ",(0,s.jsx)(t.code,{children:"true"}),", the retention of changelog records are only best effort: the asynchronous compaction task will merge the changelog records into one record, so if the\nstream source does not consume timely, only the merged record for each key can be read after compaction. The solution is to reserve some buffer time for the reader by adjusting the compaction strategy, such as\nthe compaction options: ",(0,s.jsx)(t.a,{href:"#compaction",children:(0,s.jsx)(t.code,{children:"compaction.delta_commits"})})," and ",(0,s.jsx)(t.a,{href:"#compaction",children:(0,s.jsx)(t.code,{children:"compaction.delta_seconds"})}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"append-mode",children:"Append Mode"}),"\n",(0,s.jsxs)(t.p,{children:["For ",(0,s.jsx)(t.code,{children:"INSERT"})," mode write operation, the current work flow is:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"For Merge_On_Read table, the small file strategies are by default applied: tries to append to the small avro log files first"}),"\n",(0,s.jsx)(t.li,{children:"For Copy_On_Write table, write new parquet files directly, no small file strategies are applied"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Hudi supports rich clustering strategies to optimize the files layout for ",(0,s.jsx)(t.code,{children:"INSERT"})," mode:"]}),"\n",(0,s.jsx)(t.h4,{id:"inline-clustering",children:"Inline Clustering"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Only Copy_On_Write table is supported."})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option Name"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Remarks"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"write.insert.cluster"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Whether to merge small files while ingesting, for COW table, open the option to enable the small file merging strategy(no deduplication for keys but the throughput will be affected)"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"async-clustering",children:"Async Clustering"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option Name"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clustering.schedule.enabled"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Whether to schedule clustering plan during write process, by default false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clustering.delta_commits"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"4"})}),(0,s.jsxs)(t.td,{children:["Delta commits to schedule the clustering plan, only valid when ",(0,s.jsx)(t.code,{children:"clustering.schedule.enabled"})," is true"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clustering.async.enabled"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Whether to execute clustering plan asynchronously, by default false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clustering.tasks"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"4"})}),(0,s.jsx)(t.td,{children:"Parallelism of the clustering tasks"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clustering.plan.strategy.target.file.max.bytes"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"1024*1024*1024"})}),(0,s.jsx)(t.td,{children:"The target file size for clustering group, by default 1GB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clustering.plan.strategy.small.file.limit"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"600"})}),(0,s.jsx)(t.td,{children:"The file that has less size than the threshold (unit MB) are candidates for clustering"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clustering.plan.strategy.sort.columns"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"N/A"})}),(0,s.jsx)(t.td,{children:"The columns to sort by when clustering"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"clustering-plan-strategy",children:"Clustering Plan Strategy"}),"\n",(0,s.jsx)(t.p,{children:"Custom clustering strategy is supported."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option Name"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clustering.plan.partition.filter.mode"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"NONE"})}),(0,s.jsxs)(t.td,{children:["Valid options 1) ",(0,s.jsx)(t.code,{children:"NONE"}),": no limit; 2) ",(0,s.jsx)(t.code,{children:"RECENT_DAYS"}),": choose partitions that represent recent days; 3) ",(0,s.jsx)(t.code,{children:"SELECTED_PARTITIONS"}),": specific partitions"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clustering.plan.strategy.daybased.lookback.partitions"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"2"})}),(0,s.jsxs)(t.td,{children:["Valid for ",(0,s.jsx)(t.code,{children:"RECENT_DAYS"})," mode"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clustering.plan.strategy.cluster.begin.partition"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"N/A"})}),(0,s.jsxs)(t.td,{children:["Valid for ",(0,s.jsx)(t.code,{children:"SELECTED_PARTITIONS"})," mode, specify the partition to begin with(inclusive)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clustering.plan.strategy.cluster.end.partition"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"N/A"})}),(0,s.jsxs)(t.td,{children:["Valid for ",(0,s.jsx)(t.code,{children:"SELECTED_PARTITIONS"})," mode, specify the partition to end with(inclusive)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clustering.plan.strategy.partition.regex.pattern"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"N/A"})}),(0,s.jsx)(t.td,{children:"The regex to filter the partitions"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clustering.plan.strategy.partition.selected"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"N/A"})}),(0,s.jsxs)(t.td,{children:["Specific partitions separated by comma ",(0,s.jsx)(t.code,{children:","})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"bucket-index",children:"Bucket Index"}),"\n",(0,s.jsx)(t.p,{children:"By default, flink uses the state-backend to keep the file index: the mapping from primary key to fileId. When the input data set is large,\nthere is possibility the cost of the state be a bottleneck, the bucket index use deterministic hash algorithm for shuffling the records into\nbuckets, thus can avoid the storage and query overhead of indexes."}),"\n",(0,s.jsx)(t.h4,{id:"options-3",children:"Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option Name"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"index.type"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"FLINK_STATE"})}),(0,s.jsxs)(t.td,{children:["Set up as ",(0,s.jsx)(t.code,{children:"BUCKET"})," to use bucket index"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"hoodie.bucket.index.hash.field"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Primary key"}),(0,s.jsx)(t.td,{children:"Can be a subset of the primary key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"hoodie.bucket.index.num.buckets"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"4"})}),(0,s.jsx)(t.td,{children:"The number of buckets per-partition, it is immutable once set up"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Comparing to state index:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Bucket index has no computing and storage cost of state-backend index, thus has better performance"}),"\n",(0,s.jsx)(t.li,{children:"Bucket index can not expand the buckets dynamically, the state-backend index can expand the buckets dynamically based on current file layout"}),"\n",(0,s.jsx)(t.li,{children:"Bucket index can not handle changes among partitions(no limit if the input itself is CDC stream), state-backend index has no limit"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"rate-limit",children:"Rate Limit"}),"\n",(0,s.jsx)(t.p,{children:"There are many use cases that user put the full history data set onto the message queue together with the realtime incremental data. Then they consume the data from the queue into the hudi from the earliest offset using flink. Consuming history data set has these characteristics:\n1). The instant throughput is huge 2). It has serious disorder (with random writing partitions). It will lead to degradation of writing performance and throughput glitches. For this case, the speed limit parameter can be turned on to ensure smooth writing of the flow."}),"\n",(0,s.jsx)(t.h4,{id:"options-4",children:"Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option Name"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Remarks"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"write.rate.limit"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0"})}),(0,s.jsx)(t.td,{children:"Default disable the rate limit"})]})})]})]})}function a(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},32620:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/cdc-2-hudi-d151389758f4ce3fd873c1258b0a8ce5.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(96540);const s={},d=i.createContext(s);function r(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);