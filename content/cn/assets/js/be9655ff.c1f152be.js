"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[323],{22060:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>l});var n=t(68445),o=t(74848),i=t(28453),s=t(54892);const r={title:"Change Data Capture with Debezium and Apache Hudi",excerpt:"A review of new Debezium source connector for Apache Hudi",author:"Rajesh Mahindra",category:"blog",image:"/assets/images/blog/debezium.png",tags:["design","deltastreamer","cdc","change data capture","apache hudi"]},c=void 0,d={authorsImageUrls:[void 0]},l=[{value:"Background",id:"background",level:2},{value:"Design Overview",id:"design-overview",level:2},{value:"Apache Hudi Configurations",id:"apache-hudi-configurations",level:2},{value:"Bootstrapping Existing tables",id:"bootstrapping-existing-tables",level:3},{value:"Example Implementation",id:"example-implementation",level:3},{value:"Database",id:"database",level:3},{value:"Debezium Connector",id:"debezium-connector",level:3},{value:"Hudi Deltastreamer",id:"hudi-deltastreamer",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:["As of Hudi v0.10.0, we are excited to announce the availability of ",(0,o.jsx)(a.a,{href:"https://debezium.io/",children:"Debezium"})," sources for ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/hoodie_streaming_ingestion",children:"Deltastreamer"})," that provide the ingestion of change capture data (CDC) from Postgres and Mysql databases to your data lake. For more details, please refer to the original ",(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-39/rfc-39.md",children:"RFC"}),"."]}),"\n",(0,o.jsx)(a.h2,{id:"background",children:"Background"}),"\n",(0,o.jsx)("img",{src:"/assets/images/blog/data-network.png",alt:"drawing",width:"600"}),"\n",(0,o.jsxs)(a.p,{children:["When you want to perform analytics on data from transactional databases like Postgres or Mysql you typically need to bring this data into an OLAP system such as a data warehouse or a data lake through a process called ",(0,o.jsx)(a.a,{href:"https://debezium.io/documentation/faq/#what_is_change_data_capture",children:"Change Data Capture"})," (CDC). Debezium is a popular tool that makes CDC easy. It provides a way to capture row-level changes in your databases by ",(0,o.jsx)(a.a,{href:"https://debezium.io/blog/2018/07/19/advantages-of-log-based-change-data-capture/",children:"reading changelogs"}),". By doing so, Debezium avoids increased CPU load on your database and ensures you capture all changes including deletes."]}),"\n",(0,o.jsxs)(a.p,{children:["Now that ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/overview/",children:"Apache Hudi"})," offers a Debezium source connector, CDC ingestion into a data lake is easier than ever with some ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/use_cases",children:"unique differentiated capabilities"}),". Hudi enables efficient update, merge, and delete transactions on a data lake. Hudi uniquely provides ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/table_types#merge-on-read-table",children:"Merge-On-Read"})," writers which unlock ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/big-data/how-amazon-transportation-service-enabled-near-real-time-event-analytics-at-petabyte-scale-using-aws-glue-with-apache-hudi/",children:"significantly lower latency"})," ingestion than typical data lake writers with Spark or Flink. Last but not least, Apache Hudi offers ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/querying_data#spark-incr-query",children:"incremental queries"})," so after capturing changes from your database, you can incrementally process these changes downstream throughout all of your subsequent ETL pipelines."]}),"\n",(0,o.jsx)(a.h2,{id:"design-overview",children:"Design Overview"}),"\n",(0,o.jsx)("img",{src:"/assets/images/blog/debezium.png",alt:"drawing",width:"600"}),"\n",(0,o.jsx)(a.p,{children:"The architecture for an end-to-end CDC ingestion flow with Apache Hudi is shown above. The first component is the Debezium deployment, which consists of a Kafka cluster, schema registry (Confluent or Apicurio), and the Debezium connector. The Debezium connector continuously polls the changelogs from the database and writes an AVRO message with the changes for each database row to a dedicated Kafka topic per table."}),"\n",(0,o.jsxs)(a.p,{children:["The second component is ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/hoodie_streaming_ingestion",children:"Hudi Deltastreamer"})," that reads and processes the incoming Debezium records from Kafka for each table and writes (updates) the corresponding rows in a Hudi table on your cloud storage."]}),"\n",(0,o.jsxs)(a.p,{children:["To ingest the data from the database table into a Hudi table in near real-time, we implement two classes that can be plugged into the Deltastreamer. Firstly, we implemented a ",(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/83f8ed2ae3ba7fb20813cbb8768deae6244b020c/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/debezium/DebeziumSource.java",children:"Debezium source"}),". With Deltastreamer running in continuous mode, the source continuously reads and processes the Debezium change records in Avro format from the Kafka topic for a given table, and writes the updated record to the destination Hudi table. In addition to the columns from the database table, we also ingest some meta fields that are added by Debezium in the target Hudi table. The meta fields help us correctly merge updates and delete records. The records are read using the latest schema from the ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/hoodie_streaming_ingestion#schema-providers",children:"Schema Registry"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["Secondly, we implement a custom ",(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/83f8ed2ae3ba7fb20813cbb8768deae6244b020c/hudi-common/src/main/java/org/apache/hudi/common/model/debezium/AbstractDebeziumAvroPayload.java",children:"Debezium Payload"})," that essentially governs how Hudi records are merged when the same row is updated or deleted. When a new Hudi record is received for an existing row, the payload picks the latest record using the higher value of the appropriate column (FILEID and POS fields in MySql and LSN fields in Postgres). In the case that the latter event is a delete record, the payload implementation ensures that the record is hard deleted from the storage. Delete records are identified using the op field, which has a value of ",(0,o.jsx)(a.strong,{children:"d"})," for deletes."]}),"\n",(0,o.jsx)(a.h2,{id:"apache-hudi-configurations",children:"Apache Hudi Configurations"}),"\n",(0,o.jsx)(a.p,{children:"It is important to consider the following configurations of your Hudi deployments when using the Debezium source connector for CDC ingestion."}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Record Keys -"})," The Hudi ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/next/indexing",children:"record key(s)"})," for a table should be set as the Primary keys of the table in the upstream database. This ensures that updates are applied correctly as record key(s) uniquely identify a row in the Hudi table."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Source Ordering Fields"})," -\xa0 For de-duplication of changelog records the source ordering field should be set to the actual position of the change event as it happened on the database. For instance, we use the FILEID and POS fields in MySql and LSN fields in Postgres databases respectively to ensure records are processed in the correct order of occurrence in the original database."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Partition Fields"})," - Don\u2019t feel restricted to matching the partitioning of your Hudi tables with the same partition fields as the upstream database. You can set partition fields independently for the Hudi table as needed."]}),"\n"]}),"\n",(0,o.jsx)(a.h3,{id:"bootstrapping-existing-tables",children:"Bootstrapping Existing tables"}),"\n",(0,o.jsx)(a.p,{children:"One important use case might be when CDC ingestion has to be done for existing database tables. There are two ways we can ingest existing database data prior to streaming the changes:"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsx)(a.li,{children:"By default on initialization, Debezium performs an initial consistent snapshot of the database (controlled by config snapshot.mode). After the initial snapshot, it continues streaming updates from the correct position to avoid loss of data."}),"\n",(0,o.jsxs)(a.li,{children:["While the first approach is simple, for large tables it may take a long time for Debezium to bootstrap the initial snapshot. Alternatively, we could run a Deltastreamer job to bootstrap the table directly from the database using the ",(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/master/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/JdbcSource.java",children:"JDBC source"}),". This provides more flexibility to the users in defining and executing more optimized SQL queries required to bootstrap the database table. Once the bootstrap job finishes successfully, another Deltastreamer job is executed that processes the database changelogs from Debezium. Users will have to use ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/hoodie_streaming_ingestion/#checkpointing",children:"checkpointing"})," in Deltastreamer to ensure the second job starts processing the changelogs from the correct position to avoid data loss."]}),"\n"]}),"\n",(0,o.jsx)(a.h3,{id:"example-implementation",children:"Example Implementation"}),"\n",(0,o.jsx)(a.p,{children:"The following describes steps to implement an end-to-end CDC pipeline using an AWS RDS instance of Postgres, Kubernetes-based Debezium deployment, and Hudi Deltastreamer running on a spark cluster."}),"\n",(0,o.jsx)(a.h3,{id:"database",children:"Database"}),"\n",(0,o.jsx)(a.p,{children:"A few configuration changes are required for the RDS instance to enable logical replication."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-roomsql",children:"SET rds.logical_replication to 1 (instead of 0)\n\npsql --host=<aws_rds_instance> --port=5432 --username=postgres --password -d <database_name>;\n\nCREATE PUBLICATION <publication_name> FOR TABLE schema1.table1, schema1.table2;\n\nALTER TABLE schema1.table1 REPLICA IDENTITY FULL;\n"})}),"\n",(0,o.jsx)(a.h3,{id:"debezium-connector",children:"Debezium Connector"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"https://strimzi.io/blog/2020/01/27/deploying-debezium-with-kafkaconnector-resource/",children:"Strimzi"})," is the recommended option to deploy and manage Kafka connectors on Kubernetes clusters. Alternatively, you have the option to use the Confluent managed ",(0,o.jsx)(a.a,{href:"https://docs.confluent.io/debezium-connect-postgres-source/current/overview.html",children:"Debezium connector"}),"."]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{children:"kubectl create namespace kafka\nkubectl create -f https://strimzi.io/install/latest?namespace=kafka -n kafka\nkubectl -n kafka apply -f kafka-connector.yaml\n"})}),"\n",(0,o.jsx)(a.p,{children:"An example for kafka-connector.yaml is shown below:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-yaml",children:'apiVersion: kafka.strimzi.io/v1beta2\nkind: KafkaConnect\nmetadata:\nname: debezium-kafka-connect\nannotations:\nstrimzi.io/use-connector-resources: "false"\nspec:\nimage: debezium-kafka-connect:latest\nreplicas: 1\nbootstrapServers: localhost:9092\nconfig:\nconfig.storage.replication.factor: 1\noffset.storage.replication.factor: 1\nstatus.storage.replication.factor: 1\n'})}),"\n",(0,o.jsx)(a.p,{children:"The docker image debezium-kafka-connect can be built using the following Dockerfile that includes the Postgres Debezium Connector."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-yaml",children:"FROM confluentinc/cp-kafka-connect:6.2.0 as cp\nRUN confluent-hub install --no-prompt confluentinc/kafka-connect-avro-converter:6.2.0\nFROM strimzi/kafka:0.18.0-kafka-2.5.0\nUSER root:root\nRUN yum -y update\nRUN yum -y install git\nRUN yum -y install wget\n\nRUN wget https://repo1.maven.org/maven2/io/debezium/debezium-connector-postgres/1.6.1.Final/debezium-connector-postgres-1.6.1.Final-plugin.tar.gz\nRUN tar xzf debezium-connector-postgres-1.6.1.Final-plugin.tar.gz\n\nRUN mkdir -p /opt/kafka/plugins/debezium && mkdir -p /opt/kafka/plugins/avro/\nRUN mv debezium-connector-postgres /opt/kafka/plugins/debezium/\nCOPY --from=cp /usr/share/confluent-hub-components/confluentinc-kafka-connect-avro-converter/lib /opt/kafka/plugins/avro/\nUSER 1001\n"})}),"\n",(0,o.jsx)(a.p,{children:"Once the Strimzi operator and the Kafka connect are deployed, we can start the Debezium connector."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{children:'curl -X POST -H "Content-Type:application/json" -d @connect-source.json http://localhost:8083/connectors/\n'})}),"\n",(0,o.jsx)(a.p,{children:"The following is an example of a configuration to setup Debezium connector for generating the changelogs for two tables, table1, and table2."}),"\n",(0,o.jsx)(a.p,{children:"Contents of connect-source.json:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-json",children:'{\n  "name": "postgres-debezium-connector",\n  "config": {\n    "connector.class": "io.debezium.connector.postgresql.PostgresConnector",\n    "database.hostname": "localhost",\n    "database.port": "5432",\n    "database.user": "postgres",\n    "database.password": "postgres",\n    "database.dbname": "database",\n    "plugin.name": "pgoutput",\n    "database.server.name": "postgres",\n    "table.include.list": "schema1.table1,schema1.table2",\n    "publication.autocreate.mode": "filtered",\n    "tombstones.on.delete":"false",\n    "key.converter": "io.confluent.connect.avro.AvroConverter",\n    "key.converter.schema.registry.url": "<schema_registry_host>",\n    "value.converter": "io.confluent.connect.avro.AvroConverter",\n    "value.converter.schema.registry.url": "<schema_registry_host>",\n    "slot.name": "pgslot"\n  }\n}\n'})}),"\n",(0,o.jsx)(a.h3,{id:"hudi-deltastreamer",children:"Hudi Deltastreamer"}),"\n",(0,o.jsx)(a.p,{children:"Next, we run the Hudi Deltastreamer using spark that will ingest the Debezium changelogs from kafka and write them as a Hudi table. One such instance of the command is shown below that works for Postgres database.\xa0 A few key configurations are as follows:"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsx)(a.li,{children:"Set the source class to PostgresDebeziumSource."}),"\n",(0,o.jsx)(a.li,{children:"Set the payload class to PostgresDebeziumAvroPayload."}),"\n",(0,o.jsx)(a.li,{children:"Configure the schema registry URLs for Debezium Source and Kafka Source."}),"\n",(0,o.jsx)(a.li,{children:"Set the record key(s) as the primary key(s) of the database table."}),"\n",(0,o.jsx)(a.li,{children:"Set the source ordering field (dedup) to _event_lsn"}),"\n"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-scala",children:'spark-submit \\\\\n  --jars "/home/hadoop/hudi-utilities-bundle_2.12-0.10.0.jar,/usr/lib/spark/external/lib/spark-avro.jar" \\\\\n  --master yarn --deploy-mode client \\\\\n  --class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer /home/hadoop/hudi-packages/hudi-utilities-bundle_2.12-0.10.0-SNAPSHOT.jar \\\\\n  --table-type COPY_ON_WRITE --op UPSERT \\\\\n  --target-base-path s3://bucket_name/path/for/hudi_table1 \\\\\n  --target-table hudi_table1\xa0 --continuous \\\\\n  --min-sync-interval-seconds 60 \\\\\n  --source-class org.apache.hudi.utilities.sources.debezium.PostgresDebeziumSource \\\\\n  --source-ordering-field _event_lsn \\\\\n  --payload-class org.apache.hudi.common.model.debezium.PostgresDebeziumAvroPayload \\\\\n  --hoodie-conf schema.registry.url=https://localhost:8081 \\\\\n  --hoodie-conf hoodie.deltastreamer.schemaprovider.registry.url=https://localhost:8081/subjects/postgres.schema1.table1-value/versions/latest \\\\\n  --hoodie-conf hoodie.deltastreamer.source.kafka.value.deserializer.class=io.confluent.kafka.serializers.KafkaAvroDeserializer \\\\\n  --hoodie-conf hoodie.deltastreamer.source.kafka.topic=postgres.schema1.table1 \\\\\n  --hoodie-conf auto.offset.reset=earliest \\\\\n  --hoodie-conf hoodie.datasource.write.recordkey.field=\u201ddatabase_primary_key\u201d \\\\\n  --hoodie-conf hoodie.datasource.write.partitionpath.field=partition_key \\\\\n  --enable-hive-sync \\\\\n  --hoodie-conf hoodie.datasource.hive_sync.partition_extractor_class=org.apache.hudi.hive.MultiPartKeysValueExtractor \\\\\n  --hoodie-conf hoodie.datasource.write.hive_style_partitioning=true \\\\\n  --hoodie-conf hoodie.datasource.hive_sync.database=default \\\\\n  --hoodie-conf hoodie.datasource.hive_sync.table=hudi_table1 \\\\\n  --hoodie-conf hoodie.datasource.hive_sync.partition_fields=partition_key\n'})}),"\n",(0,o.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(a.p,{children:"This post introduced the Debezium Source for Hudi Deltastreamer to ingest Debezium changelogs into Hudi tables. Database data can now be ingested into data lakes to provide a cost-effective way to store and analyze database data."}),"\n",(0,o.jsxs)(a.p,{children:["Please follow this ",(0,o.jsx)(a.a,{href:"https://issues.apache.org/jira/browse/HUDI-1290",children:"JIRA"})," to learn more about active development on this new feature. I look forward to more contributions and feedback from the community. Come join our ",(0,o.jsx)(s.A,{title:"Hudi Slack"})," channel or attend one of our ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/community/syncs",children:"community events"})," to learn more."]})]})}function u(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},54892:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(40797),o=t(74848);const i=e=>{let{title:a,isItalic:t}=e;const{siteConfig:i}=(0,n.A)(),{slackUrl:s}=i.customFields;return(0,o.jsx)("a",{href:s,style:{fontStyle:t?"italic":"normal"},target:"_blank",rel:"noopener noreferrer",children:a})}},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>r});var n=t(96540);const o={},i=n.createContext(o);function s(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:a},e.children)}},68445:e=>{e.exports=JSON.parse('{"permalink":"/cn/blog/2022/01/14/change-data-capture-with-debezium-and-apache-hudi","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2022-01-14-change-data-capture-with-debezium-and-apache-hudi.mdx","source":"@site/blog/2022-01-14-change-data-capture-with-debezium-and-apache-hudi.mdx","title":"Change Data Capture with Debezium and Apache Hudi","description":"As of Hudi v0.10.0, we are excited to announce the availability of Debezium sources for Deltastreamer that provide the ingestion of change capture data (CDC) from Postgres and Mysql databases to your data lake. For more details, please refer to the original RFC.","date":"2022-01-14T00:00:00.000Z","tags":[{"inline":true,"label":"design","permalink":"/cn/blog/tags/design"},{"inline":true,"label":"deltastreamer","permalink":"/cn/blog/tags/deltastreamer"},{"inline":true,"label":"cdc","permalink":"/cn/blog/tags/cdc"},{"inline":true,"label":"change data capture","permalink":"/cn/blog/tags/change-data-capture"},{"inline":true,"label":"apache hudi","permalink":"/cn/blog/tags/apache-hudi"}],"readingTime":7.31,"hasTruncateMarker":true,"authors":[{"name":"Rajesh Mahindra","key":null,"page":null}],"frontMatter":{"title":"Change Data Capture with Debezium and Apache Hudi","excerpt":"A review of new Debezium source connector for Apache Hudi","author":"Rajesh Mahindra","category":"blog","image":"/assets/images/blog/debezium.png","tags":["design","deltastreamer","cdc","change data capture","apache hudi"]},"unlisted":false,"prevItem":{"title":"Why and How I Integrated Airbyte and Apache Hudi","permalink":"/cn/blog/2022/01/18/Why-and-How-I-Integrated-Airbyte-and-Apache-Hudi"},"nextItem":{"title":"Apache Hudi - 2021 a Year in Review","permalink":"/cn/blog/2022/01/06/apache-hudi-2021-a-year-in-review"}}')}}]);