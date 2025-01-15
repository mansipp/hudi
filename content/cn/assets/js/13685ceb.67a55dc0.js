"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[81544],{24091:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"precommit_validator","title":"Data Quality","description":"Apache Hudi has what are called Pre-Commit Validators that allow you to validate that your data meets certain data quality","source":"@site/versioned_docs/version-0.11.1/precommit_validator.md","sourceDirName":".","slug":"/precommit_validator","permalink":"/cn/docs/0.11.1/precommit_validator","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.1/precommit_validator.md","tags":[],"version":"0.11.1","frontMatter":{"title":"Data Quality","keywords":["hudi","quality","expectations","pre-commit validator"]},"sidebar":"docs","previous":{"title":"Exporter","permalink":"/cn/docs/0.11.1/snapshot_exporter"},"next":{"title":"Basic Configurations","permalink":"/cn/docs/0.11.1/basic_configurations"}}');var r=t(74848),o=t(28453);const l={title:"Data Quality",keywords:["hudi","quality","expectations","pre-commit validator"]},n=void 0,s={},d=[{value:"SQL Query Single Result",id:"sql-query-single-result",level:2},{value:"SQL Query Equality",id:"sql-query-equality",level:2},{value:"SQL Query Inequality",id:"sql-query-inequality",level:2},{value:"Extend Custom Validator",id:"extend-custom-validator",level:2}];function c(e){const a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:["Apache Hudi has what are called ",(0,r.jsx)(a.strong,{children:"Pre-Commit Validators"})," that allow you to validate that your data meets certain data quality\nexpectations as you are writing with DeltaStreamer or Spark Datasource writers."]}),"\n",(0,r.jsxs)(a.p,{children:["To configure pre-commit validators, use this setting ",(0,r.jsx)(a.code,{children:"hoodie.precommit.validators=<comma separated list of validator class names>"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Example:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'spark.write.format("hudi")\n    .option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator")\n'})}),"\n",(0,r.jsx)(a.p,{children:"Today you can use any of these validators and even have the flexibility to extend your own:"}),"\n",(0,r.jsx)(a.h2,{id:"sql-query-single-result",children:"SQL Query Single Result"}),"\n",(0,r.jsx)(a.p,{children:"Can be used to validate that a query on the table results in a specific value."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQuerySingleResultPreCommitValidator.java",children:"org.apache.hudi.client.validator.SqlQuerySingleResultPreCommitValidator"})}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Multiple queries separated by ';' delimiter are supported.Expected result is included as part of query separated by '#'. Example query: ",(0,r.jsx)(a.code,{children:"query1#result1;query2#result2"})]}),"\n",(0,r.jsx)(a.p,{children:'Example, "expect exactly 0 null rows":'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'import org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQuerySingleResultPreCommitValidator").\n  option("hoodie.precommit.validators.single.value.sql.queries", "select count(*) from <TABLE_NAME> where col=null#0").\n  save(basePath)\n'})}),"\n",(0,r.jsx)(a.h2,{id:"sql-query-equality",children:"SQL Query Equality"}),"\n",(0,r.jsx)(a.p,{children:"Can be used to validate for equality of rows before and after the commit."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQueryEqualityPreCommitValidator.java",children:"org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator"})}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:'Example, "expect no change of null rows with this commit":'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'import org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator").\n  option("hoodie.precommit.validators.equality.sql.queries", "select count(*) from <TABLE_NAME> where col=null").\n  save(basePath)\n'})}),"\n",(0,r.jsx)(a.h2,{id:"sql-query-inequality",children:"SQL Query Inequality"}),"\n",(0,r.jsx)(a.p,{children:"Can be used to validate for inequality of rows before and after the commit."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQueryInequalityPreCommitValidator.java",children:"org.apache.hudi.client.validator.SqlQueryInequalityPreCommitValidator"})}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:'Example, "expect there must be a change of null rows with this commit":'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'import org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryInequalityPreCommitValidator").\n  option("hoodie.precommit.validators.inequality.sql.queries", "select count(*) from <TABLE_NAME> where col=null").\n  save(basePath)\n'})}),"\n",(0,r.jsx)(a.h2,{id:"extend-custom-validator",children:"Extend Custom Validator"}),"\n",(0,r.jsxs)(a.p,{children:["Users can also provide their own implementations by extending the abstract class ",(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SparkPreCommitValidator.java",children:"SparkPreCommitValidator"}),"\nand overriding this method"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"void validateRecordsBeforeAndAfter(Dataset<Row> before, \n                                   Dataset<Row> after, \n                                   Set<String> partitionsAffected)\n"})})]})}function u(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>l,x:()=>n});var i=t(96540);const r={},o=i.createContext(r);function l(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);