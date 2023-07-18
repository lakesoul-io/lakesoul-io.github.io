"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),k=a,d=s["".concat(u,".").concat(k)]||s[k]||m[k]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8633:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"intro",sidebar_position:1},l="LakeSoul \u4ecb\u7ecd",i={unversionedId:"intro",id:"intro",title:"LakeSoul \u4ecb\u7ecd",description:"\x3c!--",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/00-intro.md",sourceDirName:".",slug:"/intro",permalink:"/zh-Hans/docs/intro",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/00-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u642d\u5efa\u672c\u5730\u6d4b\u8bd5\u73af\u5883",permalink:"/zh-Hans/docs/Getting Started/setup-local-env"}},u={},c=[{value:"LakeSoul \u7684\u9002\u7528\u573a\u666f",id:"lakesoul-\u7684\u9002\u7528\u573a\u666f",level:2}],p={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lakesoul-\u4ecb\u7ecd"},"LakeSoul \u4ecb\u7ecd"),(0,a.kt)("p",null,"LakeSoul \u662f\u7531\u6570\u5143\u7075\u79d1\u6280\u7814\u53d1\u5e76\u4e8e 2023 \u5e74 5 \u6708\u6350\u8d60\u7ed9 Linux Foundation AI & Data \u57fa\u91d1\u4f1a\u7684\u4e00\u4e2a\u7684\u4e91\u539f\u751f\u6e56\u4ed3\u4e00\u4f53\u6846\u67b6\uff0c\u5177\u5907\u9ad8\u53ef\u6269\u5c55\u7684\u5143\u6570\u636e\u7ba1\u7406\u3001ACID \u4e8b\u52a1\u3001\u9ad8\u6548\u7075\u6d3b\u7684 upsert \u64cd\u4f5c\u3001Schema \u6f14\u8fdb\u548c\u6279\u6d41\u4e00\u4f53\u5316\u5904\u7406\u7b49\u7279\u6027\u3002"),(0,a.kt)("h1",{id:"lakesoul-\u7684\u4e3b\u8981\u7279\u6027"},"LakeSoul \u7684\u4e3b\u8981\u7279\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f39\u6027\u67b6\u6784\uff1a\u8ba1\u7b97\u5b58\u50a8\u5b8c\u5168\u5206\u79bb\uff0c\u4e0d\u9700\u8981\u56fa\u5b9a\u8282\u70b9\u548c\u78c1\u76d8\uff0c\u8ba1\u7b97\u5b58\u50a8\u5404\u81ea\u5f39\u6027\u6269\u5bb9\u3002\u5e76\u4e14\u9488\u5bf9\u4e91\u5b58\u50a8\u505a\u4e86\u5927\u91cf\u4f18\u5316\uff0c\u5728\u5bf9\u8c61\u5b58\u50a8\u4e0a\u5b9e\u73b0\u4e86\u5e76\u53d1\u4e00\u81f4\u6027\u3001\u589e\u91cf\u66f4\u65b0\u7b49\u529f\u80fd\uff1b\u4f7f\u7528 LakeSoul \u4e0d\u9700\u8981\u7ef4\u62a4\u56fa\u5b9a\u7684\u5b58\u50a8\u8282\u70b9\uff0c\u4e91\u4e0a\u5bf9\u8c61\u5b58\u50a8\u7684\u6210\u672c\u53ea\u6709\u672c\u5730\u78c1\u76d8\u7684 1/10\uff0c\u6781\u5927\u5730\u964d\u4f4e\u4e86\u5b58\u50a8\u6210\u672c\u548c\u8fd0\u7ef4\u6210\u672c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u9ad8\u6548\u53ef\u6269\u5c55\u7684\u5143\u6570\u636e\u7ba1\u7406\uff1aLakeSoul \u4f7f\u7528 Postgres \u6570\u636e\u5e93\u6765\u7ba1\u7406\u6587\u4ef6\u5143\u6570\u636e\uff0c\u53ef\u4ee5\u9ad8\u6548\u7684\u5904\u7406\u5143\u6570\u636e\u7684\u4fee\u6539\uff0c\u5e76\u80fd\u591f\u652f\u6301\u591a\u5e76\u53d1\u5199\u5165\uff0c\u89e3\u51b3\u4e86 Hive \u7b49\u5143\u6570\u636e\u5c42\u7684\u6027\u80fd\u74f6\u9888\uff0c\u5982\u957f\u65f6\u95f4\u8fd0\u884c\u540e\u5143\u6570\u636e\u89e3\u6790\u7f13\u6162\u7684\u75db\u70b9\u3002\u5143\u6570\u636e\u5c42\u7684\u8868\u7ed3\u6784\u7ecf\u8fc7\u7cbe\u5fc3\u8bbe\u8ba1\uff0c\u6240\u6709\u8bfb\u5199\u64cd\u4f5c\u90fd\u80fd\u591f\u4f7f\u7528\u4e3b\u952e\u7d22\u5f15\uff0c\u8fbe\u5230\u5f88\u9ad8\u7684 Ops\u3002\u540c\u65f6\uff0c\u5143\u6570\u636e\u5e93\u5728\u4e91\u4e0a\u4e5f\u80fd\u591f\u5f88\u5bb9\u6613\u5730\u8fdb\u884c\u6269\u5bb9\u3002"),(0,a.kt)("li",{parentName:"ul"},"ACID \u4e8b\u52a1\uff1a\u901a\u8fc7\u5143\u6570\u636e\u5e93\u4e8b\u52a1\u673a\u5236\u5b9e\u73b0\u4e86\u4e24\u9636\u6bb5\u63d0\u4ea4\u534f\u8bae\uff0c\u4fdd\u8bc1\u4e86\u6d41\u6279\u4e00\u4f53\u63d0\u4ea4\u7684\u4e8b\u52a1\u6027\uff0c\u7528\u6237\u4e0d\u4f1a\u770b\u5230\u4e0d\u4e00\u81f4\u6570\u636e\uff1b\u652f\u6301\u591a\u5e76\u53d1\u5199\u5165\uff0c\u81ea\u52a8\u51b2\u7a81\u5904\u7406\u673a\u5236\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u7ea7\u5206\u533a\u6a21\u5f0f\u548c\u9ad8\u6548\u7075\u6d3b\u7684 upsert \u64cd\u4f5c\uff1aLakeSoul \u652f\u6301 range \u548c hash \u5206\u533a\uff0c\u901a\u8fc7\u7075\u6d3b\u7684 upsert \u529f\u80fd\uff0c\u652f\u6301\u884c\u3001\u5217\u7ea7\u522b\u7684\u589e\u3001\u5220\u3001\u6539\u7b49\u66f4\u65b0\u64cd\u4f5c\uff0c\u5c06 upsert \u6570\u636e\u4ee5 delta file \u7684\u5f62\u5f0f\u4fdd\u5b58\uff0c\u5927\u5e45\u63d0\u9ad8\u4e86\u5199\u6570\u636e\u6548\u7387\u548c\u5e76\u53d1\u6027\uff0c\u800c\u4f18\u5316\u8fc7\u7684 merge scan \u63d0\u4f9b\u4e86\u9ad8\u6548\u7684 MergeOnRead \u8bfb\u53d6\u6027\u80fd\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u6279\u6d41\u4e00\u4f53\uff1aLakeSoul \u652f\u6301 streaming sink\uff0c\u53ef\u4ee5\u540c\u65f6\u5904\u7406\u6d41\u5f0f\u6570\u636e\u6444\u5165\u548c\u5386\u53f2\u6570\u636e\u6279\u91cf\u56de\u586b\u3001\u4ea4\u4e92\u5f0f\u67e5\u8be2\u7b49\u573a\u666f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"Schema \u6f14\u8fdb\uff1a\u652f\u6301\u65b0\u589e\u3001\u5220\u9664\u5217\uff0c\u5e76\u5728\u8bfb\u53d6\u65f6\u81ea\u52a8\u517c\u5bb9\u65e7\u6570\u636e\uff1b"),(0,a.kt)("li",{parentName:"ul"},"CDC \u6d41\u3001\u65e5\u5fd7\u6d41\u81ea\u52a8\u540c\u6b65\uff1a\u652f\u6301 MySQL \u6574\u5e93\u5343\u8868\u540c\u6b65\uff0c\u81ea\u52a8\u5efa\u8868\u548c\u81ea\u52a8 Schema \u53d8\u66f4\uff1b\u652f\u6301 Kafka \u591a topic \u5408\u5e76\u540c\u6b65\u3001\u81ea\u52a8 Schema \u89e3\u6790\u3001\u81ea\u52a8\u65b0 Topic \u611f\u77e5\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd IO\uff1a\u4f7f\u7528 Rust Arrow \u5b9e\u73b0\u539f\u751f Parquet IO\uff0c\u5e76\u5bf9\u5bf9\u8c61\u5b58\u50a8\u8bbf\u95ee\u505a\u4e86\u4e13\u95e8\u4f18\u5316\uff0c\u6027\u80fd\u4f18\u52bf\u660e\u663e\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5b8c\u6574\u652f\u6301 Flink Changelog \u8bed\u4e49\uff0c\u80fd\u591f\u652f\u6301\u589e\u91cf\u6d41\u5f0f\u8bfb\u53d6\uff0c\u901a\u8fc7 Flink SQL \u5373\u53ef\u5b9e\u73b0\u5b9e\u65f6\u6570\u4ed3\u5168\u94fe\u8def\u589e\u91cf\u8ba1\u7b97\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u79cd\u8ba1\u7b97\u5f15\u64ce\u652f\u6301\uff1a\u76ee\u524d\u652f\u6301 Spark\u3001Flink \u4ee5\u6d41\u6216\u6279\u7684\u65b9\u5f0f\u8fdb\u884c\u8bfb\u548c\u5199\uff0c\u8fd1\u671f\u8fd8\u5c06\u589e\u52a0\u7eaf Python \u8bfb\u7b49\u529f\u80fd\u3002")),(0,a.kt)("h2",{id:"lakesoul-\u7684\u9002\u7528\u573a\u666f"},"LakeSoul \u7684\u9002\u7528\u573a\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6784\u5efa\u5b9e\u65f6\u6e56\u4ed3\uff0c\u5e76\u4e14\u65b0\u589e\u6570\u636e\u9700\u8981\u9ad8\u6548\u5b9e\u65f6\u5927\u6279\u91cf\u5199\u5165\uff0c\u540c\u65f6\u9700\u8981\u884c\u3001\u5217\u7ea7\u522b\u7684\u5e76\u53d1\u589e\u91cf\u66f4\u65b0\u7684\u573a\u666f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5386\u53f2\u6570\u636e\u5b58\u50a8\u91cf\u5f88\u5927\uff0c\u5e76\u4e14\u9700\u8981\u5bf9\u5927\u8de8\u5ea6\u65f6\u95f4\u8303\u56f4\u505a\u660e\u7ec6\u67e5\u8be2\u3001\u4fee\u6539\uff0c\u540c\u65f6\u5e0c\u671b\u4f7f\u7528\u5bf9\u8c61\u5b58\u50a8\u63a7\u5236\u6210\u672c\u7684\u573a\u666f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u8bf7\u6c42\u4e0d\u56fa\u5b9a\uff0c\u8d44\u6e90\u6d88\u8017\u53d8\u5316\u8f83\u5927\uff0c\u5e0c\u671b\u8ba1\u7b97\u8d44\u6e90\u80fd\u591f\u72ec\u7acb\u5f39\u6027\u4f38\u7f29\u7684\u573a\u666f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u591a\u5e76\u53d1\u5199\uff0c\u540c\u65f6\u6587\u4ef6\u6570\u91cf\u591a\uff0c\u5bf9\u5143\u6570\u636e\u6027\u80fd\u548c\u5e76\u53d1\u6709\u8f83\u9ad8\u8981\u6c42\u7684\u573a\u666f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u4e3b\u952e\u8fdb\u884c\u6570\u636e\u66f4\u65b0\uff0c\u5bf9\u5199\u541e\u5410\u6709\u8f83\u9ad8\u6709\u6c42\u7684\u573a\u666f\uff1b")))}m.isMDXComponent=!0}}]);