"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[218],{1727:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=l(5893),t=l(1151),s=l(4866),i=l(5162);const r={},d="Flink \u5feb\u901f\u5f00\u59cb",c={id:"Getting Started/Flink-Guide",title:"Flink \u5feb\u901f\u5f00\u59cb",description:"\x3c!--",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/01-Getting Started/03-Flink-Guide.mdx",sourceDirName:"01-Getting Started",slug:"/Getting Started/Flink-Guide",permalink:"/zh-Hans/docs/Getting Started/Flink-Guide",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/01-Getting Started/03-Flink-Guide.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spark \u5feb\u901f\u5f00\u59cb",permalink:"/zh-Hans/docs/Getting Started/spark-guide"},next:{title:"\u901a\u8fc7 Spark Streaming \u5bfc\u5165 LakeSoul CDC \u8868",permalink:"/zh-Hans/docs/Tutorials/consume-cdc-via-spark-streaming"}},o={},u=[{value:"\u7248\u672c\u652f\u6301",id:"\u7248\u672c\u652f\u6301",level:2},{value:"PG\u914d\u7f6e",id:"pg\u914d\u7f6e",level:2},{value:"SQL",id:"sql",level:2},{value:"\u4e0b\u8f7dLakeSoul Flink Jar",id:"\u4e0b\u8f7dlakesoul-flink-jar",level:3},{value:"\u4f7f\u7528SQL Client",id:"\u4f7f\u7528sql-client",level:3},{value:"\u521b\u5efa\u8868",id:"\u521b\u5efa\u8868",level:2},{value:"\u5220\u9664\u8868",id:"\u5220\u9664\u8868",level:2},{value:"\u63d2\u5165\u6570\u636e",id:"\u63d2\u5165\u6570\u636e",level:2},{value:"\u66f4\u65b0\u6570\u636e",id:"\u66f4\u65b0\u6570\u636e",level:2},{value:"Delete Data",id:"delete-data",level:2},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",level:2},{value:"\u5168\u91cf\u8bfb",id:"\u5168\u91cf\u8bfb",level:3},{value:"\u5feb\u7167\u8bfb",id:"\u5feb\u7167\u8bfb",level:3},{value:"\u589e\u91cf\u8303\u56f4\u8bfb",id:"\u589e\u91cf\u8303\u56f4\u8bfb",level:3},{value:"\u6d41\u8bfb",id:"\u6d41\u8bfb",level:3},{value:"Lookup Join",id:"lookup-join",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"flink-\u5feb\u901f\u5f00\u59cb",children:"Flink \u5feb\u901f\u5f00\u59cb"}),"\n",(0,a.jsx)(n.h2,{id:"\u7248\u672c\u652f\u6301",children:"\u7248\u672c\u652f\u6301"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"LakeSoul"}),(0,a.jsx)(n.th,{children:"Flink"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"2.4.x+"}),(0,a.jsx)(n.td,{children:"1.17"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"2.1.x-2.3.x"}),(0,a.jsx)(n.td,{children:"1.14"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"pg\u914d\u7f6e",children:"PG\u914d\u7f6e"}),"\n",(0,a.jsxs)(n.p,{children:["\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u5230 ",(0,a.jsx)(n.code,{children:"$FLINK_HOME/conf/flink-conf.yaml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"containerized.master.env.LAKESOUL_PG_DRIVER: com.lakesoul.shaded.org.postgresql.Driver\ncontainerized.master.env.LAKESOUL_PG_USERNAME: root\ncontainerized.master.env.LAKESOUL_PG_PASSWORD: root\ncontainerized.master.env.LAKESOUL_PG_URL: jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=unspecified\ncontainerized.taskmanager.env.LAKESOUL_PG_DRIVER: com.lakesoul.shaded.org.postgresql.Driver\ncontainerized.taskmanager.env.LAKESOUL_PG_USERNAME: root\ncontainerized.taskmanager.env.LAKESOUL_PG_PASSWORD: root\ncontainerized.taskmanager.env.LAKESOUL_PG_URL: jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=unspecified\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6ce8\u610fmaster\u548ctaskmanager\u90fd\u9700\u8981\u8bbe\u7f6e"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Postgres \u6570\u636e\u5e93\u7684\u8fde\u63a5\u4fe1\u606f\u3001\u7528\u6237\u540d\u5bc6\u7801\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4fee\u6539\u3002"})}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsxs)(n.p,{children:["\u6ce8\u610f\u5982\u679c\u4f7f\u7528 Session \u6a21\u5f0f\u6765\u542f\u52a8\u4f5c\u4e1a\uff0c\u5373\u5c06\u4f5c\u4e1a\u4ee5 client \u65b9\u5f0f\u63d0\u4ea4\u5230 Flink Standalone Cluster\uff0c\u5219 ",(0,a.jsx)(n.code,{children:"flink run"})," \u4f5c\u4e3a client\uff0c\u662f\u4e0d\u4f1a\u8bfb\u53d6\u4e0a\u9762\u914d\u7f6e\uff0c\u56e0\u6b64\u9700\u8981\u518d\u5355\u72ec\u914d\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u5373\uff1a"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export LAKESOUL_PG_DRIVER=com.lakesoul.shaded.org.postgresql.Driver\nexport LAKESOUL_PG_URL=jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=unspecified\nexport LAKESOUL_PG_USERNAME=root\nexport LAKESOUL_PG_PASSWORD=root\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"sql",children:"SQL"}),"\n",(0,a.jsx)(n.h3,{id:"\u4e0b\u8f7dlakesoul-flink-jar",children:"\u4e0b\u8f7dLakeSoul Flink Jar"}),"\n",(0,a.jsxs)(n.p,{children:["\u53ef\u4ee5\u5728 LakeSoul Release \u9875\u9762\u4e0b\u8f7d: ",(0,a.jsx)(n.a,{href:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.6.0/lakesoul-flink-flink-1.17-2.6.0.jar",children:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.6.0/lakesoul-flink-flink-1.17-2.6.0.jar"}),".\n\u5982\u679c\u8bbf\u95ee Github \u6709\u95ee\u9898\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u94fe\u63a5\u4e0b\u8f7d\uff1a",(0,a.jsx)(n.a,{href:"https://mirrors.huaweicloud.com/repository/maven/com/dmetasoul/lakesoul-flink/1.17-2.6.0/lakesoul-flink-1.17-2.6.0.jar",children:"https://mirrors.huaweicloud.com/repository/maven/com/dmetasoul/lakesoul-flink/1.17-2.6.0/lakesoul-flink-1.17-2.6.0.jar"})]}),"\n",(0,a.jsx)(n.h3,{id:"\u4f7f\u7528sql-client",children:"\u4f7f\u7528SQL Client"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Start Flink SQL Client\nbin/sql-client.sh embedded -j lakesoul-flink-flink-1.17-2.6.0.jar\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u521b\u5efa\u8868",children:"\u521b\u5efa\u8868"}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"SQL",values:[{label:"Java",value:"Java"},{label:"SQL",value:"SQL"}],children:[(0,a.jsx)(i.Z,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TableEnvironment tEnv = TableEnvironment.create(EnvironmentSettings.inBatchMode());\nString createUserSql = "create table user_info (" +\n        "`id` INT," +\n        "name STRING," +\n        "score INT," +\n        "`date` STRING," +\n        "region STRING," +\n         " PRIMARY KEY (`id`,`name`) NOT ENFORCED"+\n        ") PARTITIONED BY (`region`,`date`)"+\n         " WITH (" +\n        " \'connector\'=\'lakesoul\'," +\n        " \'hashBucketNum\'=\'4\'," +\n        " \'use_cdc\'=\'true\'," +\n        " \'path\'=\'/tmp/lakesoul/flink/sink/test\' )";\ntEnv. executeSql(createUserSql);\n'})})}),(0,a.jsx)(i.Z,{value:"SQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Create the test_table table, use id and name as the joint primary key, use region and date as the two-level range partition, catalog is lakesoul, and database is default\ncreate table `lakesoul`.`default`.test_table (\n            `id` INT,\n            name STRING,\n            score INT,\n            `date` STRING,\n            region STRING,\n        PRIMARY KEY (`id`,`name`) NOT ENFORCED\n        ) PARTITIONED BY (`region`,`date`)\n        WITH (\n            'connector'='lakesoul',\n            'hashBucketNum'='4',\n            'use_cdc'='true',\n            'path'='file:///tmp/lakesoul/flink/sink/test');\n"})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"\u5efa\u8868\u8bed\u53e5\u4e2d\u5404\u4e2a\u90e8\u5206\u53c2\u6570\u542b\u4e49\uff1a"}),(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u53c2\u6570"}),(0,a.jsx)(n.th,{children:"\u542b\u4e49\u8bf4\u660e"}),(0,a.jsx)(n.th,{children:"\u53c2\u6570\u586b\u5199\u683c\u5f0f"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"PARTITIONED BY"}),(0,a.jsx)(n.td,{children:"\u7528\u4e8e\u6307\u5b9a\u8868\u7684 Range \u5206\u533a\u5b57\u6bb5\uff0c\u5982\u679c\u4e0d\u5b58\u5728 range \u5206\u533a\u5b57\u6bb5\uff0c\u5219\u7701\u7565"}),(0,a.jsxs)(n.td,{children:["PARTITIONED BY (",(0,a.jsx)(n.code,{children:"date"}),")"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"PRIMARY KEY"}),(0,a.jsx)(n.td,{children:"\u7528\u4e8e\u6307\u5b9a\u8868\u7684\u4e3b\u952e\uff0c\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u5217"}),(0,a.jsxs)(n.td,{children:["PARIMARY KEY (",(0,a.jsx)(n.code,{children:"id"}),", ",(0,a.jsx)(n.code,{children:"name"}),") NOT ENFORCED"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"connector"}),(0,a.jsx)(n.td,{children:"\u6570\u636e\u6e90\u8fde\u63a5\u5668\uff0c\u7528\u4e8e\u6307\u5b9a\u6570\u636e\u6e90\u7c7b\u578b"}),(0,a.jsx)(n.td,{children:"'connector'='lakesoul'"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"hashBucketNum"}),(0,a.jsx)(n.td,{children:"\u6709\u4e3b\u952e\u8868\u5fc5\u987b\u8bbe\u7f6e\u54c8\u5e0c\u5206\u7247\u6570"}),(0,a.jsx)(n.td,{children:"'hashBucketNum'='4'"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"path"}),(0,a.jsx)(n.td,{children:"\u7528\u4e8e\u6307\u5b9a\u8868\u7684\u5b58\u50a8\u8def\u5f84"}),(0,a.jsx)(n.td,{children:"'path'='file:///tmp/lakesoul/flink/sink/test'"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"use_cdc"}),(0,a.jsxs)(n.td,{children:["\u8bbe\u7f6e\u8868\u662f\u5426\u4e3a CDC \u683c\u5f0f (\u53c2\u8003 ",(0,a.jsx)(n.a,{href:"/zh-Hans/docs/Usage%20Docs/cdc-ingestion-table",children:"CDC \u8868\u683c\u5f0f"})," )"]}),(0,a.jsx)(n.td,{children:"'use_cdc'='true'"})]})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"\u5220\u9664\u8868",children:"\u5220\u9664\u8868"}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"SQL",values:[{label:"Java",value:"Java"},{label:"SQL",value:"SQL"}],children:[(0,a.jsx)(i.Z,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'tEnvs.executeSql("DROP TABLE if exists test_table");\n'})})}),(0,a.jsx)(i.Z,{value:"SQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP TABLE if exists test_table;\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"\u63d2\u5165\u6570\u636e",children:"\u63d2\u5165\u6570\u636e"}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"SQL",values:[{label:"Java",value:"Java"},{label:"SQL",value:"SQL"}],children:[(0,a.jsx)(i.Z,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"tEnvs.executeSql(\"insert into `lakesoul`.`default`.test_table values (1, 'AAA', 98, '2023-05-10', 'China')\"). await();\n"})})}),(0,a.jsxs)(i.Z,{value:"SQL",children:[(0,a.jsx)(n.p,{children:"\u6279\u5f0f\uff1a\u76f4\u63a5\u63d2\u5165\u6570\u636e"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"insert into `lakesoul`.`default`.test_table values (1,'AAA', 98, '2023-05-10', 'China');\n"})}),(0,a.jsx)(n.p,{children:"\u6d41\u5f0f\uff1a\u6784\u5efa\u6d41\u5f0f\u4efb\u52a1\uff0c\u4ece\u53e6\u4e00\u4e2a\u6d41\u5f0f\u6570\u636e\u6e90\u4e2d\u8bfb\u53d6\u6570\u636e\u5e76\u5199\u5165\u5230 LakeSoul \u8868\u4e2d\u3002\u5982\u679c\u4e0a\u6e38\u6570\u636e\u662f CDC \u7684\u683c\u5f0f\uff0c\u5219\u76ee\u6807\u5199\u5165\u7684 LakeSoul \u8868\u4e5f\u9700\u8981\u8bbe\u7f6e\u4e3a CDC \u8868\u3002"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- \u8868\u793a\u5c06`lakesoul`.`cdcsink`.soure_table\u8868\u4e2d\u7684\u5168\u90e8\u6570\u636e\uff0c\u63d2\u5165\u5230lakesoul`.`default`.test_table\ninsert into `lakesoul`.`default`.test_table select * from `lakesoul`.`cdcsink`.soure_table;\n"})})]})]}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u5bf9\u6d41\u5199\u5165\uff0c\u9700\u8981\u8bbe\u7f6e checkpoint \u95f4\u9694\uff0c\u5efa\u8bae\u4e3a 1 \u5206\u949f\u4ee5\u4e0a\uff1b"}),"\n",(0,a.jsx)(n.li,{children:"\u6839\u636e\u73af\u5883\u8bbe\u7f6e\u76f8\u5e94\u7684\u65f6\u533a\uff1a"}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SET 'table.local-time-zone' = 'Asia/Shanghai';\n-- \u8bbe\u7f6e checkpointing \u65f6\u95f4\u95f4\u9694\nSET 'execution.checkpointing.interval' = '2min';\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"\u66f4\u65b0\u6570\u636e",children:"\u66f4\u65b0\u6570\u636e"}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"SQL",values:[{label:"Java",value:"Java"},{label:"SQL",value:"SQL"}],children:[(0,a.jsx)(i.Z,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'tEnvs.executeSql("UPDATE `lakesoul`.`default`.test_table set score = 100 where id = 1") await();\n'})})}),(0,a.jsx)(i.Z,{value:"SQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"UPDATE `lakesoul`.`default`.test_table set score = 100 where id = 1;\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["\u6ce8\u610f ",(0,a.jsx)(n.code,{children:"update"})," \u60c5\u51b5\u4e0b\uff0c\u4e0d\u5141\u8bb8\u66f4\u65b0\u4e3b\u952e\u3001\u5206\u533a\u5217\u7684\u503c\u3002\n\u5bf9\u4e8e\u6d41\u7684\u6267\u884c\u6a21\u5f0f\uff0cLakeSoul \u5df2\u7ecf\u80fd\u591f\u652f\u6301 ChangeLog \u8bed\u4e49\uff0c\u53ef\u4ee5\u652f\u6301\u589e\u5220\u6539\u3002"]})}),"\n",(0,a.jsx)(n.h2,{id:"delete-data",children:"Delete Data"}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"SQL",values:[{label:"Java",value:"Java"},{label:"SQL",value:"SQL"}],children:[(0,a.jsx)(i.Z,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'tEnvs.executeSql("DELETE FROM `lakesoul`.`default`.test_table where id = 1") await();\n'})})}),(0,a.jsx)(i.Z,{value:"SQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `lakesoul`.`default`.test_table where id = 1;\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"delete"})," \u60c5\u51b5\u4e0b\uff0c\u4e0d\u5141\u8bb8\u6761\u4ef6\u4e2d\u5e26\u6709\u5206\u533a\u5217\u3002\n\u5bf9\u4e8e\u6d41\u7684\u6267\u884c\u6a21\u5f0f\uff0cLakeSoul \u5df2\u7ecf\u80fd\u591f\u652f\u6301 ChangeLog \u8bed\u4e49\uff0c\u53ef\u4ee5\u652f\u6301\u589e\u5220\u6539\u3002"]})}),"\n",(0,a.jsx)(n.h2,{id:"\u67e5\u8be2\u6570\u636e",children:"\u67e5\u8be2\u6570\u636e"}),"\n",(0,a.jsx)(n.h3,{id:"\u5168\u91cf\u8bfb",children:"\u5168\u91cf\u8bfb"}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"SQL",values:[{label:"Java",value:"Java"},{label:"SQL",value:"SQL"}],children:[(0,a.jsx)(i.Z,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Create a batch execution environment\ntEnvs.executeSql(\"SELECT * FROM `lakesoul`.`default`.test_table where region='China' and `date`='2023-05-10'\").print();\n"})})}),(0,a.jsx)(i.Z,{value:"SQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM `lakesoul`.`default`.test_table where region='China' and `date`='2023-05-10';\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u5feb\u7167\u8bfb",children:"\u5feb\u7167\u8bfb"}),"\n",(0,a.jsx)(n.p,{children:"LakeSoul \u652f\u6301\u5bf9\u8868\u6267\u884c\u5feb\u7167\u8bfb\u53d6\uff0c\u7528\u6237\u901a\u8fc7\u6307\u5b9a\u5206\u533a\u4fe1\u606f\u548c\u7ed3\u675f\u65f6\u95f4\u6233\uff0c\u53ef\u4ee5\u67e5\u8be2\u7ed3\u675f\u65f6\u95f4\u6233\u4e4b\u524d\u7684\u6240\u6709\u6570\u636e\u3002"}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"SQL",values:[{label:"Java",value:"Java"},{label:"SQL",value:"SQL"}],children:[(0,a.jsx)(i.Z,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"tEnvs.executeSql(\"SELECT * FROM `lakesoul`.`default`.test_table /*+ OPTIONS('readtype'='snapshot', 'readendtime'='2023-05-01 15:20:15', 'timezone'='Asia/Shanghai')*/ WHERE region='China'\").print();\n"})})}),(0,a.jsx)(i.Z,{value:"SQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Execute snapshot read of test_table in the region=China partition, the end timestamp of the read is 2023-05-01 15:20:15, and the time zone is Asia/Shanghai\nSELECT * FROM `lakesoul`.`default`.test_table /*+ OPTIONS('readtype'='snapshot', 'readendtime'='2023-05-01 15:20:15', 'timezone'='Asia/Shanghai')*/ WHERE region='China';\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u589e\u91cf\u8303\u56f4\u8bfb",children:"\u589e\u91cf\u8303\u56f4\u8bfb"}),"\n",(0,a.jsx)(n.p,{children:"LakeSoul \u652f\u6301\u5bf9\u8868\u6267\u884c\u8303\u56f4\u589e\u91cf\u8bfb\u53d6\uff0c\u7528\u6237\u901a\u8fc7\u6307\u5b9a\u5206\u533a\u4fe1\u606f\u548c\u8d77\u59cb\u65f6\u95f4\u6233\u3001\u7ed3\u675f\u65f6\u95f4\u6233\uff0c\u53ef\u4ee5\u67e5\u8be2\u8fd9\u4e00\u65f6\u95f4\u8303\u56f4\u5185\u7684\u589e\u91cf\u6570\u636e\u3002"}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"SQL",values:[{label:"Java",value:"Java"},{label:"SQL",value:"SQL"}],children:[(0,a.jsx)(i.Z,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:" tEnvs.executeSql(\"SELECT * FROM `lakesoul`.`default`.test_table /*+ OPTIONS('readtype'='incremental'\uff0c'readstarttime'='2023-05-01 15:15:15 ', 'readendtime'='2023-05-01 15:20:15', 'timezone'='Asia/Shanghai')*/ WHERE region='China'\").print();\n"})})}),(0,a.jsx)(i.Z,{value:"SQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Incremental reading of test_table in the region=China partition, the read timestamp range is 2023-05-01 15:15:15 to 2023-05-01 15:20:15, and the time zone is Asia/Shanghai\nSELECT * FROM `lakesoul`.`default`.test_table /*+ OPTIONS('readtype'='incremental', 'readstarttime'='2023-05-01 15:15:15 ', 'readendtime'='2023-05-01 15:20:15', 'timezone'='Asia/Shanghai')*/ WHERE region='China';\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u6d41\u8bfb",children:"\u6d41\u8bfb"}),"\n",(0,a.jsx)(n.p,{children:"LakeSoul \u8868\u652f\u6301\u5728 Flink \u6267\u884c\u6d41\u5f0f\u8bfb\u53d6\uff0c\u6d41\u5f0f\u8bfb\u57fa\u4e8e\u589e\u91cf\u8bfb\uff0c\u7528\u6237\u901a\u8fc7\u6307\u5b9a\u8d77\u59cb\u65f6\u95f4\u6233\u548c\u5206\u533a\u4fe1\u606f\uff0c\u53ef\u4ee5\u8fde\u7eed\u4e0d\u95f4\u65ad\u8bfb\u53d6\u81ea\u8d77\u59cb\u65f6\u95f4\u6233\u4ee5\u540e\u7684\u65b0\u589e\u6570\u636e\u3002\u82e5\u662f\u4e0d\u8bbe\u7f6e\u8d77\u59cb\u65f6\u95f4\u6233\u5219\u4ece\u7b2c\u4e00\u6761\u6570\u636e\u8bfb"}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"SQL",values:[{label:"Java",value:"Java"},{label:"SQL",value:"SQL"}],children:[(0,a.jsx)(i.Z,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:" tEnvs.executeSql(\"SELECT * FROM `lakesoul`.`default`.test_table /*+ OPTIONS('timezone'='Asia/Shanghai')*/ WHERE region='China'\").print();\n"})})}),(0,a.jsx)(i.Z,{value:"SQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Incremental reading of test_table in the region=China partition, the time zone is Asia/Shanghai\nSELECT * FROM `lakesoul`.`default`.test_table /*+ OPTIONS('timezone'='Asia/Shanghai')*/ WHERE region='China';\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u6d41\u5f0f\u8bfb\u53d6\u65f6\uff0cLakeSoul \u5b8c\u6574\u652f\u6301 Flink Changelog Stream \u8bed\u4e49\u3002\u5bf9\u4e8e LakeSoul CDC \u8868\uff0c\u589e\u91cf\u8bfb\u53d6\u7684\u7ed3\u679c\u4ecd\u7136\u4e3a CDC \u683c\u5f0f\uff0c\u5373\u5305\u542b\u4e86 ",(0,a.jsx)(n.code,{children:"insert"}),"\uff0c",(0,a.jsx)(n.code,{children:"update"}),"\uff0c",(0,a.jsx)(n.code,{children:"delete"})," \u4e8b\u4ef6\uff0c\u8fd9\u4e9b\u4e8b\u4ef6\u4f1a\u81ea\u52a8\u8f6c\u4e3a Flink RowData \u7684 RowKind \u5b57\u6bb5\u7684\u5bf9\u5e94\u503c\uff0c\u4ece\u800c\u5728 Flink \u4e2d\u5b9e\u73b0\u4e86\u5168\u94fe\u8def\u7684\u589e\u91cf\u8ba1\u7b97\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"lookup-join",children:"Lookup Join"}),"\n",(0,a.jsxs)(n.p,{children:["LakeSoul \u8868\u652f\u6301 Flink SQL \u4e2d\u7684 Lookup Join \u64cd\u4f5c\u3002Lookup Join \u4f1a\u5c06\u5f85 Join \u7684\u53f3\u8868\u7f13\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u4ece\u800c\u5927\u5e45\u63d0\u5347 Join \u901f\u5ea6\uff0c\u53ef\u4ee5\u5728\u8f83\u5c0f\u7ef4\u8868\u5173\u8054\u7684\u573a\u666f\u4e2d\u4f7f\u7528\u4ee5\u63d0\u5347\u6027\u80fd\u3002\nLakeSoul \u9ed8\u8ba4\u6bcf\u9694 60 \u79d2\u4f1a\u5c1d\u8bd5\u5237\u65b0\u7f13\u5b58\uff0c\u8fd9\u4e2a\u95f4\u9694\u53ef\u4ee5\u901a\u8fc7\u5728\u521b\u5efa\u7ef4\u8868\u65f6\u8bbe\u7f6e ",(0,a.jsx)(n.code,{children:"'lookup.join.cache.ttl'='60s'"})," \u8868\u5c5e\u6027\u6765\u4fee\u6539\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `lakesoul`.`default`.customers (\n            `c_id` INT,\n            `name` STRING,\n        PRIMARY KEY (`c_id`) NOT ENFORCED)\n        WITH (\n            'connector'='lakesoul',\n            'hashBucketNum'='1',\n            'path'='file:///tmp/lakesoul/flink/sink/customers'\n            );  \nCREATE TABLE `lakesoul`.`default`.orders (\n            `o_id` INT,\n            `o_c_id` INT,\n        PRIMARY KEY (`o_id`) NOT ENFORCED)\n        WITH (\n            'connector'='lakesoul',\n            'hashBucketNum'='1',\n            'path'='file:///tmp/lakesoul/flink/sink/orders',\n            'lookup.join.cache.ttl'='60s'\n            );  \nSELECT `o_id`, `c_id`, `name`\nFROM\n(SELECT *, proctime() as proctime FROM `lakesoul`.`default`.orders) as o\nJOIN `lakesoul`.`default`.customers FOR SYSTEM_TIME AS OF o.proctime\nON c_id = o_cid;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Orders \u8868\u9700\u8981\u4e0e Customers \u8868\u7684\u6570\u636e\u8fdb\u884c Lookup Join\u3002\u5e26\u6709\u540e\u7eed process time \u5c5e\u6027\u7684 FOR SYSTEM_TIME AS OF \u5b50\u53e5\u786e\u4fdd\u5728\u8054\u63a5\u8fd0\u7b97\u7b26\u5904\u7406 Orders \u884c\u65f6\uff0cOrders \u7684\u6bcf\u4e00\u884c\u90fd\u4e0e join \u6761\u4ef6\u5339\u914d\u7684 Customer \u884c\u8fde\u63a5\u3002\u5b83\u8fd8\u9632\u6b62\u8fde\u63a5\u7684 Customer \u8868\u5728\u672a\u6765\u53d1\u751f\u66f4\u65b0\u65f6\u53d8\u66f4\u8fde\u63a5\u7ed3\u679c\u3002lookup join \u8fd8\u9700\u8981\u4e00\u4e2a\u5f3a\u5236\u7684\u76f8\u7b49\u8fde\u63a5\u6761\u4ef6\uff0c\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\u662f o_c_id = c_id"}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"\u652f\u6301Flink\u6309\u6279\u5f0f\u548c\u6d41\u5f0f\u8bfb\u53d6lakesoul\u8868\uff0c\u5728Flink SQLClient\u5ba2\u6237\u7aef\u6267\u884c\u547d\u4ee4\uff0c\u5207\u6362\u6d41\u5f0f\u548c\u6279\u5f0f\u7684\u6267\u884c\u6a21\u5f0f\u3002"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- \u6309\u7167\u6d41\u5f0f\u6267\u884cFlink\u4efb\u52a1\nSET execution.runtime-mode = streaming;\nSET 'execution.checkpointing.interval' = '1min';\n-- \u6309\u7167\u6279\u5f0f\u6267\u884cFlink\u4efb\u52a1\nSET execution.runtime-mode = batch;\n"})}),(0,a.jsxs)(n.p,{children:["\u4f7f\u7528 Flink SQL\uff0c\u6307\u5b9a\u6761\u4ef6\u67e5\u8be2\u7684\u683c\u5f0f\u4e3a ",(0,a.jsx)(n.code,{children:"SELECT * FROM test_table /*+ OPTIONS('key'='value')*/ WHERE partition=xxx"})," \u3002\u5728\u4efb\u4f55\u4e00\u79cd\u8bfb\u7684\u6a21\u5f0f\u4e0b\uff0c\u5206\u533a\u53ef\u4ee5\u6307\u5b9a\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u6307\u5b9a\uff0c\u4e5f\u53ef\u4ee5\u53ea\u6307\u5b9a\u4e00\u90e8\u5206\u5206\u533a\u503c\uff0cLakeSoul \u4f1a\u81ea\u52a8\u5339\u914d\u6ee1\u8db3\u6761\u4ef6\u7684\u5206\u533a\u3002"]}),(0,a.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,a.jsx)(n.code,{children:"/* OPTIONS() */"})," \u4e3a\u67e5\u8be2\u9009\u9879\uff08hints\uff09\uff0c\u5fc5\u987b\u8981\u76f4\u63a5\u8ddf\u5728\u8868\u540d\u7684\u540e\u9762\uff08\u5728 where \u7b49\u5176\u4ed6\u5b50\u53e5\u7684\u524d\u9762\uff09\uff0cLakeSoul \u8bfb\u53d6\u65f6\u7684 hint \u9009\u9879\u5305\u62ec\uff1a"]}),(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u53c2\u6570"}),(0,a.jsx)(n.th,{children:"\u542b\u4e49\u8bf4\u660e"}),(0,a.jsx)(n.th,{children:"\u53c2\u6570\u586b\u5199\u683c\u5f0f"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"readtype"}),(0,a.jsx)(n.td,{children:"\u8bfb\u7c7b\u578b\uff0c\u53ef\u4ee5\u6307\u5b9a\u589e\u91cf\u8bfbincremental\uff0c\u5feb\u7167\u8bfbsnapshot\uff0c\u4e0d\u6307\u5b9a\u9ed8\u8ba4\u5168\u91cf\u8bfb"}),(0,a.jsx)(n.td,{children:"'readtype'='incremental'"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"discoveryinterval"}),(0,a.jsx)(n.td,{children:"\u6d41\u5f0f\u589e\u91cf\u8bfb\u7684\u53d1\u73b0\u65b0\u6570\u636e\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u9ed8\u8ba4\u4e3a 30000"}),(0,a.jsx)(n.td,{children:"'discoveryinterval'='10000'"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"readstarttime"}),(0,a.jsx)(n.td,{children:"\u8d77\u59cb\u8bfb\u65f6\u95f4\u6233\uff0c\u5982\u679c\u672a\u6307\u5b9a\u8d77\u59cb\u65f6\u95f4\u6233\uff0c\u5219\u9ed8\u8ba4\u4ece\u8d77\u59cb\u7248\u672c\u53f7\u5f00\u59cb\u8bfb\u53d6"}),(0,a.jsx)(n.td,{children:"'readstarttime'='2023-05-01 15:15:15'"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"readendtime"}),(0,a.jsx)(n.td,{children:"\u7ed3\u675f\u8bfb\u65f6\u95f4\u6233\uff0c\u5982\u679c\u672a\u6307\u5b9a\u7ed3\u675f\u65f6\u95f4\u6233\uff0c\u5219\u9ed8\u8ba4\u8bfb\u53d6\u5230\u5f53\u524d\u6700\u65b0\u7248\u672c\u53f7"}),(0,a.jsx)(n.td,{children:"'readendtime'='2023-05-01 15:20:15'"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"timezone"}),(0,a.jsx)(n.td,{children:"\u65f6\u95f4\u6233\u7684\u65f6\u533a\u4fe1\u606f\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u65f6\u95f4\u6233\u7684\u65f6\u533a\u4fe1\u606f\uff0c\u5219\u9ed8\u8ba4\u4e3a\u6309\u672c\u673a\u65f6\u533a\u5904\u7406"}),(0,a.jsx)(n.td,{children:"'timezone'='Asia/Sahanghai'"})]})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,n,l)=>{l.d(n,{Z:()=>i});l(7294);var a=l(6905);const t={tabItem:"tabItem_Ymn6"};var s=l(5893);function i(e){let{children:n,hidden:l,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,i),hidden:l,children:n})}},4866:(e,n,l)=>{l.d(n,{Z:()=>f});var a=l(7294),t=l(6905),s=l(2466),i=l(6550),r=l(469),d=l(1980),c=l(7392),o=l(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:a,default:t}}=e;return{value:n,label:l,attributes:a,default:t}}))}(l);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function x(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:l}=e;const t=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,d._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function m(e){const{defaultValue:n,queryString:l=!1,groupId:t}=e,s=h(e),[i,d]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=l.find((e=>e.default))??l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,u]=j({queryString:l,groupId:t}),[m,p]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,o.Nk)(l);return[t,(0,a.useCallback)((e=>{l&&s.set(e)}),[l,s])]}({groupId:t}),v=(()=>{const e=c??m;return x({value:e,tabValues:s})?e:null})();(0,r.Z)((()=>{v&&d(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var p=l(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=l(5893);function S(e){let{className:n,block:l,selectedValue:a,selectValue:i,tabValues:r}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),o=e=>{const n=e.currentTarget,l=d.indexOf(n),t=r[l].value;t!==a&&(c(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const l=d.indexOf(e.currentTarget)+1;n=d[l]??d[0];break}case"ArrowLeft":{const l=d.indexOf(e.currentTarget)-1;n=d[l]??d[d.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":l},n),children:r.map((e=>{let{value:n,label:l,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>d.push(e),onKeyDown:u,onClick:o,...s,className:(0,t.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===n}),children:l??n},n)}))})}function g(e){let{lazy:n,children:l,selectedValue:t}=e;const s=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function b(e){const n=m(e);return(0,k.jsxs)("div",{className:(0,t.Z)("tabs-container",v.tabList),children:[(0,k.jsx)(S,{...e,...n}),(0,k.jsx)(g,{...e,...n})]})}function f(e){const n=(0,p.Z)();return(0,k.jsx)(b,{...e,children:u(e.children)},String(n))}},1151:(e,n,l)=>{l.d(n,{Z:()=>r,a:()=>i});var a=l(7294);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);