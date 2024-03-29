"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[1590],{6256:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var o=s(5893),n=s(1151);const l={},r="Setup Your Spark and Flink Project/Job",t={id:"Usage Docs/setup-spark",title:"Setup Your Spark and Flink Project/Job",description:"\x3c!--",source:"@site/docs/03-Usage Docs/02-setup-spark.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/setup-spark",permalink:"/docs/Usage Docs/setup-spark",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/02-setup-spark.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup LakeSoul Meta DB",permalink:"/docs/Usage Docs/setup-meta-env"},next:{title:"Spark API Docs",permalink:"/docs/Usage Docs/spark-api-docs"}},i={},d=[{value:"Setup Spark Project or Job",id:"setup-spark-project-or-job",level:2},{value:"Required Spark Version",id:"required-spark-version",level:3},{value:"Setup (Py)Spark Shell or Spark SQL Shell",id:"setup-pyspark-shell-or-spark-sql-shell",level:3},{value:"Use Maven Coordinates via --packages",id:"use-maven-coordinates-via---packages",level:4},{value:"Use Local Packages",id:"use-local-packages",level:4},{value:"Setup Java/Scala Project for Spark",id:"setup-javascala-project-for-spark",level:3},{value:"Pass <code>lakesoul_home</code> Environment Variable to Your Spark Job",id:"pass-lakesoul_home-environment-variable-to-your-spark-job",level:3},{value:"Set Spark SQL Extension",id:"set-spark-sql-extension",level:3},{value:"Set Spark&#39;s Catalog",id:"set-sparks-catalog",level:3},{value:"Set Spark&#39;s SessionCatalog",id:"set-sparks-sessioncatalog",level:3},{value:"Use LakeSoul by default when the provider/format is not specified (without using/stored as clause) when creating the table",id:"use-lakesoul-by-default-when-the-providerformat-is-not-specified-without-usingstored-as-clause-when-creating-the-table",level:3},{value:"Setup Flink Project or Job",id:"setup-flink-project-or-job",level:2},{value:"Required Flink Version",id:"required-flink-version",level:3},{value:"Setup Metadata Database Connection for Flink",id:"setup-metadata-database-connection-for-flink",level:3},{value:"Add LakeSoul Jar to Flink&#39;s directory",id:"add-lakesoul-jar-to-flinks-directory",level:3},{value:"Add LakeSoul Flink Maven Dependency in Your Java Project",id:"add-lakesoul-flink-maven-dependency-in-your-java-project",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{id:"setup-your-spark-and-flink-projectjob",children:"Setup Your Spark and Flink Project/Job"}),"\n",(0,o.jsx)(a.h2,{id:"setup-spark-project-or-job",children:"Setup Spark Project or Job"}),"\n",(0,o.jsx)(a.h3,{id:"required-spark-version",children:"Required Spark Version"}),"\n",(0,o.jsx)(a.p,{children:"LakeSoul is currently available with Scala version 2.12 and Spark version 3.3."}),"\n",(0,o.jsx)(a.h3,{id:"setup-pyspark-shell-or-spark-sql-shell",children:"Setup (Py)Spark Shell or Spark SQL Shell"}),"\n",(0,o.jsxs)(a.p,{children:["To use ",(0,o.jsx)(a.code,{children:"spark-shell"}),", ",(0,o.jsx)(a.code,{children:"pyspark"})," or ",(0,o.jsx)(a.code,{children:"spark-sql"})," shells, you should include LakeSoul's dependencies. There are two approaches to achieve this."]}),"\n",(0,o.jsx)(a.h4,{id:"use-maven-coordinates-via---packages",children:"Use Maven Coordinates via --packages"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"spark-shell --packages com.dmetasoul:lakesoul-spark:3.3-2.5.2\n"})}),"\n",(0,o.jsx)(a.h4,{id:"use-local-packages",children:"Use Local Packages"}),"\n",(0,o.jsxs)(a.p,{children:["You can find the LakeSoul packages from our release page: ",(0,o.jsx)(a.a,{href:"https://github.com/lakesoul-io/LakeSoul/releases",children:"Releases"}),".\nDownload the jar file and pass it to ",(0,o.jsx)(a.code,{children:"spark-submit"}),"."]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:'spark-submit --jars "lakesoul-spark-3.3-2.5.2.jar"\n'})}),"\n",(0,o.jsxs)(a.p,{children:["Or you could directly put the jar into ",(0,o.jsx)(a.code,{children:"$SPARK_HOME/jars"})]}),"\n",(0,o.jsx)(a.h3,{id:"setup-javascala-project-for-spark",children:"Setup Java/Scala Project for Spark"}),"\n",(0,o.jsx)(a.p,{children:"Include maven dependencies in your project:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.dmetasoul</groupId>\n    <artifactId>lakesoul-spark</artifactId>\n    <version>3.3-2.5.2</version>\n</dependency>\n"})}),"\n",(0,o.jsxs)(a.h3,{id:"pass-lakesoul_home-environment-variable-to-your-spark-job",children:["Pass ",(0,o.jsx)(a.code,{children:"lakesoul_home"})," Environment Variable to Your Spark Job"]}),"\n",(0,o.jsx)(a.p,{children:"If you are using Spark's local or client mode, you could just export the env var in your shell:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"export lakesoul_home=/path/to/lakesoul.properties\n"})}),"\n",(0,o.jsx)(a.p,{children:"If you are using Spark's cluster mode, in which the driver would also be scheduled into Yarn or K8s cluster, you can setup the driver's env:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["For Hadoop Yarn, pass ",(0,o.jsx)(a.code,{children:"--conf spark.yarn.appMasterEnv.lakesoul_home=lakesoul.properties --files /path/to/lakesoul.properties"})," to ",(0,o.jsx)(a.code,{children:"spark-submit"})," command;"]}),"\n",(0,o.jsxs)(a.li,{children:["For K8s, pass ",(0,o.jsx)(a.code,{children:"--conf spark.kubernetes.driverEnv.lakesoul_home=lakesoul.properties --files /path/to/lakesoul.properties"})," to ",(0,o.jsx)(a.code,{children:"spark-submit"})," command."]}),"\n"]}),"\n",(0,o.jsx)(a.h3,{id:"set-spark-sql-extension",children:"Set Spark SQL Extension"}),"\n",(0,o.jsx)(a.p,{children:"LakeSoul implements some query plan rewriting extensions through the Spark SQL Extension mechanism, and the following configuration needs to be added to the Spark job:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-properties",children:"spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension\n"})}),"\n",(0,o.jsx)(a.h3,{id:"set-sparks-catalog",children:"Set Spark's Catalog"}),"\n",(0,o.jsx)(a.p,{children:"LakeSoul implements the CatalogPlugin interface of Spark 3, which can be loaded by Spark as an independent Catalog plugin. Add the following configuration to the Spark job:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-properties",children:"spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog\n"})}),"\n",(0,o.jsxs)(a.p,{children:["This configuration adds a Catalog called ",(0,o.jsx)(a.code,{children:"lakesoul"}),". For convenience in SQL, you can also set the Catalog as the default Catalog:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-properties",children:"spark.sql.defaultCatalog=lakesoul\n"})}),"\n",(0,o.jsxs)(a.p,{children:["With the above configuration, all databases and tables will be found through LakeSoul Catalog by default. If you need to access external catalogs such as Hive at the same time, you need to add the corresponding catalog name before the table name. For example, if Hive is enabled as the Session Catalog in Spark, the ",(0,o.jsx)(a.code,{children:"spark_catalog"})," prefix needs to be added when accessing the Hive table."]}),"\n",(0,o.jsxs)(a.admonition,{type:"tip",children:[(0,o.jsxs)(a.p,{children:["In versions 2.0.1 and earlier, LakeSoul only implements the Session Catalog interface, which can only be set through ",(0,o.jsx)(a.code,{children:"spark.sql.catalog.spark_catalog=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog"}),". However, before Spark 3.3, the Session Catalog did not fully support the DataSource V2 table. From 2.1.0 onwards, LakeSoul's Catalog has been changed to a non-session implementation."]}),(0,o.jsxs)(a.p,{children:["From 2.1.0 onwards, you can still set LakeSoul as Session Catalog, which is called ",(0,o.jsx)(a.code,{children:"spark_catalog"}),", but you can no longer access Hive tables."]})]}),"\n",(0,o.jsx)(a.h3,{id:"set-sparks-sessioncatalog",children:"Set Spark's SessionCatalog"}),"\n",(0,o.jsx)(a.p,{children:"If you don't need to access Hive, you can also set LakeSoul directly as SessionCatalog:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-properties",children:"# Set LakeSoul as session catalog\nspark.sql.catalog.spark_catalog org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog\n# disable hive\nspark.sql.catalogImplementation in-memory\n"})}),"\n",(0,o.jsx)(a.h3,{id:"use-lakesoul-by-default-when-the-providerformat-is-not-specified-without-usingstored-as-clause-when-creating-the-table",children:"Use LakeSoul by default when the provider/format is not specified (without using/stored as clause) when creating the table"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-properties",children:"spark.sql.legacy.createHiveTableByDefault false\nspark.sql.sources.default lakesoul\n"})}),"\n",(0,o.jsx)(a.h2,{id:"setup-flink-project-or-job",children:"Setup Flink Project or Job"}),"\n",(0,o.jsx)(a.h3,{id:"required-flink-version",children:"Required Flink Version"}),"\n",(0,o.jsx)(a.p,{children:"Since 2.4.0, Flink version 1.17 is supported."}),"\n",(0,o.jsx)(a.h3,{id:"setup-metadata-database-connection-for-flink",children:"Setup Metadata Database Connection for Flink"}),"\n",(0,o.jsxs)(a.p,{children:["Add the following configuration to ",(0,o.jsx)(a.code,{children:"$FLINK_HOME/conf/flink-conf.yaml"}),":"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-yaml",children:"containerized.master.env.LAKESOUL_PG_DRIVER: com.lakesoul.shaded.org.postgresql.Driver\ncontainerized.master.env.LAKESOUL_PG_USERNAME: root\ncontainerized.master.env.LAKESOUL_PG_PASSWORD: root\ncontainerized.master.env.LAKESOUL_PG_URL: jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=unspecified\ncontainerized.taskmanager.env.LAKESOUL_PG_DRIVER: com.lakesoul.shaded.org.postgresql.Driver\ncontainerized.taskmanager.env.LAKESOUL_PG_USERNAME: root\ncontainerized.taskmanager.env.LAKESOUL_PG_PASSWORD: root\ncontainerized.taskmanager.env.LAKESOUL_PG_URL: jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=unspecified\n"})}),"\n",(0,o.jsx)(a.p,{children:"Note that both the master and taskmanager environment variables need to be set."}),"\n",(0,o.jsx)(a.admonition,{type:"tip",children:(0,o.jsx)(a.p,{children:"The connection information, username and password of the Postgres database need to be modified according to the actual deployment."})}),"\n",(0,o.jsxs)(a.admonition,{type:"caution",children:[(0,o.jsxs)(a.p,{children:["Note that if you use Session mode to start a job, that is, submit the job to Flink Standalone Cluster as a client, ",(0,o.jsx)(a.code,{children:"flink run"})," as a client will not read the above configuration, so you need to configure the environment variables separately, namely:"]}),(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"export LAKESOUL_PG_DRIVER=com.lakesoul.shaded.org.postgresql.Driver\nexport LAKESOUL_PG_URL=jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=unspecified\nexport LAKESOUL_PG_USERNAME=root\nexport LAKESOUL_PG_PASSWORD=root\n"})})]}),"\n",(0,o.jsxs)(a.admonition,{type:"tip",children:[(0,o.jsxs)(a.p,{children:["If you need to access S3, you also need to download ",(0,o.jsx)(a.code,{children:"[flink-s3-hadoop](https://mvnrepository.com/artifact/org.apache.flink/flink-s3-fs-hadoop)"})," corresponding to the Flink version, and put to the ",(0,o.jsx)(a.code,{children:"$FLINK_HOME/lib"})," directory."]}),(0,o.jsx)(a.p,{children:"If access to the Hadoop environment is required, the Hadoop Classpath environment variable can be declared:"}),(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n"})}),(0,o.jsxs)(a.p,{children:["For details, please refer to: ",(0,o.jsx)(a.a,{href:"https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/resource-providers/yarn/",children:"Flink on Hadoop"})]})]}),"\n",(0,o.jsxs)(a.admonition,{type:"tip",children:[(0,o.jsx)(a.p,{children:"LakeSoul may use extra amount of off-heap memory, consider to increase the off heap memory size for task manager:"}),(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-yaml",children:"taskmanager.memory.task.off-heap.size: 3000m\n"})})]}),"\n",(0,o.jsx)(a.h3,{id:"add-lakesoul-jar-to-flinks-directory",children:"Add LakeSoul Jar to Flink's directory"}),"\n",(0,o.jsxs)(a.p,{children:["Download LakeSoul Flink Jar from: ",(0,o.jsx)(a.a,{href:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.5.2/lakesoul-flink-1.17-2.5.2.jar",children:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.5.2/lakesoul-flink-1.17-2.5.2.jar"})]}),"\n",(0,o.jsxs)(a.p,{children:["And put the jar file under ",(0,o.jsx)(a.code,{children:"$FLINK_HOME/lib"}),". After this, you could start flink session cluster or application as usual."]}),"\n",(0,o.jsx)(a.h3,{id:"add-lakesoul-flink-maven-dependency-in-your-java-project",children:"Add LakeSoul Flink Maven Dependency in Your Java Project"}),"\n",(0,o.jsx)(a.p,{children:"Add the following to your project's pom.xml"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.dmetasoul</groupId>\n    <artifactId>lakesoul</artifactId>\n    <version>1.17-2.5.2</version>\n</dependency>\n"})})]})}function p(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,a,s)=>{s.d(a,{Z:()=>t,a:()=>r});var o=s(7294);const n={},l=o.createContext(n);function r(e){const a=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(l.Provider,{value:a},e.children)}}}]);