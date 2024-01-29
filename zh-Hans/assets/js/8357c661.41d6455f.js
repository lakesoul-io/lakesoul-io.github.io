"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[4458],{3113:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var l=a(5893),n=a(1151);const t={},r="Kafka \u591a topic \u6570\u636e\u5165 LakeSoul \u6559\u7a0b",o={id:"Tutorials/kafka-topics-data-to-lakesoul",title:"Kafka \u591a topic \u6570\u636e\u5165 LakeSoul \u6559\u7a0b",description:"\x3c!--",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/02-Tutorials/07-kafka-topics-data-to-lakesoul.md",sourceDirName:"02-Tutorials",slug:"/Tutorials/kafka-topics-data-to-lakesoul",permalink:"/zh-Hans/docs/Tutorials/kafka-topics-data-to-lakesoul",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/02-Tutorials/07-kafka-topics-data-to-lakesoul.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u591a\u6d41\u5408\u5e76\u6784\u5efa\u5bbd\u8868\u6559\u7a0b",permalink:"/zh-Hans/docs/Tutorials/mutil-stream-merge"},next:{title:"\u589e\u91cf\u67e5\u8be2\u529f\u80fd\u6559\u7a0b",permalink:"/zh-Hans/docs/Tutorials/incremental-query"}},i={},c=[{value:"1. \u51c6\u5907\u73af\u5883",id:"1-\u51c6\u5907\u73af\u5883",level:2},{value:"2. \u542f\u52a8 LakeSoul Kafka Stream \u4efb\u52a1",id:"2-\u542f\u52a8-lakesoul-kafka-stream-\u4efb\u52a1",level:2},{value:"3. \u4efb\u52a1\u6d41\u7a0b\u793a\u4f8b",id:"3-\u4efb\u52a1\u6d41\u7a0b\u793a\u4f8b",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"kafka-\u591a-topic-\u6570\u636e\u5165-lakesoul-\u6559\u7a0b",children:"Kafka \u591a topic \u6570\u636e\u5165 LakeSoul \u6559\u7a0b"}),"\n",(0,l.jsx)(s.p,{children:"\u901a\u8fc7 LakeSul Kafka Stream \u5c06 Kafka \u4e2d\u7684\u6570\u636e\u540c\u6b65\u5230 LakeSul \u975e\u5e38\u65b9\u4fbf\u3002"}),"\n",(0,l.jsx)(s.p,{children:"LakeSoul Kafka Stream \u53ef\u4ee5\u652f\u6301\u81ea\u52a8\u521b\u5efa\u8868\uff0c\u81ea\u52a8\u8bc6\u522b\u65b0 topic\uff0cexactly-once \u8bed\u4e49\u3001\u81ea\u52a8\u4e3a\u8868\u6dfb\u52a0\u5206\u533a\u7b49\u529f\u80fd\u3002"}),"\n",(0,l.jsx)(s.p,{children:"LakeSoul Kafka Stream \u4e3b\u8981\u4f7f\u7528 Spark Structured Streaming \u6765\u5b9e\u73b0\u6570\u636e\u540c\u6b65\u529f\u80fd\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u5145\u5206\u6f14\u793a\u5982\u4f55\u5c06 topic \u4e2d\u7684\u6570\u636e\u540c\u6b65\u5230 LakeSoul\uff0c\u5305\u62ec\u81ea\u52a8\u521b\u5efa\u8868\u3001\u6807\u8bc6\u65b0\u4e3b\u9898\u548c\u5176\u4ed6\u64cd\u4f5c\u3002"}),"\n",(0,l.jsxs)(s.admonition,{type:"caution",children:[(0,l.jsx)(s.p,{children:"\u4f7f\u7528 LakeSoul Kafka Stream\u9700\u8981\u4ee5\u4e0b\u6761\u4ef6\u4e4b\u4e00\uff1a"}),(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"topic \u4e2d\u7684\u6570\u636e\u4e3a json \u683c\u5f0f;"}),"\n",(0,l.jsx)(s.li,{children:"Kafka \u96c6\u7fa4\u5e26\u6709 Schema Registry \u670d\u52a1."}),"\n"]})]}),"\n",(0,l.jsx)(s.h2,{id:"1-\u51c6\u5907\u73af\u5883",children:"1. \u51c6\u5907\u73af\u5883"}),"\n",(0,l.jsxs)(s.p,{children:["\u4f60\u53ef\u4ee5\u7f16\u8bd1 LakeSoul \u9879\u76ee\u4ee5\u83b7\u53d6 LakeSoul Kafka Stream jar, \u6216\u8005\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(s.a,{href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/lakesoul-kafka-stream-3.3.tar.gz",children:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/lakesoul-kafka-stream-3.3.tar.gz"})," \u6765\u83b7\u53d6 LakeSoul Kafka Stream \u4ee5\u53ca\u5176\u4ed6\u4efb\u52a1\u8fd0\u884c\u4f9d\u8d56\u7684jar\u5305\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u4e0b\u8f7d\u540e\u89e3\u538b tar \u5305\uff0c\u7136\u540e\u5c06 jar \u5305\u653e\u5165 $SPARK_HOME/jars \u76ee\u5f55\u4e0b\uff0c\u6216\u8005\u5728\u63d0\u4ea4\u4efb\u52a1\u65f6\u6dfb\u52a0\u4f9d\u8d56\u7684jar\uff0c\u6bd4\u5982\u901a\u8fc7 --jars\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"2-\u542f\u52a8-lakesoul-kafka-stream-\u4efb\u52a1",children:"2. \u542f\u52a8 LakeSoul Kafka Stream \u4efb\u52a1"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\u4efb\u52a1\u542f\u52a8\u65f6\u901a\u8fc7 ",(0,l.jsx)(s.code,{children:"lakesoul_home"})," \u73af\u5883\u53d8\u91cf\u6dfb\u52a0\u5143\u6570\u636e\u5e93\u4fe1\u606f. \u8fd9\u90e8\u5206\u8bf7\u53c2\u8003 ",(0,l.jsx)(s.a,{href:"/zh-Hans/docs/Getting%20Started/setup-local-env",children:"\u642d\u5efa\u672c\u5730\u6d4b\u8bd5\u73af\u5883"})]}),"\n",(0,l.jsx)(s.li,{children:"\u63d0\u4ea4\u4efb\u52a1\u3002 \u4f60\u9700\u8981\u6309\u987a\u5e8f\u586b\u5199\u4e00\u4e9b\u53c2\u6570\uff0c\u4ee5\u786e\u4fdd\u4efb\u52a1\u80fd\u591f\u51c6\u786e\u8fd0\u884c\u3002\u53c2\u6570\u63cf\u8ff0\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u53c2\u6570\u8bf4\u660e:"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u53c2\u6570\u987a\u5e8f"}),(0,l.jsx)(s.th,{children:"\u542b\u4e49"}),(0,l.jsx)(s.th,{children:"\u662f\u5426\u5fc5\u8981"}),(0,l.jsx)(s.th,{children:"\u53d6\u503c\u793a\u4f8b"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u7b2c\u4e00\u4e2a"}),(0,l.jsx)(s.td,{children:"Kafka bootstrap.servers"}),(0,l.jsx)(s.td,{children:"\u5fc5\u8981"}),(0,l.jsx)(s.td,{children:"localhost:9092"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u7b2c\u4e8c\u4e2a"}),(0,l.jsx)(s.td,{children:"Topic \u7684\u6b63\u5219\u8868\u8fbe\u5f0f"}),(0,l.jsx)(s.td,{children:"\u5fc5\u8981"}),(0,l.jsx)(s.td,{children:"test.*"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u7b2c\u4e09\u4e2a"}),(0,l.jsx)(s.td,{children:"\u6570\u636e\u5b58\u50a8\u8def\u5f84\u524d\u7f00"}),(0,l.jsx)(s.td,{children:"\u5fc5\u8981"}),(0,l.jsx)(s.td,{children:"/tmp/lakesoul/data"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u7b2c\u56db\u4e2a"}),(0,l.jsx)(s.td,{children:"\u4efb\u52a1 checkpoint \u8def\u5f84"}),(0,l.jsx)(s.td,{children:"\u5fc5\u8981"}),(0,l.jsx)(s.td,{children:"/tmp/lakesoul/checkpoint"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u7b2c\u4e94\u4e2a"}),(0,l.jsx)(s.td,{children:"LakeSoul \u4e2d\u6570\u636e\u5e93\u540d"}),(0,l.jsx)(s.td,{children:"\u5fc5\u8981"}),(0,l.jsx)(s.td,{children:"kafka"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u7b2c\u516d\u4e2a"}),(0,l.jsx)(s.td,{children:"\u6570\u636e\u4ecetopic\u6700\u65b0\u8fd8\u662f\u6700\u65e9\u4f4d\u7f6e\u5f00\u59cb\u540c\u6b65"}),(0,l.jsx)(s.td,{children:"\u5fc5\u8981"}),(0,l.jsx)(s.td,{children:"'earliest' \u6216\u8005 'latest'"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u7b2c\u4e03\u4e2a"}),(0,l.jsx)(s.td,{children:"\u662f\u5426\u4e3a\u8868\u6dfb\u52a0\u5206\u533a"}),(0,l.jsx)(s.td,{children:"\u5fc5\u8981"}),(0,l.jsx)(s.td,{children:"'true' \u6216\u8005 'false'"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u7b2c\u516b\u4e2a"}),(0,l.jsx)(s.td,{children:"Schema Registry \u670d\u52a1\u8fde\u63a5\u5730\u5740"}),(0,l.jsx)(s.td,{children:"\u4e0d\u5fc5\u8981"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.a,{href:"http://localhost:8081",children:"http://localhost:8081"})})]})]})]}),"\n",(0,l.jsx)(s.admonition,{type:"tip",children:(0,l.jsx)(s.p,{children:'\u5982\u679c\u7b2c\u4e03\u4e2a\u53c2\u6570\u8bbe\u7f6e(\u4e3a\u8868\u6dfb\u52a0\u5206\u533a): true\uff0c\u5219\u5c06\u4e3a\u6240\u6709\u8868\u81ea\u52a8\u521b\u5efa\u540d\u4e3a "lakeoul_dt" \u7684\u5206\u533a\u5b57\u6bb5\uff0c\u503c\u4e3a "yyyyMMddHH" \u683c\u5f0f\u7684\u65f6\u95f4\u6233\u3002'})}),"\n",(0,l.jsx)(s.h2,{id:"3-\u4efb\u52a1\u6d41\u7a0b\u793a\u4f8b",children:"3. \u4efb\u52a1\u6d41\u7a0b\u793a\u4f8b"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:'\u5047\u8bbe Kafka \u96c6\u7fa4\u5df2\u7ecf\u5b58\u5728\u3002\u5728\u8fd9\u91cc\uff0c\u901a\u8fc7 Docker Compose \u8fd0\u884c Kafka \u96c6\u7fa4\u3002\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a "test" \u7684\u4e3b\u9898\u5e76\u5411\u5176\u4e2d\u5199\u5165\u4e00\u4e9b\u6570\u636e\u3002 Kafka bootstrap.servers: localhost:9092.'}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:'# \u521b\u5efa topic \'test\'\nbin# ./kafka-topics.sh --create --topic test --bootstrap-server localhost:9092 --replication-factor 1 --partitions 4\n\n# \u67e5\u770b topic \u5217\u8868\nbin# ./kafka-topics.sh  --list --bootstrap-server localhost:9092\ntest\n\n# \u5411 \u540d\u4e3a \'test\' \u7684topic\u4e2d\u5199\u5165\u4e00\u4e9b\u6570\u636e\nbin# ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test\n>{"before":{"id":1,"rangeid":2,"value":"sms"},"after":{"id":2,"rangeid":2,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":1}\n>{"before":{"id":2,"rangeid":2,"value":"sms"},"after":{"id":2,"rangeid":2,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":2}\n>{"before":{"id":3,"rangeid":2,"value":"sms"},"after":{"id":2,"rangeid":2,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":3}\n>{"before":{"id":4,"rangeid":2,"value":"sms"},"after":{"id":2,"rangeid":2,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":4}\n>{"before":{"id":5,"rangeid":2,"value":"sms"},"after":{"id":2,"rangeid":2,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":5}\n'})}),"\n",(0,l.jsxs)(s.ol,{start:"2",children:["\n",(0,l.jsx)(s.li,{children:"\u63d0\u4ea4 Kafka Stream \u4efb\u52a1. \u5c06\u4e0a\u8ff0\u4e0b\u8f7d\u7684\u4f9d\u8d56 jars \u653e\u5230 $SPARK_HOME/jars \u76ee\u5f55\u4e0b."}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"export lakesoul_home=./pg.properties && ./bin/spark-submit \\\n--class org.apache.spark.sql.lakesoul.kafka.KafkaStream \\\n--driver-memory 4g \\\n--executor-memory 4g \\\n--master local[4] \\\n./jars/lakesoul-spark-2.5.1-spark-3.3.jar \\\nlocalhost:9092 test.* /tmp/kafka/data /tmp/kafka/checkpoint/ kafka earliest false\n"})}),"\n",(0,l.jsxs)(s.ol,{start:"3",children:["\n",(0,l.jsx)(s.li,{children:"\u901a\u8fc7 spark-shell \u67e5\u770b\u5199\u5165 LakeSoul \u4e2d\u7684\u6570\u636e"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:'scala> import com.dmetasoul.lakesoul.tables.LakeSoulTable\nimport com.dmetasoul.lakesoul.tables.LakeSoulTable\n\nscala> val tablepath="/tmp/kafka/data/kafka/test"\ntablepath: String = /tmp/kafka/data/kafka/test\n\nscala> val lake = LakeSoulTable.forPath(tablepath)\nlake: com.dmetasoul.lakesoul.tables.LakeSoulTable = com.dmetasoul.lakesoul.tables.LakeSoulTable@585a2ad9\n\nscala> lake.toDF.show(false)\n+----------------------------------+----------------------------------+---+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------+\n|after                             |before                            |op |source                                                                                                                                                                                                                                                                                                 |transaction|ts_ms        |\n+----------------------------------+----------------------------------+---+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------+\n|{"id":2,"rangeid":2,"value":"sms"}|{"id":1,"rangeid":2,"value":"sms"}|c  |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|1          |1644461444777|\n|{"id":2,"rangeid":2,"value":"sms"}|{"id":3,"rangeid":2,"value":"sms"}|c  |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|3          |1644461444777|\n|{"id":2,"rangeid":2,"value":"sms"}|{"id":5,"rangeid":2,"value":"sms"}|c  |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|5          |1644461444777|\n|{"id":2,"rangeid":2,"value":"sms"}|{"id":2,"rangeid":2,"value":"sms"}|c  |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|2          |1644461444777|\n|{"id":2,"rangeid":2,"value":"sms"}|{"id":4,"rangeid":2,"value":"sms"}|c  |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|4          |1644461444777|\n+----------------------------------+----------------------------------+---+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------+\n'})}),"\n",(0,l.jsxs)(s.ol,{start:"4",children:["\n",(0,l.jsx)(s.li,{children:"\u521b\u5efa\u65b0\u7684 topic 'test_1' \u5e76\u5411\u5176\u4e2d\u5199\u5165\u4e00\u4e9b\u6570\u636e"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:'# \u521b\u5efa topic \'test_1\' \nbin# ./kafka-topics.sh --create --topic test_1 --bootstrap-server localhost:9092 --replication-factor 1 --partitions 4\n\n# \u67e5\u770b topic list\nbin# ./kafka-topics.sh  --list --bootstrap-server localhost:9092\ntest\ntest_1\n\n# \u5411 topic \'test_1\' \u4e2d\u5199\u5165\u4e00\u4e9b\u6570\u636e\nbin# ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test_1\n>{"before":{"id":1,"rangeid":2,"value":"sms"},"after":{"id":1,"rangeid":1,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":1}\n>{"before":{"id":2,"rangeid":2,"value":"sms"},"after":{"id":2,"rangeid":2,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":2}\n>{"before":{"id":3,"rangeid":2,"value":"sms"},"after":{"id":3,"rangeid":3,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":3}\n>{"before":{"id":4,"rangeid":2,"value":"sms"},"after":{"id":4,"rangeid":4,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":4}\n>{"before":{"id":5,"rangeid":2,"value":"sms"},"after":{"id":5,"rangeid":5,"value":"sms"},"source":{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null},"op":"c","ts_ms":1644461444777,"transaction":5}\n'})}),"\n",(0,l.jsxs)(s.ol,{start:"5",children:["\n",(0,l.jsx)(s.li,{children:"\u521b\u5efa\u65b0\u7684 topic \u540e\uff0c\u6570\u636e\u540c\u6b65\u5230 Lakesoul \u9700\u89815\u5206\u949f\u65f6\u95f4\u30025\u5206\u949f\u540e\u67e5\u770b LakeSoul \u4e2d\u7684\u6570\u636e"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:'scala> val tablepath_1="/tmp/kafka/data/kafka/test_1"\ntablepath_1: String = /tmp/kafka/data/kafka/test_1\n\nscala> val lake_1 = LakeSoulTable.forPath(tablepath_1)\nlake: com.dmetasoul.lakesoul.tables.LakeSoulTable = com.dmetasoul.lakesoul.tables.LakeSoulTable@43900101\n\nlake_1.toDF.show(false)\n+----------------------------------+----------------------------------+----+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------+\n|after                             |before                            |op  |source                                                                                                                                                                                                                                                                                                 |transaction|ts_ms        |\n+----------------------------------+----------------------------------+----+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------+\n|{"id":2,"rangeid":2,"value":"sms"}|{"id":2,"rangeid":2,"value":"sms"}|c   |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|2          |1644461444777|\n|{"id":1,"rangeid":1,"value":"sms"}|{"id":1,"rangeid":2,"value":"sms"}|c   |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|1          |1644461444777|\n|{"id":4,"rangeid":4,"value":"sms"}|{"id":4,"rangeid":2,"value":"sms"}|c   |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|4          |1644461444777|\n|{"id":3,"rangeid":3,"value":"sms"}|{"id":3,"rangeid":2,"value":"sms"}|c   |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|3          |1644461444777|\n|{"id":5,"rangeid":5,"value":"sms"}|{"id":5,"rangeid":2,"value":"sms"}|c   |{"version":"1.8.0.Final","connector":"mysql","name":"cdcserver","ts_ms":1644461444000,"snapshot":"false","db":"cdc","sequence":null,"table":"sms","server_id":529210004,"gtid":"de525a81-57f6-11ec-9b60-fa163e692542:1621099","file":"binlog.000033","pos":54831329,"row":0,"thread":null,"query":null}|5          |1644461444777|\n+----------------------------------+----------------------------------+----+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------+\n'})}),"\n",(0,l.jsxs)(s.ol,{start:"6",children:["\n",(0,l.jsx)(s.li,{children:"\u5982\u679c Kafka \u96c6\u7fa4\u4f7f\u7528 Schema Registry\u670d\u52a1\uff0c\u63d0\u4ea4\u4efb\u52a1\u65f6\u53c2\u6570\u6700\u540e\u9700\u8981\u586b\u5199 schema registry \u670d\u52a1\u5730\u5740\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"export lakesoul_home=./pg.properties && ./bin/spark-submit \\\n--class org.apache.spark.sql.lakesoul.kafka.KafkaStream \\\n--driver-memory 4g \\\n--executor-memory 4g \\\n--master local[4] \\\n./jars/lakesoul-spark-2.5.1-spark-3.3.jar \\\nlocalhost:9092 test.* /tmp/kafka/data /tmp/kafka/checkpoint/ kafka earliest false http://localhost:8081\n"})})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,s,a)=>{a.d(s,{Z:()=>o,a:()=>r});var l=a(7294);const n={},t=l.createContext(n);function r(e){const s=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);