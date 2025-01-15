"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[14388],{51839:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var i=a(67834),s=a(74848),r=a(28453);const n={title:"Schema evolution with DeltaStreamer using KafkaSource",excerpt:"Evolve schema used in Kafkasource of DeltaStreamer to keep data up to date with business",author:"sbernauer",category:"blog",image:"/assets/images/blog/hudi_schemaevolution.png",tags:["design","deltastreamer","schema","apache hudi","apache kafka"]},o=void 0,c={authorsImageUrls:[void 0]},l=[{value:"What do we want to achieve?",id:"what-do-we-want-to-achieve",level:2},{value:"What is the problem?",id:"what-is-the-problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The schema used for data exchange between services can change rapidly with new business requirements.\nApache Hudi is often used in combination with kafka as a event stream where all events are transmitted according to a record schema.\nIn our case a Confluent schema registry is used to maintain the schema and as schema evolves, newer versions are updated in the schema registry."}),"\n",(0,s.jsx)(t.h2,{id:"what-do-we-want-to-achieve",children:"What do we want to achieve?"}),"\n",(0,s.jsxs)(t.p,{children:["We have multiple instances of DeltaStreamer running, consuming many topics with different schemas ingesting to multiple Hudi tables. Deltastreamer is a utility in Hudi to assist in ingesting data from multiple sources like DFS, kafka, etc into Hudi. If interested, you can read more about DeltaStreamer tool ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/docs/hoodie_streaming_ingestion#hudi-streamer",children:"here"}),"\nIdeally every topic should be able to evolve the schema to match new business requirements. Producers start producing data with a new schema version and the DeltaStreamer picks up the new schema and ingests the data with the new schema. For this to work, we run our DeltaStreamer instances with the latest schema version available from the Schema Registry to ensure that we always use the freshest schema with all attributes.\nA prerequisites is that all the mentioned Schema evolutions must be ",(0,s.jsx)(t.code,{children:"BACKWARD_TRANSITIVE"})," compatible (see ",(0,s.jsx)(t.a,{href:"https://docs.confluent.io/platform/current/schema-registry/avro.html",children:"Schema Evolution and Compatibility of Avro Schema changes"}),". This ensures that every record in the kafka topic can always be read using the latest schema."]}),"\n",(0,s.jsx)(t.h2,{id:"what-is-the-problem",children:"What is the problem?"}),"\n",(0,s.jsxs)(t.p,{children:["The normal operation looks like this. Multiple (or a single) producers write records to the kafka topic.\nIn regular flow of events, all records are in the same schema v1 and is in sync with schema registry.\n",(0,s.jsx)(t.img,{alt:"Normal operation",src:a(75077).A+"",width:"871",height:"141"}),(0,s.jsx)("br",{}),"\nThings get complicated when a producer switches to a new Writer-Schema v2 (in this case ",(0,s.jsx)(t.code,{children:"Producer A"}),"). ",(0,s.jsx)(t.code,{children:"Producer B"})," remains on Schema v1. E.g. an attribute ",(0,s.jsx)(t.code,{children:"myattribute"})," was added to the schema, resulting in schema version v2.\nDeltastreamer is capable of handling such schema evolution, if all incoming records were evolved and serialized with evolved schema. But the complication is that, some records are serialized with schema version v1 and some are serialized with schema version v2."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Schema evolution",src:a(10341).A+"",width:"871",height:"247"}),(0,s.jsx)("br",{}),"\nThe default deserializer used by Hudi ",(0,s.jsx)(t.code,{children:"io.confluent.kafka.serializers.KafkaAvroDeserializer"})," uses the schema that the record was serialized with for deserialization. This causes Hudi to get records with multiple different schema from the kafka client. E.g. Event #13 has the new attribute ",(0,s.jsx)(t.code,{children:"myattribute"}),", Event #14 does not have the new attribute ",(0,s.jsx)(t.code,{children:"myattribute"}),". This makes things complicated and error-prone for Hudi."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Confluent Deserializer",src:a(19990).A+"",width:"702",height:"181"}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(t.p,{children:["Hudi added a new custom Deserializer ",(0,s.jsx)(t.code,{children:"KafkaAvroSchemaDeserializer"})," to solve this problem of different producers producing records in different schema versions, but to use the latest schema from schema registry to deserialize all the records.",(0,s.jsx)("br",{}),"\nAs first step the Deserializer gets the latest schema from the Hudi SchemaProvider. The SchemaProvider can get the schema for example from a Confluent Schema-Registry or a file.\nThe Deserializer then reads the records from the topic using the schema the record was written with. As next step it will convert all the records to the latest schema from the SchemaProvider, in our case the latest schema. As a result, the kafka client will return all records with a unified schema i.e. the latest schema as per schema registry. Hudi does not need to handle different schemas inside a single batch."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"KafkaAvroSchemaDeserializer",src:a(14358).A+"",width:"702",height:"181"}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(t.h2,{id:"configurations",children:"Configurations"}),"\n",(0,s.jsx)(t.p,{children:"As of upcoming release 0.9.0, normal Confluent Deserializer is used by default. One has to explicitly set KafkaAvroSchemaDeserializer as below,\nin order to ensure smooth schema evolution with different producers producing records in different versions."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"hoodie.deltastreamer.source.kafka.value.deserializer.class=org.apache.hudi.utilities.deser.KafkaAvroSchemaDeserializer"})}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(t.p,{children:["Hope this blog helps in ingesting data from kafka into Hudi using Deltastreamer tool catering to different schema evolution\nneeds. Hudi has a very active development community and we look forward for more contributions.\nPlease check out ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/contribute/get-involved",children:"this"})," link to start contributing."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},14358:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/KafkaAvroSchemaDeserializer-7077d39b24f01312dbefecdc9cfb937a.png"},19990:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/confluent_deserializer-acede4110283a5d72af7029f3c4a98a6.png"},75077:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/normal_operation-5bf358ee14c1ee57978939d66f0ccc3e.png"},10341:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/schema_evolution-b6cbf3c7c40814a0d8fcbd9f9176ea72.png"},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>o});var i=a(96540);const s={},r=i.createContext(s);function n(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(r.Provider,{value:t},e.children)}},67834:e=>{e.exports=JSON.parse('{"permalink":"/cn/blog/2021/08/16/kafka-custom-deserializer","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-16-kafka-custom-deserializer.md","source":"@site/blog/2021-08-16-kafka-custom-deserializer.md","title":"Schema evolution with DeltaStreamer using KafkaSource","description":"The schema used for data exchange between services can change rapidly with new business requirements.","date":"2021-08-16T00:00:00.000Z","tags":[{"inline":true,"label":"design","permalink":"/cn/blog/tags/design"},{"inline":true,"label":"deltastreamer","permalink":"/cn/blog/tags/deltastreamer"},{"inline":true,"label":"schema","permalink":"/cn/blog/tags/schema"},{"inline":true,"label":"apache hudi","permalink":"/cn/blog/tags/apache-hudi"},{"inline":true,"label":"apache kafka","permalink":"/cn/blog/tags/apache-kafka"}],"readingTime":3.155,"hasTruncateMarker":true,"authors":[{"name":"sbernauer","key":null,"page":null}],"frontMatter":{"title":"Schema evolution with DeltaStreamer using KafkaSource","excerpt":"Evolve schema used in Kafkasource of DeltaStreamer to keep data up to date with business","author":"sbernauer","category":"blog","image":"/assets/images/blog/hudi_schemaevolution.png","tags":["design","deltastreamer","schema","apache hudi","apache kafka"]},"unlisted":false,"prevItem":{"title":"Adding support for Virtual Keys in Hudi","permalink":"/cn/blog/2021/08/18/virtual-keys"},"nextItem":{"title":"Cost-Efficient Open Source Big Data Platform at Uber","permalink":"/cn/blog/2021/08/11/Cost-Efficient-Open-Source-Big-Data-Platform-at-Uber"}}')}}]);