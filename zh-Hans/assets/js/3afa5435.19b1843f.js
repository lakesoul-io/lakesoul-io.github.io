"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[297],{3905:(e,o,t)=>{t.d(o,{Zo:()=>k,kt:()=>m});var a=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,a,r=function(e,o){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var o=a.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},k=function(e){var o=c(e.components);return a.createElement(p.Provider,{value:o},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},d=a.forwardRef((function(e,o){var t=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),i=c(t),d=r,m=i["".concat(p,".").concat(d)]||i[d]||u[d]||n;return t?a.createElement(m,l(l({ref:o},k),{},{components:t})):a.createElement(m,l({ref:o},k))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=t.length,l=new Array(n);l[0]=d;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s[i]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<n;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8439:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const n={},l="\u4f7f\u7528 Docker Compose",s={unversionedId:"Getting Started/docker-compose",id:"Getting Started/docker-compose",title:"\u4f7f\u7528 Docker Compose",description:"Docker Compose \u6587\u4ef6",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/01-Getting Started/02-docker-compose.mdx",sourceDirName:"01-Getting Started",slug:"/Getting Started/docker-compose",permalink:"/zh-Hans/docs/Getting Started/docker-compose",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/01-Getting Started/02-docker-compose.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u642d\u5efa\u672c\u5730\u6d4b\u8bd5\u73af\u5883",permalink:"/zh-Hans/docs/Getting Started/setup-local-env"},next:{title:"\u901a\u8fc7 Spark Streaming \u5bfc\u5165 LakeSoul CDC \u8868",permalink:"/zh-Hans/docs/Tutorials/consume-cdc-via-spark-streaming"}},p={},c=[{value:"Docker Compose \u6587\u4ef6",id:"docker-compose-\u6587\u4ef6",level:2},{value:"\u5b89\u88c5 Docker Compose",id:"\u5b89\u88c5-docker-compose",level:2},{value:"\u542f\u52a8 Docker Compose \u73af\u5883",id:"\u542f\u52a8-docker-compose-\u73af\u5883",level:2},{value:"\u5728 Docker Compose \u73af\u5883\u4e2d\u8fd0\u884c LakeSoul \u6d4b\u8bd5",id:"\u5728-docker-compose-\u73af\u5883\u4e2d\u8fd0\u884c-lakesoul-\u6d4b\u8bd5",level:2},{value:"\u51c6\u5907 LakeSoul \u914d\u7f6e\u6587\u4ef6",id:"\u51c6\u5907-lakesoul-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u51c6\u5907 Spark \u955c\u50cf",id:"\u51c6\u5907-spark-\u955c\u50cf",level:3},{value:"\u542f\u52a8 Spark Shell",id:"\u542f\u52a8-spark-shell",level:3},{value:"\u6267\u884c LakeSoul Scala API",id:"\u6267\u884c-lakesoul-scala-api",level:3},{value:"\u68c0\u67e5\u6570\u636e\u662f\u5426\u6210\u529f\u5199\u5165",id:"\u68c0\u67e5\u6570\u636e\u662f\u5426\u6210\u529f\u5199\u5165",level:3},{value:"\u6e05\u7406\u5143\u6570\u636e\u8868\u548c MinIO \u6876",id:"\u6e05\u7406\u5143\u6570\u636e\u8868\u548c-minio-\u6876",level:2},{value:"\u505c\u6b62 Docker Compose \u73af\u5883",id:"\u505c\u6b62-docker-compose-\u73af\u5883",level:2}],k={toc:c},i="wrapper";function u(e){let{components:o,...t}=e;return(0,r.kt)(i,(0,a.Z)({},k,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528-docker-compose"},"\u4f7f\u7528 Docker Compose"),(0,r.kt)("h2",{id:"docker-compose-\u6587\u4ef6"},"Docker Compose \u6587\u4ef6"),(0,r.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86 docker compose \u73af\u5883\u65b9\u4fbf\u5feb\u901f\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u7684 PostgreSQL \u670d\u52a1\u548c\u4e00\u4e2a MinIO S3 \u5b58\u50a8\u670d\u52a1\u3002Docker Compose \u73af\u5883\u53ef\u4ee5\u5728\u4ee3\u7801\u5e93\u4e2d\u627e\u5230\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/meta-soul/LakeSoul/tree/main/docker/lakesoul-docker-compose-env"},"lakesoul-docker-compose-env"),"."),(0,r.kt)("h2",{id:"\u5b89\u88c5-docker-compose"},"\u5b89\u88c5 Docker Compose"),(0,r.kt)("p",null,"\u5b89\u88c5 Docker Compose \u53ef\u4ee5\u53c2\u8003 Docker \u5b98\u65b9\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install Docker Engine")),(0,r.kt)("h2",{id:"\u542f\u52a8-docker-compose-\u73af\u5883"},"\u542f\u52a8 Docker Compose \u73af\u5883"),(0,r.kt)("p",null,"\u542f\u52a8 Docker Compose \u73af\u5883\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker/lakesoul-docker-compose-env/\ndocker compose up -d\n")),(0,r.kt)("p",null,"\u7136\u540e\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose ps")," \u547d\u4ee4\u6765\u68c0\u67e5\u670d\u52a1\u72b6\u6001\u662f\u5426\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"running"),". PostgreSQL \u670d\u52a1\u4f1a\u81ea\u52a8\u521d\u59cb\u5316\u597d LakeSoul \u9700\u8981\u7684 database \u548c \u8868\u7ed3\u6784\u3002MinIO \u670d\u52a1\u4f1a\u521b\u5efa\u4e00\u4e2a\u516c\u5171\u8bfb\u5199\u7684\u6876\u3002PostgreSQL \u7684\u7528\u6237\u540d\u3001\u5bc6\u7801\u3001DB\u540d\u5b57\u3001MinIO \u7684\u6876\u540d\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u6587\u4ef6\u4e2d\u4fee\u6539\u3002"),(0,r.kt)("h2",{id:"\u5728-docker-compose-\u73af\u5883\u4e2d\u8fd0\u884c-lakesoul-\u6d4b\u8bd5"},"\u5728 Docker Compose \u73af\u5883\u4e2d\u8fd0\u884c LakeSoul \u6d4b\u8bd5"),(0,r.kt)("h3",{id:"\u51c6\u5907-lakesoul-\u914d\u7f6e\u6587\u4ef6"},"\u51c6\u5907 LakeSoul \u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="lakesoul.properties"',title:'"lakesoul.properties"'},"lakesoul.pg.driver=com.lakesoul.shaded.org.postgresql.Driver\nlakesoul.pg.url=jdbc:postgresql://lakesoul-docker-compose-env-lakesoul-meta-db-1:5432/lakesoul_test?stringtype=unspecified\nlakesoul.pg.username=lakesoul_test\nlakesoul.pg.password=lakesoul_test\n")),(0,r.kt)("h3",{id:"\u51c6\u5907-spark-\u955c\u50cf"},"\u51c6\u5907 Spark \u955c\u50cf"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 bitnami Spark \u955c\u50cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull bitnami/spark:3.3.1\n")),(0,r.kt)("h3",{id:"\u542f\u52a8-spark-shell"},"\u542f\u52a8 Spark Shell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --net lakesoul-docker-compose-env_default --rm -ti \\\n    -v $(pwd)/lakesoul.properties:/opt/spark/work-dir/lakesoul.properties \\\n    --env lakesoul_home=/opt/spark/work-dir/lakesoul.properties bitnami/spark:3.3.1 \\\n    spark-shell \\\n    --packages com.dmetasoul:lakesoul-spark:2.2.0-spark-3.3 \\\n    --conf spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension \\\n    --conf spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog \\\n    --conf spark.sql.defaultCatalog=lakesoul \\\n    --conf spark.hadoop.fs.s3.impl=org.apache.hadoop.fs.s3a.S3AFileSystem \\\n    --conf spark.hadoop.fs.s3a.buffer.dir=/opt/spark/work-dir/s3a \\\n    --conf spark.hadoop.fs.s3a.path.style.access=true \\\n    --conf spark.hadoop.fs.s3a.endpoint=http://minio:9000 \\\n    --conf spark.hadoop.fs.s3a.aws.credentials.provider=org.apache.hadoop.fs.s3a.AnonymousAWSCredentialsProvider\n")),(0,r.kt)("h3",{id:"\u6267\u884c-lakesoul-scala-api"},"\u6267\u884c LakeSoul Scala API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val tablePath= "s3://lakesoul-test-bucket/test_table"\nval df = Seq(("2021-01-01",1,"rice"),("2021-01-01",2,"bread")).toDF("date","id","name")\ndf.write\n  .mode("append")\n  .format("lakesoul")\n  .option("rangePartitions","date")\n  .option("hashPartitions","id")\n  .option("hashBucketNum","2")\n  .save(tablePath)\n')),(0,r.kt)("h3",{id:"\u68c0\u67e5\u6570\u636e\u662f\u5426\u6210\u529f\u5199\u5165"},"\u68c0\u67e5\u6570\u636e\u662f\u5426\u6210\u529f\u5199\u5165"),(0,r.kt)("p",null,"\u53ef\u4ee5\u6253\u5f00\u94fe\u63a5 ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/buckets/lakesoul-test-bucket/browse/"},"http://127.0.0.1:9001/buckets/lakesoul-test-bucket/browse/")," \u67e5\u770b\u6570\u636e\u662f\u5426\u5df2\u7ecf\u6210\u529f\u5199\u5165\u3002\nMinIO console \u7684\u767b\u5f55\u7528\u6237\u540d\u5bc6\u7801\u662f minioadmin1:minioadmin1\u3002"),(0,r.kt)("h2",{id:"\u6e05\u7406\u5143\u6570\u636e\u8868\u548c-minio-\u6876"},"\u6e05\u7406\u5143\u6570\u636e\u8868\u548c MinIO \u6876"),(0,r.kt)("p",null,"\u6e05\u7406\u5143\u6570\u636e\u8868\u5185\u5bb9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti lakesoul-docker-compose-env-lakesoul-meta-db-1 psql -h localhost -U lakesoul_test -d lakesoul_test -f /meta_cleanup.sql\n")),(0,r.kt)("p",null,"\u6e05\u7406 MinIO \u6876\u5185\u5bb9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --net lakesoul-docker-compose-env_default --rm -t bitnami/spark:3.3.1 aws --no-sign-request --endpoint-url http://minio:9000 s3 rm --recursive s3://lakesoul-test-bucket/\n")),(0,r.kt)("h2",{id:"\u505c\u6b62-docker-compose-\u73af\u5883"},"\u505c\u6b62 Docker Compose \u73af\u5883"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker/lakesoul-docker-compose-env/\ndocker compose stop\ndocker compose down\n")))}u.isMDXComponent=!0}}]);