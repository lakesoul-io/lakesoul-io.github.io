"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[836],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>m});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},k=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,k=n(e,["components","mdxType","originalType","parentName"]),i=u(a),d=r,m=i["".concat(p,".").concat(d)]||i[d]||c[d]||o;return a?l.createElement(m,s(s({ref:t},k),{},{components:a})):l.createElement(m,s({ref:t},k))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var n={};for(var p in t)hasOwnProperty.call(t,p)&&(n[p]=t[p]);n.originalType=e,n[i]="string"==typeof e?e:r,s[1]=n;for(var u=2;u<o;u++)s[u]=a[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1723:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>u});var l=a(7462),r=(a(7294),a(3905));const o={},s="\u642d\u5efa\u672c\u5730\u6d4b\u8bd5\u73af\u5883",n={unversionedId:"Getting Started/setup-local-env",id:"Getting Started/setup-local-env",title:"\u642d\u5efa\u672c\u5730\u6d4b\u8bd5\u73af\u5883",description:"\x3c!--",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/01-Getting Started/01-setup-local-env.md",sourceDirName:"01-Getting Started",slug:"/Getting Started/setup-local-env",permalink:"/zh-Hans/docs/Getting Started/setup-local-env",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/01-Getting Started/01-setup-local-env.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LakeSoul \u4ecb\u7ecd",permalink:"/zh-Hans/docs/intro"},next:{title:"\u4f7f\u7528 Docker Compose",permalink:"/zh-Hans/docs/Getting Started/docker-compose"}},p={},u=[{value:"\u542f\u52a8\u4e00\u4e2a PostgreSQL \u6570\u636e\u5e93",id:"\u542f\u52a8\u4e00\u4e2a-postgresql-\u6570\u636e\u5e93",level:2},{value:"PG \u6570\u636e\u5e93\u521d\u59cb\u5316",id:"pg-\u6570\u636e\u5e93\u521d\u59cb\u5316",level:2},{value:"\u5b89\u88c5 Spark \u73af\u5883",id:"\u5b89\u88c5-spark-\u73af\u5883",level:2},{value:"\u542f\u52a8 spark-shell \u8fdb\u884c\u6d4b\u8bd5",id:"\u542f\u52a8-spark-shell-\u8fdb\u884c\u6d4b\u8bd5",level:2},{value:"\u9996\u5148\u4e3a LakeSoul \u589e\u52a0 PG \u6570\u636e\u5e93\u914d\u7f6e",id:"\u9996\u5148\u4e3a-lakesoul-\u589e\u52a0-pg-\u6570\u636e\u5e93\u914d\u7f6e",level:3},{value:"\u8fdb\u5165 Spark \u5b89\u88c5\u76ee\u5f55\uff0c\u542f\u52a8 spark \u4ea4\u4e92\u5f0f shell\uff1a",id:"\u8fdb\u5165-spark-\u5b89\u88c5\u76ee\u5f55\u542f\u52a8-spark-\u4ea4\u4e92\u5f0f-shell",level:3},{value:"Spark \u4f5c\u4e1a LakeSoul \u76f8\u5173\u53c2\u6570\u8bbe\u7f6e",id:"spark-\u4f5c\u4e1a-lakesoul-\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e",level:2}],k={toc:u},i="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(i,(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u642d\u5efa\u672c\u5730\u6d4b\u8bd5\u73af\u5883"},"\u642d\u5efa\u672c\u5730\u6d4b\u8bd5\u73af\u5883"),(0,r.kt)("h2",{id:"\u542f\u52a8\u4e00\u4e2a-postgresql-\u6570\u636e\u5e93"},"\u542f\u52a8\u4e00\u4e2a PostgreSQL \u6570\u636e\u5e93"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7docker\u4f7f\u7528\u4e0b\u9762\u547d\u4ee4\u5feb\u901f\u642d\u5efa\u4e00\u4e2apg\u6570\u636e\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name lakesoul-test-pg -p5432:5432 -e POSTGRES_USER=lakesoul_test -e POSTGRES_PASSWORD=lakesoul_test -e POSTGRES_DB=lakesoul_test -d swr.cn-north-4.myhuaweicloud.com/dmetasoul-repo/postgres:14.5\n")),(0,r.kt)("h2",{id:"pg-\u6570\u636e\u5e93\u521d\u59cb\u5316"},"PG \u6570\u636e\u5e93\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u5728 LakeSoul \u4ee3\u7801\u5e93\u76ee\u5f55\u4e0b\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PGPASSWORD=lakesoul_test psql -h localhost -p 5432 -U lakesoul_test -f script/meta_init.sql\n")),(0,r.kt)("h2",{id:"\u5b89\u88c5-spark-\u73af\u5883"},"\u5b89\u88c5 Spark \u73af\u5883"),(0,r.kt)("p",null,"\u7531\u4e8e Apache Spark \u5b98\u65b9\u7684\u4e0b\u8f7d\u5b89\u88c5\u5305\u4e0d\u5305\u542b hadoop-cloud \u4ee5\u53ca AWS S3 \u7b49\u4f9d\u8d56\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a Spark \u5b89\u88c5\u5305\uff0c\u5176\u4e2d\u5305\u542b\u4e86 hadoop cloud \u3001s3 \u7b49\u5fc5\u8981\u7684\u4f9d\u8d56\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/spark/spark-3.3.2-bin-lakesoul-8e167b33.tgz"},"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/spark/spark-3.3.2-bin-lakesoul-8e167b33.tgz")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/spark/spark-3.3.2-bin-hadoop-3.3.5.tgz\ntar xf spark-3.3.2-bin-hadoop-3.3.5.tgz\nexport SPARK_HOME=${PWD}/spark-3.3.2-bin-dmetasoul\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u662f\u751f\u4ea7\u90e8\u7f72\uff0c\u63a8\u8350\u4e0b\u8f7d\u4e0d\u6253\u5305 Hadoop \u7684 Spark \u5b89\u88c5\u5305\uff1a"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://dlcdn.apache.org/spark/spark-3.3.2/spark-3.3.2-bin-without-hadoop.tgz"},"https://dlcdn.apache.org/spark/spark-3.3.2/spark-3.3.2-bin-without-hadoop.tgz")),(0,r.kt)("p",{parentName:"admonition"},"\u5e76\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/hadoop-provided.html"},"https://spark.apache.org/docs/latest/hadoop-provided.html")," \u8fd9\u7bc7\u6587\u6863\u4f7f\u7528\u96c6\u7fa4\u73af\u5883\u4e2d\u7684 Hadoop \u4f9d\u8d56\u548c\u914d\u7f6e\u3002")),(0,r.kt)("p",null,"LakeSoul \u53d1\u5e03 jar \u5305\u53ef\u4ee5\u4ece GitHub Releases \u9875\u9762\u4e0b\u8f7d\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/releases"},"https://github.com/lakesoul-io/LakeSoul/releases")," \u3002\u4e0b\u8f7d\u540e\u8bf7\u5c06 Jar \u5305\u653e\u5230 Spark \u5b89\u88c5\u76ee\u5f55\u4e0b\u7684 jars \u76ee\u5f55\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/lakesoul-io/LakeSoul/releases/download/v2.3.0/lakesoul-spark-2.3.0-spark-3.3.jar -P $SPARK_HOME/jars\n")),(0,r.kt)("p",null,"\u5982\u679c\u8bbf\u95ee Github \u6709\u95ee\u9898\uff0c\u4e5f\u53ef\u4ee5\u4ece\u5982\u4e0b\u94fe\u63a5\u4e0b\u8f7d\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/lakesoul-spark-2.3.0-spark-3.3.jar"},"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/lakesoul-spark-2.3.0-spark-3.3.jar")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece 2.1.0 \u7248\u672c\u8d77\uff0cLakeSoul \u81ea\u8eab\u7684\u4f9d\u8d56\u5df2\u7ecf\u901a\u8fc7 shade \u65b9\u5f0f\u6253\u5305\u5230\u4e00\u4e2a jar \u5305\u4e2d\u3002\u4e4b\u524d\u7684\u7248\u672c\u662f\u591a\u4e2a jar \u5305\u4ee5 tar.gz \u538b\u7f29\u5305\u7684\u5f62\u5f0f\u53d1\u5e03\u3002")),(0,r.kt)("h2",{id:"\u542f\u52a8-spark-shell-\u8fdb\u884c\u6d4b\u8bd5"},"\u542f\u52a8 spark-shell \u8fdb\u884c\u6d4b\u8bd5"),(0,r.kt)("h3",{id:"\u9996\u5148\u4e3a-lakesoul-\u589e\u52a0-pg-\u6570\u636e\u5e93\u914d\u7f6e"},"\u9996\u5148\u4e3a LakeSoul \u589e\u52a0 PG \u6570\u636e\u5e93\u914d\u7f6e"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cpg\u6570\u636e\u5e93\u8fde\u63a5\u5230\u672c\u5730\u6570\u636e\u5e93\uff0c\u914d\u7f6e\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"lakesoul.pg.driver=com.lakesoul.shaded.org.postgresql.Driver\nlakesoul.pg.url=jdbc:postgresql://127.0.0.1:5432/lakesoul_test?stringtype=unspecified\nlakesoul.pg.username=lakesoul_test\nlakesoul.pg.password=lakesoul_test\n")),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49 PG \u6570\u636e\u5e93\u914d\u7f6e\u4fe1\u606f\uff0c\u9700\u8981\u5728\u7a0b\u5e8f\u542f\u52a8\u524d\u589e\u52a0\u4e00\u4e2a\u73af\u5883\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"lakesoul_home"),"\uff0c\u5c06\u914d\u7f6e\u6587\u4ef6\u4fe1\u606f\u5f15\u5165\u8fdb\u6765\u3002\u5047\u5982 PG \u6570\u636e\u5e93\u914d\u7f6e\u4fe1\u606f\u6587\u4ef6\u8def\u5f84\u540d\u4e3a\uff1a/opt/soft/pg.property\uff0c\u5219\u5728\u7a0b\u5e8f\u542f\u52a8\u524d\u9700\u8981\u6dfb\u52a0\u8fd9\u4e2a\u73af\u5883\u53d8\u91cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export lakesoul_home=/opt/soft/pg.property\n")),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u81ea\u5b9a\u4e49\u6570\u636e\u5e93\u914d\u7f6e\u4fe1\u606f\uff0c\u8fd9\u6837\u7528\u6237\u81ea\u5b9a\u4e49 PG DB \u7684\u914d\u7f6e\u4fe1\u606f\u5c31\u4f1a\u5728 Spark \u4f5c\u4e1a\u4e2d\u751f\u6548\u3002"),(0,r.kt)("h3",{id:"\u8fdb\u5165-spark-\u5b89\u88c5\u76ee\u5f55\u542f\u52a8-spark-\u4ea4\u4e92\u5f0f-shell"},"\u8fdb\u5165 Spark \u5b89\u88c5\u76ee\u5f55\uff0c\u542f\u52a8 spark \u4ea4\u4e92\u5f0f shell\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/spark-shell --conf spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension --conf spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog --conf spark.sql.defaultCatalog=lakesoul\n")),(0,r.kt)("h2",{id:"spark-\u4f5c\u4e1a-lakesoul-\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e"},"Spark \u4f5c\u4e1a LakeSoul \u76f8\u5173\u53c2\u6570\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5c06\u4ee5\u4e0b\u914d\u7f6e\u6dfb\u52a0\u5230 spark-defaults.conf \u6216\u8005 Spark Session Builder \u90e8\u5206\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.sql.extensions"),(0,r.kt)("td",{parentName:"tr",align:null},"com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.sql.catalog.lakesoul"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.sql.defaultCatalog"),(0,r.kt)("td",{parentName:"tr",align:null},"lakesoul")))))}c.isMDXComponent=!0}}]);