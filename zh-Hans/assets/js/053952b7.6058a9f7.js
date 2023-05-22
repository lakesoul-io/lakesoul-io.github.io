"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[542],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),k=n,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7839:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={},l="LakeSoul \u81ea\u52a8\u538b\u7f29\u4efb\u52a1\u6559\u7a0b",i={unversionedId:"Usage Docs/auto-compaction-task",id:"Usage Docs/auto-compaction-task",title:"LakeSoul \u81ea\u52a8\u538b\u7f29\u4efb\u52a1\u6559\u7a0b",description:"\u4e0d\u7ba1\u662f\u6279\u91cf\u8fd8\u662f\u6d41\u5f0f\u4efb\u52a1\u7684\u6570\u636e\u5199\u5165\uff0c\u56e0\u4e3a\u6570\u636e\u591a\u662fmerge\u65b9\u5f0f\u5199\u5165\uff0c\u6240\u4ee5\u5b58\u5728\u4e00\u4e9b\u4e2d\u95f4\u5197\u4f59\u6570\u636e\u4ee5\u53ca\u5927\u91cf\u5c0f\u6587\u4ef6\u60c5\u51b5\uff0c\u4e3a\u4e86\u51cf\u5c11\u6b64\u7c7b\u6570\u636e\u9020\u6210\u8d44\u6e90\u7684\u6d6a\u8d39\u4ee5\u53ca\u63d0\u9ad8\u6570\u636e\u8bfb\u53d6\u7684\u6548\u7387\uff0c\u9700\u8981\u5c06\u6570\u636e\u8fdb\u884c\u538b\u7f29\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-Usage Docs/08-auto-compaction-task.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/auto-compaction-task",permalink:"/zh-Hans/docs/Usage Docs/auto-compaction-task",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/08-auto-compaction-task.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LakeSoul Flink Connector",permalink:"/zh-Hans/docs/Usage Docs/flink-lakesoul-connector"}},p={},s=[{value:"\u5b9e\u73b0\u673a\u5236",id:"\u5b9e\u73b0\u673a\u5236",level:2},{value:"\u538b\u7f29\u4efb\u52a1\u542f\u52a8\u6559\u7a0b",id:"\u538b\u7f29\u4efb\u52a1\u542f\u52a8\u6559\u7a0b",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lakesoul-\u81ea\u52a8\u538b\u7f29\u4efb\u52a1\u6559\u7a0b"},"LakeSoul \u81ea\u52a8\u538b\u7f29\u4efb\u52a1\u6559\u7a0b"),(0,n.kt)("p",null,"\u4e0d\u7ba1\u662f\u6279\u91cf\u8fd8\u662f\u6d41\u5f0f\u4efb\u52a1\u7684\u6570\u636e\u5199\u5165\uff0c\u56e0\u4e3a\u6570\u636e\u591a\u662fmerge\u65b9\u5f0f\u5199\u5165\uff0c\u6240\u4ee5\u5b58\u5728\u4e00\u4e9b\u4e2d\u95f4\u5197\u4f59\u6570\u636e\u4ee5\u53ca\u5927\u91cf\u5c0f\u6587\u4ef6\u60c5\u51b5\uff0c\u4e3a\u4e86\u51cf\u5c11\u6b64\u7c7b\u6570\u636e\u9020\u6210\u8d44\u6e90\u7684\u6d6a\u8d39\u4ee5\u53ca\u63d0\u9ad8\u6570\u636e\u8bfb\u53d6\u7684\u6548\u7387\uff0c\u9700\u8981\u5c06\u6570\u636e\u8fdb\u884c\u538b\u7f29\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5728\u5199\u5165\u4f5c\u4e1a\uff08\u4f8b\u5982\u6d41\u4f5c\u4e1a\uff09\u4e2d\u6267\u884c\u538b\u7f29\uff0c\u5219\u4e3b\u63a5\u6536\u5668\u8fdb\u7a0b\u53ef\u80fd\u4f1a\u88ab\u963b\u585e\u3002\u800c\u5982\u679c\u6211\u4eec\u5728\u5355\u72ec\u7684\u4f5c\u4e1a\u4e2d\u5bf9\u6bcf\u4e2a\u8868\u6267\u884c\u538b\u7f29\uff0c\u90a3\u4e48\u8bbe\u7f6e\u8d77\u6765\u4f1a\u5f88\u4e0d\u65b9\u4fbf\u3002\u56e0\u6b64\u6211\u4eec\u589e\u6dfb\u4e86\u5168\u5c40\u5206\u7c7b\u81ea\u52a8\u538b\u7f29\u4efb\u52a1\uff0c\u53ef\u4ee5\u6839\u636e\u6570\u636e\u5e93\u4ee5\u53ca\u5199\u5165\u5206\u533a\u6570\u636e\u60c5\u51b5\u81ea\u52a8\u8fdb\u884c\u6570\u636e\u538b\u7f29\u3002"),(0,n.kt)("h2",{id:"\u5b9e\u73b0\u673a\u5236"},"\u5b9e\u73b0\u673a\u5236"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56PG\u7684trigger-notify-listen\u673a\u5236\uff0c\u5728PG\u4e2d\u7684PLSQL\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u89e6\u53d1\u5668\u51fd\u6570\uff1a\u6bcf\u5f53\u6570\u636e\u5199\u5165\u65f6\u53ef\u4ee5\u89e6\u53d1\u6267\u884c\u4e00\u4e2a\u5b9a\u4e49\u51fd\u6570\uff0c\u5728\u51fd\u6570\u4e2d\u5206\u6790\u5904\u7406\u6ee1\u8db3\u538b\u7f29\u6761\u4ef6\u7684\u5206\u533a\uff08\u4f8b\u5982\uff0c\u81ea\u4e0a\u6b21\u538b\u7f29\u4ee5\u6765\u6709 10 \u6b21\u63d0\u4ea4\uff09\uff0c\u7136\u540e\u5c06\u4fe1\u606f\u53d1\u5e03\u51fa\u53bb\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u540e\u7aef\u542f\u52a8\u4e00\u4e2a\u5b9e\u65f6\u76d1\u542c\u4efb\u52a1\uff0c\u76d1\u542c\u6765\u81eapg\u53d1\u5e03\u7684\u4fe1\u606f\uff0c\u7136\u540e\u5bf9\u6ee1\u8db3\u538b\u7f29\u6761\u4ef6\u7684\u5206\u533a\u542f\u52a8\u6570\u636e\u542f\u52a8spark\u4efb\u52a1\u8fdb\u884c\u6570\u636e\u538b\u7f29\u3002")),(0,n.kt)("p",null,"\u76ee\u524d\u53ea\u6839\u636e\u5199\u5165\u5206\u533aversion\u60c5\u51b5\u8fdb\u884c\u538b\u7f29\uff0c\u6bcf\u63d0\u4ea410\u6b21\u4f1a\u89e6\u53d1\u538b\u7f29\u4efb\u52a1\u7684\u6267\u884c\u3002"),(0,n.kt)("h2",{id:"\u538b\u7f29\u4efb\u52a1\u542f\u52a8\u6559\u7a0b"},"\u538b\u7f29\u4efb\u52a1\u542f\u52a8\u6559\u7a0b"),(0,n.kt)("p",null,"trigger\u548cpg\u51fd\u6570\u5728\u6570\u636e\u5e93\u521d\u59cb\u5316\u7684\u65f6\u5019\u5df2\u7ecf\u914d\u7f6e\uff0c\u9ed8\u8ba4\u538b\u7f29\u914d\u7f6e\uff0c\u5206\u533a\u6bcf\u63d2\u516510\u6b21\u4f1a\u89e6\u53d1\u8fdb\u884c\u538b\u7f29\u4fe1\u53f7\uff0c\u6240\u4ee5\u53ea\u9700\u8981\u542f\u52a8spark\u81ea\u52a8\u538b\u7f29\u4f5c\u4e1a\u5c31\u597d\u3002"),(0,n.kt)("p",null,"\u901a\u8fc7\u4e0b\u8f7d\u6216\u89e3\u538bLakeSoul\u9879\u76ee\u4ee3\u7801\uff0c\u7136\u540e\u5c06jar\u5305\u653e\u5230$SPARK_HOME/jars\u76ee\u5f55\u4e0b\uff0c\u6216\u8005\u4efb\u52a1\u63d0\u4ea4\u65f6\u901a\u8fc7--jars\u7b49\u65b9\u5f0f\u6dfb\u52a0\u4f9d\u8d56jar\u5305\uff0c\u7136\u540e\u542f\u52a8spark\u81ea\u52a8\u538b\u7f29\u4efb\u52a1\u5373\u53ef\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e3a Spark \u4f5c\u4e1a\u8bbe\u7f6e lakesoul_home \u73af\u5883\u53d8\u91cf\uff0c\u8be6\u7ec6\u8bf4\u660e\u53ef\u4ee5\u53c2\u8003 LakeSoul\u8bbe\u7f6e Spark \u5de5\u7a0b/\u4f5c\u4e1a \uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u4f5c\u4e1a\u3002\u76ee\u524d\u652f\u6301\u53c2\u6570\u4fe1\u606f\u5982\u4e0b\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u8981"),(0,n.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"threadpool.size"),(0,n.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u538b\u7f29\u4efb\u52a1\u7ebf\u7a0b\u6c60\u6570\u91cf"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5fc5\u8981"),(0,n.kt)("td",{parentName:"tr",align:null},"8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"database"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8981\u538b\u7f29\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002\u82e5\u4e0d\u586b\u5199\uff0c\u8868\u793a\u4e0d\u533a\u5206\u6570\u636e\u5e93\u5bf9\u6ee1\u8db3\u6761\u4ef6\u7684\u5206\u533a\u8fdb\u884c\u6570\u636e\u538b\u7f29"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7a7a\u3002\u9ed8\u8ba4\u4e3a\u6240\u6709\u6570\u636e\u5e93")))),(0,n.kt)("p",null,"\u672c\u5730\u542f\u52a8spark\u81ea\u52a8\u538b\u7f29\u547d\u4ee4demo\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'export lakesoul_home=pg.properties && ./bin/spark-submit \\\n--name auto_compaction_task \\\n--master local[4]  \\\n--executor-memory 2g \\\n--conf "spark.driver.extraJavaOptions=-XX:MaxDirectMemorySize=8G" \\\n--class com.dmetasoul.lakesoul.spark.compaction.CompactionTask  \\\njars/lakesoul-spark-2.2.0-spark-3.3-SNAPSHOT.jar  --threadpool.size=10 --database=test\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u56e0\u4e3aLakeSoul\u9ed8\u8ba4\u5f00\u542fnative IO \u9700\u8981\u4f9d\u8d56\u5806\u5916\u5185\u5b58\uff0c\u6240\u4ee5spark\u4efb\u52a1\u9700\u8981\u8bbe\u7f6e\u5806\u5916\u5185\u5b58\u5927\u5c0f\uff0c\u5426\u5219\u5bb9\u6613\u51fa\u73b0\u5806\u5916\u5185\u5b58\u6ea2\u51fa\u95ee\u9898\u3002")))}m.isMDXComponent=!0}}]);