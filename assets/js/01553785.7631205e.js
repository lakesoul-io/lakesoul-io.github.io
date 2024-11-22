"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[3422],{4701:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>o});var a=s(5893),r=s(1151);const n={},d="Sync LakeSoul Tables to other Databases",i={id:"Usage Docs/export-to-databases",title:"Sync LakeSoul Tables to other Databases",description:"\x3c!--",source:"@site/docs/03-Usage Docs/14-export-to-databases.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/export-to-databases",permalink:"/docs/Usage Docs/export-to-databases",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/14-export-to-databases.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use Kyuubi JDBC to Access Lakesoul's Table",permalink:"/docs/Usage Docs/setup-kyuubi"},next:{title:"Using Doris and LakeSoul",permalink:"/docs/Usage Docs/lakesoul-doris"}},l={},o=[{value:"Target database that supports exporting from the lake",id:"target-database-that-supports-exporting-from-the-lake",level:2},{value:"Parameter Configurations",id:"parameter-configurations",level:2},{value:"Examples",id:"examples",level:2},{value:"Instructions for use",id:"instructions-for-use",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"sync-lakesoul-tables-to-other-databases",children:"Sync LakeSoul Tables to other Databases"}),"\n",(0,a.jsx)(t.h2,{id:"target-database-that-supports-exporting-from-the-lake",children:"Target database that supports exporting from the lake"}),"\n",(0,a.jsx)(t.p,{children:"Starting from LakeSoul 2.5, it supports single-table data synchronization out of the lake in batch or stream mode into other databases. It now supports export of LakeSoul tables to MySQL, Doris, and PostgreSQL, as well as databases which have compatible protocols with them."}),"\n",(0,a.jsx)(t.h2,{id:"parameter-configurations",children:"Parameter Configurations"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Required"}),(0,a.jsx)(t.th,{children:"Meaning Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"--target_db.url"}),(0,a.jsx)(t.td,{children:"require"}),(0,a.jsx)(t.td,{children:"The URL of the target database, ending with \u2018/\u2019"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"--target_db.db_type"}),(0,a.jsx)(t.td,{children:"require"}),(0,a.jsx)(t.td,{children:"Target database type(doris,mysql,postgres)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"--target_db.db_name"}),(0,a.jsx)(t.td,{children:"require"}),(0,a.jsx)(t.td,{children:"Target database"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"--target_db.user"}),(0,a.jsx)(t.td,{children:"require"}),(0,a.jsx)(t.td,{children:"user name"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"--target_db.password"}),(0,a.jsx)(t.td,{children:"require"}),(0,a.jsx)(t.td,{children:"user password"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"--target_db.table_name"}),(0,a.jsx)(t.td,{children:"require"}),(0,a.jsx)(t.td,{children:"target database table name"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"--source_db.db_name"}),(0,a.jsx)(t.td,{children:"require"}),(0,a.jsx)(t.td,{children:"lakesoul namespace"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"--source_db.table_name"}),(0,a.jsx)(t.td,{children:"require"}),(0,a.jsx)(t.td,{children:"lakesoul table name"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"--sink_parallelism"}),(0,a.jsx)(t.td,{children:"optional"}),(0,a.jsx)(t.td,{children:"Parallelism of synchronization jobs, default 1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"--use_batch"}),(0,a.jsx)(t.td,{children:"optional"}),(0,a.jsxs)(t.td,{children:["true indicates batch synchronization, false indicates stream synchronization,  ",(0,a.jsx)("br",{})," and batch synchronization is used by default."]})]})]})]}),"\n",(0,a.jsx)(t.p,{children:"Synchronize table to doris,additional configuration parameters are required"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Required"}),(0,a.jsx)(t.th,{children:"Meaning Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"--doris.fenodes"}),(0,a.jsx)(t.td,{children:"optional"}),(0,a.jsxs)(t.td,{children:["Doris FE http address, multiple addresses are separated by commas,   ",(0,a.jsx)("br",{}),"the default is 127.0.0.1:8030"]})]})})]}),"\n",(0,a.jsx)(t.p,{children:"Synchronize table to mongodb,additioanl configuration parameters are"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Required"}),(0,a.jsx)(t.th,{children:"Meaning Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"--mongodb.uri"}),(0,a.jsx)(t.td,{children:"require"}),(0,a.jsxs)(t.td,{children:["mongodb uri sush as :mongodb://user",":password","@127.0.0.1:2701"]})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.p,{children:"Synchronize table to MySQL task"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"./bin/flink run -c org.apache.flink.lakesoul.entry.SyncDatabase \\\n    lakesoul-flink-1.17-2.6.0.jar \\\n    --target_db.url jdbc:mysql://172.17.0.4:3306/ \\\n    --target_db.db_type mysql \\\n    --target_db.db_name test \\\n    --target_db.user root \\\n    --target_db.password 123456 \\\n    --target_db.table_name t1 \\\n    --source_db.db_name \\\n    --source_db.table_name t1 \\\n    --sink_parallelism 1 \\\n    --use_batch true\n"})}),"\n",(0,a.jsx)(t.p,{children:"Synchronize table to postgresql task"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"./bin/flink run -c org.apache.flink.lakesoul.entry.SyncDatabase \\\n    lakesoul-flink-1.17-2.6.0.jar \\\n    --target_db.url jdbc:postgresql://172.17.0.2:5432/ \\\n    --target_db.db_name test \\\n    --target_db.db_type postgres \\\n    --source_db.db_name jdbccdc \\\n    --target_db.user lakesoul_test \\\n    --target_db.password lakesoul_test \\\n    --target_db.table_name t5_copy3 \\\n    --source_db.table_name t5_copy1 \\\n    --sink_parallelism 1 \\\n    --use_batch true\n"})}),"\n",(0,a.jsx)(t.p,{children:"Synchronize table to doris task"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'./bin/flink run -c org.apache.flink.lakesoul.entry.SyncDatabase \\\n    lakesoul-flink-1.17-2.6.0.jar \\\n    --target_db.url "jdbc:mysql://172.17.0.2:9030/" \\\n    --source_db.db_name test \\\n    --target_db.db_name test \\\n    --target_db.user root \\\n    --target_db.password 123456 \\\n    --target_db.db_type doris \\\n    --target_db.table_name tb \\\n    --source_db.table_name tb \\\n    --sink_parallelism 1 \\\n    --doris.fenodes 127.0.0.1:8030 \\\n    --use_batch false \n'})}),"\n",(0,a.jsx)(t.p,{children:"Synchronize table to mongodb task"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'./bin/flink run -c org.apache.flink.lakesoul.entry.SyncDatabase \\\n    lakesoul-flink-2.4.0-flink-1.17-SNAPSHOT.jar \\\n    --mongodb.uri "mongodb://user:password@127.0.0.1:27017" \\\n    --source_db.db_name cdc \\\n    --target_db.db_name cdc \\\n    --target_db.db_type mongodb \\\n    --target_db.table_name bincoll \\\n    --source_db.table_name bincoll \\\n    --sink_parallelism 2 \\\n    --use_batch true \\\n    --batchSize 1\n'})}),"\n",(0,a.jsx)(t.p,{children:"For streaming out of the lake, batchsize is set to 1 or 0"}),"\n",(0,a.jsx)(t.h2,{id:"instructions-for-use",children:"Instructions for use"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"For data exported to both PostgreSQL and MySQL, users have the option to manually create tables according to users' requirements or table will be automatically created by the program. If users have to specific data type, it is recommended to create the tables in target databases in advacne."}),"\n",(0,a.jsx)(t.li,{children:"If the exported table is partitioned, users must manually create the target table; otherwise, the synchronized table will lack partition fields."}),"\n",(0,a.jsx)(t.li,{children:"Presently, when exporting data to Apache Doris, only manual table creation is supported. Users need to create the table before initiating the synchronization task."}),"\n",(0,a.jsx)(t.li,{children:"For exporting data to Doris, users need to configure the Frontend (FE) address, which defaults to 127.0.0.1:8030."}),"\n",(0,a.jsx)(t.li,{children:"Regarding JDBC addresses, users should strictly end them with a '/' character, for instance: jdbc:mysql://172.17.0.2:9030/"}),"\n",(0,a.jsx)(t.li,{children:"If target table exists before exporting, the primary keys should be exactly the same with source LakeSoul table, or no primary keys in both sides."}),"\n",(0,a.jsx)(t.li,{children:"When users create a table in Doris, the data model for tables with primary keys should be set to 'Unique', whereas for tables without primary keys, the data model should be set to 'Duplicate'."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>d});var a=s(7294);const r={},n=a.createContext(r);function d(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);