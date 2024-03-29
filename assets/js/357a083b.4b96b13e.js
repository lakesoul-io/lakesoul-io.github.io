"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[6714],{349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(5893),i=n(1151);const l={},s="LakeSoul Flink Connector",r={id:"Usage Docs/flink-lakesoul-connector",title:"LakeSoul Flink Connector",description:"\x3c!--",source:"@site/docs/03-Usage Docs/06-flink-lakesoul-connector.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/flink-lakesoul-connector",permalink:"/docs/Usage Docs/flink-lakesoul-connector",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/06-flink-lakesoul-connector.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Synchronization of Entire Database into LakeSoul",permalink:"/docs/Usage Docs/flink-cdc-sync"},next:{title:"LakeSoul Global Automatic Compaction Service Usage",permalink:"/docs/Usage Docs/auto-compaction-task"}},o={},d=[{value:"1. Environment Preparation",id:"1-environment-preparation",level:2},{value:"2. DDL",id:"2-ddl",level:2},{value:"2.1 Create Catalog",id:"21-create-catalog",level:3},{value:"2.2 Create Table",id:"22-create-table",level:3},{value:"2.3 Drop Table",id:"23-drop-table",level:3},{value:"2.4 Alter Table",id:"24-alter-table",level:3},{value:"3. Write Data",id:"3-write-data",level:2},{value:"3.1 Required settings",id:"31-required-settings",level:3},{value:"3.2 Write Data",id:"32-write-data",level:3},{value:"3.3 Batch Update or Delete",id:"33-batch-update-or-delete",level:3},{value:"4. Query Data",id:"4-query-data",level:2},{value:"4.1 Full Read",id:"41-full-read",level:3},{value:"4.2 Snapshot Batch Read",id:"42-snapshot-batch-read",level:3},{value:"4.3 Incremental Range Batch Read",id:"43-incremental-range-batch-read",level:3},{value:"4.4 Streaming Read",id:"44-streaming-read",level:3},{value:"4.5 Lookup Join",id:"45-lookup-join",level:3},{value:"5. Configurations",id:"5-configurations",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"lakesoul-flink-connector",children:"LakeSoul Flink Connector"}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsx)(t.p,{children:"Since 2.3.0"}),(0,a.jsx)(t.p,{children:"LakeSoul with version 2.3.0 is targeting Flink 1.14 while 2.4.0 and above is targeting Flink 1.17\u3002"})]}),"\n",(0,a.jsx)(t.p,{children:"LakeSoul provides Flink Connector which implements the Dynamic Table interface, through which developers can use Flink's DataStream API, Table API or SQL to read and write LakeSoul data, and supports both streaming and batch modes for read and write. Read and Write in Flink streaming both support Flink Changelog Stream semantics."}),"\n",(0,a.jsx)(t.h2,{id:"1-environment-preparation",children:"1. Environment Preparation"}),"\n",(0,a.jsxs)(t.p,{children:["To setup Flink environment, please refer to ",(0,a.jsx)(t.a,{href:"/docs/Usage%20Docs/setup-spark",children:"Setup Spark/Flink Job/Project"})]}),"\n",(0,a.jsx)(t.p,{children:"Introduce LakeSoul dependency: download lakesoul-flink-1.17-2.5.2.jar."}),"\n",(0,a.jsx)(t.p,{children:"In order to use Flink to create LakeSoul tables, it is recommended to use Flink SQL Client, which supports direct use of Flink SQL commands to operate LakeSoul tables. In this document, the Flink SQL is to directly enter statements on the Flink SQL Client cli interface; whereas the Table API needs to be used in a Java projects."}),"\n",(0,a.jsx)(t.p,{children:"Switch to the flink folder and execute the command to start the SQLclient client."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# Start Flink SQL Client\nbin/sql-client.sh embedded -j lakesoul-flink-1.17-2.5.2.jar\n"})}),"\n",(0,a.jsx)(t.h2,{id:"2-ddl",children:"2. DDL"}),"\n",(0,a.jsx)(t.h3,{id:"21-create-catalog",children:"2.1 Create Catalog"}),"\n",(0,a.jsx)(t.p,{children:"Create a catalog of LakeSoul type, and specify the catalog type as LakeSoul. Specify the database of LakeSoul, the default is default"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Flink SQL"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"create catalog lakesoul with('type'='lakesoul');\nuse catalog lakesoul;\nshow databases;\nuse `default`;\nshow tables;\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Table API"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'TableEnvironment tEnv = TableEnvironment.create(EnvironmentSettings.inBatchMode());\nCatalog lakesoulCatalog = new LakeSoulCatalog();\ntEnv.registerCatalog("lakeSoul", lakesoulCatalog);\ntEnv.useCatalog("lakeSoul");\ntEnv.useDatabase("default");\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"22-create-table",children:"2.2 Create Table"}),"\n",(0,a.jsx)(t.p,{children:"LakeSoul supports creating multiple types of tables through Flink, including table with or without primary key(s), with or without range partition(s), and CDC format table.\nThe meaning of the parameters for creating a table"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Explanation"}),(0,a.jsx)(t.th,{children:"Value Format"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"PARTITIONED BY"}),(0,a.jsx)(t.td,{children:"used to specify the range partition field of the table, if there is no range partition field, it will be omitted"}),(0,a.jsxs)(t.td,{children:["PARTITIONED BY (",(0,a.jsx)(t.code,{children:"date"}),")"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"PRIMARY KEY"}),(0,a.jsx)(t.td,{children:"used to specify one or more primary keys"}),(0,a.jsxs)(t.td,{children:["PARIMARY KEY (",(0,a.jsx)(t.code,{children:"id"}),", ",(0,a.jsx)(t.code,{children:"name"}),") NOT ENFORCED"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"connector"}),(0,a.jsx)(t.td,{children:"data source connector, used to specify the data source type"}),(0,a.jsx)(t.td,{children:"'connector'='lakesoul'"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"hashBucketNum"}),(0,a.jsx)(t.td,{children:"table with primary key(s) must have this property set to a number >= 0"}),(0,a.jsx)(t.td,{children:"'hashBucketNum'='4'"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"path"}),(0,a.jsx)(t.td,{children:"used to specify the storage path of the table"}),(0,a.jsx)(t.td,{children:"'path'='file:///tmp/lakesoul/flink/sink/test'"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"use_cdc"}),(0,a.jsxs)(t.td,{children:["Set whether the table is in CDC format (refer to ",(0,a.jsx)(t.a,{href:"/docs/Usage%20Docs/cdc-ingestion-table",children:"CDC Table Format"})," )"]}),(0,a.jsx)(t.td,{children:"'use_cdc'='true'"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:"The LakeSoul table supports all common data types of Flink, and has a one-to-one correspondence with the Spark SQL data type, so that the LakeSoul table can support reading and writing using Flink and Spark at the same time."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Flink SQL","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"-- Create the test_table table, use id and name as the joint primary key, use region and date as the two-level range partition, catalog is lakesoul, and database is default\ncreate table `lakesoul`.`default`.test_table (\n            `id` INT,\n            name STRING,\n            score INT,\n            `date` STRING,\n            region STRING,\n        PRIMARY KEY (`id`,`name`) NOT ENFORCED\n        ) PARTITIONED BY (`region`,`date`)\n        WITH (\n            'connector'='lakesoul',\n            'hashBucketNum'='4',\n            'use_cdc'='true',\n            'path'='file:///tmp/lakesoul/flink/sink/test');\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Table API","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Java",children:'String createUserSql = "create table user_info (" +\n        "order_id INT," +\n        "name STRING PRIMARY KEY NOT ENFORCED," +\n        "score INT" +\n        ") WITH (" +\n        " \'connector\'=\'lakesoul\'," +\n        " \'hashBucketNum\'=\'4\'," +\n        " \'use_cdc\'=\'true\'," +\n        " \'path\'=\'/tmp/lakesoul/flink/user\' )";\ntEnv. executeSql(createUserSql);\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"23-drop-table",children:"2.3 Drop Table"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Flink SQL","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"DROP TABLE if exists test_table;\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Table API","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'tEnvs.executeSql("DROP TABLE if exists test_table");\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"24-alter-table",children:"2.4 Alter Table"}),"\n",(0,a.jsx)(t.p,{children:"Currently Alter Table is not supported in Flink SQL."}),"\n",(0,a.jsx)(t.h2,{id:"3-write-data",children:"3. Write Data"}),"\n",(0,a.jsx)(t.p,{children:"LakeSoul supports batch or stream writing of data to LakeSoul tables in Flink. For a table without a primary key, the append mode is automatically executed when writing, and for a table with a primary key, the Upsert mode is automatically executed when writing."}),"\n",(0,a.jsx)(t.h3,{id:"31-required-settings",children:"3.1 Required settings"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Both stream and batch writing must enable the ",(0,a.jsx)(t.code,{children:"execution.checkpointing.checkpoints-after-tasks-finish.enabled"})," option;"]}),"\n",(0,a.jsx)(t.li,{children:"For stream writing, checkpoint interval needs to be set, and it is recommended to be more than 1 minute;"}),"\n",(0,a.jsx)(t.li,{children:"Set the corresponding time zone according to the environment:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SET 'table.local-time-zone' = 'Asia/Shanghai';\nset 'execution.checkpointing.checkpoints-after-tasks-finish.enabled' = 'true';\n-- Set the checkpointing interval\nset 'execution.checkpointing.interval' = '2min';\n"})}),"\n",(0,a.jsx)(t.h3,{id:"32-write-data",children:"3.2 Write Data"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Flink SQL"}),"\n",(0,a.jsx)(t.p,{children:"Batch: insert data directly"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"insert into `lakesoul`.`default`.test_table values (1, 'AAA', 98, '2023-05-10', 'China');\n"})}),"\n",(0,a.jsx)(t.p,{children:"Streaming: Build a streaming task to read data from another streaming data source and write it to a LakeSoul table. If the upstream data is in CDC format, the LakeSoul target table written to also needs to be set as a CDC table."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"-- Indicates inserting all the data in `lakesoul`.`cdcsink`.soure_table table into lakesoul`.`default`.test_table\ninsert into `lakesoul`.`default`.test_table select * from `lakesoul`.`cdcsink`.soure_table;\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Table API"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"tEnvs.executeSql(\"INSERT INTO user_info VALUES (1, 'Bob', 90), (2, 'Alice', 80), (3, 'Jack', 75), (3, 'Amy', 95),( 5, 'Tom', 75), (4, 'Mike', 70)\"). await();\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"33-batch-update-or-delete",children:"3.3 Batch Update or Delete"}),"\n",(0,a.jsxs)(t.p,{children:["LakeSoul has upgraded to Flink 1.17 since version 2.4, and supports the RowLevelUpdate and RowLevelDelete functions of Flink Batch SQL. For non-primary key tables and tables with primary keys (including CDC format tables), executing the ",(0,a.jsx)(t.code,{children:"update"})," or ",(0,a.jsx)(t.code,{children:"delete"})," SQL statement in batch mode will read out the data to be modified/deleted and write it into the table using ",(0,a.jsx)(t.code,{children:"Upsert"}),". ."]}),"\n",(0,a.jsxs)(t.p,{children:["Note that in the case of ",(0,a.jsx)(t.code,{children:"update"}),", updating the values of primary key and partition columns is not allowed. In the case of ",(0,a.jsx)(t.code,{children:"delete"}),", partitioning columns in the condition are not allowed."]}),"\n",(0,a.jsx)(t.p,{children:"For the stream execution mode, LakeSoul has been able to support ChangeLog semantics, which can support additions, deletions and modifications."}),"\n",(0,a.jsx)(t.h2,{id:"4-query-data",children:"4. Query Data"}),"\n",(0,a.jsx)(t.p,{children:"LakeSoul supports read LakeSoul tables in batch and stream mode, execute commands on the Flink SQLClient client, and switch between stream and batch execution modes."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"-- Execute Flink tasks according to the stream\nSET execution.runtime-mode = streaming;\n-- Execute Flink tasks in batch mode\nSET execution.runtime-mode = batch;\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Using Flink SQL, the format of the specified conditional query is ",(0,a.jsx)(t.code,{children:"SELECT * FROM test_table /*+ OPTIONS('key'='value')*/ WHERE partition=somevalue"}),". In all of the following read modes, you could optionally specify partition values in ",(0,a.jsx)(t.code,{children:"WHERE"})," clause to either specify the exact all partition values or just a subset of partitions values. LakeSoul will find the partitions that match the partition filters."]}),"\n",(0,a.jsxs)(t.p,{children:["In the query, ",(0,a.jsx)(t.code,{children:"/* OPTIONS() */"})," are query options (hints). Hints must be placed directly after the table name (before any other subclause) and the options when LakeSoul reads include:"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Explanation of meaning"}),(0,a.jsx)(t.th,{children:"Parameter filling format"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"readtype"}),(0,a.jsx)(t.td,{children:"read type, you can specify incremental read incremental, snapshot read snapshot, do not specify the default full read"}),(0,a.jsx)(t.td,{children:"'readtype'='incremental'"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"discoveryinterval"}),(0,a.jsx)(t.td,{children:"The time interval for discovering new data in streaming incremental read, in milliseconds, the default is 30000"}),(0,a.jsx)(t.td,{children:"'discoveryinterval'='10000'"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"readstarttime"}),(0,a.jsx)(t.td,{children:"Start read timestamp, if no start timestamp is specified, it will read from the start version number by default"}),(0,a.jsx)(t.td,{children:"'readstarttime'='2023-05-01 15:15:15'"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"readendtime"}),(0,a.jsx)(t.td,{children:"End read timestamp, if no end timestamp is specified, the current latest version number will be read by default"}),(0,a.jsx)(t.td,{children:"'readendtime'='2023-05-01 15:20:15'"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"timezone"}),(0,a.jsx)(t.td,{children:"The time zone information of the timestamp, if the time zone information of the timestamp is not specified, it will be processed according to the local time zone by default"}),(0,a.jsx)(t.td,{children:"'timezone'='Asia/Sahanghai'"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"41-full-read",children:"4.1 Full Read"}),"\n",(0,a.jsx)(t.p,{children:"LakeSoul supports reading full data of LakeSoul table in batch mode and stream mode. In batch mode, it will read the full amount of data of the latest version of the specified partition of the specified table at current time. In stream mode, it will read the latest version of the full amount of data at the current time first, and once the data is updated, it can automatically discover and continuously read data incrementally."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Flink SQL"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"-- Set batch mode, read test_table table\nSET execution.runtime-mode = batch;\nSELECT * FROM `lakesoul`.`default`.test_table where region='China' and `date`='2023-05-10';\n\n-- Set streaming mode, read test_table table\nSET execution.runtime-mode = stream;\nset 'execution.checkpointing.checkpoints-after-tasks-finish.enabled' = 'true';\n-- Set the checkpointing interval\nset 'execution.checkpointing.interval' = '1min';\nSELECT * FROM `lakesoul`.`default`.test_table where id > 3;\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Table API format"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'// Create a batch execution environment\nStreamExecutionEnvironment env = StreamExecutionEnvironment.createLocalEnvironmentWithWebUI(new Configuration());\nenv.setRuntimeMode(RuntimeExecutionMode.BATCH);\nStreamTableEnvironment tEnvs = StreamTableEnvironment.create(env);\n//Set the catalog of lakesoul type\nCatalog lakesoulCatalog = new LakeSoulCatalog();\ntEnvs.registerCatalog("lakeSoul", lakesoulCatalog);\ntEnvs. useCatalog("lakeSoul");\ntEnvs.useDatabase("default");\n\ntEnvs.executeSql("SELECT * FROM test_table").print();\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'// create streaming execution environment\nStreamExecutionEnvironment env = StreamExecutionEnvironment.createLocalEnvironmentWithWebUI(new Configuration());\nenv.setRuntimeMode(RuntimeExecutionMode.STREAMING);\nenv.enableCheckpointing(2000, CheckpointingMode.EXACTLY_ONCE);\nenv.getCheckpointConfig().setExternalizedCheckpointCleanup(CheckpointConfig.ExternalizedCheckpointCleanup.RETAIN_ON_CANCELLATION);\nStreamTableEnvironment tEnvs = StreamTableEnvironment. create(env);\n//Set the catalog of lakesoul type\nCatalog lakesoulCatalog = new LakeSoulCatalog();\ntEnvs.registerCatalog("lakeSoul", lakesoulCatalog);\ntEnvs. useCatalog("lakeSoul");\ntEnvs.useDatabase("default");\n\ntEnvs.executeSql("SELECT * FROM test_table where id > 3").print();\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"42-snapshot-batch-read",children:"4.2 Snapshot Batch Read"}),"\n",(0,a.jsx)(t.p,{children:"LakeSoul supports snapshot reading of tables, and users can query all data before the end timestamp by specifying partition information and end timestamp."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Flink SQL","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"-- Execute snapshot read of test_table in the region=China partition, the end timestamp of the read is 2023-05-01 15:20:15, and the time zone is Asia/Shanghai\nSELECT * FROM `lakesoul`.`default`.test_table /*+ OPTIONS('readtype'='snapshot', 'readendtime'='2023-05-01 15:20:15', 'timezone'='Asia/Shanghai')*/ WHERE region='China';\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Table API","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"tEnvs.executeSql(\"SELECT * FROM `lakesoul`.`default`.test_table /*+ OPTIONS('readtype'='snapshot', 'readendtime'='2023-05-01 15:20:15', 'timezone'='Asia/Shanghai')*/ WHERE region='China'\").print();\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"43-incremental-range-batch-read",children:"4.3 Incremental Range Batch Read"}),"\n",(0,a.jsx)(t.p,{children:"LakeSoul supports range incremental reads for tables. Users can query incremental data within this time range by specifying partition information, start timestamp, and end timestamp."}),"\n",(0,a.jsx)(t.p,{children:"Flink SQL:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"-- Incremental reading of test_table in the region=China partition, the read timestamp range is 2023-05-01 15:15:15 to 2023-05-01 15:20:15, and the time zone is Asia/Shanghai\nSELECT * FROM `lakesoul`.`default`.test_table /*+ OPTIONS('readtype'='incremental', 'readstarttime'='2023-05-01 15:15:15 ', 'readendtime'='2023-05-01 15:20:15', 'timezone'='Asia/Shanghai')*/ WHERE region='China';\n"})}),"\n",(0,a.jsx)(t.h3,{id:"44-streaming-read",children:"4.4 Streaming Read"}),"\n",(0,a.jsx)(t.p,{children:"The LakeSoul table supports streaming reads in Flink. Streaming reads are based on incremental reads. By specifying the start timestamp and partition information, users can continuously and uninterruptedly read new data after the start timestamp."}),"\n",(0,a.jsx)(t.p,{children:"Flink SQL:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"-- Read the data of test_table in the region=China partition according to the streaming method. The starting timestamp of reading is 2023-05-01 15:15:15, and the time zone is Asia/Sahanghai\nset 'execution.checkpointing.checkpoints-after-tasks-finish.enabled' = 'true';\n-- Set the checkpointing interval\nset 'execution.checkpointing.interval' = '1min';\nSELECT * FROM test_table /*+ OPTIONS('readstarttime'='2023-05-01 15:15:15', 'timezone'='Asia/Sahanghai')*/ WHERE region='China';\n"})}),"\n",(0,a.jsxs)(t.p,{children:["LakeSoul fully supports Flink Changelog Stream semantics when streaming. For the LakeSoul CDC table, the result of incremental reading is still in CDC format, that is, it contains ",(0,a.jsx)(t.code,{children:"insert"}),", ",(0,a.jsx)(t.code,{children:"update"}),", ",(0,a.jsx)(t.code,{children:"delete"})," events, and these events will be automatically converted to the corresponding values of the RowKind field of Flink's RowData class object, so that in Flink incremental pipeline calculation is achieved."]}),"\n",(0,a.jsx)(t.h3,{id:"45-lookup-join",children:"4.5 Lookup Join"}),"\n",(0,a.jsxs)(t.p,{children:["LakeSoul supports Lookup Join operations of Flink SQL. Lookup Join will cache the right table to be joined in memory, thereby greatly improving the join speed, and can be used in scenarios where relatively small dimension tables are joined. LakeSoul tries to refresh the cache every 60 seconds by default, you could change this by setting ",(0,a.jsx)(t.code,{children:"'lookup.join.cache.ttl'='60s'"})," property when creating the dimension table."]}),"\n",(0,a.jsx)(t.p,{children:"The join requires one table to have a processing time attribute and the other table to be backed by a lookup source connector. LakeSoul supports flink lookup source connector."}),"\n",(0,a.jsx)(t.p,{children:"The following example shows the syntax to specify a lookup join."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `lakesoul`.`default`.customers (\n            `c_id` INT,\n            `name` STRING,\n        PRIMARY KEY (`c_id`) NOT ENFORCED)\n        WITH (\n            'connector'='lakesoul',\n            'hashBucketNum'='1',\n            'path'='file:///tmp/lakesoul/flink/sink/customers'\n            );  \nCREATE TABLE `lakesoul`.`default`.orders (\n            `o_id` INT,\n            `o_c_id` INT,\n        PRIMARY KEY (`o_id`) NOT ENFORCED)\n        WITH (\n            'connector'='lakesoul',\n            'hashBucketNum'='1',\n            'path'='file:///tmp/lakesoul/flink/sink/orders',\n            'lookup.join.cache.ttl'='60s'\n            );  \nSELECT `o_id`, `c_id`, `name`\nFROM\n(SELECT *, proctime() as proctime FROM `lakesoul`.`default`.orders) as o\nJOIN `lakesoul`.`default`.customers FOR SYSTEM_TIME AS OF o.proctime\nON c_id = o_cid;\n"})}),"\n",(0,a.jsx)(t.p,{children:"In the example above, the Orders table is enriched with data from the Customers table. The FOR SYSTEM_TIME AS OF clause with the subsequent processing time attribute ensures that each row of the Orders table is joined with those Customers rows that match the join predicate at the point in time when the Orders row is processed by the join operator. It also prevents that the join result is updated when a joined Customer row is updated in the future. The lookup join also requires a mandatory equality join predicate, in the example above o.oc_id = c.id."}),"\n",(0,a.jsx)(t.h2,{id:"5-configurations",children:"5. Configurations"}),"\n",(0,a.jsxs)(t.p,{children:["The following configuration items can be placed in ",(0,a.jsx)(t.code,{children:"$FLINK_HOME/conf/flink-conf.yaml"})," and take effect globally. You can also add it to the properties of the table creation statement. If there are the same configuration items in the configuration file and table creation properties, the table creation properties have a higher priority."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Configuration item"}),(0,a.jsx)(t.th,{children:"Default value"}),(0,a.jsx)(t.th,{children:"Meaning"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"lakesoul.file.rolling.rows"}),(0,a.jsx)(t.td,{children:"5000000"}),(0,a.jsx)(t.td,{children:"Sink Writer maximum number of rows in a single file"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"lakesoul.file.rolling.time.ms"}),(0,a.jsx)(t.td,{children:"300000"}),(0,a.jsx)(t.td,{children:"Sink Writer interval for creating new files (milliseconds)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"lakesoul.rolling.check.interval"}),(0,a.jsx)(t.td,{children:"60000"}),(0,a.jsx)(t.td,{children:"The interval at which Sink Writer checks whether a new file needs to be created (milliseconds)"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(7294);const i={},l=a.createContext(i);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);