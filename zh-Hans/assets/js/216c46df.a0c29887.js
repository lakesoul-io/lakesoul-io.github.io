"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[701],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:r,o[1]=u;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),u=a(6550),i=a(1980),c=a(7392),s=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,c]=k({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var f=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:u,selectValue:i,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=s.indexOf(t),n=c[a].value;n!==u&&(p(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":u===t})}),a??t)})))}function C(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(C,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},7327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const u={},i="LakeSoul CDC \u8868\u683c\u5f0f",c={unversionedId:"Usage Docs/cdc-ingestion-table",id:"Usage Docs/cdc-ingestion-table",title:"LakeSoul CDC \u8868\u683c\u5f0f",description:"\x3c!--",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-Usage Docs/04-cdc-ingestion-table.mdx",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/cdc-ingestion-table",permalink:"/zh-Hans/docs/Usage Docs/cdc-ingestion-table",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/04-cdc-ingestion-table.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spark API \u6587\u6863",permalink:"/zh-Hans/docs/Usage Docs/spark-api-docs"},next:{title:"LakeSoul Flink CDC \u6574\u5e93\u5343\u8868\u540c\u6b65\u5165\u6e56",permalink:"/zh-Hans/docs/Usage Docs/flink-cdc-sync"}},s={},p=[{value:"\u521b\u5efa LakeSoul CDC \u8868",id:"\u521b\u5efa-lakesoul-cdc-\u8868",level:2},{value:"\u4f7f\u7528 Spark",id:"\u4f7f\u7528-spark",level:3},{value:"\u4f7f\u7528 Flink",id:"\u4f7f\u7528-flink",level:3},{value:"LakeSoul CDC \u8868\u7684\u589e\u91cf\u8bfb\u53d6",id:"lakesoul-cdc-\u8868\u7684\u589e\u91cf\u8bfb\u53d6",level:2}],d={toc:p},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lakesoul-cdc-\u8868\u683c\u5f0f"},"LakeSoul CDC \u8868\u683c\u5f0f"),(0,r.kt)("p",null,"CDC (Change Data Capture) \u662f\u6e56\u4ed3\u91cd\u8981\u7684\u6570\u636e\u6e90\u4e4b\u4e00. LakeSoul CDC \u8868\u7684\u76ee\u6807\u662f\u80fd\u591f\u4ece\u5728\u7ebf OLTP \u6570\u636e\u5e93\u5feb\u901f\u540c\u6b65\u6570\u636e\u5230 LakeSoul \u8868\u4e2d\uff0c\u4ece\u800c\u4e0b\u6e38\u5206\u6790\u8ba1\u7b97\u4efb\u52a1\u5728\u8f83\u5c0f\u7684\u65f6\u95f4\u95f4\u9694\u540e\u5c31\u53ef\u4ee5\u8bfb\u5230\u5728\u7ebf\u6570\u636e\u5e93\u7684\u540c\u6b65\u6570\u636e\uff0c\u6d88\u9664\u4e86\u4f20\u7edf T+1 \u590d\u5236\u7684\u5f00\u9500\u3002\u76f8\u6bd4\u666e\u901a\u652f\u6301 Upsert \u7684\u8868\uff0cCDC \u8868\u989d\u5916\u652f\u6301\u4e86\u5220\u9664\u884c\u7684\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"LakeSoul CDC \u8868\u4f7f\u7528\u4e00\u4e2a\u989d\u5916\u7684\u64cd\u4f5c\u5217\uff08\u5217\u540d\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff09\u6765\u8bb0\u5f55 CDC \u7684\u64cd\u4f5c\u7c7b\u578b\uff0c\u53ef\u4ee5\u652f\u6301\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://debezium.io/"},"Debezium"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/canal"},"canal")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ververica/flink-cdc-connectors"},"Flink CDC")," \u4e2d\u5bfc\u5165 CDC \u6570\u636e\u3002LakeSoul \u9ed8\u8ba4\u5efa\u8868\u5e76\u4e0d\u4f1a\u542f\u7528 CDC \u8868\u683c\u5f0f\uff0c\u9ed8\u8ba4\u8868\u4ec5\u652f\u6301 Upsert \u64cd\u4f5c\u3002\u8981\u5f00\u542f\u5bf9 CDC \u7684\u652f\u6301\uff0c\u9700\u8981\u5728\u5efa\u8868\u65f6\u589e\u52a0\u989d\u5916\u7684\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u521b\u5efa LakeSoul CDC \u8868\uff0c\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u8868\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"lakesoul_cdc_change_column")," \u6765\u914d\u7f6e CDC \u53d8\u66f4\u7c7b\u578b\u7684\u5217\u540d\u3002\u8fd9\u4e00\u5217\u9700\u8981\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," \u7c7b\u578b\uff0c\u5305\u542b\u4e09\u79cd\u53d6\u503c\u4e4b\u4e00\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),"."),(0,r.kt)("p",null,"\u5728 LakeSoul \u6279\u91cf\u8bfb\u6570\u636e\u7684\u81ea\u52a8\u5408\u5e76\u9636\u6bb5(\u5305\u62ec\u4f7f\u7528 Spark/Flink \u6279\u5f0f\u8bfb\u53d6)\uff0c\u4f1a\u4fdd\u7559\u6700\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"update")," \u6570\u636e\uff0c\u5e76\u81ea\u52a8\u8fc7\u6ee4\u6389 ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," \u7684\u884c\u3002\u800c\u4f7f\u7528 Spark/Flink \u6d41\u5f0f\u589e\u91cf\u8bfb\u53d6\u65f6\uff0c\u4f1a\u4fdd\u7559 CDC \u53d8\u66f4\u5217\u7684\u503c\uff08\u4e5f\u5373\u5305\u542b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),"\uff09\uff0c\u5728 Flink \u4e2d\uff0c\u8fd9\u4e00\u5217\u4f1a\u88ab\u81ea\u52a8\u8f6c\u6362\u4e3a Flink RowData \u5bf9\u8c61\u7684 RowKind \u5b57\u6bb5\u7684\u5bf9\u5e94\u503c\uff0c\u4ece\u800c\u5728 Flink \u6d41\u5f0f\u8bfb\u53d6\u65f6\u5b8c\u6574\u652f\u6301\u4e86 Flink Changelog Stream \u8bed\u4e49\uff0c\u80fd\u591f\u8fdb\u884c\u589e\u91cf\u8ba1\u7b97\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa-lakesoul-cdc-\u8868"},"\u521b\u5efa LakeSoul CDC \u8868"),(0,r.kt)("h3",{id:"\u4f7f\u7528-spark"},"\u4f7f\u7528 Spark"),(0,r.kt)("p",null,"\u4f7f\u7528 Spark Scala API \u6216\u8005 SQL\uff0c\u5047\u8bbe\u64cd\u4f5c\u7c7b\u578b\u5217\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"change_type"),":"),(0,r.kt)(l.Z,{defaultValue:"Scala",values:[{label:"Scala",value:"Scala"},{label:"SQL",value:"SQL"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nLakeSoulTable.createTable(data, path).shortTableName("cdc_ingestion").hashPartitions("id").hashBucketNum(2).rangePartitions("rangeid").tableProperty("lakesoul_cdc_change_column" -> "change_type").create()\n'))),(0,r.kt)(o.Z,{value:"SQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name (id string, date string, change_type string) USING lakesoul\n  PARTITIONED BY (date)\n  LOCATION 's3://lakesoul-bucket/table_path'\n  TBLPROPERTIES('lakesoul_cdc_change_column'='change_type',\n    'hashPartitions'='id',\n    'hashBucketNum'='2');\n")))),(0,r.kt)("p",null,"\u6ce8\u610f LakeSoul CDC \u8868\u5fc5\u987b\u662f\u4e3b\u952e\u8868\uff0c\u5e76\u4e14\u4e3b\u952e\u5217\u9700\u8981\u548c CDC \u4e0a\u6e38\u6570\u636e\u5e93\u8868\u76f8\u540c\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528-flink"},"\u4f7f\u7528 Flink"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-Hans/docs/Usage%20Docs/flink-lakesoul-connector"},"Flink Connector")),(0,r.kt)("h2",{id:"lakesoul-cdc-\u8868\u7684\u589e\u91cf\u8bfb\u53d6"},"LakeSoul CDC \u8868\u7684\u589e\u91cf\u8bfb\u53d6"),(0,r.kt)("p",null,"LakeSoul \u7684\u589e\u91cf\u91c7\u7528\u7684\u662f\u4e3b\u952e\u5206\u7247\u7684\u6a21\u5f0f\uff0c\u56e0\u6b64\u589e\u91cf\u6570\u636e\u5199\u5165\u65f6\u4e0d\u9700\u8981\u4e0e\u5b58\u91cf\u6570\u636e\u505a\u5408\u5e76\u64cd\u4f5c\u3002\u5bf9\u4e8e CDC \u8868\uff0c\u589e\u91cf\u6570\u636e\u5c31\u662f\u539f\u59cb\u7684 CDC \u6d41\u7684\u5185\u5bb9\u3002\u5bf9 LakeSoul \u8868\u7684 CDC \u589e\u91cf\u8bfb\u53d6\uff0c\u53ef\u4ee5\u5b8c\u6574\u4fdd\u7559 CDC \u64cd\u4f5c\u6807\u8bb0\uff0c\u5373 insert\u3001update\u3001delete\u30022.2.0 \u7248\u672c\u8d77\u5728 Spark \u4e2d\u5df2\u7ecf\u652f\u6301\u4e86\u589e\u91cf\u6d41\u5f0f\u8bfb\u53d6\u3002"),(0,r.kt)("p",null,"2.3.0 \u7248\u672c\u8d77\uff0c\u652f\u6301\u4e86 Flink Table Source\uff0c\u652f\u6301 Flink ChangeLog Stream \u7684\u6d41\u5f0f\u589e\u91cf\u8bfb\u5199\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-Hans/docs/Usage%20Docs/flink-lakesoul-connector"},"Flink Connector")," \u3002"))}k.isMDXComponent=!0}}]);