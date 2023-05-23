"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[430],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),p=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=p(e.components);return r.createElement(i.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},k=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),k=n,m=d["".concat(i,".").concat(k)]||d[k]||c[k]||o;return t?r.createElement(m,l(l({ref:a},u),{},{components:t})):r.createElement(m,l({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=k;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6262:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const o={},l="Setup Your Spark and Flink Project/Job",s={unversionedId:"Usage Docs/setup-spark",id:"Usage Docs/setup-spark",title:"Setup Your Spark and Flink Project/Job",description:"Required Spark Version",source:"@site/docs/03-Usage Docs/02-setup-spark.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/setup-spark",permalink:"/docs/Usage Docs/setup-spark",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/02-setup-spark.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup LakeSoul Meta DB",permalink:"/docs/Usage Docs/setup-meta-env"},next:{title:"Spark API Docs",permalink:"/docs/Usage Docs/api-docs"}},i={},p=[{value:"Required Spark Version",id:"required-spark-version",level:2},{value:"Setup (Py)Spark Shell or Spark SQL Shell",id:"setup-pyspark-shell-or-spark-sql-shell",level:2},{value:"Use Maven Coordinates via --packages",id:"use-maven-coordinates-via---packages",level:3},{value:"Use Local Packages",id:"use-local-packages",level:3},{value:"Setup Java/Scala Project for Spark",id:"setup-javascala-project-for-spark",level:2},{value:"Pass <code>lakesoul_home</code> Environment Variable to Your Spark Job",id:"pass-lakesoul_home-environment-variable-to-your-spark-job",level:2},{value:"Required Flink Version",id:"required-flink-version",level:2},{value:"Setup Metadata Database Connection for Flink",id:"setup-metadata-database-connection-for-flink",level:2},{value:"Add LakeSoul Jar to Flink&#39;s directory",id:"add-lakesoul-jar-to-flinks-directory",level:2},{value:"Add LakeSoul Flink Maven Dependency in Your Java Project",id:"add-lakesoul-flink-maven-dependency-in-your-java-project",level:2}],u={toc:p},d="wrapper";function c(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setup-your-spark-and-flink-projectjob"},"Setup Your Spark and Flink Project/Job"),(0,n.kt)("h2",{id:"required-spark-version"},"Required Spark Version"),(0,n.kt)("p",null,"LakeSoul is currently available with Scala version 2.12 and Spark version 3.3."),(0,n.kt)("h2",{id:"setup-pyspark-shell-or-spark-sql-shell"},"Setup (Py)Spark Shell or Spark SQL Shell"),(0,n.kt)("p",null,"To use ",(0,n.kt)("inlineCode",{parentName:"p"},"spark-shell"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"pyspark")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"spark-sql")," shells, you should include LakeSoul's dependencies. There are two approaches to achieve this."),(0,n.kt)("h3",{id:"use-maven-coordinates-via---packages"},"Use Maven Coordinates via --packages"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"spark-shell --packages com.dmetasoul:lakesoul-spark:2.2.0-spark-3.3\n")),(0,n.kt)("h3",{id:"use-local-packages"},"Use Local Packages"),(0,n.kt)("p",null,"You can find the LakeSoul packages from our release page: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/meta-soul/LakeSoul/releases"},"Releases"),".\nDownload the jar file and pass it to ",(0,n.kt)("inlineCode",{parentName:"p"},"spark-submit"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'spark-submit --jars "lakesoul-spark-2.2.0-spark-3.3.jar"\n')),(0,n.kt)("p",null,"Or you could directly put the jar into ",(0,n.kt)("inlineCode",{parentName:"p"},"$SPARK_HOME/jars")),(0,n.kt)("h2",{id:"setup-javascala-project-for-spark"},"Setup Java/Scala Project for Spark"),(0,n.kt)("p",null,"Include maven dependencies in your project:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.dmetasoul</groupId>\n    <artifactId>lakesoul</artifactId>\n    <version>2.2.0-spark-3.3</version>\n</dependency>\n")),(0,n.kt)("h2",{id:"pass-lakesoul_home-environment-variable-to-your-spark-job"},"Pass ",(0,n.kt)("inlineCode",{parentName:"h2"},"lakesoul_home")," Environment Variable to Your Spark Job"),(0,n.kt)("p",null,"If you are using Spark's local or client mode, you could just export the env var in your shell:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export lakesoul_home=/path/to/lakesoul.properties\n")),(0,n.kt)("p",null,"If you are using Spark's cluster mode, in which the driver would also be scheduled into Yarn or K8s cluster, you can setup the driver's env:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For Hadoop Yarn, pass ",(0,n.kt)("inlineCode",{parentName:"li"},"--conf spark.yarn.appMasterEnv.lakesoul_home=lakesoul.properties --files /path/to/lakesoul.properties")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"spark-submit")," command;"),(0,n.kt)("li",{parentName:"ul"},"For K8s, pass ",(0,n.kt)("inlineCode",{parentName:"li"},"--conf spark.kubernetes.driverEnv.lakesoul_home=lakesoul.properties --files /path/to/lakesoul.properties")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"spark-submit")," command.")),(0,n.kt)("h2",{id:"required-flink-version"},"Required Flink Version"),(0,n.kt)("p",null,"Currently Flink 1.14 is supported."),(0,n.kt)("h2",{id:"setup-metadata-database-connection-for-flink"},"Setup Metadata Database Connection for Flink"),(0,n.kt)("p",null,"Add the following configuration to ",(0,n.kt)("inlineCode",{parentName:"p"},"$FLINK_HOME/conf/flink-conf.yaml"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"containerized.master.env.LAKESOUL_PG_DRIVER: com.lakesoul.shaded.org.postgresql.Driver\ncontainerized.master.env.LAKESOUL_PG_USERNAME: root\ncontainerized.master.env.LAKESOUL_PG_PASSWORD: root\ncontainerized.master.env.LAKESOUL_PG_URL: jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=unspecified\ncontainerized.taskmanager.env.LAKESOUL_PG_DRIVER: com.lakesoul.shaded.org.postgresql.Driver\ncontainerized.taskmanager.env.LAKESOUL_PG_USERNAME: root\ncontainerized.taskmanager.env.LAKESOUL_PG_PASSWORD: root\ncontainerized.taskmanager.env.LAKESOUL_PG_URL: jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=unspecified\n")),(0,n.kt)("p",null,"Note that both the master and taskmanager environment variables need to be set."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The connection information, username and password of the Postgres database need to be modified according to the actual deployment.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Note that if you use Session mode to start a job, that is, submit the job to Flink Standalone Cluster as a client, ",(0,n.kt)("inlineCode",{parentName:"p"},"flink run")," as a client will not read the above configuration, so you need to configure the environment variables separately, namely:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export LAKESOUL_PG_DRIVER=com.lakesoul.shaded.org.postgresql.Driver\nexport LAKESOUL_PG_URL=jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=unspecified\nexport LAKESOUL_PG_USERNAME=root\nexport LAKESOUL_PG_PASSWORD=root\n"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"LakeSoul may use extra amount of off-heap memory, consider to increase the off heap memory size for task manager:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"taskmanager.memory.task.off-heap.size: 3000m\n"))),(0,n.kt)("h2",{id:"add-lakesoul-jar-to-flinks-directory"},"Add LakeSoul Jar to Flink's directory"),(0,n.kt)("p",null,"Download LakeSoul Flink Jar from: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.2.0/lakesoul-flink-2.2.0-flink-1.14.jar"},"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.2.0/lakesoul-flink-2.2.0-flink-1.14.jar")),(0,n.kt)("p",null,"And put the jar file under ",(0,n.kt)("inlineCode",{parentName:"p"},"$FLINK_HOME/lib"),". After this, you could start flink session cluster or application as usual."),(0,n.kt)("h2",{id:"add-lakesoul-flink-maven-dependency-in-your-java-project"},"Add LakeSoul Flink Maven Dependency in Your Java Project"),(0,n.kt)("p",null,"Add the following to your project's pom.xml"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.dmetasoul</groupId>\n    <artifactId>lakesoul</artifactId>\n    <version>2.2.0-flink-1.14</version>\n</dependency>\n")))}c.isMDXComponent=!0}}]);