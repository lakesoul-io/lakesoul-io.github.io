"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[542],{9798:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=s(5893),a=s(1151);const o={},r="LakeSoul \u5168\u5c40\u81ea\u52a8\u538b\u7f29\u670d\u52a1\u4f7f\u7528\u65b9\u6cd5",c={id:"Usage Docs/auto-compaction-task",title:"LakeSoul \u5168\u5c40\u81ea\u52a8\u538b\u7f29\u670d\u52a1\u4f7f\u7528\u65b9\u6cd5",description:"\x3c!--",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-Usage Docs/08-auto-compaction-task.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/auto-compaction-task",permalink:"/zh-Hans/docs/Usage Docs/auto-compaction-task",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/08-auto-compaction-task.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LakeSoul Flink Connector",permalink:"/zh-Hans/docs/Usage Docs/flink-lakesoul-connector"},next:{title:"LakeSoul \u8868\u751f\u547d\u5468\u671f\u81ea\u52a8\u7ef4\u62a4\u548c\u5197\u4f59\u6570\u636e\u81ea\u52a8\u6e05\u7406",permalink:"/zh-Hans/docs/Usage Docs/clean-redundant-data"}},i={},l=[{value:"\u5b9e\u73b0\u539f\u7406\u89e3\u6790",id:"\u5b9e\u73b0\u539f\u7406\u89e3\u6790",level:2},{value:"\u538b\u7f29\u4efb\u52a1\u542f\u52a8\u65b9\u5f0f",id:"\u538b\u7f29\u4efb\u52a1\u542f\u52a8\u65b9\u5f0f",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lakesoul-\u5168\u5c40\u81ea\u52a8\u538b\u7f29\u670d\u52a1\u4f7f\u7528\u65b9\u6cd5",children:"LakeSoul \u5168\u5c40\u81ea\u52a8\u538b\u7f29\u670d\u52a1\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u8be5\u529f\u80fd\u4e8e 2.3.0 \u7248\u672c\u8d77\u63d0\u4f9b"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u7ba1\u662f\u6279\u91cf\u8fd8\u662f\u6d41\u5f0f\u4efb\u52a1\u7684\u6570\u636e\u5199\u5165\uff0c\u56e0\u4e3a\u6570\u636e\u591a\u662fmerge\u65b9\u5f0f\u5199\u5165\uff0c\u6240\u4ee5\u5b58\u5728\u4e00\u4e9b\u4e2d\u95f4\u5197\u4f59\u6570\u636e\u4ee5\u53ca\u5927\u91cf\u5c0f\u6587\u4ef6\u60c5\u51b5\uff0c\u4e3a\u4e86\u51cf\u5c11\u6b64\u7c7b\u6570\u636e\u9020\u6210\u8d44\u6e90\u7684\u6d6a\u8d39\u4ee5\u53ca\u63d0\u9ad8\u6570\u636e\u8bfb\u53d6\u7684\u6548\u7387\uff0c\u9700\u8981\u5c06\u6570\u636e\u8fdb\u884c\u538b\u7f29\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f20\u7edf\u4e0a\u5982\u679c\u6211\u4eec\u5728\u5199\u5165\u4f5c\u4e1a\uff08\u4f8b\u5982\u6d41\u4f5c\u4e1a\uff09\u4e2d\u6267\u884c\u538b\u7f29\uff0c\u5219\u5199\u4efb\u52a1\u53ef\u80fd\u4f1a\u88ab\u963b\u585e\uff0c\u5f71\u54cd\u5ef6\u8fdf\u548c\u541e\u5410\u3002\u800c\u5982\u679c\u6211\u4eec\u4e3a\u6bcf\u4e2a\u8868\u542f\u52a8\u4e00\u4e2a\u5468\u671f\u538b\u7f29\u4efb\u52a1\uff0c\u90e8\u7f72\u53c8\u6bd4\u8f83\u7e41\u7410\u3002\u56e0\u6b64 LakeSoul \u63d0\u4f9b\u4e86\u5168\u5c40\u81ea\u52a8\u538b\u7f29\u4efb\u52a1\uff0c\u53ef\u4ee5\u6839\u636e\u6570\u636e\u5e93\u4ee5\u53ca\u5199\u5165\u5206\u533a\u6570\u636e\u60c5\u51b5\u81ea\u52a8\u8fdb\u884c\u6570\u636e\u538b\u7f29\uff0c\u538b\u7f29\u4efb\u52a1\u652f\u6301\u81ea\u52a8\u5f39\u6027\u4f38\u7f29\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9e\u73b0\u539f\u7406\u89e3\u6790",children:"\u5b9e\u73b0\u539f\u7406\u89e3\u6790"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f9d\u8d56 PG \u7684 trigger-notify-listen \u673a\u5236\uff0c\u5728 PG \u4e2d\u7684 PLSQL \u4e2d\u5b9a\u4e49\u4e00\u4e2a\u89e6\u53d1\u5668\u51fd\u6570\uff1a\u6bcf\u5f53\u6570\u636e\u5199\u5165\u65f6\u53ef\u4ee5\u89e6\u53d1\u6267\u884c\u4e00\u4e2a\u5b9a\u4e49\u51fd\u6570\uff0c\u5728\u51fd\u6570\u4e2d\u5206\u6790\u5904\u7406\u6ee1\u8db3\u538b\u7f29\u6761\u4ef6\u7684\u5206\u533a\uff08\u4f8b\u5982\uff0c\u81ea\u4e0a\u6b21\u538b\u7f29\u4ee5\u6765\u6709 10 \u6b21\u63d0\u4ea4\uff09\uff0c\u7136\u540e\u5c06\u4fe1\u606f\u53d1\u5e03\u51fa\u53bb\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u540e\u7aef\u542f\u52a8\u4e00\u4e2a\u5b9e\u65f6\u76d1\u542c\u4efb\u52a1\uff0c\u8fd9\u662f\u4e00\u4e2a Spark \u4efb\u52a1\uff0c\u957f\u671f\u8fd0\u884c\u5e76\u76d1\u542c\u6765\u81ea PG \u53d1\u5e03\u7684\u4fe1\u606f\uff0c\u7136\u540e\u5bf9\u6ee1\u8db3\u538b\u7f29\u6761\u4ef6\u7684\u5206\u533a\u542f\u52a8\u6570\u636e\u542f\u52a8\u8fdb\u884c\u6570\u636e\u538b\u7f29\u3002\u5982\u6b64\uff0c\u8fd9\u4e2a Spark \u4efb\u52a1\u4f1a\u8d1f\u8d23\u5168\u5c40\u6240\u6709\u8868\u7684\u538b\u7f29\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u76ee\u524d\u53ea\u6839\u636e\u5199\u5165\u5206\u533a version \u60c5\u51b5\u8fdb\u884c\u538b\u7f29\uff0c\u6bcf\u63d0\u4ea4 10 \u6b21\u4f1a\u89e6\u53d1\u538b\u7f29\u4efb\u52a1\u7684\u6267\u884c\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u538b\u7f29\u4efb\u52a1\u542f\u52a8\u65b9\u5f0f",children:"\u538b\u7f29\u4efb\u52a1\u542f\u52a8\u65b9\u5f0f"}),"\n",(0,t.jsx)(n.p,{children:"trigger \u548c pg \u51fd\u6570\u5728\u6570\u636e\u5e93\u521d\u59cb\u5316\u7684\u65f6\u5019\u5df2\u7ecf\u914d\u7f6e\uff0c\u9ed8\u8ba4\u538b\u7f29\u914d\u7f6e\uff0c\u5206\u533a\u6bcf\u63d2\u5165 10 \u6b21\u4f1a\u89e6\u53d1\u8fdb\u884c\u538b\u7f29\u4fe1\u53f7\uff0c\u6240\u4ee5\u53ea\u9700\u8981\u542f\u52a8 Spark \u81ea\u52a8\u538b\u7f29\u4f5c\u4e1a\u5c31\u597d\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u4e0b\u8f7d LakeSoul spark release \u7684 jar \u5305\uff0c\u4efb\u52a1\u63d0\u4ea4\u65f6\u901a\u8fc7 --jars \u65b9\u5f0f\u6dfb\u52a0\u4f9d\u8d56jar\u5305\uff0c\u7136\u540e\u542f\u52a8 Spark \u81ea\u52a8\u538b\u7f29\u4efb\u52a1\u5373\u53ef\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4e3a Spark \u4f5c\u4e1a\u914d\u7f6e LakeSoul \u5143\u6570\u636e\u5e93\u8fde\u63a5\uff0c\u8be6\u7ec6\u8bf4\u660e\u53ef\u4ee5\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"/zh-Hans/docs/Usage%20Docs/setup-spark",children:"LakeSoul\u8bbe\u7f6e Spark \u5de5\u7a0b/\u4f5c\u4e1a"})," \uff1b"]}),"\n",(0,t.jsx)(n.li,{children:"\u63d0\u4ea4\u4f5c\u4e1a\u3002\u76ee\u524d\u652f\u6301\u53c2\u6570\u4fe1\u606f\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u53c2\u6570"}),(0,t.jsx)(n.th,{children:"\u53c2\u6570\u8bf4\u660e"}),(0,t.jsx)(n.th,{children:"\u662f\u5426\u5fc5\u8981"}),(0,t.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"threadpool.size"}),(0,t.jsx)(n.td,{children:"\u81ea\u52a8\u538b\u7f29\u4efb\u52a1\u7ebf\u7a0b\u6c60\u6570\u91cf"}),(0,t.jsx)(n.td,{children:"\u4e0d\u5fc5\u8981"}),(0,t.jsx)(n.td,{children:"8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"database"}),(0,t.jsx)(n.td,{children:"\u8981\u538b\u7f29\u7684 LakaSoul \u5e93\u540d\u79f0\u3002\u82e5\u4e0d\u586b\u5199\uff0c\u8868\u793a\u4e0d\u533a\u5206\u6570\u636e\u5e93\u5bf9\u6ee1\u8db3\u6761\u4ef6\u7684\u5206\u533a\u8fdb\u884c\u6570\u636e\u538b\u7f29"}),(0,t.jsx)(n.td,{children:"\u4e0d\u5fc5\u8981"}),(0,t.jsx)(n.td,{children:"\u7a7a\u3002\u9ed8\u8ba4\u4e3a\u6240\u6709\u5e93"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u5730\u542f\u52a8 Spark \u81ea\u52a8\u538b\u7f29\u547d\u4ee4\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'./bin/spark-submit \\\n    --name auto_compaction_task \\\n    --master yarn  \\\n    --deploy-mode cluster \\\n    --executor-memory 3g \\\n    --executor-cores 1 \\\n    --num-executors 20 \\\n    --conf "spark.executor.extraJavaOptions=-XX:MaxDirectMemorySize=4G" \\\n    --conf "spark.executor.memoryOverhead=3g" \\\n    --class com.dmetasoul.lakesoul.spark.compaction.CompactionTask  \\\n    jars/lakesoul-spark-3.3-2.6.0.jar \n    --threadpool.size=10\n    --database=test\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u56e0\u4e3aLakeSoul\u9ed8\u8ba4\u5f00\u542fnative IO \u9700\u8981\u4f9d\u8d56\u5806\u5916\u5185\u5b58\uff0c\u6240\u4ee5 Spark \u4efb\u52a1\u9700\u8981\u8bbe\u7f6e\u5806\u5916\u5185\u5b58\u5927\u5c0f\uff0c\u5426\u5219\u5bb9\u6613\u51fa\u73b0\u5806\u5916\u5185\u5b58\u6ea2\u51fa\u95ee\u9898\u3002"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u4e3a Spark \u5168\u5c40\u538b\u7f29\u4efb\u52a1\u5f00\u542f ",(0,t.jsx)(n.a,{href:"https://spark.apache.org/docs/3.3.1/job-scheduling.html#dynamic-resource-allocation",children:"Dynamic Allocation"}),"\uff0c\u4f7f\u5f97\u8be5\u4efb\u52a1\u53ef\u4ee5\u6839\u636e\u9700\u8981\u81ea\u52a8\u5f39\u6027\u4f38\u7f29\u8d44\u6e90\u3002"]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(7294);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);