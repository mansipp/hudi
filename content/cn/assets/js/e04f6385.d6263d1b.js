"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[70174],{21197:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"file_sizing","title":"File Sizing","description":"Solving the small file problem is fundamental to ensuring","source":"@site/versioned_docs/version-0.14.1/file_sizing.md","sourceDirName":".","slug":"/file_sizing","permalink":"/cn/docs/0.14.1/file_sizing","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.1/file_sizing.md","tags":[],"version":"0.14.1","frontMatter":{"title":"File Sizing","toc":true,"toc_min_heading_level":2,"toc_max_heading_level":4},"sidebar":"docs","previous":{"title":"Marker Mechanism","permalink":"/cn/docs/0.14.1/markers"},"next":{"title":"Disaster Recovery","permalink":"/cn/docs/0.14.1/disaster_recovery"}}');var t=s(74848),r=s(28453);const l={title:"File Sizing",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},o=void 0,a={},d=[{value:"Auto-sizing during writes",id:"auto-sizing-during-writes",level:2},{value:"File sizing for Copy-On-Write (COW) and Merge-On-Read (MOR) tables",id:"file-sizing-for-copy-on-write-cow-and-merge-on-read-mor-tables",level:3},{value:"More details about file sizing for Merge-On-Read(MOR) tables",id:"more-details-about-file-sizing-for-merge-on-readmor-tables",level:3},{value:"Configs",id:"configs",level:3},{value:"Auto-Sizing With Clustering",id:"auto-sizing-with-clustering",level:2},{value:"Configs",id:"configs-1",level:3},{value:"Related Resources",id:"related-resources",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["Solving the ",(0,t.jsx)(i.a,{href:"https://hudi.apache.org/blog/2021/03/01/hudi-file-sizing/",children:"small file problem"})," is fundamental to ensuring\ngreat experience on the data lake. If you don\u2019t size the files appropriately, you can slow down the queries and the pipelines.\nSome of the issues you may encounter with small files include the following:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Queries slow down"}),": You\u2019ll have to scan through many small files to retrieve data for a query. It\u2019s a very inefficient\nway of accessing and utilizing the data. Also, cloud storage, like S3, enforces a rate-limit on how many requests can\nbe processed per second per prefix in a bucket. A higher number of files, i.e., at least one request per file regardless\nof the file size, increases the chance of encountering a rate-limit, as well as additional fixed costs for opening/closing\nthem. All of these causes the queries to slow down."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Pipelines slow down"}),": You can slow down your Spark, Flink or Hive jobs due to excessive scheduling overhead or memory\nrequirements; the more files you have, the more tasks you create."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Storage inefficiencies"}),": When working with many small files, you can be inefficient in using your storage. For example,\nmany small files can yield a lower compression ratio, increasing storage costs. If you\u2019re indexing the data, that also\ntakes up more storage space to store additional metadata, such as column statistics. If you\u2019re working with a smaller\namount of data, you might not see a significant impact with storage. However, when dealing with petabyte and exabyte\ndata, you\u2019ll need to be efficient in managing storage resources."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"A critical design decision in the Hudi architecture is to avoid small file creation. Hudi is uniquely designed to write\nappropriately sized files automatically. This page will show you how Apache Hudi overcomes the dreaded small files problem.\nThere are two ways to manage small files in Hudi:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#auto-sizing-during-writes",children:"Auto-size during writes"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#auto-sizing-with-clustering",children:"Clustering after writes"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Below, we will describe the advantages and trade-offs of each."}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"the bulk_insert write operation does not have auto-sizing capabilities during ingestion"})}),"\n",(0,t.jsx)(i.h2,{id:"auto-sizing-during-writes",children:"Auto-sizing during writes"}),"\n",(0,t.jsxs)(i.p,{children:["You can manage file sizes through Hudi\u2019s auto-sizing capability during ingestion. The default targeted file size for\nParquet base files is 120MB, which can be configured by ",(0,t.jsx)(i.code,{children:"hoodie.parquet.max.file.size"}),". Auto-sizing may add some write\nlatency, but it ensures that the queries are always efficient when a write transaction is committed. It\u2019s important to\nnote that if you don\u2019t manage file sizing as you write and, instead, try to run clustering to fix your file sizing\nperiodically, your queries might be slow until the point when the clustering finishes. This is only supported for\n",(0,t.jsx)(i.strong,{children:"append"})," use cases only; ",(0,t.jsx)(i.strong,{children:"mutable"})," are not supported at the moment. Please refer to the\n",(0,t.jsx)(i.a,{href:"https://hudi.apache.org/docs/clustering",children:"clustering documentation"})," for more details."]}),"\n",(0,t.jsx)(i.p,{children:"If you need to control the file sizing, i.e., increase the target file size or change how small files are identified,\nfollow the instructions below for Copy-On-Write and Merge-On-Read tables."}),"\n",(0,t.jsx)(i.h3,{id:"file-sizing-for-copy-on-write-cow-and-merge-on-read-mor-tables",children:"File sizing for Copy-On-Write (COW) and Merge-On-Read (MOR) tables"}),"\n",(0,t.jsx)(i.p,{children:"To tune the file sizing for both COW and MOR tables, you can set the small file limit and the maximum Parquet file size.\nHudi will try to add enough records to a small file at write time to get it to the configured maximum limit."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["For example, if the ",(0,t.jsx)(i.code,{children:"hoodie.parquet.small.file.limit=104857600"})," (100MB) and ",(0,t.jsx)(i.code,{children:"hoodie.parquet.max.file.size=125829120"})," (120MB),\nHudi will pick all files < 100MB and try to get them up to 120MB."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"For creating a Hudi table initially, setting an accurate record size estimate is vital to ensure Hudi can adequately\nestimate how many records need to be bin-packed in a Parquet file for the first ingestion batch. Then, Hudi automatically\nuses the average record size for subsequent writes based on previous commits."}),"\n",(0,t.jsx)(i.h3,{id:"more-details-about-file-sizing-for-merge-on-readmor-tables",children:"More details about file sizing for Merge-On-Read(MOR) tables"}),"\n",(0,t.jsxs)(i.p,{children:["As a MOR table aims to reduce the write amplification, compared to a COW table, when writing to a MOR table, Hudi limits\nthe number of Parquet base files to one for auto file sizing during insert and upsert operation. This limits the number\nof rewritten files. This can be configured through ",(0,t.jsx)(i.code,{children:"hoodie.merge.small.file.group.candidates.limit"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["For storage systems that support append operation, in addition to file sizing Parquet base files for a MOR table, you\ncan also tune the log files file-sizing with ",(0,t.jsx)(i.code,{children:"hoodie.logfile.max.size"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"MergeOnRead works differently for different INDEX choices so there are few more configs to set:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Indexes with ",(0,t.jsx)(i.strong,{children:"canIndexLogFiles = true"})," : Inserts of new data go directly to log files. In this case, you can configure\nthe ",(0,t.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#hoodielogfilemaxsize",children:"maximum log size"})," and a\n",(0,t.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#hoodielogfiletoparquetcompressionratio",children:"factor"})," that denotes reduction\nin size when data moves from avro to parquet files."]}),"\n",(0,t.jsxs)(i.li,{children:["Indexes with ",(0,t.jsx)(i.strong,{children:"canIndexLogFiles = false"})," : Inserts of new data go only to parquet files. In this case, the same configurations\nas above for the COPY_ON_WRITE case applies.\n",(0,t.jsx)(i.strong,{children:"NOTE"})," : In either case, small files will be auto sized only if there is no PENDING compaction or associated log file\nfor that particular file slice. For example, for case 1: If you had a log file and a compaction C1 was scheduled to\nconvert that log file to parquet, no more inserts can go into that log file. For case 2: If you had a parquet file and\nan update ended up creating an associated delta log file, no more inserts can go into that parquet file. Only after the\ncompaction has been performed and there are NO log files associated with the base parquet file, can new inserts be sent\nto auto size that parquet file."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"configs",children:"Configs"}),"\n",(0,t.jsxs)(i.p,{children:["Here are the essential configurations for ",(0,t.jsx)(i.strong,{children:"COW tables"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Spark based configs:"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Config Name"}),(0,t.jsx)(i.th,{children:"Default"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"hoodie.parquet.small.file.limit"}),(0,t.jsx)(i.td,{children:"104857600 (Optional)"}),(0,t.jsxs)(i.td,{children:["During an insert and upsert operation, we opportunistically expand existing small files on storage, instead of writing new files, to keep number of files to an optimum. This config sets the file size limit below which a file on storage  becomes a candidate to be selected as such a ",(0,t.jsx)(i.code,{children:"small file"}),". By default, treat any file <= 100MB as a small file. Also note that if this set <= 0, will not try to get small files and directly write new files",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(i.code,{children:"Config Param: PARQUET_SMALL_FILE_LIMIT"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"hoodie.parquet.max.file.size"}),(0,t.jsx)(i.td,{children:"125829120 (Optional)"}),(0,t.jsxs)(i.td,{children:["Target size in bytes for parquet files produced by Hudi write phases. For DFS, this needs to be aligned with the underlying filesystem block size for optimal performance.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(i.code,{children:"Config Param: PARQUET_MAX_FILE_SIZE"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"hoodie.copyonwrite.record.size.estimate"}),(0,t.jsx)(i.td,{children:"1024 (Optional)"}),(0,t.jsxs)(i.td,{children:["The average record size. If not explicitly specified, hudi will compute the record size estimate compute dynamically based on commit metadata.  This is critical in computing the insert parallelism and bin-packing inserts into small files.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(i.code,{children:"Config Param: COPY_ON_WRITE_RECORD_SIZE_ESTIMATE"})]})]})]})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Flink based configs:"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Config Name"}),(0,t.jsx)(i.th,{children:"Default"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"write.parquet.max.file.size"}),(0,t.jsx)(i.td,{children:"120 (Optional)"}),(0,t.jsxs)(i.td,{children:["Target size for parquet files produced by Hudi write phases. For DFS, this needs to be aligned with the underlying filesystem block size for optimal performance.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:"Config Param: WRITE_PARQUET_MAX_FILE_SIZE"})]})]})})]}),"\n",(0,t.jsxs)(i.p,{children:["Here are the essential configurations for ",(0,t.jsx)(i.strong,{children:"MOR tables"}),":"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Spark based configs:"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Config Name"}),(0,t.jsx)(i.th,{children:"Default"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"hoodie.parquet.small.file.limit"}),(0,t.jsx)(i.td,{children:"104857600 (Optional)"}),(0,t.jsxs)(i.td,{children:["During an insert and upsert operation, we opportunistically expand existing small files on storage, instead of writing new files, to keep number of files to an optimum. This config sets the file size limit below which a file on storage  becomes a candidate to be selected as such a ",(0,t.jsx)(i.code,{children:"small file"}),". By default, treat any file <= 100MB as a small file. Also note that if this set <= 0, will not try to get small files and directly write new files",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(i.code,{children:"Config Param: PARQUET_SMALL_FILE_LIMIT"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"hoodie.parquet.max.file.size"}),(0,t.jsx)(i.td,{children:"125829120 (Optional)"}),(0,t.jsxs)(i.td,{children:["Target size in bytes for parquet files produced by Hudi write phases. For DFS, this needs to be aligned with the underlying filesystem block size for optimal performance.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(i.code,{children:"Config Param: PARQUET_MAX_FILE_SIZE"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"hoodie.merge.small.file.group.candidates.limit"}),(0,t.jsx)(i.td,{children:"1 (Optional)"}),(0,t.jsxs)(i.td,{children:["Limits number of file groups, whose base file satisfies small-file limit, to consider for appending records during upsert operation. Only applicable to MOR tables",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(i.code,{children:"Config Param: MERGE_SMALL_FILE_GROUP_CANDIDATES_LIMIT"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"hoodie.logfile.max.size"}),(0,t.jsx)(i.td,{children:"1073741824 (Optional)"}),(0,t.jsxs)(i.td,{children:["LogFile max size in bytes. This is the maximum size allowed for a log file before it is rolled over to the next version. This log rollover limit only works on storage systems that support append operation. Please note that on cloud storage like S3/GCS, this may not be respected",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(i.code,{children:"Config Param: LOGFILE_MAX_SIZE"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"hoodie.logfile.to.parquet.compression.ratio"}),(0,t.jsx)(i.td,{children:"0.35 (Optional)"}),(0,t.jsxs)(i.td,{children:["Expected additional compression as records move from log files to parquet. Used for merge_on_read table to send inserts into log files & control the size of compacted parquet file.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(i.code,{children:"Config Param: LOGFILE_TO_PARQUET_COMPRESSION_RATIO_FRACTION"})]})]})]})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Flink based configs:"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Config Name"}),(0,t.jsx)(i.th,{children:"Default"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"write.parquet.max.file.size"}),(0,t.jsx)(i.td,{children:"120 (Optional)"}),(0,t.jsxs)(i.td,{children:["Target size for parquet files produced by Hudi write phases. For DFS, this needs to be aligned with the underlying filesystem block size for optimal performance.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:"Config Param: WRITE_PARQUET_MAX_FILE_SIZE"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"write.log.max.size"}),(0,t.jsx)(i.td,{children:"1024 (Optional)"}),(0,t.jsxs)(i.td,{children:["Maximum size allowed in MB for a log file before it is rolled over to the next version, default 1GB",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:"Config Param: WRITE_LOG_MAX_SIZE"})]})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"auto-sizing-with-clustering",children:"Auto-Sizing With Clustering"}),"\n",(0,t.jsxs)(i.p,{children:["Clustering is a service that allows you to combine small files into larger ones while at the same time (optionally) changing\nthe data layout by sorting or applying ",(0,t.jsx)(i.a,{href:"https://hudi.apache.org/blog/2021/12/29/hudi-zorder-and-hilbert-space-filling-curves/",children:"space-filling curves"}),"\nlike Z-order or Hilbert curve. We won\u2019t go into all the details about clustering here, but please refer to the\n",(0,t.jsx)(i.a,{href:"https://hudi.apache.org/docs/clustering",children:"clustering section"})," for more details."]}),"\n",(0,t.jsxs)(i.p,{children:["Clustering is one way to achieve file sizing, so you can have faster queries. When you ingest data, you may still have a\nlot of small files (depending on your configurations and the data size from ingestion i.e., input batch). In this case,\nyou will want to cluster all the small files to larger files to improve query performance. Clustering can be performed\nin different ways. Please check out the ",(0,t.jsx)(i.a,{href:"https://hudi.apache.org/docs/clustering",children:"clustering documentation"})," for more details."]}),"\n",(0,t.jsx)(i.p,{children:"An example where clustering might be very useful is when a user has a Hudi table with many small files. For example, if\nyou're using BULK_INSERT without any sort modes, or you want a different file layout, you can use the clustering service\nto fix all the file sizes without ingesting any new data."}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"Clustering in Hudi is not a blocking operation, and writes can continue concurrently as long as no files need to be\nupdated while the clustering service is running. The writes will fail if there are updates to the data being clustered\nwhile the clustering service runs."})}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["Hudi always creates immutable files on storage. To be able to do auto-sizing or clustering, Hudi will always create a\nnewer version of the smaller file, resulting in 2 versions of the same file. The ",(0,t.jsx)(i.a,{href:"hoodie_cleaner",children:"cleaner service"}),"\nwill later kick in and delete the older version small file and keep the latest one."]})}),"\n",(0,t.jsx)(i.p,{children:"Here are the critical file sizing configurations:"}),"\n",(0,t.jsx)(i.h3,{id:"configs-1",children:"Configs"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Spark based configs:"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Config Name"}),(0,t.jsx)(i.th,{children:"Default"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"hoodie.clustering.plan.strategy.small.file.limit"}),(0,t.jsx)(i.td,{children:"314572800 (Optional)"}),(0,t.jsxs)(i.td,{children:["Files smaller than the size in bytes specified here are candidates for clustering",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(i.code,{children:"Config Param: PLAN_STRATEGY_SMALL_FILE_LIMIT"}),(0,t.jsx)("br",{}),(0,t.jsx)(i.code,{children:"Since Version: 0.7.0"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"hoodie.clustering.plan.strategy.target.file.max.bytes"}),(0,t.jsx)(i.td,{children:"1073741824 (Optional)"}),(0,t.jsxs)(i.td,{children:["Each group can produce 'N' (CLUSTERING_MAX_GROUP_SIZE/CLUSTERING_TARGET_FILE_SIZE) output file groups",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(i.code,{children:"Config Param: PLAN_STRATEGY_TARGET_FILE_MAX_BYTES"}),(0,t.jsx)("br",{}),(0,t.jsx)(i.code,{children:"Since Version: 0.7.0"})]})]})]})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Flink based configs:"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Config Name"}),(0,t.jsx)(i.th,{children:"Default"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"clustering.plan.strategy.small.file.limit"}),(0,t.jsx)(i.td,{children:"600 (Optional)"}),(0,t.jsxs)(i.td,{children:["Files smaller than the size specified here are candidates for clustering, default 600 MB",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:"Config Param: CLUSTERING_PLAN_STRATEGY_SMALL_FILE_LIMIT"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"clustering.plan.strategy.target.file.max.bytes"}),(0,t.jsx)(i.td,{children:"1073741824 (Optional)"}),(0,t.jsxs)(i.td,{children:["Each group can produce 'N' (CLUSTERING_MAX_GROUP_SIZE/CLUSTERING_TARGET_FILE_SIZE) output file groups, default 1 GB",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:"Config Param: CLUSTERING_PLAN_STRATEGY_TARGET_FILE_MAX_BYTES"})]})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,t.jsx)("h3",{children:"Videos"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.youtube.com/watch?v=qg-2aYyvfts",children:"Mastering File Sizing in Hudi: Boosting Performance and Efficiency"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.youtube.com/watch?v=BvoLVeidd-0",children:'"How do I Ingest Extremely Small Files into Hudi Data lake with Glue Incremental data processing'})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>o});var n=s(96540);const t={},r=n.createContext(t);function l(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);