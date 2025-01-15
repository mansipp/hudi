"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[44143],{42072:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"release-0.13.1","title":"Release 0.13.1","description":"Release 0.13.1 (docs)","source":"@site/releases/release-0.13.1.md","sourceDirName":".","slug":"/release-0.13.1","permalink":"/cn/releases/release-0.13.1","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Release 0.13.1","sidebar_position":6,"layout":"releases","toc":true,"last_modified_at":"2023-05-25T21:00:00.000Z"},"sidebar":"releases","previous":{"title":"Release 0.14.0","permalink":"/cn/releases/release-0.14.0"},"next":{"title":"Release 0.12.3","permalink":"/cn/releases/release-0.12.3"}}');var a=t(74848),s=t(28453);t(65537),t(79329);const l={title:"Release 0.13.1",sidebar_position:6,layout:"releases",toc:!0,last_modified_at:new Date("2023-05-25T21:00:00.000Z")},i=void 0,o={},u=[{value:"Release 0.13.1 (docs)",id:"release-0131-docs",level:2},{value:"Migration Guide",id:"migration-guide",level:2},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Raw Release Notes",id:"raw-release-notes",level:2}];function c(e){const r={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.h2,{id:"release-0131-docs",children:[(0,a.jsx)(r.a,{href:"https://github.com/apache/hudi/releases/tag/release-0.13.1",children:"Release 0.13.1"})," (",(0,a.jsx)(r.a,{href:"/docs/quick-start-guide",children:"docs"}),")"]}),"\n",(0,a.jsx)(r.h2,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"This release (0.13.1) does not introduce any new table version, thus no migration is needed if you are on 0.13.0."}),"\n",(0,a.jsxs)(r.li,{children:["If migrating from an older release, please check the migration guide from the previous release notes, specifically\nthe upgrade instructions in ",(0,a.jsx)(r.a,{href:"/releases/release-0.6.0",children:"0.6.0"}),",\n",(0,a.jsx)(r.a,{href:"/releases/release-0.9.0",children:"0.9.0"}),", ",(0,a.jsx)(r.a,{href:"/releases/release-0.10.0",children:"0.10.0"}),",\n",(0,a.jsx)(r.a,{href:"/releases/release-0.11.0",children:"0.11.0"}),", and ",(0,a.jsx)(r.a,{href:"/releases/release-0.12.0",children:"0.12.0"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,a.jsx)(r.p,{children:"0.13.1 release is mainly intended for bug fixes and stability. The fixes span across many components, including"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"DeltaStreamer"}),"\n",(0,a.jsx)(r.li,{children:"Metadata table and timeline server out of sync issue"}),"\n",(0,a.jsx)(r.li,{children:"Table services"}),"\n",(0,a.jsx)(r.li,{children:"Spark SQL"}),"\n",(0,a.jsx)(r.li,{children:"Presto stability/pref fixes"}),"\n",(0,a.jsx)(r.li,{children:"Trino stability/perf fixes"}),"\n",(0,a.jsx)(r.li,{children:"Meta Syncs"}),"\n",(0,a.jsx)(r.li,{children:"Flink engine"}),"\n",(0,a.jsx)(r.li,{children:"Unit, functional, integration tests and CI"}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"raw-release-notes",children:"Raw Release Notes"}),"\n",(0,a.jsxs)(r.p,{children:["The raw release notes are available ",(0,a.jsx)(r.a,{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12352250",children:"here"})]}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["0.13.1 release also contains all the new features and bug fixes from 0.13.0, of which the release notes are ",(0,a.jsx)(r.a,{href:"/releases/release-0.13.0",children:"here"})]})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},79329:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:t,children:r})}},65537:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(96540),a=t(34164),s=t(65627),l=t(56347),i=t(50372),o=t(30604),u=t(11861),c=t(78749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function f(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[u,d]=p({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,c.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=u??m;return f({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const r=e.currentTarget,t=o.indexOf(r),a=i[t].value;a!==n&&(u(r),l(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...r,...e}),(0,x.jsx)(j,{...r,...e})]})}function w(e){const r=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>i});var n=t(96540);const a={},s=n.createContext(a);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);