"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[4593],{20691:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"use_cases","title":"Use Cases","description":"Apache Hudi is a powerful data lakehouse platform that shines in a variety of use cases due to its high-performance design, rich feature set, and","source":"@site/versioned_docs/version-1.0.1/use_cases.md","sourceDirName":".","slug":"/use_cases","permalink":"/cn/docs/use_cases","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-1.0.1/use_cases.md","tags":[],"version":"1.0.1","frontMatter":{"title":"Use Cases","keywords":["hudi","data ingestion","etl","real time","use cases"],"summary":"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency","toc":true,"last_modified_at":"2019-12-30T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Docker Demo","permalink":"/cn/docs/docker_demo"},"next":{"title":"Apache Hudi Stack","permalink":"/cn/docs/hudi_stack"}}');var n=i(74848),o=i(28453);const s={title:"Use Cases",keywords:["hudi","data ingestion","etl","real time","use cases"],summary:"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},r=void 0,l={},d=[{value:"Streaming/CDC data ingestion to Data Lakehouse",id:"streamingcdc-data-ingestion-to-data-lakehouse",level:2},{value:"Why Hudi?",id:"why-hudi",level:3},{value:"Offloading from expensive Data Warehouses",id:"offloading-from-expensive-data-warehouses",level:2},{value:"Why Hudi?",id:"why-hudi-1",level:3},{value:"High Performance Open Table Format",id:"high-performance-open-table-format",level:2},{value:"Why Hudi?",id:"why-hudi-2",level:3},{value:"Open Data Platform",id:"open-data-platform",level:2},{value:"Why Hudi?",id:"why-hudi-3",level:3},{value:"Efficient Data lakes with Incremental Processing",id:"efficient-data-lakes-with-incremental-processing",level:2},{value:"Why Hudi?",id:"why-hudi-4",level:3}];function c(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Apache Hudi is a powerful ",(0,n.jsx)(t.a,{href:"https://hudi.apache.org/blog/2021/07/21/streaming-data-lake-platform",children:"data lakehouse platform"})," that shines in a variety of use cases due to its high-performance design, rich feature set, and\nunique strengths tailored to modern data engineering needs. This document explores its key use cases and differentiation, to help you understand when and why Hudi is an excellent choice for your data lakehouse."]}),"\n",(0,n.jsx)(t.h2,{id:"streamingcdc-data-ingestion-to-data-lakehouse",children:"Streaming/CDC data ingestion to Data Lakehouse"}),"\n",(0,n.jsxs)(t.p,{children:['Hudi excels at handling incremental data updates, making it a perfect fit for CDC pipelines which replicate frequent updates, inserts, and deletes from an upstream database\nlike MySQL or PostgresSQL to a downstream data lakehouse table. This "raw data" layer of the data lake often forms the foundation on which all subsequent data workloads\nfrom BI to AI are built. Though ingesting data from OLTP sources like (event logs, databases, external sources) into a ',(0,n.jsx)(t.a,{href:"http://martinfowler.com/bliki/DataLake.html",children:"Data Lake"})," is an important problem,\nit is unfortunately often solved in a piecemeal fashion, using a medley of ingestion tools."]}),"\n",(0,n.jsx)(t.h3,{id:"why-hudi",children:"Why Hudi?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Unique design choices like Merge-On-Read tables, record-level indexes and asynchronous compaction, approach theoretical optimality for absorbing changes to tables quickly and efficiently."}),"\n",(0,n.jsxs)(t.li,{children:["Built-in ingestion tools on ",(0,n.jsx)(t.a,{href:"/docs/hoodie_streaming_ingestion",children:"Spark"}),", ",(0,n.jsx)(t.a,{href:"/docs/ingestion_flink",children:"Flink"})," and ",(0,n.jsx)(t.a,{href:"/docs/ingestion_kafka_connect",children:"Kafka Connect"}),", that let you ingest data with a single command."]}),"\n",(0,n.jsx)(t.li,{children:"Support for incremental ingestion with automatic checkpoint management from streaming sources (Kafka, Pulsar, ...), Cloud storage (S3, GCS, ADLS, etc.) and even JDBC."}),"\n",(0,n.jsxs)(t.li,{children:["Support for widely used data formats (Protobuf, Avro, JSON), file formats (parquet, orc, avro, etc.) and change log formats like ",(0,n.jsx)(t.a,{href:"http://debezium.io/",children:"Debezium"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Even for scalable de-duplication for high-volume append-only streaming data, by employing bloom filter indexes and advanced data structures like interval trees for efficient range pruning."}),"\n",(0,n.jsx)(t.li,{children:"Integration with popular schema registries, to automatically and safely evolve tables to new schemas on-the-fly as they change in the source system."}),"\n",(0,n.jsx)(t.li,{children:"Hudi supports event time ordering and late data handling for streaming workloads using RecordPayload/RecordMerger APIs let you merge updates in the database LSN order, in addition to latest writer wins semantics. Without this capability, the table can go back in (event) time, if the input records are out-of-order/late-arriving (which will inevitably happen in real life)."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"offloading-from-expensive-data-warehouses",children:"Offloading from expensive Data Warehouses"}),"\n",(0,n.jsx)(t.p,{children:"As organizations scale, traditional ETL operations and data storage in data warehouses become prohibitively expensive. Hudi offers an efficient way to migrate these workloads\nto a data lakehouse, significantly reducing costs without compromising on performance."}),"\n",(0,n.jsx)(t.h3,{id:"why-hudi-1",children:"Why Hudi?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Hudi lets you store data in your own cloud accounts or storage systems in open data formats, away from vendor lock-in and avoiding additional storage costs from vendors. This also lets you open up data to other compute engines, including a plethora of open-source query engines like Presto, Trino, Starrocks."}),"\n",(0,n.jsxs)(t.li,{children:["Tools like ",(0,n.jsx)(t.a,{href:"https://docs.getdbt.com/reference/resource-configs/spark-configs#incremental-models",children:"hudi-dbt"})," adapter plugin makes it easy to migrate existing SQL ETL pipelines over to Apache Spark SQL. Users can then take advantage fast/efficient write performance of Hudi to cut down cost of '",(0,n.jsx)(t.em,{children:"L"}),"' in ETL pipelines."]}),"\n",(0,n.jsxs)(t.li,{children:["Hudi's storage format is optimized to efficiently compute \"diffs\" between two points in time on a table, allowing large SQL joins to be re-written efficiently by eliminating costly scans of large fact tables. This cuts down cost of '",(0,n.jsx)(t.em,{children:"E"}),"' in ETL pipelines."]}),"\n",(0,n.jsx)(t.li,{children:"Additionally, Hudi offers a fully-fledged set of table services, that can automatically optimize, cluster, and compact data in the background, resulting in significant cost savings over using proprietary compute services from a data warehouse."}),"\n",(0,n.jsx)(t.li,{children:"Hudi combined with a stream processing like Flink and Dynamic Tables, can help replace slow, expensive warehouse ETLs, while also dramatically improving data freshness."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"high-performance-open-table-format",children:"High Performance Open Table Format"}),"\n",(0,n.jsx)(t.p,{children:'Over the past couple of years, there is a growing trend with data warehouses to support reads/writes on top of an "open table format" layer. The Table Format consists of one or more open\nfile formats, metadata around how the files constitute the table and a protocol for concurrently reading/writing to such tables. Though Hudi offers more than such a table format layer,\nit packs a powerful native open table format designed for high performance even on the largest tables in the world.'}),"\n",(0,n.jsx)(t.h3,{id:"why-hudi-2",children:"Why Hudi?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Hudi format stores metadata in both an event log (timeline) and snapshot representations (metadata table), allowing for minimal storage overhead for keeping lots of versions of table, while still offering fast access for planning snapshot queries."}),"\n",(0,n.jsx)(t.li,{children:"Metadata about the table is also stored in an indexed fashion, conducive to efficient query processing. For e.g. statistics about columns, partitions are stored using an SSTable like file format, to ensure only smaller amounts of metadata, relevant to columns part of a query are read."}),"\n",(0,n.jsx)(t.li,{children:"Hudi is designed from ground up with an indexing component that improves write/query performance, at the cost of relatively small increased storage overhead. Various indexes like hash-based record indexes, bloom filter indexes are available, with more on the way."}),"\n",(0,n.jsx)(t.li,{children:"When it comes to concurrency control (CC), Hudi judiciously treats writers, readers and table services maintaining the table as separate entities. This design enables Hudi helps achieve multi-version concurrency control (MVCC) between writer and compaction/indexing, that allows writers to safely write without getting blocked or retrying on conflicts which waste a lot of compute resources in other approaches."}),"\n",(0,n.jsx)(t.li,{children:"Between two writers, Hudi uses Optimistic Concurrency Control (OCC) to provide serializability on write completion time (commit time ordering) and a novel non-blocking concurrency control (NBCC) with record merging based on event-time (event-time processing)."}),"\n",(0,n.jsxs)(t.li,{children:["With these design choices and interoperability provided with ",(0,n.jsx)(t.a,{href:"https://xtable.apache.org/",children:"Apache XTable"})," to other table formats, Hudi tables are quite often the fastest backing tables for other table formats like Delta Lake or Apache Iceberg."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"open-data-platform",children:"Open Data Platform"}),"\n",(0,n.jsx)(t.p,{children:"Many organizations seek to build a data platform that is open, future-proof and extensible. This requires open-source components that provide data formats, APIs and data compute services, that can be mixed and matched\ntogether to build out the platform. Such an open platform is also essential for organizations to take advantage of the latest technologies and tools, without being beholden to a single vendor's roadmap."}),"\n",(0,n.jsx)(t.h3,{id:"why-hudi-3",children:"Why Hudi?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Hudi only operates on data in open data, file and table formats. Hudi is not locked to any particular data format or storage system."}),"\n",(0,n.jsx)(t.li,{children:"While open data formats help, Hudi unlocks complete freedom by also providing open compute services for ingesting, optimizing, indexing and querying data. For e.g Hudi's writers come with\na self-managing table service runtime that can maintain tables automatically in the background on each write. Often times, Hudi and your favorite open query engine is all\nyou need to get an open data platform up and running."}),"\n",(0,n.jsxs)(t.li,{children:["Examples of open services that make performance optimization or management easy include: ",(0,n.jsx)(t.a,{href:"file_sizing",children:"auto file sizing"}),' to solve the "small files" problem,\n',(0,n.jsx)(t.a,{href:"clustering",children:"clustering"})," to co-locate data next to each other, ",(0,n.jsx)(t.a,{href:"compaction",children:"compaction"})," to allow tuning of low latency ingestion + fast read queries,\n",(0,n.jsx)(t.a,{href:"indexes",children:"indexing"})," - for faster writes/queries, Multi-Dimensional Partitioning (Z-Ordering), automatic cleanup of uncommitted data with marker mechanism,\n",(0,n.jsx)(t.a,{href:"cleaning",children:"auto cleaning"})," to automatically removing old versions of files."]}),"\n",(0,n.jsx)(t.li,{children:"Hudi provides rich options for pre-sorting/loading data efficiently and then follow on with rich set of data clustering techniques to manage file sizes and data distribution within a table. In each case, Hudi provides high-degree of configurability in terms of when/how often these services are scheduled, planned and executed. For e.g. Hudi ships with a handful of common planning strategies for compaction and clustering."}),"\n",(0,n.jsxs)(t.li,{children:["Along with compatibility with other open table formats like ",(0,n.jsx)(t.a,{href:"https://iceberg.apache.org/",children:"Apache Iceberg"}),"/",(0,n.jsx)(t.a,{href:"https://delta.io/",children:"Delta Lake"}),", and catalog sync services to various data catalogs, Hudi is one of the most open choices for your data foundation."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"efficient-data-lakes-with-incremental-processing",children:"Efficient Data lakes with Incremental Processing"}),"\n",(0,n.jsx)(t.p,{children:"Organizations spend close to 50% of their budgets on data pipelines, that transform and prepare data for consumption. As data volumes increase, so does the cost of running these pipelines.\nHudi has a unique combination of features that make it a very efficient choice for data pipelines, by introducing a new paradigm for incremental processing of data. The current state-of-the-art\nprescribes two completely different data stacks for data processing. Batch processing stack stores data as files/objects on or cloud storage, processed by engines such as Spark, Hive and so on. On the other hand, the\nstream processing stack stores data as events in independent storage systems like Kafka, processed by engines such as Flink. Even as processing engines provide unified APIs for these two styles of data processing,\nthe underlying storage differences make it impossible to use one stack for the other. Hudi offers a unified data lakehouse stack that can be used for both batch and streaming processing models."}),"\n",(0,n.jsxs)(t.p,{children:['Hudi introduces "incremental processing" to bring stream processing model (i.e. processing only newly added or changed data every X seconds/minutes) on top of batch storage (i.e. data lakehouse built on open data formats\non the cloud), combining the best of both worlds. Incremental processing requires the ability to write changes quickly into tables using indexes, while also making the data available for querying efficiently.\nAnother requirement is to be able to efficiently compute the exact set of changes to a table between two points in time for pipelines to efficiently only process new data each run, without having to scan the entire table.\nFor the more curious, a more detailed explanation of the benefits of ',(0,n.jsx)(t.em,{children:"incremental processing"})," can be found ",(0,n.jsx)(t.a,{href:"https://www.oreilly.com/ideas/ubers-case-for-incremental-processing-on-hadoop",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"why-hudi-4",children:"Why Hudi?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"By bringing streaming primitives to data lake storage, Hudi opens up new possibilities by being able to ingest/process data within few minutes and eliminate need for specialized real-time analytics systems."}),"\n",(0,n.jsx)(t.li,{children:"Hudi groups records into file groups, with updates being tied to the same file group, limiting the amount of data scanned for the query i.e only log files within the same file group need to be scanned for a given base file"}),"\n",(0,n.jsx)(t.li,{children:"Hudi adds low-overhead record level metadata and supplemental logging of metadata to compute CDC streams, to track how a given changes/moves within the table, in the face of writes and background table services. For e.g. Hudi is able to preserve change history even if many small files are combined into another file due to clustering\nand does not have any dependency on how table snapshots are maintained. In snapshot based approaches to tracking metadata, expiring a single snapshot can lead to loss of change history."}),"\n",(0,n.jsx)(t.li,{children:"Hudi can encode updates natively without being forced to turn them into deletes and inserts, which tends to continuously redistribute records randomly across files, reducing data skipping efficiency. Hudi associates a given delete or update to the original file group that the record was inserted to (or latest clustered to), which preserves the spatial locality of clustered data or temporal order in which record were inserted. As a result, queries that filter on time (e.g querying events/logs by time window), can efficiently only scan few file groups to return results."}),"\n",(0,n.jsx)(t.li,{children:"Building on top of this, Hudi also supports partial update encoding for encoding partial updates efficiently into delta logs. For columnar data, this means write/merge costs are proportional to number of columns in a merge/update statement."}),"\n",(0,n.jsx)(t.li,{children:"The idea with MoR is to reduce write costs/latencies, by writing delta logs (Hudi), positional delete files (iceberg). Hudi employs about 4 types of indexing to quickly locate the file that the updates records belong to. Formats relying on a scan of the table can quickly bottleneck on write performance. e.g updating 1GB into a 1TB table every 5-10 mins."}),"\n",(0,n.jsx)(t.li,{children:"Hudi is the only lakehouse storage system that natively supports event time ordering and late data handling for streaming workloads where MoR is employed heavily."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var a=i(96540);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);