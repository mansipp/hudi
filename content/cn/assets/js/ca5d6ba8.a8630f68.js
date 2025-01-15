"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[22595],{71526:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"faq_table_services","title":"Table Services","description":"What does the Hudi cleaner do?","source":"@site/versioned_docs/version-1.0.0/faq_table_services.md","sourceDirName":".","slug":"/faq_table_services","permalink":"/cn/docs/faq_table_services","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-1.0.0/faq_table_services.md","tags":[],"version":"1.0.0","frontMatter":{"title":"Table Services","keywords":["hudi","writing","reading"]},"sidebar":"docs","previous":{"title":"Reading Tables","permalink":"/cn/docs/faq_reading_tables"},"next":{"title":"Storage","permalink":"/cn/docs/faq_storage"}}');var t=n(74848),a=n(28453);const s={title:"Table Services",keywords:["hudi","writing","reading"]},r="Table Services FAQ",c={},l=[{value:"What does the Hudi cleaner do?",id:"what-does-the-hudi-cleaner-do",level:3},{value:"How do I run compaction for a MOR table?",id:"how-do-i-run-compaction-for-a-mor-table",level:3},{value:"What options do I have for asynchronous/offline compactions on MOR table?",id:"what-options-do-i-have-for-asynchronousoffline-compactions-on-mor-table",level:3},{value:"How to disable all table services in case of multiple writers?",id:"how-to-disable-all-table-services-in-case-of-multiple-writers",level:3},{value:"Why does Hudi retain at-least one previous commit even after setting hoodie.cleaner.commits.retained&#39;: 1 ?",id:"why-does-hudi-retain-at-least-one-previous-commit-even-after-setting-hoodiecleanercommitsretained-1-",level:3},{value:"Can I get notified when new commits happen in my Hudi table?",id:"can-i-get-notified-when-new-commits-happen-in-my-hudi-table",level:3}];function d(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"table-services-faq",children:"Table Services FAQ"})}),"\n",(0,t.jsx)(i.h3,{id:"what-does-the-hudi-cleaner-do",children:"What does the Hudi cleaner do?"}),"\n",(0,t.jsxs)(i.p,{children:["The Hudi cleaner process often runs right after a commit and deltacommit and goes about deleting old files that are no longer needed. If you are using the incremental pull feature, then ensure you configure the cleaner to ",(0,t.jsx)(i.a,{href:"/docs/configurations#hoodiecleanercommitsretained",children:"retain sufficient amount of last commits"})," to rewind. Another consideration is to provide sufficient time for your long running jobs to finish running. Otherwise, the cleaner could delete a file that is being or could be read by the job and will fail the job. Typically, the default configuration of 10 allows for an ingestion running every 30 mins to retain up-to 5 hours worth of data. If you run ingestion more frequently or if you want to give more running time for a query, consider increasing the value for the config : ",(0,t.jsx)(i.code,{children:"hoodie.cleaner.commits.retained"})]}),"\n",(0,t.jsx)(i.h3,{id:"how-do-i-run-compaction-for-a-mor-table",children:"How do I run compaction for a MOR table?"}),"\n",(0,t.jsxs)(i.p,{children:["Simplest way to run compaction on MOR table is to run the ",(0,t.jsx)(i.a,{href:"/docs/configurations#hoodiecompactinline",children:"compaction inline"}),", at the cost of spending more time ingesting; This could be particularly useful, in common cases where you have small amount of late arriving data trickling into older partitions. In such a scenario, you may want to just aggressively compact the last N partitions while waiting for enough logs to accumulate for older partitions. The net effect is that you have converted most of the recent data, that is more likely to be queried to optimized columnar format."]}),"\n",(0,t.jsxs)(i.p,{children:["That said, for obvious reasons of not blocking ingesting for compaction, you may want to run it asynchronously as well. This can be done either via a separate ",(0,t.jsx)(i.a,{href:"https://github.com/apache/hudi/blob/master/hudi-utilities/src/main/java/org/apache/hudi/utilities/HoodieCompactor.java",children:"compaction job"})," that is scheduled by your workflow scheduler/notebook independently. If you are using delta streamer, then you can run in ",(0,t.jsx)(i.a,{href:"https://github.com/apache/hudi/blob/d3edac4612bde2fa9deca9536801dbc48961fb95/hudi-utilities/src/main/java/org/apache/hudi/utilities/deltastreamer/HoodieDeltaStreamer.java#L241",children:"continuous mode"})," where the ingestion and compaction are both managed concurrently in a single spark run time."]}),"\n",(0,t.jsx)(i.h3,{id:"what-options-do-i-have-for-asynchronousoffline-compactions-on-mor-table",children:"What options do I have for asynchronous/offline compactions on MOR table?"}),"\n",(0,t.jsx)(i.p,{children:"There are a couple of options depending on how you write to Hudi. But first let us understand briefly what is involved. There are two parts to compaction"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Scheduling: In this step, Hudi scans the partitions and selects file slices to be compacted. A compaction plan is finally written to Hudi timeline. Scheduling needs tighter coordination with other writers (regular ingestion is considered one of the writers). If scheduling is done inline with the ingestion job, this coordination is automatically taken care of. Else when scheduling happens asynchronously a lock provider needs to be configured for this coordination among multiple writers."}),"\n",(0,t.jsx)(i.li,{children:"Execution: In this step the compaction plan is read and file slices are compacted. Execution doesnt need the same level of coordination with other writers as Scheduling step and can be decoupled from ingestion job easily."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Depending on how you write to Hudi these are the possible options currently."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"DeltaStreamer:"}),"\n",(0,t.jsx)(i.li,{children:"In Continuous mode, asynchronous compaction is achieved by default. Here scheduling is done by the ingestion job inline and compaction execution is achieved asynchronously by a separate parallel thread."}),"\n",(0,t.jsx)(i.li,{children:"In non continuous mode, only inline compaction is possible."}),"\n",(0,t.jsx)(i.li,{children:"Please note in either mode, by passing --disable-compaction compaction is completely disabled"}),"\n",(0,t.jsx)(i.li,{children:"Spark datasource:"}),"\n",(0,t.jsx)(i.li,{children:"Async scheduling and async execution can be achieved by periodically running an offline Hudi Compactor Utility or Hudi CLI. However this needs a lock provider to be configured."}),"\n",(0,t.jsxs)(i.li,{children:["Alternately, from 0.11.0, to avoid dependency on lock providers, scheduling alone can be done inline by regular writer using the config ",(0,t.jsx)(i.code,{children:"hoodie.compact.schedule.inline"})," . And compaction execution can be done offline by periodically triggering the Hudi Compactor Utility or Hudi CLI."]}),"\n",(0,t.jsx)(i.li,{children:"Spark structured streaming:"}),"\n",(0,t.jsx)(i.li,{children:"Compactions are scheduled and executed asynchronously inside the streaming job. Async Compactions are enabled by default for structured streaming jobs on Merge-On-Read table."}),"\n",(0,t.jsx)(i.li,{children:"Please note it is not possible to disable async compaction for MOR table with spark structured streaming."}),"\n",(0,t.jsx)(i.li,{children:"Flink:"}),"\n",(0,t.jsx)(i.li,{children:"Async compaction is enabled by default for Merge-On-Read table."}),"\n",(0,t.jsxs)(i.li,{children:["Offline compaction can be achieved by setting ",(0,t.jsx)(i.code,{children:"compaction.async.enabled"})," to ",(0,t.jsx)(i.code,{children:"false"})," and periodically running ",(0,t.jsx)(i.a,{href:"compaction/#flink-offline-compaction",children:"Flink offline Compactor"}),". When running the offline compactor, one needs to ensure there are no active writes to the table."]}),"\n",(0,t.jsxs)(i.li,{children:["Third option (highly recommended over the second one) is to schedule the compactions from the regular ingestion job and executing the compaction plans from an offline job. To achieve this set ",(0,t.jsx)(i.code,{children:"compaction.async.enabled"})," to ",(0,t.jsx)(i.code,{children:"false"}),", ",(0,t.jsx)(i.code,{children:"compaction.schedule.enabled"})," to ",(0,t.jsx)(i.code,{children:"true"})," and then run the ",(0,t.jsx)(i.a,{href:"compaction/#flink-offline-compaction",children:"Flink offline Compactor"})," periodically to execute the plans."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"how-to-disable-all-table-services-in-case-of-multiple-writers",children:"How to disable all table services in case of multiple writers?"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/docs/configurations#hoodietableservicesenabled",children:"hoodie.table.services.enabled"})," is an umbrella config that can be used to turn off all table services at once without having to individually disable them. This is handy in use cases where there are multiple writers doing ingestion. While one of the main pipelines can take care of the table services, other ingestion pipelines can disable them to avoid frequent trigger of cleaning/clustering etc. This does not apply to singe writer scenarios."]}),"\n",(0,t.jsx)(i.h3,{id:"why-does-hudi-retain-at-least-one-previous-commit-even-after-setting-hoodiecleanercommitsretained-1-",children:"Why does Hudi retain at-least one previous commit even after setting hoodie.cleaner.commits.retained': 1 ?"}),"\n",(0,t.jsx)(i.p,{children:"Hudi runs cleaner to remove old file versions as part of writing data either in inline or in asynchronous mode (0.6.0 onwards). Hudi Cleaner retains at-least one previous commit when cleaning old file versions. This is to prevent the case when concurrently running queries which are reading the latest file versions suddenly see those files getting deleted by cleaner because a new file version got added . In other words, retaining at-least one previous commit is needed for ensuring snapshot isolation for readers."}),"\n",(0,t.jsx)(i.h3,{id:"can-i-get-notified-when-new-commits-happen-in-my-hudi-table",children:"Can I get notified when new commits happen in my Hudi table?"}),"\n",(0,t.jsx)(i.p,{children:"Yes. Hudi provides the ability to post a callback notification about a write commit. You can use a http hook or choose to"}),"\n",(0,t.jsxs)(i.p,{children:["be notified via a Kafka/pulsar topic or plug in your own implementation to get notified. Please refer ",(0,t.jsx)(i.a,{href:"platform_services_post_commit_callback",children:"here"})]}),"\n",(0,t.jsx)(i.p,{children:"for details"})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>r});var o=n(96540);const t={},a=o.createContext(t);function s(e){const i=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:i},e.children)}}}]);