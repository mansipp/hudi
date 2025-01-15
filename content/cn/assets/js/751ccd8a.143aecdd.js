"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[16803],{11944:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"bos_hoodie","title":"BOS Filesystem","description":"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi\u4efb\u52a1\u4f7f\u7528Baidu BOS\u5b58\u50a8\u3002","source":"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.9.0/bos_hoodie.md","sourceDirName":".","slug":"/bos_hoodie","permalink":"/cn/docs/0.9.0/bos_hoodie","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.9.0/bos_hoodie.md","tags":[],"version":"0.9.0","frontMatter":{"title":"BOS Filesystem","keywords":["hudi","hive","baidu","bos","spark","presto"],"summary":"In this page, we go over how to configure Hudi with BOS filesystem.","last_modified_at":"2021-06-09T21:38:24.000Z","language":"cn"},"sidebar":"docs","previous":{"title":"IBM Cloud Object Storage Filesystem","permalink":"/cn/docs/0.9.0/ibm_cos_hoodie"},"next":{"title":"Docker Demo","permalink":"/cn/docs/0.9.0/docker_demo"}}');var i=n(74848),t=n(28453);const d={title:"BOS Filesystem",keywords:["hudi","hive","baidu","bos","spark","presto"],summary:"In this page, we go over how to configure Hudi with BOS filesystem.",last_modified_at:new Date("2021-06-09T21:38:24.000Z"),language:"cn"},a=void 0,r={},c=[{value:"Baidu BOS \u90e8\u7f72",id:"baidu-bos-\u90e8\u7f72",level:2},{value:"Baidu BOS \u76f8\u5173\u7684\u914d\u7f6e",id:"baidu-bos-\u76f8\u5173\u7684\u914d\u7f6e",level:3},{value:"Baidu BOS Libs",id:"baidu-bos-libs",level:3}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi\u4efb\u52a1\u4f7f\u7528Baidu BOS\u5b58\u50a8\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"baidu-bos-\u90e8\u7f72",children:"Baidu BOS \u90e8\u7f72"}),"\n",(0,i.jsx)(s.p,{children:"\u4e3a\u4e86\u8ba9Hudi\u4f7f\u7528BOS\uff0c\u9700\u8981\u589e\u52a0\u4e24\u90e8\u5206\u7684\u914d\u7f6e:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u4e3aHudi\u589e\u52a0Baidu BOS\u7684\u76f8\u5173\u914d\u7f6e"}),"\n",(0,i.jsx)(s.li,{children:"\u589e\u52a0Jar\u5305\u5230classpath"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"baidu-bos-\u76f8\u5173\u7684\u914d\u7f6e",children:"Baidu BOS \u76f8\u5173\u7684\u914d\u7f6e"}),"\n",(0,i.jsxs)(s.p,{children:["\u65b0\u589e\u4e0b\u9762\u7684\u914d\u7f6e\u5230\u4f60\u7684Hudi\u80fd\u8bbf\u95ee\u7684core-site.xml\u6587\u4ef6\u3002\u4f7f\u7528\u4f60\u7684BOS bucket name\u66ff\u6362\u6389",(0,i.jsx)(s.code,{children:"fs.defaultFS"}),"\uff0c\u4f7f\u7528BOS endpoint\u5730\u5740\u66ff\u6362",(0,i.jsx)(s.code,{children:"fs.bos.endpoint"}),"\uff0c\u4f7f\u7528BOS\u7684key\u548csecret\u5206\u522b\u66ff\u6362",(0,i.jsx)(s.code,{children:"fs.bos.access.key"}),"\u548c",(0,i.jsx)(s.code,{children:"fs.bos.secret.access.key"}),"\uff0c\u8fd9\u6837Hudi\u5c31\u80fd\u8bfb\u5199\u76f8\u5e94\u7684bucket\u3002"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-xml",children:"<property>\n    <name>fs.defaultFS</name>\n    <value>bos://bucketname/</value>\n</property>\n\n<property>\n    <name>fs.bos.endpoint</name>\n    <value>bos-endpoint-address</value>\n    <description>Baidu bos endpoint to connect to,for example : http://bj.bcebos.com</description>\n</property>\n\n<property>\n    <name>fs.bos.access.key</name>\n    <value>bos-key</value>\n    <description>Baidu access key</description>\n</property>\n\n<property>\n    <name>fs.bos.secret.access.key</name>\n    <value>bos-secret-key</value>\n    <description>Baidu secret key.</description>\n</property>\n\n<property>\n    <name>fs.bos.impl</name>\n    <value>org.apache.hadoop.fs.bos.BaiduBosFileSystem</value>\n</property>\n"})}),"\n",(0,i.jsx)(s.h3,{id:"baidu-bos-libs",children:"Baidu BOS Libs"}),"\n",(0,i.jsx)(s.p,{children:"\u65b0\u589eBaidu hadoop\u7684jar\u5305\u6dfb\u52a0\u5230classpath."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"com.baidubce:bce-java-sdk:0.10.165"}),"\n",(0,i.jsx)(s.li,{children:"bos-hdfs-sdk-1.0.2-community.jar"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["\u53ef\u4ee5\u4ece",(0,i.jsx)(s.a,{href:"https://sdk.bce.baidu.com/console-sdk/bos-hdfs-sdk-1.0.2-community.jar.zip",children:"\u8fd9\u91cc"})," \u4e0b\u8f7dbos-hdfs-sdk jar\u5305\uff0c\u7136\u540e\u89e3\u538b\u3002"]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>a});var o=n(96540);const i={},t=o.createContext(i);function d(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);