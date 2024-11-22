"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[3901],{6701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(5893),o=t(1151);const s={},r="Read and write LakeSoul in Spark Gluten",i={id:"Usage Docs/spark-gluten/index",title:"Read and write LakeSoul in Spark Gluten",description:"Since 2.5.0",source:"@site/docs/03-Usage Docs/15-spark-gluten/index.md",sourceDirName:"03-Usage Docs/15-spark-gluten",slug:"/Usage Docs/spark-gluten/",permalink:"/docs/Usage Docs/spark-gluten/",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/15-spark-gluten/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Doris and LakeSoul",permalink:"/docs/Usage Docs/lakesoul-doris"},next:{title:"Deploy HA PostgreSQL Cluster",permalink:"/docs/Deployment/Postgres-Cluster"}},l={},c=[{value:"Spark task configuration",id:"spark-task-configuration",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"read-and-write-lakesoul-in-spark-gluten",children:"Read and write LakeSoul in Spark Gluten"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Since 2.5.0"})}),"\n",(0,a.jsxs)(n.p,{children:["Spark Gluten (",(0,a.jsx)(n.a,{href:"https://github.com/oap-project/gluten",children:"https://github.com/oap-project/gluten"}),") is an open source project developed based on the Spark plug-in interface. It aims to inject native code vectorization execution capabilities into Apache Spark to greatly optimize the execution efficiency of Spark. The project has been jointly built by Intel and Kyligence since 2021. The underlying layer uses Meta's open source Velox physical execution framework, focusing on injecting more efficient instructions into Spark to execute physical plans."]}),"\n",(0,a.jsx)(n.p,{children:"In the Spark Gluten project, developers do not need to invade the Spark code base, but use Spark's extension mechanism to replace the physical execution layer implementation to achieve optimization effects. For the steps before physical planning, Spark's existing code can be used, which combines Spark's framework capabilities and enhances the performance of the executor."}),"\n",(0,a.jsx)(n.p,{children:"Gluten is already able to receive batch data in Arrow format as input, but Gluten does not know that the LakeSoul data source supports Arrow. Therefore, in LakeSoul, when we detect that the Gluten plug-in is turned on, we insert a new physics plan rewrite rule, remove redundant column-row-column conversion, and directly connect LakeSoul's Scan physical plan to the subsequent Gluten calculation physical plan. As shown below:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"lakesoul-gluten",src:t(2754).Z+"",width:"771",height:"965"})}),"\n",(0,a.jsx)(n.h2,{id:"spark-task-configuration",children:"Spark task configuration"}),"\n",(0,a.jsx)(n.p,{children:"When the Spark job starts, configure the Gluten plug-in and LakeSoul in the following ways:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'$SPARK_HOME/bin/spark-shell --master local\\[1\\] --driver-memory 4g \\\n   # The following are the configuration items required by the Gluten plug-in\n   --conf "spark.driver.extraJavaOptions=--illegal-access=permit -Dio.netty.tryReflectionSetAccessible=true" \\\n   --conf spark.plugins=io.glutenproject.GlutenPlugin \\\n   --conf spark.memory.offHeap.enabled=true \\\n   --conf spark.shuffle.manager=org.apache.spark.shuffle.sort.ColumnarShuffleManager \\\n   --conf spark.memory.offHeap.size=1g \\\n   --conf spark.sql.codegen.wholeStage=false \\\n   # The following are the configuration items required by LakeSoul\n   --conf spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension \\\n   --conf spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog \\\n   --conf spark.sql.defaultCatalog=lakesoul \\\n   # Introduce the jars of LakeSoul and Gluten\n   --jars lakesoul-spark-3.3-2.6.0.jar,gluten-velox-bundle-spark3.3_2.12-1.1.0.jar\n'})}),"\n",(0,a.jsx)(n.p,{children:"After starting the Spark task in this way, Gluten and LakeSoul can be enabled at the same time to achieve dual acceleration of IO performance and computing performance."}),"\n",(0,a.jsxs)(n.p,{children:["Gluten's Jar can be downloaded from ",(0,a.jsx)(n.a,{href:"https://github.com/oap-project/gluten/releases",children:"https://github.com/oap-project/gluten/releases"}),". Please choose Spark 3.3's jar."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},2754:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/lakesoul-gluten-9103493614381b08481aa6901b26d060.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var a=t(7294);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);