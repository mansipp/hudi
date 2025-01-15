"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[85442],{56804:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"release-0.12.1","title":"Release 0.12.1","description":"Release 0.12.1 (docs)","source":"@site/releases/release-0.12.1.md","sourceDirName":".","slug":"/release-0.12.1","permalink":"/releases/release-0.12.1","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Release 0.12.1","sidebar_position":10,"layout":"releases","toc":true},"sidebar":"releases","previous":{"title":"Release 0.12.2","permalink":"/releases/release-0.12.2"},"next":{"title":"Release 0.12.0","permalink":"/releases/release-0.12.0"}}');var a=r(74848),s=r(28453);r(65537),r(79329);const i={title:"Release 0.12.1",sidebar_position:10,layout:"releases",toc:!0},l=void 0,o={},c=[{value:"Release 0.12.1 (docs)",id:"release-0121-docs",level:2},{value:"Long Term Support",id:"long-term-support",level:2},{value:"Migration Guide",id:"migration-guide",level:2},{value:"Release Highlights",id:"release-highlights",level:2},{value:"Improve Hudi Cli",id:"improve-hudi-cli",level:3},{value:"Fix invalid record key stats in Parquet metadata",id:"fix-invalid-record-key-stats-in-parquet-metadata",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Known Regressions",id:"known-regressions",level:2},{value:"Raw Release Notes",id:"raw-release-notes",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h2,{id:"release-0121-docs",children:[(0,a.jsx)(n.a,{href:"https://github.com/apache/hudi/releases/tag/release-0.12.1",children:"Release 0.12.1"})," (",(0,a.jsx)(n.a,{href:"/docs/0.12.1/quick-start-guide",children:"docs"}),")"]}),"\n",(0,a.jsx)(n.h2,{id:"long-term-support",children:"Long Term Support"}),"\n",(0,a.jsxs)(n.p,{children:["We aim to maintain 0.12 for a longer period of time and provide a stable release through the latest 0.12.x release for\nusers to migrate to.  The latest 0.12 release is ",(0,a.jsx)(n.a,{href:"/releases/release-0.12.3",children:"0.12.3"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This release (0.12.1) does not introduce any new table version, thus no migration is needed if you are on 0.12.0."}),"\n",(0,a.jsxs)(n.li,{children:["If migrating from an older release, please check the migration guide from the previous release notes, specifically\nthe upgrade instructions in ",(0,a.jsx)(n.a,{href:"/releases/release-0.6.0",children:"0.6.0"}),",\n",(0,a.jsx)(n.a,{href:"/releases/release-0.9.0",children:"0.9.0"}),", ",(0,a.jsx)(n.a,{href:"/releases/release-0.10.0",children:"0.10.0"}),",\n",(0,a.jsx)(n.a,{href:"/releases/release-0.11.0",children:"0.11.0"}),", and ",(0,a.jsx)(n.a,{href:"/releases/release-0.12.0",children:"0.12.0"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"release-highlights",children:"Release Highlights"}),"\n",(0,a.jsx)(n.h3,{id:"improve-hudi-cli",children:"Improve Hudi Cli"}),"\n",(0,a.jsx)(n.p,{children:"Add command to repair deprecated partition, rename partition and trace file group through a range of commits."}),"\n",(0,a.jsx)(n.h3,{id:"fix-invalid-record-key-stats-in-parquet-metadata",children:"Fix invalid record key stats in Parquet metadata"}),"\n",(0,a.jsx)(n.p,{children:'Crux of the problem was that min/max statistics for the record keys were computed incorrectly during (Spark-specific) row-writing\nBulk Insert operation affecting Key Range Pruning flow w/in Hoodie Bloom Index tagging sequence, resulting into updated records being incorrectly tagged\nas "inserts" and not as "updates", leading to duplicated records in the table.'}),"\n",(0,a.jsx)(n.p,{children:"If all of the following is applicable to you:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Using Spark as an execution engine"}),"\n",(0,a.jsxs)(n.li,{children:["Using Bulk Insert (using row-writing\n",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/next/configurations#hoodiedatasourcewriterowwriterenable",children:"https://hudi.apache.org/docs/next/configurations#hoodiedatasourcewriterowwriterenable"}),",\nenabled ",(0,a.jsx)(n.em,{children:"by default"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["Using Bloom Index (with range-pruning\n",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/next/basic_configurations/#hoodiebloomindexprunebyranges",children:"https://hudi.apache.org/docs/next/basic_configurations/#hoodiebloomindexprunebyranges"}),"\nenabled, enabled ",(0,a.jsx)(n.em,{children:"by default"}),') for "UPSERT" operations']}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Recommended to upgrading to 0.12.1 to avoid getting duplicate records in your pipeline."}),"\n",(0,a.jsx)(n.h3,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,a.jsx)(n.p,{children:"0.12.1 release is mainly intended for bug fixes and stability. The fixes span across many components, including"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"DeltaStreamer"}),"\n",(0,a.jsx)(n.li,{children:"Table config"}),"\n",(0,a.jsx)(n.li,{children:"Table services"}),"\n",(0,a.jsx)(n.li,{children:"Metadata table"}),"\n",(0,a.jsx)(n.li,{children:"Spark SQL support"}),"\n",(0,a.jsx)(n.li,{children:"Presto support"}),"\n",(0,a.jsx)(n.li,{children:"Hive Sync"}),"\n",(0,a.jsx)(n.li,{children:"Flink engine"}),"\n",(0,a.jsx)(n.li,{children:"Unit, functional, integration tests and CI"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"known-regressions",children:"Known Regressions"}),"\n",(0,a.jsx)(n.p,{children:"We discovered a regression in Hudi 0.12.1 release related to metadata table and timeline server interplay with streaming ingestion pipelines."}),"\n",(0,a.jsx)(n.p,{children:"The FileSystemView that Hudi maintains internally could go out of sync due to a occasional race conditions when table services are involved\n(compaction, clustering) and could result in updates and deletes routed to older file versions and hence resulting in missed updates and deletes."}),"\n",(0,a.jsx)(n.p,{children:"Here are the user-flows that could potentially be impacted with this."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["This impacts pipelines using Deltastreamer in ",(0,a.jsx)(n.strong,{children:"continuous mode"})," (sync once is not impacted), Spark streaming, or if you have been directly\nusing write client across batches/commits instead of the standard ways to write to Hudi. In other words, batch writes should not be impacted."]}),"\n",(0,a.jsxs)(n.li,{children:["Among these write models, this could have an impact only when table services are enabled.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"COW: clustering enabled (inline or async)"}),"\n",(0,a.jsx)(n.li,{children:"MOR: compaction enabled (by default, inline or async)"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Also, the impact is applicable only when metadata table is enabled, and timeline server is enabled (which are defaults as of 0.12.1)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Based on some production data, we expect this issue might impact roughly < 1% of updates to be missed, since its a race condition\nand table services are generally scheduled once every N commits. The percentage of update misses could be even less if the\nfrequency of table services is less."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-5863",children:"Here"})," is the jira for the issue of interest and the fix has already been landed in master.\n0.12.3 should have the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/hudi/pull/8079",children:"fix"}),". Until we have a 0.12.3 release, we recommend you to disable metadata table\n(",(0,a.jsx)(n.code,{children:"hoodie.metadata.enable=false"}),") to mitigate the issue."]}),"\n",(0,a.jsxs)(n.p,{children:["We also discovered a regression for Flink streaming writer with the hive meta sync which is introduced by HUDI-3730, the refactoring to ",(0,a.jsx)(n.code,{children:"HiveSyncConfig"}),"\ncauses the Hive ",(0,a.jsx)(n.code,{children:"Resources"})," config objects leaking, which finally leads to an OOM exception for the JobManager if the streaming job runs continuously for weeks.\n0.12.3 should have the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/hudi/pull/8050",children:"fix"}),". Until we have a 0.12.3 release, we recommend you to cherry-pick the fix to local\nif hive meta sync is required."]}),"\n",(0,a.jsx)(n.p,{children:"Sorry about the inconvenience caused."}),"\n",(0,a.jsx)(n.h2,{id:"raw-release-notes",children:"Raw Release Notes"}),"\n",(0,a.jsxs)(n.p,{children:["The raw release notes are available ",(0,a.jsx)(n.a,{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12352182",children:"here"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},79329:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},65537:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),a=r(34164),s=r(65627),i=r(56347),l=r(50372),o=r(30604),c=r(11861),d=r(78749);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=f({queryString:r,groupId:a}),[m,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),b=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=r(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);