"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>S});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},k=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=u(a),m=o,S=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return a?r.createElement(S,n(n({ref:t},k),{},{components:a})):r.createElement(S,n({ref:t},k))}));function S(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,n=new Array(l);n[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,n[1]=i;for(var u=2;u<l;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(7462),o=(a(7294),a(3905));const l={},n="LakeSoul \u53d1\u5e03 2.2.0 \u7248\u672c\uff0c\u5168\u9762\u5347\u7ea7 Native IO\uff0c\u6269\u5927\u4e91\u539f\u751f\u6e56\u4ed3\u6027\u80fd\u9886\u5148\u5e45\u5ea6",i={permalink:"/zh-Hans/blog/2023/04/21/lakesoul-2.2.0-release",editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/blog/2023-04-21-lakesoul-2.2.0-release/index.md",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2023-04-21-lakesoul-2.2.0-release/index.md",title:"LakeSoul \u53d1\u5e03 2.2.0 \u7248\u672c\uff0c\u5168\u9762\u5347\u7ea7 Native IO\uff0c\u6269\u5927\u4e91\u539f\u751f\u6e56\u4ed3\u6027\u80fd\u9886\u5148\u5e45\u5ea6",description:"\u8fd1\u65e5\uff0c\u7ecf\u8fc7\u6570\u6708\u7814\u53d1\uff0c\u5f00\u6e90\u6e56\u4ed3\u6846\u67b6 LakeSoul \u53d1\u5e03\u4e86 2.2.0 \u7248\u672c\uff08Github \u53d1\u5e03\u65e5\u5fd7\uff09\uff0c\u8fd9\u4e2a\u7248\u672c\u6700\u91cd\u8981\u7684\u5347\u7ea7\u662f\u5728 Spark\u3001Flink \u4e2d\u9ed8\u8ba4\u542f\u7528\u4e86\u5168\u65b0\u7684 Native IO\uff0c\u6027\u80fd\u518d\u6b21\u83b7\u5f97\u663e\u8457\u63d0\u5347\uff0c\u6269\u5927\u4e86 LakeSoul \u5728\u4e91\u539f\u751f\u6e56\u4ed3\u6846\u67b6\u9886\u57df\u7684\u6027\u80fd\u9886\u5148\u4f18\u52bf\u3002\u672c\u6587\u4e3a\u60a8\u8be6\u7ec6\u89e3\u8bfb LakeSoul 2.2.0 \u7248\u672c\u7684\u66f4\u65b0\u4ee5\u53ca Native IO \u7684\u6280\u672f\u7ec6\u8282\u3002",date:"2023-04-21T00:00:00.000Z",formattedDate:"2023\u5e744\u670821\u65e5",tags:[],readingTime:14.435,hasTruncateMarker:!1,authors:[],frontMatter:{}},p={authorsImageUrls:[]},u=[{value:"LakeSoul 2.2.0 \u7248\u672c\u66f4\u65b0\u5185\u5bb9",id:"lakesoul-220-\u7248\u672c\u66f4\u65b0\u5185\u5bb9",level:2},{value:"1. Native IO \u8be6\u7ec6\u89e3\u8bfb",id:"1-native-io-\u8be6\u7ec6\u89e3\u8bfb",level:3},{value:"2. \u5feb\u7167\u548c\u589e\u91cf\u8bfb\u53d6\u529f\u80fd\u4ecb\u7ecd",id:"2-\u5feb\u7167\u548c\u589e\u91cf\u8bfb\u53d6\u529f\u80fd\u4ecb\u7ecd",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],k={toc:u},s="wrapper";function c(e){let{components:t,...l}=e;return(0,o.kt)(s,(0,r.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fd1\u65e5\uff0c\u7ecf\u8fc7\u6570\u6708\u7814\u53d1\uff0c\u5f00\u6e90\u6e56\u4ed3\u6846\u67b6 LakeSoul \u53d1\u5e03\u4e86 2.2.0 \u7248\u672c\uff08",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/releases/tag/v2.2.0"},"Github \u53d1\u5e03\u65e5\u5fd7"),"\uff09\uff0c\u8fd9\u4e2a\u7248\u672c\u6700\u91cd\u8981\u7684\u5347\u7ea7\u662f\u5728 Spark\u3001Flink \u4e2d\u9ed8\u8ba4\u542f\u7528\u4e86\u5168\u65b0\u7684 Native IO\uff0c\u6027\u80fd\u518d\u6b21\u83b7\u5f97\u663e\u8457\u63d0\u5347\uff0c\u6269\u5927\u4e86 LakeSoul \u5728\u4e91\u539f\u751f\u6e56\u4ed3\u6846\u67b6\u9886\u57df\u7684\u6027\u80fd\u9886\u5148\u4f18\u52bf\u3002\u672c\u6587\u4e3a\u60a8\u8be6\u7ec6\u89e3\u8bfb LakeSoul 2.2.0 \u7248\u672c\u7684\u66f4\u65b0\u4ee5\u53ca Native IO \u7684\u6280\u672f\u7ec6\u8282\u3002"),(0,o.kt)("h2",{id:"lakesoul-220-\u7248\u672c\u66f4\u65b0\u5185\u5bb9"},"LakeSoul 2.2.0 \u7248\u672c\u66f4\u65b0\u5185\u5bb9"),(0,o.kt)("p",null,"\u5728 2.2.0 \u7248\u672c\u4e2d\uff0cLakeSoul \u5b9e\u73b0\u4e86\u5168\u65b0\u7684 Native IO\uff0c\u5c06\u5168\u91cf\u3001\u589e\u91cf\u7684\u8bfb\u5199\u903b\u8f91\u90fd\u8fc1\u79fb\u5230\u4e86\u65b0\u7684 IO \u5c42\u5b9e\u73b0\uff0c\u5e76\u505a\u4e86\u5927\u91cf\u6027\u80fd\u548c\u6b63\u786e\u6027\u6d4b\u8bd5\uff0c\u5728 Spark \u548c Flink \u4e2d\u90fd\u9ed8\u8ba4\u542f\u7528\u4e86\u65b0 IO \u5c42\u3002"),(0,o.kt)("p",null,"2.2.0 \u7248\u672c\u8fd8\u53d1\u5e03\u4e86 Spark \u4e2d\u7684",(0,o.kt)("a",{parentName:"p",href:"https://lakesoul-io.github.io/zh-Hans/docs/Tutorials/snapshot-manage"},"\u5feb\u7167\u8bfb\u53d6\u3001\u56de\u6eda\u548c\u6e05\u7406"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://lakesoul-io.github.io/zh-Hans/docs/Tutorials/incremental-query"},"\u589e\u91cf\u6279\u5f0f\u8bfb\u53d6\u3001\u589e\u91cf\u6d41\u5f0f\u8bfb\u53d6"),"\u7b49\u591a\u4e2a\u65b0\u63a5\u53e3\uff0c\u4ece\u800c\u66f4\u4e3a\u5b8c\u5584\u5730\u652f\u6301\u9ad8\u6027\u80fd\u7684\u6d41\u5f0f\u589e\u91cf\u7684 ETL \u6570\u636e\u5efa\u6a21\u6d41\u7a0b\u3002\u4ee5\u4e0b\u6211\u4eec\u8be6\u7ec6\u8bb2\u89e3\u8fd9\u51e0\u4e2a\u65b0\u7684\u6539\u8fdb\u548c\u529f\u80fd\u70b9\u3002"),(0,o.kt)("h3",{id:"1-native-io-\u8be6\u7ec6\u89e3\u8bfb"},"1. Native IO \u8be6\u7ec6\u89e3\u8bfb"),(0,o.kt)("p",null,"\u4f5c\u4e3a\u4e91\u539f\u751f\u6e56\u4ed3\u6846\u67b6\uff0c\u5bf9\u4e91\u5b58\u50a8\u4ee5\u53ca HDFS \u7684\u8bfb\u5199\u6027\u80fd\u662f\u91cd\u4e2d\u4e4b\u91cd\u3002LakeSoul \u652f\u6301\u6d41\u6279\u4e00\u4f53\u7684\u7279\u6027\uff0c\u5728\u5b58\u50a8\u4e0a\u9488\u5bf9\u4e3b\u952e\u8868\u652f\u6301 Upsert \u66f4\u65b0\u5199\u5165\u548c Merge on Read \u8bfb\u53d6\uff0cIO \u5c42\u7684\u5b9e\u73b0\u6709\u4e00\u5b9a\u7684\u590d\u6742\u5ea6\u3002\u5148\u524d LakeSoul \u7684 Upsert \u5199\u5165\u4e3b\u8981\u4f9d\u8d56\u8ba1\u7b97\u6846\u67b6\u6765\u5b9e\u73b0\uff0c\u4f8b\u5982\u5728 Spark \u4e2d\uff0c\u9700\u8981\u7531 Spark \u5bf9\u4e3b\u952e\u8fdb\u884c shuffle \u548c\u6392\u5e8f\u540e\u5199\u5165\u5b58\u50a8\uff0c\u800c\u8bfb\u53d6\u65f6\u5219\u5728 Spark \u4e2d\u5b9e\u73b0\u4e86\u4e00\u5957\u6709\u5e8f\u6587\u4ef6\u5f52\u5e76\u7684 Reader\u3002\u8fd9\u5957\u5b9e\u73b0\u5e26\u6765\u51e0\u4e2a\u95ee\u9898\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6027\u80fd\u6709\u4f18\u5316\u7a7a\u95f4\u3002LakeSoul \u4e3b\u952e\u6a21\u578b\u91c7\u7528\u54c8\u5e0c\u5206\u6876\u6709\u5e8f\u7684\u65b9\u5f0f\u5b58\u50a8\uff0c\u5728 Upsert \u5199\u5165\u65f6\u4e0d\u9700\u8981\u4e0e\u5386\u53f2\u5408\u5e76\uff0c\u5e26\u6765\u5f88\u9ad8\u7684\u5199\u541e\u5410\uff0c\u4f46\u662f MOR \u8bfb\u65f6\u9700\u8981\u505a\u591a\u4e2a\u6587\u4ef6\u7684\u6709\u5e8f\u5f52\u5e76\uff0c\u5728\u6587\u4ef6\u6570\u8f83\u591a\u7684\u60c5\u51b5\u4e0b\uff0c\u5c24\u5176\u662f\u5728\u9ad8\u5ef6\u8fdf\u5bf9\u8c61\u5b58\u50a8\u7684\u573a\u666f\u4e0b\uff0c\u8bfb\u6027\u80fd\u6709\u8f83\u5927\u7684\u5f71\u54cd\uff0c\u9700\u8981\u4f18\u5316\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u539f\u65b9\u6848\u4e0e Spark \u8026\u5408\u8f83\u7d27\uff0c\u4e0d\u65b9\u4fbf\u5728 Flink \u7b49\u5176\u4ed6\u8ba1\u7b97\u5f15\u64ce\u4e2d\u590d\u7528\u8bfb\u5199\u903b\u8f91\uff0c\u5c24\u5176\u662f\u8f83\u4e3a\u590d\u6742\u7684 MOR \u8bfb\u903b\u8f91\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u539f\u65b9\u6848\u91c7\u7528 Java \u5b9e\u73b0\uff0c\u4e0d\u65b9\u4fbf\u5bf9\u63a5\u5176\u4ed6\u8bed\u8a00\u5982 C++ \u5b9e\u73b0\u7684\u8ba1\u7b97\u5f15\u64ce\u3002")),(0,o.kt)("p",null,"\u7efc\u5408\u8003\u8651\u4ee5\u4e0a\u51e0\u4e2a\u95ee\u9898\uff0cLakeSoul \u9009\u62e9\u4f7f\u7528 Native Code \uff08Rust \u8bed\u8a00\uff09\u91cd\u65b0\u5b9e\u73b0 IO \u5c42\u7684\u8bfb\u5199\u903b\u8f91\uff0c\u5e76\u5411\u4e0a\u5c42\u63d0\u4f9b\u57fa\u4e8e CFFI \u7684\u63a5\u53e3\uff0c\u4ee5\u65b9\u4fbf Java\u3001Python \u7b49\u5176\u4ed6\u8bed\u8a00\u8fdb\u884c\u8fdb\u4e00\u6b65\u5c01\u88c5\uff0c\u4ece\u800c\u4e0e\u8ba1\u7b97\u5f15\u64ce\u5bf9\u63a5\u3002\u5177\u4f53\u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0\u5305\u62ec\u5982\u4e0b\u51e0\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528 Apache Arrow \u548c Rust"),(0,o.kt)("p",{parentName:"li"},"LakeSoul \u4f7f\u7528 Parquet \u4f5c\u4e3a\u7269\u7406\u5b58\u50a8\u683c\u5f0f\uff0c\u56e0\u6b64\u6211\u4eec\u9009\u62e9\u4f7f\u7528 Arrow \u4f5c\u4e3a IO \u7684\u5185\u5b58\u4e2d\u95f4\u8868\u793a\u5c42\uff0c\u4e00\u65b9\u9762\u662f\u56e0\u4e3a Arrow \u4f5c\u4e3a\u6210\u719f\u7684\u5185\u5b58\u5217\u683c\u5f0f\uff0c\u6709\u4e30\u5bcc\u7684\u5e93\u652f\u6301\uff0c\u4f8b\u5982 Rust \u7684\u5b9e\u73b0 Arrow-rs\uff0c\u53e6\u4e00\u65b9\u9762\u9009\u7528\u5217\u5f0f\u683c\u5f0f\u53ef\u4ee5\u83b7\u5f97\u5411\u91cf\u5316\u52a0\u901f\u7684\u80fd\u529b\uff0c\u4e5f\u80fd\u591f\u5f88\u65b9\u4fbf\u7684\u5bf9\u63a5\u5411\u91cf\u5316\u8ba1\u7b97\u5f15\u64ce\u3002"),(0,o.kt)("p",{parentName:"li"},"LakeSoul \u4f9d\u8d56 Arrow \u7684 Rust \u5b9e\u73b0\uff0c\u5373 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/arrow-rs"},"arrow-rs"),"\uff0c\u5176\u4e2d\u5df2\u7ecf\u5305\u542b\u4e86 Parquet Reader\u3001Writer\uff0c\u4ee5\u53ca\u5bf9\u8c61\u5b58\u50a8\u7684\u62bd\u8c61\u5c42 object_store\uff0c\u80fd\u591f\u5f88\u597d\u5730\u652f\u6301\u8bf8\u5982 S3 \u7b49\u4e91\u539f\u751f\u5bf9\u8c61\u5b58\u50a8\u3002\u800c\u9009\u62e9 Rust \u5b9e\u73b0\uff0c\u4e3b\u8981\u8003\u8651\u662f Rust \u5bf9\u5f02\u6b65\u7684\u652f\u6301\u8f83\u4e3a\u5b8c\u5584\uff0c\u5bf9\u5bf9\u8c61\u5b58\u50a8\u7684\u64cd\u4f5c\u5747\u53ef\u5b9e\u73b0\u4e3a async \u63a5\u53e3\uff0c\u80fd\u591f\u901a\u8fc7\u5f02\u6b65\u7684\u65b9\u5f0f\u5bf9 IO \u8fdb\u884c\u8fdb\u4e00\u6b65\u4f18\u5316\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"LakeSoul Native Writer"),(0,o.kt)("p",{parentName:"li"},"LakeSoul \u7684 Native Writer\uff0c\u901a\u8fc7 Arrow-rs \u4e2d\u7684 object_store \u5e93\u6240\u5c01\u88c5\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.amazonaws.cn/AmazonS3/latest/userguide/mpuoverview.html"},"MultipartUpload")," \u529f\u80fd\u6765\u5b9e\u73b0\u5355\u6587\u4ef6\u5e76\u53d1\u5199\u3002\u5177\u4f53\u6765\u8bf4\uff0cParquet \u6587\u4ef6\u53ef\u4ee5\u7ec4\u7ec7\u6210\u591a\u4e2a RowGroup\uff0c\u6bcf\u4e2a RowGroup \u4f1a\u63d0\u524d\u5728\u5185\u5b58\u4e2d\u5e8f\u5217\u5316\u4e3a\u4e00\u4e2a\u8fde\u7eed\u7684 buffer\u3002LakeSoul \u5c06\u4e00\u4e2a RowGroup buffer \u4f5c\u4e3a\u4e00\u4e2a\u5bf9\u8c61\u5b58\u50a8\u7684 part\uff0c\u63d0\u4ea4\u7ed9\u540e\u53f0\u7ebf\u7a0b\u5f02\u6b65\u4e0a\u4f20\uff0c\u4e0e\u6b64\u540c\u65f6\u8ba1\u7b97\u7ebf\u7a0b\u53ef\u4ee5\u7ee7\u7eed\u7ec4\u7ec7\u4e0b\u4e00\u4e2a RowGroup \u7684\u5185\u5bb9\uff0c\u4ece\u800c\u5b9e\u73b0\u4e86\u5355\u6587\u4ef6\u5728\u5bf9\u8c61\u5b58\u50a8\u4e0a\u5e76\u53d1\u5199\u5165\u3002"),(0,o.kt)("p",{parentName:"li"},"LakeSoul Native Writer \u652f\u6301\u5728\u5199\u5165\u65f6\u5bf9\u4e3b\u952e\u8fdb\u884c\u6392\u5e8f\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/arrow-datafusion"},"Arrow DataFusion")," \u5e93\u7684 Sort \u5b9e\u73b0\uff0c\u5176\u652f\u6301\u5c06\u6392\u5e8f\u4e2d\u95f4\u7ed3\u679c\u6ea2\u5199\uff08spill\uff09\u5230\u78c1\u76d8\uff0c\u8fd9\u6837 Writer \u53ef\u4ee5\u652f\u6301\u5927\u6279\u91cf\u7684\u6570\u636e\u5199\u5165\uff0c\u8fd9\u5728 Flink Sink \u4e2d\u6709\u6bd4\u8f83\u91cd\u8981\u7684\u610f\u4e49\u3002\u5176\u539f\u56e0\u662f\u4e3b\u952e\u7684\u6392\u5e8f\u53ea\u662f\u5bf9\u540c\u4e00\u6279\u5199\u5165\u7684\u6587\u4ef6\u6392\u5e8f\uff0c\u800c LakeSoul \u7684 Flink Sink \u4ec5\u5728 Flink \u6267\u884c checkpoint \u65f6\u5199\u51fa\u6587\u4ef6\uff0c\u800c\u4e24\u6b21 checkpoint \u95f4\u9694\u53ef\u80fd\u5f88\u957f\u3002\u901a\u8fc7\u78c1\u76d8\u6ea2\u5199\uff0c\u907f\u514d\u4e86\u5360\u7528\u8fc7\u5927\u5185\u5b58\u5bfc\u81f4 OOM \u7684\u95ee\u9898\u3002"),(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5bf9\u8c61\u5b58\u50a8\u7684 MultipartUpload \u8fd8\u6709\u4e00\u4e2a\u4f18\u52bf\uff0c\u5c31\u662f\u6d88\u9664\u4e86 staging \u4e2d\u95f4\u6587\u4ef6\u4ee5\u53ca commit \u65f6\u7684\u6587\u4ef6\u62f7\u8d1d\u5f00\u9500\u3002Staging \u6587\u4ef6\u539f\u5148\u662f\u4e3a\u4e86\u907f\u514d\u5728\u76ee\u6807\u8868\u6216\u5206\u533a\u76ee\u5f55\u4e0b\u51fa\u73b0\u5c1a\u672a\u5b8c\u6574\u5199\u5165\u7684\u7ed3\u679c\uff0c\u907f\u514d\u5f15\u8d77\u4e0b\u6e38\u8bfb\u5230\u4e0d\u5b8c\u6574\u7684\u6570\u636e\u3002\u65e0\u8bba\u662f Flink \u8fd8\u662f Spark\uff0c\u5728\u5199 Staging \u6587\u4ef6\u65f6\u9700\u8981\u5148\u5728\u4e00\u4e2a\u4e34\u65f6\u76ee\u5f55\u4e0b\u5199\u5165\uff0ccommit \u65f6\u518d\u91cd\u547d\u540d\u4e34\u65f6\u76ee\u5f55\u4e3a\u6700\u7ec8\u76ee\u6807\u76ee\u5f55\uff0c\u8fd9\u6837\u4f1a\u5e26\u6765\u6ea2\u5199\u989d\u5916\u7684\u5f00\u9500\uff0c\u5c24\u5176\u662f\u5bf9\u8c61\u5b58\u50a8\u4e0d\u652f\u6301\u539f\u5b50\u91cd\u547d\u540d\u65f6\uff0c\u9700\u8981\u5b8c\u6574\u62f7\u8d1d\u4e00\u904d\u6570\u636e\u3002\u5e76\u4e14 Staging \u6587\u4ef6\u4e5f\u4f7f\u5f97 Flink Sink \u72b6\u6001\u7ef4\u62a4\u66f4\u4e3a\u590d\u6742\u3002LakeSoul \u652f\u6301 MultipartUpload \u7684 abort \u64cd\u4f5c\uff0c\u5982\u679c\u4e2d\u95f4\u53d6\u6d88\u5199\u5165\uff0c\u5219\u4f1a abort \u672a\u5199\u5b8c\u7684\u6587\u4ef6\uff0c\u5e76\u4e14 LakeSoul \u7684\u5143\u6570\u636e\u5c42\u5728 Spark\u3001Flink \u4e2d\u5747\u5b9e\u73b0\u4e86\u4e24\u9636\u6bb5\u63d0\u4ea4\u534f\u8bae\u6765\u4fdd\u8bc1\u4e00\u81f4\u6027\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"LakeSoul Native Reader"),(0,o.kt)("p",{parentName:"li"},"Reader \u90e8\u5206\uff0c\u6211\u4eec\u4e3b\u8981\u9488\u5bf9\u5bf9\u8c61\u5b58\u50a8\u8bbf\u95ee Parquet \u6587\u4ef6\u548c MOR \u591a\u4e2a\u6709\u5e8f\u6587\u4ef6\u5f52\u5e76\u8fd9\u4e24\u4e2a\u65b9\u9762\u505a\u4e86\u4f18\u5316\u3002"),(0,o.kt)("p",{parentName:"li"},"\u5bf9\u8c61\u5b58\u50a8\u901a\u5e38\u6709\u7740\u8f83\u9ad8\u7684\u5ef6\u8fdf\uff0carrow-rs \u4e2d\u7684 object_store \u5e93\u5df2\u7ecf\u505a\u4e86\u5305\u62ec\u5c0f\u8bf7\u6c42\u5408\u5e76\uff08coalesce\uff09\u548c\u5e76\u53d1\u8bf7\u6c42\u7684\u4f18\u5316\uff0c\u5728\u6211\u4eec\u5b9e\u9645\u6d4b\u8bd5\u4e2d\u6548\u679c\u4ecd\u4e0d\u591f\u7406\u60f3\u3002\u56e0\u6b64\u6211\u4eec\u505a\u4e86\u4e24\u65b9\u9762\u7684\u8fdb\u4e00\u6b65\u4f18\u5316\uff1a"),(0,o.kt)("p",{parentName:"li"},"\u4e00\u662f\u62c6\u5206\u8bfb\u8bf7\u6c42\u4e3a\u591a\u4e2a\u5e76\u53d1\u8bf7\u6c42\u3002\u5bf9\u8c61\u5b58\u50a8\u7684\u5e95\u5c42\u5b9e\u9645\u662f HTTP \u534f\u8bae\uff0c\u53ef\u4ee5\u5728 HTTP \u8bf7\u6c42\u4f53\u4e2d\u6307\u5b9a\u8981\u8bbf\u95ee\u7684\u5bf9\u8c61\u6587\u4ef6\u7684\u8303\u56f4\u3002\u6211\u4eec\u5c06\u5355\u4e2a\u8bf7\u6c42\u7684\u8303\u56f4\u5927\u5c0f\u9650\u5b9a\u5728 8M \u4ee5\u5185\uff0c\u5927\u4e8e 8M \u7684\u8bf7\u6c42\u4f1a\u81ea\u52a8\u62c6\u5206\u6210\u591a\u4e2a\u5e76\u53d1\u8bf7\u6c42\uff0c\u907f\u514d\u4e00\u6b21\u8bf7\u6c42\u4e2d\u8bbf\u95ee\u592a\u5927\u7684\u6587\u4ef6\u8303\u56f4\u9020\u6210\u957f\u65f6\u95f4\u7684\u963b\u585e\u7b49\u5f85\u3002"),(0,o.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u4e2a\u4f18\u5316\u662f\u5bf9 Parquet \u7684 RowGroup \u505a\u540e\u53f0\u5f02\u6b65 prefetch\u3002\u8fd9\u4e2a\u540c\u6837\u4e5f\u662f\u4e3a\u4e86\u80fd\u591f\u8ba9\u8ba1\u7b97\u7ebf\u7a0b\u548c IO \u7ebf\u7a0b\u80fd\u591f\u540c\u65f6\u5de5\u4f5c\uff0c\u7528\u9884\u53d6\u63a9\u76d6\u5ef6\u8fdf\u3002\u9ed8\u8ba4\u4f1a\u9884\u53d6\u4e00\u4e2a RowGroup\uff0c\u907f\u514d\u5360\u7528\u8fc7\u5927\u5185\u5b58\u3002"),(0,o.kt)("p",{parentName:"li"},"\u5728 MOR \u6709\u5e8f\u5f52\u5e76\u65b9\u9762\uff0c\u6211\u4eec\u57fa\u4e8e arrow-rs \u5b9e\u73b0\u4e86\u591a\u4e2a Arrow RecordBatch \u5f02\u6b65\u6d41\u7684\u5f52\u5e76\u3002\u5b9e\u73b0\u65f6\u91c7\u7528\u4e86 arrow-rs \u63d0\u4f9b\u7684 Row Format \u6765\u4f18\u5316\u4e3b\u952e\u7684\u5e8f\u5173\u7cfb\u6bd4\u8f83\u6027\u80fd\uff0c\u4f7f\u7528 interleave \u6765\u4f18\u5316\u591a\u4e2a\u6d41\u5408\u5e76\u4e3a\u4e00\u4e2a RecordBatch \u7684\u6027\u80fd\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Spark\u3001Flink \u5f15\u64ce\u5bf9\u63a5 Native IO \u5c42"),(0,o.kt)("p",{parentName:"li"},"\u524d\u9762\u63d0\u5230\uff0cNative IO \u5c42\u91c7\u7528 Rust \u5b9e\u73b0\u3002\u5728\u5176\u4e4b\u4e0a\uff0c\u6211\u4eec\u5c01\u88c5\u4e86\u4e00\u5c42 C \u63a5\u53e3\uff0c\u63d0\u4f9b\u8bfb\u548c\u5199\u7684\u529f\u80fd\u3002\u5176\u4e2d\u8bfb\u53d6\u65f6\u652f\u6301\u540c\u6b65\u963b\u585e\u548c\u5f02\u6b65\u56de\u8c03\u4e24\u79cd\u65b9\u5f0f\uff0c\u65b9\u4fbf\u4e0a\u5c42\u6839\u636e\u9700\u8981\u9009\u62e9\uff08\u5199\u65f6\u53ea\u63d0\u4f9b\u963b\u585e\u63a5\u53e3\uff0c\u56e0\u4e3a\u5e95\u5c42\u5df2\u7ecf\u505a\u4e86 Multipart \u4e0a\u4f20\u7684\u5e76\u53d1\uff09\u3002\u5728 C \u63a5\u53e3\u4e4b\u4e0a\uff0c\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jnr/jnr-ffi"},"jnr-ffi")," \u5b9e\u73b0\u4e86 Java \u63a5\u53e3\u3002\u6700\u540e\u5728 Spark\u3001Flink \u4fa7\u5206\u522b\u5b9e\u73b0\u4e86 Reader \u548c Writer \u7684\u5bf9\u63a5\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"LakeSoul IO \u6027\u80fd\u8bc4\u6d4b"),(0,o.kt)("p",{parentName:"li"},"LakeSoul \u7684 Native IO \u5c42\u5bf9 Parquet \u6587\u4ef6\u683c\u5f0f\u5b9e\u73b0\u4e86\u5411\u91cf\u5316\u7684\u8bfb\u5199\uff0c\u5e76\u5bf9\u5bf9\u8c61\u5b58\u50a8\u505a\u4e86\u5f02\u6b65\u5e76\u53d1\u3001\u9884\u53d6\u7b49\u6027\u80fd\u4f18\u5316\u3002\u5bf9 Parquet \u6587\u4ef6\u7684\u76f4\u63a5\u8bfb\u5199\uff0c\u76f8\u6bd4 Spark\u3001Flink \u4e2d\u539f\u751f\u7684 parquet-mr \u548c Hadoop S3A \u7684\u5b9e\u73b0\uff0c\u6709\u7740\u663e\u8457\u7684\u6027\u80fd\u63d0\u5347\uff1a"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"nativeio-vs-parquet-mr",src:a(1604).Z,width:"1042",height:"782"})),(0,o.kt)("p",{parentName:"li"}," \u6211\u4eec\u4e5f\u505a\u4e86 LakeSoul \u4e0e Hudi\u3001Iceberg \u5728 COW\u3001MOR \u573a\u666f\u4e0b\u7684\u8bfb\u5199\u6027\u80fd\u5bf9\u6bd4\u8bc4\u6d4b\u3002\u8bc4\u6d4b\u573a\u666f\u662f\u9996\u5148\u5199\u5165 1000 \u4e07\u6761\u6570\u636e\uff0c\u7136\u540e Upsert 10 \u6b21\uff0c\u6bcf\u6b21 200 \u4e07\u884c\u3002\u8be5\u6027\u80fd\u8bc4\u6d4b\u7684\u6570\u636e\u548c\u4ee3\u7801\u5747\u5df2\u516c\u5f00\uff0c\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://github.com/meta-soul/ccf-bdci2022-datalake-contest-examples/tree/mor"},"\u6027\u80fd\u8bc4\u6d4b\u4ee3\u7801\u5e93"),"\u3002\u6027\u80fd\u5bf9\u6bd4\u5982\u4e0b\uff1a"),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{alt:"write-perf",src:a(8319).Z,width:"883",height:"774"})),(0,o.kt)("p",{parentName:"li"}," \u5199\u6027\u80fd\u65b9\u9762\uff0c\u5bf9\u4e8e COW \u6a21\u5f0f\uff0c\u4e09\u4e2a\u6846\u67b6\u90fd\u9700\u8981\u5168\u91cf\u91cd\u5199\u6570\u636e\uff0c\u8ba1\u7b97\u5f00\u9500\u57fa\u672c\u4e00\u81f4\uff0cLakeSoul \u501f\u52a9 Native IO \u7684\u4f18\u5316\uff0c\u6027\u80fd\u662f\u6700\u597d\u7684\u3002\u5bf9\u4e8e MOR \u6a21\u5f0f\uff0cLakeSoul \u91c7\u7528\u7684\u4e3b\u952e\u5206\u6876\u6392\u5e8f\u6a21\u5f0f\uff0c\u4e0d\u9700\u8981\u7ef4\u62a4\u7d22\u5f15\u66f4\u65b0\uff0c\u56e0\u6b64\u53d6\u5f97\u4e86\u5f88\u9ad8\u7684\u5199\u541e\u5410\uff0c\u663e\u8457\u4f18\u4e8e\u5176\u4ed6\u4e24\u4e2a\u6846\u67b6\u3002"),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{alt:"read-perf",src:a(589).Z,width:"883",height:"774"})),(0,o.kt)("p",{parentName:"li"}," \u8bfb\u6027\u80fd\u65b9\u9762\uff0c\u5bf9\u4e8e COW \u6a21\u5f0f\uff0c\u90fd\u662f\u8bfb\u53d6\u5408\u5e76\u540e\u7684\u6587\u4ef6\uff0c\u6ca1\u6709 merge \u5f00\u9500\uff0cLakeSoul \u540c\u6837\u5f97\u76ca\u4e8e IO \u5c42\u4f18\u5316\u53d6\u5f97\u9886\u5148\u3002\u800c\u5bf9\u4e8e MOR \u6a21\u5f0f\uff0c\u867d\u7136 LakeSoul \u7684\u6709\u5e8f\u5408\u5e76\u76f8\u6bd4 Hudi \u7684 bloom filter \u8fc7\u6ee4\u548c Iceberg \u7684 pos-delete \u8fc7\u6ee4\u5728\u7406\u8bba\u6027\u80fd\u4e0a\u6709\u52a3\u52bf\uff0c\u4f46\u662f LakeSoul \u51ed\u501f IO \u5c42\u7684\u591a\u9879\u4f18\u5316\uff0c\u8bfb\u6027\u80fd\u4ecd\u7136\u9886\u5148 Iceberg 1\u500d\u3002"),(0,o.kt)("p",{parentName:"li"}," \u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0cLakeSoul \u5728\u8bfb\u5199\u8fc7\u7a0b\u4e2d\uff0cCPU\u3001\u5185\u5b58\u5360\u7528\u4e5f\u90fd\u662f\u4e09\u4e2a\u6846\u67b6\u4e4b\u4e2d\u6700\u5c0f\u7684\u3002\u53e6\u5916\uff0cLakeSoul \u7684 MOR \u8bfb\uff0c\u5c06\u589e\u91cf\u6570\u636e\u62c6\u5206\u4e3a 100 \u6b21 Upsert \u5199\u5165\u540e\uff0c\u8bfb\u6027\u80fd\u4ec5\u6709\u7ea6 15% \u7684\u4e0b\u964d\uff0c\u4e5f\u610f\u5473\u7740 LakeSoul \u53ef\u4ee5\u5728\u9ad8\u9891\u5199\u5165\u66f4\u65b0\uff0c\u5e76\u4e14\u6ca1\u6709 compaction \u7684\u60c5\u51b5\u4e0b\uff0c\u4ecd\u7136\u4fdd\u8bc1\u8f83\u597d\u7684\u8bfb\u6027\u80fd\u3002"))),(0,o.kt)("h3",{id:"2-\u5feb\u7167\u548c\u589e\u91cf\u8bfb\u53d6\u529f\u80fd\u4ecb\u7ecd"},"2. \u5feb\u7167\u548c\u589e\u91cf\u8bfb\u53d6\u529f\u80fd\u4ecb\u7ecd"),(0,o.kt)("p",null,"LakeSoul 2.2.0 \u9488\u5bf9\u5feb\u7167\u3001\u589e\u91cf\u573a\u666f\uff0c\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u65b0\u7684\u63a5\u53e3\u3002LakeSoul \u91c7\u7528\u4e86 MVCC \u7684\u591a\u7248\u672c\u63a7\u5236\u673a\u5236\uff0c\u4f1a\u5728\u5143\u6570\u636e\u4e2d\u8bb0\u5f55\u6bcf\u4e2a\u7248\u672c\u6240\u5bf9\u5e94\u7684\u6587\u4ef6\u3002\u56e0\u6b64\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u652f\u6301\u5feb\u7167\u8bfb\uff08\u53c8\u79f0 Time Travel\uff09\uff0c\u5373\u8bfb\u53d6\u4e4b\u524d\u67d0\u4e2a\u65f6\u95f4\u70b9\u7684\u6570\u636e\u5feb\u7167\u7248\u672c\u3002LakeSoul \u8fd8\u80fd\u591f\u652f\u6301\u56de\u6eda\u5230\u67d0\u4e2a\u65f6\u95f4\u70b9\u7684\u6570\u636e\uff0c\u65b9\u4fbf\u5728\u6700\u65b0\u6570\u636e\u6709\u95ee\u9898\u65f6\u8fd8\u539f\u5230\u4e4b\u524d\u7684\u6b63\u786e\u7248\u672c\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5feb\u7167\u8bfb\u3001\u5feb\u7167\u56de\u6eda\u3001\u5feb\u7167\u6e05\u7406\uff0c\u4f7f\u7528\u8005\u53ea\u9700\u8981\u63d0\u4f9b\u5feb\u7167\u7684\u65f6\u95f4\u70b9\uff0c\u7528\u65f6\u95f4\u6233\u5b57\u7b26\u4e32\u8868\u793a\uff0c\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"p"},'"2022-01-01 15:15:15"'),"\uff0c\u8be5\u65f6\u95f4\u6233\u4e0d\u9700\u8981\u4e0e\u5b9e\u9645\u5199\u5165\u65f6\u95f4\u4e25\u683c\u5bf9\u5e94\uff0c\u8fd9\u4e2a\u65f6\u95f4\u4f1a\u4f5c\u4e3a\u5199\u5165\u7248\u672c\u7684\u65f6\u95f4\u6233\u4e0a\u754c\uff0cLakeSoul \u4f1a\u81ea\u52a8\u627e\u5230\u5c0f\u4e8e\u7b49\u4e8e\u8be5\u65f6\u95f4\u6233\u6240\u5bf9\u5e94\u7684\u5feb\u7167\u7248\u672c\u3002"),(0,o.kt)("p",null,"\u5feb\u7167\u76f8\u5173\u7684\u529f\u80fd\u70b9\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://lakesoul-io.github.io/zh-Hans/docs/Tutorials/snapshot-manage"},"\u5feb\u7167\u4f7f\u7528\u6559\u7a0b")),(0,o.kt)("p",null,"LakeSoul \u8fd8\u63d0\u4f9b\u4e86\u589e\u91cf\u8bfb\u53d6\u529f\u80fd\u3002\u5728\u6d41\u5f0f ETL \u4e2d\uff0c\u589e\u91cf\u8bfb\u53d6\u529f\u80fd\u5177\u6709\u91cd\u8981\u610f\u4e49\uff0c\u589e\u91cf\u8bfb\u80fd\u591f\u8ba9\u6574\u4e2a ETL \u94fe\u8def\u90fd\u8f6c\u4e3a\u589e\u91cf\u8ba1\u7b97\uff0c\u63d0\u9ad8\u5b9e\u65f6\u6027\u7684\u540c\u65f6\u8fd8\u80fd\u8282\u7ea6\u8ba1\u7b97\u8d44\u6e90\u3002LakeSoul 2.2.0 \u652f\u6301\u5728 Spark \u4e2d\u7684\u589e\u91cf batch \u8bfb\u53d6\u3001\u589e\u91cf\u6d41\u5f0f\u8bfb\u53d6\u3002\u589e\u91cf\u6d41\u5f0f\u8bfb\u53d6\u65f6\uff0cLakeSoul \u4f1a\u4f5c\u4e3a Spark \u7684 Streaming \u6570\u636e\u6e90\uff0c\u81ea\u52a8\u53d1\u73b0\u5e76\u8bfb\u53d6\u8868\u7684\u589e\u91cf\u6570\u636e\u3002\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://lakesoul-io.github.io/zh-Hans/docs/Tutorials/incremental-query"},"\u589e\u91cf\u67e5\u8be2\u6559\u7a0b"),"\u3002"),(0,o.kt)("p",null,"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u4e0d\u540c\u4e8e Hudi\u3001Iceberg\uff0cLakeSoul \u5bf9\u4e8e\u4e3b\u952e\u8868\u3001\u975e\u4e3b\u952e\u8868\u5747\u53ef\u652f\u6301\u589e\u91cf\u8bfb\uff0c\u5bf9\u4e8e LakeSoul CDC \u8868\uff08",(0,o.kt)("a",{parentName:"p",href:"https://lakesoul-io.github.io/zh-Hans/docs/Tutorials/flink-cdc-sink"},"\u53c2\u8003 LakeSoul CDC \u8868\u683c\u5f0f"),"\uff09\uff0c\u4e5f\u540c\u6837\u80fd\u591f\u589e\u91cf\u8bfb\u53d6 CDC \u6d41\uff0c\u8fd9\u4e2a\u6d41\u8868\u793a\u4e86 LakeSoul \u8868\u672c\u8eab\u7684\u589e\u91cf\u4fee\u6539\uff0c\u5305\u62ec insert\u3001update \u548c delete \u64cd\u4f5c\uff0c\u80fd\u591f\u652f\u6301\u4e0b\u6e38\u7075\u6d3b\u7684\u589e\u91cf\u8ba1\u7b97\u3002\u5728\u4e0b\u4e00\u4e2a\u7248\u672c\uff0cLakeSoul \u5c06\u652f\u6301 LakeSoul \u8868\u7684 CDC \u589e\u91cf\u6d41\u5f0f\u8bfb\u53d6\u4e3a Flink ChangeLog Stream\uff0c\u501f\u52a9 Flink SQL \u5373\u53ef\u5b8c\u6210\u9ad8\u6548\u7684\u6d41\u5f0f\u589e\u91cf ETL \u5f00\u53d1\u3002"),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"LakeSoul 2.2.0 \u53d1\u5e03\u4e86\u5168\u65b0\u7684 Native IO \uff0c\u8fdb\u4e00\u6b65\u6269\u5927\u4e86\u4e91\u539f\u751f\u6e56\u4ed3\u6846\u67b6\u9886\u57df\u7684\u6027\u80fd\u4f18\u52bf\u3002\u63d0\u4f9b\u4e86\u5feb\u7167\u548c\u589e\u91cf\u7684\u63a5\u53e3\uff0c\u80fd\u591f\u66f4\u597d\u5730\u652f\u6301\u6d41\u5f0f\u6570\u636e\u5efa\u6a21\u5f00\u53d1\u3002"),(0,o.kt)("p",null,"\u5728\u4e0b\u4e2a\u7248\u672c\uff0cLakeSoul \u5c06\u4f1a\u53d1\u5e03\u5168\u5c40\u81ea\u52a8 Compaction\uff0cFlink Stream SQL Source \u7b49\u91cd\u8981\u529f\u80fd\uff0c\u656c\u8bf7\u671f\u5f85\u3002"))}c.isMDXComponent=!0},1604:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/nativeio-vs-parquet-mr-3b41190f2d2c1dc51291e1d1af4cd929.png"},589:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/read-perf-10e6a3361ed4f6d7ca1d6ab38571472b.png"},8319:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/writer-perf-a56ed140af5beb2401506de10c079215.png"}}]);