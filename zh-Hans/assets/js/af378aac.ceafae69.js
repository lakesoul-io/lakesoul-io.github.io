"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[8899],{6314:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var t=s(5893),r=s(1151);const d={},l="LakeSoul \u8868\u5b9e\u65f6\u51fa\u6e56\u4f7f\u7528\u624b\u518c",a={id:"Usage Docs/export-to-databases",title:"LakeSoul \u8868\u5b9e\u65f6\u51fa\u6e56\u4f7f\u7528\u624b\u518c",description:"\x3c!--",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-Usage Docs/14-export-to-databases.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/export-to-databases",permalink:"/zh-Hans/docs/Usage Docs/export-to-databases",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/14-export-to-databases.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528Kyuubi JDBC\u8bbf\u95eeLakesoul\u8868",permalink:"/zh-Hans/docs/Usage Docs/setup-kyuubi"},next:{title:"\u5728 Spark Gluten \u4e2d\u8bfb\u5199 LakeSoul",permalink:"/zh-Hans/docs/Usage Docs/spark-gluten/"}},i={},c=[{value:"\u652f\u6301\u51fa\u6e56\u7684\u76ee\u6807\u5e93",id:"\u652f\u6301\u51fa\u6e56\u7684\u76ee\u6807\u5e93",level:2},{value:"\u53c2\u6570\u914d\u7f6e",id:"\u53c2\u6570\u914d\u7f6e",level:2},{value:"\u542f\u52a8\u793a\u4f8b",id:"\u542f\u52a8\u793a\u4f8b",level:2},{value:"\u4f7f\u7528\u4e8b\u9879",id:"\u4f7f\u7528\u4e8b\u9879",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lakesoul-\u8868\u5b9e\u65f6\u51fa\u6e56\u4f7f\u7528\u624b\u518c",children:"LakeSoul \u8868\u5b9e\u65f6\u51fa\u6e56\u4f7f\u7528\u624b\u518c"}),"\n",(0,t.jsx)(n.h2,{id:"\u652f\u6301\u51fa\u6e56\u7684\u76ee\u6807\u5e93",children:"\u652f\u6301\u51fa\u6e56\u7684\u76ee\u6807\u5e93"}),"\n",(0,t.jsx)(n.p,{children:"LakeSoul \u81f3 2.5.1 \u5f00\u59cb\uff0c\u652f\u6301\u5355\u8868\u6570\u636e\u4ee5\u6279\u540c\u6b65\u51fa\u6e56\uff0c\u6d41\u540c\u6b65\u51fa\u6e56\uff0c\u73b0\u652f\u6301 LakeSoul \u8868\u5bfc\u51fa\u5230 MySQL\uff0cApache Doris\uff0cPostgreSQL\uff0cMongoDB \u4ee5\u53ca\u517c\u5bb9\u8fd9\u4e9b\u6570\u636e\u5e93\u534f\u8bae\u7684\u6570\u636e\u5e93\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u914d\u7f6e",children:"\u53c2\u6570\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,t.jsx)(n.th,{children:"\u542b\u4e49"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--target_db.url"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"\u76ee\u6807\u6570\u636e\u5e93\u7684url\uff0c\u2018/\u2019\u7ed3\u5c3e\uff0cmongodb\u4e0d\u9700\u8981\u914d\u6b64\u53c2\u6570"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--target_db.db_type"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"\u76ee\u6807\u6570\u636e\u5e93\u7684\u7c7b\u578b(doris,mysql,postgres,mongodb)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--target_db.db_name"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"\u76ee\u6807\u6570\u636e\u5e93\u5e93\u540d\u5b57"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--target_db.user"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"\u76ee\u6807\u6570\u636e\u5e93\u7528\u6237\u540d"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--target_db.password"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"\u7528\u6237\u5bc6\u7801"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--target_db.table_name"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"\u76ee\u6807\u6570\u636e\u5e93\u7684\u8868\u540d"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--source_db.db_name"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"lakesoul\u5e93\u540d"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--source_db.table_name"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"lakesoul\u8868\u540d"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--sink_parallelism"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u540c\u6b65\u4f5c\u4e1a\u7684\u5e76\u884c\u5ea6\uff0c\u9ed8\u8ba41"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--use_batch"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"true\u8868\u793a\u6279\u540c\u6b65\uff0cfalse\u8868\u793a\u6d41\u540c\u6b65\uff0c\u9ed8\u8ba4\u91c7\u7528\u6279\u540c\u6b65"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u5230doris\u7684\u51fa\u6e56\uff0c\u9700\u8981\u989d\u5916\u914d\u7f6e\uff1a"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,t.jsx)(n.th,{children:"\u542b\u4e49"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--doris.fenodes"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsxs)(n.td,{children:["Doris FE http \u5730\u5740\uff0c\u591a\u4e2a\u5730\u5740\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u9694\u5f00\uff0c\u9ed8\u8ba4\u4e3a  ",(0,t.jsx)("br",{}),"127.0.0.1:8030"]})]})})]}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u5230mongodb\u7684\u51fa\u6e56\uff0c\u9700\u8981\u989d\u5916\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,t.jsx)(n.th,{children:"\u542b\u4e49"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--mongodb.uri"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsxs)(n.td,{children:["mongodb uri\uff1amongodb://user",":password","@127.0.0.1:27017"]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u542f\u52a8\u793a\u4f8b",children:"\u542f\u52a8\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u51fa\u6e56mysql\u4efb\u52a1\u542f\u52a8"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./bin/flink run -c org.apache.flink.lakesoul.entry.SyncDatabase \\\n    lakesoul-flink-flink-1.17-2.6.0.jar \\\n    --target_db.url jdbc:mysql://172.17.0.4:3306/ \\\n    --target_db.db_type mysql \\\n    --target_db.db_name test \\\n    --target_db.user root \\\n    --target_db.password 123456 \\\n    --target_db.table_name t1 \\\n    --source_db.db_name\n    --source_db.table_name t1 \\\n    --sink_parallelism 1 \\\n    --use_batch true\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u51fa\u6e56postgres\u4efb\u52a1\u542f\u52a8"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./bin/flink run -c org.apache.flink.lakesoul.entry.SyncDatabase \\\n    lakesoul-flink-flink-1.17-2.6.0.jar \\\n    --target_db.url jdbc:postgresql://172.17.0.2:5432/ \\\n    --target_db.db_name test \\\n    --target_db.db_type postgres \\\n    --source_db.db_name jdbccdc \\\n    --target_db.user lakesoul_test \\\n    --target_db.password lakesoul_test \\\n    --target_db.table_name t5_copy3 \\\n    --source_db.table_name t5_copy1 \\\n    --sink_parallelism 1 \\\n    --use_batch true\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u51fa\u6e56\u5230doris\u4efb\u52a1\u542f\u52a8"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'./bin/flink run -c org.apache.flink.lakesoul.entry.SyncDatabase \\\n    lakesoul-flink-flink-1.17-2.6.0.jar \\\n    --target_db.url "jdbc:mysql://172.17.0.2:9030/" \\\n    --source_db.db_name test \\\n    --target_db.db_name test \\\n    --target_db.user root \\\n    --target_db.password 123456 \\\n    --target_db.db_type doris \\\n    --target_db.table_name tb \\\n    --source_db.table_name tb \\\n    --sink_parallelism 1 \\\n    --doris.fenodes 127.0.0.1:8030 \\\n    --use_batch false \n'})}),"\n",(0,t.jsx)(n.p,{children:"\u51fa\u6e56\u5230mongodb\u4efb\u52a1\u542f\u52a8"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'./bin/flink run -c org.apache.flink.lakesoul.entry.SyncDatabase \\\n    lakesoul-flink-2.4.0-flink-1.17-SNAPSHOT.jar \\\n    --mongodb.uri "mongodb://flinkuser:flinkpw@127.0.0.1:27017" \\\n    --source_db.db_name cdc \\\n    --target_db.db_name cdc \\\n    --target_db.db_type mongodb \\\n    --target_db.table_name bincoll \\\n    --source_db.table_name bincoll \\\n    --sink_parallelism 2 \\\n    --use_batch true \\\n    --batchSize 1 \n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u6d41\u5f0f\u51fa\u6e56\u65f6\uff0cbatchSize\u7684\u503c\u8bf7\u8bbe\u7f6e\u4e3a1\u6216\u80050"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u4e8b\u9879",children:"\u4f7f\u7528\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u51fa\u6e56\u5230 PostgreSQL \u548c MySql\uff0c\u53ef\u4ee5\u652f\u6301\u7528\u6237\u6839\u636e\u9700\u6c42\u624b\u52a8\u5efa\u8868\uff0c\u4e5f\u652f\u6301\u7a0b\u5e8f\u81ea\u52a8\u5efa\u8868\uff0c\u5982\u679c\u7528\u6237\u5bf9\u6570\u636e\u7684\u7c7b\u578b\u8981\u6c42\u81ea\u5b9a\u4e49\u63a7\u5236(\u4f8b\u5982 varchar)\uff0c\u90a3\u4e48\u5efa\u8bae\u7528\u6237\u63d0\u524d\u5728\u76ee\u6807\u5e93\u5efa\u8868"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u51fa\u6e56\u7684 LakeSoul \u8868\u662f\u5206\u533a\u8868\uff0c\u90a3\u4e48\u9700\u8981\u7528\u6237\u624b\u52a8\u5728\u76ee\u6807\u5e93\u5efa\u8868\uff0c\u5426\u5219\u540c\u6b65\u540e\u7684\u8868\u65e0\u5206\u533a\u5b57\u6bb5"}),"\n",(0,t.jsx)(n.li,{children:"\u5bf9\u4e8e\u51fa\u6e56\u5230 Doris\uff0c\u76ee\u524d\u4ec5\u652f\u6301\u7528\u6237\u624b\u52a8\u5728 Doris \u5e93\u4e2d\u5efa\u8868\uff0c\u5efa\u8868\u4e4b\u540e\u518d\u5f00\u542f\u540c\u6b65\u4efb\u52a1"}),"\n",(0,t.jsx)(n.li,{children:"\u51fa\u6e56\u5230 Doris\uff0c\u7528\u6237\u9700\u8981\u914d\u7f6eFE\u7684\u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a127.0.0.1:8030"}),"\n",(0,t.jsx)(n.li,{children:"\u5bf9\u4e8ejdbc\u7684\u5730\u5740\uff0c\u7528\u6237\u5e94\u4e25\u683c\u4ee5\u2018/\u2019\u7ed3\u5c3e\uff0c\u5982\uff1ajdbc:mysql://172.17.0.2:9030/"}),"\n",(0,t.jsx)(n.li,{children:"\u7528\u6237\u5728\u76ee\u7684\u7aef\u5e93\u63d0\u524d\u5efa\u8868\u65f6\uff0c\u8868\u7684\u4e3b\u952e\u9700\u8981\u548c LakeSoul \u4e00\u81f4\uff0c\u6216\u8005\u90fd\u6ca1\u6709\u4e3b\u952e"}),"\n",(0,t.jsx)(n.li,{children:"\u7528\u6237\u5efa Doris \u8868\u65f6,\u5bf9\u4e8e\u6709\u4e3b\u952e\u8868\uff0cDoris \u8868\u7684\u6570\u636e\u6a21\u578b\u5e94\u4e3a Unique\uff0c\u5bf9\u4e8e\u975e\u4e3b\u952e\u8868\uff0c\u6570\u636e\u6a21\u578b\u5e94\u4e3a Duplicate"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>l});var t=s(7294);const r={},d=t.createContext(r);function l(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);