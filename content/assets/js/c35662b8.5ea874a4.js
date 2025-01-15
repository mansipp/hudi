"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[9722],{40595:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"clustering","title":"Clustering","description":"Background","source":"@site/versioned_docs/version-0.12.2/clustering.md","sourceDirName":".","slug":"/clustering","permalink":"/docs/0.12.2/clustering","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.2/clustering.md","tags":[],"version":"0.12.2","frontMatter":{"title":"Clustering","summary":"In this page, we describe async compaction in Hudi.","toc":true,"last_modified_at":null},"sidebar":"docs","previous":{"title":"Compaction","permalink":"/docs/0.12.2/compaction"},"next":{"title":"Metadata Indexing","permalink":"/docs/0.12.2/metadata_indexing"}}');var s=i(74848),r=i(28453);const a={title:"Clustering",summary:"In this page, we describe async compaction in Hudi.",toc:!0,last_modified_at:null},o=void 0,l={},c=[{value:"Background",id:"background",level:2},{value:"Clustering Architecture",id:"clustering-architecture",level:2},{value:"Overall, there are 2 parts to clustering",id:"overall-there-are-2-parts-to-clustering",level:3},{value:"Scheduling clustering",id:"scheduling-clustering",level:3},{value:"Running clustering",id:"running-clustering",level:3},{value:"Setting up clustering",id:"setting-up-clustering",level:3},{value:"Async Clustering - Strategies",id:"async-clustering---strategies",level:2},{value:"Plan Strategy",id:"plan-strategy",level:3},{value:"Execution Strategy",id:"execution-strategy",level:3},{value:"Update Strategy",id:"update-strategy",level:3},{value:"Asynchronous Clustering",id:"asynchronous-clustering",level:2},{value:"HoodieClusteringJob",id:"hoodieclusteringjob",level:3},{value:"HoodieDeltaStreamer",id:"hoodiedeltastreamer",level:3},{value:"Spark Structured Streaming",id:"spark-structured-streaming",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,s.jsxs)(t.p,{children:["Apache Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing. In a data lake/warehouse, one of the key trade-offs is between ingestion speed and query performance. Data ingestion typically prefers small files to improve parallelism and make data available to queries as soon as possible. However, query performance degrades poorly with a lot of small files. Also, during ingestion, data is typically co-located based on arrival time. However, the query engines perform better when the data frequently queried is co-located together. In most architectures each of these systems tend to add optimizations independently to improve performance which hits limitations due to un-optimized data layouts. This doc introduces a new kind of table service called clustering ",(0,s.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance",children:"[RFC-19]"})," to reorganize data for improved query performance without compromising on ingestion speed."]}),"\n",(0,s.jsx)(t.h2,{id:"clustering-architecture",children:"Clustering Architecture"}),"\n",(0,s.jsxs)(t.p,{children:["At a high level, Hudi provides different operations such as insert/upsert/bulk_insert through it\u2019s write client API to be able to write data to a Hudi table. To be able to choose a trade-off between file size and ingestion speed, Hudi provides a knob ",(0,s.jsx)(t.code,{children:"hoodie.parquet.small.file.limit"})," to be able to configure the smallest allowable file size. Users are able to configure the small file ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/docs/configurations/#hoodieparquetsmallfilelimit",children:"soft limit"})," to ",(0,s.jsx)(t.code,{children:"0"})," to force new data to go into a new set of filegroups or set it to a higher value to ensure new data gets \u201cpadded\u201d to existing files until it meets that limit that adds to ingestion latencies."]}),"\n",(0,s.jsx)(t.p,{children:"To be able to support an architecture that allows for fast ingestion without compromising query performance, we have introduced a \u2018clustering\u2019 service to rewrite the data to optimize Hudi data lake file layout."}),"\n",(0,s.jsx)(t.p,{children:"Clustering table service can run asynchronously or synchronously adding a new action type called \u201cREPLACE\u201d, that will mark the clustering action in the Hudi metadata timeline."}),"\n",(0,s.jsx)(t.h3,{id:"overall-there-are-2-parts-to-clustering",children:"Overall, there are 2 parts to clustering"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Scheduling clustering: Create a clustering plan using a pluggable clustering strategy."}),"\n",(0,s.jsx)(t.li,{children:"Execute clustering: Process the plan using an execution strategy to create new files and replace old files."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"scheduling-clustering",children:"Scheduling clustering"}),"\n",(0,s.jsx)(t.p,{children:"Following steps are followed to schedule clustering."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Identify files that are eligible for clustering: Depending on the clustering strategy chosen, the scheduling logic will identify the files eligible for clustering."}),"\n",(0,s.jsx)(t.li,{children:"Group files that are eligible for clustering based on specific criteria. Each group is expected to have data size in multiples of \u2018targetFileSize\u2019. Grouping is done as part of \u2018strategy\u2019 defined in the plan. Additionally, there is an option to put a cap on group size to improve parallelism and avoid shuffling large amounts of data."}),"\n",(0,s.jsxs)(t.li,{children:["Finally, the clustering plan is saved to the timeline in an avro ",(0,s.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/avro/HoodieClusteringPlan.avsc",children:"metadata format"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"running-clustering",children:"Running clustering"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Read the clustering plan and get the \u2018clusteringGroups\u2019 that mark the file groups that need to be clustered."}),"\n",(0,s.jsx)(t.li,{children:"For each group, we instantiate appropriate strategy class with strategyParams (example: sortColumns) and apply that strategy to rewrite the data."}),"\n",(0,s.jsxs)(t.li,{children:["Create a \u201cREPLACE\u201d commit and update the metadata in ",(0,s.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieReplaceCommitMetadata.java",children:"HoodieReplaceCommitMetadata"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Clustering Service builds on Hudi\u2019s MVCC based design to allow for writers to continue to insert new data while clustering action runs in the background to reformat data layout, ensuring snapshot isolation between concurrent readers and writers."}),"\n",(0,s.jsx)(t.p,{children:"NOTE: Clustering can only be scheduled for tables / partitions not receiving any concurrent updates. In the future, concurrent updates use-case will be supported as well."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Clustering example",src:i(94367).A+"",width:"1200",height:"600"}),"\n",(0,s.jsx)(t.em,{children:"Figure: Illustrating query performance improvements by clustering"})]}),"\n",(0,s.jsx)(t.h3,{id:"setting-up-clustering",children:"Setting up clustering"}),"\n",(0,s.jsx)(t.p,{children:"Inline clustering can be setup easily using spark dataframe options. See sample below"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scala",children:'import org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\n\nval df =  //generate data frame\ndf.write.format("org.apache.hudi").\n        options(getQuickstartWriteConfigs).\n        option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n        option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n        option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n        option(TABLE_NAME, "tableName").\n        option("hoodie.parquet.small.file.limit", "0").\n        option("hoodie.clustering.inline", "true").\n        option("hoodie.clustering.inline.max.commits", "4").\n        option("hoodie.clustering.plan.strategy.target.file.max.bytes", "1073741824").\n        option("hoodie.clustering.plan.strategy.small.file.limit", "629145600").\n        option("hoodie.clustering.plan.strategy.sort.columns", "column1,column2"). //optional, if sorting is needed as part of rewriting data\n        mode(Append).\n        save("dfs://location");\n'})}),"\n",(0,s.jsx)(t.h2,{id:"async-clustering---strategies",children:"Async Clustering - Strategies"}),"\n",(0,s.jsxs)(t.p,{children:["For more advanced usecases, async clustering pipeline can also be setup. See an example ",(0,s.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance#RFC19Clusteringdataforfreshnessandqueryperformance-SetupforAsyncclusteringJob",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["On a high level, clustering creates a plan based on a configurable strategy, groups eligible files based on specific\ncriteria and then executes the plan. Hudi supports ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/docs/concurrency_control#enabling-multi-writing",children:"multi-writers"})," which provides\nsnapshot isolation between multiple table services, thus allowing writers to continue with ingestion while clustering\nruns in the background."]}),"\n",(0,s.jsx)(t.p,{children:"As mentioned before, clustering plan as well as execution depends on configurable strategy. These strategies can be\nbroadly classified into three types: clustering plan strategy, execution strategy and update strategy."}),"\n",(0,s.jsx)(t.h3,{id:"plan-strategy",children:"Plan Strategy"}),"\n",(0,s.jsxs)(t.p,{children:["This strategy comes into play while creating clustering plan. It helps to decide what file groups should be clustered.\nLet's look at different plan strategies that are available with Hudi. Note that these strategies are easily pluggable\nusing this ",(0,s.jsx)(t.a,{href:"/docs/configurations#hoodieclusteringplanstrategyclass",children:"config"}),"."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SparkSizeBasedClusteringPlanStrategy"}),": It selects file slices based on\nthe ",(0,s.jsx)(t.a,{href:"/docs/configurations/#hoodieclusteringplanstrategysmallfilelimit",children:"small file limit"}),"\nof base files and creates clustering groups upto max file size allowed per group. The max size can be specified using\nthis ",(0,s.jsx)(t.a,{href:"/docs/configurations/#hoodieclusteringplanstrategymaxbytespergroup",children:"config"}),". This\nstrategy is useful for stitching together medium-sized files into larger ones to reduce lot of files spread across\ncold partitions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SparkRecentDaysClusteringPlanStrategy"}),": It looks back previous 'N' days partitions and creates a plan that will\ncluster the 'small' file slices within those partitions. This is the default strategy. It could be useful when the\nworkload is predictable and data is partitioned by time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SparkSelectedPartitionsClusteringPlanStrategy"}),": In case you want to cluster only specific partitions within a range,\nno matter how old or new are those partitions, then this strategy could be useful. To use this strategy, one needs\nto set below two configs additionally (both begin and end partitions are inclusive):"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"hoodie.clustering.plan.strategy.cluster.begin.partition\nhoodie.clustering.plan.strategy.cluster.end.partition\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"All the strategies are partition-aware and the latter two are still bound by the size limits of the first strategy."})}),"\n",(0,s.jsx)(t.h3,{id:"execution-strategy",children:"Execution Strategy"}),"\n",(0,s.jsxs)(t.p,{children:["After building the clustering groups in the planning phase, Hudi applies execution strategy, for each group, primarily\nbased on sort columns and size. The strategy can be specified using this ",(0,s.jsx)(t.a,{href:"/docs/configurations/#hoodieclusteringexecutionstrategyclass",children:"config"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"SparkSortAndSizeExecutionStrategy"})," is the default strategy. Users can specify the columns to sort the data by, when\nclustering using\nthis ",(0,s.jsx)(t.a,{href:"/docs/configurations/#hoodieclusteringplanstrategysortcolumns",children:"config"}),". Apart from\nthat, we can also set ",(0,s.jsx)(t.a,{href:"/docs/configurations/#hoodieparquetmaxfilesize",children:"max file size"}),"\nfor the parquet files produced due to clustering. The strategy uses bulk insert to write data into new files, in which\ncase, Hudi implicitly uses a partitioner that does sorting based on specified columns. In this way, the strategy changes\nthe data layout in a way that not only improves query performance but also balance rewrite overhead automatically."]}),"\n",(0,s.jsxs)(t.p,{children:["Now this strategy can be executed either as a single spark job or multiple jobs depending on number of clustering groups\ncreated in the planning phase. By default, Hudi will submit multiple spark jobs and union the results. In case you want\nto force Hudi to use single spark job, set the execution strategy\nclass ",(0,s.jsx)(t.a,{href:"/docs/configurations/#hoodieclusteringexecutionstrategyclass",children:"config"}),"\nto ",(0,s.jsx)(t.code,{children:"SingleSparkJobExecutionStrategy"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"update-strategy",children:"Update Strategy"}),"\n",(0,s.jsxs)(t.p,{children:["Currently, clustering can only be scheduled for tables/partitions not receiving any concurrent updates. By default,\nthe ",(0,s.jsx)(t.a,{href:"/docs/configurations/#hoodieclusteringupdatesstrategy",children:"config for update strategy"})," is\nset to ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"SparkRejectUpdateStrategy"})}),". If some file group has updates during clustering then it will reject updates and\nthrow an exception. However, in some use-cases updates are very sparse and do not touch most file groups. The default\nstrategy to simply reject updates does not seem fair. In such use-cases, users can set the config to ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"SparkAllowUpdateStrategy"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["We discussed the critical strategy configurations. All other configurations related to clustering are\nlisted ",(0,s.jsx)(t.a,{href:"/docs/configurations/#Clustering-Configs",children:"here"}),". Out of this list, a few\nconfigurations that will be very useful are:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config key"}),(0,s.jsx)(t.th,{children:"Remarks"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"hoodie.clustering.async.enabled"})}),(0,s.jsx)(t.td,{children:"Enable running of clustering service, asynchronously as writes happen on the table."}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"hoodie.clustering.async.max.commits"})}),(0,s.jsx)(t.td,{children:"Control frequency of async clustering by specifying after how many commits clustering should be triggered."}),(0,s.jsx)(t.td,{children:"4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"hoodie.clustering.preserve.commit.metadata"})}),(0,s.jsx)(t.td,{children:"When rewriting data, preserves existing _hoodie_commit_time. This means users can run incremental queries on clustered data without any side-effects."}),(0,s.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"asynchronous-clustering",children:"Asynchronous Clustering"}),"\n",(0,s.jsxs)(t.p,{children:["Users can leverage ",(0,s.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance#RFC19Clusteringdataforfreshnessandqueryperformance-SetupforAsyncclusteringJob",children:"HoodieClusteringJob"}),"\nto setup 2-step asynchronous clustering."]}),"\n",(0,s.jsx)(t.h3,{id:"hoodieclusteringjob",children:"HoodieClusteringJob"}),"\n",(0,s.jsxs)(t.p,{children:["By specifying the ",(0,s.jsx)(t.code,{children:"scheduleAndExecute"})," mode both schedule as well as clustering can be achieved in the same step.\nThe appropriate mode can be specified using ",(0,s.jsx)(t.code,{children:"-mode"})," or ",(0,s.jsx)(t.code,{children:"-m"})," option. There are three modes:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"schedule"}),": Make a clustering plan. This gives an instant which can be passed in execute mode."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"execute"}),": Execute a clustering plan at a particular instant. If no instant-time is specified, HoodieClusteringJob will execute for the earliest instant on the Hudi timeline."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"scheduleAndExecute"}),": Make a clustering plan first and execute that plan immediately."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Note that to run this job while the original writer is still running, please enable multi-writing:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\n"})}),"\n",(0,s.jsx)(t.p,{children:"A sample spark-submit command to setup HoodieClusteringJob is as below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"spark-submit \\\n--class org.apache.hudi.utilities.HoodieClusteringJob \\\n/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.9.0-SNAPSHOT.jar \\\n--props /path/to/config/clusteringjob.properties \\\n--mode scheduleAndExecute \\\n--base-path /path/to/hudi_table/basePath \\\n--table-name hudi_table_schedule_clustering \\\n--spark-memory 1g\n"})}),"\n",(0,s.jsxs)(t.p,{children:["A sample ",(0,s.jsx)(t.code,{children:"clusteringjob.properties"})," file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"hoodie.clustering.async.enabled=true\nhoodie.clustering.async.max.commits=4\nhoodie.clustering.plan.strategy.target.file.max.bytes=1073741824\nhoodie.clustering.plan.strategy.small.file.limit=629145600\nhoodie.clustering.execution.strategy.class=org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy\nhoodie.clustering.plan.strategy.sort.columns=column1,column2\n"})}),"\n",(0,s.jsx)(t.h3,{id:"hoodiedeltastreamer",children:"HoodieDeltaStreamer"}),"\n",(0,s.jsxs)(t.p,{children:["This brings us to our users' favorite utility in Hudi. Now, we can trigger asynchronous clustering with DeltaStreamer.\nJust set the ",(0,s.jsx)(t.code,{children:"hoodie.clustering.async.enabled"})," config to true and specify other clustering config in properties file\nwhose location can be pased as ",(0,s.jsx)(t.code,{children:"\u2014props"})," when starting the deltastreamer (just like in the case of HoodieClusteringJob)."]}),"\n",(0,s.jsx)(t.p,{children:"A sample spark-submit command to setup HoodieDeltaStreamer is as below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"spark-submit \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer \\\n/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.9.0-SNAPSHOT.jar \\\n--props /path/to/config/clustering_kafka.properties \\\n--schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n--source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n--source-ordering-field impresssiontime \\\n--table-type COPY_ON_WRITE \\\n--target-base-path /path/to/hudi_table/basePath \\\n--target-table impressions_cow_cluster \\\n--op INSERT \\\n--hoodie-conf hoodie.clustering.async.enabled=true \\\n--continuous\n"})}),"\n",(0,s.jsx)(t.h3,{id:"spark-structured-streaming",children:"Spark Structured Streaming"}),"\n",(0,s.jsx)(t.p,{children:"We can also enable asynchronous clustering with Spark structured streaming sink as shown below."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scala",children:'val commonOpts = Map(\n   "hoodie.insert.shuffle.parallelism" -> "4",\n   "hoodie.upsert.shuffle.parallelism" -> "4",\n   DataSourceWriteOptions.RECORDKEY_FIELD.key -> "_row_key",\n   DataSourceWriteOptions.PARTITIONPATH_FIELD.key -> "partition",\n   DataSourceWriteOptions.PRECOMBINE_FIELD.key -> "timestamp",\n   HoodieWriteConfig.TBL_NAME.key -> "hoodie_test"\n)\n\ndef getAsyncClusteringOpts(isAsyncClustering: String, \n                           clusteringNumCommit: String, \n                           executionStrategy: String):Map[String, String] = {\n   commonOpts + (DataSourceWriteOptions.ASYNC_CLUSTERING_ENABLE.key -> isAsyncClustering,\n           HoodieClusteringConfig.ASYNC_CLUSTERING_MAX_COMMITS.key -> clusteringNumCommit,\n           HoodieClusteringConfig.EXECUTION_STRATEGY_CLASS_NAME.key -> executionStrategy\n   )\n}\n\ndef initStreamingWriteFuture(hudiOptions: Map[String, String]): Future[Unit] = {\n   val streamingInput = // define the source of streaming\n   Future {\n      println("streaming starting")\n      streamingInput\n              .writeStream\n              .format("org.apache.hudi")\n              .options(hudiOptions)\n              .option("checkpointLocation", basePath + "/checkpoint")\n              .mode(Append)\n              .start()\n              .awaitTermination(10000)\n      println("streaming ends")\n   }\n}\n\ndef structuredStreamingWithClustering(): Unit = {\n   val df = //generate data frame\n   val hudiOptions = getClusteringOpts("true", "1", "org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy")\n   val f1 = initStreamingWriteFuture(hudiOptions)\n   Await.result(f1, Duration.Inf)\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},94367:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/example_perf_improvement-acd223093d7c84fb6f0a896dcb571737.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);