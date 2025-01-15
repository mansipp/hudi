"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[54399],{95863:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var t=i(21064),n=i(74848),s=i(28453);const o={title:"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go",excerpt:"How T3Go\u2019s high-performance data lake using Apache Hudi and Alluxio shortened the time for data ingestion into the lake by up to a factor of 2. Data analysts using Presto, Hudi, and Alluxio in conjunction to query data on the lake saw queries speed up by 10 times faster.",author:"t3go",category:"blog",image:"/assets/images/blog/2020-12-01-t3go-architecture.png",tags:["use-case","near real-time analytics","incremental processing","caching","apache hudi"]},r=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go",id:"building-high-performance-data-lake-using-apache-hudi-and-alluxio-at-t3go",level:2},{value:"I. T3Go data lake Overview",id:"i-t3go-data-lake-overview",level:2},{value:"II. Efficient Near Real-time Analytics Using Hudi",id:"ii-efficient-near-real-time-analytics-using-hudi",level:2},{value:"Enable Near real time data ingestion and analysis",id:"enable-near-real-time-data-ingestion-and-analysis",level:3},{value:"Enable Incremental processing pipeline",id:"enable-incremental-processing-pipeline",level:3},{value:"Accessing Data using Hudi as a unified format",id:"accessing-data-using-hudi-as-a-unified-format",level:3},{value:"III. Efficient Data Caching Using Alluxio",id:"iii-efficient-data-caching-using-alluxio",level:2},{value:"Data lake ingestion",id:"data-lake-ingestion",level:3},{value:"Data analysis on the lake",id:"data-analysis-on-the-lake",level:3},{value:"Concurrent accesses across multiple storage systems",id:"concurrent-accesses-across-multiple-storage-systems",level:3},{value:"Microbenchmark",id:"microbenchmark",level:3},{value:"IV. Next Step",id:"iv-next-step",level:2},{value:"V. Conclusion",id:"v-conclusion",level:2}];function c(e){const a={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"building-high-performance-data-lake-using-apache-hudi-and-alluxio-at-t3go",children:"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://www.t3go.cn/",children:"T3Go"}),"  is China\u2019s first platform for smart travel based on the Internet of Vehicles. In this article, Trevor Zhang and Vino Yang from T3Go describe the evolution of their data lake architecture, built on cloud-native or open-source technologies including Alibaba OSS, Apache Hudi, and Alluxio. Today, their data lake stores petabytes of data, supporting hundreds of pipelines and tens of thousands of tasks daily. It is essential for business units at T3Go including Data Warehouse, Internet of Vehicles, Order Dispatching, Machine Learning, and self-service query analysis."]}),"\n",(0,n.jsx)(a.p,{children:"In this blog, you will see how we slashed data ingestion time by half using Hudi and Alluxio. Furthermore, data analysts using Presto, Hudi, and Alluxio saw the queries speed up by 10 times. We built our data lake based on data orchestration for multiple stages of our data pipeline, including ingestion and analytics."}),"\n",(0,n.jsx)(a.h2,{id:"i-t3go-data-lake-overview",children:"I. T3Go data lake Overview"}),"\n",(0,n.jsx)(a.p,{children:"Prior to the data lake, different business units within T3Go managed their own data processing solutions, utilizing different storage systems, ETL tools, and data processing frameworks. Data for each became siloed from every other unit, significantly increasing cost and complexity. Due to the rapid business expansion of T3Go, this inefficiency became our engineering bottleneck."}),"\n",(0,n.jsxs)(a.p,{children:["We moved to a unified data lake solution based on Alibaba OSS, an object store similar to AWS S3, to provide a centralized location to store structured and unstructured data, following the design principles of  ",(0,n.jsx)(a.em,{children:"Multi-cluster Shared-data Architecture"}),"; all the applications access OSS storage as the source of truth, as opposed to different data silos. This architecture allows us to store the data as-is, without having to first structure the data, and run different types of analytics to guide better decisions, building dashboards and visualizations from big data processing, real-time analytics, and machine learning."]}),"\n",(0,n.jsx)(a.h2,{id:"ii-efficient-near-real-time-analytics-using-hudi",children:"II. Efficient Near Real-time Analytics Using Hudi"}),"\n",(0,n.jsx)(a.p,{children:"Our business in smart travel drives the need to process and analyze data in a near real-time manner. With a traditional data warehouse, we faced the following challenges:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"High overhead when updating due to long-tail latency"}),"\n",(0,n.jsx)(a.li,{children:"High cost of order analysis due to the long window of a business session"}),"\n",(0,n.jsx)(a.li,{children:"Reduced query accuracy due to late or ad-hoc updates"}),"\n",(0,n.jsx)(a.li,{children:"Unreliability in data ingestion pipeline"}),"\n",(0,n.jsx)(a.li,{children:"Data lost in the distributed data pipeline that cannot be reconciled"}),"\n",(0,n.jsx)(a.li,{children:"High latency to access data storage"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"As a result, we adopted Apache Hudi on top of OSS to address these issues. The following diagram outlines the architecture:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"architecture",src:i(75367).A+"",width:"1200",height:"600"})}),"\n",(0,n.jsx)(a.h3,{id:"enable-near-real-time-data-ingestion-and-analysis",children:"Enable Near real time data ingestion and analysis"}),"\n",(0,n.jsx)(a.p,{children:"With Hudi, our data lake supports multiple data sources including Kafka, MySQL binlog, GIS, and other business logs in near real time. As a result, more than 60% of the company\u2019s data is stored in the data lake and this proportion continues to increase."}),"\n",(0,n.jsx)(a.p,{children:"We are also able to speed up the data ingestion time down to a few minutes by introducing Apache Hudi into the data pipeline. Combined with big data interactive query and analysis framework such as Presto and SparkSQL, real-time data analysis and insights are achieved."}),"\n",(0,n.jsx)(a.h3,{id:"enable-incremental-processing-pipeline",children:"Enable Incremental processing pipeline"}),"\n",(0,n.jsx)(a.p,{children:"With the help of Hudi, it is possible to provide incremental changes to the downstream derived table when the upstream table updates frequently. Even with a large number of interdependent tables, we can quickly run partial data updates. This also effectively avoids updating the full partitions of cold tables in the traditional Hive data warehouse."}),"\n",(0,n.jsx)(a.h3,{id:"accessing-data-using-hudi-as-a-unified-format",children:"Accessing Data using Hudi as a unified format"}),"\n",(0,n.jsx)(a.p,{children:"Traditional data warehouses often deploy Hadoop to store data and provide batch analysis. Kafka is used separately to distribute Hadoop data to other data processing frameworks, resulting in duplicated data. Hudi helps effectively solve this problem; we always use Spark pipelines to insert new updates into the Hudi tables, then incrementally read the update of Hudi tables. In other words, Hudi tables are used as the unified storage format to access data."}),"\n",(0,n.jsx)(a.h2,{id:"iii-efficient-data-caching-using-alluxio",children:"III. Efficient Data Caching Using Alluxio"}),"\n",(0,n.jsx)(a.p,{children:"In the early version of our data lake without Alluxio, data received from Kafka in real time is processed by Spark and then written to OSS data lake using Hudi DeltaStreamer tasks. With this architecture, Spark often suffered high network latency when writing to OSS directly. Since all data is in OSS storage, OLAP queries on Hudi data may also be slow due to lack of data locality."}),"\n",(0,n.jsx)(a.p,{children:"To address the latency issue, we deployed Alluxio as a data orchestration layer, co-located with computing engines such as Spark and Presto, and used Alluxio to accelerate read and write on the data lake as shown in the following diagram:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"architecture-alluxio",src:i(40474).A+"",width:"1155",height:"612"})}),"\n",(0,n.jsx)(a.p,{children:"Data in formats such as Hudi, Parquet, ORC, and JSON are stored mostly on OSS, consisting of 95% of the data. Computing engines such as Flink, Spark, Kylin, and Presto are deployed in isolated clusters respectively. When each engine accesses OSS, Alluxio acts as a virtual distributed storage system to accelerate data, being co-located with each of the computing clusters."}),"\n",(0,n.jsx)(a.p,{children:"Specifically, here are a few applications leveraging Alluxio in the T3Go data lake."}),"\n",(0,n.jsx)(a.h3,{id:"data-lake-ingestion",children:"Data lake ingestion"}),"\n",(0,n.jsxs)(a.p,{children:["We mount the corresponding OSS path to the Alluxio file system and set Hudi\u2019s  ",(0,n.jsxs)(a.em,{children:["\u201c",(0,n.jsx)(a.strong,{children:"target-base-path"}),"\u201d"]}),"  parameter value to use the alluxio:// scheme in place of oss:// scheme. Spark pipelines with Hudi continuously ingest data to Alluxio. After data is written to Alluxio, it is asynchronously persisted from the Alluxio cache to the remote OSS every minute. These modifications allow Spark to write to a local Alluxio node instead of writing to remote OSS, significantly reducing the time for the data to be available in data lake after ingestion."]}),"\n",(0,n.jsx)(a.h3,{id:"data-analysis-on-the-lake",children:"Data analysis on the lake"}),"\n",(0,n.jsx)(a.p,{children:"We use Presto as an ad-hoc query engine to analyze the Hudi tables in the lake, co-locating Alluxio workers on each Presto worker node. When Presto and Alluxio services are co-located and running, Alluxio caches the input data locally in the Presto worker which greatly benefits Presto for subsequent retrievals. On a cache hit, Presto can read from the local Alluxio worker storage at memory speed without any additional data transfer over the network."}),"\n",(0,n.jsx)(a.h3,{id:"concurrent-accesses-across-multiple-storage-systems",children:"Concurrent accesses across multiple storage systems"}),"\n",(0,n.jsx)(a.p,{children:"In order to ensure the accuracy of training samples, our machine learning team often synchronizes desensitized data in production to an offline machine learning environment. During synchronization, the data flows across multiple file systems, from production OSS to an offline HDFS followed by another offline Machine Learning HDFS."}),"\n",(0,n.jsx)(a.p,{children:"This data migration process is not only inefficient but also error-prune for modelers because multiple different storages with varying configurations are involved. Alluxio helps in this specific scenario by mounting the destination storage systems under the same filesystem to be accessed by their corresponding logical paths in Alluxio namespace. By decoupling the physical storage, this allows applications with different APIs to access and transfer data seamlessly. This data access layout also improves performance."}),"\n",(0,n.jsx)(a.h3,{id:"microbenchmark",children:"Microbenchmark"}),"\n",(0,n.jsx)(a.p,{children:"Overall, we observed the following improvements with Alluxio:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"It supports a hierarchical and transparent caching mechanism"}),"\n",(0,n.jsx)(a.li,{children:"It supports cache promote omode mode when reading"}),"\n",(0,n.jsx)(a.li,{children:"It supports asynchronous writing mode"}),"\n",(0,n.jsx)(a.li,{children:"It supports LRU recycling strategy"}),"\n",(0,n.jsx)(a.li,{children:"It has pin and TTL features"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"After comparison and verification, we choose to use Spark SQL as the query engine. Our performance testing queries the Hudi table, comparing Alluxio + OSS together against OSS directly as well as HDFS."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"microbench",src:i(38655).A+"",width:"741",height:"508"})}),"\n",(0,n.jsx)(a.p,{children:"In the stress test shown above, after the data volume is greater than a certain magnitude (2400W), the query speed using Alluxio+OSS surpasses the HDFS query speed of the hybrid deployment. After the data volume is greater than 1E, the query speed starts to double. After reaching 6E data, it is up to 12 times higher than querying native OSS and 8 times higher than querying native HDFS. The improvement depends on the machine configuration."}),"\n",(0,n.jsx)(a.p,{children:"Based on our performance benchmarking, we found that the performance can be improved by over 10 times with the help of Alluxio. Furthermore, the larger the data scale, the more prominent the performance improvement."}),"\n",(0,n.jsx)(a.h2,{id:"iv-next-step",children:"IV. Next Step"}),"\n",(0,n.jsx)(a.p,{children:"As T3Go\u2019s data lake ecosystem expands, we will continue facing the critical scenario of compute and storage segregation. With T3Go\u2019s growing data processing needs, our team plans to deploy Alluxio on a larger scale to accelerate our data lake storage."}),"\n",(0,n.jsx)(a.p,{children:"In addition to the deployment of Alluxio on the data lake computing engine, which currently is mainly SparkSQL, we plan to add a layer of Alluxio to the OLAP cluster using Apache Kylin and an ad_hoc cluster using Presto. The goal is to have Alluxio cover all computing scenarios, with Alluxio interconnected between each scene to improve the read and write efficiency of the data lake and the surrounding lake ecology."}),"\n",(0,n.jsx)(a.h2,{id:"v-conclusion",children:"V. Conclusion"}),"\n",(0,n.jsxs)(a.p,{children:["As mentioned earlier, Hudi and Alluxio covers all scenarios of Hudi\u2019s near real-time ingestion, near real-time analysis, incremental processing, and data distribution on DFS, among many others, and plays the role of a powerful accelerator on data ingestion and data analysis on the lake. With Hudi and Alluxio together,  ",(0,n.jsx)(a.strong,{children:"our R&D engineers shortened the time for data ingestion into the lake by up to a factor of 2. Data analysts using Presto, Hudi, and Alluxio in conjunction to query data on the lake saw their queries speed up by 10 times faster."})," Furthermore, the larger the data scale, the more prominent the performance improvement. Alluxio is an important part of T3Go\u2019s plan to become a leading enterprise data lake in China. We look forward to seeing further integration with Alluxio in T3Go\u2019s data lake ecosystem."]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},40474:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/2020-12-01-t3go-architecture-alluxio-b29648cdbfd10db14fde73b66ec499a5.png"},75367:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/2020-12-01-t3go-architecture-93f0c75faf35e99a62d7ab952a12ff74.png"},38655:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/2020-12-01-t3go-microbenchmark-f8bb8b80b32eaedbcc990260459b319b.png"},28453:(e,a,i)=>{i.d(a,{R:()=>o,x:()=>r});var t=i(96540);const n={},s=t.createContext(n);function o(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:a},e.children)}},21064:e=>{e.exports=JSON.parse('{"permalink":"/cn/blog/2020/12/01/high-perf-data-lake-with-hudi-and-alluxio-t3go","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-12-01-high-perf-data-lake-with-hudi-and-alluxio-t3go.md","source":"@site/blog/2020-12-01-high-perf-data-lake-with-hudi-and-alluxio-t3go.md","title":"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go","description":"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go","date":"2020-12-01T00:00:00.000Z","tags":[{"inline":true,"label":"use-case","permalink":"/cn/blog/tags/use-case"},{"inline":true,"label":"near real-time analytics","permalink":"/cn/blog/tags/near-real-time-analytics"},{"inline":true,"label":"incremental processing","permalink":"/cn/blog/tags/incremental-processing"},{"inline":true,"label":"caching","permalink":"/cn/blog/tags/caching"},{"inline":true,"label":"apache hudi","permalink":"/cn/blog/tags/apache-hudi"}],"readingTime":7.975,"hasTruncateMarker":true,"authors":[{"name":"t3go","key":null,"page":null}],"frontMatter":{"title":"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go","excerpt":"How T3Go\u2019s high-performance data lake using Apache Hudi and Alluxio shortened the time for data ingestion into the lake by up to a factor of 2. Data analysts using Presto, Hudi, and Alluxio in conjunction to query data on the lake saw queries speed up by 10 times faster.","author":"t3go","category":"blog","image":"/assets/images/blog/2020-12-01-t3go-architecture.png","tags":["use-case","near real-time analytics","incremental processing","caching","apache hudi"]},"unlisted":false,"prevItem":{"title":"Optimize Data lake layout using Clustering in Apache Hudi","permalink":"/cn/blog/2021/01/27/hudi-clustering-intro"},"nextItem":{"title":"Can Big Data Solutions Be Affordable?","permalink":"/cn/blog/2020/11/29/Can-Big-Data-Solutions-Be-Affordable"}}')}}]);