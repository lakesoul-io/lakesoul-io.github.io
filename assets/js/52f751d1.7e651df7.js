"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},l="Setup LakeSoul Meta DB",i={unversionedId:"Usage Docs/setup-meta-env",id:"Usage Docs/setup-meta-env",title:"Setup LakeSoul Meta DB",description:"\x3c!--",source:"@site/docs/03-Usage Docs/01-setup-meta-env.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/setup-meta-env",permalink:"/docs/Usage Docs/setup-meta-env",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/01-setup-meta-env.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Incremental Query Function Tutorial",permalink:"/docs/Tutorials/incremental-query"},next:{title:"Setup Your Spark and Flink Project/Job",permalink:"/docs/Usage Docs/setup-spark"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup-lakesoul-meta-db"},"Setup LakeSoul Meta DB"),(0,a.kt)("p",null,"LakeSoul use ",(0,a.kt)("inlineCode",{parentName:"p"},"lakesoul_home")," (case insensitive) environment variable or ",(0,a.kt)("inlineCode",{parentName:"p"},"lakesoul_home")," JVM property (case sensitive) to locate config file. The config file consists of required LakeSoul configs such as Postgres's connection info. An example property file is like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"lakesoul.pg.driver=com.lakesoul.shaded.org.postgresql.Driver\nlakesoul.pg.url=jdbc:postgresql://localhost:5432/lakesoul_test?stringtype=unspecified\nlakesoul.pg.username=lakesoul_test\nlakesoul.pg.password=lakesoul_test\n")),(0,a.kt)("p",null,"Change the connection url, username and password according to your deployment."),(0,a.kt)("p",null,"If the property file cannot be read, ",(0,a.kt)("inlineCode",{parentName:"p"},"LAKESOUL_PG_DRIVER"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LAKESOUL_PG_URL"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LAKESOUL_PG_USERNAME")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"LAKESOUL_PG_PASSWORD")," environment variables will be used to set corresponding values."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Version 2.0.1 and before only supports ",(0,a.kt)("inlineCode",{parentName:"p"},"lakesoul_home")," env (in lower case) to locate the property file.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Since 2.1.0, the Spark and Flink jars already include all their dependencies via maven shade plugin. And the PG driver class name should become ",(0,a.kt)("inlineCode",{parentName:"p"},"com.lakesoul.shaded.org.postgresql.Driver"),". And before 2.0.1 (included), the driver class name was ",(0,a.kt)("inlineCode",{parentName:"p"},"org.postgresql.Driver"),".")),(0,a.kt)("p",null,"Then create LakeSoul meta tables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"PGPASSWORD=lakesoul_test psql -h localhost -p 5432 -U lakesoul_test -f script/meta_init.sql\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"meta_init.sql")," is located under ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," dir in the source code."))}d.isMDXComponent=!0}}]);