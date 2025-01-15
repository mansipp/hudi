"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[51665],{47558:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"hoodie_cleaner","title":"Cleaning","description":"Hoodie Cleaner is a utility that helps you reclaim space and keep your storage costs in check. Apache Hudi provides","source":"@site/versioned_docs/version-0.10.1/hoodie_cleaner.md","sourceDirName":".","slug":"/hoodie_cleaner","permalink":"/docs/0.10.1/hoodie_cleaner","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.1/hoodie_cleaner.md","tags":[],"version":"0.10.1","frontMatter":{"title":"Cleaning","toc":true},"sidebar":"docs","previous":{"title":"Clustering","permalink":"/docs/0.10.1/clustering"},"next":{"title":"Transformers","permalink":"/docs/0.10.1/transforms"}}');var o=i(74848),t=i(28453);const a={title:"Cleaning",toc:!0},r=void 0,l={},c=[{value:"Cleaning Retention Policies",id:"cleaning-retention-policies",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Run Independently",id:"run-independently",level:3},{value:"Run Asynchronously",id:"run-asynchronously",level:3},{value:"CLI",id:"cli",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Hoodie Cleaner is a utility that helps you reclaim space and keep your storage costs in check. Apache Hudi provides\nsnapshot isolation between writers and readers by managing multiple files with MVCC concurrency. These file versions\nprovide history and enable time travel and rollbacks, but it is important to manage how much history you keep to balance your costs."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/configurations/#hoodiecleanautomatic",children:"Automatic Hudi cleaning"})," is enabled by default. Cleaning is invoked immediately after\neach commit, to delete older file slices. It's recommended to leave this enabled to ensure metadata and data storage growth is bounded."]}),"\n",(0,o.jsx)(n.h3,{id:"cleaning-retention-policies",children:"Cleaning Retention Policies"}),"\n",(0,o.jsx)(n.p,{children:"When cleaning old files, you should be careful not to remove files that are being actively used by long running queries.\nHudi cleaner currently supports the below cleaning policies to keep a certain number of commits or file versions:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"KEEP_LATEST_COMMITS"}),": This is the default policy. This is a temporal cleaning policy that ensures the effect of\nhaving lookback into all the changes that happened in the last X commits. Suppose a writer is ingesting data\ninto a Hudi dataset every 30 minutes and the longest running query can take 5 hours to finish, then the user should\nretain atleast the last 10 commits. With such a configuration, we ensure that the oldest version of a file is kept on\ndisk for at least 5 hours, thereby preventing the longest running query from failing at any point in time. Incremental cleaning is also possible using this policy."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"KEEP_LATEST_FILE_VERSIONS"}),": This policy has the effect of keeping N number of file versions irrespective of time.\nThis policy is useful when it is known how many MAX versions of the file does one want to keep at any given time.\nTo achieve the same behaviour as before of preventing long running queries from failing, one should do their calculations\nbased on data patterns. Alternatively, this policy is also useful if a user just wants to maintain 1 latest version of the file."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configurations",children:"Configurations"}),"\n",(0,o.jsxs)(n.p,{children:["For details about all possible configurations and their default values see the ",(0,o.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations#Compaction-Configs",children:"configuration docs"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"run-independently",children:"Run Independently"}),"\n",(0,o.jsxs)(n.p,{children:["Hoodie Cleaner can be run as a separate process or along with your data ingestion. In case you want to run it along with\ningesting data, configs are available which enable you to run it ",(0,o.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations#hoodiecleanasync",children:"synchronously or asynchronously"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You can use this command for running the cleaner independently:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"[hoodie]$ spark-submit --class org.apache.hudi.utilities.HoodieCleaner \\\n  --props s3:///temp/hudi-ingestion-config/kafka-source.properties \\\n  --target-base-path s3:///temp/hudi \\\n  --spark-master yarn-cluster\n"})}),"\n",(0,o.jsx)(n.h3,{id:"run-asynchronously",children:"Run Asynchronously"}),"\n",(0,o.jsx)(n.p,{children:"In case you wish to run the cleaner service asynchronously with writing, please configure the below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"hoodie.clean.automatic=true\nhoodie.clean.async=true\n"})}),"\n",(0,o.jsx)(n.h3,{id:"cli",children:"CLI"}),"\n",(0,o.jsxs)(n.p,{children:["You can also use ",(0,o.jsx)(n.a,{href:"https://hudi.apache.org/docs/deployment#cli",children:"Hudi CLI"})," to run Hoodie Cleaner."]}),"\n",(0,o.jsx)(n.p,{children:"CLI provides the below commands for cleaner service:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"cleans show"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"clean showpartitions"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"cleans run"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can find more details and the relevant code for these commands in ",(0,o.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/master/hudi-cli/src/main/java/org/apache/hudi/cli/commands/CleansCommand.java",children:(0,o.jsx)(n.code,{children:"org.apache.hudi.cli.commands.CleansCommand"})})," class."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(96540);const o={},t=s.createContext(o);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);