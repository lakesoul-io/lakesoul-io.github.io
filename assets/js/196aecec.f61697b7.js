"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,c=u["".concat(s,".").concat(m)]||u[m]||k[m]||l;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i="LakeSoul Flink CDC Synchronization of Entire MySQL Database",o={unversionedId:"Usage Docs/flink-cdc-sync",id:"Usage Docs/flink-cdc-sync",title:"LakeSoul Flink CDC Synchronization of Entire MySQL Database",description:"\x3c!--",source:"@site/docs/03-Usage Docs/05-flink-cdc-sync.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/flink-cdc-sync",permalink:"/docs/Usage Docs/flink-cdc-sync",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/05-flink-cdc-sync.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use LakeSoul CDC Table Format",permalink:"/docs/Usage Docs/cdc-ingestion-table"},next:{title:"LakeSoul Flink Connector",permalink:"/docs/Usage Docs/flink-lakesoul-connector"}},s={},p=[{value:"Main features",id:"main-features",level:2},{value:"How to use the command line",id:"how-to-use-the-command-line",level:2},{value:"1. Download LakeSoul Flink Jar",id:"1-download-lakesoul-flink-jar",level:3},{value:"2. Start the Flink job",id:"2-start-the-flink-job",level:3},{value:"2.1 Add LakeSoul metadata database configuration",id:"21-add-lakesoul-metadata-database-configuration",level:4},{value:"2.2 Start sync job",id:"22-start-sync-job",level:4},{value:"LakeSoul Flink CDC Sink job execution process",id:"lakesoul-flink-cdc-sink-job-execution-process",level:2},{value:"LakeSoul Flink CDC Sink Exactly Once Semantic Guarantee",id:"lakesoul-flink-cdc-sink-exactly-once-semantic-guarantee",level:2},{value:"Type mapping relationship between MySQL and LakeSoul",id:"type-mapping-relationship-between-mysql-and-lakesoul",level:2},{value:"Precautions",id:"precautions",level:2}],d={toc:p},u="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lakesoul-flink-cdc-synchronization-of-entire-mysql-database"},"LakeSoul Flink CDC Synchronization of Entire MySQL Database"),(0,r.kt)("p",null,"Since version 2.1.0, LakeSoul has implemented Flink CDC Sink, which can support Table API and SQL (single table), and Stream API (full database with multiple tables). The currently supported upstream data source is MySQL (5.6-8.0)"),(0,r.kt)("h2",{id:"main-features"},"Main features"),(0,r.kt)("p",null,"In the Stream API, the main functions of LakeSoul Sink are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support real-time CDC synchronization of thousands of tables (different schemas) in the same Flink job, and different tables will be automatically written to the corresponding table names of LakeSoul"),(0,r.kt)("li",{parentName:"ul"},"Support automatic synchronization of schema changes (DDL) to LakeSoul, and automatic compatibility of downstream reads (currently supports adding and dropping columns as well as numeric type upcast);"),(0,r.kt)("li",{parentName:"ul"},"Support automatic perception of new tables in the upstream database during operation, and automatic table creation in LakeSoul;"),(0,r.kt)("li",{parentName:"ul"},"Support Exactly Once semantics, even if a Flink job fails, it can ensure that the data is not lost or heavy;"),(0,r.kt)("li",{parentName:"ul"},"Provide Flink command line startup entry class, support specifying parameters such as database name, table name blacklist, parallelism, etc.;")),(0,r.kt)("h2",{id:"how-to-use-the-command-line"},"How to use the command line"),(0,r.kt)("h3",{id:"1-download-lakesoul-flink-jar"},"1. Download LakeSoul Flink Jar"),(0,r.kt)("p",null,"It can be downloaded from the LakeSoul Release page: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.3.0/lakesoul-flink-2.3.0-flink-1.14.jar"},"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.3.0/lakesoul-flink-2.3.0-flink-1.14.jar"),"."),(0,r.kt)("p",null,"The currently supported Flink version is 1.14."),(0,r.kt)("h3",{id:"2-start-the-flink-job"},"2. Start the Flink job"),(0,r.kt)("h4",{id:"21-add-lakesoul-metadata-database-configuration"},"2.1 Add LakeSoul metadata database configuration"),(0,r.kt)("p",null,"Add the following configuration to ",(0,r.kt)("inlineCode",{parentName:"p"},"$FLINK_HOME/conf/flink-conf.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"containerized.master.env.LAKESOUL_PG_DRIVER: com.lakesoul.shaded.org.postgresql.Driver\ncontainerized.master.env.LAKESOUL_PG_USERNAME: root\ncontainerized.master.env.LAKESOUL_PG_PASSWORD: root\ncontainerized.master.env.LAKESOUL_PG_URL: jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=unspecified\ncontainerized.taskmanager.env.LAKESOUL_PG_DRIVER: com.lakesoul.shaded.org.postgresql.Driver\ncontainerized.taskmanager.env.LAKESOUL_PG_USERNAME: root\ncontainerized.taskmanager.env.LAKESOUL_PG_PASSWORD: root\ncontainerized.taskmanager.env.LAKESOUL_PG_URL: jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=unspecified\n")),(0,r.kt)("p",null,"Note that both the master and taskmanager environment variables need to be set."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The connection information, username and password of the Postgres database need to be modified according to the actual deployment.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that if you use Session mode to start a job, that is, submit the job to Flink Standalone Cluster as a client, ",(0,r.kt)("inlineCode",{parentName:"p"},"flink run")," as a client will not read the above configuration, so you need to configure the environment variables separately, namely:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export LAKESOUL_PG_DRIVER=com.lakesoul.shaded.org.postgresql.Driver\nexport LAKESOUL_PG_URL=jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=unspecified\nexport LAKESOUL_PG_USERNAME=root\nexport LAKESOUL_PG_PASSWORD=root\n"))),(0,r.kt)("h4",{id:"22-start-sync-job"},"2.2 Start sync job"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/flink run -c org.apache.flink.lakesoul.entry.MysqlCdc \\\n    lakesoul-flink-2.3.0-flink-1.14.jar \\\n    --source_db.host localhost \\\n    --source_db.port 3306 \\\n    --source_db.db_name default \\\n    --source_db.user root \\\n    --source_db.password root \\\n    --source.parallelism 4 \\\n    --sink.parallelism 4 \\\n    --server_time_zone=Asia/Shanghai\n    --warehouse_path s3://bucket/lakesoul/flink/data \\\n    --flink.checkpoint s3://bucket/lakesoul/flink/checkpoints \\\n    --flink.savepoint s3://bucket/lakesoul/flink/savepoints\n")),(0,r.kt)("p",null,"Description of required parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Value Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-c"),(0,r.kt)("td",{parentName:"tr",align:null},"The task runs the main function entry class"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.flink.lakesoul.entry.MysqlCdc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Main package"),(0,r.kt)("td",{parentName:"tr",align:null},"Task running jar"),(0,r.kt)("td",{parentName:"tr",align:null},"lakesoul-flink-2.3.0-flink-1.14.jar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--source_db.host"),(0,r.kt)("td",{parentName:"tr",align:null},"The address of the MySQL database"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--source_db.port"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL database port"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--source_db.user"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL database username"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--source_db.password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for MySQL database"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--source.parallelism"),(0,r.kt)("td",{parentName:"tr",align:null},"The parallelism of a single table read task affects the data reading speed. The larger the value, the greater the pressure on MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},"The parallelism can be adjusted according to the write QPS of MySQL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--sink.parallelism"),(0,r.kt)("td",{parentName:"tr",align:null},"The parallelism of the single-table write task, which is also the number of primary key shards in the LakeSoul table. Affects the landing speed of data entering the lake. The larger the value, the greater the number of small files, which affects the subsequent read performance; the smaller the value, the greater the pressure on the write task, and the greater the possibility of data skew. It can be adjusted according to the data volume of the largest table. It is generally recommended that a degree of parallelism (primary key sharding) manage no more than 10 million rows of data."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--warehouse_path"),(0,r.kt)("td",{parentName:"tr",align:null},"Data storage path prefix (cluster prefix is \u200b\u200brequired for hdfs)"),(0,r.kt)("td",{parentName:"tr",align:null},"LakeSoul will write the corresponding table data to the ${warehouse_path}/database_name/table_name/ directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--flink.savepoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink savepoint path (cluster prefix is \u200b\u200brequired for hdfs)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--flink.checkpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink checkpoint path (cluster prefix is \u200b\u200brequired for hdfs)"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Other Flink parameters, such as job manager, task manager CPU, memory, slots, etc., also need to be set according to the specific situation."),(0,r.kt)("p",null,"Optional parameter description:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Filling Format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--source_db.exclude_tables"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of data table names that do not need to be synchronized, separated by commas, the default is empty"),(0,r.kt)("td",{parentName:"tr",align:null},"--source_db.exclude_tables test_1,test_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--job.checkpoint_mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Data synchronization mode, the default is EXACTLY_ONCE"),(0,r.kt)("td",{parentName:"tr",align:null},"--job.checkpoint_mode AT_LEAST_ONCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--job.checkpoint_interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Checkpoint storage interval, in ms, default is 10 minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"--job.checkpoint_interval 1200000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--server_time_zone=Asia/Shanghai"),(0,r.kt)("td",{parentName:"tr",align:null},'MySQL server time zone, Flink side defaults to "Asia/Shanghai"'),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to ","[JDK ZoneID documentation]","(",(0,r.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java"},"https://docs.oracle.com/javase/8/docs/api/java")," /time/ZoneId.html)")))),(0,r.kt)("h2",{id:"lakesoul-flink-cdc-sink-job-execution-process"},"LakeSoul Flink CDC Sink job execution process"),(0,r.kt)("p",null,"In the initialization phase after the LakeSoul Flink job starts, it will first read all the tables in the configured MySQL DB (excluding tables that do not need to be synchronized). For each table, first determine whether it exists in LakeSoul. If it does not exist, a LakeSoul table is automatically created, and its schema is consistent with the corresponding table in MySQL."),(0,r.kt)("p",null,"After initialization, the CDC Stream of all tables will be read and written to the corresponding LakeSoul tables in Upsert mode."),(0,r.kt)("p",null,"If a DDL Schema change occurs to a MySQL table during synchronization, the change will also be applied to the corresponding LakeSoul table."),(0,r.kt)("h2",{id:"lakesoul-flink-cdc-sink-exactly-once-semantic-guarantee"},"LakeSoul Flink CDC Sink Exactly Once Semantic Guarantee"),(0,r.kt)("p",null,"LakeSoul Flink CDC Sink automatically saves the relevant state during job running, and can restore and rewrite the state when a Flink job fails, so data will not be lost."),(0,r.kt)("p",null,"When LakeSoul writes, write idempotency is guaranteed in two parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When the stage file is Commit, it is consistent with the Flink File Sink. The atomicity of the file system rename operation is used to ensure that the staging file is written to the final path. Because rename is atomic, no duplicate writes or misses occur after a Failover."),(0,r.kt)("li",{parentName:"ol"},"When the LakeSoul metadata is submitted, the file path will be recorded first, and when the snapshot is updated, the file will be marked as submitted through a transaction. After Failover, by judging whether a file has been submitted, the idempotency of submission can be guaranteed.")),(0,r.kt)("p",null,"In summary, LakeSoul Flink CDC Sink ensures that data is not lost through state recovery, and ensures that data is not duplicated by committing with idempotency, which achieves an exactly once semantic guarantee."),(0,r.kt)("h2",{id:"type-mapping-relationship-between-mysql-and-lakesoul"},"Type mapping relationship between MySQL and LakeSoul"),(0,r.kt)("p",null,"Since MySQL, Spark, Parquet and other data types are not exactly the same, LakeSoul makes the following mapping relationships during synchronization (types that are not in the table are currently not supported):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"MySQL Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Spark Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN, BOOL"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.BooleanType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIT(1)"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.BooleanType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIT(>1)"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.BinaryType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.IntegerType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT","[(M)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.IntegerType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MEDIUMINT","[(M)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.IntegerType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT, INTEGER","[(M)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.IntegerType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT","[(M)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.LongType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REAL","[(M,D)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.FloatType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT","[(M,D)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.DoubleType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE","[(M,D)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.DoubleType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR(M)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR(M)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BINARY(M)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.BinaryType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARBINARY(M)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.BinaryType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYBLOB"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.BinaryType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYTEXT"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BLOB"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.BinaryType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MEDIUMBLOB"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.BinaryType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MEDIUMTEXT"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LONGBLOB"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.BinaryType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LONGTEXT"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSON"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ENUM"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SET"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"YEAR","[(2","|","4)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.IntegerType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP","[(M)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.TimestampType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.DateType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME","[(M)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.LongType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME","[(M)]"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.types.DataTypes.TimestampType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NUMERIC[(M","[,D]",")],DECIMAL[(M","[,D]",")]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"if decimal.handling.mode=precise")," ",(0,r.kt)("br",null),"\u2003","org.apache.spark.sql.types.DecimalType(M,D) ",(0,r.kt)("br",null),"if ",(0,r.kt)("em",{parentName:"td"},"decimal.handling.mode=string"),(0,r.kt)("br",null),"   ","\u2003","                 org.apache.spark.sql.types.DataTypes.StringType",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"if decimal.handling.mode=doulbe")," ",(0,r.kt)("br",null),"\u2003","org.apache.spark.sql.types.DataTypes.DoubleType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GEOMETRY, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, GEOMETRYCOLLECTION, POINT"),(0,r.kt)("td",{parentName:"tr",align:null},"Not currently supported")))),(0,r.kt)("p",null,"Types in Spark, type names in Spark SQL, you can find the corresponding relationship in the ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-ref-datatypes.html"},"Spark Data Types")," document."),(0,r.kt)("h2",{id:"precautions"},"Precautions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A table in MySQL must have a primary key, and tables without a primary key are currently not supported;"),(0,r.kt)("li",{parentName:"ol"},"The DDL change currently supports adding a column at the end, or deleting a column in the middle; the default value of a new column currently only supports ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),", and LakeSoul will automatically add a ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," value to the column when reading old data; the deleted column , LakeSoul will automatically filter this column when reading;"),(0,r.kt)("li",{parentName:"ol"},"The TIME type in MySQL corresponds to the LongType type in LakeSoul, as there is no TIME data type in Spark and Debezium resolves the TIME type to the current value in microseconds from 00:00:00. Therefore, this is consistent with Debezium;"),(0,r.kt)("li",{parentName:"ol"},"The TIMESTAMP and DATETIME types in MySQL are stored as UTC TIME ZOME values in LakeSoul to avoid time zone resolution issues; When reading, you just need to specify the time zone and it can be parsed according to the specified time zone. So it is necessary to correctly fill in the server_time_zone parameter when starting the FLINK CDC task.")))}k.isMDXComponent=!0}}]);