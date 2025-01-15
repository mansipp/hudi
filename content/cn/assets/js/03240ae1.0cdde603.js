"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[76041],{95608:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"markers","title":"Marker Mechanism","description":"Purpose of Markers","source":"@site/versioned_docs/version-0.14.1/markers.md","sourceDirName":".","slug":"/markers","permalink":"/cn/docs/0.14.1/markers","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.1/markers.md","tags":[],"version":"0.14.1","frontMatter":{"title":"Marker Mechanism","toc":true},"sidebar":"docs","previous":{"title":"Rollback Mechanism","permalink":"/cn/docs/0.14.1/rollbacks"},"next":{"title":"File Sizing","permalink":"/cn/docs/0.14.1/file_sizing"}}');var a=t(74848),n=t(28453);const s={title:"Marker Mechanism",toc:!0},o=void 0,l={},c=[{value:"Purpose of Markers",id:"purpose-of-markers",level:2},{value:"Marker structure",id:"marker-structure",level:2},{value:"Marker Writing Options",id:"marker-writing-options",level:2},{value:"Direct Write Markers",id:"direct-write-markers",level:3},{value:"Timeline Server Markers (Default)",id:"timeline-server-markers-default",level:3},{value:"Marker Configuration Parameters",id:"marker-configuration-parameters",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"purpose-of-markers",children:"Purpose of Markers"}),"\n",(0,a.jsx)(r.p,{children:"A write operation can fail before it completes, leaving partial or corrupt data files on storage. Markers are used to track\nand cleanup any partial or failed write operations. As a write operation begins, a marker is created indicating\nthat a file write is in progress. When the write commit succeeds, the marker is deleted. If a write operation fails part\nway through, a marker is left behind which indicates that the file is incomplete. Two important operations that use markers include:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Removing duplicate/partial data files"}),":","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"In Spark, the Hudi write client delegates the data file writing to multiple executors. One executor can fail the task,\nleaving partial data files written, and Spark retries the task in this case until it succeeds."}),"\n",(0,a.jsx)(r.li,{children:"When speculative execution is enabled, there can also be multiple successful attempts at writing out the same data\ninto different files, only one of which is finally handed to the Spark driver process for committing.\nThe markers help efficiently identify the partial data files written, which contain duplicate data compared to the data\nfiles written by the successful trial later, and these duplicate data files are cleaned up when the commit is finalized."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Rolling back failed commits"}),": If a write operation fails, the next write client will roll back the failed commit before proceeding with the new write. The rollback is done with the help of markers to identify the data files written as part of the failed commit."]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"If we did not have markers to track the per-commit data files, we would have to list all files in the file system,\ncorrelate that with the files seen in timeline and then delete the ones that belong to partial write failures.\nAs you could imagine, this would be very costly in a very large installation of a datalake."}),"\n",(0,a.jsx)(r.h2,{id:"marker-structure",children:"Marker structure"}),"\n",(0,a.jsxs)(r.p,{children:["Each marker entry is composed of three parts, the data file name,\nthe marker extension (",(0,a.jsx)(r.code,{children:".marker"}),"), and the I/O operation created the file (",(0,a.jsx)(r.code,{children:"CREATE"})," - inserts, ",(0,a.jsx)(r.code,{children:"MERGE"})," - updates/deletes,\nor ",(0,a.jsx)(r.code,{children:"APPEND"})," - either). For example, the marker ",(0,a.jsx)(r.code,{children:"91245ce3-bb82-4f9f-969e-343364159174-0_140-579-0_20210820173605.parquet.marker.CREATE"})," indicates\nthat the corresponding data file is ",(0,a.jsx)(r.code,{children:"91245ce3-bb82-4f9f-969e-343364159174-0_140-579-0_20210820173605.parquet"})," and the I/O type is ",(0,a.jsx)(r.code,{children:"CREATE"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"marker-writing-options",children:"Marker Writing Options"}),"\n",(0,a.jsx)(r.p,{children:"There are two ways to write Markers:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Directly writing markers to storage, which is a legacy configuration."}),"\n",(0,a.jsx)(r.li,{children:"Writing markers to the Timeline Server which batches marker requests before writing them to storage (Default). This option improves write performance of large files as described below."}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"direct-write-markers",children:"Direct Write Markers"}),"\n",(0,a.jsxs)(r.p,{children:["Directly writing to storage creates a new marker file corresponding to each data file, with the marker filename as described above.\nThe marker file does not have any content, i.e., empty. Each marker file is written to storage in the same directory\nhierarchy, i.e., commit instant and partition path, under a temporary folder ",(0,a.jsx)(r.code,{children:".hoodie/.temp"})," under the base path of the Hudi table.\nFor example, the figure below shows one example of the marker files created and the corresponding data files when writing\ndata to the Hudi table.  When getting or deleting all the marker file paths, the mechanism first lists all the paths\nunder the temporary folder, ",(0,a.jsx)(r.code,{children:".hoodie/.temp/<commit_instant>"}),", and then does the operation."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"An example of marker and data files in direct marker file mechanism",src:t(36995).A+"",width:"3440",height:"1444"})}),"\n",(0,a.jsxs)(r.p,{children:["While it's much efficient over scanning the entire table for uncommitted data files, as the number of data files to write\nincreases, so does the number of marker files to create. For large writes which need to write significant number of data\nfiles, e.g., 10K or more, this can create performance bottlenecks for cloud storage such as AWS S3. In AWS S3, each\nfile create and delete call triggers an HTTP request and there is ",(0,a.jsx)(r.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html",children:"rate-limiting"}),"\non how many requests can be processed per second per prefix in a bucket. When the number of data files to write concurrently\nand the number of marker files is huge, the marker file operations could take up non-trivial time during the write operation,\nsometimes on the order of a few minutes or more."]}),"\n",(0,a.jsx)(r.h3,{id:"timeline-server-markers-default",children:"Timeline Server Markers (Default)"}),"\n",(0,a.jsx)(r.p,{children:"To address the performance bottleneck due to rate-limiting of AWS S3 explained above, we introduce a new marker mechanism\nleveraging the timeline server, which optimizes the marker-related latency for storage with non-trivial file I/O latency.\nIn the diagram below you can see the timeline-server-based marker mechanism delegates the marker creation and other marker-related\noperations from individual executors to the timeline server for centralized processing. The timeline server batches the\nmarker creation requests and writes the markers to a bounded set of files in the file system at configurable batch intervals (default 50ms).\nIn this way, the number of actual file operations and latency related to markers can be significantly reduced even with\na huge number of data files, leading to improved performance of large writes."}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Timeline-server-based marker mechanism",src:t(56542).A+"",width:"1200",height:"432"})}),"\n",(0,a.jsx)(r.p,{children:"Each marker creation request is handled asynchronously in the Javalin timeline server and queued before processing.\nFor every batch interval, the timeline server pulls the pending marker creation requests from the queue and\nwrites all markers to the next file in a round robin fashion. Inside the timeline server, such batch processing is\nmulti-threaded, designed and implemented to guarantee consistency and correctness. Both the batch interval and the batch\nconcurrency can be configured through the write options."}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Batched processing of marker creation requests",src:t(78660).A+"",width:"3184",height:"1168"})}),"\n",(0,a.jsx)(r.p,{children:"Note that the worker thread always checks whether the marker has already been created by comparing the marker name from\nthe request with the memory copy of all markers maintained at the timeline server. The underlying files storing the\nmarkers are only read upon the first marker request (lazy loading). The responses of requests are only sent back once the\nnew markers are flushed to the files, so that in the case of the timeline server failure, the timeline server can recover\nthe already created markers. These ensure consistency between storage and the in-memory copy, and improve the performance\nof processing marker requests."}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"NOTE:"})," Timeline based markers are not yet supported for HDFS, however, users may barely notice performance challenges\nwith direct markers because the file system metadata is efficiently cached in memory and doesn't face the same rate-limiting as S3."]}),"\n",(0,a.jsx)(r.h2,{id:"marker-configuration-parameters",children:"Marker Configuration Parameters"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Property Name"}),(0,a.jsx)(r.th,{children:"Default"}),(0,a.jsx)(r.th,{style:{textAlign:"center"},children:"Meaning"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"hoodie.write.markers.type"})}),(0,a.jsx)(r.td,{children:"timeline_server_based"}),(0,a.jsxs)(r.td,{style:{textAlign:"center"},children:["Marker type to use.  Two modes are supported: (1) ",(0,a.jsx)(r.code,{children:"direct"}),": individual marker file corresponding to each data file is directly created by the executor; (2) ",(0,a.jsx)(r.code,{children:"timeline_server_based"}),": marker operations are all handled at the timeline service which serves as a proxy.  New marker entries are batch processed and stored in a limited number of underlying files for efficiency."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"hoodie.markers.timeline_server_based.batch.num_threads"})}),(0,a.jsx)(r.td,{children:"20"}),(0,a.jsx)(r.td,{style:{textAlign:"center"},children:"Number of threads to use for batch processing marker creation requests at the timeline server."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"hoodie.markers.timeline_server_based.batch.interval_ms"})}),(0,a.jsx)(r.td,{children:"50"}),(0,a.jsx)(r.td,{style:{textAlign:"center"},children:"The batch interval in milliseconds for marker creation batch processing."})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},78660:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/batched-marker-creation-e8455c544f3b11ceed810b663df59f7f.png"},36995:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/direct-marker-file-mechanism-b97b82f80430598f1d6a9b96521bb1a0.png"},56542:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/timeline-server-based-marker-mechanism-11d616800a7a241382c8a4ed647515a6.png"},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>o});var i=t(96540);const a={},n=i.createContext(a);function s(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);