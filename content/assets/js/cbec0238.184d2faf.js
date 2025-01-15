"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[27179],{98319:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"key_generation","title":"Key Generation","description":"Every record in Hudi is uniquely identified by a primary key, which is a pair of record key and partition path where the record belongs to.","source":"@site/versioned_docs/version-0.13.1/key_generation.md","sourceDirName":".","slug":"/key_generation","permalink":"/docs/0.13.1/key_generation","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.1/key_generation.md","tags":[],"version":"0.13.1","frontMatter":{"title":"Key Generation","summary":"In this page, we describe key generation in Hudi.","toc":true,"last_modified_at":null},"sidebar":"docs","previous":{"title":"Schema Evolution","permalink":"/docs/0.13.1/schema_evolution"},"next":{"title":"Concurrency Control","permalink":"/docs/0.13.1/concurrency_control"}}');var n=i(74848),d=i(28453);const s={title:"Key Generation",summary:"In this page, we describe key generation in Hudi.",toc:!0,last_modified_at:null},a=void 0,o={},l=[{value:"Key Generators",id:"key-generators",level:2},{value:"SimpleKeyGenerator",id:"simplekeygenerator",level:3},{value:"ComplexKeyGenerator",id:"complexkeygenerator",level:3},{value:"GlobalDeleteKeyGenerator",id:"globaldeletekeygenerator",level:3},{value:"NonpartitionedKeyGenerator",id:"nonpartitionedkeygenerator",level:3},{value:"CustomKeyGenerator",id:"customkeygenerator",level:3},{value:"Bring your own implementation",id:"bring-your-own-implementation",level:3},{value:"TimestampBasedKeyGenerator",id:"timestampbasedkeygenerator",level:3},{value:"Timestamp is GMT",id:"timestamp-is-gmt",level:4},{value:"Timestamp is DATE_STRING",id:"timestamp-is-date_string",level:4},{value:"Scalar examples",id:"scalar-examples",level:4},{value:"ISO8601WithMsZ with Single Input format",id:"iso8601withmsz-with-single-input-format",level:4},{value:"ISO8601WithMsZ with Multiple Input formats",id:"iso8601withmsz-with-multiple-input-formats",level:4},{value:"ISO8601NoMs with offset using multiple input formats",id:"iso8601noms-with-offset-using-multiple-input-formats",level:4},{value:"Input as short date string and expect date in date format",id:"input-as-short-date-string-and-expect-date-in-date-format",level:4}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Every record in Hudi is uniquely identified by a primary key, which is a pair of record key and partition path where the record belongs to.\nUsing primary keys, Hudi can impose a) partition level uniqueness integrity constraint b) enable fast updates and deletes on records.\nOne should choose the partitioning scheme wisely as it could be a determining factor for your ingestion and query latency."}),"\n",(0,n.jsx)(t.p,{children:"In general, Hudi supports both partitioned and global indexes. For a dataset with partitioned index(which is most commonly used), each record is uniquely identified by a pair of record key and partition path.\nBut for a dataset with global index, each record is uniquely identified by just the record key. There won't be any duplicate record keys across partitions."}),"\n",(0,n.jsx)(t.h2,{id:"key-generators",children:"Key Generators"}),"\n",(0,n.jsx)(t.p,{children:"Hudi provides several key generators out of the box that users can use based on their need, while having a pluggable\nimplementation for users to implement and use their own KeyGenerator. This page goes over all different types of key\ngenerators that are readily available to use."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/6f9b02decb5bb2b83709b1b6ec04a97e4d102c11/hudi-common/src/main/java/org/apache/hudi/keygen/KeyGenerator.java",children:"Here"}),"\nis the interface for KeyGenerator in Hudi for your reference."]}),"\n",(0,n.jsx)(t.p,{children:"Before diving into different types of key generators, let\u2019s go over some of the common configs required to be set for\nkey generators."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Config"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Meaning/purpose"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.datasource.write.recordkey.field"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Refers to record key field. This is a mandatory field."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.datasource.write.partitionpath.field"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Refers to partition path field. This is a mandatory field."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.datasource.write.keygenerator.class"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Refers to Key generator class(including full path). Could refer to any of the available ones or user defined one. This is a mandatory field."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.datasource.write.partitionpath.urlencode"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"When set to true, partition path will be url encoded. Default value is false."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.datasource.write.hive_style_partitioning"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"When set to true, uses hive style partitioning. Partition field name will be prefixed to the value. Format: \u201c<partition_path_field_name>=<partition_path_value>\u201d. Default value is false."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"There are few more configs involved if you are looking for TimestampBasedKeyGenerator. Will cover those in the respective section."}),"\n",(0,n.jsx)(t.p,{children:"Lets go over different key generators available to be used with Hudi."}),"\n",(0,n.jsx)(t.h3,{id:"simplekeygenerator",children:(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/keygen/SimpleKeyGenerator.java",children:"SimpleKeyGenerator"})}),"\n",(0,n.jsx)(t.p,{children:"Record key refers to one field(column in dataframe) by name and partition path refers to one field (single column in dataframe)\nby name. This is one of the most commonly used one. Values are interpreted as is from dataframe and converted to string."}),"\n",(0,n.jsx)(t.h3,{id:"complexkeygenerator",children:(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/keygen/ComplexKeyGenerator.java",children:"ComplexKeyGenerator"})}),"\n",(0,n.jsxs)(t.p,{children:["Both record key and partition paths comprise one or more than one field by name(combination of multiple fields). Fields\nare expected to be comma separated in the config value. For example ",(0,n.jsx)(t.code,{children:'"Hoodie.datasource.write.recordkey.field" : \u201ccol1,col4\u201d'})]}),"\n",(0,n.jsx)(t.h3,{id:"globaldeletekeygenerator",children:(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/keygen/GlobalDeleteKeyGenerator.java",children:"GlobalDeleteKeyGenerator"})}),"\n",(0,n.jsx)(t.p,{children:"Global index deletes do not require partition value. So this key generator avoids using partition value for generating HoodieKey."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"NOTE:"})}),'\nThe "GlobalDeleteKeyGenerator" has to be used with a global index to delete records solely based on the record key.\nIt works for a batch with deletes only. The key generator can be used for both partitioned and non-partitioned table. Note that\nwhen using this key generator, the config ',(0,n.jsx)(t.code,{children:"hoodie.[bloom|simple|hbase].index.update.partition.path"})," should be set to\n",(0,n.jsx)(t.code,{children:"false"})," in order to avoid redundant data written to the storage."]}),"\n",(0,n.jsx)(t.h3,{id:"nonpartitionedkeygenerator",children:(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/keygen/NonpartitionedKeyGenerator.java",children:"NonpartitionedKeyGenerator"})}),"\n",(0,n.jsx)(t.p,{children:"If your hudi dataset is not partitioned, you could use this \u201cNonpartitionedKeyGenerator\u201d which will return an empty\npartition for all records. In other words, all records go to the same partition (which is empty \u201c\u201d)"}),"\n",(0,n.jsx)(t.h3,{id:"customkeygenerator",children:(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/keygen/CustomKeyGenerator.java",children:"CustomKeyGenerator"})}),"\n",(0,n.jsx)(t.p,{children:"This is a generic implementation of KeyGenerator where users are able to leverage the benefits of SimpleKeyGenerator,\nComplexKeyGenerator and TimestampBasedKeyGenerator all at the same time. One can configure record key and partition\npaths as a single field or a combination of fields."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"hoodie.datasource.write.recordkey.field\nhoodie.datasource.write.partitionpath.field\nhoodie.datasource.write.keygenerator.class=org.apache.hudi.keygen.CustomKeyGenerator\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This keyGenerator is particularly useful if you want to define\ncomplex partition paths involving regular fields and timestamp based fields. It expects value for prop ",(0,n.jsx)(t.code,{children:'"hoodie.datasource.write.partitionpath.field"'}),'\nin a specific format. The format should be "field1',":PartitionKeyType1",",field2",":PartitionKeyType2",'..."']}),"\n",(0,n.jsxs)(t.p,{children:["The complete partition path is created as\n",(0,n.jsx)(t.code,{children:"<value for field1 basis PartitionKeyType1>/<value for field2 basis PartitionKeyType2> "}),"\nand so on. Each partition key type could either be SIMPLE or TIMESTAMP."]}),"\n",(0,n.jsxs)(t.p,{children:["Example config value: ",(0,n.jsx)(t.code,{children:"\u201cfield_3:simple,field_5:timestamp\u201d"})]}),"\n",(0,n.jsx)(t.p,{children:"RecordKey config value is either single field incase of SimpleKeyGenerator or a comma separate field names if referring to ComplexKeyGenerator.\nExample:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"hoodie.datasource.write.recordkey.field=field1,field2\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This will create your record key in the format ",(0,n.jsx)(t.code,{children:"field1:value1,field2:value2"})," and so on, otherwise you can specify only one field in case of simple record keys. ",(0,n.jsx)(t.code,{children:"CustomKeyGenerator"})," class defines an enum ",(0,n.jsx)(t.code,{children:"PartitionKeyType"})," for configuring partition paths. It can take two possible values - SIMPLE and TIMESTAMP.\nThe value for ",(0,n.jsx)(t.code,{children:"hoodie.datasource.write.partitionpath.field"})," property in case of partitioned tables needs to be provided in the format ",(0,n.jsx)(t.code,{children:"field1:PartitionKeyType1,field2:PartitionKeyType2"})," and so on. For example, if you want to create partition path using 2 fields ",(0,n.jsx)(t.code,{children:"country"})," and ",(0,n.jsx)(t.code,{children:"date"})," where the latter has timestamp based values and needs to be customised in a given format, you can specify the following"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"hoodie.datasource.write.partitionpath.field=country:SIMPLE,date:TIMESTAMP\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This will create the partition path in the format ",(0,n.jsx)(t.code,{children:"<country_name>/<date>"})," or ",(0,n.jsx)(t.code,{children:"country=<country_name>/date=<date>"})," depending on whether you want hive style partitioning or not."]}),"\n",(0,n.jsx)(t.h3,{id:"bring-your-own-implementation",children:"Bring your own implementation"}),"\n",(0,n.jsx)(t.p,{children:"You can implement your own custom key generator by extending the public API class here:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/java/org/apache/hudi/keygen/KeyGenerator.java",children:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/java/org/apache/hudi/keygen/KeyGenerator.java"})}),"\n",(0,n.jsx)(t.h3,{id:"timestampbasedkeygenerator",children:(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/keygen/TimestampBasedKeyGenerator.java",children:"TimestampBasedKeyGenerator"})}),"\n",(0,n.jsx)(t.p,{children:"This key generator relies on timestamps for the partition field. The field values are interpreted as timestamps\nand not just converted to string while generating partition path value for records.  Record key is same as before where it is chosen by\nfield name.  Users are expected to set few more configs to use this KeyGenerator."}),"\n",(0,n.jsx)(t.p,{children:"Configs to be set:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Config"}),(0,n.jsx)(t.th,{children:"Meaning/purpose"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.timestamp.type"})}),(0,n.jsx)(t.td,{children:"One of the timestamp types supported(UNIX_TIMESTAMP, DATE_STRING, MIXED, EPOCHMILLISECONDS, SCALAR)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.output.dateformat"})}),(0,n.jsx)(t.td,{children:"Output date format"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.timezone"})}),(0,n.jsx)(t.td,{children:"Timezone of the data format"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"oodie.deltastreamer.keygen.timebased.input.dateformat"})}),(0,n.jsx)(t.td,{children:"Input date format"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Let's go over some example values for TimestampBasedKeyGenerator."}),"\n",(0,n.jsx)(t.h4,{id:"timestamp-is-gmt",children:"Timestamp is GMT"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Config field"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.timestamp.type"})}),(0,n.jsx)(t.td,{children:'"EPOCHMILLISECONDS"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.output.dateformat"})}),(0,n.jsx)(t.td,{children:'"yyyy-MM-dd hh"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.timezone"})}),(0,n.jsx)(t.td,{children:'"GMT+8:00"'})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Input Field value: \u201c1578283932000L\u201d ",(0,n.jsx)("br",{}),"\nPartition path generated from key generator: \u201c2020-01-06 12\u201d"]}),"\n",(0,n.jsxs)(t.p,{children:["If input field value is null for some rows. ",(0,n.jsx)("br",{}),"\nPartition path generated from key generator: \u201c1970-01-01 08\u201d"]}),"\n",(0,n.jsx)(t.h4,{id:"timestamp-is-date_string",children:"Timestamp is DATE_STRING"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Config field"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.timestamp.type"})}),(0,n.jsx)(t.td,{children:'"DATE_STRING"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.output.dateformat"})}),(0,n.jsx)(t.td,{children:'"yyyy-MM-dd hh"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.timezone"})}),(0,n.jsx)(t.td,{children:'"GMT+8:00"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.input.dateformat"})}),(0,n.jsxs)(t.td,{children:['"yyyy-MM-dd hh:mm',":ss",'"']})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Input field value: \u201c2020-01-06 12:12:12\u201d ",(0,n.jsx)("br",{}),"\nPartition path generated from key generator: \u201c2020-01-06 12\u201d"]}),"\n",(0,n.jsxs)(t.p,{children:["If input field value is null for some rows. ",(0,n.jsx)("br",{}),"\nPartition path generated from key generator: \u201c1970-01-01 12:00:00\u201d"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h4,{id:"scalar-examples",children:"Scalar examples"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Config field"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.timestamp.type"})}),(0,n.jsx)(t.td,{children:'"SCALAR"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.output.dateformat"})}),(0,n.jsx)(t.td,{children:'"yyyy-MM-dd hh"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.timezone"})}),(0,n.jsx)(t.td,{children:'"GMT"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.timestamp.scalar.time.unit"})}),(0,n.jsx)(t.td,{children:'"days"'})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Input field value: \u201c20000L\u201d ",(0,n.jsx)("br",{}),"\nPartition path generated from key generator: \u201c2024-10-04 12\u201d"]}),"\n",(0,n.jsxs)(t.p,{children:["If input field value is null. ",(0,n.jsx)("br",{}),"\nPartition path generated from key generator: \u201c1970-01-02 12\u201d"]}),"\n",(0,n.jsx)(t.h4,{id:"iso8601withmsz-with-single-input-format",children:"ISO8601WithMsZ with Single Input format"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Config field"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.timestamp.type"})}),(0,n.jsx)(t.td,{children:'"DATE_STRING"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.input.dateformat"})}),(0,n.jsxs)(t.td,{children:["\"yyyy-MM-dd'T'HH:mm",":ss",'.SSSZ"']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.input.dateformat.list.delimiter.regex"})}),(0,n.jsx)(t.td,{children:'""'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.input.timezone"})}),(0,n.jsx)(t.td,{children:'""'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.output.dateformat"})}),(0,n.jsx)(t.td,{children:'"yyyyMMddHH"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.output.timezone"})}),(0,n.jsx)(t.td,{children:'"GMT"'})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:['Input field value: "2020-04-01T13:01:33.428Z" ',(0,n.jsx)("br",{}),'\nPartition path generated from key generator: "2020040113"']}),"\n",(0,n.jsx)(t.h4,{id:"iso8601withmsz-with-multiple-input-formats",children:"ISO8601WithMsZ with Multiple Input formats"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Config field"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.timestamp.type"})}),(0,n.jsx)(t.td,{children:'"DATE_STRING"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.input.dateformat"})}),(0,n.jsxs)(t.td,{children:["\"yyyy-MM-dd'T'HH:mm",":ssZ",",yyyy-MM-dd'T'HH:mm",":ss",'.SSSZ"']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.input.dateformat.list.delimiter.regex"})}),(0,n.jsx)(t.td,{children:'""'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.input.timezone"})}),(0,n.jsx)(t.td,{children:'""'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.output.dateformat"})}),(0,n.jsx)(t.td,{children:'"yyyyMMddHH"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.output.timezone"})}),(0,n.jsx)(t.td,{children:'"UTC"'})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:['Input field value: "2020-04-01T13:01:33.428Z" ',(0,n.jsx)("br",{}),'\nPartition path generated from key generator: "2020040113"']}),"\n",(0,n.jsx)(t.h4,{id:"iso8601noms-with-offset-using-multiple-input-formats",children:"ISO8601NoMs with offset using multiple input formats"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Config field"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.timestamp.type"})}),(0,n.jsx)(t.td,{children:'"DATE_STRING"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.input.dateformat"})}),(0,n.jsxs)(t.td,{children:["\"yyyy-MM-dd'T'HH:mm",":ssZ",",yyyy-MM-dd'T'HH:mm",":ss",'.SSSZ"']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.input.dateformat.list.delimiter.regex"})}),(0,n.jsx)(t.td,{children:'""'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.input.timezone"})}),(0,n.jsx)(t.td,{children:'""'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.output.dateformat"})}),(0,n.jsx)(t.td,{children:'"yyyyMMddHH"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.output.timezone"})}),(0,n.jsx)(t.td,{children:'"UTC"'})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:['Input field value: "2020-04-01T13:01:33-',(0,n.jsx)(t.strong,{children:"05:00"}),'" ',(0,n.jsx)("br",{}),'\nPartition path generated from key generator: "2020040118"']}),"\n",(0,n.jsx)(t.h4,{id:"input-as-short-date-string-and-expect-date-in-date-format",children:"Input as short date string and expect date in date format"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Config field"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.timestamp.type"})}),(0,n.jsx)(t.td,{children:'"DATE_STRING"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.input.dateformat"})}),(0,n.jsxs)(t.td,{children:["\"yyyy-MM-dd'T'HH:mm",":ssZ",",yyyy-MM-dd'T'HH:mm",":ss",'.SSSZ,yyyyMMdd"']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.input.dateformat.list.delimiter.regex"})}),(0,n.jsx)(t.td,{children:'""'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.input.timezone"})}),(0,n.jsx)(t.td,{children:'"UTC"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.output.dateformat"})}),(0,n.jsx)(t.td,{children:'"MM/dd/yyyy"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hoodie.deltastreamer.keygen.timebased.output.timezone"})}),(0,n.jsx)(t.td,{children:'"UTC"'})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:['Input field value: "20200401" ',(0,n.jsx)("br",{}),'\nPartition path generated from key generator: "04/01/2020"']})]})}function c(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var r=i(96540);const n={},d=r.createContext(n);function s(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);