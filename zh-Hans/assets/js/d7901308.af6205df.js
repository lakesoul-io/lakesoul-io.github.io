"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[691],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},s=Object.keys(e);for(l=0;l<s.length;l++)a=s[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)a=s[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),c=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=c(a),d=n,m=k["".concat(o,".").concat(d)]||k[d]||u[d]||s;return a?l.createElement(m,r(r({ref:t},p),{},{components:a})):l.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[k]="string"==typeof e?e:n,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5907:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var l=a(7462),n=(a(7294),a(3905));const s={},r="LakeSoul Flink CDC \u6574\u5e93\u540c\u6b65\u4f7f\u7528\u6559\u7a0b",i={unversionedId:"Tutorials/flink-cdc-sink/index",id:"Tutorials/flink-cdc-sink/index",title:"LakeSoul Flink CDC \u6574\u5e93\u540c\u6b65\u4f7f\u7528\u6559\u7a0b",description:"\x3c!--",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/02-Tutorials/02-flink-cdc-sink/index.md",sourceDirName:"02-Tutorials/02-flink-cdc-sink",slug:"/Tutorials/flink-cdc-sink/",permalink:"/zh-Hans/docs/Tutorials/flink-cdc-sink/",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/02-Tutorials/02-flink-cdc-sink/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u901a\u8fc7 Spark Streaming \u5bfc\u5165 LakeSoul CDC \u8868",permalink:"/zh-Hans/docs/Tutorials/consume-cdc-via-spark-streaming"},next:{title:"\u5feb\u7167\u76f8\u5173\u529f\u80fd\u7528\u6cd5\u6559\u7a0b",permalink:"/zh-Hans/docs/Tutorials/snapshot-manage"}},o={},c=[{value:"1. \u51c6\u5907\u73af\u5883",id:"1-\u51c6\u5907\u73af\u5883",level:2},{value:"1.1 \u542f\u52a8\u4e00\u4e2a\u672c\u5730 MySQL \u6570\u636e\u5e93",id:"11-\u542f\u52a8\u4e00\u4e2a\u672c\u5730-mysql-\u6570\u636e\u5e93",level:3},{value:"1.2 \u914d\u7f6e LakeSoul \u5143\u6570\u636e\u5e93\u4ee5\u53ca Spark \u73af\u5883",id:"12-\u914d\u7f6e-lakesoul-\u5143\u6570\u636e\u5e93\u4ee5\u53ca-spark-\u73af\u5883",level:3},{value:"1.3 \u9884\u5148\u5728 MySQL \u4e2d\u521b\u5efa\u4e00\u5f20\u8868\u5e76\u5199\u5165\u6570\u636e",id:"13-\u9884\u5148\u5728-mysql-\u4e2d\u521b\u5efa\u4e00\u5f20\u8868\u5e76\u5199\u5165\u6570\u636e",level:3},{value:"2. \u542f\u52a8\u540c\u6b65\u4f5c\u4e1a",id:"2-\u542f\u52a8\u540c\u6b65\u4f5c\u4e1a",level:2},{value:"2.1 \u542f\u52a8\u4e00\u4e2a\u672c\u5730\u7684 Flink Cluster",id:"21-\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u7684-flink-cluster",level:3},{value:"2.2 \u63d0\u4ea4 LakeSoul Flink CDC Sink \u4f5c\u4e1a",id:"22-\u63d0\u4ea4-lakesoul-flink-cdc-sink-\u4f5c\u4e1a",level:3},{value:"2.3 \u4f7f\u7528 Spark SQL \u8bfb\u53d6 LakeSoul \u8868\u4e2d\u5df2\u7ecf\u540c\u6b65\u7684\u6570\u636e",id:"23-\u4f7f\u7528-spark-sql-\u8bfb\u53d6-lakesoul-\u8868\u4e2d\u5df2\u7ecf\u540c\u6b65\u7684\u6570\u636e",level:3},{value:"2.4 MySQL \u4e2d\u6267\u884c Update \u540e\u89c2\u5bdf\u540c\u6b65\u60c5\u51b5",id:"24-mysql-\u4e2d\u6267\u884c-update-\u540e\u89c2\u5bdf\u540c\u6b65\u60c5\u51b5",level:3},{value:"2.5 MySQL \u4e2d\u6267\u884c DDL \u540e\u89c2\u5bdf\u540c\u6b65\u60c5\u51b5\uff0c\u5e76\u8bfb\u53d6\u65b0\u3001\u65e7\u6570\u636e",id:"25-mysql-\u4e2d\u6267\u884c-ddl-\u540e\u89c2\u5bdf\u540c\u6b65\u60c5\u51b5\u5e76\u8bfb\u53d6\u65b0\u65e7\u6570\u636e",level:3},{value:"2.6 MySQL \u4e2d\u65b0\u5efa\u8868\u540e\u89c2\u5bdf\u540c\u6b65\u60c5\u51b5",id:"26-mysql-\u4e2d\u65b0\u5efa\u8868\u540e\u89c2\u5bdf\u540c\u6b65\u60c5\u51b5",level:3}],p={toc:c},k="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(k,(0,l.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lakesoul-flink-cdc-\u6574\u5e93\u540c\u6b65\u4f7f\u7528\u6559\u7a0b"},"LakeSoul Flink CDC \u6574\u5e93\u540c\u6b65\u4f7f\u7528\u6559\u7a0b"),(0,n.kt)("p",null,"LakeSoul Flink CDC Sink \u652f\u6301\u4ece MySQL \u6570\u636e\u6e90\u6574\u5e93\u540c\u6b65\u5230 LakeSoul\uff0c\u80fd\u591f\u652f\u6301\u81ea\u52a8\u5efa\u8868\u3001\u81ea\u52a8 Schema \u53d8\u66f4\u3001Exactly Once \u8bed\u4e49\u7b49\u3002"),(0,n.kt)("p",null,"\u8be6\u7ec6\u4f7f\u7528\u6587\u6863\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/docs/Usage%20Docs/flink-cdc-sync"},"LakeSoul Flink CDC \u6574\u5e93\u5343\u8868\u540c\u6b65")),(0,n.kt)("p",null,"\u8fd9\u4e2a\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5b8c\u6574\u5730\u6f14\u793a\u4ece\u5c06\u4e00\u4e2a MySQL \u5e93\u6574\u5e93\u540c\u6b65\u5230 LakeSoul \u4e2d\uff0c\u6db5\u76d6\u81ea\u52a8\u5efa\u8868\u3001DDL \u53d8\u66f4\u7b49\u64cd\u4f5c\u3002"),(0,n.kt)("h2",{id:"1-\u51c6\u5907\u73af\u5883"},"1. \u51c6\u5907\u73af\u5883"),(0,n.kt)("h3",{id:"11-\u542f\u52a8\u4e00\u4e2a\u672c\u5730-mysql-\u6570\u636e\u5e93"},"1.1 \u542f\u52a8\u4e00\u4e2a\u672c\u5730 MySQL \u6570\u636e\u5e93"),(0,n.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 MySQL Docker \u955c\u50cf\u6765\u5feb\u901f\u542f\u52a8\u4e00\u4e2a MySQL \u6570\u636e\u5e93\u5b9e\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name lakesoul-test-mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=test_cdc -p 3306:3306 -d mysql:8\n")),(0,n.kt)("h3",{id:"12-\u914d\u7f6e-lakesoul-\u5143\u6570\u636e\u5e93\u4ee5\u53ca-spark-\u73af\u5883"},"1.2 \u914d\u7f6e LakeSoul \u5143\u6570\u636e\u5e93\u4ee5\u53ca Spark \u73af\u5883"),(0,n.kt)("p",null,"\u8fd9\u90e8\u5206\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/docs/Getting%20Started/setup-local-env"},"\u642d\u5efa\u672c\u5730\u6d4b\u8bd5\u73af\u5883")),(0,n.kt)("p",null,"\u7136\u540e\u542f\u52a8\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"spark-sql")," SQL \u4ea4\u4e92\u5f0f\u67e5\u8be2\u547d\u4ee4\u884c\u73af\u5883\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$SPARK_HOME/bin/spark-sql --conf spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension --conf spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog --conf spark.sql.defaultCatalog=lakesoul --conf spark.sql.warehouse.dir=/tmp/lakesoul --conf spark.dmetasoul.lakesoul.snapshot.cache.expire.seconds=10\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u542f\u52a8 Spark \u672c\u5730\u4efb\u52a1\uff0c\u589e\u52a0\u4e86\u4e24\u4e2a\u9009\u9879\uff1a"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"spark.sql.warehouse.dir=/tmp/lakesoul\n\u8bbe\u7f6e\u8fd9\u4e2a\u53c2\u6570\u662f\u56e0\u4e3a Spark SQL \u4e2d\u9ed8\u8ba4\u8868\u4fdd\u5b58\u4f4d\u7f6e\uff0c\u9700\u8981\u548c Flink \u4f5c\u4e1a\u4ea7\u51fa\u76ee\u5f55\u8bbe\u7f6e\u4e3a\u540c\u4e00\u4e2a\u76ee\u5f55\u3002"),(0,n.kt)("li",{parentName:"ol"},"spark.dmetasoul.lakesoul.snapshot.cache.expire.seconds=10\n\u8bbe\u7f6e\u8fd9\u4e2a\u53c2\u6570\u662f\u56e0\u4e3a LakeSoul \u5728 Spark \u4e2d\u7f13\u5b58\u4e86\u5143\u6570\u636e\u4fe1\u606f\uff0c\u8bbe\u7f6e\u4e00\u4e2a\u8f83\u5c0f\u7684\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\u65b9\u4fbf\u67e5\u8be2\u5230\u6700\u65b0\u7684\u6570\u636e\u3002"))),(0,n.kt)("p",null,"\u542f\u52a8 Spark SQL \u547d\u4ee4\u884c\u540e\uff0c\u53ef\u4ee5\u6267\u884c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES;\nSHOW TABLES IN default;\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6847).Z,width:"1052",height:"274"})," "),(0,n.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 LakeSoul \u4e2d\u76ee\u524d\u53ea\u6709\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," database\uff0c\u5176\u4e2d\u4e5f\u6ca1\u6709\u8868\u3002"),(0,n.kt)("h3",{id:"13-\u9884\u5148\u5728-mysql-\u4e2d\u521b\u5efa\u4e00\u5f20\u8868\u5e76\u5199\u5165\u6570\u636e"},"1.3 \u9884\u5148\u5728 MySQL \u4e2d\u521b\u5efa\u4e00\u5f20\u8868\u5e76\u5199\u5165\u6570\u636e"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5b89\u88c5 mycli",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip install mycli\n"))),(0,n.kt)("li",{parentName:"ol"},"\u542f\u52a8 mycli \u5e76\u8fde\u63a5 MySQL \u6570\u636e\u5e93",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mycli mysql://root@localhost:3306/test_cdc -p root\n"))),(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8868\u5e76\u5199\u5165\u6570\u636e",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mysql_test_1 (id INT PRIMARY KEY, name VARCHAR(255), type SMALLINT);\nINSERT INTO mysql_test_1 VALUES (1, 'Bob', 10);\nSELECT * FROM mysql_test_1;\n")))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4165).Z,width:"2034",height:"574"}),"  "),(0,n.kt)("h2",{id:"2-\u542f\u52a8\u540c\u6b65\u4f5c\u4e1a"},"2. \u542f\u52a8\u540c\u6b65\u4f5c\u4e1a"),(0,n.kt)("h3",{id:"21-\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u7684-flink-cluster"},"2.1 \u542f\u52a8\u4e00\u4e2a\u672c\u5730\u7684 Flink Cluster"),(0,n.kt)("p",null,"\u53ef\u4ee5\u4ece Flink \u4e0b\u8f7d\u9875\u9762\u4e0b\u8f7d ",(0,n.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/flink/flink-1.14.5/flink-1.14.5-bin-scala_2.12.tgz"},"Flink 1.14.5"),"\uff0c\u4e5f\u53ef\u4ee5\u4ece\u6211\u4eec\u7684",(0,n.kt)("a",{parentName:"p",href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/flink-1.14.5-bin-scala_2.12.tgz"},"\u56fd\u5185\u955c\u50cf\u5730\u5740\u4e0b\u8f7d"),"\uff08\u4e0eApache\u5b98\u7f51\u5b8c\u5168\u76f8\u540c\uff09\u3002"),(0,n.kt)("p",null,"\u89e3\u538b\u4e0b\u8f7d\u7684 Flink \u5b89\u88c5\u5305\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"tar xf flink-1.14.5-bin-scala_2.12.tgz\nexport FLINK_HOME=${PWD}/flink-1.14.5\n")),(0,n.kt)("p",null,"\u7136\u540e\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u7684 Flink Cluster\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$FLINK_HOME/bin/start-cluster.sh\n")),(0,n.kt)("p",null,"\u53ef\u4ee5\u6253\u5f00 http://localhost:8081 \u67e5\u770b Flink \u672c\u5730 cluster \u662f\u5426\u5df2\u7ecf\u6b63\u5e38\u542f\u52a8\uff1a\n",(0,n.kt)("img",{src:a(5033).Z,width:"3116",height:"934"}),"  "),(0,n.kt)("h3",{id:"22-\u63d0\u4ea4-lakesoul-flink-cdc-sink-\u4f5c\u4e1a"},"2.2 \u63d0\u4ea4 LakeSoul Flink CDC Sink \u4f5c\u4e1a"),(0,n.kt)("p",null,"\u5411\u4e0a\u9762\u542f\u52a8\u7684 Flink cluster \u63d0\u4ea4\u4e00\u4e2a LakeSoul Flink CDC Sink \u4f5c\u4e1a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/flink run -ys 1 -yjm 1G -ytm 2G \\\n   -c org.apache.flink.lakesoul.entry.MysqlCdc \\\n   lakesoul-flink-2.3.0-flink-1.14.jar \\\n   --source_db.host localhost \\\n   --source_db.port 3306 \\\n   --source_db.db_name test_cdc \\\n   --source_db.user root \\\n   --source_db.password root \\\n   --source.parallelism 1 \\\n   --sink.parallelism 1 \\\n   --warehouse_path file:/tmp/lakesoul \\\n   --flink.checkpoint file:/tmp/flink/chk \\\n   --flink.savepoint file:/tmp/flink/svp \\\n   --job.checkpoint_interval 10000 \\\n   --server_time_zone UTC\n")),(0,n.kt)("p",null,"\u5176\u4e2d lakesoul-flink \u7684 jar \u5305\u53ef\u4ee5\u4ece ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/releases/"},"Github Release")," \u9875\u9762\u4e0b\u8f7d\u3002\u5982\u679c\u8bbf\u95ee Github \u6709\u95ee\u9898\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u94fe\u63a5\u4e0b\u8f7d\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/lakesoul-flink-2.3.0-flink-1.14.jar"},"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/lakesoul-flink-2.3.0-flink-1.14.jar")),(0,n.kt)("p",null,"\u5728 http://localhost:8081 Flink \u4f5c\u4e1a\u9875\u9762\u4e2d\uff0c\u70b9\u51fb Running Job\uff0c\u8fdb\u5165\u67e5\u770b LakeSoul \u4f5c\u4e1a\u662f\u5426\u5df2\u7ecf\u5904\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"Running")," \u72b6\u6001\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9509).Z,width:"3738",height:"828"}),"  "),(0,n.kt)("p",null,"\u53ef\u4ee5\u70b9\u51fb\u8fdb\u5165\u4f5c\u4e1a\u9875\u9762\uff0c\u6b64\u65f6\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u540c\u6b65\u4e86\u4e00\u6761\u6570\u636e\uff1a\n",(0,n.kt)("img",{src:a(8387).Z,width:"3666",height:"1648"}),"  "),(0,n.kt)("h3",{id:"23-\u4f7f\u7528-spark-sql-\u8bfb\u53d6-lakesoul-\u8868\u4e2d\u5df2\u7ecf\u540c\u6b65\u7684\u6570\u636e"},"2.3 \u4f7f\u7528 Spark SQL \u8bfb\u53d6 LakeSoul \u8868\u4e2d\u5df2\u7ecf\u540c\u6b65\u7684\u6570\u636e"),(0,n.kt)("p",null,"\u5728 Spark SQL Shell \u4e2d\u6267\u884c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES;\nSHOW TABLES IN test_cdc;\nDESC test_cdc.mysql_test_1;\nSELECT * FROM test_cdc.mysql_test_1;\n")),(0,n.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6bcf\u6761\u8bed\u53e5\u7684\u8fd0\u884c\u7ed3\u679c\uff0c\u5373 ",(0,n.kt)("strong",{parentName:"p"},"LakeSoul \u4e2d\u81ea\u52a8\u65b0\u5efa\u4e86\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"strong"},"test_cdc")," database\uff0c\u5176\u4e2d\u81ea\u52a8\u65b0\u5efa\u4e86\u4e00\u5f20 ",(0,n.kt)("inlineCode",{parentName:"strong"},"mysql_test_1")," \u8868\uff0c\u8868\u7684\u5b57\u6bb5\u3001\u4e3b\u952e\u4e0e MySQL \u76f8\u540c"),"\uff08\u591a\u4e86\u4e00\u4e2a rowKinds \u5217\uff0c\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/docs/Usage%20Docs/cdc-ingestion-table"},"LakeSoul CDC \u8868"),"\u4e2d\u7684\u8bf4\u660e\uff09\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9625).Z,width:"1038",height:"838"}),"  "),(0,n.kt)("h3",{id:"24-mysql-\u4e2d\u6267\u884c-update-\u540e\u89c2\u5bdf\u540c\u6b65\u60c5\u51b5"},"2.4 MySQL \u4e2d\u6267\u884c Update \u540e\u89c2\u5bdf\u540c\u6b65\u60c5\u51b5"),(0,n.kt)("p",null,"\u5728 mycli \u4e2d\u6267\u884c\u66f4\u65b0\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE mysql_test_1 SET name='Peter' WHERE id=1;\n")),(0,n.kt)("p",null,"\u7136\u540e\u5728 LakeSoul \u4e2d\u518d\u6b21\u8bfb\u53d6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test_cdc.mysql_test_1;\n")),(0,n.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u8bfb\u5230\u4e86\u6700\u65b0\u7684\u6570\u636e\uff1a\n",(0,n.kt)("img",{src:a(8333).Z,width:"876",height:"148"}),"  "),(0,n.kt)("h3",{id:"25-mysql-\u4e2d\u6267\u884c-ddl-\u540e\u89c2\u5bdf\u540c\u6b65\u60c5\u51b5\u5e76\u8bfb\u53d6\u65b0\u65e7\u6570\u636e"},"2.5 MySQL \u4e2d\u6267\u884c DDL \u540e\u89c2\u5bdf\u540c\u6b65\u60c5\u51b5\uff0c\u5e76\u8bfb\u53d6\u65b0\u3001\u65e7\u6570\u636e"),(0,n.kt)("p",null,"\u5728 mycli \u4e2d\u4fee\u6539\u8868\u7684\u7ed3\u6784\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE mysql_test_1 ADD COLUMN new_col FLOAT;\n")),(0,n.kt)("p",null,"\u5373\u5728\u6700\u540e\u65b0\u589e\u4e00\u5217\uff0c\u9ed8\u8ba4\u4e3a null\u3002\u5728 mycli \u4e2d\u9a8c\u8bc1\u6267\u884c\u7ed3\u679c\uff1a\n",(0,n.kt)("img",{src:a(9862).Z,width:"1486",height:"992"}),"  "),(0,n.kt)("p",null,"\u6b64\u65f6\uff0cLakeSoul \u4e2d\u5df2\u7ecf\u540c\u6b65\u4e86\u8868\u7ed3\u6784\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 spark-sql \u4e2d\u67e5\u770b\u8868\u7ed3\u6784\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"DESC test_cdc.mysql_test_1;\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8395).Z,width:"808",height:"418"}),"  "),(0,n.kt)("p",null,"\u8fd9\u65f6\uff0c\u4ece LakeSoul \u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u65b0\u589e\u5217\u540c\u6837\u4e3a null\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test_cdc.mysql_test_1;\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8367).Z,width:"922",height:"150"}),"  "),(0,n.kt)("p",null,"\u5411 MySQL \u4e2d\u65b0\u63d2\u5165\u4e00\u6761\u6570\u636e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO mysql_test_1 VALUES (2, 'Alice', 20, 9.9);\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9543).Z,width:"1584",height:"508"}),"  "),(0,n.kt)("p",null,"\u4ece LakeSoul \u4e2d\u518d\u6b21\u8bfb\u53d6\uff1a\n",(0,n.kt)("img",{src:a(7864).Z,width:"1036",height:"188"}),"  "),(0,n.kt)("p",null,"\u4ece MySQL \u4e2d\u5220\u9664\u4e00\u6761\u6570\u636e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"delete from mysql_test_1 where id=1;\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8305).Z,width:"1228",height:"582"}),"  "),(0,n.kt)("p",null,"\u4ece LakeSoul \u4e2d\u8bfb\u53d6\uff1a\n",(0,n.kt)("img",{src:a(3737).Z,width:"998",height:"152"}),"  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u770b\u5230 LakeSoul \u6bcf\u6b21\u90fd\u8bfb\u53d6\u5230\u4e86\u540c\u6b65\u540e\u7684\u7ed3\u679c\uff0c\u4e0e MySQL \u4e2d\u5b8c\u5168\u4e00\u81f4\u3002")),(0,n.kt)("h3",{id:"26-mysql-\u4e2d\u65b0\u5efa\u8868\u540e\u89c2\u5bdf\u540c\u6b65\u60c5\u51b5"},"2.6 MySQL \u4e2d\u65b0\u5efa\u8868\u540e\u89c2\u5bdf\u540c\u6b65\u60c5\u51b5"),(0,n.kt)("p",null,"\u5728 MySQL \u4e2d\u65b0\u5efa\u4e00\u5f20\u8868\uff0cschema \u4e0e\u4e4b\u524d\u8868\u4e0d\u540c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mysql_test_2 (name VARCHAR(100) PRIMARY KEY, phone_no VARCHAR(20));\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(3973).Z,width:"2026",height:"510"}),"  "),(0,n.kt)("p",null,"\u5728 LakeSoul \u53ef\u4ee5\u770b\u5230\u65b0\u8868\u5df2\u7ecf\u81ea\u52a8\u521b\u5efa\uff0c\u53ef\u4ee5\u67e5\u770b\u8868\u7ed3\u6784\uff1a\n",(0,n.kt)("img",{src:a(1785).Z,width:"902",height:"490"}),"  "),(0,n.kt)("p",null,"\u5f80 MySQL \u65b0\u8868\u4e2d\u63d2\u5165\u4e00\u6761\u6570\u636e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO mysql_test_2 VALUES ('Bob', '10010');\n")),(0,n.kt)("p",null,"LakeSoul \u4e2d\u4e5f\u6210\u529f\u540c\u6b65\u5e76\u8bfb\u53d6\u5230\u65b0\u8868\u7684\u6570\u636e\uff1a\n",(0,n.kt)("img",{src:a(9768).Z,width:"910",height:"114"})))}u.isMDXComponent=!0},9509:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/flink-cdc-job-submitted-5afb5e18b04cf3cf79eeb7a0e4aad05b.png"},8387:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/flink-cdc-sync-1-c6a93513ff48347fa8297cfda14f6402.png"},5033:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/flnk-cluster-empty-9dccdcd8ed47252d8d52395ec04aa607.png"},3973:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/mysql-create-table-2-f09877f7865f317881d56e09f70633e6.png"},4165:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/mysql-init-insert-1-2765502bf425a2d1dabb028ea15155ea.png"},9543:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/mysql-insert-new-1-4956bac0d7d6709e1852ffecfae7c509.png"},8305:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/mysql-read-after-delete-30495413d60d01dcbda0f1afda920f5e.png"},9862:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/mysql-update-1-707701b0ae38f5a014cff7935d9d0885.png"},9625:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/spark-read-1-6b5e746a1d6ae5527554c1b0d128883b.png"},8333:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/spark-read-2-86637e8e5623e101c469232eef438c37.png"},8395:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/spark-read-after-add-col-1-e59d8aeada4ad213e81b8c9fe6b28005.png"},8367:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/spark-read-after-add-col-2-5258ab0f98aa664ebcb83ce29f91dd8e.png"},7864:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/spark-read-after-add-col-3-120181b9bbd4280b132fc8c825eb07c6.png"},3737:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/spark-read-after-delete-0ce048ee0d34f1af6f45562c0045e08f.png"},9768:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/spark-read-after-new-table-b6a5db4dabdd816c0f88007ba5d589a8.png"},1785:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/spark-show-after-new-table-13d0f25f28dca4e42dfc6e395aaf8a2d.png"},6847:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/spark-sql-show-db-empty-440f1c01b78ce74f800bc740ece60c92.png"}}]);