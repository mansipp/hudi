"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[78087],{48636:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"s3_hoodie","title":"AWS S3","description":"In this page, we explain how to get your Hudi spark job to store into AWS S3.","source":"@site/versioned_docs/version-0.10.0/s3_hoodie.md","sourceDirName":".","slug":"/s3_hoodie","permalink":"/docs/0.10.0/s3_hoodie","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/s3_hoodie.md","tags":[],"version":"0.10.0","frontMatter":{"title":"AWS S3","keywords":["hudi","hive","aws","s3","spark","presto"],"summary":"In this page, we go over how to configure Hudi with S3 filesystem.","last_modified_at":"2019-12-30T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Cloud Storage","permalink":"/docs/0.10.0/cloud"},"next":{"title":"Google Cloud","permalink":"/docs/0.10.0/gcs_hoodie"}}');var t=n(74848),i=n(28453);const o={title:"AWS S3",keywords:["hudi","hive","aws","s3","spark","presto"],summary:"In this page, we go over how to configure Hudi with S3 filesystem.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},r=void 0,c={},l=[{value:"AWS configs",id:"aws-configs",level:2},{value:"AWS Credentials",id:"aws-credentials",level:3},{value:"AWS Libs",id:"aws-libs",level:3}];function d(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"In this page, we explain how to get your Hudi spark job to store into AWS S3."}),"\n",(0,t.jsx)(s.h2,{id:"aws-configs",children:"AWS configs"}),"\n",(0,t.jsx)(s.p,{children:"There are two configurations required for Hudi-S3 compatibility:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Adding AWS Credentials for Hudi"}),"\n",(0,t.jsx)(s.li,{children:"Adding required Jars to classpath"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"aws-credentials",children:"AWS Credentials"}),"\n",(0,t.jsxs)(s.p,{children:["Simplest way to use Hudi with S3, is to configure your ",(0,t.jsx)(s.code,{children:"SparkSession"})," or ",(0,t.jsx)(s.code,{children:"SparkContext"})," with S3 credentials. Hudi will automatically pick this up and talk to S3."]}),"\n",(0,t.jsxs)(s.p,{children:["Alternatively, add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,t.jsx)(s.code,{children:"fs.defaultFS"})," with your S3 bucket name and Hudi should be able to read/write from the bucket."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:"  <property>\n      <name>fs.defaultFS</name>\n      <value>s3://ysharma</value>\n  </property>\n\n  <property>\n      <name>fs.s3.impl</name>\n      <value>org.apache.hadoop.fs.s3native.NativeS3FileSystem</value>\n  </property>\n\n  <property>\n      <name>fs.s3.awsAccessKeyId</name>\n      <value>AWS_KEY</value>\n  </property>\n\n  <property>\n       <name>fs.s3.awsSecretAccessKey</name>\n       <value>AWS_SECRET</value>\n  </property>\n\n  <property>\n       <name>fs.s3n.awsAccessKeyId</name>\n       <value>AWS_KEY</value>\n  </property>\n\n  <property>\n       <name>fs.s3n.awsSecretAccessKey</name>\n       <value>AWS_SECRET</value>\n  </property>\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Utilities such as hudi-cli or deltastreamer tool, can pick up s3 creds via environmental variable prefixed with ",(0,t.jsx)(s.code,{children:"HOODIE_ENV_"}),". For e.g below is a bash snippet to setup\nsuch variables and then have cli be able to work on datasets stored in s3"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:"export HOODIE_ENV_fs_DOT_s3a_DOT_access_DOT_key=$accessKey\nexport HOODIE_ENV_fs_DOT_s3a_DOT_secret_DOT_key=$secretKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsAccessKeyId=$accessKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsSecretAccessKey=$secretKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_awsAccessKeyId=$accessKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_awsSecretAccessKey=$secretKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_impl=org.apache.hadoop.fs.s3a.S3AFileSystem\n"})}),"\n",(0,t.jsx)(s.h3,{id:"aws-libs",children:"AWS Libs"}),"\n",(0,t.jsx)(s.p,{children:"AWS hadoop libraries to add to our classpath"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"com.amazonaws:aws-java-sdk:1.10.34"}),"\n",(0,t.jsx)(s.li,{children:"org.apache.hadoop:hadoop-aws:2.7.3"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"AWS glue data libraries are needed if AWS glue data is used"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"com.amazonaws.glue:aws-glue-datacatalog-hive2-client:1.11.0"}),"\n",(0,t.jsx)(s.li,{children:"com.amazonaws:aws-java-sdk-glue:1.11.475"}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>r});var a=n(96540);const t={},i=a.createContext(t);function o(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);