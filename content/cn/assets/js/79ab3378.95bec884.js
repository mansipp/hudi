"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[53237],{33167:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"concurrency_control","title":"Concurrency Control","description":"In this section, we will cover Hudi\'s concurrency model and describe ways to ingest data into a Hudi Table from multiple writers; using the DeltaStreamer tool as well as","source":"@site/versioned_docs/version-0.8.0/concurrency_control.md","sourceDirName":".","slug":"/concurrency_control","permalink":"/cn/docs/0.8.0/concurrency_control","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.8.0/concurrency_control.md","tags":[],"version":"0.8.0","frontMatter":{"version":"0.8.0","title":"Concurrency Control","summary":"In this page, we will discuss how to perform concurrent writes to Hudi Tables.","toc":true,"last_modified_at":"2021-03-19T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"\u5199\u5165 Hudi \u6570\u636e\u96c6","permalink":"/cn/docs/0.8.0/writing_data"},"next":{"title":"\u67e5\u8be2 Hudi \u6570\u636e\u96c6","permalink":"/cn/docs/0.8.0/querying_data"}}');var n=r(74848),o=r(28453);const s={version:"0.8.0",title:"Concurrency Control",summary:"In this page, we will discuss how to perform concurrent writes to Hudi Tables.",toc:!0,last_modified_at:new Date("2021-03-19T19:59:57.000Z")},a=void 0,c={},l=[{value:"Supported Concurrency Controls",id:"supported-concurrency-controls",level:2},{value:"Single Writer Guarantees",id:"single-writer-guarantees",level:2},{value:"Multi Writer Guarantees",id:"multi-writer-guarantees",level:2},{value:"Enabling Multi Writing",id:"enabling-multi-writing",level:2},{value:"Datasource Writer",id:"datasource-writer",level:2},{value:"DeltaStreamer",id:"deltastreamer",level:2},{value:"Best Practices when using Optimistic Concurrency Control",id:"best-practices-when-using-optimistic-concurrency-control",level:2},{value:"Disabling Multi Writing",id:"disabling-multi-writing",level:2}];function d(e){const i={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["In this section, we will cover Hudi's concurrency model and describe ways to ingest data into a Hudi Table from multiple writers; using the ",(0,n.jsx)(i.a,{href:"#deltastreamer",children:"DeltaStreamer"})," tool as well as\nusing the ",(0,n.jsx)(i.a,{href:"#datasource-writer",children:"Hudi datasource"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"supported-concurrency-controls",children:"Supported Concurrency Controls"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"MVCC"})," : Hudi table services such as compaction, cleaning, clustering leverage Multi Version Concurrency Control to provide snapshot isolation\nbetween multiple table service writers and readers. Additionally, using MVCC, Hudi provides snapshot isolation between an ingestion writer and multiple concurrent readers.\nWith this model, Hudi supports running any number of table service jobs concurrently, without any concurrency conflict.\nThis is made possible by ensuring that scheduling plans of such table services always happens in a single writer mode to ensure no conflict and avoids race conditions."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"[NEW] OPTIMISTIC CONCURRENCY"})," : Write operations such as the ones described above (UPSERT, INSERT) etc, leverage optimistic concurrency control to enable multiple ingestion writers to\nthe same Hudi Table. Hudi supports ",(0,n.jsx)(i.code,{children:"file level OCC"}),", i.e., for any 2 commits (or writers) happening to the same table, if they do not have writes to overlapping files being changed, both writers are allowed to succeed.\nThis feature is currently ",(0,n.jsx)(i.em,{children:"experimental"})," and requires either Zookeeper or HiveMetastore to acquire locks."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["It may be helpful to understand the different guarantees provided by ",(0,n.jsx)(i.a,{href:"writing_data#write-operations",children:"write operations"})," via Hudi datasource or the delta streamer."]}),"\n",(0,n.jsx)(i.h2,{id:"single-writer-guarantees",children:"Single Writer Guarantees"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"UPSERT Guarantee"}),": The target table will NEVER show duplicates."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"INSERT Guarantee"}),": The target table wilL NEVER have duplicates if ",(0,n.jsx)(i.a,{href:"configurations#insert_drop_dups_opt_key",children:"dedup"})," is enabled."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"BULK_INSERT Guarantee"}),": The target table will NEVER have duplicates if ",(0,n.jsx)(i.a,{href:"configurations#insert_drop_dups_opt_key",children:"dedup"}),") is enabled."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"INCREMENTAL PULL Guarantee"}),": Data consumption and checkpoints are NEVER out of order."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"multi-writer-guarantees",children:"Multi Writer Guarantees"}),"\n",(0,n.jsx)(i.p,{children:"With multiple writers using OCC, some of the above guarantees change as follows"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"UPSERT Guarantee"}),": The target table will NEVER show duplicates."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"INSERT Guarantee"}),": The target table MIGHT have duplicates even if ",(0,n.jsx)(i.a,{href:"configurations#insert_drop_dups_opt_key",children:"dedup"}),") is enabled."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"BULK_INSERT Guarantee"}),": The target table MIGHT have duplicates even if ",(0,n.jsx)(i.a,{href:"configurations#insert_drop_dups_opt_key",children:"dedup"}),") is enabled."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"INCREMENTAL PULL Guarantee"}),": Data consumption and checkpoints MIGHT be out of order due to multiple writer jobs finishing at different times."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"enabling-multi-writing",children:"Enabling Multi Writing"}),"\n",(0,n.jsx)(i.p,{children:"The following properties are needed to be set properly to turn on optimistic concurrency control."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.cleaner.policy.failed.writes=LAZY\nhoodie.write.lock.provider=<lock-provider-classname>\n"})}),"\n",(0,n.jsx)(i.p,{children:"There are 2 different server based lock providers that require different configuration to be set."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.code,{children:"Zookeeper"})})," based lock provider"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\nhoodie.write.lock.zookeeper.url\nhoodie.write.lock.zookeeper.port\nhoodie.write.lock.zookeeper.lock_key\nhoodie.write.lock.zookeeper.base_path\n"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.code,{children:"HiveMetastore"})})," based lock provider"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.lock.provider=org.apache.hudi.hive.HiveMetastoreBasedLockProvider\nhoodie.write.lock.hivemetastore.database\nhoodie.write.lock.hivemetastore.table\n"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"The HiveMetastore URI's are picked up from the hadoop configuration file loaded during runtime."})}),"\n",(0,n.jsx)(i.h2,{id:"datasource-writer",children:"Datasource Writer"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"hudi-spark"})," module offers the DataSource API to write (and read) a Spark DataFrame into a Hudi table."]}),"\n",(0,n.jsx)(i.p,{children:"Following is an example of how to use optimistic_concurrency_control via spark datasource"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:'inputDF.write.format("hudi")\n       .options(getQuickstartWriteConfigs)\n       .option(PRECOMBINE_FIELD_OPT_KEY, "ts")\n       .option("hoodie.cleaner.policy.failed.writes", "LAZY")\n       .option("hoodie.write.concurrency.mode", "optimistic_concurrency_control")\n       .option("hoodie.write.lock.zookeeper.url", "zookeeper")\n       .option("hoodie.write.lock.zookeeper.port", "2181")\n       .option("hoodie.write.lock.zookeeper.lock_key", "test_table")\n       .option("hoodie.write.lock.zookeeper.base_path", "/test")\n       .option(RECORDKEY_FIELD_OPT_KEY, "uuid")\n       .option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath")\n       .option(TABLE_NAME, tableName)\n       .mode(Overwrite)\n       .save(basePath)\n'})}),"\n",(0,n.jsx)(i.h2,{id:"deltastreamer",children:"DeltaStreamer"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"HoodieDeltaStreamer"})," utility (part of hudi-utilities-bundle) provides ways to ingest from different sources such as DFS or Kafka, with the following capabilities."]}),"\n",(0,n.jsx)(i.p,{children:"Using optimistic_concurrency_control via delta streamer requires adding the above configs to the properties file that can be passed to the\njob. For example below, adding the configs to kafka-source.properties file and passing them to deltastreamer will enable optimistic concurrency.\nA deltastreamer job can then be triggered as follows:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"[hoodie]$ spark-submit --class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` \\\n  --props file://${PWD}/hudi-utilities/src/test/resources/delta-streamer-config/kafka-source.properties \\\n  --schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n  --source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n  --source-ordering-field impresssiontime \\\n  --target-base-path file:\\/\\/\\/tmp/hudi-deltastreamer-op \\ \n  --target-table uber.impressions \\\n  --op BULK_INSERT\n"})}),"\n",(0,n.jsx)(i.h2,{id:"best-practices-when-using-optimistic-concurrency-control",children:"Best Practices when using Optimistic Concurrency Control"}),"\n",(0,n.jsx)(i.p,{children:"Concurrent Writing to Hudi tables requires acquiring a lock with either Zookeeper or HiveMetastore. Due to several reasons you might want to configure retries to allow your application to acquire the lock."}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Network connectivity or excessive load on servers increasing time for lock acquisition resulting in timeouts"}),"\n",(0,n.jsx)(i.li,{children:"Running a large number of concurrent jobs that are writing to the same hudi table can result in contention during lock acquisition can cause timeouts"}),"\n",(0,n.jsx)(i.li,{children:"In some scenarios of conflict resolution, Hudi commit operations might take upto 10's of seconds while the lock is being held. This can result in timeouts for other jobs waiting to acquire a lock."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Set the correct native lock provider client retries. NOTE that sometimes these settings are set on the server once and all clients inherit the same configs. Please check your settings before enabling optimistic concurrency."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.lock.wait_time_ms\nhoodie.write.lock.num_retries\n"})}),"\n",(0,n.jsx)(i.p,{children:"Set the correct hudi client retries for Zookeeper & HiveMetastore. This is useful in cases when native client retry settings cannot be changed. Please note that these retries will happen in addition to any native client retries that you may have set."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.lock.client.wait_time_ms\nhoodie.write.lock.client.num_retries\n"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"Setting the right values for these depends on a case by case basis; some defaults have been provided for general cases."})}),"\n",(0,n.jsx)(i.h2,{id:"disabling-multi-writing",children:"Disabling Multi Writing"}),"\n",(0,n.jsx)(i.p,{children:"Remove the following settings that were used to enable multi-writer or override with default values."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"hoodie.write.concurrency.mode=single_writer\nhoodie.cleaner.policy.failed.writes=EAGER\n"})})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>s,x:()=>a});var t=r(96540);const n={},o=t.createContext(n);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);