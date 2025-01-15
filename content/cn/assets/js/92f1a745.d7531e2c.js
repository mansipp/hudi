"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[53540],{19769:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"snapshot_exporter","title":"Exporter","description":"Introduction","source":"@site/versioned_docs/version-0.11.0/snapshot_exporter.md","sourceDirName":".","slug":"/snapshot_exporter","permalink":"/cn/docs/0.11.0/snapshot_exporter","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.0/snapshot_exporter.md","tags":[],"version":"0.11.0","frontMatter":{"title":"Exporter","keywords":["hudi","snapshotexporter","export"],"toc":true},"sidebar":"docs","previous":{"title":"Disaster Recovery","permalink":"/cn/docs/0.11.0/disaster_recovery"},"next":{"title":"Data Quality","permalink":"/cn/docs/0.11.0/precommit_validator"}}');var n=r(74848),a=r(28453);const o={title:"Exporter",keywords:["hudi","snapshotexporter","export"],toc:!0},s=void 0,d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2},{value:"Copy a Hudi dataset",id:"copy-a-hudi-dataset",level:3},{value:"Export to json or parquet dataset",id:"export-to-json-or-parquet-dataset",level:3},{value:"Re-partitioning",id:"re-partitioning",level:3},{value:"Custom Re-partitioning",id:"custom-re-partitioning",level:3}];function l(t){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(e.p,{children:"HoodieSnapshotExporter allows you to copy data from one location to another for backups or other purposes.\nYou can write data as Hudi, Json, Orc, or Parquet file formats. In addition to copying data, you can also repartition data\nwith a provided field or implement custom repartitioning by extending a class shown in detail below."}),"\n",(0,n.jsx)(e.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsx)(e.p,{children:"HoodieSnapshotExporter accepts a reference to a source path and a destination path. The utility will issue a\nquery, perform any repartitioning if required and will write the data as Hudi, parquet, or json format."}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Argument"}),(0,n.jsx)(e.th,{children:"Description"}),(0,n.jsx)(e.th,{children:"Required"}),(0,n.jsx)(e.th,{children:"Note"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"--source-base-path"}),(0,n.jsx)(e.td,{children:"Base path for the source Hudi dataset to be snapshotted"}),(0,n.jsx)(e.td,{children:"required"}),(0,n.jsx)(e.td,{})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"--target-output-path"}),(0,n.jsx)(e.td,{children:"Output path for storing a particular snapshot"}),(0,n.jsx)(e.td,{children:"required"}),(0,n.jsx)(e.td,{})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"--output-format"}),(0,n.jsx)(e.td,{children:"Output format for the exported dataset; accept these values: json,parquet,hudi"}),(0,n.jsx)(e.td,{children:"required"}),(0,n.jsx)(e.td,{})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"--output-partition-field"}),(0,n.jsx)(e.td,{children:"A field to be used by Spark repartitioning"}),(0,n.jsx)(e.td,{children:"optional"}),(0,n.jsx)(e.td,{children:'Ignored when "Hudi" or when --output-partitioner is specified.The output dataset\'s default partition field will inherent from the source Hudi dataset.'})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"--output-partitioner"}),(0,n.jsx)(e.td,{children:"A class to facilitate custom repartitioning"}),(0,n.jsx)(e.td,{children:"optional"}),(0,n.jsx)(e.td,{children:'Ignored when using output-format "Hudi"'})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(e.h3,{id:"copy-a-hudi-dataset",children:"Copy a Hudi dataset"}),"\n",(0,n.jsx)(e.p,{children:"Exporter scans the source dataset and then makes a copy of it to the target output path."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:'spark-submit \\\n  --jars "packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-0.6.0-SNAPSHOT.jar" \\\n  --deploy-mode "client" \\\n  --class "org.apache.hudi.utilities.HoodieSnapshotExporter" \\\n      packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.6.0-SNAPSHOT.jar \\\n  --source-base-path "/tmp/" \\\n  --target-output-path "/tmp/exported/hudi/" \\\n  --output-format "hudi"\n'})}),"\n",(0,n.jsx)(e.h3,{id:"export-to-json-or-parquet-dataset",children:"Export to json or parquet dataset"}),"\n",(0,n.jsx)(e.p,{children:'The Exporter can also convert the source dataset into other formats. Currently only "json" and "parquet" are supported.'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:'spark-submit \\\n  --jars "packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-0.6.0-SNAPSHOT.jar" \\\n  --deploy-mode "client" \\\n  --class "org.apache.hudi.utilities.HoodieSnapshotExporter" \\\n      packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.6.0-SNAPSHOT.jar \\\n  --source-base-path "/tmp/" \\\n  --target-output-path "/tmp/exported/json/" \\\n  --output-format "json"  # or "parquet"\n'})}),"\n",(0,n.jsx)(e.h3,{id:"re-partitioning",children:"Re-partitioning"}),"\n",(0,n.jsxs)(e.p,{children:["When exporting to a different format, the Exporter takes the ",(0,n.jsx)(e.code,{children:"--output-partition-field"})," parameter to do some custom re-partitioning.\nNote: All ",(0,n.jsx)(e.code,{children:"_hoodie_*"})," metadata fields will be stripped during export, so make sure to use an existing non-metadata field as the output partitions."]}),"\n",(0,n.jsx)(e.p,{children:"By default, if no partitioning parameters are given, the output dataset will have no partition."}),"\n",(0,n.jsx)(e.p,{children:"Example:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:'spark-submit \\\n  --jars "packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-0.6.0-SNAPSHOT.jar" \\\n  --deploy-mode "client" \\\n  --class "org.apache.hudi.utilities.HoodieSnapshotExporter" \\\n      packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.6.0-SNAPSHOT.jar \\  \n  --source-base-path "/tmp/" \\\n  --target-output-path "/tmp/exported/json/" \\\n  --output-format "json" \\\n  --output-partition-field "symbol"  # assume the source dataset contains a field `symbol`\n'})}),"\n",(0,n.jsx)(e.p,{children:"The output directory will look like this"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"`_SUCCESS symbol=AMRS symbol=AYX symbol=CDMO symbol=CRC symbol=DRNA ...`\n"})}),"\n",(0,n.jsx)(e.h3,{id:"custom-re-partitioning",children:"Custom Re-partitioning"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"--output-partitioner"})," parameter takes in a fully-qualified name of a class that implements ",(0,n.jsx)(e.code,{children:"HoodieSnapshotExporter.Partitioner"}),".\nThis parameter takes higher precedence than ",(0,n.jsx)(e.code,{children:"--output-partition-field"}),", which will be ignored if this is provided."]}),"\n",(0,n.jsx)(e.p,{children:"An example implementation is shown below:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"MyPartitioner.java"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'package com.foo.bar;\npublic class MyPartitioner implements HoodieSnapshotExporter.Partitioner {\n\n  private static final String PARTITION_NAME = "date";\n \n  @Override\n  public DataFrameWriter<Row> partition(Dataset<Row> source) {\n    // use the current hoodie partition path as the output partition\n    return source\n        .withColumnRenamed(HoodieRecord.PARTITION_PATH_METADATA_FIELD, PARTITION_NAME)\n        .repartition(new Column(PARTITION_NAME))\n        .write()\n        .partitionBy(PARTITION_NAME);\n  }\n}\n'})}),"\n",(0,n.jsxs)(e.p,{children:["After putting this class in ",(0,n.jsx)(e.code,{children:"my-custom.jar"}),", which is then placed on the job classpath, the submit command will look like this:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:'spark-submit \\\n  --jars "packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-0.6.0-SNAPSHOT.jar,my-custom.jar" \\\n  --deploy-mode "client" \\\n  --class "org.apache.hudi.utilities.HoodieSnapshotExporter" \\\n      packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.6.0-SNAPSHOT.jar \\\n  --source-base-path "/tmp/" \\\n  --target-output-path "/tmp/exported/json/" \\\n  --output-format "json" \\\n  --output-partitioner "com.foo.bar.MyPartitioner"\n'})})]})}function u(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},28453:(t,e,r)=>{r.d(e,{R:()=>o,x:()=>s});var i=r(96540);const n={},a=i.createContext(n);function o(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:o(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);