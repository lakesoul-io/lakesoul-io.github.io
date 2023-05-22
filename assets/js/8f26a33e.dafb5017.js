"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[511],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8678:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i="Incremental Query Function Tutorial",s={unversionedId:"Tutorials/incremental-query",id:"Tutorials/incremental-query",title:"Incremental Query Function Tutorial",description:"LakeSoul provides a timestamp-based incremental query API to facilitate users to obtain data streams added after a given timestamp. Users can query the incremental data within this time range by specifying the start timestamp and the end timestamp. If the end timestamp is not specified, the incremental data from the start time to the current latest time will be queried.",source:"@site/docs/02-Tutorials/08-incremental-query.md",sourceDirName:"02-Tutorials",slug:"/Tutorials/incremental-query",permalink:"/docs/Tutorials/incremental-query",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/02-Tutorials/08-incremental-query.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multiple Kafka Topics Data to LakeSoul Tutorial",permalink:"/docs/Tutorials/kafka-topics-data-to-lakesoul"},next:{title:"Setup LakeSoul Meta DB",permalink:"/docs/Usage Docs/setup-meta-env"}},l={},p=[{value:"Incremental Read",id:"incremental-read",level:2},{value:"Streaming Read",id:"streaming-read",level:2},{value:"Python Interface Tutorial",id:"python-interface-tutorial",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"incremental-query-function-tutorial"},"Incremental Query Function Tutorial"),(0,r.kt)("p",null,"LakeSoul provides a timestamp-based incremental query API to facilitate users to obtain data streams added after a given timestamp. Users can query the incremental data within this time range by specifying the start timestamp and the end timestamp. If the end timestamp is not specified, the incremental data from the start time to the current latest time will be queried."),(0,r.kt)("p",null,"LakeSoul supports a total of four commit operations: mergeCommit; appendCommit; compactCommit; updateCommit. For update operations, it is difficult to obtain incremental files because historical data is merged and new files are generated each time, so incremental queries are not supported."),(0,r.kt)("p",null,"Optional parameters and their meanings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'// 1. Partition information\noption(LakeSoulOptions.PARTITION_DESC, "range=range1")\noption(LakeSoulOptions. HASH_PARTITIONS, "hash")\noption(LakeSoulOptions. HASH_BUCKET_NUM, "2")\n// If no partition information is specified, incremental query will be performed for all partitions by default, if there is no range, hash must be specified\n// 2. Start and end timestamps\noption(LakeSoulOptions. READ_START_TIME, "2022-01-01 15:15:15")\noption(LakeSoulOptions. READ_END_TIME, "2022-01-01 20:15:15")\n// 3. Time zone information\noption(LakeSoulOptions.TIME_ZONE,"Asia/Sahanghai")\n// If the time zone information of the timestamp is not specified, it will be processed according to the user\'s local time zone by default\n4. Read type\noption(LakeSoulOptions. READ_TYPE, "incremental")\n// You can specify incremental read "incremental", snapshot read "snapshot", and do not specify the default full read.\n')),(0,r.kt)("h2",{id:"incremental-read"},"Incremental Read"),(0,r.kt)("p",null,"LakeSoul supports incremental read for both upsert-only table and CDC table. There are two ways. One is to query by calling the LakeSoulTable.forPath() function, and the other is to perform incremental reads by specifying options in ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.read")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.readStream"),". You can get Incremental data of the specified partition within the start and end time range, and the time interval of the acquired incremental data is closed before and opened after."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport org.apache.spark.sql._\nval spark = SparkSession.builder.master("local")\n   .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n   .getOrCreate()\n\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\n// Incremental read for a given range and timestamp, incremental means incremental read type\n// For example, read the incremental data of the range1 partition in the time range from 2023-01-01 15:15:00 to 2023-01-01 15:20:00 based on the Shanghai time zone\n// The first way is to perform incremental reading through forPathIncremental, if you do not specify a partition, enter "", if you do not enter a time zone parameter, the local system time zone is used by default\nval lake1 = LakeSoulTable.forPathIncremental(tablePath, "range=range1", "2023-01-01 15:15:00", "2023-01-01 15:20:00", "Asia/Shanghai")\n\n// The second way is to perform incremental reading by specifying the option of spark.read\nval lake2 = spark.read.format("lakesoul")\n   .option(LakeSoulOptions.PARTITION_DESC, "range=range1")\n   .option(LakeSoulOptions.READ_START_TIME, "2023-01-01 15:15:00")\n   .option(LakeSoulOptions.READ_END_TIME, "2023-01-01 15:20:00")\n   .option(LakeSoulOptions.TIME_ZONE,"Asia/Shanghai")\n   .option(LakeSoulOptions.READ_TYPE, "incremental")\n   .load(tablePath)\n')),(0,r.kt)("h2",{id:"streaming-read"},"Streaming Read"),(0,r.kt)("p",null,"LakeSoul supports Spark Structured Streaming read. Streaming read is based on incremental query. Through spark.readStream specified options for streaming read, you can obtain the incremental data updated in each batch under the specified partition in the real-time data stream. The specified start time needs to be earlier than the ingestion time of the real-time data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport org.apache.spark.sql._\nval spark = SparkSession. builder. master("local")\n   .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n   .getOrCreate()\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\n\n// Use spark.readStream to specify options for streaming reading, read the incremental data of the range1 partition at 2023-01-01 15:00:00 and later based on the Shanghai time zone, trigger a read every 1 second, and save the results output to the console\nspark.readStream.format("lakesoul")\n   .option(LakeSoulOptions.PARTITION_DESC, "range=range1")\n   .option(LakeSoulOptions.READ_START_TIME, "2022-01-01 15:00:00")\n   .option(LakeSoulOptions.TIME_ZONE,"Asia/Shanghai")\n   .option(LakeSoulOptions.READ_TYPE, "incremental")\n   .load(tablePath)\n   .writeStream.format("console")\n   .trigger(Trigger.ProcessingTime(1000))\n   .start()\n   .awaitTermination()\n')),(0,r.kt)("h2",{id:"python-interface-tutorial"},"Python Interface Tutorial"),(0,r.kt)("p",null,"First put LakeSoul/python/lakesoul folder into ",(0,r.kt)("inlineCode",{parentName:"p"},"$SPARK_HOME/python/pyspark"),", which provides the pyspark.lakesoul module to with the python API of snapshot reading, incremental reading and streaming reading. Then execute in the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export PYTHONPATH=$SPARK_HOME/python:$PYTHONPATH\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Run pyspark tests using spark 3.3.x version\nfrom pyspark.lakesoul.tables import LakeSoulTable\nfrom pyspark.sql import SparkSession\n\nspark = SparkSession.builder \\\n     .appName("Stream Test") \\\n     .master(\'local[4]\') \\\n     .config("spark.ui.enabled", "false") \\\n     .config("spark.sql.shuffle.partitions", "5") \\\n     .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\\\n     .config("spark.sql.catalog.lakesoul", "org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog") \\\n     .config("spark.sql.defaultCatalog", "lakesoul") \\\n     .config("spark.sql.warehouse.dir", "/tmp/testPyspark") \\\n     .getOrCreate()\ntablePath = "s3a://bucket-name/table/path/is/also/table/name"\n    \ndf = spark.createDataFrame([(\'hash1\', 11),(\'hash2\', 44),(\'hash3\', 55)],["key","value"])\n# upsert requires that hashPartition must be specified, and rangePartition may not be specified\ndf.write.format("lakesoul")\n     .mode("append")\n     .option("hashPartitions", "key")\n     .option("hashBucketNum", "2")\n     .option("shortTableName", "tt")\n     .save(tablePath)\nlake = LakeSoulTable.forPath(spark, tablePath)\ndf_upsert = spark.createDataFrame([(\'hash5\', 100)],["key","value"])\n# Generate incremental data through upsert for testing\nlake.upsert(df_upsert)\n\n\n#Two methods of snapshot reading, if forPathSnapshot omits the input time zone parameter, the local system time zone is used by default\nlake = spark.read.format("lakesoul")\n     .option("readendtime", "2023-02-28 14:45:00")\n     .option("readtype", "snapshot")\n     .load(tablePath)\nlake = LakeSoulTable.forPathSnapshot(spark,tablePath,"","2023-02-28 14:45:00","Asia/Shanghai")\n\n#Two methods of incremental reading, if forPathIncremental omits the input time zone parameter, the local system time zone is used by default\nlake = spark.read.format("lakesoul")\n     .option("readstarttime", "2023-02-28 14:45:00")\n     .option("readendtime", "2023-02-28 14:50:00")\n     .option("timezone","Asia/Shanghai")\n     .option("readtype", "incremental")\n     .load(tablePath)\nlake = LakeSoulTable.forPathIncremental(spark,tablePath,"","2023-02-28 14:45:00","2023-02-28 14:50:00","Asia/Shanghai")\n\n#Streaming reading, you need to open two pyspark windows, one for modifying data to generate multi-version data, and one for performing streaming reading\nspark.readStream.format("lakesoul")\n     .option(\n')))}c.isMDXComponent=!0}}]);