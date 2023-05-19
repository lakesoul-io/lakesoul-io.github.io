"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[98],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=l.createContext({}),p=function(e){var a=l.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=p(e.components);return l.createElement(i.Provider,{value:a},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},d=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),k=p(t),d=n,m=k["".concat(i,".").concat(d)]||k[d]||c[d]||o;return t?l.createElement(m,s(s({ref:a},u),{},{components:t})):l.createElement(m,s({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var r={};for(var i in a)hasOwnProperty.call(a,i)&&(r[i]=a[i]);r.originalType=e,r[k]="string"==typeof e?e:n,s[1]=r;for(var p=2;p<o;p++)s[p]=t[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8969:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var l=t(7462),n=(t(7294),t(3905));const o={},s="API \u6587\u6863",r={unversionedId:"Usage Docs/api-docs",id:"Usage Docs/api-docs",title:"API \u6587\u6863",description:"1. \u521b\u5efa\u548c\u5199\u5165 LakeSoulTable",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-Usage Docs/03-api-docs.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/api-docs",permalink:"/zh-Hans/docs/Usage Docs/api-docs",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/03-api-docs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e Spark \u5de5\u7a0b/\u4f5c\u4e1a",permalink:"/zh-Hans/docs/Usage Docs/setup-spark"},next:{title:"LakeSoul CDC \u8868",permalink:"/zh-Hans/docs/Usage Docs/cdc-ingestion-table"}},i={},p=[{value:"1. \u521b\u5efa\u548c\u5199\u5165 LakeSoulTable",id:"1-\u521b\u5efa\u548c\u5199\u5165-lakesoultable",level:2},{value:"1.1 Table Name",id:"11-table-name",level:3},{value:"1.2 \u5143\u6570\u636e\u7ba1\u7406",id:"12-\u5143\u6570\u636e\u7ba1\u7406",level:3},{value:"1.3 Partition",id:"13-partition",level:3},{value:"1.4 \u4ee3\u7801\u793a\u4f8b",id:"14-\u4ee3\u7801\u793a\u4f8b",level:3},{value:"2. Read LakeSoulTable",id:"2-read-lakesoultable",level:2},{value:"2.1 \u4ee3\u7801\u793a\u4f8b",id:"21-\u4ee3\u7801\u793a\u4f8b",level:3},{value:"3. Upsert LakeSoulTable",id:"3-upsert-lakesoultable",level:2},{value:"3.1 Batch",id:"31-batch",level:3},{value:"3.1.1 \u4ee3\u7801\u793a\u4f8b",id:"311-\u4ee3\u7801\u793a\u4f8b",level:4},{value:"3.2 Streaming \u652f\u6301",id:"32-streaming-\u652f\u6301",level:3},{value:"4. Update LakeSoulTable",id:"4-update-lakesoultable",level:2},{value:"4.1 \u4ee3\u7801\u793a\u4f8b",id:"41-\u4ee3\u7801\u793a\u4f8b",level:3},{value:"5. Delete Data",id:"5-delete-data",level:2},{value:"5.1 \u4ee3\u7801\u793a\u4f8b",id:"51-\u4ee3\u7801\u793a\u4f8b",level:3},{value:"6. Compaction",id:"6-compaction",level:2},{value:"6.1 \u4ee3\u7801\u793a\u4f8b",id:"61-\u4ee3\u7801\u793a\u4f8b",level:3},{value:"6.2 Compaction \u540e\u6302\u8f7d\u5230 Hive Meta",id:"62-compaction-\u540e\u6302\u8f7d\u5230-hive-meta",level:3},{value:"7. \u4f7f\u7528 Spark SQL \u64cd\u4f5c LakeSoulTable",id:"7-\u4f7f\u7528-spark-sql-\u64cd\u4f5c-lakesoultable",level:2},{value:"7.1 \u4ee3\u7801\u793a\u4f8b",id:"71-\u4ee3\u7801\u793a\u4f8b",level:3},{value:"7.1.1 DDL SQL",id:"711-ddl-sql",level:4},{value:"7.1.2 DML SQL",id:"712-dml-sql",level:4},{value:"8. Operator on Hash Primary Keys",id:"8-operator-on-hash-primary-keys",level:2},{value:"8.1 Join on Hash Keys",id:"81-join-on-hash-keys",level:3},{value:"8.2 Intersect/Except on Hash Keys",id:"82-intersectexcept-on-hash-keys",level:3},{value:"8.3 \u4ee3\u7801\u793a\u4f8b",id:"83-\u4ee3\u7801\u793a\u4f8b",level:3},{value:"9. Schema \u6f14\u8fdb",id:"9-schema-\u6f14\u8fdb",level:2},{value:"9.1 Merge Schema",id:"91-merge-schema",level:3},{value:"9.2 \u4ee3\u7801\u793a\u4f8b",id:"92-\u4ee3\u7801\u793a\u4f8b",level:3},{value:"10. Drop Partition",id:"10-drop-partition",level:2},{value:"10.1 \u4ee3\u7801\u793a\u4f8b",id:"101-\u4ee3\u7801\u793a\u4f8b",level:3},{value:"11. Drop Table",id:"11-drop-table",level:2},{value:"11.1 \u4ee3\u7801\u793a\u4f8b",id:"111-\u4ee3\u7801\u793a\u4f8b",level:3}],u={toc:p},k="wrapper";function c(e){let{components:a,...t}=e;return(0,n.kt)(k,(0,l.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api-\u6587\u6863"},"API \u6587\u6863"),(0,n.kt)("h2",{id:"1-\u521b\u5efa\u548c\u5199\u5165-lakesoultable"},"1. \u521b\u5efa\u548c\u5199\u5165 LakeSoulTable"),(0,n.kt)("h3",{id:"11-table-name"},"1.1 Table Name"),(0,n.kt)("p",null,"LakeSoul \u4e2d\u8868\u540d\u53ef\u4ee5\u662f\u4e00\u4e2a\u8def\u5f84\uff0c\u6570\u636e\u5b58\u50a8\u7684\u76ee\u5f55\u5c31\u662f LakeSoulTable \u7684\u8868\u540d\u3002\u540c\u65f6\u4e00\u4e2a\u8868\u53ef\u4ee5\u6709\u4e00\u4e2a\u8868\u540d\u5e2e\u52a9\u8bb0\u5fc6\uff0c\u6216\u5728SQL\u4e2d\u8bbf\u95ee\uff0c\u5373\u4e0d\u662f\u8def\u5f84\u5f62\u5f0f\u7684\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002"),(0,n.kt)("p",null,"\u5f53\u8c03\u7528 Dataframe.write.save \u65b9\u6cd5\u5411 LakeSoulTable \u5199\u6570\u636e\u65f6\uff0c\u82e5\u8868\u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u4f7f\u7528\u5b58\u50a8\u8def\u5f84\u81ea\u52a8\u521b\u5efa\u65b0\u8868\uff0c\u4f46\u662f\u9ed8\u8ba4\u6ca1\u6709\u8868\u540d\uff0c\u53ea\u80fd\u901a\u8fc7\u8def\u5f84\u8bbf\u95ee\uff0c\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 ",(0,n.kt)("inlineCode",{parentName:"p"},'option("shortTableName", "table_name")')," \u9009\u9879\u6765\u8bbe\u7f6e\u8868\u540d\u3002"),(0,n.kt)("p",null,"\u901a\u8fc7 DataFrame.write.saveAsTable\uff0c\u4f1a\u521b\u5efa\u8868\uff0c\u53ef\u4ee5\u901a\u8fc7\u8868\u540d\u8bbf\u95ee\uff0c\u8def\u5f84\u9ed8\u8ba4\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"spark.sql.warehouse.dir"),"/current_database/table_name\uff0c\u540e\u7eed\u53ef\u4ee5\u901a\u8fc7\u8def\u5f84\u6216\u8868\u540d\u8bbf\u95ee\u3002\u5982\u9700\u81ea\u5b9a\u4e49\u8868\u8def\u5f84\uff0c\u5219\u53ef\u4ee5\u52a0\u4e0a ",(0,n.kt)("inlineCode",{parentName:"p"},'option("path", "s3://bucket/...")')," \u9009\u9879\u3002"),(0,n.kt)("p",null,"\u901a\u8fc7 SQL \u5efa\u8868\u65f6\uff0c\u8868\u540d\u53ef\u4ee5\u662f\u8def\u5f84\u6216\u4e00\u4e2a\u8868\u540d\uff0c\u8def\u5f84\u5fc5\u987b\u662f\u7edd\u5bf9\u8def\u5f84\u3002\u5982\u679c\u662f\u8868\u540d\uff0c\u5219\u8def\u5f84\u7684\u89c4\u5219\u548c\u4e0a\u9762 Dataframe.write.saveAsTable \u4e00\u81f4\uff0c\u53ef\u4ee5\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," SQL \u4e2d\u901a\u8fc7 LOCATION \u5b50\u53e5\u8bbe\u7f6e\u3002\u5173\u4e8e\u5982\u4f55\u5728 SQL \u4e2d\u521b\u5efa\u4e3b\u952e\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"#7-%E4%BD%BF%E7%94%A8-spark-sql-%E6%93%8D%E4%BD%9C-lakesoultable"},"7. \u4f7f\u7528 Spark SQL \u64cd\u4f5c LakeSoul \u8868")),(0,n.kt)("h3",{id:"12-\u5143\u6570\u636e\u7ba1\u7406"},"1.2 \u5143\u6570\u636e\u7ba1\u7406"),(0,n.kt)("p",null,"LakeSoul \u901a\u8fc7\u6570\u636e\u662f\u7ba1\u7406 meta \u6570\u636e\uff0c\u56e0\u6b64\u53ef\u4ee5\u9ad8\u6548\u7684\u5904\u7406\u5143\u6570\u636e\uff0c\u5e76\u4e14 meta \u96c6\u7fa4\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5728\u4e91\u4e0a\u8fdb\u884c\u6269\u5bb9\u3002"),(0,n.kt)("h3",{id:"13-partition"},"1.3 Partition"),(0,n.kt)("p",null,"LakeSoulTable \u6709\u4e24\u79cd\u5206\u533a\u65b9\u5f0f\uff0c\u5206\u522b\u662f range \u5206\u533a\u548c hash \u5206\u533a\uff0c\u53ef\u4ee5\u4e24\u79cd\u5206\u533a\u540c\u65f6\u4f7f\u7528\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"range \u5206\u533a\u5373\u901a\u5e38\u7684\u57fa\u4e8e\u65f6\u95f4\u7684\u8868\u5206\u533a\uff0c\u4e0d\u540c\u5206\u533a\u7684\u6570\u636e\u6587\u4ef6\u5b58\u50a8\u5728\u4e0d\u540c\u7684\u5206\u533a\u8def\u5f84\u4e0b\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 hash \u5206\u533a\uff0c\u5fc5\u987b\u540c\u65f6\u6307\u5b9a hash \u5206\u533a\u4e3b\u952e\u5b57\u6bb5\u548c hash bucket num\uff0c\u5728\u5199\u6570\u636e\u65f6\uff0c\u4f1a\u6839\u636e bucket num \u5bf9 hash \u4e3b\u952e\u5b57\u6bb5\u503c\u8fdb\u884c\u6563\u5217\uff0c\u53d6\u6a21\u540e\u76f8\u540c\u6570\u636e\u4f1a\u5199\u5230\u540c\u4e00\u4e2a\u6587\u4ef6\uff0c\u6587\u4ef6\u5185\u90e8\u6839\u636e hash \u5b57\u6bb5\u503c\u5347\u5e8f\u6392\u5217\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u82e5\u540c\u65f6\u6307\u5b9a\u4e86 range \u5206\u533a\u548c hash \u5206\u533a\uff0c\u5219\u6bcf\u4e2a range \u5206\u533a\u5185\uff0chash \u503c\u76f8\u540c\u7684\u6570\u636e\u4f1a\u5199\u5230\u540c\u4e00\u4e2a\u6587\u4ef6\u91cc;"),(0,n.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5206\u533a\u540e\uff0c\u5199\u5165 LakeSoulTable \u7684\u6570\u636e\u5fc5\u987b\u5305\u542b\u5206\u533a\u5b57\u6bb5\u3002")),(0,n.kt)("p",null,"\u53ef\u4ee5\u6839\u636e\u5177\u4f53\u573a\u666f\u9009\u62e9\u4f7f\u7528 range \u5206\u533a\u6216 hash \u5206\u533a\uff0c\u6216\u8005\u540c\u65f6\u4f7f\u7528\u4e24\u8005\u3002\u5f53\u6307\u5b9a hash \u5206\u533a\u540e\uff0cLakeSoulTable \u7684\u6570\u636e\u5c06\u6839\u636e\u4e3b\u952e\u552f\u4e00\uff0c\u4e3b\u952e\u5b57\u6bb5\u4e3a hash \u5206\u533a\u5b57\u6bb5 + range \u5206\u533a\u5b57\u6bb5\uff08\u5982\u679c\u5b58\u5728\uff09\u3002"),(0,n.kt)("p",null,"\u5f53\u6307\u5b9a hash \u5206\u533a\u65f6\uff0cLakeSoulTable \u652f\u6301 upsert \u64cd\u4f5c (scala/sql)\uff0c\u6b64\u65f6 append \u6a21\u5f0f\u5199\u6570\u636e\u88ab\u7981\u6b62\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"LakeSoulTable.upsert()")," \u65b9\u6cd5\u6216\u8005 ",(0,n.kt)("inlineCode",{parentName:"p"},"MERGE INTO")," SQL \u8bed\u53e5\u3002"),(0,n.kt)("h3",{id:"14-\u4ee3\u7801\u793a\u4f8b"},"1.4 \u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.spark.sql._\nval spark = SparkSession.builder.master("local")\n  .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n  // \u4f7f\u7528 SQL \u529f\u80fd\u8fd8\u9700\u8981\u589e\u52a0\u4ee5\u4e0b\u4e24\u4e2a\u914d\u7f6e\u9879\n  .config("spark.sql.catalog.lakesoul", "org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog")\n  .config("spark.sql.defaultCatalog", "lakesoul")\n  .getOrCreate()\nimport spark.implicits._\n\nval df = Seq(("2021-01-01",1,"rice"),("2021-01-01",2,"bread")).toDF("date","id","name")\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\n\n//create table\n//spark batch\ndf.write\n  .mode("append")\n  .format("lakesoul")\n  .option("rangePartitions","date")\n  .option("hashPartitions","id")\n  .option("hashBucketNum","2")\n  .save(tablePath)\n//spark streaming\nimport org.apache.spark.sql.streaming.Trigger\nval readStream = spark.readStream.parquet("inputPath")\nval writeStream = readStream.writeStream\n  .outputMode("append")\n  .trigger(Trigger.ProcessingTime("1 minutes"))\n  .format("lakesoul")\n  .option("rangePartitions","date")\n  .option("hashPartitions","id")\n  .option("hashBucketNum", "2")\n  .option("checkpointLocation", "s3a://bucket-name/checkpoint/path")\n  .start(tablePath)\nwriteStream.awaitTermination()\n\n//\u5bf9\u4e8e\u5df2\u5b58\u5728\u7684\u8868\uff0c\u5199\u6570\u636e\u65f6\u4e0d\u9700\u8981\u518d\u6307\u5b9a\u5206\u533a\u4fe1\u606f\n//\u76f8\u5f53\u4e8e insert overwrite partition\uff0c\u5982\u679c\u4e0d\u6307\u5b9a replaceWhere\uff0c\u5219\u4f1a\u91cd\u5199\u6574\u5f20\u8868\ndf.write\n  .mode("overwrite")\n  .format("lakesoul")\n  .option("replaceWhere","date=\'2021-01-01\'")\n  .save(tablePath)\n\n')),(0,n.kt)("h2",{id:"2-read-lakesoultable"},"2. Read LakeSoulTable"),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 Spark read api \u6216\u8005\u6784\u5efa LakeSoulTable \u6765\u8bfb\u53d6\u6570\u636e\uff0cLakeSoul \u4e5f\u652f\u6301\u901a\u8fc7 Spark SQL \u8bfb\u53d6\u6570\u636e\uff0c\u8be6\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"#7-%E4%BD%BF%E7%94%A8-spark-sql-%E6%93%8D%E4%BD%9C-lakesoultable"},"7. \u4f7f\u7528 Spark SQL \u64cd\u4f5c LakeSoulTable")),(0,n.kt)("h3",{id:"21-\u4ee3\u7801\u793a\u4f8b"},"2.1 \u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport org.apache.spark.sql._\nval spark = SparkSession.builder.master("local")\n  .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n  .getOrCreate()\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\n\n//\u65b9\u6cd5\u4e00\nval df1 = spark.read.format("lakesoul").load(tablePath)\n\n//\u65b9\u6cd5\u4e8c\nval df2 = LakeSoulTable.forPath(tablePath).toDF\n\n')),(0,n.kt)("h2",{id:"3-upsert-lakesoultable"},"3. Upsert LakeSoulTable"),(0,n.kt)("h3",{id:"31-batch"},"3.1 Batch"),(0,n.kt)("p",null,"\u5f53 LakeSoulTable \u4f7f\u7528 hash \u5206\u533a\u65f6\uff0c\u652f\u6301 upsert \u529f\u80fd\u3002  "),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f7f\u7528 MergeOnRead \u6a21\u5f0f\uff0cupsert \u6570\u636e\u4ee5 delta file \u7684\u5f62\u5f0f\u5199\u5165\u8868\u8def\u5f84\uff0cLakeSoul \u63d0\u4f9b\u4e86\u9ad8\u6548\u7684 upsert \u548c merge scan \u6027\u80fd\u3002  "),(0,n.kt)("h4",{id:"311-\u4ee3\u7801\u793a\u4f8b"},"3.1.1 \u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport org.apache.spark.sql._\nval spark = SparkSession.builder.master("local")\n  .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n  .getOrCreate()\nimport spark.implicits._\n\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\n\nval lakeSoulTable = LakeSoulTable.forPath(tablePath)\nval extraDF = Seq(("2021-01-01",3,"chicken")).toDF("date","id","name")\n\nlakeSoulTable.upsert(extraDF)\n')),(0,n.kt)("h3",{id:"32-streaming-\u652f\u6301"},"3.2 Streaming \u652f\u6301"),(0,n.kt)("p",null,"\u6d41\u5f0f\u573a\u666f\u4e2d\uff0c\u82e5 outputMode \u4e3a complete\uff0c\u5219\u6bcf\u6b21\u5199\u6570\u636e\u90fd\u4f1a overwrite \u4e4b\u524d\u7684\u6570\u636e\u3002  "),(0,n.kt)("p",null,"\u5f53 outputMode \u4e3a append \u6216 update \u65f6\uff0c\u5982\u679c\u6307\u5b9a\u4e86 hash \u5206\u533a\uff0c\u5219\u6bcf\u6b21\u5199\u5165\u6570\u636e\u89c6\u4e3a\u8fdb\u884c\u4e00\u6b21 upsert \u66f4\u65b0\uff0c\u8bfb\u53d6\u65f6\u5982\u679c\u5b58\u5728\u76f8\u540c\u4e3b\u952e\u7684\u6570\u636e\uff0c\u540c\u4e00\u5b57\u6bb5\u7684\u6700\u65b0\u503c\u4f1a\u8986\u76d6\u4e4b\u524d\u7684\u503c\u3002\u4ec5\u5f53\u6307\u5b9a hash \u5206\u533a\u65f6\uff0cupdate outputMode \u53ef\u7528\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u82e5\u672a\u4f7f\u7528 hash \u5206\u533a\uff0c\u5219\u5141\u8bb8\u5b58\u5728\u91cd\u590d\u6570\u636e\u3002  "),(0,n.kt)("h2",{id:"4-update-lakesoultable"},"4. Update LakeSoulTable"),(0,n.kt)("p",null,"LakeSoul \u652f\u6301 update \u64cd\u4f5c\uff0c\u901a\u8fc7\u6307\u5b9a\u6761\u4ef6\u548c\u9700\u8981\u66f4\u65b0\u7684\u5b57\u6bb5 expression \u6765\u6267\u884c\u3002\u6709\u591a\u79cd\u65b9\u5f0f\u53ef\u4ee5\u6267\u884c update\uff0c\u8be6\u89c1 ",(0,n.kt)("inlineCode",{parentName:"p"},"LakeSoulTable")," \u6ce8\u91ca\u3002"),(0,n.kt)("h3",{id:"41-\u4ee3\u7801\u793a\u4f8b"},"4.1 \u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport org.apache.spark.sql._\nval spark = SparkSession.builder.master("local")\n  .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n  .getOrCreate()\n\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\nval lakeSoulTable = LakeSoulTable.forPath(tablePath)\nimport org.apache.spark.sql.functions._\n\n//update(condition, set)\nlakeSoulTable.update(col("date") > "2021-01-01", Map("data" -> lit("2021-01-02")))\n\n')),(0,n.kt)("h2",{id:"5-delete-data"},"5. Delete Data"),(0,n.kt)("p",null,"LakeSoul \u652f\u6301 delete \u64cd\u4f5c\u5220\u9664\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\uff0c\u6761\u4ef6\u53ef\u4ee5\u662f\u4efb\u610f\u5b57\u6bb5\uff0c\u82e5\u4e0d\u6307\u5b9a\u6761\u4ef6\uff0c\u5219\u4f1a\u5220\u9664\u5168\u8868\u6570\u636e\u3002"),(0,n.kt)("h3",{id:"51-\u4ee3\u7801\u793a\u4f8b"},"5.1 \u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport org.apache.spark.sql._\nval spark = SparkSession.builder.master("local")\n  .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n  .getOrCreate()\n\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\nval lakeSoulTable = LakeSoulTable.forPath(tablePath)\n\n//\u5220\u9664\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\nlakeSoulTable.delete("date=\'2021-01-01\'")\n//\u5220\u9664\u5168\u8868\u6570\u636e\nlakeSoulTable.delete()\n')),(0,n.kt)("h2",{id:"6-compaction"},"6. Compaction"),(0,n.kt)("p",null,"\u6267\u884c upsert \u4f1a\u751f\u6210 delta \u6587\u4ef6\uff0c\u5f53 delta \u6587\u4ef6\u8fc7\u591a\u65f6\uff0c\u4f1a\u5f71\u54cd\u8bfb\u53d6\u6548\u7387\uff0c\u6b64\u65f6\u53ef\u4ee5\u6267\u884c compaction \u5408\u5e76\u6587\u4ef6\u3002  "),(0,n.kt)("p",null,"\u5f53\u6267\u884c\u5168\u8868 compaction \u65f6\uff0c\u53ef\u4ee5\u7ed9 compaction \u8bbe\u7f6e\u6761\u4ef6\uff0c\u53ea\u6709\u7b26\u5408\u6761\u4ef6\u7684 range \u5206\u533a\u624d\u4f1a\u6267\u884c compaction \u64cd\u4f5c\u3002  "),(0,n.kt)("h3",{id:"61-\u4ee3\u7801\u793a\u4f8b"},"6.1 \u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport org.apache.spark.sql._\nval spark = SparkSession.builder.master("local")\n  .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n  .getOrCreate()\n\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\nval lakeSoulTable = LakeSoulTable.forPath(tablePath)\n\n//\u5bf9\u6307\u5b9a\u5206\u533a\u6267\u884c compaction \u64cd\u4f5c\nlakeSoulTable.compaction("date=\'2021-01-01\'")\n//\u5bf9\u5168\u8868\u6240\u6709\u5206\u533a\u6267\u884c compaction \u64cd\u4f5c\nlakeSoulTable.compaction()\n//\u5bf9\u5168\u8868\u6240\u6709\u5206\u533a\u6267\u884c compaction \u64cd\u4f5c\uff0c\u4f1a\u68c0\u6d4b\u662f\u5426\u7b26\u5408\u6267\u884c compaction \u7684\u6761\u4ef6\uff0c\u53ea\u6709\u7b26\u5408\u6761\u4ef6\u7684\u624d\u4f1a\u6267\u884c\nlakeSoulTable.compaction(false)\n')),(0,n.kt)("h3",{id:"62-compaction-\u540e\u6302\u8f7d\u5230-hive-meta"},"6.2 Compaction \u540e\u6302\u8f7d\u5230 Hive Meta"),(0,n.kt)("p",null,"\u81ea 2.0 \u7248\u672c\u8d77\uff0cLakeSoul \u652f\u6301\u5c06 Compaction \u540e\u7684\u76ee\u5f55\u8def\u5f84\uff0c\u6302\u8f7d\u5230\u6307\u5b9a\u7684 Hive \u8868\uff0c\u5e76\u4fdd\u6301\u6240\u6709 Range \u5206\u533a\u540d\u4e0d\u53d8\u548c\u81ea\u5b9a\u4e49\u5206\u533a\u540d\u529f\u80fd\u3002\u8be5\u529f\u80fd\u53ef\u4ee5\u65b9\u4fbf\u4e0b\u6e38\u4e00\u4e9b\u53ea\u80fd\u652f\u6301\u8bbf\u95ee Hive \u7684\u7cfb\u7edf\u8bfb\u53d6\u5230 LakeSoul \u7684\u6570\u636e\u3002\u66f4\u63a8\u8350\u7684\u65b9\u5f0f\u662f\u901a\u8fc7 Kyuubi \u6765\u652f\u6301 Hive JDBC\uff0c\u8fd9\u6837\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Hive JDBC \u8c03\u7528 Spark \u5f15\u64ce\u6765\u8bbf\u95ee LakeSoul \u8868\uff0c\u5305\u62ec Merge on Read \u8bfb\u53d6"),(0,n.kt)("p",null,"\u8981\u4f7f\u7528 LakeSoul \u5bfc\u51fa\u5206\u533a\u5230 Hive Meta \u7684\u529f\u80fd\uff0c\u4fdd\u6301 hive \u5206\u533a\u540d\u4e0d\u53d8\uff0c\u53ef\u4ee5\u6267\u884c\u5982\u4e0b Compaction \u8c03\u7528\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nval lakeSoulTable = LakeSoulTable.forName("lakesoul_test_table")\nlakeSoulTable.compaction("date=\'2021-01-01\'", "spark_catalog.default.hive_test_table")\n')),(0,n.kt)("p",null,"\u81ea\u5b9a\u4e49 hive \u5206\u533a\u540d\uff0c\u53ef\u4ee5\u6267\u884c\u5982\u4e0b Compaction \u8c03\u7528\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nval lakeSoulTable = LakeSoulTable.forName("lakesoul_test_table")\nlakeSoulTable.compaction("date=\'2021-01-02\'", "spark_catalog.default.hive_test_table", "date=\'20210102\'")\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \u5982\u679c\u5c06 LakeSoul Catalog \u8bbe\u7f6e\u4e3a\u4e86 Spark \u9ed8\u8ba4 Catalog\uff0c\u5219 Hive \u8868\u540d\u524d\u9762\u9700\u8981\u52a0\u4e0a ",(0,n.kt)("inlineCode",{parentName:"p"},"spark_catalog"),"\u3002"),(0,n.kt)("h2",{id:"7-\u4f7f\u7528-spark-sql-\u64cd\u4f5c-lakesoultable"},"7. \u4f7f\u7528 Spark SQL \u64cd\u4f5c LakeSoulTable"),(0,n.kt)("p",null,"LakeSoul \u652f\u6301 Spark SQL \u8bfb\u5199\u6570\u636e\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"spark.sql.catalog.lakesoul")," \u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog"),"\u3002\u540c\u65f6\u4e5f\u53ef\u4ee5\u5c06 LakeSoul \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4 Catalog\uff0c\u5373\u589e\u52a0 ",(0,n.kt)("inlineCode",{parentName:"p"},"spark.sql.defaultCatalog=lakesoul")," \u914d\u7f6e\u9879\u3002\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5bf9 hash \u5206\u533a\u7684\u8868\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"li"},"insert into")," \u529f\u80fd\uff0c\u8bf7\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"MERGE INTO")," SQL \u8bed\u6cd5\uff1b")),(0,n.kt)("h3",{id:"71-\u4ee3\u7801\u793a\u4f8b"},"7.1 \u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("h4",{id:"711-ddl-sql"},"7.1.1 DDL SQL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"# \u521b\u5efa\u4e3b\u952e\u8868\uff0c\u9700\u8981\u901a\u8fc7 TBLPROPERTIES \u8bbe\u7f6e\u4e3b\u952e\u540d\u548c\u54c8\u5e0c\u5206\u6876\u6570\uff0c\u6ca1\u6709\u8bbe\u7f6e\u5219\u4e3a\u975e\u4e3b\u952e\u8868\n# \u521b\u5efa\u4e3b\u952eCDC\u8868\uff0c\u9700\u8981\u589e\u52a0\u8868\u5c5e\u6027 `'lakesoul_cdc_change_column'='change_kind'`\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 [LakeSoul CDC \u8868](../03-Usage%20Docs/04-cdc-ingestion-table.mdx)\nCREATE TABLE default.table_name (id string, date string, data string) USING lakesoul\n    PARTITIONED BY (date)\n    LOCATION 's3://bucket/table_path'\n    TBLPROPERTIES(\n      'hashPartitions'='id',\n      'hashBucketNum'='2')\n")),(0,n.kt)("p",null,"\u540c\u65f6\u4e5f\u652f\u6301\u4f7f\u7528 ALTER TABLE \u589e\u52a0\u6216\u5220\u9664\u5217\uff0c\u8be5\u90e8\u5206\u4e0e Spark SQL \u8bed\u6cd5\u76f8\u540c\uff0c\u6682\u4e0d\u652f\u6301\u4fee\u6539\u5217\u7684\u7c7b\u578b\u3002"),(0,n.kt)("h4",{id:"712-dml-sql"},"7.1.2 DML SQL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"# INSERT INTO\ninsert overwrite/into table default.table_name partition (date='2021-01-01') select id from tmpView\n\n# MERGE INTO\n# \u5bf9\u4e3b\u952e\u8868\uff0c\u53ef\u4ee5\u901a\u8fc7 `Merge Into` \u8bed\u53e5\u6765\u5b9e\u73b0 Upsert\n# \u6682\u4e0d\u652f\u6301 Merge Into \u4e2d MATCHED/NOT MATCHED \u5e26\u6761\u4ef6\u7684\u8bed\u53e5\n# ON \u5b50\u53e5\u53ea\u80fd\u5305\u542b\u4e3b\u952e\u76f8\u7b49\u7684\u8868\u8fbe\u5f0f\uff0c\u4e0d\u652f\u6301\u975e\u4e3b\u952e\u5217\u8fde\u63a5\uff0c\u4e0d\u652f\u6301\u975e\u76f8\u7b49\u8868\u8fbe\u5f0f\nMERGE INTO default.`table_name` AS t USING source_table AS s\n    ON t.hash = s.hash\n    WHEN MATCHED THEN UPDATE SET *\n    WHEN NOT MATCHED THEN INSERT *\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8868\u540d\u524d\u53ef\u4ee5\u6dfb\u52a0 database(namespace) \u540d\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d ",(0,n.kt)("inlineCode",{parentName:"li"},"USE")," \u7684 database \u540d\uff0c\u6ca1\u6709\u6267\u884c\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"li"},"USE database")," \u5219\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"default")),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 LOCATION \u5b50\u53e5\u6216 ",(0,n.kt)("inlineCode",{parentName:"li"},"path")," \u8868\u5c5e\u6027\u6765\u8bbe\u7f6e\u8868\u8def\u5f84\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u8def\u5f84\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"spark.sql.warehouse.dir"),"/database_name/table_name"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u8868\u8def\u5f84\u6765\u8bfb\u5199\u4e00\u4e2a LakeSoul \u8868\uff0c\u5728 SQL \u4e2d\u8868\u540d\u90e8\u5206\u9700\u8981\u5199\u6210 lakesoul.default.",(0,n.kt)("inlineCode",{parentName:"li"},"table_path"))),(0,n.kt)("h2",{id:"8-operator-on-hash-primary-keys"},"8. Operator on Hash Primary Keys"),(0,n.kt)("p",null,"\u6307\u5b9a hash \u5206\u533a\u540e\uff0cLakeSoul \u5404 range \u5206\u533a\u5185\u7684\u6570\u636e\u6839\u636e hash \u4e3b\u952e\u5b57\u6bb5\u5206\u7247\u4e14\u5206\u7247\u6570\u636e\u6709\u5e8f\uff0c\u56e0\u6b64\u90e8\u5206\u7b97\u5b50\u4f5c\u7528\u4e8e hash \u4e3b\u952e\u5b57\u6bb5\u65f6\uff0c\u65e0\u9700 shuffle \u548c sort\u3002  "),(0,n.kt)("p",null,"LakeSoul \u76ee\u524d\u652f\u6301 join\u3001intersect \u548c except \u7b97\u5b50\u7684\u4f18\u5316\uff0c\u540e\u7eed\u5c06\u652f\u6301\u66f4\u591a\u7b97\u5b50\u3002"),(0,n.kt)("h3",{id:"81-join-on-hash-keys"},"8.1 Join on Hash Keys"),(0,n.kt)("p",null,"\u652f\u6301\u7684\u573a\u666f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u540c\u4e00\u5f20\u8868\uff0c\u4e0d\u540c\u5206\u533a\u7684\u6570\u636e\u6839\u636e hash \u5b57\u6bb5\u8fdb\u884c join \u65f6\uff0c\u65e0\u9700 shuffle \u548c sort"),(0,n.kt)("li",{parentName:"ul"},"\u82e5\u4e24\u5f20\u4e0d\u540c\u8868\u7684 hash \u5b57\u6bb5\u7c7b\u578b\u548c\u5b57\u6bb5\u6570\u91cf\u76f8\u540c\uff0c\u4e14 hash bucket \u6570\u91cf\u76f8\u540c\uff0c\u5b83\u4eec\u4e4b\u95f4\u6839\u636e hash \u5b57\u6bb5\u8fdb\u884c join \u65f6\uff0c\u4e5f\u65e0\u9700 shuffle \u548c sort")),(0,n.kt)("h3",{id:"82-intersectexcept-on-hash-keys"},"8.2 Intersect/Except on Hash Keys"),(0,n.kt)("p",null,"\u652f\u6301\u7684\u573a\u666f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u540c\u4e00\u5f20\u8868\u4e0d\u540c\u5206\u533a\u7684 hash \u5b57\u6bb5\u6267\u884c intersect/except \u65f6\uff0c\u65e0\u9700 shuffle\u3001sort \u548c distinct"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e24\u5f20\u4e0d\u540c\u7684\u8868\uff0c\u82e5\u5b83\u4eec\u62e5\u6709\u76f8\u540c\u7684 hash \u5b57\u6bb5\u7c7b\u578b\u548c\u5b57\u6bb5\u6570\u91cf\u4e14 hash bucket \u6570\u91cf\u76f8\u540c\uff0c\u5bf9 hash \u5b57\u6bb5\u6267\u884c intersect/except \u65f6\uff0c\u65e0\u9700 shuffle\u3001sort \u548c distinct")),(0,n.kt)("p",null,"range \u5206\u533a\u5185\uff0chash \u4e3b\u952e\u5b57\u6bb5\u503c\u662f\u552f\u4e00\u7684\uff0c\u56e0\u6b64 intersect \u6216 except \u7684\u7ed3\u679c\u662f\u4e0d\u91cd\u590d\u7684\uff0c\u540e\u7eed\u64cd\u4f5c\u4e0d\u9700\u8981\u518d\u6b21\u53bb\u91cd\uff0c\u4f8b\u5982\u53ef\u4ee5\u76f4\u63a5 ",(0,n.kt)("inlineCode",{parentName:"p"},"count")," \u83b7\u53d6\u4e0d\u91cd\u590d\u6570\u636e\u7684\u6570\u91cf\uff0c\u65e0\u9700 ",(0,n.kt)("inlineCode",{parentName:"p"},"count distinct"),"\u3002"),(0,n.kt)("h3",{id:"83-\u4ee3\u7801\u793a\u4f8b"},"8.3 \u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.spark.sql._\nval spark = SparkSession.builder.master("local")\n  .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n  .config("spark.sql.catalog.lakesoul", "org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog")\n  .config("spark.sql.defaultCatalog", "lakesoul")\n  .getOrCreate()\nimport spark.implicits._\n\n\nval df1 = Seq(("2021-01-01",1,1,"rice"),("2021-01-02",2,2,"bread")).toDF("date","id1","id2","name")\nval df2 = Seq(("2021-01-01",1,1,2.7),("2021-01-02",2,2,1.3)).toDF("date","id3","id4","price")\n\nval tablePath1 = "s3a://bucket-name/table/path/is/also/table/name/1"\nval tablePath2 = "s3a://bucket-name/table/path/is/also/table/name/2"\n\ndf1.write\n  .mode("append")\n  .format("lakesoul")\n  .option("rangePartitions","date")\n  .option("hashPartitions","id1,id2")\n  .option("hashBucketNum","2")\n  .save(tablePath1)\ndf2.write\n  .mode("append")\n  .format("lakesoul")\n  .option("rangePartitions","date")\n  .option("hashPartitions","id3,id4")\n  .option("hashBucketNum","2")\n  .save(tablePath2)\n\n\n//join on hash keys without shuffle and sort\n//\u76f8\u540c\u8868\u7684\u4e0d\u540c range \u5206\u533a\nspark.sql(\n  s"""\n    |select t1.*,t2.* from\n    | (select * from lakesoul.`$tablePath1` where date=\'2021-01-01\') t1\n    | join \n    | (select * from lakesoul.`$tablePath1` where date=\'2021-01-02\') t2\n    | on t1.id1=t2.id1 and t1.id2=t2.id2\n  """.stripMargin)\n    .show()\n//\u76f8\u540c hash \u8bbe\u7f6e\u7684\u4e0d\u540c\u8868\nspark.sql(\n  s"""\n    |select t1.*,t2.* from\n    | (select * from lakesoul.`$tablePath1` where date=\'2021-01-01\') t1\n    | join \n    | (select * from lakesoul.`$tablePath2` where date=\'2021-01-01\') t2\n    | on t1.id1=t2.id3 and t1.id2=t2.id4\n  """.stripMargin)\n  .show()\n\n//intersect/except on hash keys without shuffle,sort and distinct\n//\u76f8\u540c\u8868\u7684\u4e0d\u540c range \u5206\u533a\nspark.sql(\n  s"""\n    |select count(1) from \n    | (select id1,id2 from lakesoul.`$tablePath1` where date=\'2021-01-01\'\n    |  intersect\n    | select id1,id2 from lakesoul.`$tablePath1` where date=\'2021-01-02\') t\n  """.stripMargin)\n  .show()\n//\u76f8\u540c hash \u8bbe\u7f6e\u7684\u4e0d\u540c\u8868\nspark.sql(\n  s"""\n    |select count(1) from \n    | (select id1,id2 from lakesoul.`$tablePath1` where date=\'2021-01-01\'\n    |  intersect\n    | select id3,id4 from lakesoul.`$tablePath2` where date=\'2021-01-01\') t\n  """.stripMargin)\n  .show()\n\n')),(0,n.kt)("h2",{id:"9-schema-\u6f14\u8fdb"},"9. Schema \u6f14\u8fdb"),(0,n.kt)("p",null,"LakeSoul \u652f\u6301 schema \u6f14\u8fdb\u529f\u80fd\uff0c\u53ef\u4ee5\u65b0\u589e\u5217 (\u5206\u533a\u5b57\u6bb5\u65e0\u6cd5\u4fee\u6539)\u3002\u65b0\u589e\u5217\u540e\uff0c\u8bfb\u53d6\u73b0\u6709\u6570\u636e\uff0c\u8be5\u65b0\u589e\u5217\u4f1a\u662f NULL\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 upsert \u529f\u80fd\uff0c\u4e3a\u73b0\u6709\u6570\u636e\u8ffd\u52a0\u8be5\u65b0\u5217\u3002"),(0,n.kt)("h3",{id:"91-merge-schema"},"9.1 Merge Schema"),(0,n.kt)("p",null,"\u5728\u5199\u6570\u636e\u65f6\u6307\u5b9a ",(0,n.kt)("inlineCode",{parentName:"p"},"mergeSchema")," \u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u6216\u8005\u542f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"autoMerge")," \u6765 merge schema\uff0c\u65b0\u7684 schema \u4e3a\u8868\u539f\u672c schema \u548c\u5f53\u524d\u5199\u5165\u6570\u636e schema \u7684\u5e76\u96c6\u3002  "),(0,n.kt)("h3",{id:"92-\u4ee3\u7801\u793a\u4f8b"},"9.2 \u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'df.write\n  .mode("append")\n  .format("lakesoul")\n  .option("rangePartitions","date")\n  .option("hashPartitions","id")\n  .option("hashBucketNum","2")\n  //\u65b9\u5f0f\u4e00\n  .option("mergeSchema","true")\n  .save(tablePath)\n  \nval spark = SparkSession.builder.master("local")\n  .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n  //\u65b9\u5f0f\u4e8c\n  .config("spark.dmetasoul.lakesoul.schema.autoMerge.enabled", "true")\n  .getOrCreate()\n')),(0,n.kt)("h2",{id:"10-drop-partition"},"10. Drop Partition"),(0,n.kt)("p",null,"\u5220\u9664\u5206\u533a\uff0c\u4e5f\u5c31\u662f\u5220\u9664 range \u5206\u533a\uff0c\u5b9e\u9645\u4e0a\u5e76\u4e0d\u4f1a\u771f\u6b63\u5220\u6389\u6570\u636e\u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 cleanup \u529f\u80fd\u6e05\u7406\u5931\u6548\u6570\u636e"),(0,n.kt)("h3",{id:"101-\u4ee3\u7801\u793a\u4f8b"},"10.1 \u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport org.apache.spark.sql._\nval spark = SparkSession.builder.master("local")\n  .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n  .getOrCreate()\n\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\nval lakeSoulTable = LakeSoulTable.forPath(tablePath)\n\n//\u5220\u9664\u6307\u5b9a range \u5206\u533a\nlakeSoulTable.dropPartition("date=\'2021-01-01\'")\n\n')),(0,n.kt)("h2",{id:"11-drop-table"},"11. Drop Table"),(0,n.kt)("p",null,"\u5220\u9664\u8868\u4f1a\u76f4\u63a5\u5220\u9664\u8868\u7684\u6240\u6709 meta \u6570\u636e\u548c\u6587\u4ef6\u6570\u636e"),(0,n.kt)("h3",{id:"111-\u4ee3\u7801\u793a\u4f8b"},"11.1 \u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport org.apache.spark.sql._\nval spark = SparkSession.builder.master("local")\n  .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n  .getOrCreate()\n\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\nval lakeSoulTable = LakeSoulTable.forPath(tablePath)\n\n//\u5220\u9664\u8868\nlakeSoulTable.dropTable()\n\n')))}c.isMDXComponent=!0}}]);