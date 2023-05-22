"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[714],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=l,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},979:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const r={},i="LakeSoul Flink Connector",o={unversionedId:"Usage Docs/flink-lakesoul-connector",id:"Usage Docs/flink-lakesoul-connector",title:"LakeSoul Flink Connector",description:"LakeSoul provides Flink Connector which implements the Dynamic Table interface, through which developers can use Flink's DataStream API, Table API or SQL to read and write LakeSoul data, and supports both streaming and batch modes.",source:"@site/docs/03-Usage Docs/06-flink-lakesoul-connector.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/flink-lakesoul-connector",permalink:"/docs/Usage Docs/flink-lakesoul-connector",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/06-flink-lakesoul-connector.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LakeSoul Flink CDC Synchronization of Entire MySQL Database",permalink:"/docs/Usage Docs/flink-cdc-sync"},next:{title:"LakeSoul Automatic Compaction Task",permalink:"/docs/Usage Docs/auto-compaction-task"}},s={},u=[{value:"1. Environment Preparation",id:"1-environment-preparation",level:2},{value:"2. DDL",id:"2-ddl",level:2},{value:"2.1 Create Catalog",id:"21-create-catalog",level:3},{value:"2.2 Create Table",id:"22-create-table",level:3},{value:"2.3 Alter/Drop Table",id:"23-alterdrop-table",level:3},{value:"3. Write Data",id:"3-write-data",level:2},{value:"3.1 Required settings",id:"31-required-settings",level:3},{value:"3.2 Write Data",id:"32-write-data",level:3},{value:"4. Query Data",id:"4-query-data",level:2},{value:"4.1 Full Read",id:"41-full-read",level:3},{value:"4.2 Snapshot Batch Read",id:"42-snapshot-batch-read",level:3},{value:"4.3 Incremental Range Batch Read",id:"43-incremental-range-batch-read",level:3},{value:"4.4 Streaming Read",id:"44-streaming-read",level:3},{value:"4.5 Lookup Join",id:"45-lookup-join",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lakesoul-flink-connector"},"LakeSoul Flink Connector"),(0,l.kt)("p",null,"LakeSoul provides Flink Connector which implements the Dynamic Table interface, through which developers can use Flink's DataStream API, Table API or SQL to read and write LakeSoul data, and supports both streaming and batch modes."),(0,l.kt)("h2",{id:"1-environment-preparation"},"1. Environment Preparation"),(0,l.kt)("p",null,"To setup Flink environment, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/Usage%20Docs/setup-spark"},"Setup Spark/Flink Job/Project")),(0,l.kt)("p",null,"Introduce LakeSoul dependency: package and compile the lakesoul-flink folder to get lakesoul-flink-2.3.0-flink-1.14-SNAPSHOT.jar."),(0,l.kt)("p",null,"In order to use Flink to create LakeSoul tables, it is recommended to use Flink SQL Client, which supports direct use of Flink SQL commands to operate LakeSoul tables. In this document, the Flink SQL is to directly enter statements on the Flink SQL Client cli interface; whereas the Table API needs to be used in a Java projects."),(0,l.kt)("p",null,"Switch to the flink folder and execute the command to start the SQLclient client."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Start Flink SQL Client\nbin/sql-client.sh embedded -j lakesoul-flink-2.3.0-flink-1.14-SNAPSHOT.jar\n")),(0,l.kt)("h2",{id:"2-ddl"},"2. DDL"),(0,l.kt)("h3",{id:"21-create-catalog"},"2.1 Create Catalog"),(0,l.kt)("p",null,"Create a catalog of LakeSoul type, and specify the catalog type as LakeSoul. Specify the database of LakeSoul, the default is default"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Flink SQL"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create catalog lakesoul with('type'='lakesoul');\nuse catalog lakesoul;\nshow databases;\nuse `default`;\nshow tables;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Table API"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'TableEnvironment tEnv = TableEnvironment.create(EnvironmentSettings.inBatchMode());\nCatalog lakesoulCatalog = new LakeSoulCatalog();\ntEnv.registerCatalog("lakeSoul", lakesoulCatalog);\ntEnv.useCatalog("lakeSoul");\ntEnv.useDatabase("default");\n')))),(0,l.kt)("h3",{id:"22-create-table"},"2.2 Create Table"),(0,l.kt)("p",null,"LakeSoul supports creating multiple types of tables through Flink, including no primary key, hash partition, range partition, and both range and hash partitions.\nThe meaning of the parameters for creating a table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PARTITIONED BY"),(0,l.kt)("td",{parentName:"tr",align:null},"used to specify the range partition field of the table, if there is no range partition field, it will be omitted"),(0,l.kt)("td",{parentName:"tr",align:null},"PARTITIONED BY (",(0,l.kt)("inlineCode",{parentName:"td"},"date"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connector"),(0,l.kt)("td",{parentName:"tr",align:null},"data source connector, used to specify the data source type"),(0,l.kt)("td",{parentName:"tr",align:null},"'connector'='lakesoul'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"used to specify the storage path of the table"),(0,l.kt)("td",{parentName:"tr",align:null},"'path'='file:///tmp/lakesoul/flink/sink/test'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use_cdc"),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether the table is in CDC format (refer to ",(0,l.kt)("a",{parentName:"td",href:"/docs/Usage%20Docs/cdc-ingestion-table"},"CDC table format")," )"),(0,l.kt)("td",{parentName:"tr",align:null},"'use_cdc'='true'")))),(0,l.kt)("p",null,"The LakeSoul table supports all common data types of Flink, and has a one-to-one correspondence with the Spark SQL data type, so that the LakeSoul table can support reading and writing using Flink and Spark at the same time."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Flink SQL",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Create the test_table table, use id and name as the joint primary key, use region and date as the two-level range partition, catalog is lakesoul, and database is default\ncreate table `lakesoul`.`default`.test_table (\n            `id` INT,\n            name STRING,\n            score INT,\n            `date` STRING,\n            region STRING,\n        PRIMARY KEY (`id`,`name`) NOT ENFORCED\n        ) PARTITIONED BY (`region`,`date`)\n        WITH (\n            'connector'='lakesoul',\n            'use_cdc'='true',\n            'path'='file:///tmp/lakesoul/flink/sink/test');\n"))),(0,l.kt)("li",{parentName:"ol"},"Table API",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-Java"},'String createUserSql = "create table user_info (" +\n        "order_id INT," +\n        "name STRING PRIMARY KEY NOT ENFORCED," +\n        "score INT" +\n        ") WITH (" +\n        " \'connector\'=\'lakesoul\'," +\n        " \'use_cdc\'=\'true\'," +\n        " \'path\'=\'/tmp/lakesoul/flink/user\' )";\ntEnv. executeSql(createUserSql);\n')))),(0,l.kt)("h3",{id:"23-alterdrop-table"},"2.3 Alter/Drop Table"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Flink SQL",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE test_table RENAME TO new_table;\nDROP TABLE if exists test_table;\n"))),(0,l.kt)("li",{parentName:"ol"},"Table API",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'tEnvs.executeSql("ALTER TABLE test_table RENAME TO new_table")\ntEnvs.executeSql("DROP TABLE if exists test_table");\n')))),(0,l.kt)("h2",{id:"3-write-data"},"3. Write Data"),(0,l.kt)("p",null,"LakeSoul supports batch or stream writing of data to LakeSoul tables in Flink. For a table without a primary key, the append mode is automatically executed when writing, and for a table with a primary key, the Upsert mode is automatically executed when writing."),(0,l.kt)("h3",{id:"31-required-settings"},"3.1 Required settings"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Both stream and batch writing must enable the ",(0,l.kt)("inlineCode",{parentName:"li"},"execution.checkpointing.checkpoints-after-tasks-finish.enabled")," option;"),(0,l.kt)("li",{parentName:"ol"},"For stream writing, checkpoint interval needs to be set, and it is recommended to be more than 1 minute;"),(0,l.kt)("li",{parentName:"ol"},"Set the corresponding time zone according to the environment:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET 'table.local-time-zone' = 'Asia/Shanghai';\nset 'execution.checkpointing.checkpoints-after-tasks-finish.enabled' = 'true';\n-- Set the checkpointing interval\nset 'execution.checkpointing.interval' = '2min';\n")),(0,l.kt)("h3",{id:"32-write-data"},"3.2 Write Data"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Flink SQL"),(0,l.kt)("p",{parentName:"li"}," Batch: insert data directly"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"insert into `lakesoul`.`default`.test_table values (1, 'AAA', 98, '2023-05-10', 'China');\n")),(0,l.kt)("p",{parentName:"li"}," Streaming: Build a streaming task to read data from another streaming data source and write it to a LakeSoul table. If the upstream data is in CDC format, the LakeSoul target table written to also needs to be set as a CDC table."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Indicates inserting all the data in `lakesoul`.`cdcsink`.soure_table table into lakesoul`.`default`.test_table\ninsert into `lakesoul`.`default`.test_table select * from `lakesoul`.`cdcsink`.soure_table;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Table API"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"tEnvs.executeSql(\"INSERT INTO user_info VALUES (1, 'Bob', 90), (2, 'Alice', 80), (3, 'Jack', 75), (3, 'Amy', 95),( 5, 'Tom', 75), (4, 'Mike', 70)\"). await();\n")))),(0,l.kt)("h2",{id:"4-query-data"},"4. Query Data"),(0,l.kt)("p",null,"LakeSoul supports read LakeSoul tables in batch and stream mode, execute commands on the Flink SQLClient client, and switch between stream and batch execution modes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Execute Flink tasks according to the stream\nSET execution.runtime-mode = streaming;\n-- Execute Flink tasks in batch mode\nSET execution.runtime-mode = batch;\n")),(0,l.kt)("p",null,"Using Flink SQL, the format of the specified conditional query is ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT * FROM test_table /*+ OPTIONS('key'='value')*/ WHERE partition=somevalue"),". In all of the following read modes, you could optionally specify partition values in ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clause to either specify the exact all partition values or just a subset of partitions values. LakeSoul will find the partitions that match the partition filters."),(0,l.kt)("p",null,"In the query, ",(0,l.kt)("inlineCode",{parentName:"p"},"/* OPTIONS() */")," are query options (hints). Hints must be placed directly after the table name (before any other subclause) and the options when LakeSoul reads include:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation of meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter filling format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readtype"),(0,l.kt)("td",{parentName:"tr",align:null},"read type, you can specify incremental read incremental, snapshot read snapshot, do not specify the default full read"),(0,l.kt)("td",{parentName:"tr",align:null},"'readtype'='incremental'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"discoveryinterval"),(0,l.kt)("td",{parentName:"tr",align:null},"The time interval for discovering new data in streaming incremental read, in milliseconds, the default is 2000"),(0,l.kt)("td",{parentName:"tr",align:null},"'discoveryinterval'='10000'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readstarttime"),(0,l.kt)("td",{parentName:"tr",align:null},"Start read timestamp, if no start timestamp is specified, it will read from the start version number by default"),(0,l.kt)("td",{parentName:"tr",align:null},"'readstarttime'='2023-05-01 15:15:15'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readendtime"),(0,l.kt)("td",{parentName:"tr",align:null},"End read timestamp, if no end timestamp is specified, the current latest version number will be read by default"),(0,l.kt)("td",{parentName:"tr",align:null},"'readendtime'='2023-05-01 15:20:15'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timezone"),(0,l.kt)("td",{parentName:"tr",align:null},"The time zone information of the timestamp, if the time zone information of the timestamp is not specified, it will be processed according to the local time zone by default"),(0,l.kt)("td",{parentName:"tr",align:null},"'timezone'='Asia/Sahanghai'")))),(0,l.kt)("h3",{id:"41-full-read"},"4.1 Full Read"),(0,l.kt)("p",null,"LakeSoul supports reading full data of LakeSoul table in batch mode and stream mode. In batch mode, it will read the full amount of data of the latest version of the specified partition of the specified table at current time. In stream mode, it will read the latest version of the full amount of data at the current time first, and once the data is updated, it can automatically discover and continuously read data incrementally."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Flink SQL"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Set batch mode, read test_table table\nSET execution.runtime-mode = batch;\nSELECT * FROM `lakesoul`.`default`.test_table where region='China' and `date`='2023-05-10' order by id;\n\n-- Set streaming mode, read test_table table\nSET execution.runtime-mode = stream;\nset 'execution.checkpointing.checkpoints-after-tasks-finish.enabled' = 'true';\n-- Set the checkpointing interval\nset 'execution.checkpointing.interval' = '1min';\nSELECT * FROM `lakesoul`.`default`.test_table where id > 3;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Table API format"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Create a batch execution environment\nStreamExecutionEnvironment env = StreamExecutionEnvironment.createLocalEnvironmentWithWebUI(new Configuration());\nenv.setRuntimeMode(RuntimeExecutionMode.BATCH);\nStreamTableEnvironment tEnvs = StreamTableEnvironment.create(env);\n//Set the catalog of lakesoul type\nCatalog lakesoulCatalog = new LakeSoulCatalog();\ntEnvs.registerCatalog("lakeSoul", lakesoulCatalog);\ntEnvs. useCatalog("lakeSoul");\ntEnvs.useDatabase("default");\n\ntEnvs.executeSql("SELECT * FROM test_table order by id").print();\n')),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// create streaming execution environment\nStreamExecutionEnvironment env = StreamExecutionEnvironment.createLocalEnvironmentWithWebUI(new Configuration());\nenv.setRuntimeMode(RuntimeExecutionMode.STREAMING);\nenv.enableCheckpointing(2000, CheckpointingMode.EXACTLY_ONCE);\nenv.getCheckpointConfig().setExternalizedCheckpointCleanup(CheckpointConfig.ExternalizedCheckpointCleanup.RETAIN_ON_CANCELLATION);\nStreamTableEnvironment tEnvs = StreamTableEnvironment. create(env);\n//Set the catalog of lakesoul type\nCatalog lakesoulCatalog = new LakeSoulCatalog();\ntEnvs.registerCatalog("lakeSoul", lakesoulCatalog);\ntEnvs. useCatalog("lakeSoul");\ntEnvs.useDatabase("default");\n\ntEnvs.executeSql("SELECT * FROM test_table where id > 3").print();\n')))),(0,l.kt)("h3",{id:"42-snapshot-batch-read"},"4.2 Snapshot Batch Read"),(0,l.kt)("p",null,"LakeSoul supports snapshot reading of tables, and users can query all data before the end timestamp by specifying partition information and end timestamp."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Flink SQL",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Execute snapshot read of test_table in the region=China partition, the end timestamp of the read is 2023-05-01 15:20:15, and the time zone is Asia/Shanghai\nSELECT * FROM `lakesoul`.`default`.test_table /*+ OPTIONS('readtype'='snapshot', 'readendtime'='2023-05-01 15:20:15', 'timezone'='Asia/Shanghai')*/ WHERE region='China';\n"))),(0,l.kt)("li",{parentName:"ol"},"Table API",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"tEnvs.executeSql(\"SELECT * FROM `lakesoul`.`default`.test_table /*+ OPTIONS('readtype'='snapshot', 'readendtime'='2023-05-01 15:20:15', 'timezone'='Asia/Shanghai')*/ WHERE region='China'\").print();\n")))),(0,l.kt)("h3",{id:"43-incremental-range-batch-read"},"4.3 Incremental Range Batch Read"),(0,l.kt)("p",null,"LakeSoul supports range incremental reads for tables. Users can query incremental data within this time range by specifying partition information, start timestamp, and end timestamp."),(0,l.kt)("p",null,"Flink SQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Incremental reading of test_table in the region=China partition, the read timestamp range is 2023-05-01 15:15:15 to 2023-05-01 15:20:15, and the time zone is Asia/Shanghai\nSELECT * FROM `lakesoul`.`default`.test_table /*+ OPTIONS('readtype'='incremental', 'readstarttime'='2023-05-01 15:15:15 ', 'readendtime'='2023-05-01 15:20:15', 'timezone'='Asia/Shanghai')*/ WHERE region='China';\n")),(0,l.kt)("h3",{id:"44-streaming-read"},"4.4 Streaming Read"),(0,l.kt)("p",null,"The LakeSoul table supports streaming reads in Flink. Streaming reads are based on incremental reads. By specifying the start timestamp and partition information, users can continuously and uninterruptedly read new data after the start timestamp."),(0,l.kt)("p",null,"Flink SQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Read the data of test_table in the region=China partition according to the streaming method. The starting timestamp of reading is 2023-05-01 15:15:15, and the time zone is Asia/Sahanghai\nset 'execution.checkpointing.checkpoints-after-tasks-finish.enabled' = 'true';\n-- Set the checkpointing interval\nset 'execution.checkpointing.interval' = '1min';\nSELECT * FROM test_table /*+ OPTIONS('readstarttime'='2023-05-01 15:15:15', 'timezone'='Asia/Sahanghai')*/ WHERE region='China';\n")),(0,l.kt)("p",null,"LakeSoul fully supports Flink Changelog Stream semantics when streaming. For the LakeSoul CDC table, the result of incremental reading is still in CDC format, that is, it contains ",(0,l.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," events, and these events will be automatically converted to the corresponding values of the RowKind field of Flink's RowData class object, so that in Flink incremental pipeline calculation is achieved."),(0,l.kt)("h3",{id:"45-lookup-join"},"4.5 Lookup Join"),(0,l.kt)("p",null,"LakeSoul supports Lookup Join operations of Flink SQL. Lookup Join will cache the right table to be joined in memory, thereby greatly improving the join speed, and can be used in scenarios where relatively small dimension tables are joined. LakeSoul tries to refresh the cache every 60 seconds by default, you could change this by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"'lookup.join.cache.ttl'='60s'")," property when creating the dimension table."),(0,l.kt)("p",null,"The join requires one table to have a processing time attribute and the other table to be backed by a lookup source connector. LakeSoul supports flink lookup source connector."),(0,l.kt)("p",null,"The following example shows the syntax to specify a lookup join."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `lakesoul`.`default`.customers (\n            `c_id` INT,\n            `name` STRING,\n        PRIMARY KEY (`c_id`) NOT ENFORCED)\n        WITH (\n            'connector'='lakesoul',\n            'path'='file:///tmp/lakesoul/flink/sink/customers'\n            );  \nCREATE TABLE `lakesoul`.`default`.orders (\n            `o_id` INT,\n            `o_c_id` INT,\n        PRIMARY KEY (`o_id`) NOT ENFORCED)\n        WITH (\n            'connector'='lakesoul',\n            'path'='file:///tmp/lakesoul/flink/sink/orders',\n            'lookup.join.cache.ttl'='60s'\n            );  \nSELECT `o_id`, `c_id`, `name`\nFROM\n(SELECT *, proctime() as proctime FROM `lakesoul`.`default`.orders) as o\nJOIN `lakesoul`.`default`.customers FOR SYSTEM_TIME AS OF o.proctime\nON c_id = o_cid;\n")),(0,l.kt)("p",null,"In the example above, the Orders table is enriched with data from the Customers table. The FOR SYSTEM_TIME AS OF clause with the subsequent processing time attribute ensures that each row of the Orders table is joined with those Customers rows that match the join predicate at the point in time when the Orders row is processed by the join operator. It also prevents that the join result is updated when a joined Customer row is updated in the future. The lookup join also requires a mandatory equality join predicate, in the example above o.oc_id = c.id."))}c.isMDXComponent=!0}}]);