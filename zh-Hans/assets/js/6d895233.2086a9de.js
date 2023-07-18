"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[951],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),k=r,b=p["".concat(i,".").concat(k)]||p[k]||m[k]||l;return t?n.createElement(b,o(o({ref:a},c),{},{components:t})):n.createElement(b,o({ref:a},c))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=k;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5978:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=t(7462),r=(t(7294),t(3905));const l={},o="\u5feb\u7167\u76f8\u5173\u529f\u80fd\u7528\u6cd5\u6559\u7a0b",s={unversionedId:"Tutorials/snapshot-manage",id:"Tutorials/snapshot-manage",title:"\u5feb\u7167\u76f8\u5173\u529f\u80fd\u7528\u6cd5\u6559\u7a0b",description:"\x3c!--",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/02-Tutorials/03-snapshot-manage.md",sourceDirName:"02-Tutorials",slug:"/Tutorials/snapshot-manage",permalink:"/zh-Hans/docs/Tutorials/snapshot-manage",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/02-Tutorials/03-snapshot-manage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LakeSoul Flink CDC \u6574\u5e93\u540c\u6b65\u4f7f\u7528\u6559\u7a0b",permalink:"/zh-Hans/docs/Tutorials/flink-cdc-sink/"},next:{title:"\u5c06LakeSoul\u6570\u636e\u6302\u8f7d\u5230hive meta\u7528\u6cd5\u6559\u7a0b",permalink:"/zh-Hans/docs/Tutorials/data-mount-to-hive"}},i={},u=[{value:"\u5feb\u7167\u8bfb",id:"\u5feb\u7167\u8bfb",level:2},{value:"\u5feb\u7167\u56de\u6eda",id:"\u5feb\u7167\u56de\u6eda",level:2},{value:"\u5feb\u7167\u6e05\u7406",id:"\u5feb\u7167\u6e05\u7406",level:2}],c={toc:u},p="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5feb\u7167\u76f8\u5173\u529f\u80fd\u7528\u6cd5\u6559\u7a0b"},"\u5feb\u7167\u76f8\u5173\u529f\u80fd\u7528\u6cd5\u6559\u7a0b"),(0,r.kt)("p",null,"LakeSoul \u4f7f\u7528\u5feb\u7167\u7684\u65b9\u5f0f\u6765\u8bb0\u5f55\u6bcf\u4e00\u6b21\u66f4\u65b0\u7684\u6587\u4ef6\u96c6\u5408\uff0c\u5e76\u5728\u5143\u6570\u636e\u4e2d\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u7248\u672c\u53f7\u3002\u5386\u53f2\u7684\u5feb\u7167\u7248\u672c\u5982\u679c\u6ca1\u6709\u88ab\u6e05\u7406\uff0c\u5219\u4e5f\u53ef\u4ee5\u901a\u8fc7 LakeSoul API \u8fdb\u884c\u8bfb\u53d6\u3001\u56de\u6eda\u548c\u6e05\u7406\u7b49\u64cd\u4f5c\u3002\u7531\u4e8e\u5feb\u7167\u7248\u672c\u662f\u5185\u90e8\u7684\u673a\u5236\uff0c\u4e3a\u4e86\u4f7f\u7528\u65b9\u4fbf\uff0cLakeSoul \u63d0\u4f9b\u4e86\u57fa\u4e8e\u65f6\u95f4\u6233\u7684\u5feb\u7167\u7ba1\u7406 API\u3002"),(0,r.kt)("h2",{id:"\u5feb\u7167\u8bfb"},"\u5feb\u7167\u8bfb"),(0,r.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u4f1a\u9700\u8981\u67e5\u8be2\u4e00\u5f20\u8868\u67d0\u4e2a\u5206\u533a\u5728\u4e4b\u524d\u67d0\u4e2a\u65f6\u95f4\u70b9\u7684\u5feb\u7167\u6570\u636e\uff0c\u4e5f\u79f0\u4e3a Time Travel\u3002LakeSoul \u6267\u884c\u8bfb\u53d6\u67d0\u4e2a\u65f6\u95f4\u70b9\u7684\u5feb\u7167\u7684\u65b9\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport org.apache.spark.sql._\nval spark = SparkSession.builder.master("local")\n  .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n  .getOrCreate()\n\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\n// \u8bfb\u53d6 \'date=2022-01-02\' \u5206\u533a\u5728\u65f6\u95f4\u6233\u5c0f\u4e8e\u7b49\u4e8e\u5e76\u6700\u63a5\u8fd1 \'2022-01-01 15:15:15\'\u65f6\u7684\u6570\u636e\nval lakeSoulTable = LakeSoulTable.forPathSnapshot(tablePath, "date=2022-01-02", "2022-01-01 15:15:15")\n')),(0,r.kt)("h2",{id:"\u5feb\u7167\u56de\u6eda"},"\u5feb\u7167\u56de\u6eda"),(0,r.kt)("p",null,"\u67d0\u4e9b\u65f6\u5019\u7531\u4e8e\u65b0\u5199\u5165\u7684\u6570\u636e\u6709\u8bef\uff0c\u9700\u8981\u56de\u6eda\u5230\u67d0\u4e2a\u5386\u53f2\u5feb\u7167\u7248\u672c\u3002\u4f7f\u7528 LakeSoul \u6267\u884c\u5feb\u7167\u56de\u6eda\u5230\u67d0\u4e2a\u65f6\u95f4\u70b9\u4e4b\u524d\u7684\u65b9\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport org.apache.spark.sql._\nval spark = SparkSession.builder.master("local")\n  .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n  .getOrCreate()\n\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\nval lakeSoulTable = LakeSoulTable.forPath(tablePath)\n\n//\u5c06\u5206\u533a\u4e3a\'2021-01-02\'\u7684\u6570\u636e\u56de\u6eda\u5230\u65f6\u95f4\u6233\u5c0f\u4e8e\u7b49\u4e8e\u5e76\u6700\u63a5\u8fd1\'2022-01-01 15:15:15\'\u65f6\u7684\u6570\u636e\u4fe1\u606f\nlakeSoulTable.rollbackPartition("date=\'2022-01-02\'", "2022-01-01 15:15:15")\n')),(0,r.kt)("p",null,"\u56de\u6eda\u64cd\u4f5c\u672c\u8eab\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5feb\u7167\u7248\u672c\uff0c\u800c\u5176\u4ed6\u7684\u7248\u672c\u5feb\u7167\u4ee5\u53ca\u6570\u636e\u4e0d\u4f1a\u88ab\u5220\u9664\u3002"),(0,r.kt)("h2",{id:"\u5feb\u7167\u6e05\u7406"},"\u5feb\u7167\u6e05\u7406"),(0,r.kt)("p",null,"\u5386\u53f2\u7684\u5feb\u7167\u5982\u679c\u5df2\u7ecf\u4e0d\u9700\u8981\u4e86\uff0c\u4f8b\u5982\u5df2\u7ecf\u6267\u884c\u8fc7 Compaction\uff0c\u53ef\u4ee5\u8c03\u7528\u6e05\u7406\u65b9\u6cd5\u6e05\u7406\u67d0\u4e2a\u65f6\u95f4\u70b9\u4e4b\u524d\u7684\u5feb\u7167\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport org.apache.spark.sql._\nval spark = SparkSession.builder.master("local")\n  .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n  .getOrCreate()\n\nval tablePath = "s3a://bucket-name/table/path/is/also/table/name"\nval lakeSoulTable = LakeSoulTable.forPath(tablePath)\n\n//\u5c06\u5206\u533a\u4e3a\'date=2022-01-02\'\uff0c\u4e14\u65f6\u95f4\u65e9\u4e8e"2022-01-01 15:15:15"\u4e4b\u524d\u7684\u5143\u6570\u636e\u548c\u5b58\u50a8\u6570\u636e\u8fdb\u884c\u6e05\u7406\nlakeSoulTable.cleanupPartitionData("date=\'2022-01-02\'", "2022-01-01 15:15:15")\n')))}m.isMDXComponent=!0}}]);