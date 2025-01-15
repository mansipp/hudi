"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[51589],{83825:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>l});var n=t(67834),s=t(74848),r=t(28453);const i={title:"Schema evolution with DeltaStreamer using KafkaSource",excerpt:"Evolve schema used in Kafkasource of DeltaStreamer to keep data up to date with business",author:"sbernauer",category:"blog",image:"/assets/images/blog/hudi_schemaevolution.png",tags:["design","deltastreamer","schema","apache hudi","apache kafka"]},o=void 0,c={authorsImageUrls:[void 0]},l=[];function u(e){const a={p:"p",...(0,r.R)(),...e.components};return(0,s.jsx)(a.p,{children:"The schema used for data exchange between services can change rapidly with new business requirements.\nApache Hudi is often used in combination with kafka as a event stream where all events are transmitted according to a record schema.\nIn our case a Confluent schema registry is used to maintain the schema and as schema evolves, newer versions are updated in the schema registry."})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>o});var n=t(96540);const s={},r=n.createContext(s);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:a},e.children)}},67834:e=>{e.exports=JSON.parse('{"permalink":"/cn/blog/2021/08/16/kafka-custom-deserializer","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-16-kafka-custom-deserializer.md","source":"@site/blog/2021-08-16-kafka-custom-deserializer.md","title":"Schema evolution with DeltaStreamer using KafkaSource","description":"The schema used for data exchange between services can change rapidly with new business requirements.","date":"2021-08-16T00:00:00.000Z","tags":[{"inline":true,"label":"design","permalink":"/cn/blog/tags/design"},{"inline":true,"label":"deltastreamer","permalink":"/cn/blog/tags/deltastreamer"},{"inline":true,"label":"schema","permalink":"/cn/blog/tags/schema"},{"inline":true,"label":"apache hudi","permalink":"/cn/blog/tags/apache-hudi"},{"inline":true,"label":"apache kafka","permalink":"/cn/blog/tags/apache-kafka"}],"readingTime":3.155,"hasTruncateMarker":true,"authors":[{"name":"sbernauer","key":null,"page":null}],"frontMatter":{"title":"Schema evolution with DeltaStreamer using KafkaSource","excerpt":"Evolve schema used in Kafkasource of DeltaStreamer to keep data up to date with business","author":"sbernauer","category":"blog","image":"/assets/images/blog/hudi_schemaevolution.png","tags":["design","deltastreamer","schema","apache hudi","apache kafka"]},"unlisted":false,"prevItem":{"title":"Adding support for Virtual Keys in Hudi","permalink":"/cn/blog/2021/08/18/virtual-keys"},"nextItem":{"title":"Cost-Efficient Open Source Big Data Platform at Uber","permalink":"/cn/blog/2021/08/11/Cost-Efficient-Open-Source-Big-Data-Platform-at-Uber"}}')}}]);