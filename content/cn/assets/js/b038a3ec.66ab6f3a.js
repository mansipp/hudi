"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[34528],{69364:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"metadata","title":"Metadata Table","description":"Metadata Table","source":"@site/versioned_docs/version-0.14.0/metadata.md","sourceDirName":".","slug":"/metadata","permalink":"/cn/docs/0.14.0/metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/metadata.md","tags":[],"version":"0.14.0","frontMatter":{"title":"Metadata Table","keywords":["hudi","metadata","S3 file listings"]},"sidebar":"docs","previous":{"title":"File Layouts","permalink":"/cn/docs/0.14.0/file_layouts"},"next":{"title":"Write Operations","permalink":"/cn/docs/0.14.0/write_operations"}}');var a=i(74848),s=i(28453);const r={title:"Metadata Table",keywords:["hudi","metadata","S3 file listings"]},d=void 0,l={},o=[{value:"Metadata Table",id:"metadata-table",level:2},{value:"Supporting Multi-Modal Index in Hudi",id:"supporting-multi-modal-index-in-hudi",level:2},{value:"Metadata table indices",id:"metadata-table-indices",level:3},{value:"Enable Hudi Metadata Table and Multi-Modal Index in write side",id:"enable-hudi-metadata-table-and-multi-modal-index-in-write-side",level:2},{value:"Use metadata indices for query side improvements",id:"use-metadata-indices-for-query-side-improvements",level:2},{value:"files index",id:"files-index",level:3},{value:"column_stats index and data skipping",id:"column_stats-index-and-data-skipping",level:3},{value:"Deployment considerations for metadata Table",id:"deployment-considerations-for-metadata-table",level:2},{value:"Deployment Model A: Single writer with inline table services",id:"deployment-model-a-single-writer-with-inline-table-services",level:3},{value:"Deployment Model B: Single writer with async table services",id:"deployment-model-b-single-writer-with-async-table-services",level:3},{value:"Deployment Model C: Multi-writer",id:"deployment-model-c-multi-writer",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"metadata-table",children:"Metadata Table"}),"\n",(0,a.jsxs)(t.p,{children:["Database indices contain auxiliary data structures to quickly locate records needed, without reading unnecessary data\nfrom storage. Given that Hudi\u2019s design has been heavily optimized for handling mutable change streams, with different\nwrite patterns, Hudi considers ",(0,a.jsx)(t.a,{href:"#indexing",children:"indexing"})," as an integral part of its design and has uniquely supported\n",(0,a.jsx)(t.a,{href:"https://hudi.apache.org/blog/2020/11/11/hudi-indexing-mechanisms/",children:"indexing capabilities"})," from its inception, to speed\nup upserts on the ",(0,a.jsx)(t.a,{href:"https://hudi.apache.org/blog/2024/07/11/what-is-a-data-lakehouse/",children:"Data Lakehouse"}),". While Hudi's indices has benefited writers for fast upserts and deletes, Hudi's metadata table\naims to tap these benefits more generally for both the readers and writers. The metadata table implemented as a single\ninternal Hudi Merge-On-Read table hosts different types of indices containing table metadata and is designed to be\nserverless and independent of compute and query engines. This is similar to common practices in databases where metadata\nis stored as internal views."]}),"\n",(0,a.jsx)(t.p,{children:"The metadata table aims to significantly improve read/write performance of the queries by addressing the following key challenges:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsxs)(t.strong,{children:["Eliminate the requirement of ",(0,a.jsx)(t.code,{children:"list files"})," operation"]}),":",(0,a.jsx)("br",{}),"\nWhen reading and writing data, file listing operations are performed to get the current view of the file system.\nWhen data sets are large, listing all the files may be a performance bottleneck, but more importantly in the case of cloud storage systems\nlike AWS S3, the large number of file listing requests sometimes causes throttling due to certain request limits.\nThe metadata table will instead proactively maintain the list of files and remove the need for recursive file listing operations"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Expose columns stats through indices for better query planning and faster lookups by readers"}),":",(0,a.jsx)("br",{}),"\nQuery engines rely on techniques such as partitioning and file pruning to cut down on the amount of irrelevant data\nscanned for query planning and execution. During query planning phase all data files are read for metadata on range\ninformation of columns for further pruning data files based on query predicates and available range information. This\napproach is expensive and does not scale if there are large number of partitions and data files to be scanned. In\naddition to storage optimizations such as automatic file sizing, clustering, etc that helps data organization in a query\noptimized way, Hudi's metadata table improves query planning further by supporting multiple types of indices that aid\nin efficiently looking up data files based on relevant query predicates instead of reading the column stats from every\nindividual data file and then pruning."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"supporting-multi-modal-index-in-hudi",children:"Supporting Multi-Modal Index in Hudi"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.onehouse.ai/blog/introducing-multi-modal-index-for-the-lakehouse-in-apache-hudi",children:"Multi-modal indexing"}),",\nintroduced in ",(0,a.jsx)(t.a,{href:"https://hudi.apache.org/releases/release-0.11.0/#multi-modal-index",children:"0.11.0 Hudi release"}),",\nis a re-imagination of what a general purpose indexing subsystem should look like for the lake. Multi-modal indexing is\nimplemented by enhancing Hudi's metadata table with the flexibility to extend to new index types as new partitions,\nalong with an ",(0,a.jsx)(t.a,{href:"https://hudi.apache.org/docs/metadata_indexing/#setup-async-indexing",children:"asynchronous index"})," building\nmechanism and is built on the following core principles:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Scalable metadata"}),": The table metadata, i.e., the auxiliary data about the table, must be scalable to extremely\nlarge size, e.g., Terabytes (TB).  Different types of indices should be easily integrated to support various use cases\nwithout having to worry about managing the same. To realize this, all indices in Hudi's metadata table are stored as\npartitions in a single internal MOR table. The MOR table layout enables lightning-fast writes by avoiding synchronous\nmerge of data with reduced write amplification. This is extremely important for large datasets as the size of updates to the\nmetadata table can grow to be unmanageable otherwise. This helps Hudi to scale metadata to TBs of sizes. The\nfoundational framework for multi-modal indexing is built to enable and disable new indices as needed. The\n",(0,a.jsx)(t.a,{href:"https://www.onehouse.ai/blog/asynchronous-indexing-using-hudi",children:"async indexing"})," supports index building alongside\nregular writers without impacting the write latency."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"ACID transactional updates"}),": The index and table metadata must be always up-to-date and in sync with the data table.\nThis is designed via multi-table transaction within Hudi and ensures atomicity of writes and resiliency to failures so that\npartial writes to either the data or metadata table are never exposed to other read or write transactions. The metadata\ntable is built to be self-managed so users don\u2019t need to spend operational cycles on any table services including\ncompaction and cleaning"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Fast lookup"}),": The needle-in-a-haystack type of lookups must be fast and efficient without having to scan the entire\nindex, as index size can be TBs for large datasets. Since most access to the metadata table are point and range lookups,\nthe HFile format is chosen as the base file format for the internal metadata table. Since the metadata table stores\nthe auxiliary data at the partition level (files index) or the file level (column_stats index), the lookup based on a\nsingle partition path and a file group is going to be very efficient with the HFile format. Both the base and log files\nin Hudi\u2019s metadata table uses the HFile format and are meticulously designed to reduce remote GET calls on cloud storages.\nFurther, these metadata table indices are served via a centralized timeline server which caches the metadata, further\nreducing the latency of the lookup from executors."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"metadata-table-indices",children:"Metadata table indices"}),"\n",(0,a.jsx)(t.p,{children:"Following are the different indices currently available under the metadata table."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+15%3A+HUDI+File+Listing+Improvements",children:"files index"})})}),":\nStored as ",(0,a.jsx)(t.em,{children:"files"})," partition in the metadata table. Contains file information such as file name, size, and active state\nfor each partition in the data table. Improves the files listing performance by avoiding direct file system calls such\nas ",(0,a.jsx)(t.em,{children:"exists, listStatus"})," and ",(0,a.jsx)(t.em,{children:"listFiles"})," on the data table."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-27/rfc-27.md",children:"column_stats index"})})}),": Stored as ",(0,a.jsx)(t.em,{children:"column_stats"}),"\npartition in the metadata table. Contains the statistics of interested columns, such as min and max values, total values,\nnull counts, size, etc., for all data files and are used while serving queries with predicates matching interested\ncolumns. This index is used along with the ",(0,a.jsx)(t.a,{href:"https://www.onehouse.ai/blog/hudis-column-stats-index-and-data-skipping-feature-help-speed-up-queries-by-an-orders-of-magnitude",children:"data skipping"}),"\nto speed up queries by orders of magnitude."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/46f41d186c6c84a6af2c54a907ff2736b6013e15/rfc/rfc-37/rfc-37.md",children:"bloom_filter index"})})}),":\nStored as ",(0,a.jsx)(t.em,{children:"bloom_filter"})," partition in the metadata table. This index employs range-based pruning on the minimum and\nmaximum values of the record keys and bloom-filter-based lookups to tag incoming records. For large tables, this\ninvolves reading the footers of all matching data files for bloom filters, which can be expensive in the case of random\nupdates across the entire dataset. This index stores bloom filters of all data files centrally to avoid scanning the\nfooters directly from all data files."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC-08++Record+level+indexing+mechanisms+for+Hudi+datasets",children:"record_index"})})}),":\nStored as ",(0,a.jsx)(t.em,{children:"record_index"})," partition in the metadata table. Contains the mapping of the record key to location. Record\nindex is a global index, enforcing key uniqueness across all partitions in the table. Most recently added in 0.14.0\nHudi release, this index aids in locating records faster than other existing indices and can provide a speedup orders of magnitude\nfaster in large deployments where index lookup dominates write latencies."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"enable-hudi-metadata-table-and-multi-modal-index-in-write-side",children:"Enable Hudi Metadata Table and Multi-Modal Index in write side"}),"\n",(0,a.jsxs)(t.p,{children:["Following are the Spark based basic configs that are needed to enable metadata and multi-modal indices. For advanced configs please refer\n",(0,a.jsx)(t.a,{href:"https://hudi.apache.org/docs/configurations#Metadata-Configs-advanced-configs",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Config Name"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"hoodie.metadata.enable"}),(0,a.jsx)(t.td,{children:"true (Optional) Enabled on the write side"}),(0,a.jsxs)(t.td,{children:["Enable the internal metadata table which serves table metadata like level file listings. For 0.10.1 and prior releases, metadata table is disabled by default and needs to be explicitly enabled.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Config Param: ENABLE"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Since Version: 0.7.0"})]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"hoodie.metadata.index.bloom.filter.enable"}),(0,a.jsx)(t.td,{children:"false (Optional)"}),(0,a.jsxs)(t.td,{children:["Enable indexing bloom filters of user data files under metadata table. When enabled, metadata table will have a partition to store the bloom filter index and will be used during the index lookups.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Config Param: ENABLE_METADATA_INDEX_BLOOM_FILTER"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Since Version: 0.11.0"})]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"hoodie.metadata.index.column.stats.enable"}),(0,a.jsx)(t.td,{children:"false (Optional)"}),(0,a.jsxs)(t.td,{children:["Enable indexing column ranges of user data files under metadata table key lookups. When enabled, metadata table will have a partition to store the column ranges and will be used for pruning files during the index lookups.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Config Param: ENABLE_METADATA_INDEX_COLUMN_STATS"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Since Version: 0.11.0"})]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"hoodie.metadata.record.index.enable"}),(0,a.jsx)(t.td,{children:"false (Optional)"}),(0,a.jsxs)(t.td,{children:["Create the HUDI Record Index within the Metadata Table",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Config Param: RECORD_INDEX_ENABLE_PROP"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Since Version: 0.14.0"})]})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["The metadata table with synchronous updates and metadata-table-based file listing are enabled by default.\nThere are prerequisite configurations and steps in ",(0,a.jsx)(t.a,{href:"#deployment-considerations-for-metadata-table",children:"Deployment considerations"})," to\nsafely use this feature.  The metadata table and related file listing functionality can still be turned off by setting\n",(0,a.jsx)(t.a,{href:"/docs/configurations#hoodiemetadataenable",children:(0,a.jsx)(t.code,{children:"hoodie.metadata.enable"})})," to ",(0,a.jsx)(t.code,{children:"false"}),". The\n",(0,a.jsx)(t.a,{href:"https://www.onehouse.ai/blog/introducing-multi-modal-index-for-the-lakehouse-in-apache-hudi",children:"multi-modal index"})," are\ndisabled by default and can be enabled in write side explicitly using the above configs."]}),"\n",(0,a.jsxs)(t.p,{children:["For flink, following are the basic configs of interest to enable metadata based indices. Please refer\n",(0,a.jsx)(t.a,{href:"https://hudi.apache.org/docs/configurations#Flink-Options",children:"here"})," for advanced configs"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Config Name"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"metadata.enabled"}),(0,a.jsx)(t.td,{children:"false (Optional)"}),(0,a.jsxs)(t.td,{children:["Enable the internal metadata table which serves table metadata like level file listings, default disabled",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})," ",(0,a.jsx)(t.code,{children:"Config Param: METADATA_ENABLED"})]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"hoodie.metadata.index.column.stats.enable"}),(0,a.jsx)(t.td,{children:"false (Optional)"}),(0,a.jsxs)(t.td,{children:["Enable indexing column ranges of user data files under metadata table key lookups. When enabled, metadata table will have a partition to store the column ranges and will be used for pruning files during the index lookups.",(0,a.jsx)("br",{})]})]})]})]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"If you turn off the metadata table after enabling, be sure to wait for a few commits so that the metadata table is fully\ncleaned up, before re-enabling the metadata table again."})}),"\n",(0,a.jsx)(t.h2,{id:"use-metadata-indices-for-query-side-improvements",children:"Use metadata indices for query side improvements"}),"\n",(0,a.jsx)(t.h3,{id:"files-index",children:"files index"}),"\n",(0,a.jsxs)(t.p,{children:["Metadata based listing using ",(0,a.jsx)(t.em,{children:"files_index"})," can be leveraged on the read side by setting appropriate configs/session properties\nfrom different engines as shown below:"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Readers"}),(0,a.jsx)(t.th,{children:"Config"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Spark DataSource"}),(0,a.jsx)("li",{children:"Spark SQL"}),(0,a.jsx)("li",{children:"Strucured Streaming"})]})}),(0,a.jsx)(t.td,{children:"hoodie.metadata.enable"}),(0,a.jsxs)(t.td,{children:["When set to ",(0,a.jsx)(t.code,{children:"true"})," enables use of the spark file index implementation for Hudi, that speeds up listing of large tables.",(0,a.jsx)("br",{})]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Presto"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://prestodb.io/docs/current/connector/hudi.html",children:"hudi.metadata-table-enabled"})}),(0,a.jsxs)(t.td,{children:["When set to ",(0,a.jsx)(t.code,{children:"true"})," fetches the list of file names and sizes from Hudi\u2019s metadata table rather than storage."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Trino"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://trino.io/docs/current/connector/hudi.html#general-configuration",children:"hudi.metadata-enabled"})}),(0,a.jsxs)(t.td,{children:["When set to ",(0,a.jsx)(t.code,{children:"true"})," fetches the list of file names and sizes from metadata rather than storage."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Athena"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/athena/latest/ug/querying-hudi.html",children:"hudi.metadata-listing-enabled"})}),(0,a.jsxs)(t.td,{children:["When this table property is set to ",(0,a.jsx)(t.code,{children:"TRUE"})," enables the Hudi metadata table and the related file listing functionality"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Flink DataStream"}),(0,a.jsx)("li",{children:"Flink SQL"})]})}),(0,a.jsx)(t.td,{children:"metadata.enabled"}),(0,a.jsxs)(t.td,{children:["When set to ",(0,a.jsx)(t.code,{children:"true"})," from DDL uses the internal metadata table to serves table metadata like level file listings"]})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"column_stats-index-and-data-skipping",children:"column_stats index and data skipping"}),"\n",(0,a.jsx)(t.p,{children:"Enabling metadata table and column stats index is a prerequisite to enabling data skipping capabilities. Following are the\ncorresponding configs across Spark and Flink readers."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Readers"}),(0,a.jsx)(t.th,{children:"Config"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Spark DataSource"}),(0,a.jsx)("li",{children:"Spark SQL"}),(0,a.jsx)("li",{children:"Strucured Streaming"})]})}),(0,a.jsx)(t.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(t.code,{children:"hoodie.metadata.enable"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.code,{children:"hoodie.enable.data.skipping"})})]})}),(0,a.jsx)(t.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["When set to ",(0,a.jsx)(t.code,{children:"true"})," enables use of the spark file index implementation for Hudi, that speeds up listing of large tables."]}),(0,a.jsxs)("li",{children:["When set to ",(0,a.jsx)(t.code,{children:"true"})," enables data-skipping allowing queries to leverage indices to reduce the search space by skipping over files ",(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Config Param: ENABLE_DATA_SKIPPING"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Since Version: 0.10.0"})," ",(0,a.jsx)("br",{})]})]})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Flink DataStream"}),(0,a.jsx)("li",{children:"Flink SQL"})]})}),(0,a.jsx)(t.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(t.code,{children:"metadata.enabled"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.code,{children:"read.data.skipping.enabled"})})]})}),(0,a.jsx)(t.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[" When set to ",(0,a.jsx)(t.code,{children:"true"})," from DDL uses the internal metadata table to serves table metadata like level file listings"]}),(0,a.jsxs)("li",{children:["When set to ",(0,a.jsx)(t.code,{children:"true"})," enables data-skipping allowing queries to leverage indices to reduce the search space byskipping over files"]})]})})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"deployment-considerations-for-metadata-table",children:"Deployment considerations for metadata Table"}),"\n",(0,a.jsxs)(t.p,{children:["To ensure that metadata table stays up to date, all write operations on the same Hudi table need additional configurations\nbesides the above in different deployment models.  Before enabling metadata table, all writers on the same table must\nbe stopped. Please refer to the different ",(0,a.jsx)(t.a,{href:"/docs/concurrency_control#deployment-models-with-supported-concurrency-controls",children:"deployment models"}),"\nfor more details on each model. This section only highlights how to safely enable metadata table in different deployment models."]}),"\n",(0,a.jsx)(t.h3,{id:"deployment-model-a-single-writer-with-inline-table-services",children:"Deployment Model A: Single writer with inline table services"}),"\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.a,{href:"/docs/concurrency_control#model-a-single-writer-with-inline-table-services",children:"Model A"}),", after setting ",(0,a.jsx)(t.a,{href:"/docs/configurations#hoodiemetadataenable",children:(0,a.jsx)(t.code,{children:"hoodie.metadata.enable"})})," to ",(0,a.jsx)(t.code,{children:"true"}),", restarting\nthe single writer is sufficient to safely enable metadata table."]}),"\n",(0,a.jsx)(t.h3,{id:"deployment-model-b-single-writer-with-async-table-services",children:"Deployment Model B: Single writer with async table services"}),"\n",(0,a.jsxs)(t.p,{children:["If your current deployment model is ",(0,a.jsx)(t.a,{href:"/docs/concurrency_control#model-b-single-writer-with-async-table-services",children:"Model B"}),", enabling metadata\ntable requires adding optimistic concurrency control along with suggested lock provider like below."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-properties",children:"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.InProcessLockProvider\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"These configurations are required only if metadata table is enabled in this deployment model."})}),"\n",(0,a.jsxs)(t.p,{children:["If multiple writers in different processes are present, including one writer with async table services, please refer to\n",(0,a.jsx)(t.a,{href:"#deployment-model-c-multi-writer",children:"Deployment Model C: Multi-writer"})," for configs, with the difference of using a\ndistributed lock provider.  Note that running a separate compaction (",(0,a.jsx)(t.code,{children:"HoodieCompactor"}),") or clustering (",(0,a.jsx)(t.code,{children:"HoodieClusteringJob"}),")\njob apart from the ingestion writer is considered as multi-writer deployment, as they are not running in the same\nprocess which cannot rely on the in-process lock provider."]}),"\n",(0,a.jsx)(t.h3,{id:"deployment-model-c-multi-writer",children:"Deployment Model C: Multi-writer"}),"\n",(0,a.jsxs)(t.p,{children:["If your current deployment model is ",(0,a.jsx)(t.a,{href:"/docs/concurrency_control#model-c-multi-writer",children:"multi-writer"})," along with a lock\nprovider and other required configs set for every writer as follows, there is no additional configuration required. You\ncan bring up the writers sequentially after stopping the writers for enabling metadata table. Applying the proper\nconfigurations to only partial writers leads to loss of data from the inconsistent writer. So, ensure you enable\nmetadata table across all writers."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-properties",children:"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=<distributed-lock-provider-classname>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Note that there are different external ",(0,a.jsx)(t.a,{href:"/docs/concurrency_control#external-locking-and-lock-providers",children:"lock providers available"}),"\nto choose from."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>d});var n=i(96540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);