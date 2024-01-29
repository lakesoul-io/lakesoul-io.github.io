"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[8701],{4867:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=n(5893),l=n(1151),r=n(4866),s=n(5162);const o={},c="LakeSoul CDC \u8868\u683c\u5f0f",i={id:"Usage Docs/cdc-ingestion-table",title:"LakeSoul CDC \u8868\u683c\u5f0f",description:"\x3c!--",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-Usage Docs/04-cdc-ingestion-table.mdx",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/cdc-ingestion-table",permalink:"/zh-Hans/docs/Usage Docs/cdc-ingestion-table",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/04-cdc-ingestion-table.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spark API \u6587\u6863",permalink:"/zh-Hans/docs/Usage Docs/spark-api-docs"},next:{title:"LakeSoul Flink CDC \u6574\u5e93\u5343\u8868\u540c\u6b65\u5165\u6e56",permalink:"/zh-Hans/docs/Usage Docs/flink-cdc-sync"}},u={},d=[{value:"\u521b\u5efa LakeSoul CDC \u8868",id:"\u521b\u5efa-lakesoul-cdc-\u8868",level:2},{value:"\u4f7f\u7528 Spark",id:"\u4f7f\u7528-spark",level:3},{value:"\u4f7f\u7528 Flink",id:"\u4f7f\u7528-flink",level:3},{value:"LakeSoul CDC \u8868\u7684\u589e\u91cf\u8bfb\u53d6",id:"lakesoul-cdc-\u8868\u7684\u589e\u91cf\u8bfb\u53d6",level:2}];function h(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"lakesoul-cdc-\u8868\u683c\u5f0f",children:"LakeSoul CDC \u8868\u683c\u5f0f"}),"\n",(0,t.jsx)(a.p,{children:"CDC (Change Data Capture) \u662f\u6e56\u4ed3\u91cd\u8981\u7684\u6570\u636e\u6e90\u4e4b\u4e00. LakeSoul CDC \u8868\u7684\u76ee\u6807\u662f\u80fd\u591f\u4ece\u5728\u7ebf OLTP \u6570\u636e\u5e93\u5feb\u901f\u540c\u6b65\u6570\u636e\u5230 LakeSoul \u8868\u4e2d\uff0c\u4ece\u800c\u4e0b\u6e38\u5206\u6790\u8ba1\u7b97\u4efb\u52a1\u5728\u8f83\u5c0f\u7684\u65f6\u95f4\u95f4\u9694\u540e\u5c31\u53ef\u4ee5\u8bfb\u5230\u5728\u7ebf\u6570\u636e\u5e93\u7684\u540c\u6b65\u6570\u636e\uff0c\u6d88\u9664\u4e86\u4f20\u7edf T+1 \u590d\u5236\u7684\u5f00\u9500\u3002\u76f8\u6bd4\u666e\u901a\u652f\u6301 Upsert \u7684\u8868\uff0cCDC \u8868\u989d\u5916\u652f\u6301\u4e86\u5220\u9664\u884c\u7684\u64cd\u4f5c\u3002"}),"\n",(0,t.jsxs)(a.p,{children:["LakeSoul CDC \u8868\u4f7f\u7528\u4e00\u4e2a\u989d\u5916\u7684\u64cd\u4f5c\u5217\uff08\u5217\u540d\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff09\u6765\u8bb0\u5f55 CDC \u7684\u64cd\u4f5c\u7c7b\u578b\uff0c\u53ef\u4ee5\u652f\u6301\u4ece ",(0,t.jsx)(a.a,{href:"https://debezium.io/",children:"Debezium"}),", ",(0,t.jsx)(a.a,{href:"https://github.com/alibaba/canal",children:"canal"})," \u548c ",(0,t.jsx)(a.a,{href:"https://github.com/ververica/flink-cdc-connectors",children:"Flink CDC"})," \u4e2d\u5bfc\u5165 CDC \u6570\u636e\u3002LakeSoul \u9ed8\u8ba4\u5efa\u8868\u5e76\u4e0d\u4f1a\u542f\u7528 CDC \u8868\u683c\u5f0f\uff0c\u9ed8\u8ba4\u8868\u4ec5\u652f\u6301 Upsert \u64cd\u4f5c\u3002\u8981\u5f00\u542f\u5bf9 CDC \u7684\u652f\u6301\uff0c\u9700\u8981\u5728\u5efa\u8868\u65f6\u589e\u52a0\u989d\u5916\u7684\u5c5e\u6027\u3002"]}),"\n",(0,t.jsxs)(a.p,{children:["\u521b\u5efa LakeSoul CDC \u8868\uff0c\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u8868\u5c5e\u6027 ",(0,t.jsx)(a.code,{children:"lakesoul_cdc_change_column"})," \u6765\u914d\u7f6e CDC \u53d8\u66f4\u7c7b\u578b\u7684\u5217\u540d\u3002\u8fd9\u4e00\u5217\u9700\u8981\u662f ",(0,t.jsx)(a.code,{children:"string"})," \u7c7b\u578b\uff0c\u5305\u542b\u4e09\u79cd\u53d6\u503c\u4e4b\u4e00\uff1a ",(0,t.jsx)(a.code,{children:"update"}),", ",(0,t.jsx)(a.code,{children:"insert"}),", ",(0,t.jsx)(a.code,{children:"delete"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["\u5728 LakeSoul \u6279\u91cf\u8bfb\u6570\u636e\u7684\u81ea\u52a8\u5408\u5e76\u9636\u6bb5(\u5305\u62ec\u4f7f\u7528 Spark/Flink \u6279\u5f0f\u8bfb\u53d6)\uff0c\u4f1a\u4fdd\u7559\u6700\u65b0\u7684 ",(0,t.jsx)(a.code,{children:"insert"}),"\u3001",(0,t.jsx)(a.code,{children:"update"})," \u6570\u636e\uff0c\u5e76\u81ea\u52a8\u8fc7\u6ee4\u6389 ",(0,t.jsx)(a.code,{children:"delete"})," \u7684\u884c\u3002\u800c\u4f7f\u7528 Spark/Flink \u6d41\u5f0f\u589e\u91cf\u8bfb\u53d6\u65f6\uff0c\u4f1a\u4fdd\u7559 CDC \u53d8\u66f4\u5217\u7684\u503c\uff08\u4e5f\u5373\u5305\u542b\u4e86 ",(0,t.jsx)(a.code,{children:"insert"}),", ",(0,t.jsx)(a.code,{children:"update"}),", ",(0,t.jsx)(a.code,{children:"delete"}),"\uff09\uff0c\u5728 Flink \u4e2d\uff0c\u8fd9\u4e00\u5217\u4f1a\u88ab\u81ea\u52a8\u8f6c\u6362\u4e3a Flink RowData \u5bf9\u8c61\u7684 RowKind \u5b57\u6bb5\u7684\u5bf9\u5e94\u503c\uff0c\u4ece\u800c\u5728 Flink \u6d41\u5f0f\u8bfb\u53d6\u65f6\u5b8c\u6574\u652f\u6301\u4e86 Flink Changelog Stream \u8bed\u4e49\uff0c\u80fd\u591f\u8fdb\u884c\u589e\u91cf\u8ba1\u7b97\u3002"]}),"\n",(0,t.jsx)(a.h2,{id:"\u521b\u5efa-lakesoul-cdc-\u8868",children:"\u521b\u5efa LakeSoul CDC \u8868"}),"\n",(0,t.jsx)(a.h3,{id:"\u4f7f\u7528-spark",children:"\u4f7f\u7528 Spark"}),"\n",(0,t.jsxs)(a.p,{children:["\u4f7f\u7528 Spark Scala API \u6216\u8005 SQL\uff0c\u5047\u8bbe\u64cd\u4f5c\u7c7b\u578b\u5217\u540d\u4e3a ",(0,t.jsx)(a.code,{children:"change_type"}),":"]}),"\n",(0,t.jsxs)(r.Z,{defaultValue:"Scala",values:[{label:"Scala",value:"Scala"},{label:"SQL",value:"SQL"}],children:[(0,t.jsx)(s.Z,{value:"Scala",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nLakeSoulTable.createTable(data, path).shortTableName("cdc_ingestion").hashPartitions("id").hashBucketNum(2).rangePartitions("rangeid").tableProperty("lakesoul_cdc_change_column" -> "change_type").create()\n'})})}),(0,t.jsx)(s.Z,{value:"SQL",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE TABLE table_name (id string, date string, change_type string) USING lakesoul\n  PARTITIONED BY (date)\n  LOCATION 's3://lakesoul-bucket/table_path'\n  TBLPROPERTIES('lakesoul_cdc_change_column'='change_type',\n    'hashPartitions'='id',\n    'hashBucketNum'='2');\n"})})})]}),"\n",(0,t.jsx)(a.p,{children:"\u6ce8\u610f LakeSoul CDC \u8868\u5fc5\u987b\u662f\u4e3b\u952e\u8868\uff0c\u5e76\u4e14\u4e3b\u952e\u5217\u9700\u8981\u548c CDC \u4e0a\u6e38\u6570\u636e\u5e93\u8868\u76f8\u540c\u3002"}),"\n",(0,t.jsx)(a.h3,{id:"\u4f7f\u7528-flink",children:"\u4f7f\u7528 Flink"}),"\n",(0,t.jsxs)(a.p,{children:["\u8bf7\u53c2\u8003 ",(0,t.jsx)(a.a,{href:"/zh-Hans/docs/Usage%20Docs/flink-lakesoul-connector",children:"Flink Connector"})]}),"\n",(0,t.jsx)(a.h2,{id:"lakesoul-cdc-\u8868\u7684\u589e\u91cf\u8bfb\u53d6",children:"LakeSoul CDC \u8868\u7684\u589e\u91cf\u8bfb\u53d6"}),"\n",(0,t.jsx)(a.p,{children:"LakeSoul \u7684\u589e\u91cf\u91c7\u7528\u7684\u662f\u4e3b\u952e\u5206\u7247\u7684\u6a21\u5f0f\uff0c\u56e0\u6b64\u589e\u91cf\u6570\u636e\u5199\u5165\u65f6\u4e0d\u9700\u8981\u4e0e\u5b58\u91cf\u6570\u636e\u505a\u5408\u5e76\u64cd\u4f5c\u3002\u5bf9\u4e8e CDC \u8868\uff0c\u589e\u91cf\u6570\u636e\u5c31\u662f\u539f\u59cb\u7684 CDC \u6d41\u7684\u5185\u5bb9\u3002\u5bf9 LakeSoul \u8868\u7684 CDC \u589e\u91cf\u8bfb\u53d6\uff0c\u53ef\u4ee5\u5b8c\u6574\u4fdd\u7559 CDC \u64cd\u4f5c\u6807\u8bb0\uff0c\u5373 insert\u3001update\u3001delete\u30022.2.0 \u7248\u672c\u8d77\u5728 Spark \u4e2d\u5df2\u7ecf\u652f\u6301\u4e86\u589e\u91cf\u6d41\u5f0f\u8bfb\u53d6\u3002"}),"\n",(0,t.jsxs)(a.p,{children:["2.3.0 \u7248\u672c\u8d77\uff0c\u652f\u6301\u4e86 Flink Table Source\uff0c\u652f\u6301 Flink ChangeLog Stream \u7684\u6d41\u5f0f\u589e\u91cf\u8bfb\u5199\uff0c\u8bf7\u53c2\u8003 ",(0,t.jsx)(a.a,{href:"/zh-Hans/docs/Usage%20Docs/flink-lakesoul-connector",children:"Flink Connector"})," \u3002"]})]})}function p(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5162:(e,a,n)=>{n.d(a,{Z:()=>s});n(7294);var t=n(6905);const l={tabItem:"tabItem_Ymn6"};var r=n(5893);function s(e){let{children:a,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(l.tabItem,s),hidden:n,children:a})}},4866:(e,a,n)=>{n.d(a,{Z:()=>S});var t=n(7294),l=n(6905),r=n(2466),s=n(6550),o=n(469),c=n(1980),i=n(7392),u=n(12);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:l}}=e;return{value:a,label:n,attributes:t,default:l}}))}(n);return function(e){const a=(0,i.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:n}=e;const l=(0,s.k6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,c._X)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(l.location.search);a.set(r,e),l.replace({...l.location,search:a.toString()})}),[r,l])]}function k(e){const{defaultValue:a,queryString:n=!1,groupId:l}=e,r=h(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[i,d]=b({queryString:n,groupId:l}),[k,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[l,r]=(0,u.Nk)(n);return[l,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),m=(()=>{const e=i??k;return p({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=n(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function C(e){let{className:a,block:n,selectedValue:t,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.o5)(),u=e=>{const a=e.currentTarget,n=c.indexOf(a),l=o[n].value;l!==t&&(i(a),s(l))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},a),children:o.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>c.push(e),onKeyDown:d,onClick:u,...r,className:(0,l.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function x(e){let{lazy:a,children:n,selectedValue:l}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==l})))})}function v(e){const a=k(e);return(0,g.jsxs)("div",{className:(0,l.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(C,{...e,...a}),(0,g.jsx)(x,{...e,...a})]})}function S(e){const a=(0,f.Z)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(a))}},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>s});var t=n(7294);const l={},r=t.createContext(l);function s(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);