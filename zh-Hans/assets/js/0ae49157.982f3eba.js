"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[65],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>d});var l=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},s=Object.keys(e);for(l=0;l<s.length;l++)t=s[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)t=s[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=l.createContext({}),k=function(e){var a=l.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},i=function(e){var a=k(e.components);return l.createElement(p.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},m=l.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=k(t),m=r,d=u["".concat(p,".").concat(m)]||u[m]||c[m]||s;return t?l.createElement(d,n(n({ref:a},i),{},{components:t})):l.createElement(d,n({ref:a},i))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,n=new Array(s);n[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[u]="string"==typeof e?e:r,n[1]=o;for(var k=2;k<s;k++)n[k]=t[k];return l.createElement.apply(null,n)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5101:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>k});var l=t(7462),r=(t(7294),t(3905));const s={},n="\u8bbe\u7f6e Spark \u5de5\u7a0b/\u4f5c\u4e1a",o={unversionedId:"Usage Docs/setup-spark",id:"Usage Docs/setup-spark",title:"\u8bbe\u7f6e Spark \u5de5\u7a0b/\u4f5c\u4e1a",description:"Spark \u7248\u672c",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-Usage Docs/02-setup-spark.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/setup-spark",permalink:"/zh-Hans/docs/Usage Docs/setup-spark",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/02-setup-spark.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e LakeSoul \u5143\u6570\u636e\u5e93",permalink:"/zh-Hans/docs/Usage Docs/setup-meta-env"},next:{title:"API \u6587\u6863",permalink:"/zh-Hans/docs/Usage Docs/api-docs"}},p={},k=[{value:"Spark \u7248\u672c",id:"spark-\u7248\u672c",level:2},{value:"\u8bbe\u7f6e Spark Shell (\u5305\u62ec pyspark shell \u548c spark sql shell)",id:"\u8bbe\u7f6e-spark-shell-\u5305\u62ec-pyspark-shell-\u548c-spark-sql-shell",level:2},{value:"\u4f7f\u7528 <code>--packages</code> \u4f20 Maven \u4ed3\u5e93\u548c\u5305\u540d",id:"\u4f7f\u7528---packages-\u4f20-maven-\u4ed3\u5e93\u548c\u5305\u540d",level:3},{value:"\u4f7f\u7528\u6253\u5305\u597d\u7684 LakeSoul \u5305",id:"\u4f7f\u7528\u6253\u5305\u597d\u7684-lakesoul-\u5305",level:3},{value:"\u76f4\u63a5\u5c06 Jar \u5305\u653e\u5728 Spark \u73af\u5883\u4e2d",id:"\u76f4\u63a5\u5c06-jar-\u5305\u653e\u5728-spark-\u73af\u5883\u4e2d",level:3},{value:"\u8bbe\u7f6e Java/Scala \u9879\u76ee",id:"\u8bbe\u7f6e-javascala-\u9879\u76ee",level:2},{value:"\u4e3a Spark \u4f5c\u4e1a\u8bbe\u7f6e <code>lakesoul_home</code> \u73af\u5883\u53d8\u91cf",id:"\u4e3a-spark-\u4f5c\u4e1a\u8bbe\u7f6e-lakesoul_home-\u73af\u5883\u53d8\u91cf",level:2},{value:"\u8bbe\u7f6e Spark SQL Extension",id:"\u8bbe\u7f6e-spark-sql-extension",level:2},{value:"\u8bbe\u7f6e Spark \u7684 Catalog",id:"\u8bbe\u7f6e-spark-\u7684-catalog",level:2}],i={toc:k},u="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,l.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8bbe\u7f6e-spark-\u5de5\u7a0b\u4f5c\u4e1a"},"\u8bbe\u7f6e Spark \u5de5\u7a0b/\u4f5c\u4e1a"),(0,r.kt)("h2",{id:"spark-\u7248\u672c"},"Spark \u7248\u672c"),(0,r.kt)("p",null,"LakeSoul \u76ee\u524d\u652f\u6301 Spark 3.3 + Scala 2.12."),(0,r.kt)("h2",{id:"\u8bbe\u7f6e-spark-shell-\u5305\u62ec-pyspark-shell-\u548c-spark-sql-shell"},"\u8bbe\u7f6e Spark Shell (\u5305\u62ec pyspark shell \u548c spark sql shell)"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-shell"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"pyspark")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-sql")," \u4ea4\u4e92\u5f0f\u67e5\u8be2, \u9700\u8981\u6dfb\u52a0 LakeSoul \u7684\u4f9d\u8d56\u548c\u914d\u7f6e\uff0c\u6709\u4e24\u79cd\u65b9\u6cd5\uff1a"),(0,r.kt)("h3",{id:"\u4f7f\u7528---packages-\u4f20-maven-\u4ed3\u5e93\u548c\u5305\u540d"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h3"},"--packages")," \u4f20 Maven \u4ed3\u5e93\u548c\u5305\u540d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"spark-shell --packages com.dmetasoul:lakesoul-spark:2.2.0-spark-3.3\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u6253\u5305\u597d\u7684-lakesoul-\u5305"},"\u4f7f\u7528\u6253\u5305\u597d\u7684 LakeSoul \u5305"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/meta-soul/LakeSoul/releases"},"Releases")," \u9875\u9762\u4e0b\u8f7d\u5df2\u7ecf\u6253\u5305\u597d\u7684 LakeSoul Jar \u5305\u3002\n\u4e0b\u8f7d jar \u5e76\u4f20\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-submit")," \u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'spark-submit --jars "lakesoul-spark-2.2.0-spark-3.3.jar"\n')),(0,r.kt)("h3",{id:"\u76f4\u63a5\u5c06-jar-\u5305\u653e\u5728-spark-\u73af\u5883\u4e2d"},"\u76f4\u63a5\u5c06 Jar \u5305\u653e\u5728 Spark \u73af\u5883\u4e2d"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5c06 Jar \u5305\u4e0b\u8f7d\u540e\uff0c\u653e\u5728 $SPARK_HOME/jars \u4e2d\u3002"),(0,r.kt)("p",null,"Jar \u5305\u53ef\u4ee5\u4ece Github Release \u9875\u9762\u4e0b\u8f7d\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/meta-soul/LakeSoul/releases/download/v2.2.0/lakesoul-spark-2.2.0-spark-3.3.jar"},"https://github.com/meta-soul/LakeSoul/releases/download/v2.2.0/lakesoul-spark-2.2.0-spark-3.3.jar")),(0,r.kt)("p",null,"\u6216\u8005\u4ece\u56fd\u5185\u5730\u5740\u4e0b\u8f7d\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/lakesoul-spark-2.2.0-spark-3.3.jar"},"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/lakesoul-spark-2.2.0-spark-3.3.jar")),(0,r.kt)("h2",{id:"\u8bbe\u7f6e-javascala-\u9879\u76ee"},"\u8bbe\u7f6e Java/Scala \u9879\u76ee"),(0,r.kt)("p",null,"\u589e\u52a0\u4ee5\u4e0b Maven \u4f9d\u8d56\u9879:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.dmetasoul</groupId>\n    <artifactId>lakesoul-spark</artifactId>\n    <version>2.2.0-spark-3.3</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"\u4e3a-spark-\u4f5c\u4e1a\u8bbe\u7f6e-lakesoul_home-\u73af\u5883\u53d8\u91cf"},"\u4e3a Spark \u4f5c\u4e1a\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"h2"},"lakesoul_home")," \u73af\u5883\u53d8\u91cf"),(0,r.kt)("p",null,"\u4e3a\u4e86\u80fd\u591f\u6b63\u786e\u8fde\u63a5 LakeSoul \u5143\u6570\u636e\u5e93\uff0cSpark \u4f7f\u7528 local \u6216 client \u6a21\u5f0f\u65f6\uff0cdriver \u662f\u5728\u672c\u5730\u8fd0\u884c\uff0c\u8fd9\u65f6\u53ef\u4ee5\u76f4\u63a5\u5728 shell \u4e2d export \u73af\u5883\u53d8\u91cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export lakesoul_home=/path/to/lakesoul.properties\n")),(0,r.kt)("p",null,"Spark \u4f7f\u7528 cluster \u6a21\u5f0f\u65f6\uff0cdriver \u4e5f\u8fd0\u884c\u5728\u96c6\u7fa4\u4e0a\uff0c\u6839\u636e\u96c6\u7fa4\u90e8\u7f72\u65b9\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-submit")," \u547d\u4ee4\u589e\u52a0\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e Hadoop Yarn \u96c6\u7fa4, \u589e\u52a0\u547d\u4ee4\u884c\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"--conf spark.yarn.appMasterEnv.lakesoul_home=lakesoul.properties --files /path/to/lakesoul.properties"),"\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e K8s \u96c6\u7fa4\uff0c\u589e\u52a0\u547d\u4ee4\u884c\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"--conf spark.kubernetes.driverEnv.lakesoul_home=lakesoul.properties --files /path/to/lakesoul.properties")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"spark-submit")," command.")),(0,r.kt)("h2",{id:"\u8bbe\u7f6e-spark-sql-extension"},"\u8bbe\u7f6e Spark SQL Extension"),(0,r.kt)("p",null,"LakeSoul \u901a\u8fc7 Spark SQL Extension \u673a\u5236\u6765\u5b9e\u73b0\u4e00\u4e9b\u67e5\u8be2\u8ba1\u5212\u6539\u5199\u7684\u6269\u5c55\uff0c\u9700\u8981\u4e3a Spark \u4f5c\u4e1a\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension\n")),(0,r.kt)("h2",{id:"\u8bbe\u7f6e-spark-\u7684-catalog"},"\u8bbe\u7f6e Spark \u7684 Catalog"),(0,r.kt)("p",null,"LakeSoul \u5b9e\u73b0\u4e86 Spark 3 \u7684 CatalogPlugin \u63a5\u53e3\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u72ec\u7acb\u7684 Catalog \u63d2\u4ef6\u8ba9 Spark \u52a0\u8f7d\u3002\u5728 Spark \u4f5c\u4e1a\u4e2d\u589e\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog\n")),(0,r.kt)("p",null,"\u8be5\u914d\u7f6e\u589e\u52a0\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"lakesoul")," \u7684 Catalog\u3002\u4e3a\u4e86\u65b9\u4fbf SQL \u4e2d\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u5c06\u8be5 Catalog \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u7684 Catalog\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"spark.sql.defaultCatalog=lakesoul\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u5982\u4e0a\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4f1a\u901a\u8fc7 LakeSoul Catalog \u6765\u67e5\u627e\u6240\u6709 database \u548c\u8868\u3002\u5982\u679c\u9700\u8981\u540c\u65f6\u8bbf\u95ee Hive \u7b49\u5916\u90e8 catalog\uff0c\u9700\u8981\u5728\u8868\u540d\u524d\u52a0\u4e0a\u5bf9\u5e94 catalog \u540d\u5b57\u3002\u4f8b\u5982\u5728 Spark \u4e2d\u542f\u7528 Hive \u4f5c\u4e3a Session Catalog\uff0c\u5219\u8bbf\u95ee Hive \u8868\u65f6\u9700\u8981\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"spark_catalog")," \u524d\u7f00\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728 2.0.1 \u53ca\u4e4b\u524d\u7248\u672c\uff0cLakeSoul \u53ea\u5b9e\u73b0\u4e86 Session Catalog \u63a5\u53e3\uff0c\u53ea\u80fd\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.sql.catalog.spark_catalog=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog")," \u7684\u65b9\u5f0f\u6765\u8bbe\u7f6e\u3002\u4f46\u662f\u7531\u4e8e Spark \u5728 3.3 \u4e4b\u524d\uff0cSession Catalog \u5bf9 DataSource V2 \u8868\u7684\u652f\u6301\u4e0d\u5168\uff0c\u4ece 2.1.0 \u8d77 LakeSoul \u7684 Catalog \u66f4\u6539\u4e3a\u975e session \u7684\u5b9e\u73b0\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4ece 2.1.0 \u8d77\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u5c06 LakeSoul \u8bbe\u7f6e\u4e3a Session Catalog\uff0c\u5373\u8bbe\u7f6e\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"spark_catalog")," \uff0c\u4f46\u662f\u8fd9\u6837\u5c31\u65e0\u6cd5\u518d\u8bbf\u95ee\u5230 Hive \u8868\u3002")))}c.isMDXComponent=!0}}]);