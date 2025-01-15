"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[52770],{88905:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"release-0.10.1","title":"Release 0.10.1","description":"Release 0.10.1 (docs)","source":"@site/releases/release-0.10.1.md","sourceDirName":".","slug":"/release-0.10.1","permalink":"/releases/release-0.10.1","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"Release 0.10.1","sidebar_position":14,"layout":"releases","toc":true},"sidebar":"releases","previous":{"title":"Release 0.11.0","permalink":"/releases/release-0.11.0"},"next":{"title":"Release 0.10.0","permalink":"/releases/release-0.10.0"}}');var t=r(74848),s=r(28453);r(65537),r(79329);const i={title:"Release 0.10.1",sidebar_position:14,layout:"releases",toc:!0},l=void 0,o={},u=[{value:"Release 0.10.1 (docs)",id:"release-0101-docs",level:2},{value:"Migration Guide",id:"migration-guide",level:2},{value:"Release Highlights",id:"release-highlights",level:2},{value:"Explicit Spark 3 bundle names",id:"explicit-spark-3-bundle-names",level:3},{value:"Repair Utility",id:"repair-utility",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Raw Release Notes",id:"raw-release-notes",level:2}];function c(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.h2,{id:"release-0101-docs",children:[(0,t.jsx)(a.a,{href:"https://github.com/apache/hudi/releases/tag/release-0.10.1",children:"Release 0.10.1"})," (",(0,t.jsx)(a.a,{href:"/docs/quick-start-guide",children:"docs"}),")"]}),"\n",(0,t.jsx)(a.h2,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"This release (0.10.1) does not introduce any new table version, hence no migration needed if you are on 0.10.0."}),"\n",(0,t.jsx)(a.li,{children:"If migrating from an older release, please check the migration guide from the previous release notes, specifically the upgrade instructions in 0.6.0, 0.9.0 and 0.10.0."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"release-highlights",children:"Release Highlights"}),"\n",(0,t.jsx)(a.h3,{id:"explicit-spark-3-bundle-names",children:"Explicit Spark 3 bundle names"}),"\n",(0,t.jsx)(a.p,{children:"In the previous release (0.10.0), we added Spark 3.1.x support and made it the default Spark 3 version to build with. In 0.10.1,\nwe made the Spark 3 version explicit in the bundle name and published a new bundle for Spark 3.0.x. Specifically, these 2 bundles\nare available in the public maven repository."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"hudi-spark3.1.2-bundle_2.12-0.10.1.jar"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"hudi-spark3.0.3-bundle_2.12-0.10.1.jar"})}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"repair-utility",children:"Repair Utility"}),"\n",(0,t.jsxs)(a.p,{children:["We added a new repair utility ",(0,t.jsx)(a.code,{children:"org.apache.hudi.utilities.HoodieRepairTool"})," to clean up dangling base and log files. The utility\ncan be run as a separate Spark job as below."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"spark-submit \\\n--class org.apache.hudi.utilities.HoodieRepairTool \\\n--driver-memory 4g \\\n--executor-memory 1g \\\n--conf spark.serializer=org.apache.spark.serializer.KryoSerializer \\\n--conf spark.sql.catalogImplementation=hive \\\n--conf spark.sql.extensions=org.apache.spark.sql.hudi.HoodieSparkSessionExtension \\\n--packages org.apache.spark:spark-avro_2.12:3.1.2 \\\n$HUDI_DIR/packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.11.0-SNAPSHOT.jar \\\n--mode dry_run \\\n--base-path base_path \\\n--assume-date-partitioning\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Check out the javadoc in ",(0,t.jsx)(a.code,{children:"HoodieRepairTool"})," for more instructions and examples."]}),"\n",(0,t.jsx)(a.h3,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,t.jsx)(a.p,{children:"0.10.1 is mainly intended for bug fixes and stability. The fixes span across many components, including"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"HoodieDeltaStreamer"}),"\n",(0,t.jsx)(a.li,{children:"Timeline related fixes"}),"\n",(0,t.jsx)(a.li,{children:"Table services"}),"\n",(0,t.jsx)(a.li,{children:"Metadata table"}),"\n",(0,t.jsx)(a.li,{children:"Spark SQL support"}),"\n",(0,t.jsx)(a.li,{children:"Timestamp-based key generator"}),"\n",(0,t.jsx)(a.li,{children:"Hive Sync"}),"\n",(0,t.jsx)(a.li,{children:"Flink and Java engines"}),"\n",(0,t.jsx)(a.li,{children:"Kafka Connect"}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"raw-release-notes",children:"Raw Release Notes"}),"\n",(0,t.jsxs)(a.p,{children:["The raw release notes are available ",(0,t.jsx)(a.a,{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12351135",children:"here"})]})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},79329:(e,a,r)=>{r.d(a,{A:()=>i});r(96540);var n=r(34164);const t={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:a,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(t.tabItem,i),hidden:r,children:a})}},65537:(e,a,r)=>{r.d(a,{A:()=>y});var n=r(96540),t=r(34164),s=r(65627),i=r(56347),l=r(50372),o=r(30604),u=r(11861),c=r(78749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:r}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:r,attributes:n,default:t}}=e;return{value:a,label:r,attributes:n,default:t}}))}(r);return function(e){const a=(0,u.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function p(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:r}=e;const t=(0,i.W6)(),s=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(t.location.search);a.set(s,e),t.replace({...t.location,search:a.toString()})}),[s,t])]}function f(e){const{defaultValue:a,queryString:r=!1,groupId:t}=e,s=h(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[u,d]=b({queryString:r,groupId:t}),[f,m]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,s]=(0,c.Dv)(r);return[t,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),g=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function x(e){let{className:a,block:r,selectedValue:n,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const a=e.currentTarget,r=o.indexOf(a),t=l[r].value;t!==n&&(u(a),i(t))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;a=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;a=o[r]??o[o.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},a),children:l.map((e=>{let{value:a,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...s,className:(0,t.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===a}),children:r??a},a)}))})}function j(e){let{lazy:a,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function k(e){const a=f(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...a,...e}),(0,v.jsx)(j,{...a,...e})]})}function y(e){const a=(0,m.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(a))}},28453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>l});var n=r(96540);const t={},s=n.createContext(t);function i(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);