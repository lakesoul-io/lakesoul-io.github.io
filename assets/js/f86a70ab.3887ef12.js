"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[9880],{6198:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(5893),s=o(1151);const a={},r="Use Presto to Query LakeSoul's Table",i={id:"Usage Docs/setup-presto",title:"Use Presto to Query LakeSoul's Table",description:"Available since version 2.4.",source:"@site/docs/03-Usage Docs/10-setup-presto.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/setup-presto",permalink:"/docs/Usage Docs/setup-presto",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/10-setup-presto.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LakeSoul Table Lifecycle Automatic Maintenance and Redundant Data Automatic Cleaning",permalink:"/docs/Usage Docs/clean-redundant-data"},next:{title:"LakeSoul's Supports for Python and Machine Learning",permalink:"/docs/Usage Docs/machine-learning-support"}},l={},c=[{value:"Download Jar package",id:"download-jar-package",level:2},{value:"Configure Presto",id:"configure-presto",level:2},{value:"Configure LakeSoul Meta DB Connection",id:"configure-lakesoul-meta-db-connection",level:2},{value:"Start Presto Client",id:"start-presto-client",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-presto-to-query-lakesouls-table",children:"Use Presto to Query LakeSoul's Table"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Available since version 2.4."})}),"\n",(0,n.jsxs)(t.p,{children:["LakeSoul implements Presto Connector and currently supports reading tables. It can read tables without primary keys and tables with primary keys (including ",(0,n.jsx)(t.a,{href:"/docs/Usage%20Docs/cdc-ingestion-table",children:"CDC format tables"}),"). When reading, Merge on Read will be automatically executed to obtain the latest data."]}),"\n",(0,n.jsx)(t.h2,{id:"download-jar-package",children:"Download Jar package"}),"\n",(0,n.jsxs)(t.p,{children:["You can download the Presto package from the Github Release page: ",(0,n.jsx)(t.a,{href:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.5.3/lakesoul-presto-presto-0.28-2.5.3.jar",children:"https://github.com/lakesoul-io/LakeSoul/releases/download/v2.5.3/lakesoul-presto-presto-0.28-2.5.3.jar"})]}),"\n",(0,n.jsx)(t.h2,{id:"configure-presto",children:"Configure Presto"}),"\n",(0,n.jsx)(t.p,{children:"Create a new lakesoul subdirectory in the plugin subdirectory under the Presto directory. Place the jar downloaded above into this subdirectory."}),"\n",(0,n.jsxs)(t.p,{children:["Create a new ",(0,n.jsx)(t.code,{children:"etc/catalog/lakesoul.properties"})," file (the specific etc directory location can be modified according to the presto deployment):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-properties",children:"connector.name=lakesoul\nfs.s3a.access.key=minioadmin1\nfs.s3a.secret.key=minioadmin1\nfs.s3a.bucket=lakesoul-test-bucket\nfs.s3a.endpoint=http://minio:9000\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The setting items starting with ",(0,n.jsx)(t.code,{children:"fs.s3a"})," are the configuration for accessing S3 and can be modified as needed."]}),"\n",(0,n.jsx)(t.h2,{id:"configure-lakesoul-meta-db-connection",children:"Configure LakeSoul Meta DB Connection"}),"\n",(0,n.jsxs)(t.p,{children:["Refer to the method in the ",(0,n.jsx)(t.a,{href:"/docs/Usage%20Docs/setup-meta-env",children:"Configure Metadata"})," document and use environment variables or JVM property to setup connection to meta DB. For example, JVM properties can be configured in ",(0,n.jsx)(t.a,{href:"https://prestodb.io/docs/current/installation/deployment.html#jvm-config",children:"Presto JVM Config"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"start-presto-client",children:"Start Presto Client"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"./bin/presto --catalog lakesoul --schema default\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>r});var n=o(7294);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);