"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[458],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=l.createContext({}),c=function(e){var a=l.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=c(e.components);return l.createElement(i.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},p=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),p=n,k=d["".concat(i,".").concat(p)]||d[p]||m[p]||r;return t?l.createElement(k,s(s({ref:a},u),{},{components:t})):l.createElement(k,s({ref:a},u))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=p;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return l.createElement.apply(null,s)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7415:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=t(7462),n=(t(7294),t(3905));const r={},s="Kafka \u591a topic \u6570\u636e\u5165 LakeSoul \u6559\u7a0b",o={unversionedId:"Tutorials/kafka-topics-data-to-lakesoul",id:"Tutorials/kafka-topics-data-to-lakesoul",title:"Kafka \u591a topic \u6570\u636e\u5165 LakeSoul \u6559\u7a0b",description:"\u901a\u8fc7 LakeSul Kafka Stream \u5c06 Kafka \u4e2d\u7684\u6570\u636e\u540c\u6b65\u5230 LakeSul \u975e\u5e38\u65b9\u4fbf\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/02-Tutorials/07-kafka-topics-data-to-lakesoul.md",sourceDirName:"02-Tutorials",slug:"/Tutorials/kafka-topics-data-to-lakesoul",permalink:"/zh-Hans/docs/Tutorials/kafka-topics-data-to-lakesoul",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/02-Tutorials/07-kafka-topics-data-to-lakesoul.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u591a\u6d41\u5408\u5e76\u6784\u5efa\u5bbd\u8868\u6559\u7a0b",permalink:"/zh-Hans/docs/Tutorials/mutil-stream-merge"},next:{title:"\u589e\u91cf\u67e5\u8be2\u529f\u80fd\u6559\u7a0b",permalink:"/zh-Hans/docs/Tutorials/incremental-query"}},i={},c=[{value:"1. \u51c6\u5907\u73af\u5883",id:"1-\u51c6\u5907\u73af\u5883",level:2},{value:"2. \u542f\u52a8 LakeSoul Kafka Stream \u4efb\u52a1",id:"2-\u542f\u52a8-lakesoul-kafka-stream-\u4efb\u52a1",level:2},{value:"3. \u4efb\u52a1\u6d41\u7a0b\u793a\u4f8b",id:"3-\u4efb\u52a1\u6d41\u7a0b\u793a\u4f8b",level:2}],u={toc:c},d="wrapper";function m(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,l.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kafka-\u591a-topic-\u6570\u636e\u5165-lakesoul-\u6559\u7a0b"},"Kafka \u591a topic \u6570\u636e\u5165 LakeSoul \u6559\u7a0b"),(0,n.kt)("p",null,"\u901a\u8fc7 LakeSul Kafka Stream \u5c06 Kafka \u4e2d\u7684\u6570\u636e\u540c\u6b65\u5230 LakeSul \u975e\u5e38\u65b9\u4fbf\u3002"),(0,n.kt)("p",null,"LakeSoul Kafka Stream \u53ef\u4ee5\u652f\u6301\u81ea\u52a8\u521b\u5efa\u8868\uff0c\u81ea\u52a8\u8bc6\u522b\u65b0 topic\uff0cexactly-once \u8bed\u4e49\u3001\u81ea\u52a8\u4e3a\u8868\u6dfb\u52a0\u5206\u533a\u7b49\u529f\u80fd\u3002"),(0,n.kt)("p",null,"LakeSoul Kafka Stream \u4e3b\u8981\u4f7f\u7528 Spark Structured Streaming \u6765\u5b9e\u73b0\u6570\u636e\u540c\u6b65\u529f\u80fd\u3002"),(0,n.kt)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u5145\u5206\u6f14\u793a\u5982\u4f55\u5c06 topic \u4e2d\u7684\u6570\u636e\u540c\u6b65\u5230 LakeSoul\uff0c\u5305\u62ec\u81ea\u52a8\u521b\u5efa\u8868\u3001\u6807\u8bc6\u65b0\u4e3b\u9898\u548c\u5176\u4ed6\u64cd\u4f5c\u3002"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 LakeSoul Kafka Stream\u9700\u8981\u4ee5\u4e0b\u6761\u4ef6\u4e4b\u4e00\uff1a"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"topic \u4e2d\u7684\u6570\u636e\u4e3a json \u683c\u5f0f;"),(0,n.kt)("li",{parentName:"ol"},"Kafka \u96c6\u7fa4\u5e26\u6709 Schema Registry \u670d\u52a1."))),(0,n.kt)("h2",{id:"1-\u51c6\u5907\u73af\u5883"},"1. \u51c6\u5907\u73af\u5883"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u7f16\u8bd1 LakeSoul \u9879\u76ee\u4ee5\u83b7\u53d6 LakeSoul Kafka Stream jar, \u6216\u8005\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/lakesoul-kafka-stream-3.3.tar.gz"},"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/lakesoul-kafka-stream-3.3.tar.gz")," \u6765\u83b7\u53d6 LakeSoul Kafka Stream \u4ee5\u53ca\u5176\u4ed6\u4efb\u52a1\u8fd0\u884c\u4f9d\u8d56\u7684jar\u5305\u3002"),(0,n.kt)("p",null,"\u4e0b\u8f7d\u540e\u89e3\u538b tar \u5305\uff0c\u7136\u540e\u5c06 jar \u5305\u653e\u5165 $SPARK_HOME/jars \u76ee\u5f55\u4e0b\uff0c\u6216\u8005\u5728\u63d0\u4ea4\u4efb\u52a1\u65f6\u6dfb\u52a0\u4f9d\u8d56\u7684jar\uff0c\u6bd4\u5982\u901a\u8fc7 --jars\u3002"),(0,n.kt)("h2",{id:"2-\u542f\u52a8-lakesoul-kafka-stream-\u4efb\u52a1"},"2. \u542f\u52a8 LakeSoul Kafka Stream \u4efb\u52a1"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4efb\u52a1\u542f\u52a8\u65f6\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"li"},"lakesoul_home")," \u73af\u5883\u53d8\u91cf\u6dfb\u52a0\u5143\u6570\u636e\u5e93\u4fe1\u606f. \u8fd9\u90e8\u5206\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"li",href:"/zh-Hans/docs/Getting%20Started/setup-local-env"},"\u642d\u5efa\u672c\u5730\u6d4b\u8bd5\u73af\u5883")),(0,n.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u4efb\u52a1\u3002 \u4f60\u9700\u8981\u6309\u987a\u5e8f\u586b\u5199\u4e00\u4e9b\u53c2\u6570\uff0c\u4ee5\u786e\u4fdd\u4efb\u52a1\u80fd\u591f\u51c6\u786e\u8fd0\u884c\u3002\u53c2\u6570\u63cf\u8ff0\u5982\u4e0b\uff1a")),(0,n.kt)("p",null,"\u53c2\u6570\u8bf4\u660e:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u987a\u5e8f"),(0,n.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u8981"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c\u793a\u4f8b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u4e2a"),(0,n.kt)("td",{parentName:"tr",align:null},"Kafka bootstrap.servers"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5fc5\u8981"),(0,n.kt)("td",{parentName:"tr",align:null},"localhost:9092")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e8c\u4e2a"),(0,n.kt)("td",{parentName:"tr",align:null},"Topic \u7684\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5fc5\u8981"),(0,n.kt)("td",{parentName:"tr",align:null},"test.*")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e09\u4e2a"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5b58\u50a8\u8def\u5f84\u524d\u7f00"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5fc5\u8981"),(0,n.kt)("td",{parentName:"tr",align:null},"/tmp/lakesoul/data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7b2c\u56db\u4e2a"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4efb\u52a1 checkpoint \u8def\u5f84"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5fc5\u8981"),(0,n.kt)("td",{parentName:"tr",align:null},"/tmp/lakesoul/checkpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e94\u4e2a"),(0,n.kt)("td",{parentName:"tr",align:null},"LakeSoul \u4e2d\u6570\u636e\u5e93\u540d"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5fc5\u8981"),(0,n.kt)("td",{parentName:"tr",align:null},"kafka")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7b2c\u516d\u4e2a"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u4ecetopic\u6700\u65b0\u8fd8\u662f\u6700\u65e9\u4f4d\u7f6e\u5f00\u59cb\u540c\u6b65"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5fc5\u8981"),(0,n.kt)("td",{parentName:"tr",align:null},"'earliest' \u6216\u8005 'latest'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e03\u4e2a"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e3a\u8868\u6dfb\u52a0\u5206\u533a"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5fc5\u8981"),(0,n.kt)("td",{parentName:"tr",align:null},"'true' \u6216\u8005 'false'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7b2c\u516b\u4e2a"),(0,n.kt)("td",{parentName:"tr",align:null},"Schema Registry \u670d\u52a1\u8fde\u63a5\u5730\u5740"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5fc5\u8981"),(0,n.kt)("td",{parentName:"tr",align:null},"http://localhost:8081")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},'\u5982\u679c\u7b2c\u4e03\u4e2a\u53c2\u6570\u8bbe\u7f6e(\u4e3a\u8868\u6dfb\u52a0\u5206\u533a): true\uff0c\u5219\u5c06\u4e3a\u6240\u6709\u8868\u81ea\u52a8\u521b\u5efa\u540d\u4e3a "lakeoul_dt" \u7684\u5206\u533a\u5b57\u6bb5\uff0c\u503c\u4e3a "yyyyMMddHH" \u683c\u5f0f\u7684\u65f6\u95f4\u6233\u3002')),(0,n.kt)("h2",{id:"3-\u4efb\u52a1\u6d41\u7a0b\u793a\u4f8b"},"3. \u4efb\u52a1\u6d41\u7a0b\u793a\u4f8b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'\u5047\u8bbe Kafka \u96c6\u7fa4\u5df2\u7ecf\u5b58\u5728\u3002\u5728\u8fd9\u91cc\uff0c\u901a\u8fc7 Docker Compose \u8fd0\u884c Kafka \u96c6\u7fa4\u3002\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a "test" \u7684\u4e3b\u9898\u5e76\u5411\u5176\u4e2d\u5199\u5165\u4e00\u4e9b\u6570\u636e\u3002 Kafka bootstrap.servers: localhost:9092.')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# \u521b\u5efa topic \'test\'\nbin# ./kafka-topics.sh --create --topic test --bootstrap-server localhost:9092 --replication-factor 1 --partitions 4\n\n# \u67e5\u770b topic \u5217\u8868\nbin# ./kafka-topics.sh  --list --bootstrap-server localhost:9092\ntest\n\n# \u5411 \u540d\u4e3a \'test\' \u7684topic\u4e2d\u5199\u5165\u4e00\u4e9b\u6570\u636e\nbin# ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test\n>{"before":{"id":1,"rangeid":2,"value":"sms"},"after":{"id":2,"rangeid":2,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":1}\n>{"before":{"id":2,"rangeid":2,"value":"sms"},"after":{"id":2,"rangeid":2,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":2}\n>{"before":{"id":3,"rangeid":2,"value":"sms"},"after":{"id":2,"rangeid":2,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":3}\n>{"before":{"id":4,"rangeid":2,"value":"sms"},"after":{"id":2,"rangeid":2,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":4}\n>{"before":{"id":5,"rangeid":2,"value":"sms"},"after":{"id":2,"rangeid":2,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":5}\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u63d0\u4ea4 Kafka Stream \u4efb\u52a1. \u5c06\u4e0a\u8ff0\u4e0b\u8f7d\u7684\u4f9d\u8d56 jars \u653e\u5230 $SPARK_HOME/jars \u76ee\u5f55\u4e0b.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export lakesoul_home=./pg.properties && ./bin/spark-submit \\\n--class org.apache.spark.sql.lakesoul.kafka.KafkaStream \\\n--driver-memory 4g \\\n--executor-memory 4g \\\n--master local[4] \\\n./jars/lakesoul-spark-2.3.1-spark-3.3.jar \\\nlocalhost:9092 test.* /tmp/kafka/data /tmp/kafka/checkpoint/ kafka earliest false\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u901a\u8fc7 spark-shell \u67e5\u770b\u5199\u5165 LakeSoul \u4e2d\u7684\u6570\u636e ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'scala> import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport com.dmetasoul.lakesoul.tables.LakeSoulTable\n\nscala> val tablepath="/tmp/kafka/data/kafka/test"\ntablepath: String = /tmp/kafka/data/kafka/test\n\nscala> val lake = LakeSoulTable.forPath(tablepath)\nlake: com.dmetasoul.lakesoul.tables.LakeSoulTable = com.dmetasoul.lakesoul.tables.LakeSoulTable@585a2ad9\n\nscala> lake.toDF.show(false)\n+----------------------------------+----------------------------------+---+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------+\n|after                             |before                            |op |source                                                                                                                                                                                                                                                                                                 |transaction|ts_ms        |\n+----------------------------------+----------------------------------+---+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------+\n|{"id":2,"rangeid":2,"value":"sms"}|{"id":1,"rangeid":2,"value":"sms"}|c  |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|1          |1644461444777|\n|{"id":2,"rangeid":2,"value":"sms"}|{"id":3,"rangeid":2,"value":"sms"}|c  |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|3          |1644461444777|\n|{"id":2,"rangeid":2,"value":"sms"}|{"id":5,"rangeid":2,"value":"sms"}|c  |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|5          |1644461444777|\n|{"id":2,"rangeid":2,"value":"sms"}|{"id":2,"rangeid":2,"value":"sms"}|c  |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|2          |1644461444777|\n|{"id":2,"rangeid":2,"value":"sms"}|{"id":4,"rangeid":2,"value":"sms"}|c  |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|4          |1644461444777|\n+----------------------------------+----------------------------------+---+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------+\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u65b0\u7684 topic 'test_1' \u5e76\u5411\u5176\u4e2d\u5199\u5165\u4e00\u4e9b\u6570\u636e")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# \u521b\u5efa topic \'test_1\' \nbin# ./kafka-topics.sh --create --topic test_1 --bootstrap-server localhost:9092 --replication-factor 1 --partitions 4\n\n# \u67e5\u770b topic list\nbin# ./kafka-topics.sh  --list --bootstrap-server localhost:9092\ntest\ntest_1\n\n# \u5411 topic \'test_1\' \u4e2d\u5199\u5165\u4e00\u4e9b\u6570\u636e\nbin# ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test_1\n>{"before":{"id":1,"rangeid":2,"value":"sms"},"after":{"id":1,"rangeid":1,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":1}\n>{"before":{"id":2,"rangeid":2,"value":"sms"},"after":{"id":2,"rangeid":2,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":2}\n>{"before":{"id":3,"rangeid":2,"value":"sms"},"after":{"id":3,"rangeid":3,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":3}\n>{"before":{"id":4,"rangeid":2,"value":"sms"},"after":{"id":4,"rangeid":4,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":4}\n>{"before":{"id":5,"rangeid":2,"value":"sms"},"after":{"id":5,"rangeid":5,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":5}\n')),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u65b0\u7684 topic \u540e\uff0c\u6570\u636e\u540c\u6b65\u5230 Lakesoul \u9700\u89815\u5206\u949f\u65f6\u95f4\u30025\u5206\u949f\u540e\u67e5\u770b LakeSoul \u4e2d\u7684\u6570\u636e")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'scala> val tablepath_1="/tmp/kafka/data/kafka/test_1"\ntablepath_1: String = /tmp/kafka/data/kafka/test_1\n\nscala> val lake_1 = LakeSoulTable.forPath(tablepath_1)\nlake: com.dmetasoul.lakesoul.tables.LakeSoulTable = com.dmetasoul.lakesoul.tables.LakeSoulTable@43900101\n\nlake_1.toDF.show(false)\n+----------------------------------+----------------------------------+----+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------+\n|after                             |before                            |op  |source                                                                                                                                                                                                                                                                                                 |transaction|ts_ms        |\n+----------------------------------+----------------------------------+----+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------+\n|{"id":2,"rangeid":2,"value":"sms"}|{"id":2,"rangeid":2,"value":"sms"}|c   |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|2          |1644461444777|\n|{"id":1,"rangeid":1,"value":"sms"}|{"id":1,"rangeid":2,"value":"sms"}|c   |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|1          |1644461444777|\n|{"id":4,"rangeid":4,"value":"sms"}|{"id":4,"rangeid":2,"value":"sms"}|c   |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|4          |1644461444777|\n|{"id":3,"rangeid":3,"value":"sms"}|{"id":3,"rangeid":2,"value":"sms"}|c   |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|3          |1644461444777|\n|{"id":5,"rangeid":5,"value":"sms"}|{"id":5,"rangeid":2,"value":"sms"}|c   |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|5          |1644461444777|\n+----------------------------------+----------------------------------+----+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------+\n')),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c Kafka \u96c6\u7fa4\u4f7f\u7528 Schema Registry\u670d\u52a1\uff0c\u63d0\u4ea4\u4efb\u52a1\u65f6\u53c2\u6570\u6700\u540e\u9700\u8981\u586b\u5199 schema registry \u670d\u52a1\u5730\u5740\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export lakesoul_home=./pg.properties && ./bin/spark-submit \\\n--class org.apache.spark.sql.lakesoul.kafka.KafkaStream \\\n--driver-memory 4g \\\n--executor-memory 4g \\\n--master local[4] \\\n./jars/lakesoul-spark-2.3.1-spark-3.3.jar \\\nlocalhost:9092 test.* /tmp/kafka/data /tmp/kafka/checkpoint/ kafka earliest false http://localhost:8081\n")))}m.isMDXComponent=!0}}]);