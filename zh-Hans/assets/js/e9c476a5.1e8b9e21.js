"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[17],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(a),m=l,f=s["".concat(u,".").concat(m)]||s[m]||k[m]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3971:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={},o="LakeSoul \u53d1\u5e03 2.3.0 \u7248\u672c\uff0c\u5168\u9762\u652f\u6301 CDC \u589e\u91cf\u8ba1\u7b97\uff0c\u8f7b\u677e\u6784\u5efa\u5b9e\u65f6\u6570\u4ed3",i={permalink:"/zh-Hans/blog/2023/07/17/lakesoul-2.3.0-release",editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/blog/2023-07-17-lakesoul-2.3.0-release/index.md",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2023-07-17-lakesoul-2.3.0-release/index.md",title:"LakeSoul \u53d1\u5e03 2.3.0 \u7248\u672c\uff0c\u5168\u9762\u652f\u6301 CDC \u589e\u91cf\u8ba1\u7b97\uff0c\u8f7b\u677e\u6784\u5efa\u5b9e\u65f6\u6570\u4ed3",description:"\x3c!--",date:"2023-07-17T00:00:00.000Z",formattedDate:"2023\u5e747\u670817\u65e5",tags:[],readingTime:5.41,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"LakeSoul \u53d1\u5e03 2.2.0 \u7248\u672c\uff0c\u5168\u9762\u5347\u7ea7 Native IO\uff0c\u6269\u5927\u4e91\u539f\u751f\u6e56\u4ed3\u6027\u80fd\u9886\u5148\u5e45\u5ea6",permalink:"/zh-Hans/blog/2023/04/21/lakesoul-2.2.0-release"}},u={authorsImageUrls:[]},p=[{value:"Flink SQL/Table API",id:"flink-sqltable-api",level:2},{value:"Flink \u591a\u6e90\u5165\u6e56 Stream API",id:"flink-\u591a\u6e90\u5165\u6e56-stream-api",level:2},{value:"\u5168\u5c40\u81ea\u52a8\u5c0f\u6587\u4ef6\u5408\u5e76\uff08Compaction\uff09\u670d\u52a1",id:"\u5168\u5c40\u81ea\u52a8\u5c0f\u6587\u4ef6\u5408\u5e76compaction\u670d\u52a1",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:p},s="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8fd1\u671f\uff0c\u6e56\u4ed3\u6846\u67b6 LakeSoul \u53d1\u5e03\u4e86 2.3.0 \u7248\u672c\u3002\u672c\u6b21\u65b0\u7248\u672c\u53d1\u5e03\u662f LakeSoul \u8fdb\u5165 Linux \u57fa\u91d1\u4f1a\u5b75\u5316\u540e\u7684\u7b2c\u4e00\u6b21\u7248\u672c\u53d1\u5e03\u3002\u672c\u6b21\u65b0\u7248\u672c\u65b0\u589e Flink SQL/Table API\uff0c\u652f\u6301\u6d41\u3001\u6279\u7684\u8bfb\u5199\u3002\u91cd\u6784\u4e86\u591a\u8868\u5b9e\u65f6\u5165\u6e56\u7684 Flink DataStream API\uff0c\u4ee5\u66f4\u597d\u5730\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\u7684\u5b9e\u65f6\u5165\u6e56\u3002\u65b0\u589e\u4e86\u5168\u5c40\u81ea\u52a8\u5c0f\u6587\u4ef6\u5408\u5e76\u670d\u52a1\u3002"),(0,l.kt)("h2",{id:"flink-sqltable-api"},"Flink SQL/Table API"),(0,l.kt)("p",null,"LakeSoul \u5728 2.3.0 \u7248\u672c\u4e2d\uff0c\u5168\u9762\u652f\u6301\u4e86 Flink SQL/Table API\uff0c\u540c\u65f6\u652f\u6301\u6d41\u3001\u6279\u4e24\u79cd\u65b9\u5f0f\uff0c\u5bf9 LakeSoul \u8868\u8fdb\u884c\u8bfb\u6216\u5199\u3002\u5728\u6d41\u5f0f\u7684\u8bfb\u53d6\u6216\u5199\u5165\u65f6\uff0cLakeSoul \u5b8c\u6574\u5730\u652f\u6301\u4e86 Flink Changelog Stream \u8bed\u4e49\u3002"),(0,l.kt)("p",null,"\u5728\u6d41\u5f0f\u5199\u5165\u65f6\uff0c\u53ef\u4ee5\u5bf9\u63a5\u591a\u79cd CDC \u91c7\u96c6\u5de5\u5177\uff0c\u5305\u62ec Debezium\u3001 Flink CDC Connector\uff0c\u652f\u6301\u884c\u7ea7\u522b upsert\u3001delete\uff1b\u5728\u8bfb\u53d6\u65f6\uff0c\u5bf9\u4e8e Append \u6216 Upsert \u65b9\u5f0f\u589e\u91cf\u66f4\u65b0\u7684\u8868\uff0c\u5747\u53ef\u6d41\u5f0f\u589e\u91cf\u8bfb\u53d6\uff0c\u5e76\u5728 Flink \u4e2d\u8fdb\u884c\u589e\u91cf\u8ba1\u7b97\u3002\u540c\u65f6\uff0cLakeSoul \u4e5f\u652f\u6301 Flink \u6279\u8ba1\u7b97\u6a21\u5f0f\uff0c\u80fd\u591f\u652f\u6301\u6279\u91cf upsert\u3001\u5168\u91cf\u8bfb\u53d6\u3001\u5feb\u7167\u8bfb\u53d6\u7b49\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 LakeSoul + Flink SQL\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5728\u6570\u636e\u6e56\u4e0a\u6784\u5efa\u5927\u89c4\u6a21\u3001\u4f4e\u6210\u672c\u3001\u9ad8\u6027\u80fd\u7684\u5b9e\u65f6\u6570\u4ed3\u3002\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://lakesoul-io.github.io/zh-Hans/docs/Usage%20Docs/flink-lakesoul-connector"},"Flink SQL \u6587\u6863"),"\u3002"),(0,l.kt)("h2",{id:"flink-\u591a\u6e90\u5165\u6e56-stream-api"},"Flink \u591a\u6e90\u5165\u6e56 Stream API"),(0,l.kt)("p",null,"LakeSoul \u4ece 2.1 \u7248\u672c\u8d77\u80fd\u591f\u652f\u6301\u6570\u636e\u5e93\u6574\u5e93\u540c\u6b65\uff0c\u5e76\u63d0\u4f9b\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://lakesoul-io.github.io/zh-Hans/docs/Usage%20Docs/flink-cdc-sync"},"MySQL \u6574\u5e93\u81ea\u52a8\u540c\u6b65\u5de5\u5177"),"\u3002"),(0,l.kt)("p",null,"\u5728\u672c\u6b21 2.3 \u7248\u672c\u66f4\u65b0\u4e2d\uff0c\u6211\u4eec\u91cd\u6784\u4e86\u6574\u5e93\u540c\u6b65\u65f6\u7684 DDL \u89e3\u6790\u65b9\u5f0f\u3002\u5177\u4f53\u6765\u8bf4\uff0cLakeSoul \u5728\u8fdb\u884c\u6574\u5e93\u540c\u6b65\u65f6\u4e0d\u518d\u9700\u8981\u4e0a\u6e38\u63d0\u4f9b DDL \u4e8b\u4ef6\uff0c\u6216\u53bb\u4e0a\u6e38\u6570\u636e\u5e93\u83b7\u53d6\u8868\u7684 Schema \u7b49\u4fe1\u606f\uff0c\u800c\u662f\u76f4\u63a5\u4ece\u540c\u6b65\u7684\u6570\u636e\u4e2d\u89e3\u6790\u662f\u5426\u51fa\u73b0\u65b0\u8868\u3001\u662f\u5426\u5df2\u6709\u8868\u7684 Schema \u53d1\u751f\u4e86\u53d8\u66f4\u3002\u9047\u5230\u65b0\u8868\u6216 Schema \u53d8\u66f4\u65f6\uff0c\u4f1a\u81ea\u52a8\u5728 LakeSoul \u6e56\u4ed3\u4e2d\u6267\u884c\u5efa\u8868\u6216 Schema \u53d8\u66f4\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u6539\u52a8\u4f7f\u5f97 LakeSoul \u53ef\u4ee5\u652f\u6301\u4efb\u610f\u7c7b\u578b\u7684\u6570\u636e\u6e90\u5165\u6e56\uff0c\u4f8b\u5982 MySQL\u3001Oracle \u7684 CDC \u91c7\u96c6\uff0c\u6216\u8005\u4ece Kafka \u4e2d\u6d88\u8d39 CDC \u4e8b\u4ef6\u3002\u5f00\u53d1\u8005\u53ea\u9700\u8981\u5c06 CDC \u6d88\u606f\u89e3\u6790\u4e3a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/blob/main/lakesoul-flink/src/main/java/org/apache/flink/lakesoul/types/BinarySourceRecord.java"},"BinarySourceRecord")," \u5bf9\u8c61\uff0c\u5e76\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"DataStream<BinarySourceRecord>"),"\uff0c\u5373\u53ef\u5b9e\u73b0\u6574\u5e93\u540c\u6b65\u3002LakeSoul \u5df2\u7ecf\u5b9e\u73b0\u4e86\u4ece Debezium DML \u6d88\u606f\u683c\u5f0f\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"BinarySourceRecord")," \u5bf9\u8c61\u7684\u8f6c\u6362\uff0c\u5176\u4ed6 CDC \u683c\u5f0f\u53ef\u4ee5\u53c2\u8003\u5b9e\u73b0\u3002"),(0,l.kt)("h2",{id:"\u5168\u5c40\u81ea\u52a8\u5c0f\u6587\u4ef6\u5408\u5e76compaction\u670d\u52a1"},"\u5168\u5c40\u81ea\u52a8\u5c0f\u6587\u4ef6\u5408\u5e76\uff08Compaction\uff09\u670d\u52a1"),(0,l.kt)("p",null,"LakeSoul \u652f\u6301\u6d41\u5f0f\u3001\u5e76\u53d1\u7684 Upsert \u6216 Append \u64cd\u4f5c\uff0c\u6bcf\u6b21 Upsert/Append \u90fd\u4f1a\u5199\u5165\u4e00\u6279\u6587\u4ef6\uff0c\u5728\u8bfb\u53d6\u65f6\u81ea\u52a8\u8fdb\u884c\u5408\u5e76\uff08Merge on Read\uff09\u3002"),(0,l.kt)("p",null,"LakeSoul \u7684 MOR \u6027\u80fd\u5df2\u7ecf\u76f8\u5bf9\u9ad8\u6548\uff08\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://lakesoul-io.github.io/zh-Hans/blog/2023/04/21/lakesoul-2.2.0-release"},"\u4e4b\u524d\u7684\u6027\u80fd\u5bf9\u6bd4"),"\uff09\uff0c\u5b9e\u6d4b\u5728 Upsert 100 \u6b21\u540e\u7684 MOR \u6027\u80fd\u4e0b\u964d\u5e45\u5ea6\u7ea6 15%\u3002\u4e0d\u8fc7\u4e3a\u4e86\u80fd\u591f\u6709\u66f4\u9ad8\u7684\u8bfb\u6027\u80fd\uff0cLakeSoul \u4e5f\u63d0\u4f9b\u4e86\u5c0f\u6587\u4ef6\u5408\u5e76\uff08Compaction\uff09\u7684\u529f\u80fd\u3002Compaction \u529f\u80fd\u662f\u4e00\u4e2a Spark \u7684 API\uff0c\u9700\u8981\u5bf9\u6bcf\u4e2a\u8868\u72ec\u7acb\u8c03\u7528\uff0c\u4f7f\u7528\u8d77\u6765\u8f83\u4e3a\u7e41\u7410\u3002"),(0,l.kt)("p",null,"\u672c\u6b21 2.3 \u7248\u672c\u66f4\u65b0\uff0cLakeSoul \u63d0\u4f9b\u4e86",(0,l.kt)("a",{parentName:"p",href:"https://lakesoul-io.github.io/zh-Hans/docs/Usage%20Docs/auto-compaction-task"},"\u5168\u5c40\u81ea\u52a8\u5c0f\u6587\u4ef6\u5408\u5e76\u670d\u52a1"),"\u3002\u8fd9\u4e2a\u670d\u52a1\u5b9e\u9645\u662f\u4e00\u4e2a Spark \u4f5c\u4e1a\uff0c\u901a\u8fc7\u76d1\u542c LakeSoul PG \u5143\u6570\u636e\u5e93\u7684\u5199\u5165\u4e8b\u4ef6\uff0c\u81ea\u52a8\u89e6\u53d1\u5bf9\u7b26\u5408\u6761\u4ef6\u7684\u8868\u7684\u5408\u5e76\u64cd\u4f5c\u3002\u8fd9\u4e2a\u5408\u5e76\u670d\u52a1\u6709\u5982\u4e0b\u51e0\u4e2a\u4f18\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5168\u5c40\u5408\u5e76\u3002\u5408\u5e76\u670d\u52a1\u53ea\u9700\u8981\u5728\u96c6\u7fa4\u4e2d\u542f\u52a8\u4e00\u6b21\uff0c\u5c31\u4f1a\u81ea\u52a8\u5bf9\u6240\u6709\u8868\u8fdb\u884c\u5408\u5e76\uff08\u4e5f\u652f\u6301\u6309 database \u5212\u5206\u4e3a\u591a\u4e2a\uff09\uff0c\u4e0d\u9700\u8981\u518d\u5728\u5404\u4e2a\u8868\u7684\u5199\u5165\u4f5c\u4e1a\u4e2d\u8fdb\u884c\u914d\u7f6e\uff0c\u4f7f\u7528\u65b9\u4fbf\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5206\u79bb\u5f0f\u7684\u5408\u5e76\u670d\u52a1\u3002\u7531\u4e8e LakeSoul \u80fd\u591f\u652f\u6301\u5e76\u53d1\u5199\uff0c\u56e0\u6b64\u5408\u5e76\u670d\u52a1\u7684\u5199\u5165\u4e0d\u5f71\u54cd\u5176\u4ed6\u5199\u5165\u4f5c\u4e1a\uff0c\u53ef\u4ee5\u5e76\u53d1\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5f39\u6027\u4f38\u7f29\u3002\u5168\u5c40\u5408\u5e76\u670d\u52a1\u4f7f\u7528 Spark \u5b9e\u73b0\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f00\u542f Spark \u7684 ",(0,l.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/3.3.1/job-scheduling.html#dynamic-resource-allocation"},"Dynamic Allocation")," \u5b9e\u73b0\u81ea\u52a8\u5f39\u6027\u4f38\u7f29\u3002")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"LakeSoul 2.3 \u7248\u672c\u66f4\u65b0\uff0c\u80fd\u591f\u66f4\u597d\u5730\u652f\u6301\u6784\u5efa\u5927\u89c4\u6a21\u5b9e\u65f6\u6e56\u4ed3\uff0c\u63d0\u4f9b\u4e86\u9ad8\u6027\u80fd IO\u3001\u5168\u94fe\u8def\u6d41\u5f0f\u8ba1\u7b97\u3001\u65b9\u4fbf\u5feb\u6377\u7684\u591a\u6e90\u5165\u6e56\u7b49\u6838\u5fc3\u529f\u80fd\uff0c\u5168\u5c40\u5408\u5e76\u670d\u52a1\u5728\u63d0\u5347\u6027\u80fd\u7684\u540c\u65f6\u4fdd\u6301\u4e86\u7b80\u5355\u6613\u7528\u7684\u7279\u6027\uff0c\u964d\u4f4e\u4e86\u6570\u636e\u6e56\u7684\u7ef4\u62a4\u6210\u672c\u3002"),(0,l.kt)("p",null,"\u5728\u4e0b\u4e2a\u7248\u672c\uff0cLakeSoul \u8fd8\u5c06\u539f\u751f\u652f\u6301 RBAC \u6743\u9650\u63a7\u5236\u3001\u539f\u751f Python \u8bfb\u53d6\u7b49\u529f\u80fd\u3002LakeSoul \u76ee\u524d\u662f Linux Foundation AI&Data \u7684 Sandbox \u5b75\u5316\u9879\u76ee\uff0c\u4e5f\u6b22\u8fce\u5e7f\u5927\u5f00\u53d1\u8005\u548c\u7528\u6237\u53c2\u4e0e\u5230\u793e\u533a\u4e2d\u6765\uff0c\u4e00\u8d77\u6253\u9020\u66f4\u5feb\u3001\u66f4\u597d\u7528\u7684\u6e56\u4ed3\u4e00\u4f53\u6846\u67b6\u3002"))}k.isMDXComponent=!0}}]);