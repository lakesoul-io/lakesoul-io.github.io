"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[779],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>m});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},i=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,m=u["".concat(c,".").concat(d)]||u[d]||k[d]||n;return o?a.createElement(m,s(s({ref:t},i),{},{components:o})):a.createElement(m,s({ref:t},i))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<n;p++)s[p]=o[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9917:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=o(7462),r=(o(7294),o(3905));const n={},s="Use Docker Compose",l={unversionedId:"Getting Started/docker-compose",id:"Getting Started/docker-compose",title:"Use Docker Compose",description:"\x3c!--",source:"@site/docs/01-Getting Started/02-docker-compose.mdx",sourceDirName:"01-Getting Started",slug:"/Getting Started/docker-compose",permalink:"/docs/Getting Started/docker-compose",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/01-Getting Started/02-docker-compose.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup a Local Environment",permalink:"/docs/Getting Started/setup-local-env"},next:{title:"LakeSoul CDC Ingestion via Spark Streaming",permalink:"/docs/Tutorials/consume-cdc-via-spark-streaming"}},c={},p=[{value:"Docker Compose Files",id:"docker-compose-files",level:2},{value:"Install Docker Compose",id:"install-docker-compose",level:2},{value:"Start docker compose",id:"start-docker-compose",level:2},{value:"Run LakeSoul Tests in Docker Compose Env",id:"run-lakesoul-tests-in-docker-compose-env",level:2},{value:"Prepare LakeSoul Properties File",id:"prepare-lakesoul-properties-file",level:3},{value:"Prepare Spark Image",id:"prepare-spark-image",level:3},{value:"Start Spark Shell",id:"start-spark-shell",level:3},{value:"Execute LakeSoul Scala APIs",id:"execute-lakesoul-scala-apis",level:3},{value:"Verify Data Written Successfully",id:"verify-data-written-successfully",level:3},{value:"Cleanup Meta Tables and MinIO Bucket",id:"cleanup-meta-tables-and-minio-bucket",level:2},{value:"Shutdown Docker Compose Env",id:"shutdown-docker-compose-env",level:2}],i={toc:p},u="wrapper";function k(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-docker-compose"},"Use Docker Compose"),(0,r.kt)("h2",{id:"docker-compose-files"},"Docker Compose Files"),(0,r.kt)("p",null,"We provide a docker compose env to quickly start a local PostgreSQL service and a MinIO S3 Storage service. The docker compose env is located under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/tree/main/docker/lakesoul-docker-compose-env"},"lakesoul-docker-compose-env"),"."),(0,r.kt)("h2",{id:"install-docker-compose"},"Install Docker Compose"),(0,r.kt)("p",null,"To install docker compose, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install Docker Engine")),(0,r.kt)("h2",{id:"start-docker-compose"},"Start docker compose"),(0,r.kt)("p",null,"To start the docker compose env, cd into the docker compose env dir, and execute the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker/lakesoul-docker-compose-env/\ndocker compose up -d\n")),(0,r.kt)("p",null,"Then use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose ps")," to check both services' statuses are ",(0,r.kt)("inlineCode",{parentName:"p"},"running(healthy)"),". The PostgreSQL service would automatically setup the database and tables required by LakeSoul Meta. And the MinIO service would setup a public bucket. You can change the user, password, database name and MinIO bucket name accordingly in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file."),(0,r.kt)("h2",{id:"run-lakesoul-tests-in-docker-compose-env"},"Run LakeSoul Tests in Docker Compose Env"),(0,r.kt)("h3",{id:"prepare-lakesoul-properties-file"},"Prepare LakeSoul Properties File"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="lakesoul.properties"',title:'"lakesoul.properties"'},"lakesoul.pg.driver=com.lakesoul.shaded.org.postgresql.Driver\nlakesoul.pg.url=jdbc:postgresql://lakesoul-docker-compose-env-lakesoul-meta-db-1:5432/lakesoul_test?stringtype=unspecified\nlakesoul.pg.username=lakesoul_test\nlakesoul.pg.password=lakesoul_test\n")),(0,r.kt)("h3",{id:"prepare-spark-image"},"Prepare Spark Image"),(0,r.kt)("p",null,"You could use bitnami's Spark 3.3 docker image with packaged hadoop denendencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull bitnami/spark:3.3.1\n")),(0,r.kt)("h3",{id:"start-spark-shell"},"Start Spark Shell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --net lakesoul-docker-compose-env_default --rm -ti \\\n    -v $(pwd)/lakesoul.properties:/opt/spark/work-dir/lakesoul.properties \\\n    --env lakesoul_home=/opt/spark/work-dir/lakesoul.properties bitnami/spark:3.3.1 \\\n    spark-shell \\\n    --packages com.dmetasoul:lakesoul-spark:2.3.0-spark-3.3 \\\n    --conf spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension \\\n    --conf spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog \\\n    --conf spark.sql.defaultCatalog=lakesoul \\\n    --conf spark.hadoop.fs.s3.impl=org.apache.hadoop.fs.s3a.S3AFileSystem \\\n    --conf spark.hadoop.fs.s3a.buffer.dir=/opt/spark/work-dir/s3a \\\n    --conf spark.hadoop.fs.s3a.path.style.access=true \\\n    --conf spark.hadoop.fs.s3a.endpoint=http://minio:9000 \\\n    --conf spark.hadoop.fs.s3a.aws.credentials.provider=org.apache.hadoop.fs.s3a.AnonymousAWSCredentialsProvider\n")),(0,r.kt)("h3",{id:"execute-lakesoul-scala-apis"},"Execute LakeSoul Scala APIs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val tablePath= "s3://lakesoul-test-bucket/test_table"\nval df = Seq(("2021-01-01",1,"rice"),("2021-01-01",2,"bread")).toDF("date","id","name")\ndf.write\n  .mode("append")\n  .format("lakesoul")\n  .option("rangePartitions","date")\n  .option("hashPartitions","id")\n  .option("hashBucketNum","2")\n  .save(tablePath)\n')),(0,r.kt)("h3",{id:"verify-data-written-successfully"},"Verify Data Written Successfully"),(0,r.kt)("p",null,"Open link ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/buckets/lakesoul-test-bucket/browse/"},"http://127.0.0.1:9001/buckets/lakesoul-test-bucket/browse/")," in your browser to verify that LakeSoul table has been written to MinIO successfully.\nUse minioadmin1:minioadmin1 to login into MinIO's console."),(0,r.kt)("h2",{id:"cleanup-meta-tables-and-minio-bucket"},"Cleanup Meta Tables and MinIO Bucket"),(0,r.kt)("p",null,"To cleanup all contents in LakeSoul meta tables, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti lakesoul-docker-compose-env-lakesoul-meta-db-1 psql -h localhost -U lakesoul_test -d lakesoul_test -f /meta_cleanup.sql\n")),(0,r.kt)("p",null,"To cleanup all contents in MinIO bucket, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --net lakesoul-docker-compose-env_default --rm -t bitnami/spark:3.3.1 aws --no-sign-request --endpoint-url http://minio:9000 s3 rm --recursive s3://lakesoul-test-bucket/\n")),(0,r.kt)("h2",{id:"shutdown-docker-compose-env"},"Shutdown Docker Compose Env"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker/lakesoul-docker-compose-env/\ndocker compose stop\ndocker compose down\n")))}k.isMDXComponent=!0}}]);