"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[71590],{87140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"azure_hoodie","title":"Microsoft Azure","description":"In this page, we explain how to use Hudi on Microsoft Azure.","source":"@site/docs/azure_hoodie.md","sourceDirName":".","slug":"/azure_hoodie","permalink":"/docs/next/azure_hoodie","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/azure_hoodie.md","tags":[],"version":"current","frontMatter":{"title":"Microsoft Azure","keywords":["hudi","hive","azure","spark","presto"],"summary":"In this page, we go over how to configure Hudi with Azure filesystem.","last_modified_at":"2020-05-25T23:00:57.000Z"},"sidebar":"docs","previous":{"title":"Alibaba Cloud","permalink":"/docs/next/oss_hoodie"},"next":{"title":"Tencent Cloud","permalink":"/docs/next/cos_hoodie"}}');var a=t(74848),i=t(28453);const o={title:"Microsoft Azure",keywords:["hudi","hive","azure","spark","presto"],summary:"In this page, we go over how to configure Hudi with Azure filesystem.",last_modified_at:new Date("2020-05-25T23:00:57.000Z")},r=void 0,d={},c=[{value:"Disclaimer",id:"disclaimer",level:2},{value:"Supported Storage System",id:"supported-storage-system",level:2},{value:"Verified Combination of Spark and storage system",id:"verified-combination-of-spark-and-storage-system",level:2},{value:"HDInsight Spark2.4 on Azure Data Lake Storage Gen 2",id:"hdinsight-spark24-on-azure-data-lake-storage-gen-2",level:4},{value:"Databricks Spark2.4 on Azure Data Lake Storage Gen 2",id:"databricks-spark24-on-azure-data-lake-storage-gen-2",level:4},{value:"Related Resources",id:"related-resources",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In this page, we explain how to use Hudi on Microsoft Azure."}),"\n",(0,a.jsx)(n.h2,{id:"disclaimer",children:"Disclaimer"}),"\n",(0,a.jsx)(n.p,{children:"This page is maintained by the Hudi community.\nIf the information is inaccurate or you have additional information to add.\nPlease feel free to create a JIRA ticket. Contribution is highly appreciated."}),"\n",(0,a.jsx)(n.h2,{id:"supported-storage-system",children:"Supported Storage System"}),"\n",(0,a.jsx)(n.p,{children:"There are two storage systems support Hudi ."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Azure Blob Storage"}),"\n",(0,a.jsx)(n.li,{children:"Azure Data Lake Gen 2"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"verified-combination-of-spark-and-storage-system",children:"Verified Combination of Spark and storage system"}),"\n",(0,a.jsx)(n.h4,{id:"hdinsight-spark24-on-azure-data-lake-storage-gen-2",children:"HDInsight Spark2.4 on Azure Data Lake Storage Gen 2"}),"\n",(0,a.jsx)(n.p,{children:"This combination works out of the box. No extra config needed."}),"\n",(0,a.jsx)(n.h4,{id:"databricks-spark24-on-azure-data-lake-storage-gen-2",children:"Databricks Spark2.4 on Azure Data Lake Storage Gen 2"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Import Hudi jar to databricks workspace"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Mount the file system to dbutils."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'dbutils.fs.mount(\n  source = "abfss://xxx@xxx.dfs.core.windows.net",\n  mountPoint = "/mountpoint",\n  extraConfigs = configs)\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"When writing Hudi dataset, use abfss URL"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'inputDF.write\n  .format("org.apache.hudi")\n  .options(opts)\n  .mode(SaveMode.Append)\n  .save("abfss://<<storage-account>>.dfs.core.windows.net/hudi-tables/customer")\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"When reading Hudi dataset, use the mounting point"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'spark.read\n  .format("org.apache.hudi")\n  .load("/mountpoint/hudi-tables/customer")\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,a.jsx)("h3",{children:"Blogs"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.onehouse.ai/blog/how-to-use-apache-hudi-with-databricks",children:"How to use Apache Hudi with Databricks"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);