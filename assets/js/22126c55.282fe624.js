"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[5039],{2270:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=a(5893),n=a(1151);const i={},s="LakeSoul Global Automatic Compaction Service Usage",r={id:"Usage Docs/auto-compaction-task",title:"LakeSoul Global Automatic Compaction Service Usage",description:"\x3c!--",source:"@site/docs/03-Usage Docs/08-auto-compaction-task.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/auto-compaction-task",permalink:"/docs/Usage Docs/auto-compaction-task",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/08-auto-compaction-task.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LakeSoul Flink Connector",permalink:"/docs/Usage Docs/flink-lakesoul-connector"},next:{title:"LakeSoul Table Lifecycle Automatic Maintenance and Redundant Data Automatic Cleaning",permalink:"/docs/Usage Docs/clean-redundant-data"}},c={},l=[{value:"Implementation Details",id:"implementation-details",level:2},{value:"Start Compaction Service",id:"start-compaction-service",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"lakesoul-global-automatic-compaction-service-usage",children:"LakeSoul Global Automatic Compaction Service Usage"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Since 2.3.0"})}),"\n",(0,o.jsx)(t.p,{children:"When the data is written in batch or streaming tasks, the data is mostly written in small batches, therefore there are some intermediate data and a large number of small files. In order to reduce the waste of resources caused by such data and improve the efficiency of data reading, compaction need to be executed periodically for all tables."}),"\n",(0,o.jsx)(t.p,{children:"If we perform compaction from within a writing job (such as a stream job), the write process may be blocked and latency and throughput maybe impacted. If we start compaction task for each table in a separate job, it will be cumbersome to setup and deploy. Therefore, LakeSoul provides a global automatic compaction service, which can automatically compress the data according to the database and write partition data, and the compaction task can be automatically scaled."}),"\n",(0,o.jsx)(t.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Depending on PG's trigger notify listen mechanism, define a trigger function in PLSQL in PG: each time data is written, it can trigger the execution of a defined function, analyze and process the partitions that meet the compaction conditions in the function (for example, there are 10 submissions since the last compaction), and then publish the information;"}),"\n",(0,o.jsx)(t.li,{children:"The backend starts a long running Spark job that listens to the event published by PG, and then starts the Spark job to compress the data of partitions that meet the compaction conditions. So that this one Spark job would be responsible for the compaction of all tables automatically."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Currently, compaction is only performed according to the version of the written partition, and the execution of the compaction service will be triggered every 10 commits."}),"\n",(0,o.jsx)(t.h2,{id:"start-compaction-service",children:"Start Compaction Service"}),"\n",(0,o.jsx)(t.p,{children:"The trigger and PLSQL functions have been configured when the database is initialized, and the default compaction configuration will trigger a compaction signal every time a partition is inserted 10 times, so you only need to start the Spark automatic compaction job."}),"\n",(0,o.jsx)(t.p,{children:"Download LakeSoul's Spark release jar file, add the dependent jar package through --jars when submitting the job, and then start the Spark automatic compaction service job."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Setup metadata connection for LakeSoul. For detailed documentation, please refer\nto ",(0,o.jsx)(t.a,{href:"/docs/Usage%20Docs/setup-spark",children:"Setup Spark Job"})]}),"\n",(0,o.jsx)(t.li,{children:"Submit the Spark job. The currently supported parameters are as follows:"}),"\n"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Meaning"}),(0,o.jsx)(t.th,{children:"required"}),(0,o.jsx)(t.th,{children:"default"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"threadpool.size"}),(0,o.jsx)(t.td,{children:"the thread pools number of automatic compaction task"}),(0,o.jsx)(t.td,{children:"false"}),(0,o.jsx)(t.td,{children:"8"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"database"}),(0,o.jsx)(t.td,{children:"The database name to compress. If it is not filled, it means that all database partitions will compress that meet the conditions"}),(0,o.jsx)(t.td,{children:"false"}),(0,o.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,o.jsx)(t.p,{children:"The use the following command to start the compaction service job:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:'./bin/spark-submit \\\n    --name auto_compaction_task \\\n    --master yarn  \\\n    --deploy-mode cluster \\\n    --executor-memory 3g \\\n    --executor-cores 1 \\\n    --num-executors 20 \\\n    --conf "spark.executor.extraJavaOptions=-XX:MaxDirectMemorySize=4G" \\\n    --conf "spark.executor.memoryOverhead=3g" \\\n    --class com.dmetasoul.lakesoul.spark.compaction.CompactionTask  \\\n    jars/lakesoul-spark-3.3-2.6.0.jar \n    --threadpool.size=10\n    --database=test\n'})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Because LakeSoul enables native IO by default and needs to rely on off-heap memory, the spark task needs to set the size of off-heap memory, otherwise it is prone to out-of-heap memory overflow."})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Your could enable Spark's dynamic allocation to get auto-scaling for the compaction service job. Refer to Spark's doc ",(0,o.jsx)(t.a,{href:"https://spark.apache.org/docs/3.3.1/job-scheduling.html#dynamic-resource-allocation",children:"Dynamic Resource Allocation"})," on how to config."]})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>s});var o=a(7294);const n={},i=o.createContext(n);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);