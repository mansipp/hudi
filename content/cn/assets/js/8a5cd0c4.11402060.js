"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[9891],{72418:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"tuning-guide","title":"Tuning Guide","description":"To get a better understanding of where your Hudi jobs is spending its time, use a tool like YourKit Java Profiler, to obtain heap dumps/flame graphs.","source":"@site/versioned_docs/version-0.13.1/tuning-guide.md","sourceDirName":".","slug":"/tuning-guide","permalink":"/cn/docs/0.13.1/tuning-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.1/tuning-guide.md","tags":[],"version":"0.13.1","frontMatter":{"title":"Tuning Guide","keywords":["hudi","tuning","performance"],"last_modified_at":"2021-09-29T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Troubleshooting","permalink":"/cn/docs/0.13.1/troubleshooting"},"next":{"title":"Cloud Storage","permalink":"/cn/docs/0.13.1/cloud"}}');var n=r(74848),o=r(28453);const a={title:"Tuning Guide",keywords:["hudi","tuning","performance"],last_modified_at:new Date("2021-09-29T19:59:57.000Z")},s="Tuning Guide",l={},d=[];function p(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"tuning-guide",children:"Tuning Guide"})}),"\n",(0,n.jsx)(i.admonition,{title:"Profiling Tip",type:"note",children:(0,n.jsxs)(i.p,{children:["To get a better understanding of where your Hudi jobs is spending its time, use a tool like ",(0,n.jsx)(i.a,{href:"https://www.yourkit.com/download/",children:"YourKit Java Profiler"}),", to obtain heap dumps/flame graphs."]})}),"\n",(0,n.jsx)(i.p,{children:"Writing data via Hudi happens as a Spark job and thus general rules of spark debugging applies here too. Below is a list of things to keep in mind, if you are looking to improving performance or reliability."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Input Parallelism"})," : By default, Hudi tends to over-partition input (i.e ",(0,n.jsx)(i.code,{children:"withParallelism(1500)"}),"), to ensure each Spark partition stays within the 2GB limit for inputs upto 500GB. Bump this up accordingly if you have larger inputs. We recommend having shuffle parallelism ",(0,n.jsx)(i.code,{children:"hoodie.[insert|upsert|bulkinsert].shuffle.parallelism"})," such that its atleast input_data_size/500MB"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Off-heap memory"})," : Hudi writes parquet files and that needs good amount of off-heap memory proportional to schema width. Consider setting something like ",(0,n.jsx)(i.code,{children:"spark.executor.memoryOverhead"})," or ",(0,n.jsx)(i.code,{children:"spark.driver.memoryOverhead"}),", if you are running into such failures."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Spark Memory"})," : Typically, hudi needs to be able to read a single file into memory to perform merges or compactions and thus the executor memory should be sufficient to accomodate this. In addition, Hoodie caches the input to be able to intelligently place data and thus leaving some ",(0,n.jsx)(i.code,{children:"spark.memory.storageFraction"})," will generally help boost performance."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Sizing files"}),": Set ",(0,n.jsx)(i.code,{children:"hoodie.parquet.small.file.limit"})," above judiciously, to balance ingest/write latency vs number of files & consequently metadata overhead associated with it."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Timeseries/Log data"})," : Default configs are tuned for database/nosql changelogs where individual record sizes are large. Another very popular class of data is timeseries/event/log data that tends to be more volumnious with lot more records per partition. In such cases consider tuning the bloom filter accuracy via ",(0,n.jsx)(i.code,{children:".bloomFilterFPP()/bloomFilterNumEntries()"})," to achieve your target index look up time. Also, consider making a key that is prefixed with time of the event, which will enable range pruning & significantly speeding up index lookup."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"GC Tuning"}),": Please be sure to follow garbage collection tuning tips from Spark tuning guide to avoid OutOfMemory errors. [Must] Use G1/CMS Collector. Sample CMS Flags to add to spark.executor.extraJavaOptions:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"-XX:NewSize=1g -XX:SurvivorRatio=2 -XX:+UseCompressedOops -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:CMSInitiatingOccupancyFraction=70 -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTime -XX:+PrintTenuringDistribution -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/hoodie-heapdump.hprof\n"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"OutOfMemory Errors"}),": If it keeps OOMing still, reduce spark memory conservatively: ",(0,n.jsx)(i.code,{children:"spark.memory.fraction=0.2, spark.memory.storageFraction=0.2"})," allowing it to spill rather than OOM. (reliably slow vs crashing intermittently)"]}),"\n",(0,n.jsx)(i.p,{children:"Below is a full working production config"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:"spark.driver.extraClassPath /etc/hive/conf\nspark.driver.extraJavaOptions -XX:+PrintTenuringDistribution -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTime -XX:+PrintGCTimeStamps -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/hoodie-heapdump.hprof\nspark.driver.maxResultSize 2g\nspark.driver.memory 4g\nspark.executor.cores 1\nspark.executor.extraJavaOptions -XX:+PrintFlagsFinal -XX:+PrintReferenceGC -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintAdaptiveSizePolicy -XX:+UnlockDiagnosticVMOptions -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/hoodie-heapdump.hprof\nspark.executor.id driver\nspark.executor.instances 300\nspark.executor.memory 6g\nspark.rdd.compress true\n \nspark.kryoserializer.buffer.max 512m\nspark.serializer org.apache.spark.serializer.KryoSerializer\nspark.shuffle.service.enabled true\nspark.sql.hive.convertMetastoreParquet false\nspark.submit.deployMode cluster\nspark.task.cpus 1\nspark.task.maxFailures 4\n \nspark.driver.memoryOverhead 1024\nspark.executor.memoryOverhead 3072\nspark.yarn.max.executor.failures 100\n"})})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>a,x:()=>s});var t=r(96540);const n={},o=t.createContext(n);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);