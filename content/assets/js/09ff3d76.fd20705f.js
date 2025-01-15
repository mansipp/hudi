"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[8348],{8607:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var o=s(69342),a=s(74848),i=s(28453);const n={title:"Reliable ingestion from AWS S3 using Hudi",excerpt:"From listing to log-based approach, a reliable way of ingesting data from AWS S3 into Hudi.",author:"codope",category:"blog",image:"/assets/images/blog/s3_events_source_design.png",tags:["design","deltastreamer","apache hudi"]},r=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Design",id:"design",level:2},{value:"Advantages",id:"advantages",level:2},{value:"Configuration and Setup",id:"configuration-and-setup",level:2},{value:"Conclusion and Future Work",id:"conclusion-and-future-work",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In this post we will talk about a new deltastreamer source which reliably and efficiently processes new data files as they arrive in AWS S3.\nAs of today, to ingest data from S3 into Hudi, users leverage DFS source whose ",(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/178767948e906f673d6d4a357c65c11bc574f619/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/helpers/DFSPathSelector.java",children:"path selector"})," would identify the source files modified since the last checkpoint based on max modification time.\nThe problem with this approach is that modification time precision is upto seconds in S3. It maybe possible that there were many files (beyond what the configurable source limit allows) modifed in that second and some files might be skipped.\nFor more details, please refer to ",(0,a.jsx)(t.a,{href:"https://issues.apache.org/jira/browse/HUDI-1723",children:"HUDI-1723"}),".\nWhile the workaround is to ignore the source limit and keep reading, the problem motivated us to redesign so that users can reliably ingest from S3."]}),"\n",(0,a.jsx)(t.h2,{id:"design",children:"Design"}),"\n",(0,a.jsxs)(t.p,{children:["For use-cases where seconds granularity does not suffice, we have a new source in deltastreamer using log-based approach.\nThe new ",(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/178767948e906f673d6d4a357c65c11bc574f619/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/S3EventsSource.java",children:"S3 events source"})," relies on change notification and incremental processing to ingest from S3.\nThe architecture is as shown in the figure below."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Different components in the design",src:s(13288).A+"",width:"1200",height:"600"})}),"\n",(0,a.jsxs)(t.p,{children:["In this approach, users need to ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html",children:"enable S3 event notifications"}),".\nThere will be two types of deltastreamers as detailed below."]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/178767948e906f673d6d4a357c65c11bc574f619/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/S3EventsSource.java",children:"S3EventsSource"}),": Create Hudi S3 metadata table.\nThis source leverages AWS ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/sns",children:"SNS"})," and ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/sqs/",children:"SQS"})," services that subscribe to file events from the source bucket.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Events from SQS will be written to this table, which serves as a changelog for the subsequent incremental puller."}),"\n",(0,a.jsx)(t.li,{children:"When the events are committed to the S3 metadata table they will be deleted from SQS."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/178767948e906f673d6d4a357c65c11bc574f619/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/S3EventsHoodieIncrSource.java",children:"S3EventsHoodieIncrSource"})," and uses the metadata table written by S3EventsSource.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Read the S3 metadata table and get the objects that were added or modified. These objects contain the S3 path for the source files that were added or modified."}),"\n",(0,a.jsx)(t.li,{children:"Write to Hudi table with source data corresponding to the source files in the S3 bucket."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"advantages",children:"Advantages"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Decoupling"}),": Every step in the pipeline is decoupled. The two sources can be started independent of each other. We imagine most users run a single deltastreamer to get all changes for a given bucket and can fan-out multiple tables off that."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Performance and Scale"}),": The previous approach used to list all files, sort by modification time and then filter based on checkpoint. While it did prune partition paths, the directory listing could still become a bottleneck. By relying on change notification and native cloud APIs, the new approach avoids directory listing and scales with the number of files being ingested."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Reliability"}),": Since there is no longer any dependency on the max modification time and the fact that S3 events are being recorded in the metadata table, users can rest assured that all the events will be processed eventually."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Fault Tolerance"}),": There are two levels of fault toerance in this design. Firstly, if some of the messages are not committed to the S3 metadata table, then those messages will remain in the queue so that they can be reprocessed in the next round. Secondly, if the incremental puller fails, then users can query the S3 metadata table for the last commit point and resume the incremental puller from that point onwards (kinda like how Kafka consumers can reset offset)."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Asynchronous backfills"}),': With the log-based approach, it becomes much easier to trigger backfills. See the "Conclusion and Future Work" section for more details.']}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"configuration-and-setup",children:"Configuration and Setup"}),"\n",(0,a.jsx)(t.p,{children:"Users only need to specify the SQS queue url and region name to start the S3EventsSource (metadata source)."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"hoodie.deltastreamer.s3.source.queue.url=https://sqs.us-west-2.amazonaws.com/queue/url\nhoodie.deltastreamer.s3.source.queue.region=us-west-2\n"})}),"\n",(0,a.jsx)(t.p,{children:"There are a few other configurations for the metadata source which can be tuned to suit specific requirements:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"hoodie.deltastreamer.s3.source.queue.long.poll.wait"})}),": Value can range in [0, 20] seconds. If set to 0 then metadata source will consume messages from SQS using short polling. It is recommended to use long polling because it will reduce false empty responses and reduce the cost of using SQS. By default, this value is set to 20 seconds."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"hoodie.deltastreamer.s3.source.queue.visibility.timeout"})}),": Value can range in [0, 43200] seconds (i.e. max 12 hours). SQS does not automatically delete the messages once consumed. It is the responsibility of metadata source to delete the message after committing. SQS will move the consumed message to in-flight state during which it becomes invisible for the configured timeout period. By default, this value is set to 30 seconds."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"hoodie.deltastreamer.s3.source.queue.max.messages.per.batch"})}),": Maximum number of messages in a batch of one round of metadata source run. By default, this value is set to 5."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["To setup the pipeline, first ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html",children:"enable S3 event notifications"}),".\nDownload the ",(0,a.jsx)(t.a,{href:"https://mvnrepository.com/artifact/com.amazonaws/aws-java-sdk-sqs",children:"aws-java-sdk-sqs"})," jar.\nThen start the S3EventsSource and  S3EventsHoodieIncrSource using the HoodieDeltaStreamer utility as shown in sample commands below."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'# To start S3EventsSource\nspark-submit \\\n--jars "/home/hadoop/hudi-utilities-bundle_2.11-0.9.0.jar,/usr/lib/spark/external/lib/spark-avro.jar,/home/hadoop/aws-java-sdk-sqs-1.12.22.jar" \\\n--master yarn --deploy-mode client \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer /home/hadoop/hudi-packages/hudi-utilities-bundle_2.11-0.9.0-SNAPSHOT.jar \\\n--table-type COPY_ON_WRITE --source-ordering-field eventTime \\\n--target-base-path s3://bucket_name/path/for/s3_meta_table \\\n--target-table s3_meta_table  --continuous \\\n--min-sync-interval-seconds 10 \\\n--hoodie-conf hoodie.datasource.write.recordkey.field="s3.object.key,eventName" \\\n--hoodie-conf hoodie.datasource.write.keygenerator.class=org.apache.hudi.keygen.ComplexKeyGenerator \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=s3.bucket.name --enable-hive-sync \\\n--hoodie-conf hoodie.datasource.hive_sync.partition_extractor_class=org.apache.hudi.hive.MultiPartKeysValueExtractor \\\n--hoodie-conf hoodie.datasource.write.hive_style_partitioning=true \\\n--hoodie-conf hoodie.datasource.hive_sync.database=default \\\n--hoodie-conf hoodie.datasource.hive_sync.table=s3_meta_table \\\n--hoodie-conf hoodie.datasource.hive_sync.partition_fields=bucket \\\n--source-class org.apache.hudi.utilities.sources.S3EventsSource \\\n--hoodie-conf hoodie.deltastreamer.s3.source.queue.url=https://sqs.us-west-2.amazonaws.com/queue/url\n--hoodie-conf hoodie.deltastreamer.s3.source.queue.region=us-west-2\n\n# To start S3EventsHoodieIncrSource use following command along with ordering field, record key(s) and \n# partition field(s) from the source s3 data.\nspark-submit \\\n--jars "/home/hadoop/hudi-utilities-bundle_2.11-0.9.0.jar,/usr/lib/spark/external/lib/spark-avro.jar,/home/hadoop/aws-java-sdk-sqs-1.12.22.jar" \\\n--master yarn --deploy-mode client \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer /home/hadoop/hudi-packages/hudi-utilities-bundle_2.11-0.9.0-SNAPSHOT.jar \\\n--table-type COPY_ON_WRITE \\\n--source-ordering-field <ordering key from source data> --target-base-path s3://bucket_name/path/for/s3_hudi_table \\\n--target-table s3_hudi_table  --continuous --min-sync-interval-seconds 10 \\\n--hoodie-conf hoodie.datasource.write.recordkey.field="<record key from source data>" \\\n--hoodie-conf hoodie.datasource.write.keygenerator.class=org.apache.hudi.keygen.SimpleKeyGenerator \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=<partition key from source data> --enable-hive-sync \\\n--hoodie-conf hoodie.datasource.hive_sync.partition_extractor_class=org.apache.hudi.hive.MultiPartKeysValueExtractor \\\n--hoodie-conf hoodie.datasource.write.hive_style_partitioning=true \\\n--hoodie-conf hoodie.datasource.hive_sync.database=default \\\n--hoodie-conf hoodie.datasource.hive_sync.table=s3_hudi_v6 \\\n--hoodie-conf hoodie.datasource.hive_sync.partition_fields=bucket \\\n--source-class org.apache.hudi.utilities.sources.S3EventsHoodieIncrSource \\\n--hoodie-conf hoodie.deltastreamer.source.hoodieincr.path=s3://bucket_name/path/for/s3_meta_table \\\n--hoodie-conf hoodie.deltastreamer.source.hoodieincr.read_latest_on_missing_ckpt=true\n'})}),"\n",(0,a.jsx)(t.h2,{id:"conclusion-and-future-work",children:"Conclusion and Future Work"}),"\n",(0,a.jsx)(t.p,{children:"This post introduced a log-based approach to ingest data from S3 into Hudi tables reliably and efficiently. We are actively improving this along the following directions."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"One stream of work is to add support for other cloud-based object storage like Google Cloud Storage, Azure Blob Storage, etc. with this revamped design."}),"\n",(0,a.jsx)(t.li,{children:"Another stream of work is to add resource manager that allows users to setup notifications and delete resources when no longer needed."}),"\n",(0,a.jsxs)(t.li,{children:["Another interesting piece of work is to support ",(0,a.jsx)(t.strong,{children:"asynchronous backfills"}),". Notification systems are evntually consistent and typically do not guarantee perfect delivery of all files right away. The log-based approach provides enough flexibility to trigger automatic backfills at a configurable interval e.g. once a day or once a week."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Please follow this ",(0,a.jsx)(t.a,{href:"https://issues.apache.org/jira/browse/HUDI-1896",children:"JIRA"})," to learn more about active development on this issue.\nWe look forward to contributions from the community. Hope you enjoyed this post."]}),"\n",(0,a.jsx)(t.p,{children:"Put your Hudi on and keep streaming!"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},13288:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/s3_events_source_design-897267ee0a269c5e796ebb92faa8c149.png"},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>r});var o=s(96540);const a={},i=o.createContext(a);function n(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),o.createElement(i.Provider,{value:t},e.children)}},69342:e=>{e.exports=JSON.parse('{"permalink":"/blog/2021/08/23/s3-events-source","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-23-s3-events-source.md","source":"@site/blog/2021-08-23-s3-events-source.md","title":"Reliable ingestion from AWS S3 using Hudi","description":"In this post we will talk about a new deltastreamer source which reliably and efficiently processes new data files as they arrive in AWS S3.","date":"2021-08-23T00:00:00.000Z","tags":[{"inline":true,"label":"design","permalink":"/blog/tags/design"},{"inline":true,"label":"deltastreamer","permalink":"/blog/tags/deltastreamer"},{"inline":true,"label":"apache hudi","permalink":"/blog/tags/apache-hudi"}],"readingTime":5.53,"hasTruncateMarker":true,"authors":[{"name":"codope","key":null,"page":null}],"frontMatter":{"title":"Reliable ingestion from AWS S3 using Hudi","excerpt":"From listing to log-based approach, a reliable way of ingesting data from AWS S3 into Hudi.","author":"codope","category":"blog","image":"/assets/images/blog/s3_events_source_design.png","tags":["design","deltastreamer","apache hudi"]},"unlisted":false,"prevItem":{"title":"Asynchronous Clustering using Hudi","permalink":"/blog/2021/08/23/async-clustering"},"nextItem":{"title":"Improving Marker Mechanism in Apache Hudi","permalink":"/blog/2021/08/18/improving-marker-mechanism"}}')}}]);