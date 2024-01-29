"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[4360],{7744:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var n=l(5893),a=l(1151);const t={},o="Use Kyuubi JDBC to Access Lakesoul's Table",i={id:"Usage Docs/setup-kyuubi",title:"Use Kyuubi JDBC to Access Lakesoul's Table",description:"\x3c!--",source:"@site/docs/03-Usage Docs/13-setup-kyuubi.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/setup-kyuubi",permalink:"/docs/Usage Docs/setup-kyuubi",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/13-setup-kyuubi.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multi-tenant: Workspace and Role Permission Control",permalink:"/docs/Usage Docs/workspace-and-rbac"},next:{title:"Sync LakeSoul Tables to other Databases",permalink:"/docs/Usage Docs/export-to-databases"}},r={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Flink SQL Access Lakesoul&#39;s Table",id:"flink-sql-access-lakesouls-table",level:2},{value:"1. Dependencies",id:"1-dependencies",level:3},{value:"2. Configurations",id:"2-configurations",level:3},{value:"3. LakeSoul Operations",id:"3-lakesoul-operations",level:3},{value:"Spark SQL Access Lakesoul&#39;s Table",id:"spark-sql-access-lakesouls-table",level:2},{value:"1. Dependencies",id:"1-dependencies-1",level:3},{value:"2. Configurations",id:"2-configurations-1",level:3},{value:"3. LakeSoul Operations",id:"3-lakesoul-operations-1",level:3}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"use-kyuubi-jdbc-to-access-lakesouls-table",children:"Use Kyuubi JDBC to Access Lakesoul's Table"}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"Available since version 2.4."})}),"\n",(0,n.jsx)(s.p,{children:"LakeSoul implements Flink/Spark Connector.We could use Spark/Flink SQL queries towards Lakesoul by using kyuubi."}),"\n",(0,n.jsx)(s.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Components"}),(0,n.jsx)(s.th,{children:"Version"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Kyuubi"}),(0,n.jsx)(s.td,{children:"1.8"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Spark"}),(0,n.jsx)(s.td,{children:"3.3"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Flink"}),(0,n.jsx)(s.td,{children:"1.17"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"LakeSoul"}),(0,n.jsx)(s.td,{children:"2.5.1"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Java"}),(0,n.jsx)(s.td,{children:"1.8"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"The operating environment is Linux, and Spark, Flink, and Kyuubi have been installed. It is recommended to use Hadoop Yarn to run the Kyuubi Engine. Also, you could start local spark/flink cluster."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://kyuubi.readthedocs.io/en/v1.7.3/deployment/engine_on_yarn.html",children:"Deploy Kyuubi engines on Yarn"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"flink-sql-access-lakesouls-table",children:"Flink SQL Access Lakesoul's Table"}),"\n",(0,n.jsx)(s.h3,{id:"1-dependencies",children:"1. Dependencies"}),"\n",(0,n.jsxs)(s.p,{children:["Download LakeSoul Flink Jar from: ",(0,n.jsx)(s.a,{href:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.5.1/lakesoul-flink-2.5.1-flink-1.17.jar",children:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.5.1/lakesoul-flink-2.5.1-flink-1.17.jar"})]}),"\n",(0,n.jsxs)(s.p,{children:["And put the jar file under ",(0,n.jsx)(s.code,{children:"$FLINK_HOME/lib"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"2-configurations",children:"2. Configurations"}),"\n",(0,n.jsxs)(s.p,{children:["Please set the PG parameters related to Lakesoul according to this document:\n",(0,n.jsx)(s.a,{href:"/docs/Usage%20Docs/setup-spark#setup-metadata-database-connection-for-flink",children:"Setup Metadata Database Connection for Flink"})]}),"\n",(0,n.jsx)(s.p,{children:"After this, you could start flink session cluster or application as usual."}),"\n",(0,n.jsx)(s.h3,{id:"3-lakesoul-operations",children:"3. LakeSoul Operations"}),"\n",(0,n.jsx)(s.p,{children:"Use Kyuubi beeline to connect Flink SQL Engine:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$KYUUBI_HOME/bin/beeline -u 'jdbc:hive2://localhost:10009/default;user=admin;?kyuubi.engine.type=FLINK_SQL'\n"})}),"\n",(0,n.jsx)(s.p,{children:"Flink SQL Access Lakesoul :"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"create catalog lakesoul with('type'='lakesoul');\nuse catalog lakesoul;\nuse `default`;\n\ncreate table if not exists test_lakesoul_table_v1 (`id` INT, name STRING, score INT,`date` STRING,region STRING, PRIMARY KEY (`id`,`name`) NOT ENFORCED ) PARTITIONED BY (`region`,`date`) WITH ( 'connector'='lakeSoul', 'use_cdc'='true','format'='lakesoul', 'path'='hdfs:///lakesoul-test-bucket/default/test_lakesoul_table_v1/', 'hashBucketNum'='4');\n\ninsert into `lakesoul`.`default`.test_lakesoul_table_v1 values (1,'AAA', 100, '2023-05-11', 'China');\ninsert into `lakesoul`.`default`.test_lakesoul_table_v1 values (2,'BBB', 100, '2023-05-11', 'China');\ninsert into `lakesoul`.`default`.test_lakesoul_table_v1 values (3,'AAA', 98, '2023-05-10', 'China');\n\nselect * from `lakesoul`.`default`.test_lakesoul_table_v1 limit 1;\n\ndrop table `lakesoul`.`default`.test_lakesoul_table_v1;\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You could replace the location schema from  ",(0,n.jsx)(s.code,{children:"hdfs://"})," to ",(0,n.jsx)(s.code,{children:"file://"})," ."]}),"\n",(0,n.jsxs)(s.p,{children:["More details about Flink SQL with LakeSoul refer to : ",(0,n.jsx)(s.a,{href:"/docs/Usage%20Docs/flink-lakesoul-connector",children:"Flink Lakesoul Connector"})]}),"\n",(0,n.jsx)(s.h2,{id:"spark-sql-access-lakesouls-table",children:"Spark SQL Access Lakesoul's Table"}),"\n",(0,n.jsx)(s.h3,{id:"1-dependencies-1",children:"1. Dependencies"}),"\n",(0,n.jsxs)(s.p,{children:["Download LakeSoul Spark Jar from: ",(0,n.jsx)(s.a,{href:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.5.1/lakesoul-spark-2.5.1-spark-3.3.jar",children:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.5.1/lakesoul-spark-2.5.1-spark-3.3.jar"})]}),"\n",(0,n.jsxs)(s.p,{children:["And put the jar file under ",(0,n.jsx)(s.code,{children:"$SPARK_HOME/jars"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"2-configurations-1",children:"2. Configurations"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Please set the PG parameters related to Lakesoul according to this document:\n",(0,n.jsx)(s.a,{href:"/docs/Usage%20Docs/setup-spark#pass-lakesoul_home-environment-variable-to-your-spark-job",children:"Setup Metadata Database Connection for Spark"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Add spark conf to ",(0,n.jsx)(s.code,{children:"$SPARK_CONF_DIR/spark-defaults.conf"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension\n\nspark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog\n\nspark.sql.defaultCatalog=lakesoul\n\nspark.sql.caseSensitive=false\nspark.sql.legacy.parquet.nanosAsLong=false\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"3-lakesoul-operations-1",children:"3. LakeSoul Operations"}),"\n",(0,n.jsx)(s.p,{children:"Use Kyuubi beeline to connect Spark SQL Engine:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$KYUUBI_HOME/bin/beeline -u 'jdbc:hive2://localhost:10009/default;user=admin;?kyuubi.engine.type=SPARK_SQL'\n"})}),"\n",(0,n.jsx)(s.p,{children:"Spark SQL Access Lakesoul :"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"use default;\n\ncreate table if not exists test_lakesoul_table_v2 (id INT, name STRING, score INT, date STRING,region STRING) USING lakesoul PARTITIONED BY (region,date) LOCATION 'hdfs:///lakesoul-test-bucket/default/test_lakesoul_table_v2/';\n\ninsert into test_lakesoul_table_v2 values (1,'AAA', 100, '2023-05-11', 'China');\ninsert into test_lakesoul_table_v2 values (2,'BBB', 100, '2023-05-11', 'China');\ninsert into test_lakesoul_table_v2 values (3,'AAA', 98, '2023-05-10', 'China');\n\nselect * from test_lakesoul_table_v2 limit 1;\n\ndrop table test_lakesoul_table_v2;\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You could replace the location schema from  ",(0,n.jsx)(s.code,{children:"hdfs://"})," to ",(0,n.jsx)(s.code,{children:"file://"})," ."]}),"\n",(0,n.jsxs)(s.p,{children:["More details about Spark SQL with LakeSoul refer to : ",(0,n.jsx)(s.a,{href:"/docs/Usage%20Docs/spark-api-docs#7-operate-lakesoultable-by-spark-sql",children:"Operate LakeSoulTable by Spark SQL"})]})]})}function d(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,s,l)=>{l.d(s,{Z:()=>i,a:()=>o});var n=l(7294);const a={},t=n.createContext(a);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);