"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[88696],{65979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"timeline","title":"Timeline","description":"Timeline","source":"@site/versioned_docs/version-0.10.1/timeline.md","sourceDirName":".","slug":"/timeline","permalink":"/docs/0.10.1/timeline","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.1/timeline.md","tags":[],"version":"0.10.1","frontMatter":{"title":"Timeline","toc":true},"sidebar":"docs","previous":{"title":"Docker Demo","permalink":"/docs/0.10.1/docker_demo"},"next":{"title":"Table & Query Types","permalink":"/docs/0.10.1/table_types"}}');var s=n(74848),o=n(28453);const a={title:"Timeline",toc:!0},r=void 0,l={},c=[{value:"Timeline",id:"timeline",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"timeline",children:"Timeline"}),"\n",(0,s.jsxs)(t.p,{children:["At its core, Hudi maintains a ",(0,s.jsx)(t.code,{children:"timeline"})," of all actions performed on the table at different ",(0,s.jsx)(t.code,{children:"instants"})," of time that helps provide instantaneous views of the table,\nwhile also efficiently supporting retrieval of data in the order of arrival. A Hudi instant consists of the following components"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Instant action"})," : Type of action performed on the table"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Instant time"})," : Instant time is typically a timestamp (e.g: 20190117010349), which monotonically increases in the order of action's begin time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"state"})," : current state of the instant"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Hudi guarantees that the actions performed on the timeline are atomic & timeline consistent based on the instant time."}),"\n",(0,s.jsx)(t.p,{children:"Key actions performed include"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"COMMITS"})," - A commit denotes an ",(0,s.jsx)(t.strong,{children:"atomic write"})," of a batch of records into a table."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"CLEANS"})," - Background activity that gets rid of older versions of files in the table, that are no longer needed."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"DELTA_COMMIT"})," - A delta commit refers to an ",(0,s.jsx)(t.strong,{children:"atomic write"})," of a batch of records into a  MergeOnRead type table, where some/all of the data could be just written to delta logs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"COMPACTION"})," - Background activity to reconcile differential data structures within Hudi e.g: moving updates from row based log files to columnar formats. Internally, compaction manifests as a special commit on the timeline"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ROLLBACK"})," - Indicates that a commit/delta commit was unsuccessful & rolled back, removing any partial files produced during such a write"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SAVEPOINT"}),' - Marks certain file groups as "saved", such that cleaner will not delete them. It helps restore the table to a point on the timeline, in case of disaster/data recovery scenarios.']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Any given instant can be\nin one of the following states"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"REQUESTED"})," - Denotes an action has been scheduled, but has not initiated"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"INFLIGHT"})," - Denotes that the action is currently being performed"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"COMPLETED"})," - Denotes completion of an action on the timeline"]}),"\n"]}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:n(20969).A,alt:"hudi_timeline.png"})}),"\n",(0,s.jsxs)(t.p,{children:["Example above shows upserts happenings between 10:00 and 10:20 on a Hudi table, roughly every 5 mins, leaving commit metadata on the Hudi timeline, along\nwith other background cleaning/compactions. One key observation to make is that the commit time indicates the ",(0,s.jsx)(t.code,{children:"arrival time"})," of the data (10:20AM), while the actual data\norganization reflects the actual time or ",(0,s.jsx)(t.code,{children:"event time"}),", the data was intended for (hourly buckets from 07:00). These are two key concepts when reasoning about tradeoffs between latency and completeness of data."]}),"\n",(0,s.jsx)(t.p,{children:"When there is late arriving data (data intended for 9:00 arriving >1 hr late at 10:20), we can see the upsert producing new data into even older time buckets/folders.\nWith the help of the timeline, an incremental query attempting to get all new data that was committed successfully since 10:00 hours, is able to very efficiently consume\nonly the changed files without say scanning all the time buckets > 07:00."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},20969:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/hudi_timeline-bf5d8c5e59180434796d82af2b783e6c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);