"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[14868],{67322:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"performance","title":"Performance","description":"Optimized DFS Access","source":"@site/versioned_docs/version-0.10.1/performance.md","sourceDirName":".","slug":"/performance","permalink":"/cn/docs/0.10.1/performance","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.1/performance.md","tags":[],"version":"0.10.1","frontMatter":{"title":"Performance","keywords":["hudi","index","storage","compaction","cleaning","implementation"],"toc":false,"last_modified_at":"2019-12-30T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Query Engine Setup","permalink":"/cn/docs/0.10.1/query_engine_setup"},"next":{"title":"Deployment","permalink":"/cn/docs/0.10.1/deployment"}}');var t=i(74848),r=i(28453);const a={title:"Performance",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},o=void 0,l={},c=[{value:"Optimized DFS Access",id:"optimized-dfs-access",level:2},{value:"Performance Gains",id:"performance-gains",level:2},{value:"Upserts",id:"upserts",level:3},{value:"Indexing",id:"indexing",level:3},{value:"Snapshot Queries",id:"snapshot-queries",level:3}];function d(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"optimized-dfs-access",children:"Optimized DFS Access"}),"\n",(0,t.jsx)(n.p,{children:"Hudi also performs several key storage management functions on the data stored in a Hudi table. A key aspect of storing data on DFS is managing file sizes and counts\nand reclaiming storage space. For e.g HDFS is infamous for its handling of small files, which exerts memory/RPC pressure on the Name Node and can potentially destabilize\nthe entire cluster. In general, query engines provide much better performance on adequately sized columnar files, since they can effectively amortize cost of obtaining\ncolumn statistics etc. Even on some cloud data stores, there is often cost to listing directories with large number of small files."}),"\n",(0,t.jsx)(n.p,{children:"Here are some ways to efficiently manage the storage of your Hudi tables."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/configurations#hoodieparquetsmallfilelimit",children:"small file handling feature"})," in Hudi, profiles incoming workload\nand distributes inserts to existing file groups instead of creating new file groups, which can lead to small files."]}),"\n",(0,t.jsxs)(n.li,{children:["Cleaner can be ",(0,t.jsx)(n.a,{href:"/docs/configurations#hoodiecleanercommitsretained",children:"configured"})," to clean up older file slices, more or less aggressively depending on maximum time for queries to run & lookback needed for incremental pull"]}),"\n",(0,t.jsxs)(n.li,{children:["User can also tune the size of the ",(0,t.jsx)(n.a,{href:"/docs/configurations#hoodieparquetmaxfilesize",children:"base/parquet file"}),", ",(0,t.jsx)(n.a,{href:"configurations/#hoodielogfilemaxsize",children:"log files"})," & expected ",(0,t.jsx)(n.a,{href:"/docs/configurations#parquetCompressionRatio",children:"compression ratio"}),",\nsuch that sufficient number of inserts are grouped into the same file group, resulting in well sized base files ultimately."]}),"\n",(0,t.jsxs)(n.li,{children:["Intelligently tuning the ",(0,t.jsx)(n.a,{href:"/docs/configurations#withBulkInsertParallelism",children:"bulk insert parallelism"}),", can again in nicely sized initial file groups. It is in fact critical to get this right, since the file groups\nonce created cannot be deleted, but simply expanded as explained before."]}),"\n",(0,t.jsxs)(n.li,{children:["For workloads with heavy updates, the ",(0,t.jsx)(n.a,{href:"/docs/concepts#merge-on-read-table",children:"merge-on-read table"})," provides a nice mechanism for ingesting quickly into smaller files and then later merging them into larger base files via compaction."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"performance-gains",children:"Performance Gains"}),"\n",(0,t.jsx)(n.p,{children:"In this section, we go over some real world performance numbers for Hudi upserts, incremental pull and compare them against\nthe conventional alternatives for achieving these tasks."}),"\n",(0,t.jsx)(n.h3,{id:"upserts",children:"Upserts"}),"\n",(0,t.jsx)(n.p,{children:"Following shows the speed up obtained for NoSQL database ingestion, from incrementally upserting on a Hudi table on the copy-on-write storage,\non 5 tables ranging from small to huge (as opposed to bulk loading the tables)"}),"\n",(0,t.jsx)("figure",{children:(0,t.jsx)("img",{className:"docimage",src:i(63490).A,alt:"hudi_upsert_perf1.png"})}),"\n",(0,t.jsx)(n.p,{children:"Given Hudi can build the table incrementally, it opens doors for also scheduling ingesting more frequently thus reducing latency, with\nsignificant savings on the overall compute cost."}),"\n",(0,t.jsx)("figure",{children:(0,t.jsx)("img",{className:"docimage",src:i(19577).A,alt:"hudi_upsert_perf2.png"})}),"\n",(0,t.jsxs)(n.p,{children:["Hudi upserts have been stress tested upto 4TB in a single commit across the t1 table.\nSee ",(0,t.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/Tuning+Guide",children:"here"})," for some tuning tips."]}),"\n",(0,t.jsx)(n.h3,{id:"indexing",children:"Indexing"}),"\n",(0,t.jsx)(n.p,{children:"In order to efficiently upsert data, Hudi needs to classify records in a write batch into inserts & updates (tagged with the file group\nit belongs to). In order to speed this operation, Hudi employs a pluggable index mechanism that stores a mapping between recordKey and\nthe file group id it belongs to. By default, Hudi uses a built in index that uses file ranges and bloom filters to accomplish this, with\nupto 10x speed up over a spark join to do the same."}),"\n",(0,t.jsxs)(n.p,{children:["Hudi provides best indexing performance when you model the recordKey to be monotonically increasing (e.g timestamp prefix), leading to range pruning filtering\nout a lot of files for comparison. Even for UUID based keys, there are ",(0,t.jsx)(n.a,{href:"https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/",children:"known techniques"})," to achieve this.\nFor e.g , with 100M timestamp prefixed keys (5% updates, 95% inserts) on a event table with 80B keys/3 partitions/11416 files/10TB data, Hudi index achieves a\n",(0,t.jsx)(n.strong,{children:"~7X (2880 secs vs 440 secs) speed up"})," over vanilla spark join. Even for a challenging workload like an '100% update' database ingestion workload spanning\n3.25B UUID keys/30 partitions/6180 files using 300 cores, Hudi indexing offers a ",(0,t.jsx)(n.strong,{children:"80-100% speedup"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"snapshot-queries",children:"Snapshot Queries"}),"\n",(0,t.jsx)(n.p,{children:"The major design goal for snapshot queries is to achieve the latency reduction & efficiency gains in previous section,\nwith no impact on queries. Following charts compare the Hudi vs non-Hudi tables across Hive/Presto/Spark queries and demonstrate this."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Hive"})}),"\n",(0,t.jsx)("figure",{children:(0,t.jsx)("img",{className:"docimage",src:i(55857).A,alt:"hudi_query_perf_hive.png"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Spark"})}),"\n",(0,t.jsx)("figure",{children:(0,t.jsx)("img",{className:"docimage",src:i(91052).A,alt:"hudi_query_perf_spark.png"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Presto"})}),"\n",(0,t.jsx)("figure",{children:(0,t.jsx)("img",{className:"docimage",src:i(69066).A,alt:"hudi_query_perf_presto.png"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},55857:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/hudi_query_perf_hive-f7884cd11e19b3885a6c92d699cde0ba.png"},69066:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/hudi_query_perf_presto-4aa54422d000ede251c11b93df259be7.png"},91052:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/hudi_query_perf_spark-e829c75ccd5285e157f24bf83e65ff9a.png"},63490:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/hudi_upsert_perf1-8f41921dacb5fb026f1e5457f8c47aa6.png"},19577:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/hudi_upsert_perf2-d4bfcab4e9e8d942a02b712797ee2755.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(96540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);