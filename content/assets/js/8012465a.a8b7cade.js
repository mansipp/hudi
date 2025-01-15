"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[46578],{36152:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"comparison","title":"Comparison","description":"Apache Hudi fills a big void for processing data on top of DFS, and thus mostly co-exists nicely with these technologies. However,","source":"@site/versioned_docs/version-0.6.0/comparison.md","sourceDirName":".","slug":"/comparison","permalink":"/docs/0.6.0/comparison","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.6.0/comparison.md","tags":[],"version":"0.6.0","frontMatter":{"version":"0.6.0","title":"Comparison","keywords":["apache","hudi","kafka","kudu","hive","hbase","stream processing"],"last_modified_at":"2019-12-30T19:59:57.000Z"}}');var a=t(74848),n=t(28453);const o={version:"0.6.0",title:"Comparison",keywords:["apache","hudi","kafka","kudu","hive","hbase","stream processing"],last_modified_at:new Date("2019-12-30T19:59:57.000Z")},r=void 0,d={},c=[{value:"Kudu",id:"kudu",level:2},{value:"Hive Transactions",id:"hive-transactions",level:2},{value:"HBase",id:"hbase",level:2},{value:"Stream Processing",id:"stream-processing",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Apache Hudi fills a big void for processing data on top of DFS, and thus mostly co-exists nicely with these technologies. However,\nit would be useful to understand how Hudi fits into the current big data ecosystem, contrasting it with a few related systems\nand bring out the different tradeoffs these systems have accepted in their design."}),"\n",(0,a.jsx)(s.h2,{id:"kudu",children:"Kudu"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://kudu.apache.org",children:"Apache Kudu"})," is a storage system that has similar goals as Hudi, which is to bring real-time analytics on petabytes of data via first\nclass support for ",(0,a.jsx)(s.code,{children:"upserts"}),". A key differentiator is that Kudu also attempts to serve as a datastore for OLTP workloads, something that Hudi does not aspire to be.\nConsequently, Kudu does not support incremental pulling (as of early 2017), something Hudi does to enable incremental processing use cases."]}),"\n",(0,a.jsxs)(s.p,{children:["Kudu diverges from a distributed file system abstraction and HDFS altogether, with its own set of storage servers talking to each  other via RAFT.\nHudi, on the other hand, is designed to work with an underlying Hadoop compatible filesystem (HDFS,S3 or Ceph) and does not have its own fleet of storage servers,\ninstead relying on Apache Spark to do the heavy-lifting. Thus, Hudi can be scaled easily, just like other Spark jobs, while Kudu would require hardware\n& operational support, typical to datastores like HBase or Vertica. We have not at this point, done any head to head benchmarks against Kudu (given RTTable is WIP).\nBut, if we were to go with results shared by ",(0,a.jsx)(s.a,{href:"https://db-blog.web.cern.ch/blog/zbigniew-baranowski/2017-01-performance-comparison-different-file-formats-and-storage-engines",children:"CERN"})," ,\nwe expect Hudi to positioned at something that ingests parquet with superior performance."]}),"\n",(0,a.jsx)(s.h2,{id:"hive-transactions",children:"Hive Transactions"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://cwiki.apache.org/confluence/display/Hive/Hive+Transactions",children:"Hive Transactions/ACID"})," is another similar effort, which tries to implement storage like\n",(0,a.jsx)(s.code,{children:"merge-on-read"}),", on top of ORC file format. Understandably, this feature is heavily tied to Hive and other efforts like ",(0,a.jsx)(s.a,{href:"https://cwiki.apache.org/confluence/display/Hive/LLAP",children:"LLAP"}),".\nHive transactions does not offer the read-optimized storage option or the incremental pulling, that Hudi does. In terms of implementation choices, Hudi leverages\nthe full power of a processing framework like Spark, while Hive transactions feature is implemented underneath by Hive tasks/queries kicked off by user or the Hive metastore.\nBased on our production experience, embedding Hudi as a library into existing Spark pipelines was much easier and less operationally heavy, compared with the other approach.\nHudi is also designed to work with non-hive engines like PrestoDB/Spark and will incorporate file formats other than parquet over time."]}),"\n",(0,a.jsx)(s.h2,{id:"hbase",children:"HBase"}),"\n",(0,a.jsxs)(s.p,{children:["Even though ",(0,a.jsx)(s.a,{href:"https://hbase.apache.org",children:"HBase"})," is ultimately a key-value store for OLTP workloads, users often tend to associate HBase with analytics given the proximity to Hadoop.\nGiven HBase is heavily write-optimized, it supports sub-second upserts out-of-box and Hive-on-HBase lets users query that data. However, in terms of actual performance for analytical workloads,\nhybrid columnar storage formats like Parquet/ORC handily beat HBase, since these workloads are predominantly read-heavy. Hudi bridges this gap between faster data and having\nanalytical storage formats. From an operational perspective, arming users with a library that provides faster data, is more scalable, than managing a big farm of HBase region servers,\njust for analytics. Finally, HBase does not support incremental processing primitives like ",(0,a.jsx)(s.code,{children:"commit times"}),", ",(0,a.jsx)(s.code,{children:"incremental pull"})," as first class citizens like Hudi."]}),"\n",(0,a.jsx)(s.h2,{id:"stream-processing",children:"Stream Processing"}),"\n",(0,a.jsxs)(s.p,{children:['A popular question, we get is : "How does Hudi relate to stream processing systems?", which we will try to answer here. Simply put, Hudi can integrate with\nbatch (',(0,a.jsx)(s.code,{children:"copy-on-write table"}),") and streaming (",(0,a.jsx)(s.code,{children:"merge-on-read table"}),") jobs of today, to store the computed results in Hadoop. For Spark apps, this can happen via direct\nintegration of Hudi library with Spark/Spark streaming DAGs. In case of Non-Spark processing systems (eg: Flink, Hive), the processing can be done in the respective systems\nand later sent into a Hudi table via a Kafka topic/DFS intermediate file. In more conceptual level, data processing\npipelines just consist of three components : ",(0,a.jsx)(s.code,{children:"source"}),", ",(0,a.jsx)(s.code,{children:"processing"}),", ",(0,a.jsx)(s.code,{children:"sink"}),", with users ultimately running queries against the sink to use the results of the pipeline.\nHudi can act as either a source or sink, that stores data on DFS. Applicability of Hudi to a given stream processing pipeline ultimately boils down to suitability\nof PrestoDB/SparkSQL/Hive for your queries."]}),"\n",(0,a.jsxs)(s.p,{children:["More advanced use cases revolve around the concepts of ",(0,a.jsx)(s.a,{href:"https://www.oreilly.com/ideas/ubers-case-for-incremental-processing-on-hadoop",children:"incremental processing"}),", which effectively\nuses Hudi even inside the ",(0,a.jsx)(s.code,{children:"processing"})," engine to speed up typical batch pipelines. For e.g: Hudi can be used as a state store inside a processing DAG (similar\nto how ",(0,a.jsx)(s.a,{href:"https://ci.apache.org/projects/flink/flink-docs-release-1.2/ops/state_backends#the-rocksdbstatebackend",children:"rocksDB"})," is used by Flink). This is an item on the roadmap\nand will eventually happen as a ",(0,a.jsx)(s.a,{href:"https://issues.apache.org/jira/browse/HUDI-60",children:"Beam Runner"})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>r});var i=t(96540);const a={},n=i.createContext(a);function o(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);