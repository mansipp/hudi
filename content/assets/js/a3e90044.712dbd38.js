"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[3313],{41071:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"hudi_stack","title":"Apache Hudi Stack","description":"Apache Hudi adds core warehouse and database functionality directly to a data lake (more recently known as the data lakehouse architecture) elevating it from a collection of","source":"@site/docs/hudi_stack.md","sourceDirName":".","slug":"/hudi_stack","permalink":"/docs/next/hudi_stack","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/hudi_stack.md","tags":[],"version":"current","frontMatter":{"title":"Apache Hudi Stack","summary":"Explains about the various layers of software components that make up Hudi","toc":true,"toc_min_heading_level":2,"toc_max_heading_level":3,"last_modified_at":null},"sidebar":"docs","previous":{"title":"Use Cases","permalink":"/docs/next/use_cases"},"next":{"title":"Timeline","permalink":"/docs/next/timeline"}}');var n=a(74848),s=a(28453);const r={title:"Apache Hudi Stack",summary:"Explains about the various layers of software components that make up Hudi",toc:!0,toc_min_heading_level:2,toc_max_heading_level:3,last_modified_at:null},o=void 0,l={},d=[{value:"Lake Storage",id:"lake-storage",level:2},{value:"File Formats",id:"file-formats",level:2},{value:"Table Format",id:"table-format",level:2},{value:"Storage Engine",id:"storage-engine",level:2},{value:"Indexes",id:"indexes",level:3},{value:"Table Services",id:"table-services",level:3},{value:"Clustering",id:"clustering",level:4},{value:"Compaction",id:"compaction",level:4},{value:"Cleaning",id:"cleaning",level:4},{value:"Indexing",id:"indexing",level:4},{value:"Concurrency Control",id:"concurrency-control",level:3},{value:"Lake Cache*",id:"lake-cache",level:3},{value:"Programming APIs",id:"programming-apis",level:2},{value:"Writers",id:"writers",level:3},{value:"Readers",id:"readers",level:3},{value:"User Access",id:"user-access",level:2},{value:"SQL Engines",id:"sql-engines",level:3},{value:"Code Frameworks",id:"code-frameworks",level:3},{value:"Platform Services",id:"platform-services",level:2},{value:"Metaserver*",id:"metaserver",level:3}];function c(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:['Apache Hudi adds core warehouse and database functionality directly to a data lake (more recently known as the data lakehouse architecture) elevating it from a collection of\nobjects/files to well-managed tables. Hudi adds table abstraction over open file formats like Apache Parquet/ORC using a table format layer, that is optimized for frequent writes,\nlarge-scale queries on a table snapshot as well efficient incremental scans. To understand the Hudi stack, we can simply translate the components to the seminal paper\non "',(0,n.jsx)(i.a,{href:"https://dsf.berkeley.edu/papers/fntdb07-architecture.pdf",children:"Architecture of a Database System"}),'", with modernized names.']}),"\n",(0,n.jsxs)(i.p,{children:["On top of this foundation, Hudi adds ",(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Database_engine",children:"storage engine"}),' functionality found in many databases ("transactional storage manager" in the paper),\nenabling transactional capabilities such as concurrency control, indexing, change capture and updates/deletes. The storage engine also consists of essential table services\nto manage/maintain the tables, that are tightly integrated with the underlying storage layer and executed automatically by upper-layer writers or platform components\nlike an independent table management service.']}),"\n",(0,n.jsx)(i.p,{children:"Hudi then defined clear read/write APIs that help interact with the tables, from a variety of SQL engines and code written in many programming languages using their popular data\nprocessing frameworks. Hudi also comes with several platform services that help tune performance, operate tables, monitor tables, ingest data, import/export data, and more."}),"\n",(0,n.jsxs)(i.p,{children:["Thus, when all things considered, the Hudi stack expands out of being just a 'table format' to a comprehensive and robust ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/blog/2024/07/11/what-is-a-data-lakehouse/",children:"data lakehouse"})," platform. In this section,\nwe will explore the Hudi stack and deconstruct the layers of software components that constitute Hudi. The features marked with an asterisk (*) represent work in progress, and\nthe dotted boxes indicate planned future work. These components collectively aim to fulfill the ",(0,n.jsx)(i.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-69/rfc-69.md",children:"vision"})," for the project."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Hudi Stack",src:a(84548).A+"",width:"1989",height:"1344"}),"\n",(0,n.jsx)("p",{align:"center",children:"Figure: Apache Hudi Database Architecture"})]}),"\n",(0,n.jsx)(i.h2,{id:"lake-storage",children:"Lake Storage"}),"\n",(0,n.jsxs)(i.p,{children:["The storage layer is where the data files/objects (such as Parquet) as well as all table format metadata are stored. Hudi interacts with the storage layer through Cloud native and ",(0,n.jsx)(i.a,{href:"https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/FileSystem.html",children:"Hadoop FileSystem API"}),", enabling compatibility\nwith various systems including HDFS for fast appends, and various cloud stores such as Amazon S3, Google Cloud Storage (GCS), and Azure Blob Storage. Additionally, Hudi offers its own storage APIs that can rely on Hadoop-independent file system\nimplementation to simplify the integration of various file systems. Hudi adds a custom wrapper filesystem that lays out the foundation for improved storage optimizations."]}),"\n",(0,n.jsx)(i.h2,{id:"file-formats",children:"File Formats"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"File Format",src:a(91473).A+"",width:"7238",height:"3576"}),"\n",(0,n.jsx)("p",{align:"center",children:"Figure: File format structure in Hudi"})]}),"\n",(0,n.jsx)(i.p,{children:"File formats hold the actual data and are physically stored on the lake storage. Hudi operates on logical structures of File Groups and File Slices, which consist of Base File and Log Files.\nLog files store updates/deletes/inserts on top of records stored in base files, and periodically log files are compacted into small set of log files (log compaction) or base files (compaction).\nFuture updates aim to integrate diverse formats like unstructured data (e.g., JSON, images), and compatibility with different storage layers in event-streaming, OLAP engines, and warehouses.\nHudi's layout scheme encodes all changes to a Log File as a sequence of blocks (data, delete, rollback). By making data available in open file formats (such as Parquet/Avro), Hudi enables users to\nbring any compute engine for specific workloads."}),"\n",(0,n.jsx)(i.h2,{id:"table-format",children:"Table Format"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Table Format",src:a(86534).A+"",width:"3172",height:"1296"}),"\n",(0,n.jsx)("p",{align:"center",children:"Figure: Apache Hudi's Table format"})]}),"\n",(0,n.jsx)(i.p,{children:"Drawing an analogy to file formats, a table format simply concerns with how files are distributed with the table, partitioning schemes, schema and metadata tracking changes. Hudi organizes files within a table or partition into\nFile Groups. Updates are captured in log files tied to these File Groups, ensuring efficient merges. There are three major components related to Hudi\u2019s table format."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Timeline"})," : Hudi's ",(0,n.jsx)(i.a,{href:"./timeline",children:"timeline"}),", stored in the ",(0,n.jsx)(i.code,{children:"/.hoodie/timeline"})," folder, is a crucial event log recording all table actions in an ordered manner,\nwith events kept for a specified period. Hudi uniquely designs each File Group as a self-contained log, enabling record state reconstruction through delta logs, even after archival of historical actions. This approach effectively limits metadata size based on table activity frequency, essential for managing tables with frequent updates."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"File Group and File Slice"})," : Within each partition the data is physically stored as base and Log Files and organized into logical concepts as ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/tech-specs-1point0/#storage-layout",children:"File groups"})," and\nFile Slices. File groups contain multiple versions of File Slices and are split into multiple File Slices. A File Slice comprises the Base and Log File. Each File Slice within\nthe file-group is uniquely identified by the write that created its base file or the first log file, which helps order the File Slices."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Metadata Table"})," : Implemented as an another merge-on-read Hudi table, the ",(0,n.jsx)(i.a,{href:"./metadata",children:"metadata table"})," efficiently handles quick updates with low write amplification.\nIt leverages a ",(0,n.jsx)(i.a,{href:"https://cassandra.apache.org/doc/stable/cassandra/architecture/storage_engine.html#sstables",children:"SSTable"})," based file format for quick, indexed key lookups,\nstoring vital information like file paths, column statistics and schema. This approach streamlines operations by reducing the necessity for expensive cloud file listings."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Hudi\u2019s approach of recording updates into Log Files is more efficient and involves low merge overhead than systems like Hive ACID, where merging all delta records against\nall Base Files is required. Read more about the various table types in Hudi ",(0,n.jsx)(i.a,{href:"./table_types",children:"here"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"storage-engine",children:"Storage Engine"}),"\n",(0,n.jsxs)(i.p,{children:["The storage layer of Hudi comprises the core components that are responsible for the fundamental operations and services that enable Hudi to store, retrieve, and manage data\nefficiently on ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/blog/2024/07/11/what-is-a-data-lakehouse/",children:"data lakehouse"})," storages. This functionality is comparable to that of roles play by storage engines in popular databases like PostgreSQL, MySQL, MongoDB,\nCassandra and Clickhouse."]}),"\n",(0,n.jsx)(i.h3,{id:"indexes",children:"Indexes"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Indexes",src:a(4390).A+"",width:"1124",height:"639"}),"\n",(0,n.jsx)("p",{align:"center",children:"Figure: Indexes in Hudi"})]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"./indexes",children:"Indexes"})," in Hudi enhance query planning, minimizing I/O, speeding up response times and providing faster writes with low merge costs. The ",(0,n.jsx)(i.a,{href:"./metadata/#metadata-table-indices",children:"metadata table"})," acts\nas an additional ",(0,n.jsx)(i.a,{href:"./metadata#supporting-multi-modal-index-in-hudi",children:"indexing system"})," and brings the benefits of indexes generally to both the readers and writers. Compute engines can leverage various indexes in the metadata\ntable, like file listings, column statistics, bloom filters, record-level indexes, and ",(0,n.jsx)(i.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-63/rfc-63.md",children:"expression indexes"})," to quickly generate optimized query plans and improve read\nperformance. In addition to the metadata table indexes, Hudi supports simple join based indexing, bloom filters stored in base file footers, external key-value stores like HBase,\nand optimized storage techniques like bucketing , to efficiently locate File Groups containing specific record keys. Hudi also provides reader indexes such as ",(0,n.jsx)(i.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-63/rfc-63.md",children:"expression"})," and\nsecondary indexes to boost reads. The table partitioning scheme in Hudi is consciously exploited for implementing global and non-global indexing strategies, that limit scope of a record's\nuniqueness to a given partition or globally across all partitions."]}),"\n",(0,n.jsx)(i.h3,{id:"table-services",children:"Table Services"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Table Services",src:a(16020).A+"",width:"6178",height:"3448"}),"\n",(0,n.jsx)("p",{align:"center",children:"Figure: Table services in Hudi"})]}),"\n",(0,n.jsx)(i.p,{children:"Apache Hudi offers various table services to help keep the table storage layout and metadata management performant. Hudi was designed with built-in table services that enables\nrunning them in inline, semi-asynchronous or full-asynchronous modes. Furthermore, Spark and Flink streaming writers can run in continuous mode, and invoke table services\nasynchronously sharing the underlying executors intelligently with writers. Let\u2019s take a look at these services."}),"\n",(0,n.jsx)(i.h4,{id:"clustering",children:"Clustering"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.a,{href:"./clustering",children:"clustering"})," service, akin to features in cloud data warehouses, allows users to group frequently queried records using sort keys or merge smaller Base Files into\nlarger ones for optimal file size management. It's fully integrated with other timeline actions like cleaning and compaction, enabling smart optimizations such as avoiding\ncompaction for File Groups undergoing clustering, thereby saving on I/O."]}),"\n",(0,n.jsx)(i.h4,{id:"compaction",children:"Compaction"}),"\n",(0,n.jsxs)(i.p,{children:["Hudi's ",(0,n.jsx)(i.a,{href:"./compaction",children:"compaction"})," service, featuring strategies like date partitioning and I/O bounding, merges Base Files with delta logs to create updated Base Files. It allows\nconcurrent writes to the same File Froup, enabled by Hudi's file grouping and flexible log merging. This facilitates non-blocking execution of deletes even during concurrent\nrecord updates."]}),"\n",(0,n.jsx)(i.h4,{id:"cleaning",children:"Cleaning"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"http://hudi.apache.org/blog/2021/06/10/employing-right-configurations-for-hudi-cleaner",children:"Cleaner"})," service works off the timeline incrementally, removing File Slices that are past the configured retention period for incremental queries,\nwhile also allowing sufficient time for long running batch jobs (e.g Hive ETLs) to finish running. This allows users to reclaim storage space, thereby saving on costs."]}),"\n",(0,n.jsx)(i.h4,{id:"indexing",children:"Indexing"}),"\n",(0,n.jsxs)(i.p,{children:["Hudi's scalable metadata table contains auxiliary data about the table. This subsystem encompasses various indices, including files, column_stats, and bloom_filters,\nfacilitating efficient record location and data skipping. Balancing write throughput with index updates presents a fundamental challenge, as traditional indexing methods,\nlike locking out writes during indexing, are impractical for large tables due to lengthy processing times. Hudi addresses this with its innovative asynchronous ",(0,n.jsx)(i.a,{href:"./metadata_indexing",children:"metadata indexing"}),",\nenabling the creation of various indices without impeding writes. This approach not only improves write latency but also minimizes resource waste by reducing contention between writing and indexing activities."]}),"\n",(0,n.jsx)(i.h3,{id:"concurrency-control",children:"Concurrency Control"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"./concurrency_control",children:"Concurrency control"})," defines how different writers/readers/table services coordinate access to the table. Hudi uses monotonically increasing time to sequence and order various\nchanges to table state. Much like databases, Hudi take an approach of clearly differentiating between writers (responsible for upserts/deletes), table services\n(focusing on storage optimization and bookkeeping), and readers (for query execution). Hudi provides snapshot isolation, offering a consistent view of the table across\nthese different operations. It employs lock-free, non-blocking MVCC for concurrency between writers and table-services, as well as between different table services, and\noptimistic concurrency control (OCC) for multi-writers with early conflict detection. With ",(0,n.jsx)(i.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-69/rfc-69.md",children:"Hudi 1.0"}),", non-blocking concurrency control (",(0,n.jsx)(i.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-66/rfc-66.md",children:"NBCC"}),")\nis introduced, allowing multiple writers to concurrently operate on the table with non-blocking conflict resolution."]}),"\n",(0,n.jsx)(i.h3,{id:"lake-cache",children:"Lake Cache*"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Lake Cache",src:a(8608).A+"",width:"5076",height:"2793"}),"\n",(0,n.jsx)("p",{align:"center",children:"Figure: Proposed Lake Cache in Hudi"})]}),"\n",(0,n.jsxs)(i.p,{children:["Data lakes today face a tradeoff between fast data writing and optimal query performance. Writing smaller files or logging deltas enhances writing speed, but superior query performance typically requires opening fewer files and pre-materializing merges. Most databases use a buffer pool to reduce storage access costs. Hudi\u2019s design supports creating a multi-tenant caching tier that can store pre-merged File Slices. Hudi\u2019s timeline can then be used to simply communicate caching policies. Traditionally, caching is near query engines or in-memory file systems. Integrating a ",(0,n.jsx)(i.a,{href:"https://issues.apache.org/jira/browse/HUDI-6489",children:"caching layer"})," with Hudi's transactional storage enables shared caching across query engines, supporting updates and deletions, and reducing costs. The goal is to build a buffer pool for lakes, compatible with all major engines, with the contributions from the rest of the community."]}),"\n",(0,n.jsx)(i.h2,{id:"programming-apis",children:"Programming APIs"}),"\n",(0,n.jsx)(i.h3,{id:"writers",children:"Writers"}),"\n",(0,n.jsxs)(i.p,{children:["Hudi tables can be used as sinks for Spark/Flink pipelines and the Hudi writing path provides several enhanced capabilities over file writing done by vanilla parquet/avro sinks. It categorizes write operations into incremental (",(0,n.jsx)(i.code,{children:"insert"}),", ",(0,n.jsx)(i.code,{children:"upsert"}),", ",(0,n.jsx)(i.code,{children:"delete"}),") and batch/bulk (",(0,n.jsx)(i.code,{children:"insert_overwrite"}),", ",(0,n.jsx)(i.code,{children:"delete_partition"}),", ",(0,n.jsx)(i.code,{children:"bulk_insert"}),") with specific functionalities. ",(0,n.jsx)(i.code,{children:"upsert"})," and ",(0,n.jsx)(i.code,{children:"delete"})," efficiently merge records with identical keys and integrate with the file sizing mechanism, while ",(0,n.jsx)(i.code,{children:"insert"})," operations smartly bypass certain steps like pre-combining, maintaining pipeline benefits. Similarly, ",(0,n.jsx)(i.code,{children:"bulk_insert"})," operation offers control over file sizes for data imports. Batch operations integrate MVCC for seamless transitions between incremental and batch processing. Additionally, the write pipeline includes optimizations like handling large merges via rocksDB and concurrent I/O, enhancing write performance."]}),"\n",(0,n.jsx)(i.h3,{id:"readers",children:"Readers"}),"\n",(0,n.jsx)(i.p,{children:"Hudi provides snapshot isolation for writers and readers, enabling consistent table snapshot queries across major query engines (Spark, Hive, Flink, Presto, Trino, Impala) and cloud warehouses. It optimizes query performance by utilizing lightweight processes, especially for base columnar file reads, and integrates engine-specific vectorized readers like in Presto and Trino. This scalable model surpasses the need for separate readers and taps into each engine's unique optimizations, such as Presto and Trino's data/metadata caches. For queries merging Base and Log Files, Hudi employs mechanisms such as spillable maps and lazy reading to boost merge performance. Additionally, Hudi offers a read-optimized query option, trading off data freshness for improved query speed. There are also recently added features such as positional merge, encoding partial Log File to only changed columns and support for Parquet as the Log File format to improve MoR snapshot query performance."}),"\n",(0,n.jsx)(i.h2,{id:"user-access",children:"User Access"}),"\n",(0,n.jsx)(i.h3,{id:"sql-engines",children:"SQL Engines"}),"\n",(0,n.jsx)(i.p,{children:"Apache Hudi is compatible with a wide array of SQL query engines, catering to various analytical needs. For distributed ETL batch processing, Apache Spark is frequently utilized,\nleveraging its efficient handling of large-scale data. In the realm of streaming use cases, compute engines such as Apache Flink and Apache Spark's Structured Streaming provide\nrobust support when paired with Hudi. Moreover, Hudi supports modern data lake query engines such as Trino and Presto, as well as modern analytical databases such as ClickHouse\nand StarRocks. This diverse support of compute engines positions Apache Hudi as a flexible and adaptable platform for a broad spectrum of use cases."}),"\n",(0,n.jsx)(i.h3,{id:"code-frameworks",children:"Code Frameworks"}),"\n",(0,n.jsx)(i.p,{children:"While SQL still rules the roost when it comes to data engineering, an equally important and widespread data engineering/data science practice is to write code in different\nlanguages like Java, Scala, Python and R, to analyze data using sophisticated algorithms with full expressiveness of the language. To this end, Hudi supports several\npopular data processing frameworks like Apache Spark and Apache Flink, as well as python based distributed frameworks like Daft, Ray and native bindings in Rust for easy\nintegration with engines written in C/C++."}),"\n",(0,n.jsx)(i.p,{children:"..."}),"\n",(0,n.jsx)(i.h2,{id:"platform-services",children:"Platform Services"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Platform Services",src:a(78846).A+"",width:"6575",height:"2727"}),"\n",(0,n.jsx)("p",{align:"center",children:"Figure: Various platform services in Hudi"})]}),"\n",(0,n.jsxs)(i.p,{children:["Platform services offer functionality that is specific to data and workloads, and they sit directly on top of the table services, interfacing with writers and readers.\nServices, like ",(0,n.jsx)(i.a,{href:"./hoodie_streaming_ingestion#hudi-streamer",children:"Hudi Streamer"})," (or its Flink counterpart), are specialized in handling data and workloads, seamlessly integrating with Kafka streams and various\nformats to build data lakes. They support functionalities like automatic checkpoint management, integration with major schema registries (including Confluent), and\ndeduplication of data. Hudi Streamer also offers features for backfills, one-off runs, and continuous mode operation with Spark/Flink streaming writers. Additionally,\nHudi provides tools for ",(0,n.jsx)(i.a,{href:"./snapshot_exporter",children:"snapshotting"})," and incrementally ",(0,n.jsx)(i.a,{href:"./snapshot_exporter#examples",children:"exporting"})," Hudi tables, importing new tables, and ",(0,n.jsx)(i.a,{href:"platform_services_post_commit_callback",children:"post-commit callback"})," for analytics or\nworkflow management, enhancing the deployment of production-grade incremental pipelines. Apart from these services, Hudi also provides broad support for different\ncatalogs such as ",(0,n.jsx)(i.a,{href:"./syncing_metastore",children:"Hive Metastore"}),", ",(0,n.jsx)(i.a,{href:"./syncing_aws_glue_data_catalog/",children:"AWS Glue"}),", ",(0,n.jsx)(i.a,{href:"./gcp_bigquery",children:"Google BigQuery"}),", ",(0,n.jsx)(i.a,{href:"./syncing_datahub",children:"DataHub"}),", etc. that allows syncing of Hudi tables to be queried by\ninteractive engines such as Trino and Presto."]}),"\n",(0,n.jsx)(i.h3,{id:"metaserver",children:"Metaserver*"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Metaserver",src:a(74637).A+"",width:"5699",height:"2727"}),"\n",(0,n.jsx)("p",{align:"center",children:"Figure: Proposed Metaserver in Hudi"})]}),"\n",(0,n.jsxs)(i.p,{children:['Storing table metadata on lake storage, while scalable, is less efficient than RPCs to a scalable meta server. Hudi addresses this with its metadata server, called "metaserver,"\nan efficient alternative for managing table metadata for a large number of tables. Currently, the timeline server, embedded in Hudi\'s writer processes, uses a local rocksDB store and ',(0,n.jsx)(i.a,{href:"https://javalin.io/",children:"Javalin"})," REST API to serve file listings, reducing cloud storage listings.\nSince version 0.6.0, there's a trend towards standalone timeline servers, aimed at horizontal scaling and improved security. These developments are set to create a more efficient lake ",(0,n.jsx)(i.a,{href:"https://issues.apache.org/jira/browse/HUDI-3345",children:"metastore"}),"\nfor future needs."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},91473:(e,i,a)=>{a.d(i,{A:()=>t});const t=a.p+"assets/images/file_format_2-b4e10be3218071ebde48f3603109126f.png"},8608:(e,i,a)=>{a.d(i,{A:()=>t});const t=a.p+"assets/images/lake_cache_3-3d6145aa388cb08897be2a04f8ddc004.png"},74637:(e,i,a)=>{a.d(i,{A:()=>t});const t=a.p+"assets/images/metaserver_2-c36c3b5af7c37b938b9baa67925f4b56.png"},78846:(e,i,a)=>{a.d(i,{A:()=>t});const t=a.p+"assets/images/platform_2-43439cc71014ddfb911d5907b5640135.png"},86534:(e,i,a)=>{a.d(i,{A:()=>t});const t=a.p+"assets/images/table_format_1-40380ed7db1d89a0f66dba3ba70c229a.png"},16020:(e,i,a)=>{a.d(i,{A:()=>t});const t=a.p+"assets/images/table_services_2-46585c7180ac268596828a72f5f42b04.png"},84548:(e,i,a)=>{a.d(i,{A:()=>t});const t=a.p+"assets/images/hudi-stack-1-x-86c60e4c27bcc3af1fdf1e78ed48e42d.png"},4390:(e,i,a)=>{a.d(i,{A:()=>t});const t=a.p+"assets/images/hudi-stack-indexes-589506d411b969d14a9087633253a391.png"},28453:(e,i,a)=>{a.d(i,{R:()=>r,x:()=>o});var t=a(96540);const n={},s=t.createContext(n);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);