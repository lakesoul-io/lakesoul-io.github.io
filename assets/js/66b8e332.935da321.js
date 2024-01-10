"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>m});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),i=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},k=function(e){var t=i(e.components);return l.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,k=r(e,["components","mdxType","originalType","parentName"]),p=i(a),d=n,m=p["".concat(u,".").concat(d)]||p[d]||c[d]||o;return a?l.createElement(m,s(s({ref:t},k),{},{components:a})):l.createElement(m,s({ref:t},k))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[p]="string"==typeof e?e:n,s[1]=r;for(var i=2;i<o;i++)s[i]=a[i];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var l=a(7462),n=(a(7294),a(3905));const o={},s="Use Kyuubi JDBC to Access Lakesoul's Table",r={unversionedId:"Usage Docs/setup-kyuubi",id:"Usage Docs/setup-kyuubi",title:"Use Kyuubi JDBC to Access Lakesoul's Table",description:"\x3c!--",source:"@site/docs/03-Usage Docs/13-setup-kyuubi.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/setup-kyuubi",permalink:"/docs/Usage Docs/setup-kyuubi",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/13-setup-kyuubi.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multi-tenant: Workspace and Role Permission Control",permalink:"/docs/Usage Docs/workspace-and-rbac"},next:{title:"Sync LakeSoul Tables to other Databases",permalink:"/docs/Usage Docs/export-to-databases"}},u={},i=[{value:"Requirements",id:"requirements",level:2},{value:"Flink SQL Access Lakesoul&#39;s Table",id:"flink-sql-access-lakesouls-table",level:2},{value:"1. Dependencies",id:"1-dependencies",level:3},{value:"2. Configurations",id:"2-configurations",level:3},{value:"3. LakeSoul Operations",id:"3-lakesoul-operations",level:3},{value:"Spark SQL Access Lakesoul&#39;s Table",id:"spark-sql-access-lakesouls-table",level:2},{value:"1. Dependencies",id:"1-dependencies-1",level:3},{value:"2. Configurations",id:"2-configurations-1",level:3},{value:"3. LakeSoul Operations",id:"3-lakesoul-operations-1",level:3}],k={toc:i},p="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-kyuubi-jdbc-to-access-lakesouls-table"},"Use Kyuubi JDBC to Access Lakesoul's Table"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Available since version 2.4.")),(0,n.kt)("p",null,"LakeSoul implements Flink/Spark Connector.We could use Spark/Flink SQL queries towards Lakesoul by using kyuubi."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Components"),(0,n.kt)("th",{parentName:"tr",align:null},"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Kyuubi"),(0,n.kt)("td",{parentName:"tr",align:null},"1.8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Spark"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Flink"),(0,n.kt)("td",{parentName:"tr",align:null},"1.17")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LakeSoul"),(0,n.kt)("td",{parentName:"tr",align:null},"2.5.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Java"),(0,n.kt)("td",{parentName:"tr",align:null},"1.8")))),(0,n.kt)("p",null,"The operating environment is Linux, and Spark, Flink, and Kyuubi have been installed. It is recommended to use Hadoop Yarn to run the Kyuubi Engine. Also, you could start local spark/flink cluster."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://kyuubi.readthedocs.io/en/v1.7.3/deployment/engine_on_yarn.html"},"Deploy Kyuubi engines on Yarn"),"."),(0,n.kt)("h2",{id:"flink-sql-access-lakesouls-table"},"Flink SQL Access Lakesoul's Table"),(0,n.kt)("h3",{id:"1-dependencies"},"1. Dependencies"),(0,n.kt)("p",null,"Download LakeSoul Flink Jar from: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.5.0/lakesoul-flink-2.5.0-flink-1.17.jar"},"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.5.0/lakesoul-flink-2.5.0-flink-1.17.jar")),(0,n.kt)("p",null,"And put the jar file under ",(0,n.kt)("inlineCode",{parentName:"p"},"$FLINK_HOME/lib"),"."),(0,n.kt)("h3",{id:"2-configurations"},"2. Configurations"),(0,n.kt)("p",null,"Please set the PG parameters related to Lakesoul according to this document:\n",(0,n.kt)("a",{parentName:"p",href:"/docs/Usage%20Docs/setup-spark#setup-metadata-database-connection-for-flink"},"Setup Metadata Database Connection for Flink")),(0,n.kt)("p",null," After this, you could start flink session cluster or application as usual."),(0,n.kt)("h3",{id:"3-lakesoul-operations"},"3. LakeSoul Operations"),(0,n.kt)("p",null,"Use Kyuubi beeline to connect Flink SQL Engine:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$KYUUBI_HOME/bin/beeline -u 'jdbc:hive2://localhost:10009/default;user=admin;?kyuubi.engine.type=FLINK_SQL'\n")),(0,n.kt)("p",null,"Flink SQL Access Lakesoul : "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-SQL"},"create catalog lakesoul with('type'='lakesoul');\nuse catalog lakesoul;\nuse `default`;\n\ncreate table if not exists test_lakesoul_table_v1 (`id` INT, name STRING, score INT,`date` STRING,region STRING, PRIMARY KEY (`id`,`name`) NOT ENFORCED ) PARTITIONED BY (`region`,`date`) WITH ( 'connector'='lakeSoul', 'use_cdc'='true','format'='lakesoul', 'path'='hdfs:///lakesoul-test-bucket/default/test_lakesoul_table_v1/', 'hashBucketNum'='4');\n\ninsert into `lakesoul`.`default`.test_lakesoul_table_v1 values (1,'AAA', 100, '2023-05-11', 'China');\ninsert into `lakesoul`.`default`.test_lakesoul_table_v1 values (2,'BBB', 100, '2023-05-11', 'China');\ninsert into `lakesoul`.`default`.test_lakesoul_table_v1 values (3,'AAA', 98, '2023-05-10', 'China');\n\nselect * from `lakesoul`.`default`.test_lakesoul_table_v1 limit 1;\n\ndrop table `lakesoul`.`default`.test_lakesoul_table_v1;\n")),(0,n.kt)("p",null,"You could replace the location schema from  ",(0,n.kt)("inlineCode",{parentName:"p"},"hdfs://")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"file://")," ."),(0,n.kt)("p",null,"More details about Flink SQL with LakeSoul refer to : ",(0,n.kt)("a",{parentName:"p",href:"/docs/Usage%20Docs/flink-lakesoul-connector"},"Flink Lakesoul Connector")," "),(0,n.kt)("h2",{id:"spark-sql-access-lakesouls-table"},"Spark SQL Access Lakesoul's Table"),(0,n.kt)("h3",{id:"1-dependencies-1"},"1. Dependencies"),(0,n.kt)("p",null,"Download LakeSoul Spark Jar from: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.5.0/lakesoul-spark-2.5.0-spark-3.3.jar"},"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.5.0/lakesoul-spark-2.5.0-spark-3.3.jar")),(0,n.kt)("p",null,"And put the jar file under ",(0,n.kt)("inlineCode",{parentName:"p"},"$SPARK_HOME/jars"),". "),(0,n.kt)("h3",{id:"2-configurations-1"},"2. Configurations"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Please set the PG parameters related to Lakesoul according to this document:\n",(0,n.kt)("a",{parentName:"p",href:"/docs/Usage%20Docs/setup-spark#pass-lakesoul_home-environment-variable-to-your-spark-job"},"Setup Metadata Database Connection for Spark"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add spark conf to ",(0,n.kt)("inlineCode",{parentName:"p"},"$SPARK_CONF_DIR/spark-defaults.conf")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension\n\nspark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog\n\nspark.sql.defaultCatalog=lakesoul\n\nspark.sql.caseSensitive=false\nspark.sql.legacy.parquet.nanosAsLong=false\n")))),(0,n.kt)("h3",{id:"3-lakesoul-operations-1"},"3. LakeSoul Operations"),(0,n.kt)("p",null,"Use Kyuubi beeline to connect Spark SQL Engine:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$KYUUBI_HOME/bin/beeline -u 'jdbc:hive2://localhost:10009/default;user=admin;?kyuubi.engine.type=SPARK_SQL'\n")),(0,n.kt)("p",null,"Spark SQL Access Lakesoul : "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-SQL"},"use default;\n\ncreate table if not exists test_lakesoul_table_v2 (id INT, name STRING, score INT, date STRING,region STRING) USING lakesoul PARTITIONED BY (region,date) LOCATION 'hdfs:///lakesoul-test-bucket/default/test_lakesoul_table_v2/' TBLPROPERTIES( 'hashPartitions'='id,name', 'use_cdc'='true', 'hashBucketNum'='4');\n\ninsert into test_lakesoul_table_v2 values (1,'AAA', 100, '2023-05-11', 'China');\ninsert into test_lakesoul_table_v2 values (2,'BBB', 100, '2023-05-11', 'China');\ninsert into test_lakesoul_table_v2 values (3,'AAA', 98, '2023-05-10', 'China');\n\nselect * from test_lakesoul_table_v2 limit 1;\n\ndrop table test_lakesoul_table_v2;\n")),(0,n.kt)("p",null,"You could replace the location schema from  ",(0,n.kt)("inlineCode",{parentName:"p"},"hdfs://")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"file://")," ."),(0,n.kt)("p",null,"More details about Spark SQL with LakeSoul refer to : ",(0,n.kt)("a",{parentName:"p",href:"/docs/Usage%20Docs/api-docs#7-operate-lakesoultable-by-spark-sql"},"Operate LakeSoulTable by Spark SQL")))}c.isMDXComponent=!0}}]);