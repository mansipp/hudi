"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[50570],{97334:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"quick-start-guide","title":"Spark Guide","description":"This guide provides a quick peek at Hudi\'s capabilities using spark-shell. Using Spark datasources, we will walk through","source":"@site/versioned_docs/version-0.8.0/quick-start-guide.md","sourceDirName":".","slug":"/quick-start-guide","permalink":"/docs/0.8.0/quick-start-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.8.0/quick-start-guide.md","tags":[],"version":"0.8.0","sidebarPosition":2,"frontMatter":{"title":"Spark Guide","sidebar_position":2,"toc":true,"last_modified_at":"2019-12-30T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Overview","permalink":"/docs/0.8.0/overview"},"next":{"title":"Flink Guide","permalink":"/docs/0.8.0/flink-quick-start-guide"}}');var r=t(74848),i=t(28453),s=t(11470),o=t(19365);const l={title:"Spark Guide",sidebar_position:2,toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},d=void 0,c={},h=[{value:"Setup",id:"setup",level:2},{value:"Insert data",id:"insert-data",level:2},{value:"Query data",id:"query-data",level:2},{value:"Update data",id:"update-data",level:2},{value:"Incremental query",id:"incremental-query",level:2},{value:"Structured Streaming",id:"structured-streaming",level:2},{value:"Streaming Read",id:"streaming-read",level:3},{value:"Point in time query",id:"point-in-time-query",level:2},{value:"Delete data",id:"deletes",level:2},{value:"Insert Overwrite Table",id:"insert-overwrite-table",level:2},{value:"Insert Overwrite",id:"insert-overwrite",level:2},{value:"Where to go from here?",id:"where-to-go-from-here",level:2}];function p(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:["This guide provides a quick peek at Hudi's capabilities using spark-shell. Using Spark datasources, we will walk through\ncode snippets that allows you to insert and update a Hudi table of default table type:\n",(0,r.jsx)(a.a,{href:"/docs/concepts#copy-on-write-table",children:"Copy on Write"}),".\nAfter each write operation we will also show how to read the data both snapshot and incrementally."]}),"\n",(0,r.jsx)(a.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(a.p,{children:["Hudi works with Spark-2.4.3+ & Spark 3.x versions. You can follow instructions ",(0,r.jsx)(a.a,{href:"https://spark.apache.org/downloads",children:"here"})," for setting up spark.\nFrom the extracted directory run spark-shell with Hudi as:"]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],children:[(0,r.jsx)(o.A,{value:"scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"# spark-shell for spark 3\nspark-shell \\\n  --packages org.apache.hudi:hudi-spark3-bundle_2.12:0.8.0,org.apache.spark:spark-avro_2.12:3.0.1 \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n  \n# spark-shell for spark 2 with scala 2.12\nspark-shell \\\n  --packages org.apache.hudi:hudi-spark-bundle_2.12:0.8.0,org.apache.spark:spark-avro_2.12:2.4.4 \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n  \n# spark-shell for spark 2 with scala 2.11\nspark-shell \\\n  --packages org.apache.hudi:hudi-spark-bundle_2.11:0.8.0,org.apache.spark:spark-avro_2.11:2.4.4 \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n"})})}),(0,r.jsx)(o.A,{value:"python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"# pyspark\nexport PYSPARK_PYTHON=$(which python3)\n\n# for spark3\npyspark \\\n--packages org.apache.hudi:hudi-spark3-bundle_2.12:0.8.0,org.apache.spark:spark-avro_2.12:3.0.1 \\\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n\n# for spark2 with scala 2.12\npyspark \\\n--packages org.apache.hudi:hudi-spark-bundle_2.12:0.8.0,org.apache.spark:spark-avro_2.12:2.4.4 \\\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n\n# for spark2 with scala 2.11\npyspark \\\n--packages org.apache.hudi:hudi-spark-bundle_2.11:0.8.0,org.apache.spark:spark-avro_2.11:2.4.4 \\\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n"})})})]}),"\n",(0,r.jsx)(a.admonition,{title:"Please note the following",type:"note",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"spark-avro module needs to be specified in --packages as it is not included with spark-shell by default"}),(0,r.jsx)("li",{children:"spark-avro and spark versions must match (we have used 3.0.1 for both above)"}),(0,r.jsx)("li",{children:"we have used hudi-spark-bundle built for scala 2.12 since the spark-avro module used also depends on 2.12.\nIf spark-avro_2.11 is used, correspondingly hudi-spark-bundle_2.11 needs to be used. "})]})}),"\n",(0,r.jsx)(a.p,{children:"Setup table name, base path and a data generator to generate records for this guide."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],children:[(0,r.jsx)(o.A,{value:"scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'// spark-shell\nimport org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\nval tableName = "hudi_trips_cow"\nval basePath = "file:///tmp/hudi_trips_cow"\nval dataGen = new DataGenerator\n'})})}),(0,r.jsx)(o.A,{value:"python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'# pyspark\ntableName = "hudi_trips_cow"\nbasePath = "file:///tmp/hudi_trips_cow"\ndataGen = sc._jvm.org.apache.hudi.QuickstartUtils.DataGenerator()\n'})})})]}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.p,{children:["The ",(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L50",children:"DataGenerator"}),"\ncan generate sample inserts and updates based on the the sample trip schema ",(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L57",children:"here"})]})}),"\n",(0,r.jsx)(a.h2,{id:"insert-data",children:"Insert data"}),"\n",(0,r.jsx)(a.p,{children:"Generate some new trips, load them into a DataFrame and write the DataFrame into the Hudi table as below."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],children:[(0,r.jsx)(o.A,{value:"scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'// spark-shell\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Overwrite).\n  save(basePath)\n'})})}),(0,r.jsx)(o.A,{value:"python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"# pyspark\ninserts = sc._jvm.org.apache.hudi.QuickstartUtils.convertToStringList(dataGen.generateInserts(10))\ndf = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\n\nhudi_options = {\n    'hoodie.table.name': tableName,\n    'hoodie.datasource.write.recordkey.field': 'uuid',\n    'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n    'hoodie.datasource.write.table.name': tableName,\n    'hoodie.datasource.write.operation': 'upsert',\n    'hoodie.datasource.write.precombine.field': 'ts',\n    'hoodie.upsert.shuffle.parallelism': 2,\n    'hoodie.insert.shuffle.parallelism': 2\n}\n\ndf.write.format(\"hudi\").\n    options(**hudi_options).\n    mode(\"overwrite\").\n    save(basePath)\n"})})})]}),"\n",(0,r.jsx)(a.admonition,{type:"info",children:(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"mode(Overwrite)"})," overwrites and recreates the table if it already exists.\nYou can check the data generated under ",(0,r.jsx)(a.code,{children:"/tmp/hudi_trips_cow/<region>/<country>/<city>/"}),". We provided a record key\n(",(0,r.jsx)(a.code,{children:"uuid"})," in ",(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58",children:"schema"}),"), partition field (",(0,r.jsx)(a.code,{children:"region/country/city"}),") and combine logic (",(0,r.jsx)(a.code,{children:"ts"})," in\n",(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58",children:"schema"}),") to ensure trip records are unique within each partition. For more info, refer to\n",(0,r.jsx)(a.a,{href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=113709185#FAQ-HowdoImodelthedatastoredinHudi",children:"Modeling data stored in Hudi"}),"\nand for info on ways to ingest data into Hudi, refer to ",(0,r.jsx)(a.a,{href:"/docs/writing_data",children:"Writing Hudi Tables"}),".\nHere we are using the default write operation : ",(0,r.jsx)(a.code,{children:"upsert"}),". If you have a workload without updates, you can also issue\n",(0,r.jsx)(a.code,{children:"insert"})," or ",(0,r.jsx)(a.code,{children:"bulk_insert"})," operations which could be faster. To know more, refer to ",(0,r.jsx)(a.a,{href:"writing_data#write-operations",children:"Write operations"})]})}),"\n",(0,r.jsx)(a.h2,{id:"query-data",children:"Query data"}),"\n",(0,r.jsx)(a.p,{children:"Load the data files into a DataFrame."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],children:[(0,r.jsx)(o.A,{value:"scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'// spark-shell\nval tripsSnapshotDF = spark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*")\n//load(basePath) use "/partitionKey=partitionValue" folder structure for Spark auto partition discovery\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select fare, begin_lon, begin_lat, ts from  hudi_trips_snapshot where fare > 20.0").show()\nspark.sql("select _hoodie_commit_time, _hoodie_record_key, _hoodie_partition_path, rider, driver, fare from  hudi_trips_snapshot").show()\n'})})}),(0,r.jsx)(o.A,{value:"python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'# pyspark\ntripsSnapshotDF = spark. \\\n  read. \\\n  format("hudi"). \\\n  load(basePath + "/*/*/*/*")\n# load(basePath) use "/partitionKey=partitionValue" folder structure for Spark auto partition discovery\n\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select fare, begin_lon, begin_lat, ts from  hudi_trips_snapshot where fare > 20.0").show()\nspark.sql("select _hoodie_commit_time, _hoodie_record_key, _hoodie_partition_path, rider, driver, fare from  hudi_trips_snapshot").show()\n'})})})]}),"\n",(0,r.jsx)(a.admonition,{type:"info",children:(0,r.jsxs)(a.p,{children:["This query provides snapshot querying of the ingested data. Since our partition path (",(0,r.jsx)(a.code,{children:"region/country/city"}),") is 3 levels nested\nfrom base path we ve used ",(0,r.jsx)(a.code,{children:'load(basePath + "/*/*/*/*")'}),".\nRefer to ",(0,r.jsx)(a.a,{href:"/docs/concepts#table-types--queries",children:"Table types and queries"})," for more info on all table types and query types supported."]})}),"\n",(0,r.jsx)(a.h2,{id:"update-data",children:"Update data"}),"\n",(0,r.jsx)(a.p,{children:"This is similar to inserting new data. Generate updates to existing trips using the data generator, load into a DataFrame\nand write DataFrame into the hudi table."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],children:[(0,r.jsx)(o.A,{value:"scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'// spark-shell\nval updates = convertToStringList(dataGen.generateUpdates(10))\nval df = spark.read.json(spark.sparkContext.parallelize(updates, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n'})})}),(0,r.jsx)(o.A,{value:"python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'# pyspark\nupdates = sc._jvm.org.apache.hudi.QuickstartUtils.convertToStringList(dataGen.generateUpdates(10))\ndf = spark.read.json(spark.sparkContext.parallelize(updates, 2))\ndf.write.format("hudi"). \\\n  options(**hudi_options). \\\n  mode("append"). \\\n  save(basePath)\n'})})})]}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["Notice that the save mode is now ",(0,r.jsx)(a.code,{children:"Append"}),". In general, always use append mode unless you are trying to create the table for the first time.\n",(0,r.jsx)(a.a,{href:"#query-data",children:"Querying"})," the data again will now show updated trips. Each write operation generates a new ",(0,r.jsx)(a.a,{href:"/docs/concepts",children:"commit"}),"\ndenoted by the timestamp. Look for changes in ",(0,r.jsx)(a.code,{children:"_hoodie_commit_time"}),", ",(0,r.jsx)(a.code,{children:"rider"}),", ",(0,r.jsx)(a.code,{children:"driver"})," fields for the same ",(0,r.jsx)(a.code,{children:"_hoodie_record_key"}),"s in previous commit."]})}),"\n",(0,r.jsx)(a.h2,{id:"incremental-query",children:"Incremental query"}),"\n",(0,r.jsx)(a.p,{children:"Hudi also provides capability to obtain a stream of records that changed since given commit timestamp.\nThis can be achieved using Hudi's incremental querying and providing a begin time from which changes need to be streamed.\nWe do not need to specify endTime, if we want all changes after the given commit (as is the common case)."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],children:[(0,r.jsx)(o.A,{value:"scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'// spark-shell\n// reload data\nspark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*").\n  createOrReplaceTempView("hudi_trips_snapshot")\n\nval commits = spark.sql("select distinct(_hoodie_commit_time) as commitTime from  hudi_trips_snapshot order by commitTime").map(k => k.getString(0)).take(50)\nval beginTime = commits(commits.length - 2) // commit time we are interested in\n\n// incrementally query data\nval tripsIncrementalDF = spark.read.format("hudi").\n  option(QUERY_TYPE_OPT_KEY, QUERY_TYPE_INCREMENTAL_OPT_VAL).\n  option(BEGIN_INSTANTTIME_OPT_KEY, beginTime).\n  load(basePath)\ntripsIncrementalDF.createOrReplaceTempView("hudi_trips_incremental")\n\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n'})})}),(0,r.jsx)(o.A,{value:"python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'# pyspark\n# reload data\nspark. \\\n  read. \\\n  format("hudi"). \\\n  load(basePath + "/*/*/*/*"). \\\n  createOrReplaceTempView("hudi_trips_snapshot")\n\ncommits = list(map(lambda row: row[0], spark.sql("select distinct(_hoodie_commit_time) as commitTime from  hudi_trips_snapshot order by commitTime").limit(50).collect()))\nbeginTime = commits[len(commits) - 2] # commit time we are interested in\n\n# incrementally query data\nincremental_read_options = {\n  \'hoodie.datasource.query.type\': \'incremental\',\n  \'hoodie.datasource.read.begin.instanttime\': beginTime,\n}\n\ntripsIncrementalDF = spark.read.format("hudi"). \\\n  options(**incremental_read_options). \\\n  load(basePath)\ntripsIncrementalDF.createOrReplaceTempView("hudi_trips_incremental")\n\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n'})})})]}),"\n",(0,r.jsx)(a.admonition,{type:"info",children:(0,r.jsx)(a.p,{children:"This will give all changes that happened after the beginTime commit with the filter of fare > 20.0. The unique thing about this\nfeature is that it now lets you author streaming pipelines on batch data."})}),"\n",(0,r.jsx)(a.h2,{id:"structured-streaming",children:"Structured Streaming"}),"\n",(0,r.jsx)(a.p,{children:"Hudi supports Spark Structured Streaming reads.\nStructured Streaming reads are based on Hudi Incremental Query feature, therefore streaming read can return data for which commits and base files were not yet removed by the cleaner. You can control commits retention time."}),"\n",(0,r.jsx)(a.h3,{id:"streaming-read",children:"Streaming Read"}),"\n",(0,r.jsxs)(s.A,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],children:[(0,r.jsx)(o.A,{value:"scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'// spark-shell\n// reload data\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Overwrite).\n  save(basePath)\n\n// read stream and output results to console\nspark.readStream.\n  format("hudi").\n  load(basePath).\n  writeStream.\n  format("console").\n  start()\n\n// read stream to streaming df\nval df = spark.readStream.\n        format("hudi").\n        load(basePath)\n\n'})})}),(0,r.jsx)(o.A,{value:"python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"# pyspark\n# reload data\ninserts = sc._jvm.org.apache.hudi.QuickstartUtils.convertToStringList(\n    dataGen.generateInserts(10))\ndf = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\n\nhudi_options = {\n    'hoodie.table.name': tableName,\n    'hoodie.datasource.write.recordkey.field': 'uuid',\n    'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n    'hoodie.datasource.write.table.name': tableName,\n    'hoodie.datasource.write.operation': 'upsert',\n    'hoodie.datasource.write.precombine.field': 'ts',\n    'hoodie.upsert.shuffle.parallelism': 2,\n    'hoodie.insert.shuffle.parallelism': 2\n}\n\ndf.write.format(\"hudi\"). \\\n    options(**hudi_options). \\\n    mode(\"overwrite\"). \\\n    save(basePath)\n\n# read stream to streaming df\ndf = spark.readStream \\\n    .format(\"hudi\") \\\n    .load(basePath)\n\n# read stream and output results to console\nspark.readStream \\\n    .format(\"hudi\") \\\n    .load(basePath) \\\n    .writeStream \\\n    .format(\"console\") \\\n    .start()\n\n"})})})]}),"\n",(0,r.jsx)(a.h2,{id:"point-in-time-query",children:"Point in time query"}),"\n",(0,r.jsx)(a.p,{children:'Lets look at how to query data as of a specific time. The specific time can be represented by pointing endTime to a\nspecific commit time and beginTime to "000" (denoting earliest possible commit time).'}),"\n",(0,r.jsxs)(s.A,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],children:[(0,r.jsx)(o.A,{value:"scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'// spark-shell\nval beginTime = "000" // Represents all commits > this time.\nval endTime = commits(commits.length - 2) // commit time we are interested in\n\n//incrementally query data\nval tripsPointInTimeDF = spark.read.format("hudi").\n  option(QUERY_TYPE_OPT_KEY, QUERY_TYPE_INCREMENTAL_OPT_VAL).\n  option(BEGIN_INSTANTTIME_OPT_KEY, beginTime).\n  option(END_INSTANTTIME_OPT_KEY, endTime).\n  load(basePath)\ntripsPointInTimeDF.createOrReplaceTempView("hudi_trips_point_in_time")\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from hudi_trips_point_in_time where fare > 20.0").show()\n'})})}),(0,r.jsx)(o.A,{value:"python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"# pyspark\nbeginTime = \"000\" # Represents all commits > this time.\nendTime = commits[len(commits) - 2]\n\n# query point in time data\npoint_in_time_read_options = {\n  'hoodie.datasource.query.type': 'incremental',\n  'hoodie.datasource.read.end.instanttime': endTime,\n  'hoodie.datasource.read.begin.instanttime': beginTime\n}\n\ntripsPointInTimeDF = spark.read.format(\"hudi\"). \\\n  options(**point_in_time_read_options). \\\n  load(basePath)\n\ntripsPointInTimeDF.createOrReplaceTempView(\"hudi_trips_point_in_time\")\nspark.sql(\"select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from hudi_trips_point_in_time where fare > 20.0\").show()\n"})})})]}),"\n",(0,r.jsx)(a.h2,{id:"deletes",children:"Delete data"}),"\n",(0,r.jsx)(a.p,{children:"Delete records for the HoodieKeys passed in."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],children:[(0,r.jsx)(o.A,{value:"scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'// spark-shell\n// fetch total records count\nspark.sql("select uuid, partitionpath from hudi_trips_snapshot").count()\n// fetch two records to be deleted\nval ds = spark.sql("select uuid, partitionpath from hudi_trips_snapshot").limit(2)\n\n// issue deletes\nval deletes = dataGen.generateDeletes(ds.collectAsList())\nval df = spark.read.json(spark.sparkContext.parallelize(deletes, 2))\n\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(OPERATION_OPT_KEY,"delete").\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n\n// run the same read query as above.\nval roAfterDeleteViewDF = spark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*")\n\nroAfterDeleteViewDF.registerTempTable("hudi_trips_snapshot")\n// fetch should return (total - 2) records\nspark.sql("select uuid, partitionpath from hudi_trips_snapshot").count()\n'})})}),(0,r.jsx)(o.A,{value:"python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"# pyspark\n# fetch total records count\nspark.sql(\"select uuid, partitionpath from hudi_trips_snapshot\").count()\n# fetch two records to be deleted\nds = spark.sql(\"select uuid, partitionpath from hudi_trips_snapshot\").limit(2)\n\n# issue deletes\nhudi_delete_options = {\n  'hoodie.table.name': tableName,\n  'hoodie.datasource.write.recordkey.field': 'uuid',\n  'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n  'hoodie.datasource.write.table.name': tableName,\n  'hoodie.datasource.write.operation': 'delete',\n  'hoodie.datasource.write.precombine.field': 'ts',\n  'hoodie.upsert.shuffle.parallelism': 2, \n  'hoodie.insert.shuffle.parallelism': 2\n}\n\nfrom pyspark.sql.functions import lit\ndeletes = list(map(lambda row: (row[0], row[1]), ds.collect()))\ndf = spark.sparkContext.parallelize(deletes).toDF(['uuid', 'partitionpath']).withColumn('ts', lit(0.0))\ndf.write.format(\"hudi\"). \\\n  options(**hudi_delete_options). \\\n  mode(\"append\"). \\\n  save(basePath)\n\n# run the same read query as above.\nroAfterDeleteViewDF = spark. \\\n  read. \\\n  format(\"hudi\"). \\\n  load(basePath + \"/*/*/*/*\") \nroAfterDeleteViewDF.registerTempTable(\"hudi_trips_snapshot\")\n# fetch should return (total - 2) records\nspark.sql(\"select uuid, partitionpath from hudi_trips_snapshot\").count()\n"})})})]}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["Only ",(0,r.jsx)(a.code,{children:"Append"})," mode is supported for delete operation."]})}),"\n",(0,r.jsxs)(a.p,{children:["See the ",(0,r.jsx)(a.a,{href:"/docs/writing_data#deletes",children:"deletion section"})," of the writing data page for more details."]}),"\n",(0,r.jsx)(a.h2,{id:"insert-overwrite-table",children:"Insert Overwrite Table"}),"\n",(0,r.jsxs)(a.p,{children:["Generate some new trips, overwrite the table logically at the Hudi metadata level. The Hudi cleaner will eventually\nclean up the previous table snapshot's file groups. This can be faster than deleting the older table and recreating\nin ",(0,r.jsx)(a.code,{children:"Overwrite"})," mode."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'// spark-shell\nspark.\n  read.format("hudi").\n  load(basePath + "/*/*/*/*").\n  select("uuid","partitionpath").\n  show(10, false)\n\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(OPERATION_OPT_KEY,"insert_overwrite_table").\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n\n// Should have different keys now, from query before.\nspark.\n  read.format("hudi").\n  load(basePath + "/*/*/*/*").\n  select("uuid","partitionpath").\n  show(10, false)\n\n'})}),"\n",(0,r.jsx)(a.h2,{id:"insert-overwrite",children:"Insert Overwrite"}),"\n",(0,r.jsxs)(a.p,{children:["Generate some new trips, overwrite the all the partitions that are present in the input. This operation can be faster\nthan ",(0,r.jsx)(a.code,{children:"upsert"})," for batch ETL jobs, that are recomputing entire target partitions at once (as opposed to incrementally\nupdating the target tables). This is because, we are able to bypass indexing, precombining and other repartitioning\nsteps in the upsert write path completely."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'// spark-shell\nspark.\n  read.format("hudi").\n  load(basePath + "/*/*/*/*").\n  select("uuid","partitionpath").\n  sort("partitionpath","uuid").\n  show(100, false)\n\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.\n  read.json(spark.sparkContext.parallelize(inserts, 2)).\n  filter("partitionpath = \'americas/united_states/san_francisco\'")\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(OPERATION_OPT_KEY,"insert_overwrite").\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n\n// Should have different keys now for San Francisco alone, from query before.\nspark.\n  read.format("hudi").\n  load(basePath + "/*/*/*/*").\n  select("uuid","partitionpath").\n  sort("partitionpath","uuid").\n  show(100, false)\n'})}),"\n",(0,r.jsx)(a.h2,{id:"where-to-go-from-here",children:"Where to go from here?"}),"\n",(0,r.jsxs)(a.p,{children:["You can also do the quickstart by ",(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi#building-apache-hudi-from-source",children:"building hudi yourself"}),",\nand using ",(0,r.jsx)(a.code,{children:"--jars <path to hudi_code>/packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.1?-*.*.*-SNAPSHOT.jar"})," in the spark-shell command above\ninstead of ",(0,r.jsx)(a.code,{children:"--packages org.apache.hudi:hudi-spark3-bundle_2.12:0.8.0"}),". Hudi also supports scala 2.12. Refer ",(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi#build-with-scala-212",children:"build with scala 2.12"}),"\nfor more info."]}),"\n",(0,r.jsxs)(a.p,{children:["Also, we used Spark here to show case the capabilities of Hudi. However, Hudi can support multiple table types/query types and\nHudi tables can be queried from query engines like Hive, Spark, Presto and much more. We have put together a\n",(0,r.jsx)(a.a,{href:"https://www.youtube.com/watch?v=VhNgUsxdrD0",children:"demo video"})," that show cases all of this on a docker based setup with all\ndependent systems running locally. We recommend you replicate the same setup and run the demo yourself, by following\nsteps ",(0,r.jsx)(a.a,{href:"/docs/docker_demo",children:"here"})," to get a taste for it. Also, if you are looking for ways to migrate your existing data\nto Hudi, refer to ",(0,r.jsx)(a.a,{href:"/docs/migration_guide",children:"migration guide"}),"."]})]})}function u(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,a,t)=>{t.d(a,{A:()=>s});t(96540);var n=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:a,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:t,children:a})}},11470:(e,a,t)=>{t.d(a,{A:()=>y});var n=t(96540),r=t(34164),i=t(23104),s=t(56347),o=t(205),l=t(57485),d=t(31682),c=t(70679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return h(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,d.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function u(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(r.location.search);a.set(i,e),r.replace({...r.location,search:a.toString()})}),[i,r])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,i=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[d,h]=m({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,i]=(0,c.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),_=(()=>{const e=d??f;return u({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{_&&l(_)}),[_]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=t(92303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function v(e){let{className:a,block:t,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const a=e.currentTarget,t=l.indexOf(a),r=o[t].value;r!==n&&(d(a),s(r))},h=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;a=l[t]??l[l.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a),children:o.map((e=>{let{value:a,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>l.push(e),onKeyDown:h,onClick:c,...i,className:(0,r.A)("tabs__item",_.tabItem,i?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function k(e){let{lazy:a,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function w(e){const a=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",_.tabList),children:[(0,b.jsx)(v,{...a,...e}),(0,b.jsx)(k,{...a,...e})]})}function y(e){const a=(0,g.A)();return(0,b.jsx)(w,{...e,children:h(e.children)},String(a))}},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>o});var n=t(96540);const r={},i=n.createContext(r);function s(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);