"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[24618],{88824:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"gcs_hoodie","title":"GCS \u6587\u4ef6\u7cfb\u7edf","description":"\u5bf9\u4e8e\u5b58\u50a8\u5728 GCS \u4e0a\u7684 Hudi \uff0c \u533a\u57df Bucket \u63d0\u4f9b\u4e86\u5e26\u6709\u5f3a\u4e00\u81f4\u6027\u7684 DFS API \u3002","source":"@site/i18n/cn/docusaurus-plugin-content-docs/current/gcs_hoodie.md","sourceDirName":".","slug":"/gcs_hoodie","permalink":"/cn/docs/next/gcs_hoodie","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/gcs_hoodie.md","tags":[],"version":"current","frontMatter":{"title":"GCS \u6587\u4ef6\u7cfb\u7edf","keywords":["hudi","hive","google cloud","storage","spark","presto","\u5b58\u50a8"],"summary":"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u63a2\u8ba8\u5982\u4f55\u5728 Google Cloud Storage \u4e2d\u914d\u7f6e Hudi\u3002","last_modified_at":"2019-12-30T19:59:57.000Z","language":"cn"},"sidebar":"docs","previous":{"title":"S3 \u6587\u4ef6\u7cfb\u7edf","permalink":"/cn/docs/next/s3_hoodie"},"next":{"title":"OSS Filesystem","permalink":"/cn/docs/next/oss_hoodie"}}');var s=o(74848),r=o(28453);const c={title:"GCS \u6587\u4ef6\u7cfb\u7edf",keywords:["hudi","hive","google cloud","storage","spark","presto","\u5b58\u50a8"],summary:"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u63a2\u8ba8\u5982\u4f55\u5728 Google Cloud Storage \u4e2d\u914d\u7f6e Hudi\u3002",last_modified_at:new Date("2019-12-30T19:59:57.000Z"),language:"cn"},i=void 0,l={},a=[{value:"GCS \u914d\u7f6e",id:"gcs-\u914d\u7f6e",level:2},{value:"GCS \u51ed\u8bc1",id:"gcs-\u51ed\u8bc1",level:3},{value:"GCS \u5e93",id:"gcs-\u5e93",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e\u5b58\u50a8\u5728 GCS \u4e0a\u7684 Hudi \uff0c ",(0,s.jsx)(n.strong,{children:"\u533a\u57df"})," Bucket \u63d0\u4f9b\u4e86\u5e26\u6709\u5f3a\u4e00\u81f4\u6027\u7684 DFS API \u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"gcs-\u914d\u7f6e",children:"GCS \u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"Hudi \u7684 GCS \u9002\u914d\u9700\u8981\u4e24\u9879\u914d\u7f6e\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e3a Hudi \u6dfb\u52a0 GCS \u51ed\u8bc1"}),"\n",(0,s.jsx)(n.li,{children:"\u5c06\u9700\u8981\u7684 jar \u5305\u6dfb\u52a0\u5230\u7c7b\u8def\u5f84"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"gcs-\u51ed\u8bc1",children:"GCS \u51ed\u8bc1"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4f60\u7684 core-site.xml \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5fc5\u8981\u7684\u914d\u7f6e\uff0cHudi \u5c06\u4ece\u90a3\u91cc\u83b7\u53d6\u8fd9\u4e9b\u914d\u7f6e\u3002 \u7528\u4f60\u7684 GCS \u5206\u533a\u540d\u79f0\u66ff\u6362\u6389 ",(0,s.jsx)(n.code,{children:"fs.defaultFS"})," \uff0c\u4ee5\u4fbf Hudi \u80fd\u591f\u5728 Bucket \u4e2d\u8bfb\u53d6/\u5199\u5165\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"  <property>\n    <name>fs.defaultFS</name>\n    <value>gs://hudi-bucket</value>\n  </property>\n\n  <property>\n    <name>fs.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem</value>\n    <description>The FileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.AbstractFileSystem.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS</value>\n    <description>The AbstractFileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.gs.project.id</name>\n    <value>GCS_PROJECT_ID</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.enable</name>\n    <value>true</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.email</name>\n    <value>GCS_SERVICE_ACCOUNT_EMAIL</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.keyfile</name>\n    <value>GCS_SERVICE_ACCOUNT_KEYFILE</value>\n  </property>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"gcs-\u5e93",children:"GCS \u5e93"}),"\n",(0,s.jsx)(n.p,{children:"\u5c06 GCS Hadoop \u5e93\u6dfb\u52a0\u5230\u6211\u4eec\u7684\u7c7b\u8def\u5f84"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"com.google.cloud.bigdataoss:gcs-connector:1.6.0-hadoop2"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>i});var t=o(96540);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);