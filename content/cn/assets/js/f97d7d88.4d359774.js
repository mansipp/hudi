"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[54200],{70074:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"use_cases","title":"Use Cases","description":"Apache Hudi provides the foundational features required to build a state-of-the-art Lakehouse.","source":"@site/versioned_docs/version-0.10.1/use_cases.md","sourceDirName":".","slug":"/use_cases","permalink":"/cn/docs/0.10.1/use_cases","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.1/use_cases.md","tags":[],"version":"0.10.1","frontMatter":{"title":"Use Cases","keywords":["hudi","data ingestion","etl","real time","use cases"],"summary":"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency","toc":true,"last_modified_at":"2019-12-30T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"JuiceFS","permalink":"/cn/docs/0.10.1/jfs_hoodie"},"next":{"title":"FAQs","permalink":"/cn/docs/0.10.1/faq"}}');var n=t(74848),s=t(28453);const o={title:"Use Cases",keywords:["hudi","data ingestion","etl","real time","use cases"],summary:"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},r=void 0,l={},c=[{value:"A Streaming Data Lake",id:"a-streaming-data-lake",level:2},{value:"Near Real-Time Ingestion",id:"near-real-time-ingestion",level:3},{value:"Incremental Processing Pipelines",id:"incremental-processing-pipelines",level:3},{value:"Unified Batch and Streaming",id:"unified-batch-and-streaming",level:3},{value:"Cloud-Native Tables",id:"cloud-native-tables",level:2},{value:"Schema Management",id:"schema-management",level:3},{value:"ACID Transactions",id:"acid-transactions",level:3},{value:"Efficient Upserts and Deletes",id:"efficient-upserts-and-deletes",level:3},{value:"Time-Travel",id:"time-travel",level:3},{value:"Data Lake Performance Optimizations",id:"data-lake-performance-optimizations",level:2}];function d(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Apache Hudi provides the foundational features required to build a state-of-the-art Lakehouse.\nThe following are examples of use cases for why many choose to use Apache Hudi:"}),"\n",(0,n.jsx)(a.h2,{id:"a-streaming-data-lake",children:"A Streaming Data Lake"}),"\n",(0,n.jsxs)(a.p,{children:["Apache Hudi is a Streaming Data Lake Platform that unlocks near real-time data ingestion and incremental processing pipelines with ease.\nThis blog post outlines this use case in more depth - ",(0,n.jsx)(a.a,{href:"https://hudi.apache.org/blog/2021/07/21/streaming-data-lake-platform",children:"https://hudi.apache.org/blog/2021/07/21/streaming-data-lake-platform"})]}),"\n",(0,n.jsx)(a.h3,{id:"near-real-time-ingestion",children:"Near Real-Time Ingestion"}),"\n",(0,n.jsxs)(a.p,{children:["Ingesting data from OLTP sources like (event logs, databases, external sources) into a ",(0,n.jsx)(a.a,{href:"http://martinfowler.com/bliki/DataLake",children:"Data Lake"}),' is a common problem,\nthat is unfortunately solved in a piecemeal fashion, using a medley of ingestion tools. This "raw data" layer of the data lake often forms the bedrock on which\nmore value is created.']}),"\n",(0,n.jsxs)(a.p,{children:["For RDBMS ingestion, Hudi provides ",(0,n.jsx)(a.strong,{children:"faster loads via Upserts"}),", as opposed costly & inefficient bulk loads. It's very common to use a change capture solution like\n",(0,n.jsx)(a.a,{href:"http://debezium.io/",children:"Debezium"})," or ",(0,n.jsx)(a.a,{href:"https://docs.confluent.io/platform/current/connect/index",children:"Kafka Connect"})," or\n",(0,n.jsx)(a.a,{href:"https://sqoop.apache.org/docs/1.4.2/SqoopUserGuide#_incremental_imports",children:"Sqoop Incremental Import"})," and apply them to an\nequivalent Hudi table on DFS. For NoSQL datastores like ",(0,n.jsx)(a.a,{href:"http://cassandra.apache.org/",children:"Cassandra"})," / ",(0,n.jsx)(a.a,{href:"http://www.project-voldemort.com/voldemort/",children:"Voldemort"})," / ",(0,n.jsx)(a.a,{href:"https://hbase.apache.org/",children:"HBase"}),",\neven moderately big installations store billions of rows. It goes without saying that ",(0,n.jsx)(a.strong,{children:"full bulk loads are simply infeasible"})," and more efficient approaches\nare needed if ingestion is to keep up with the typically high update volumes."]}),"\n",(0,n.jsxs)(a.p,{children:["Even for immutable data sources like ",(0,n.jsx)(a.a,{href:"https://kafka.apache.org",children:"Kafka"}),", there is often a need to de-duplicate the incoming events against what's stored on DFS.\nHudi achieves this by ",(0,n.jsx)(a.a,{href:"http://hudi.apache.org/blog/hudi-indexing-mechanisms/",children:"employing indexes"})," of different kinds, quickly and efficiently."]}),"\n",(0,n.jsx)(a.p,{children:"All of this is seamlessly achieved by the Hudi DeltaStreamer tool, which is maintained in tight integration with rest of the code\nand we are always trying to add more capture sources, to make this easier for the users. The tool also has a continuous mode, where it\ncan self-manage clustering/compaction asynchronously, without blocking ingestion, significantly improving data freshness."}),"\n",(0,n.jsx)(a.h3,{id:"incremental-processing-pipelines",children:"Incremental Processing Pipelines"}),"\n",(0,n.jsxs)(a.p,{children:["Data Lake ETL typically involves building a chain of tables derived from each other via DAGs expressed as workflows. Workflows often depend on new data being output by\nmultiple upstream workflows and traditionally, availability of new data is indicated by a new DFS Folder/Hive Partition.\nLet's take a concrete example to illustrate this. An upstream workflow ",(0,n.jsx)(a.code,{children:"U"})," can create a Hive partition for every hour, with data for that hour (event_time) at the end of each hour (processing_time), providing effective freshness of 1 hour.\nThen, a downstream workflow ",(0,n.jsx)(a.code,{children:"D"}),", kicks off immediately after ",(0,n.jsx)(a.code,{children:"U"})," finishes, and does its own processing for the next hour, increasing the effective latency to 2 hours."]}),"\n",(0,n.jsxs)(a.p,{children:["The above paradigm simply ignores late arriving data i.e when ",(0,n.jsx)(a.code,{children:"processing_time"})," and ",(0,n.jsx)(a.code,{children:"event_time"})," drift apart.\nUnfortunately, in today's post-mobile & pre-IoT world, ",(0,n.jsx)(a.strong,{children:"late data from intermittently connected mobile devices & sensors are the norm, not an anomaly"}),".\nIn such cases, the only remedy to guarantee correctness is to reprocess the last few hours worth of data, over and over again each hour,\nwhich can significantly hurt the efficiency across the entire ecosystem. For e.g; imagine reprocessing TBs worth of data every hour across hundreds of workflows."]}),"\n",(0,n.jsxs)(a.p,{children:["Hudi comes to the rescue again, by providing a way to consume new data (including late data) from an upstream Hudi table ",(0,n.jsx)(a.code,{children:"HU"})," at a record granularity (not folders/partitions),\napply the processing logic, and efficiently update/reconcile late data with a downstream Hudi table ",(0,n.jsx)(a.code,{children:"HD"}),". Here, ",(0,n.jsx)(a.code,{children:"HU"})," and ",(0,n.jsx)(a.code,{children:"HD"})," can be continuously scheduled at a much more frequent schedule\nlike 15 mins, and providing an end-end latency of 30 mins at ",(0,n.jsx)(a.code,{children:"HD"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["To achieve this, Hudi has embraced similar concepts from stream processing frameworks like ",(0,n.jsx)(a.a,{href:"https://spark.apache.org/docs/latest/streaming-programming-guide#join-operations",children:"Spark Streaming"})," , Pub/Sub systems like ",(0,n.jsx)(a.a,{href:"http://kafka.apache.org/documentation/#theconsumer",children:"Kafka"}),"\n",(0,n.jsx)(a.a,{href:"https://flink.apache.org",children:"Flink"})," or database replication technologies like ",(0,n.jsx)(a.a,{href:"https://docs.oracle.com/cd/E11882_01/server.112/e16545/xstrm_cncpt.htm#XSTRM187",children:"Oracle XStream"}),".\nFor the more curious, a more detailed explanation of the benefits of Incremental Processing can be found ",(0,n.jsx)(a.a,{href:"https://www.oreilly.com/ideas/ubers-case-for-incremental-processing-on-hadoop",children:"here"})]}),"\n",(0,n.jsx)(a.h3,{id:"unified-batch-and-streaming",children:"Unified Batch and Streaming"}),"\n",(0,n.jsxs)(a.p,{children:["The world we live in is polarized - even on data analytics storage - into real-time and offline/batch storage. Typically, real-time ",(0,n.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Data_mart",children:"datamarts"}),"\nare powered by specialized analytical stores such as ",(0,n.jsx)(a.a,{href:"http://druid.io/",children:"Druid"})," or ",(0,n.jsx)(a.a,{href:"http://www.memsql.com/",children:"Memsql"})," or ",(0,n.jsx)(a.a,{href:"https://clickhouse.tech/",children:"Clickhouse"}),", fed by event buses like\n",(0,n.jsx)(a.a,{href:"https://kafka.apache.org",children:"Kafka"})," or ",(0,n.jsx)(a.a,{href:"https://pulsar.apache.org",children:"Pulsar"}),". This model is prohibitively expensive, unless a small fraction of your data lake data\nneeds sub-second query responses such as system monitoring or interactive real-time analysis."]}),"\n",(0,n.jsx)(a.p,{children:"The same data gets ingested into data lake storage much later (say every few hours or so) and then runs through batch ETL pipelines, with intolerable data freshness\nto do any kind of near-realtime analytics. On the other hand, the data lakes provide access to interactive SQL engines like Presto/SparkSQL, which can horizontally scale\neasily and provide return even more complex queries, within few seconds."}),"\n",(0,n.jsxs)(a.p,{children:["By bringing streaming primitives to data lake storage, Hudi opens up new possibilities by being able to ingest data within few minutes and also author incremental data\npipelines that are orders of magnitude faster than traditional batch processing. By bringing ",(0,n.jsx)(a.strong,{children:"data freshness to a few minutes"}),", Hudi can provide a much efficient alternative,\nfor a large class of data applications, compared to real-time datamarts. Also, Hudi has no upfront server infrastructure investments\nand thus enables faster analytics on much fresher analytics, without increasing the operational overhead. This external ",(0,n.jsx)(a.a,{href:"https://www.analyticsinsight.net/can-big-data-solutions-be-affordable/",children:"article"}),"\nfurther validates this newer model."]}),"\n",(0,n.jsx)(a.h2,{id:"cloud-native-tables",children:"Cloud-Native Tables"}),"\n",(0,n.jsx)(a.p,{children:'Apache Hudi makes it easy to define tables, manage schema, metadata, and bring SQL semantics to cloud file storage.\nSome may first hear about Hudi as an "open table format". While this is true, it is just one layer the full Hudi stack.\nThe term \u201ctable format\u201d is new and still means many things to many people. Drawing an analogy to file formats, a table\nformat simply consists of : the file layout of the table, table\u2019s schema and metadata tracking changes to the table.\nHudi is not a table format alone, but it does implement one internally.'}),"\n",(0,n.jsx)(a.h3,{id:"schema-management",children:"Schema Management"}),"\n",(0,n.jsx)(a.p,{children:"A key component of a table is the schema of that table. Apache Hudi provides flexibility to enforce schemas, but also allow\nschema evolution to ensure pipeline resilience to changes. Hudi uses Avro schemas to store, manage and evolve a table\u2019s\nschema. Currently, Hudi enforces schema-on-write, which although stricter than schema-on-read, is adopted widely in the\nstream processing world to ensure pipelines don't break from non backwards compatible changes."}),"\n",(0,n.jsx)(a.h3,{id:"acid-transactions",children:"ACID Transactions"}),"\n",(0,n.jsxs)(a.p,{children:["Along with a table, Apache Hudi brings ACID transactional guarantees to a data lake.\nHudi ensures atomic writes, by way of publishing commits atomically to a ",(0,n.jsx)(a.a,{href:"/docs/timeline",children:"timeline"}),", stamped with an\ninstant time that denotes the time at which the action\nis deemed to have occurred. Unlike general purpose file version control, Hudi draws clear distinction between writer processes\n(that issue user\u2019s upserts/deletes), table services (that write data/metadata to optimize/perform bookkeeping) and readers\n(that execute queries and read data). Hudi provides snapshot isolation between all three types of processes, meaning they\nall operate on a consistent snapshot of the table. Hudi provides ",(0,n.jsx)(a.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+22+%3A+Snapshot+Isolation+using+Optimistic+Concurrency+Control+for+multi-writers",children:"optimistic concurrency control"}),"\n(OCC) between writers, while providing lock-free, non-blocking MVCC based concurrency control between writers and\ntable-services and between different table services."]}),"\n",(0,n.jsx)(a.p,{children:"Projects that solely rely on OCC deal with competing operations, by either implementing a lock or relying on atomic renames.\nSuch approaches are optimistic that real contention never happens and resort to failing one of the writer operations if\nconflicts occur, which can cause significant resource wastage or operational overhead. Imagine a scenario of two writer\nprocesses : an ingest writer job producing new data every 30 minutes and a deletion writer job that is enforcing GDPR\ntaking 2 hours to issue deletes. If there were to overlap on the same files (very likely to happen in real situations\nwith random deletes), the deletion job is almost guaranteed to starve and fail to commit each time, wasting tons of\ncluster resources. Hudi takes a very different approach that we believe is more apt for lake transactions, which are\ntypically long-running. For e.g async compaction that can keep deleting records in the background without blocking the ingest job.\nThis is implemented via a file level, log based concurrency control protocol which orders actions based on their start instant times on the timeline."}),"\n",(0,n.jsx)(a.h3,{id:"efficient-upserts-and-deletes",children:"Efficient Upserts and Deletes"}),"\n",(0,n.jsx)(a.p,{children:"While ACID transactions opens the door for Upserts and Deletes, Hudi also unlocks special capabilities like clustering,\nindexing, and z-ordering which allows users to optimize for efficiency in Deletions and Upserts. Specifically, users can\ncluster older event log data based on user_id, such that, queries that evaluate candidates for data deletion can do so, while\nmore recent partitions are optimized for query performance and clustered on say timestamp."}),"\n",(0,n.jsxs)(a.p,{children:["Hudi also offers efficient ways of dealing with large write amplification, resulting from random deletes based on user_id\n(or any secondary key), by way of the ",(0,n.jsx)(a.code,{children:"Merge On Read"})," table types. Hudi's elegant log based concurrency control, ensures\nthat the ingestion/writing can continue happening, as a background compaction job amortizes the cost of rewriting data to enforce deletes."]}),"\n",(0,n.jsx)(a.h3,{id:"time-travel",children:"Time-Travel"}),"\n",(0,n.jsx)(a.p,{children:"Apache Hudi unlocks the ability to write time travel queries, which means you can query the previous state of the data.\nThis is particularly useful for a few use cases."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Rollbacks - Easily revert back to a previous version of the table."}),"\n",(0,n.jsx)(a.li,{children:"Debugging - Inspect previous versions of data to understand how it has changed over time."}),"\n",(0,n.jsx)(a.li,{children:"Audit History - Have a trail of commits that helps you see how, who, and when altered the data over time."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"data-lake-performance-optimizations",children:"Data Lake Performance Optimizations"}),"\n",(0,n.jsx)(a.p,{children:"Apache Hudi offers several cutting edge services which help you achieve industry leading performance and significant\ncost savings for your data lake."}),"\n",(0,n.jsx)(a.p,{children:"Some examples of the Apache Hudi services that make this performance optimization easy include:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"file_sizing",children:"Auto File Sizing"}),' - to solve the "small files" problem.']}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/docs/clustering",children:"Clustering"})," - to co-locate data next to each other."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/docs/compaction",children:"Compaction"})," - to allow tuning of low latency ingestion and fast read queries."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"indexing",children:"Indexing"})," - for efficient upserts and deletes."]}),"\n",(0,n.jsx)(a.li,{children:"Multi-Dimensional Partitioning (Z-Ordering) - Traditional folder style partitioning on low-cardinality, while also\nZ-Ordering data within files based on high-cardinality"}),"\n",(0,n.jsx)(a.li,{children:"Metadata Table - No more slow S3 file listings or throttling."}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"hoodie_cleaner",children:"Auto Cleaning"})," - Keeps your storage costs in check by automatically removing old versions of files."]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>r});var i=t(96540);const n={},s=i.createContext(n);function o(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);