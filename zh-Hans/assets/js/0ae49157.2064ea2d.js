"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[65],{3905:(e,a,l)=>{l.d(a,{Zo:()=>i,kt:()=>m});var t=l(7294);function n(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function r(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,t)}return l}function o(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?r(Object(l),!0).forEach((function(a){n(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function s(e,a){if(null==e)return{};var l,t,n=function(e,a){if(null==e)return{};var l,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)l=r[t],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)l=r[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=t.createContext({}),k=function(e){var a=t.useContext(p),l=a;return e&&(l="function"==typeof e?e(a):o(o({},a),e)),l},i=function(e){var a=k(e.components);return t.createElement(p.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var l=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=k(l),d=n,m=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return l?t.createElement(m,o(o({ref:a},i),{},{components:l})):t.createElement(m,o({ref:a},i))}));function m(e,a){var l=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=l.length,o=new Array(r);o[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var k=2;k<r;k++)o[k]=l[k];return t.createElement.apply(null,o)}return t.createElement.apply(null,l)}d.displayName="MDXCreateElement"},5101:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>k});var t=l(7462),n=(l(7294),l(3905));const r={},o="\u8bbe\u7f6e Spark/Flink \u5de5\u7a0b/\u4f5c\u4e1a",s={unversionedId:"Usage Docs/setup-spark",id:"Usage Docs/setup-spark",title:"\u8bbe\u7f6e Spark/Flink \u5de5\u7a0b/\u4f5c\u4e1a",description:"\x3c!--",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-Usage Docs/02-setup-spark.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/setup-spark",permalink:"/zh-Hans/docs/Usage Docs/setup-spark",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/02-setup-spark.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e LakeSoul \u5143\u6570\u636e\u5e93",permalink:"/zh-Hans/docs/Usage Docs/setup-meta-env"},next:{title:"Spark API \u6587\u6863",permalink:"/zh-Hans/docs/Usage Docs/api-docs"}},p={},k=[{value:"Spark \u5de5\u7a0b\u548c\u4f5c\u4e1a\u7684\u8bbe\u7f6e",id:"spark-\u5de5\u7a0b\u548c\u4f5c\u4e1a\u7684\u8bbe\u7f6e",level:2},{value:"Spark \u7248\u672c",id:"spark-\u7248\u672c",level:3},{value:"\u8bbe\u7f6e Spark Shell (\u5305\u62ec pyspark shell \u548c spark sql shell)",id:"\u8bbe\u7f6e-spark-shell-\u5305\u62ec-pyspark-shell-\u548c-spark-sql-shell",level:3},{value:"\u4f7f\u7528 <code>--packages</code> \u4f20 Maven \u4ed3\u5e93\u548c\u5305\u540d",id:"\u4f7f\u7528---packages-\u4f20-maven-\u4ed3\u5e93\u548c\u5305\u540d",level:4},{value:"\u4f7f\u7528\u6253\u5305\u597d\u7684 LakeSoul \u5305",id:"\u4f7f\u7528\u6253\u5305\u597d\u7684-lakesoul-\u5305",level:4},{value:"\u76f4\u63a5\u5c06 Jar \u5305\u653e\u5728 Spark \u73af\u5883\u4e2d",id:"\u76f4\u63a5\u5c06-jar-\u5305\u653e\u5728-spark-\u73af\u5883\u4e2d",level:4},{value:"\u8bbe\u7f6e Java/Scala \u9879\u76ee",id:"\u8bbe\u7f6e-javascala-\u9879\u76ee",level:3},{value:"\u4e3a Spark \u4f5c\u4e1a\u8bbe\u7f6e <code>lakesoul_home</code> \u73af\u5883\u53d8\u91cf",id:"\u4e3a-spark-\u4f5c\u4e1a\u8bbe\u7f6e-lakesoul_home-\u73af\u5883\u53d8\u91cf",level:3},{value:"\u8bbe\u7f6e Spark SQL Extension",id:"\u8bbe\u7f6e-spark-sql-extension",level:3},{value:"\u8bbe\u7f6e Spark \u7684 Catalog",id:"\u8bbe\u7f6e-spark-\u7684-catalog",level:3},{value:"\u8bbe\u7f6e Spark \u7684 SessionCatalog",id:"\u8bbe\u7f6e-spark-\u7684-sessioncatalog",level:3},{value:"\u5728\u5efa\u8868\u65f6\u4e0d\u6307\u5b9a provider/format (\u5373\u4e0d\u5199 using/stored as) \u7684\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u4f7f\u7528 LakeSoul",id:"\u5728\u5efa\u8868\u65f6\u4e0d\u6307\u5b9a-providerformat-\u5373\u4e0d\u5199-usingstored-as-\u7684\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u4f7f\u7528-lakesoul",level:3},{value:"Flink \u5de5\u7a0b/\u4f5c\u4e1a\u7684\u914d\u7f6e",id:"flink-\u5de5\u7a0b\u4f5c\u4e1a\u7684\u914d\u7f6e",level:2},{value:"\u6240\u9700\u7684 Flink \u7248\u672c",id:"\u6240\u9700\u7684-flink-\u7248\u672c",level:3},{value:"\u4e3a Flink \u8bbe\u7f6e\u5143\u6570\u636e\u6570\u636e\u5e93\u8fde\u63a5",id:"\u4e3a-flink-\u8bbe\u7f6e\u5143\u6570\u636e\u6570\u636e\u5e93\u8fde\u63a5",level:3},{value:"\u6dfb\u52a0 LakeSoul Jar \u5230 Flink \u90e8\u7f72\u7684\u76ee\u5f55",id:"\u6dfb\u52a0-lakesoul-jar-\u5230-flink-\u90e8\u7f72\u7684\u76ee\u5f55",level:3},{value:"\u5728\u4f60\u7684 Java \u9879\u76ee\u4e2d\u6dfb\u52a0 LakeSoul Flink Maven \u4f9d\u8d56",id:"\u5728\u4f60\u7684-java-\u9879\u76ee\u4e2d\u6dfb\u52a0-lakesoul-flink-maven-\u4f9d\u8d56",level:3}],i={toc:k},u="wrapper";function c(e){let{components:a,...l}=e;return(0,n.kt)(u,(0,t.Z)({},i,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u8bbe\u7f6e-sparkflink-\u5de5\u7a0b\u4f5c\u4e1a"},"\u8bbe\u7f6e Spark/Flink \u5de5\u7a0b/\u4f5c\u4e1a"),(0,n.kt)("h2",{id:"spark-\u5de5\u7a0b\u548c\u4f5c\u4e1a\u7684\u8bbe\u7f6e"},"Spark \u5de5\u7a0b\u548c\u4f5c\u4e1a\u7684\u8bbe\u7f6e"),(0,n.kt)("h3",{id:"spark-\u7248\u672c"},"Spark \u7248\u672c"),(0,n.kt)("p",null,"LakeSoul \u76ee\u524d\u652f\u6301 Spark 3.3 + Scala 2.12."),(0,n.kt)("h3",{id:"\u8bbe\u7f6e-spark-shell-\u5305\u62ec-pyspark-shell-\u548c-spark-sql-shell"},"\u8bbe\u7f6e Spark Shell (\u5305\u62ec pyspark shell \u548c spark sql shell)"),(0,n.kt)("p",null,"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"spark-shell"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"pyspark")," \u6216\u8005 ",(0,n.kt)("inlineCode",{parentName:"p"},"spark-sql")," \u4ea4\u4e92\u5f0f\u67e5\u8be2, \u9700\u8981\u6dfb\u52a0 LakeSoul \u7684\u4f9d\u8d56\u548c\u914d\u7f6e\uff0c\u6709\u4e24\u79cd\u65b9\u6cd5\uff1a"),(0,n.kt)("h4",{id:"\u4f7f\u7528---packages-\u4f20-maven-\u4ed3\u5e93\u548c\u5305\u540d"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"h4"},"--packages")," \u4f20 Maven \u4ed3\u5e93\u548c\u5305\u540d"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"spark-shell --packages com.dmetasoul:lakesoul-spark:2.4.0-spark-3.3\n")),(0,n.kt)("h4",{id:"\u4f7f\u7528\u6253\u5305\u597d\u7684-lakesoul-\u5305"},"\u4f7f\u7528\u6253\u5305\u597d\u7684 LakeSoul \u5305"),(0,n.kt)("p",null,"\u53ef\u4ee5\u4ece ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/releases"},"Releases")," \u9875\u9762\u4e0b\u8f7d\u5df2\u7ecf\u6253\u5305\u597d\u7684 LakeSoul Jar \u5305\u3002\n\u4e0b\u8f7d jar \u5e76\u4f20\u7ed9 ",(0,n.kt)("inlineCode",{parentName:"p"},"spark-submit")," \u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'spark-submit --jars "lakesoul-spark-2.4.0-spark-3.3.jar"\n')),(0,n.kt)("h4",{id:"\u76f4\u63a5\u5c06-jar-\u5305\u653e\u5728-spark-\u73af\u5883\u4e2d"},"\u76f4\u63a5\u5c06 Jar \u5305\u653e\u5728 Spark \u73af\u5883\u4e2d"),(0,n.kt)("p",null,"\u53ef\u4ee5\u5c06 Jar \u5305\u4e0b\u8f7d\u540e\uff0c\u653e\u5728 $SPARK_HOME/jars \u4e2d\u3002"),(0,n.kt)("p",null,"Jar \u5305\u53ef\u4ee5\u4ece Github Release \u9875\u9762\u4e0b\u8f7d\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.4.0/lakesoul-spark-2.4.0-spark-3.3.jar"},"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.4.0/lakesoul-spark-2.4.0-spark-3.3.jar")),(0,n.kt)("p",null,"\u6216\u8005\u4ece\u56fd\u5185\u5730\u5740\u4e0b\u8f7d\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/lakesoul-spark-2.4.0-spark-3.3.jar"},"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/lakesoul-spark-2.4.0-spark-3.3.jar")),(0,n.kt)("h3",{id:"\u8bbe\u7f6e-javascala-\u9879\u76ee"},"\u8bbe\u7f6e Java/Scala \u9879\u76ee"),(0,n.kt)("p",null,"\u589e\u52a0\u4ee5\u4e0b Maven \u4f9d\u8d56\u9879:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.dmetasoul</groupId>\n    <artifactId>lakesoul-spark</artifactId>\n    <version>2.4.0-spark-3.3</version>\n</dependency>\n")),(0,n.kt)("h3",{id:"\u4e3a-spark-\u4f5c\u4e1a\u8bbe\u7f6e-lakesoul_home-\u73af\u5883\u53d8\u91cf"},"\u4e3a Spark \u4f5c\u4e1a\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"h3"},"lakesoul_home")," \u73af\u5883\u53d8\u91cf"),(0,n.kt)("p",null,"\u4e3a\u4e86\u80fd\u591f\u6b63\u786e\u8fde\u63a5 LakeSoul \u5143\u6570\u636e\u5e93\uff0cSpark \u4f7f\u7528 local \u6216 client \u6a21\u5f0f\u65f6\uff0cdriver \u662f\u5728\u672c\u5730\u8fd0\u884c\uff0c\u8fd9\u65f6\u53ef\u4ee5\u76f4\u63a5\u5728 shell \u4e2d export \u73af\u5883\u53d8\u91cf\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export lakesoul_home=/path/to/lakesoul.properties\n")),(0,n.kt)("p",null,"Spark \u4f7f\u7528 cluster \u6a21\u5f0f\u65f6\uff0cdriver \u4e5f\u8fd0\u884c\u5728\u96c6\u7fa4\u4e0a\uff0c\u6839\u636e\u96c6\u7fa4\u90e8\u7f72\u65b9\u5f0f\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"spark-submit")," \u547d\u4ee4\u589e\u52a0\u53c2\u6570\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e Hadoop Yarn \u96c6\u7fa4, \u589e\u52a0\u547d\u4ee4\u884c\u53c2\u6570 ",(0,n.kt)("inlineCode",{parentName:"li"},"--conf spark.yarn.appMasterEnv.lakesoul_home=lakesoul.properties --files /path/to/lakesoul.properties"),"\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e K8s \u96c6\u7fa4\uff0c\u589e\u52a0\u547d\u4ee4\u884c\u53c2\u6570 ",(0,n.kt)("inlineCode",{parentName:"li"},"--conf spark.kubernetes.driverEnv.lakesoul_home=lakesoul.properties --files /path/to/lakesoul.properties")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"spark-submit")," command.")),(0,n.kt)("h3",{id:"\u8bbe\u7f6e-spark-sql-extension"},"\u8bbe\u7f6e Spark SQL Extension"),(0,n.kt)("p",null,"LakeSoul \u901a\u8fc7 Spark SQL Extension \u673a\u5236\u6765\u5b9e\u73b0\u4e00\u4e9b\u67e5\u8be2\u8ba1\u5212\u6539\u5199\u7684\u6269\u5c55\uff0c\u9700\u8981\u4e3a Spark \u4f5c\u4e1a\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension\n")),(0,n.kt)("h3",{id:"\u8bbe\u7f6e-spark-\u7684-catalog"},"\u8bbe\u7f6e Spark \u7684 Catalog"),(0,n.kt)("p",null,"LakeSoul \u5b9e\u73b0\u4e86 Spark 3 \u7684 CatalogPlugin \u63a5\u53e3\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u72ec\u7acb\u7684 Catalog \u63d2\u4ef6\u8ba9 Spark \u52a0\u8f7d\u3002\u5728 Spark \u4f5c\u4e1a\u4e2d\u589e\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog\n")),(0,n.kt)("p",null,"\u8be5\u914d\u7f6e\u589e\u52a0\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"lakesoul")," \u7684 Catalog\u3002\u4e3a\u4e86\u65b9\u4fbf SQL \u4e2d\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u5c06\u8be5 Catalog \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u7684 Catalog\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"spark.sql.defaultCatalog=lakesoul\n")),(0,n.kt)("p",null,"\u901a\u8fc7\u5982\u4e0a\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4f1a\u901a\u8fc7 LakeSoul Catalog \u6765\u67e5\u627e\u6240\u6709 database \u548c\u8868\u3002\u5982\u679c\u9700\u8981\u540c\u65f6\u8bbf\u95ee Hive \u7b49\u5916\u90e8 catalog\uff0c\u9700\u8981\u5728\u8868\u540d\u524d\u52a0\u4e0a\u5bf9\u5e94 catalog \u540d\u5b57\u3002\u4f8b\u5982\u5728 Spark \u4e2d\u542f\u7528 Hive \u4f5c\u4e3a Session Catalog\uff0c\u5219\u8bbf\u95ee Hive \u8868\u65f6\u9700\u8981\u52a0\u4e0a ",(0,n.kt)("inlineCode",{parentName:"p"},"spark_catalog")," \u524d\u7f00\u3002"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5728 2.0.1 \u53ca\u4e4b\u524d\u7248\u672c\uff0cLakeSoul \u53ea\u5b9e\u73b0\u4e86 Session Catalog \u63a5\u53e3\uff0c\u53ea\u80fd\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"spark.sql.catalog.spark_catalog=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog")," \u7684\u65b9\u5f0f\u6765\u8bbe\u7f6e\u3002\u4f46\u662f\u7531\u4e8e Spark \u5728 3.3 \u4e4b\u524d\uff0cSession Catalog \u5bf9 DataSource V2 \u8868\u7684\u652f\u6301\u4e0d\u5168\uff0c\u4ece 2.1.0 \u8d77 LakeSoul \u7684 Catalog \u66f4\u6539\u4e3a\u975e session \u7684\u5b9e\u73b0\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u4ece 2.1.0 \u8d77\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u5c06 LakeSoul \u8bbe\u7f6e\u4e3a Session Catalog\uff0c\u5373\u8bbe\u7f6e\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"spark_catalog")," \uff0c\u4f46\u662f\u8fd9\u6837\u5c31\u65e0\u6cd5\u518d\u8bbf\u95ee\u5230 Hive \u8868\u3002")),(0,n.kt)("h3",{id:"\u8bbe\u7f6e-spark-\u7684-sessioncatalog"},"\u8bbe\u7f6e Spark \u7684 SessionCatalog"),(0,n.kt)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u8bbf\u95ee Hive\uff0c\u4e5f\u53ef\u4ee5\u5c06 LakeSoul \u76f4\u63a5\u8bbe\u7f6e\u4e3a SessionCatalog\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"# \u8bbe\u7f6e LakeSoul \u4e3a session catalog\nspark.sql.catalog.spark_catalog org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog\n# \u7981\u7528 hive\nspark.sql.catalogImplementation in-memory\n")),(0,n.kt)("h3",{id:"\u5728\u5efa\u8868\u65f6\u4e0d\u6307\u5b9a-providerformat-\u5373\u4e0d\u5199-usingstored-as-\u7684\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u4f7f\u7528-lakesoul"},"\u5728\u5efa\u8868\u65f6\u4e0d\u6307\u5b9a provider/format (\u5373\u4e0d\u5199 using/stored as) \u7684\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u4f7f\u7528 LakeSoul"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"spark.sql.legacy.createHiveTableByDefault false\nspark.sql.sources.default lakesoul\n")),(0,n.kt)("h2",{id:"flink-\u5de5\u7a0b\u4f5c\u4e1a\u7684\u914d\u7f6e"},"Flink \u5de5\u7a0b/\u4f5c\u4e1a\u7684\u914d\u7f6e"),(0,n.kt)("h3",{id:"\u6240\u9700\u7684-flink-\u7248\u672c"},"\u6240\u9700\u7684 Flink \u7248\u672c"),(0,n.kt)("p",null,"\u76ee\u524d 2.4 \u7248\u672c\uff0c\u652f\u6301 Flink 1.17\u3002"),(0,n.kt)("h3",{id:"\u4e3a-flink-\u8bbe\u7f6e\u5143\u6570\u636e\u6570\u636e\u5e93\u8fde\u63a5"},"\u4e3a Flink \u8bbe\u7f6e\u5143\u6570\u636e\u6570\u636e\u5e93\u8fde\u63a5"),(0,n.kt)("p",null,"\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"$FLINK_HOME/conf/flink-conf.yaml")," \u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"containerized.master.env.LAKESOUL_PG_DRIVER\uff1acom.lakesoul.shaded.org.postgresql.Driver\ncontainerized.master.env.LAKESOUL_PG_USERNAME: root\ncontainerized.master.env.LAKESOUL_PG_PASSWORD: root\ncontainerized.master.env.LAKESOUL_PG_URL: jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=\u672a\u6307\u5b9a\ncontainerized.taskmanager.env.LAKESOUL_PG_DRIVER\uff1acom.lakesoul.shaded.org.postgresql.Driver\ncontainerized.taskmanager.env.LAKESOUL_PG_USERNAME: root\ncontainerized.taskmanager.env.LAKESOUL_PG_PASSWORD: root\ncontainerized.taskmanager.env.LAKESOUL_PG_URL: jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=\u672a\u6307\u5b9a\n")),(0,n.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u9700\u8981\u540c\u65f6\u8bbe\u7f6e master \u548c taskmanager \u73af\u5883\u53d8\u91cf\u3002"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Postgres \u6570\u636e\u5e93\u7684\u8fde\u63a5\u4fe1\u606f\u3001\u7528\u6237\u540d\u548c\u5bc6\u7801\u9700\u8981\u6839\u636e\u5b9e\u9645\u90e8\u7f72\u8fdb\u884c\u4fee\u6539\u3002")),(0,n.kt)("p",null,"::: caution\n\u6ce8\u610f\uff0c\u5982\u679c\u4f7f\u7528 Session \u65b9\u5f0f\u542f\u52a8\u4f5c\u4e1a\uff0c\u5373\u4ee5\u5ba2\u6237\u7aef\u7684\u65b9\u5f0f\u5c06\u4f5c\u4e1a\u63d0\u4ea4\u7ed9 Flink Standalone Cluster\uff0c\u4f5c\u4e3a\u5ba2\u6237\u7aef\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"flink run")," \u4e0d\u4f1a\u8bfb\u53d6\u4e0a\u9762\u7684\u914d\u7f6e\uff0c\u6240\u4ee5\u9700\u8981\u5355\u72ec\u914d\u7f6e\u73af\u5883\u53d8\u91cf\uff0c \u5373\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export LAKESOUL_PG_DRIVER=com.lakesoul.shaded.org.postgresql.Driver\nexport LAKESOUL_PG_URL=jdbc:postgresql://localhost:5432/test_lakesoul_meta?stringtype=unspecified\nexport LAKESOUL_PG_USERNAME=root\nexport LAKESOUL_PG_PASSWORD=root\n")),(0,n.kt)("p",null,"::::"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"LakeSoul \u9700\u8981\u4f7f\u7528\u76f8\u5bf9\u591a\u4e00\u4e9b\u7684\u5806\u5916\u5185\u5b58\uff0c\u5efa\u8bae\u9002\u5f53\u589e\u52a0 Task Manager \u7684\u5806\u5916\u5185\u5b58\u914d\u7f6e\uff0c\u4f8b\u5982\uff1a"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"taskmanager.memory.task.off-heap.size: 3000m\n"))),(0,n.kt)("h3",{id:"\u6dfb\u52a0-lakesoul-jar-\u5230-flink-\u90e8\u7f72\u7684\u76ee\u5f55"},"\u6dfb\u52a0 LakeSoul Jar \u5230 Flink \u90e8\u7f72\u7684\u76ee\u5f55"),(0,n.kt)("p",null,"\u4ece\u4ee5\u4e0b\u5730\u5740\u4e0b\u8f7d LakeSoul Flink Jar\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.4.0/lakesoul-flink-2.4.0-flink-1.17.jar"},"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.4.0/lakesoul-flink-2.4.0-flink-1.17.jar")),(0,n.kt)("p",null,"\u5e76\u5c06 jar \u6587\u4ef6\u653e\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"$FLINK_HOME/lib")," \u4e0b\u3002\u5728\u6b64\u4e4b\u540e\uff0c\u60a8\u53ef\u4ee5\u50cf\u5f80\u5e38\u4e00\u6837\u542f\u52a8 flink \u4f1a\u8bdd\u96c6\u7fa4\u6216\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u8bbf\u95ee S3\uff0c\u8fd8\u9700\u8981\u4e0b\u8f7d\u4e0e Flink \u7248\u672c\u5bf9\u5e94\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"[flink-s3-hadoop](https://mvnrepository.com/artifact/org.apache.flink/flink-s3-fs-hadoop)"),"\uff0c\u5e76\u653e\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"$FLINK_HOME/lib")," \u76ee\u5f55\u4e0b\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u8bbf\u95ee Hadoop \u73af\u5883\uff0c\u53ef\u4ee5\u58f0\u660e Hadoop Classpath \u73af\u5883\u53d8\u91cf\uff1a"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n")),(0,n.kt)("p",{parentName:"admonition"},"\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/resource-providers/yarn/"},"Flink on Hadoop"))),(0,n.kt)("h3",{id:"\u5728\u4f60\u7684-java-\u9879\u76ee\u4e2d\u6dfb\u52a0-lakesoul-flink-maven-\u4f9d\u8d56"},"\u5728\u4f60\u7684 Java \u9879\u76ee\u4e2d\u6dfb\u52a0 LakeSoul Flink Maven \u4f9d\u8d56"),(0,n.kt)("p",null,"\u5c06\u4ee5\u4e0b\u5185\u5bb9\u6dfb\u52a0\u5230\u9879\u76ee\u7684 pom.xml"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n     <groupId>com.dmetasoul</groupId>\n     <artifactId>lakesoul</artifactId>\n     <version>2.4.0-flink-1.17</version>\n</dependency>\n")))}c.isMDXComponent=!0}}]);