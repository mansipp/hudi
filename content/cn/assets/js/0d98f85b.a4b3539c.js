"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[50747],{44542:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"platform_services_post_commit_callback","title":"Post-commit Callback","description":"Apache Hudi provides the ability to post a callback notification about a write commit. This may be valuable if you need","source":"@site/versioned_docs/version-0.15.0/platform_services_post_commit_callback.md","sourceDirName":".","slug":"/platform_services_post_commit_callback","permalink":"/cn/docs/0.15.0/platform_services_post_commit_callback","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/platform_services_post_commit_callback.md","tags":[],"version":"0.15.0","frontMatter":{"title":"Post-commit Callback","keywords":["hudi","platform","commit","callback"]},"sidebar":"docs","previous":{"title":"Data Quality","permalink":"/cn/docs/0.15.0/precommit_validator"},"next":{"title":"AWS Glue Data Catalog","permalink":"/cn/docs/0.15.0/syncing_aws_glue_data_catalog"}}');var n=i(74848),l=i(28453);const r={title:"Post-commit Callback",keywords:["hudi","platform","commit","callback"]},d=void 0,c={},o=[{value:"HTTP Endpoints",id:"http-endpoints",level:2},{value:"Kafka Endpoints",id:"kafka-endpoints",level:2},{value:"Pulsar Endpoints",id:"pulsar-endpoints",level:2},{value:"Bring your own implementation",id:"bring-your-own-implementation",level:2}];function a(e){const t={a:"a",em:"em",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Apache Hudi provides the ability to post a callback notification about a write commit. This may be valuable if you need\nan event notification stream to take actions with other services after a Hudi write commit.\nYou can push a write commit callback notification into HTTP endpoints or to a Kafka server."}),"\n",(0,n.jsx)(t.h2,{id:"http-endpoints",children:"HTTP Endpoints"}),"\n",(0,n.jsx)(t.p,{children:"You can push a commit notification to an HTTP URL and can specify custom values by extending a callback class defined below."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Config"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TURN_CALLBACK_ON"}),(0,n.jsx)(t.td,{children:"Turn commit callback on/off"}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsxs)(t.td,{children:["false (",(0,n.jsx)(t.em,{children:"callbacks off"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CALLBACK_HTTP_URL"}),(0,n.jsx)(t.td,{children:"Callback host to be sent along with callback messages"}),(0,n.jsx)(t.td,{children:"required"}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CALLBACK_HTTP_TIMEOUT_IN_SECONDS"}),(0,n.jsx)(t.td,{children:"Callback timeout in seconds"}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsx)(t.td,{children:"3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CALLBACK_CLASS_NAME"}),(0,n.jsx)(t.td,{children:"Full path of callback class and must be a subclass of HoodieWriteCommitCallback class, org.apache.hudi.callback.impl.HoodieWriteCommitHttpCallback by default"}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsx)(t.td,{children:"org.apache.hudi.callback.impl.HoodieWriteCommitHttpCallback"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CALLBACK_HTTP_API_KEY_VALUE"}),(0,n.jsx)(t.td,{children:"Http callback API key"}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsx)(t.td,{children:"hudi_write_commit_http_callback"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"kafka-endpoints",children:"Kafka Endpoints"}),"\n",(0,n.jsx)(t.p,{children:"You can push a commit notification to a Kafka topic so it can be used by other real time systems."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Config"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TOPIC"}),(0,n.jsx)(t.td,{children:"Kafka topic name to publish timeline activity into."}),(0,n.jsx)(t.td,{children:"required"}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PARTITION"}),(0,n.jsx)(t.td,{children:"It may be desirable to serialize all changes into a single Kafka partition for providing strict ordering. By default, Kafka messages are keyed by table name, which guarantees ordering at the table level, but not globally (or when new partitions are added)"}),(0,n.jsx)(t.td,{children:"required"}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RETRIES"}),(0,n.jsx)(t.td,{children:"Times to retry the produce"}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsx)(t.td,{children:"3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ACKS"}),(0,n.jsx)(t.td,{children:"kafka acks level, all by default to ensure strong durability"}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsx)(t.td,{children:"all"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"BOOTSTRAP_SERVERS"}),(0,n.jsx)(t.td,{children:"Bootstrap servers of kafka cluster, to be used for publishing commit metadata"}),(0,n.jsx)(t.td,{children:"required"}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"pulsar-endpoints",children:"Pulsar Endpoints"}),"\n",(0,n.jsx)(t.p,{children:"You can push a commit notification to a Pulsar topic so it can be used by other real time systems."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Config"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hoodie.write.commit.callback.pulsar.broker.service.url"}),(0,n.jsx)(t.td,{children:"Server's Url of pulsar cluster to use to publish commit metadata."}),(0,n.jsx)(t.td,{children:"required"}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hoodie.write.commit.callback.pulsar.topic"}),(0,n.jsx)(t.td,{children:"Pulsar topic name to publish timeline activity into"}),(0,n.jsx)(t.td,{children:"required"}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hoodie.write.commit.callback.pulsar.producer.route-mode"}),(0,n.jsx)(t.td,{children:"Message routing logic for producers on partitioned topics."}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsx)(t.td,{children:"RoundRobinPartition"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hoodie.write.commit.callback.pulsar.producer.pending-queue-size"}),(0,n.jsx)(t.td,{children:"The maximum size of a queue holding pending messages."}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsx)(t.td,{children:"1000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hoodie.write.commit.callback.pulsar.producer.pending-total-size"}),(0,n.jsx)(t.td,{children:"The maximum number of pending messages across partitions."}),(0,n.jsx)(t.td,{children:"required"}),(0,n.jsx)(t.td,{children:"50000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hoodie.write.commit.callback.pulsar.producer.block-if-queue-full"}),(0,n.jsx)(t.td,{children:"When the queue is full, the method is blocked instead of an exception is thrown."}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hoodie.write.commit.callback.pulsar.producer.send-timeout"}),(0,n.jsx)(t.td,{children:"The timeout in each sending to pulsar."}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsx)(t.td,{children:"30s"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hoodie.write.commit.callback.pulsar.operation-timeout"}),(0,n.jsx)(t.td,{children:"Duration of waiting for completing an operation."}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsx)(t.td,{children:"30s"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hoodie.write.commit.callback.pulsar.connection-timeout"}),(0,n.jsx)(t.td,{children:"Duration of waiting for a connection to a broker to be established."}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsx)(t.td,{children:"10s"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hoodie.write.commit.callback.pulsar.request-timeout"}),(0,n.jsx)(t.td,{children:"Duration of waiting for completing a request."}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsx)(t.td,{children:"60s"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hoodie.write.commit.callback.pulsar.keepalive-interval"}),(0,n.jsx)(t.td,{children:"Duration of keeping alive interval for each client broker connection."}),(0,n.jsx)(t.td,{children:"optional"}),(0,n.jsx)(t.td,{children:"30s"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"bring-your-own-implementation",children:"Bring your own implementation"}),"\n",(0,n.jsx)(t.p,{children:"You can extend the HoodieWriteCommitCallback class to implement your own way to asynchronously handle the callback\nof a successful write. Use this public API:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/callback/HoodieWriteCommitCallback.java",children:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/callback/HoodieWriteCommitCallback.java"})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>d});var s=i(96540);const n={},l=s.createContext(n);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);