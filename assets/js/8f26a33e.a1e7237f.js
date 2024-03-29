"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[1511],{3210:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(5893),r=t(1151);const o={},i="Incremental Query Function Tutorial",s={id:"Tutorials/incremental-query",title:"Incremental Query Function Tutorial",description:"\x3c!--",source:"@site/docs/02-Tutorials/08-incremental-query.md",sourceDirName:"02-Tutorials",slug:"/Tutorials/incremental-query",permalink:"/docs/Tutorials/incremental-query",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/02-Tutorials/08-incremental-query.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multiple Kafka Topics Data to LakeSoul Tutorial",permalink:"/docs/Tutorials/kafka-topics-data-to-lakesoul"},next:{title:"Setup LakeSoul Meta DB",permalink:"/docs/Usage Docs/setup-meta-env"}},l={},p=[{value:"Incremental Read",id:"incremental-read",level:2},{value:"Streaming Read",id:"streaming-read",level:2},{value:"Python Interface Tutorial",id:"python-interface-tutorial",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"incremental-query-function-tutorial",children:"Incremental Query Function Tutorial"}),"\n",(0,n.jsx)(a.p,{children:"LakeSoul provides a timestamp-based incremental query API to facilitate users to obtain data streams added after a given timestamp. Users can query the incremental data within this time range by specifying the start timestamp and the end timestamp. If the end timestamp is not specified, the incremental data from the start time to the current latest time will be queried."}),"\n",(0,n.jsx)(a.p,{children:"LakeSoul supports a total of four commit operations: mergeCommit; appendCommit; compactCommit; updateCommit. For update operations, it is difficult to obtain incremental files because historical data is merged and new files are generated each time, so incremental queries are not supported."}),"\n",(0,n.jsx)(a.p,{children:"Optional parameters and their meanings"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:'// 1. Partition information\r\noption(LakeSoulOptions.PARTITION_DESC, "range=range1")\r\noption(LakeSoulOptions. HASH_PARTITIONS, "hash")\r\noption(LakeSoulOptions. HASH_BUCKET_NUM, "2")\r\n// If no partition information is specified, incremental query will be performed for all partitions by default, if there is no range, hash must be specified\r\n// 2. Start and end timestamps\r\noption(LakeSoulOptions. READ_START_TIME, "2022-01-01 15:15:15")\r\noption(LakeSoulOptions. READ_END_TIME, "2022-01-01 20:15:15")\r\n// 3. Time zone information\r\noption(LakeSoulOptions.TIME_ZONE,"Asia/Sahanghai")\r\n// If the time zone information of the timestamp is not specified, it will be processed according to the user\'s local time zone by default\r\n4. Read type\r\noption(LakeSoulOptions. READ_TYPE, "incremental")\r\n// You can specify incremental read "incremental", snapshot read "snapshot", and do not specify the default full read.\n'})}),"\n",(0,n.jsx)(a.h2,{id:"incremental-read",children:"Incremental Read"}),"\n",(0,n.jsxs)(a.p,{children:["LakeSoul supports incremental read for both upsert-only table and CDC table. There are two ways. One is to query by calling the LakeSoulTable.forPath() function, and the other is to perform incremental reads by specifying options in ",(0,n.jsx)(a.code,{children:"spark.read"})," and ",(0,n.jsx)(a.code,{children:"spark.readStream"}),". You can get Incremental data of the specified partition within the start and end time range, and the time interval of the acquired incremental data is closed before and opened after."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:'import com.dmetasoul.lakesoul.tables.LakeSoulTable\r\nimport org.apache.spark.sql._\r\nval spark = SparkSession.builder.master("local")\r\n   .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\r\n   .getOrCreate()\r\n\r\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\r\n// Incremental read for a given range and timestamp, incremental means incremental read type\r\n// For example, read the incremental data of the range1 partition in the time range from 2023-01-01 15:15:00 to 2023-01-01 15:20:00 based on the Shanghai time zone\r\n// The first way is to perform incremental reading through forPathIncremental, if you do not specify a partition, enter "", if you do not enter a time zone parameter, the local system time zone is used by default\r\nval lake1 = LakeSoulTable.forPathIncremental(tablePath, "range=range1", "2023-01-01 15:15:00", "2023-01-01 15:20:00", "Asia/Shanghai")\r\n\r\n// The second way is to perform incremental reading by specifying the option of spark.read\r\nval lake2 = spark.read.format("lakesoul")\r\n   .option(LakeSoulOptions.PARTITION_DESC, "range=range1")\r\n   .option(LakeSoulOptions.READ_START_TIME, "2023-01-01 15:15:00")\r\n   .option(LakeSoulOptions.READ_END_TIME, "2023-01-01 15:20:00")\r\n   .option(LakeSoulOptions.TIME_ZONE,"Asia/Shanghai")\r\n   .option(LakeSoulOptions.READ_TYPE, "incremental")\r\n   .load(tablePath)\n'})}),"\n",(0,n.jsx)(a.h2,{id:"streaming-read",children:"Streaming Read"}),"\n",(0,n.jsx)(a.p,{children:"LakeSoul supports Spark Structured Streaming read. Streaming read is based on incremental query. Through spark.readStream specified options for streaming read, you can obtain the incremental data updated in each batch under the specified partition in the real-time data stream. The specified start time needs to be earlier than the ingestion time of the real-time data."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:'import com.dmetasoul.lakesoul.tables.LakeSoulTable\r\nimport org.apache.spark.sql._\r\nval spark = SparkSession. builder. master("local")\r\n   .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\r\n   .getOrCreate()\r\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\r\n\r\n// Use spark.readStream to specify options for streaming reading, read the incremental data of the range1 partition at 2023-01-01 15:00:00 and later based on the Shanghai time zone, trigger a read every 1 second, and save the results output to the console\r\nspark.readStream.format("lakesoul")\r\n   .option(LakeSoulOptions.PARTITION_DESC, "range=range1")\r\n   .option(LakeSoulOptions.READ_START_TIME, "2022-01-01 15:00:00")\r\n   .option(LakeSoulOptions.TIME_ZONE,"Asia/Shanghai")\r\n   .option(LakeSoulOptions.READ_TYPE, "incremental")\r\n   .load(tablePath)\r\n   .writeStream.format("console")\r\n   .trigger(Trigger.ProcessingTime(1000))\r\n   .start()\r\n   .awaitTermination()\n'})}),"\n",(0,n.jsx)(a.h2,{id:"python-interface-tutorial",children:"Python Interface Tutorial"}),"\n",(0,n.jsxs)(a.p,{children:["First put LakeSoul/python/lakesoul folder into ",(0,n.jsx)(a.code,{children:"$SPARK_HOME/python/pyspark"}),", which provides the pyspark.lakesoul module to with the python API of snapshot reading, incremental reading and streaming reading. Then execute in the command line:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"export PYTHONPATH=$SPARK_HOME/python:$PYTHONPATH\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'# Run pyspark tests using spark 3.3.x version\r\nfrom pyspark.lakesoul.tables import LakeSoulTable\r\nfrom pyspark.sql import SparkSession\r\n\r\nspark = SparkSession.builder \\\r\n     .appName("Stream Test") \\\r\n     .master(\'local[4]\') \\\r\n     .config("spark.ui.enabled", "false") \\\r\n     .config("spark.sql.shuffle.partitions", "5") \\\r\n     .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\\\r\n     .config("spark.sql.catalog.lakesoul", "org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog") \\\r\n     .config("spark.sql.defaultCatalog", "lakesoul") \\\r\n     .config("spark.sql.warehouse.dir", "/tmp/testPyspark") \\\r\n     .getOrCreate()\r\ntablePath = "s3a://bucket-name/table/path/is/also/table/name"\r\n    \r\ndf = spark.createDataFrame([(\'hash1\', 11),(\'hash2\', 44),(\'hash3\', 55)],["key","value"])\r\n# upsert requires that hashPartition must be specified, and rangePartition may not be specified\r\ndf.write.format("lakesoul")\r\n     .mode("append")\r\n     .option("hashPartitions", "key")\r\n     .option("hashBucketNum", "2")\r\n     .option("shortTableName", "tt")\r\n     .save(tablePath)\r\nlake = LakeSoulTable.forPath(spark, tablePath)\r\ndf_upsert = spark.createDataFrame([(\'hash5\', 100)],["key","value"])\r\n# Generate incremental data through upsert for testing\r\nlake.upsert(df_upsert)\r\n\r\n\r\n#Two methods of snapshot reading, if forPathSnapshot omits the input time zone parameter, the local system time zone is used by default\r\nlake = spark.read.format("lakesoul")\r\n     .option("readendtime", "2023-02-28 14:45:00")\r\n     .option("readtype", "snapshot")\r\n     .load(tablePath)\r\nlake = LakeSoulTable.forPathSnapshot(spark,tablePath,"","2023-02-28 14:45:00","Asia/Shanghai")\r\n\r\n#Two methods of incremental reading, if forPathIncremental omits the input time zone parameter, the local system time zone is used by default\r\nlake = spark.read.format("lakesoul")\r\n     .option("readstarttime", "2023-02-28 14:45:00")\r\n     .option("readendtime", "2023-02-28 14:50:00")\r\n     .option("timezone","Asia/Shanghai")\r\n     .option("readtype", "incremental")\r\n     .load(tablePath)\r\nlake = LakeSoulTable.forPathIncremental(spark,tablePath,"","2023-02-28 14:45:00","2023-02-28 14:50:00","Asia/Shanghai")\r\n\r\n#Streaming reading, you need to open two pyspark windows, one for modifying data to generate multi-version data, and one for performing streaming reading\r\nspark.readStream.format("lakesoul")\r\n     .option(\n'})})]})}function m(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>s,a:()=>i});var n=t(7294);const r={},o=n.createContext(r);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);