"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[80677],{97274:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"file_layouts","title":"File Layouts","description":"The following describes the general file layout structure for Apache Hudi","source":"@site/versioned_docs/version-0.12.2/file_layouts.md","sourceDirName":".","slug":"/file_layouts","permalink":"/docs/0.12.2/file_layouts","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.2/file_layouts.md","tags":[],"version":"0.12.2","frontMatter":{"title":"File Layouts","toc":true},"sidebar":"docs","previous":{"title":"Indexing","permalink":"/docs/0.12.2/indexing"},"next":{"title":"Metadata Table","permalink":"/docs/0.12.2/metadata"}}');var s=i(74848),o=i(28453);const a={title:"File Layouts",toc:!0},r=void 0,l={},c=[];function d(e){const t={a:"a",em:"em",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The following describes the general file layout structure for Apache Hudi"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Hudi organizes data tables into a directory structure under a base path on a distributed file system"}),"\n",(0,s.jsx)(t.li,{children:"Tables are broken up into partitions"}),"\n",(0,s.jsx)(t.li,{children:"Within each partition, files are organized into file groups, uniquely identified by a file ID"}),"\n",(0,s.jsx)(t.li,{children:"Each file group contains several file slices"}),"\n",(0,s.jsxs)(t.li,{children:["Each slice contains a base file (",(0,s.jsx)(t.em,{children:".parquet) produced at a certain commit/compaction instant time, along with set of log files ("}),".log.*) that contain inserts/updates to the base file since the base file was produced."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Hudi adopts Multiversion Concurrency Control (MVCC), where ",(0,s.jsx)(t.a,{href:"/docs/compaction",children:"compaction"})," action merges logs and base files to produce new\nfile slices and ",(0,s.jsx)(t.a,{href:"hoodie_cleaner",children:"cleaning"})," action gets rid of unused/older file slices to reclaim space on the file system."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Partition On HDFS",src:i(99582).A+"",width:"1900",height:"920"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},99582:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/hudi_partitions_HDFS-5f9da4e0c57c9ee20b74b31c035ba0e6.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);