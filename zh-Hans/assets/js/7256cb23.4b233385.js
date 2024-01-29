"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[7228],{2069:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>r});var t=a(5893),l=a(1151);const o={},c="LakeSoul \u8868\u751f\u547d\u5468\u671f\u81ea\u52a8\u7ef4\u62a4\u548c\u5197\u4f59\u6570\u636e\u81ea\u52a8\u6e05\u7406",i={id:"Usage Docs/clean-redundant-data",title:"LakeSoul \u8868\u751f\u547d\u5468\u671f\u81ea\u52a8\u7ef4\u62a4\u548c\u5197\u4f59\u6570\u636e\u81ea\u52a8\u6e05\u7406",description:"\u8be5\u529f\u80fd\u4e8e 2.4.0 \u7248\u672c\u8d77\u63d0\u4f9b",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-Usage Docs/09-clean-redundant-data.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/clean-redundant-data",permalink:"/zh-Hans/docs/Usage Docs/clean-redundant-data",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/09-clean-redundant-data.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LakeSoul \u5168\u5c40\u81ea\u52a8\u538b\u7f29\u670d\u52a1\u4f7f\u7528\u65b9\u6cd5",permalink:"/zh-Hans/docs/Usage Docs/auto-compaction-task"},next:{title:"\u4f7f\u7528 Presto \u67e5\u8be2 LakeSoul \u8868",permalink:"/zh-Hans/docs/Usage Docs/setup-presto"}},s={},r=[{value:"\u624b\u5de5\u6e05\u7406\u65e7 compaction \u6570\u636e",id:"\u624b\u5de5\u6e05\u7406\u65e7-compaction-\u6570\u636e",level:2},{value:"\u81ea\u52a8\u6e05\u7406\u8fc7\u671f\u6570\u636e\u548c\u5197\u4f59\u6570\u636e",id:"\u81ea\u52a8\u6e05\u7406\u8fc7\u671f\u6570\u636e\u548c\u5197\u4f59\u6570\u636e",level:2},{value:"\u914d\u7f6e\u5206\u533a\u751f\u547d\u5468\u671f <code>partition.ttl</code> \u8868\u5c5e\u6027",id:"\u914d\u7f6e\u5206\u533a\u751f\u547d\u5468\u671f-partitionttl-\u8868\u5c5e\u6027",level:3},{value:"\u914d\u7f6e\u5197\u4f59\u6570\u636e\u81ea\u52a8\u6e05\u7406\u5468\u671f <code>compaction.ttl</code> \u8868\u5c5e\u6027",id:"\u914d\u7f6e\u5197\u4f59\u6570\u636e\u81ea\u52a8\u6e05\u7406\u5468\u671f-compactionttl-\u8868\u5c5e\u6027",level:3},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:3},{value:"\u901a\u8fc7\u6570\u636e\u5199\u5165\u65f6\u6307\u5b9a\u914d\u7f6e",id:"\u901a\u8fc7\u6570\u636e\u5199\u5165\u65f6\u6307\u5b9a\u914d\u7f6e",level:4},{value:"\u901a\u8fc7 API \u6765\u589e\u52a0\u6216\u4fee\u6539\u8be5\u914d\u7f6e",id:"\u901a\u8fc7-api-\u6765\u589e\u52a0\u6216\u4fee\u6539\u8be5\u914d\u7f6e",level:3},{value:"\u6267\u884c\u81ea\u52a8\u6e05\u7406\u6240\u6709\u8868\u7684\u8fc7\u671f\u6570\u636e\u7684\u4f5c\u4e1a",id:"\u6267\u884c\u81ea\u52a8\u6e05\u7406\u6240\u6709\u8868\u7684\u8fc7\u671f\u6570\u636e\u7684\u4f5c\u4e1a",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lakesoul-\u8868\u751f\u547d\u5468\u671f\u81ea\u52a8\u7ef4\u62a4\u548c\u5197\u4f59\u6570\u636e\u81ea\u52a8\u6e05\u7406",children:"LakeSoul \u8868\u751f\u547d\u5468\u671f\u81ea\u52a8\u7ef4\u62a4\u548c\u5197\u4f59\u6570\u636e\u81ea\u52a8\u6e05\u7406"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u8be5\u529f\u80fd\u4e8e 2.4.0 \u7248\u672c\u8d77\u63d0\u4f9b"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6570\u636e\u4ed3\u5e93\u4e2d\uff0c\u901a\u5e38\u4f1a\u9700\u8981\u8bbe\u7f6e\u8868\u7684\u6570\u636e\u7684\u751f\u547d\u5468\u671f\uff0c\u4ece\u800c\u8fbe\u5230\u8282\u7701\u7a7a\u95f4\uff0c\u964d\u4f4e\u6210\u672c\u7684\u76ee\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u53e6\u4e00\u65b9\u9762\uff0c\u5bf9\u4e8e\u5b9e\u65f6\u66f4\u65b0\u7684\u8868\uff0c\u8fd8\u4f1a\u5b58\u5728\u5197\u4f59\u6570\u636e\u3002\u5197\u4f59\u6570\u636e\u662f\u6307\uff0c\u6bcf\u6b21\u6267\u884c compaction \u64cd\u4f5c\u65f6\uff0c\u90fd\u4f1a\u751f\u6210\u65b0\u7684 compaction \u6587\u4ef6\uff0c\u65b0 compaction \u6587\u4ef6\u5305\u542b\u6240\u6709\u7684\u5386\u53f2\u6570\u636e\uff0c\u6b64\u65f6\u6240\u6709\u7684\u5386\u53f2 compaction \u6587\u4ef6\u4fbf\u53ef\u4ee5\u89c6\u4e3a\u5197\u4f59\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u540c\u65f6\uff0c\u5bf9\u4e8e\u4e00\u4e2a\u5728\u6301\u7eed\u66f4\u65b0\u548c compaction \u64cd\u4f5c\u7684\u8868\u6570\u636e\u3002\u5982\u679c\u7528\u6237\u53ea\u5173\u5fc3\u8fd1\u671f\u67d0\u4e2a\u65f6\u95f4\u65ad\u7684\u6570\u636e\u53d8\u66f4\u60c5\u51b5\u3002\u6b64\u65f6\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u6e05\u7406\u67d0\u4e2a compaction \u4e4b\u524d\u7684\u6240\u6709\u6570\u636e\uff0c\u8fd9\u6837\u4f1a\u4fdd\u7559\u4e00\u4efd\u5168\u91cf\u6570\u636e\u5e76\u4e14\u652f\u6301\u7528\u6237\u4ece\u8fd1\u671f\u67d0\u4e2a\u65f6\u95f4\u65ad\u589e\u91cf\u8bfb\u548c\u5feb\u7167\u8bfb\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u624b\u5de5\u6e05\u7406\u65e7-compaction-\u6570\u636e",children:"\u624b\u5de5\u6e05\u7406\u65e7 compaction \u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u6237\u5728\u6267\u884c compactition \u64cd\u4f5c\u65f6\uff0c\u53ef\u4ee5\u5f00\u542f\u5f00\u5173 cleanOldCompaction=true,\u6e05\u7406\u65e7compaction\u6587\u4ef6\u6570\u636e\u3002\u9ed8\u8ba4\u4e3afalse\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"    LakeSoulTable.forPath(tablePath).compaction(true)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u81ea\u52a8\u6e05\u7406\u8fc7\u671f\u6570\u636e\u548c\u5197\u4f59\u6570\u636e",children:"\u81ea\u52a8\u6e05\u7406\u8fc7\u671f\u6570\u636e\u548c\u5197\u4f59\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u914d\u7f6e\u4e0b\u9762\u4e24\u4e2a\u8868\u5c5e\u6027\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"partition.ttl"})," \u8868\u793a\u5206\u533a\u8fc7\u671f\u65f6\u95f4\uff0c\u7c92\u5ea6(\u5929)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"compaction.ttl"})," \u8868\u793a\u5197\u4f59\u6570\u636e\u8fc7\u671f\u65f6\u95f4\uff0c\u7c92\u5ea6(\u5929)"]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"\u914d\u7f6e\u5206\u533a\u751f\u547d\u5468\u671f-partitionttl-\u8868\u5c5e\u6027",children:["\u914d\u7f6e\u5206\u533a\u751f\u547d\u5468\u671f ",(0,t.jsx)(n.code,{children:"partition.ttl"})," \u8868\u5c5e\u6027"]}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u8868\u5206\u533a\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u5047\u8bbe\u7528\u6237\u914d\u7f6e\u4e3a365\u5929\uff0c\u90a3\u4e48\u8be5\u8868\u4e2d\uff0c\u5982\u679c\u67d0\u4e2a\u5206\u533a\u7684\u6700\u8fd1commit\u8bb0\u5f55\u5df2\u7ecf\u8fc7\u671f\uff0c\u90a3\u4e48\u5220\u9664\u8be5\u5206\u533a\u6570\u636e\u3002\u7279\u522b\u7684\uff0c\u5982\u679c\u8be5\u8868\u7684\u6240\u6709\u5206\u533a\u90fd\u8fc7\u671f\uff0c\u90a3\u4e48\u76f8\u5f53\u4e8e\u6267\u884c truncate \u529f\u80fd\u3002"}),"\n",(0,t.jsxs)(n.h3,{id:"\u914d\u7f6e\u5197\u4f59\u6570\u636e\u81ea\u52a8\u6e05\u7406\u5468\u671f-compactionttl-\u8868\u5c5e\u6027",children:["\u914d\u7f6e\u5197\u4f59\u6570\u636e\u81ea\u52a8\u6e05\u7406\u5468\u671f ",(0,t.jsx)(n.code,{children:"compaction.ttl"})," \u8868\u5c5e\u6027"]}),"\n",(0,t.jsx)(n.p,{children:"\u6e05\u7406\u5206\u533a\u5197\u4f59\u6570\u636e\u3002\u5047\u8bbe\u5197\u4f59\u6e05\u7406\u662f3\u5929\uff0c\u90a3\u4e48\u627e\u52303\u5929\u524d\u7684\u6700\u8fd1\u4e00\u6b21compaction\uff0c\u5220\u9664\u5b83\u4e4b\u524d\u7684\u6570\u636e\u3002\u8fd9\u6837\u7684\u76ee\u7684\u662f3\u5929\u5185\u7684\u5feb\u7167\u8bfb\u3001\u589e\u91cf\u8bfb\u90fd\u662f\u6709\u6548\u7684\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u914d\u7f6e\u793a\u4f8b",children:"\u914d\u7f6e\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"partition.ttl"}),"\u548c ",(0,t.jsx)(n.code,{children:"compaction.ttl"})," \u8868\u5c5e\u6027\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u901a\u8fc7\u6570\u636e\u5199\u5165\u65f6\u6307\u5b9a\u914d\u7f6e",children:"\u901a\u8fc7\u6570\u636e\u5199\u5165\u65f6\u6307\u5b9a\u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'    val df = Seq(("2021-01-01", 1, "rice"), ("2021-01-01", 2, "bread")).toDF("date", "id", "name")\n    val tablePath = "s3a://bucket-name/table/path/is/also/table/name"\n    df.write\n      .mode("append")\n      .format("lakesoul")\n      .option("rangePartitions", "date")\n      .option("hashPartitions", "id")\n      .option("partition.ttl",365)\n      .option("compaction.ttl",3)\n      .option("hashBucketNum", "2")\n      .save(tablePath)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.code,{children:"CREATE TABLE"})," SQL \u8bed\u53e5\u4e2d\uff0c\u5728 ",(0,t.jsx)(n.code,{children:"TBLPROPERTIES"})," \u91cc\u6dfb\u52a0\u5c5e\u6027\u914d\u7f6e\uff08Flink \u4e2d\u662f\u5728 ",(0,t.jsx)(n.code,{children:"WITH"})," \u540e\u6dfb\u52a0\u5c5e\u6027\u914d\u7f6e\uff09\u3002\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- For Spark\nCREATE TABLE table (id INT, data STRING) USING lakesoul\nTBLPROPERTIES ('partition.ttl'='365', 'compaction.ttl'='7')\n\n-- For Flink\ncreate table `lakesoul`.`default`.test_table (`id` INT, data STRING,\n  PRIMARY KEY (`id`,`name`) NOT ENFORCED)\nWITH (\n    'connector'='lakesoul',\n    'hashBucketNum'='4',\n    'use_cdc'='true',\n    'partition.ttl'='365',\n    'compaction.ttl'='7',\n    'path'='file:///tmp/lakesoul/flink/sink/test');\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u901a\u8fc7-api-\u6765\u589e\u52a0\u6216\u4fee\u6539\u8be5\u914d\u7f6e",children:"\u901a\u8fc7 API \u6765\u589e\u52a0\u6216\u4fee\u6539\u8be5\u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"    LakeSoulTable.forPath(tablePath).setPartitionTtl(128).setCompactionTtl(10)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u540c\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7tableAPI\u6765\u53d6\u6d88\u8be5\u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"    LakeSoulTable.forPath(tablePath).cancelPartitionTtl()\n    LakeSoulTable.forPath(tablePath).cancelCompactionTtl()\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a Spark \u4f5c\u4e1a\u914d\u7f6e LakeSoul \u5143\u6570\u636e\u5e93\u8fde\u63a5\uff0c\u8be6\u7ec6\u8bf4\u660e\u53ef\u4ee5\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"/zh-Hans/docs/Usage%20Docs/setup-spark",children:"LakeSoul\u8bbe\u7f6e Spark \u5de5\u7a0b/\u4f5c\u4e1a"})," \uff1b"]}),"\n",(0,t.jsx)(n.h3,{id:"\u6267\u884c\u81ea\u52a8\u6e05\u7406\u6240\u6709\u8868\u7684\u8fc7\u671f\u6570\u636e\u7684\u4f5c\u4e1a",children:"\u6267\u884c\u81ea\u52a8\u6e05\u7406\u6240\u6709\u8868\u7684\u8fc7\u671f\u6570\u636e\u7684\u4f5c\u4e1a"}),"\n",(0,t.jsx)(n.p,{children:"LakeSoul \u63d0\u4f9b\u4e86\u4e00\u4e2a\u6e05\u7406\u8fc7\u671f\u6570\u636e\u7684 Spark \u4f5c\u4e1a\u5b9e\u73b0\uff0c\u4f1a\u626b\u63cf\u5143\u6570\u636e\u4e2d\u6240\u6709\u8fc7\u671f\u7684\u5206\u533a\u5e76\u6267\u884c\u6e05\u7406\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u5929\u7ea7\u522b\u5b9a\u65f6\u8c03\u5ea6\u8fd9\u4e2a\u4efb\u52a1\u6765\u8fbe\u5230\u6e05\u7406\u76ee\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u5730\u542f\u52a8 Spark \u6e05\u7406\u547d\u4ee4\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"./bin/spark-submit \\\n    --name clean_redundant_data \\\n    --master yarn  \\\n    --deploy-mode cluster \\\n    --executor-memory 3g \\\n    --executor-cores 1 \\\n    --num-executors 20 \\\n    --class com.dmetasoul.lakesoul.spark.clean.CleanExpiredData \\\n    jars/lakesoul-spark-2.5.1-spark-3.3.jar \n\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u4e0a\u8ff0\u6e05\u7406\u4efb\u52a1\u662f\u5bf9 LakeSoul \u6240\u6709\u8868\u751f\u6548\u3002"})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>c});var t=a(7294);const l={},o=t.createContext(l);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);