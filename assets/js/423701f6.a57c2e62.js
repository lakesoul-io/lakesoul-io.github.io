"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[7394],{9020:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=n(5893),t=n(1151);const l={},r="LakeSoul CDC Ingestion via Spark Streaming",o={id:"Tutorials/consume-cdc-via-spark-streaming",title:"LakeSoul CDC Ingestion via Spark Streaming",description:"\x3c!--",source:"@site/docs/02-Tutorials/01-consume-cdc-via-spark-streaming.md",sourceDirName:"02-Tutorials",slug:"/Tutorials/consume-cdc-via-spark-streaming",permalink:"/docs/Tutorials/consume-cdc-via-spark-streaming",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/02-Tutorials/01-consume-cdc-via-spark-streaming.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flink Getting Started Guide",permalink:"/docs/Getting Started/Flink-Guide"},next:{title:"LakeSoul Flink CDC Whole Database Synchronization Tutorial",permalink:"/docs/Tutorials/flink-cdc-sink/"}},i={},c=[{value:"1. LakeSoul CDC Pipeline",id:"1-lakesoul-cdc-pipeline",level:2},{value:"2. Setup MySQL",id:"2-setup-mysql",level:2},{value:"2.1 Create database and table",id:"21-create-database-and-table",level:3},{value:"2.2 Use cdc benchmark generator:",id:"22-use-cdc-benchmark-generator",level:3},{value:"3. Setup Kafka (Ignore this step if you already have Kafka running)",id:"3-setup-kafka-ignore-this-step-if-you-already-have-kafka-running",level:2},{value:"3.1 Install Kafka via K8s (https://strimzi.io/docs/operators/latest/deploying.html#deploying-cluster-operator-str):",id:"31-install-kafka-via-k8s-httpsstrimziiodocsoperatorslatestdeployinghtmldeploying-cluster-operator-str",level:3},{value:"4. Setup Debezium (Ignore if you already have it)",id:"4-setup-debezium-ignore-if-you-already-have-it",level:2},{value:"4.1 Install Debezium",id:"41-install-debezium",level:3},{value:"4.2 Setup Debezium sync task",id:"42-setup-debezium-sync-task",level:3},{value:"5. Start Spark Streaming Sink to LakeSoul",id:"5-start-spark-streaming-sink-to-lakesoul",level:2},{value:"5.1 Setup",id:"51-setup",level:3},{value:"5.2 Start Spark Shell",id:"52-start-spark-shell",level:3},{value:"5.3 Create a LakeSoul Table",id:"53-create-a-lakesoul-table",level:3},{value:"5.4 Start spark streaming to sync Debezium CDC data into LakeSoul",id:"54-start-spark-streaming-to-sync-debezium-cdc-data-into-lakesoul",level:3},{value:"5.5 Read from LakeSoul to view synchronized data:",id:"55-read-from-lakesoul-to-view-synchronized-data",level:3}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"lakesoul-cdc-ingestion-via-spark-streaming",children:"LakeSoul CDC Ingestion via Spark Streaming"}),"\n",(0,s.jsx)(a.h2,{id:"1-lakesoul-cdc-pipeline",children:"1. LakeSoul CDC Pipeline"}),"\n",(0,s.jsx)(a.p,{children:"LakeSoul supports ingesting any source of CDC by transforming CDC markups to LakeSoul's own field."}),"\n",(0,s.jsx)(a.p,{children:"There are two ways of CDC ingestion for LakeSoul: 1) Write CDC stream into Kafka and use spark streaming to transform and write into LakeSoul (already supported); 2) Use Flink CDC to directly write into LakeSoul."}),"\n",(0,s.jsx)(a.p,{children:"In this demo, we'll demonstrate the first way. We'll setup a MySQL instance, use scripts to generate DB modifications and use Debezium to sync them into Kafka, and then into LakeSoul via Spark Streaming."}),"\n",(0,s.jsx)(a.h2,{id:"2-setup-mysql",children:"2. Setup MySQL"}),"\n",(0,s.jsx)(a.h3,{id:"21-create-database-and-table",children:"2.1 Create database and table"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"Create database cdc;\nCREATE TABLE test(\n id int primary key,\n rangeid int,\n value varchar(100) \n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n"})}),"\n",(0,s.jsx)(a.h3,{id:"22-use-cdc-benchmark-generator",children:"2.2 Use cdc benchmark generator:"}),"\n",(0,s.jsxs)(a.p,{children:["We provide a mysql data generator for testing and benchmarking cdc sync. The generator is located under diretory ",(0,s.jsx)(a.code,{children:"examples/cdc_ingestion_debezium/MysqlBenchmark"}),"."]}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["Modify mysqlcdc.conf as needed","\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ini",children:" user=user name of mysql\n passwd=password of mysql\n host=host of mysql\n port=port of mysql\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Insert data into table","\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"# Inside () are comments of parameters, remove them before execution\n bash MysqlCdcBenchmark.sh  insert  cdc(db name) test(table name) 10(lines to insert) 1(thread number)\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Update data into table","\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"bash MysqlCdcBenchmark.sh  update  cdc test id(primary key) value(column to update) 10(lines to update) \n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Delete data from table","\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:" bash  MysqlCdcBenchmark.sh  delete  cdc  test  10(lines to delete)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"3-setup-kafka-ignore-this-step-if-you-already-have-kafka-running",children:"3. Setup Kafka (Ignore this step if you already have Kafka running)"}),"\n",(0,s.jsxs)(a.h3,{id:"31-install-kafka-via-k8s-httpsstrimziiodocsoperatorslatestdeployinghtmldeploying-cluster-operator-str",children:["3.1 Install Kafka via K8s (",(0,s.jsx)(a.a,{href:"https://strimzi.io/docs/operators/latest/deploying.html#deploying-cluster-operator-str",children:"https://strimzi.io/docs/operators/latest/deploying.html#deploying-cluster-operator-str"}),"):"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"kubectl create -f install/cluster-operator -n my-cluster-operator-namespace\nkubectl apply -f examples/kafka/kafka-persistent-single.yaml\n"})}),"\n",(0,s.jsx)(a.h2,{id:"4-setup-debezium-ignore-if-you-already-have-it",children:"4. Setup Debezium (Ignore if you already have it)"}),"\n",(0,s.jsx)(a.h3,{id:"41-install-debezium",children:"4.1 Install Debezium"}),"\n",(0,s.jsx)(a.p,{children:"To quickly setup a running container of Debezium on K8s:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",children:'apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: dbz-pod-claim\nspec:\n  accessModes:\n    - ReadWriteOnce\n  # replace to actual StorageClass in your cluster\n  storageClassName: \n  resources:\n    requests:\n      storage: 10Gi\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: dbz-pod\n  namespace: dmetasoul\nspec:\n  restartPolicy: Never\n  containers:\n  - name: dbs\n    image: debezium/connect:latest\n    env:\n      - name: BOOTSTRAP_SERVERS\n        # replace to actual kafka host\n        value: ${kafka_host}:9092\n      - name: GROUP_ID\n        value: "1"\n      - name: CONFIG_STORAGE_TOPIC\n        value: my_connect_configs\n      - name: OFFSET_STORAGE_TOPIC\n        value: my_connect_offsets\n      - name: STATUS_STORAGE_TOPIC\n        value: my_connect_statuses\n    resources:\n      requests:\n        cpu: 500m\n        memory: 4Gi\n      limits:\n        cpu: 4\n        memory: 8Gi\n    volumeMounts:\n      - mountPath: "/kafka/data"\n        name: dbz-pv-storage\n\n  volumes:\n    - name: dbz-pv-storage\n      persistentVolumeClaim:\n        claimName: dbz-pod-claim\n'})}),"\n",(0,s.jsx)(a.p,{children:"Then apply this yaml file:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"kubectl apply -f pod.yaml\n"})}),"\n",(0,s.jsx)(a.h3,{id:"42-setup-debezium-sync-task",children:"4.2 Setup Debezium sync task"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'# remember to replace {dbzhost} to actual dbz deployment ip address\n# replace database parameters accordingly\ncurl -X POST http://{dbzhost}:8083/connectors/ -H \'Cache-Control: no-cache\' -H \'Content-Type: application/json\' -d \'{\n    "name": "cdc",\n    "config": {\n        "connector.class": "io.debezium.connector.mysql.MySqlConnector",\n        "key.converter": "org.apache.kafka.connect.json.JsonConverter",\n        "key.converter.schemas.enable": "false",\n        "value.converter": "org.apache.kafka.connect.json.JsonConverter",\n        "value.converter.schemas.enable": "false",\n        "tasks.max": "1",\n        "database.hostname": "mysqlhost",\n        "database.port": "mysqlport",\n        "database.user": "mysqluser",\n        "database.password": "mysqlpassword",\n        "database.server.id": "1",\n        "database.server.name": "cdcserver",\n        "database.include.list": "cdc",\n        "database.history.kafka.bootstrap.servers": "kafkahost:9092",\n        "database.history.kafka.topic": "schema-changes.cdc",\n        "decimal.handling.mode": "double",\n        "table.include.list":"cdc.test" \n    }\n}\'\n'})}),"\n",(0,s.jsx)(a.p,{children:"Then check if sync task has been succcessfully created:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'curl -H "Accept:application/json" dbzhost:8083 -X GET http://dbzhost:8083/connectors/\n'})}),"\n",(0,s.jsx)(a.p,{children:"You could delete sync task after testing finished:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -i  -X DELETE http://dbzhost:8083/connectors/cdc\n"})}),"\n",(0,s.jsx)(a.h2,{id:"5-start-spark-streaming-sink-to-lakesoul",children:"5. Start Spark Streaming Sink to LakeSoul"}),"\n",(0,s.jsx)(a.h3,{id:"51-setup",children:"5.1 Setup"}),"\n",(0,s.jsxs)(a.p,{children:["Please refer to ",(0,s.jsx)(a.a,{href:"/docs/Getting%20Started/setup-local-env",children:"Quick Start"})," on how to setup LakeSoul and Spark environment."]}),"\n",(0,s.jsx)(a.h3,{id:"52-start-spark-shell",children:"5.2 Start Spark Shell"}),"\n",(0,s.jsx)(a.p,{children:"Spark shell needs to be started with kafka dependencies:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"./bin/spark-shell --packages org.apache.spark:spark-sql-kafka-0-10_2.12:3.3.2 --conf spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension --conf spark.sql.catalog.spark_catalog=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog\n"})}),"\n",(0,s.jsxs)(a.p,{children:["For other required settings such as meta database connection, please refer to ",(0,s.jsx)(a.a,{href:"/docs/Usage%20Docs/setup-meta-env",children:"Setup Meta Env"})," and ",(0,s.jsx)(a.a,{href:"/docs/Usage%20Docs/setup-spark",children:"Setup Spark"})]}),"\n",(0,s.jsx)(a.h3,{id:"53-create-a-lakesoul-table",children:"5.3 Create a LakeSoul Table"}),"\n",(0,s.jsxs)(a.p,{children:["We'll create a LakeSoul table called MysqlCdcTest, which will sync with the MySQL table we just setup. The LakeSoul table also has a primary key ",(0,s.jsx)(a.code,{children:"id"}),", and we need an extra field ",(0,s.jsx)(a.code,{children:"op"})," to represent CDC ops and add a table property ",(0,s.jsx)(a.code,{children:"lakesoul_cdc_change_column"})," with ",(0,s.jsx)(a.code,{children:"op"})," field."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nval path="/opt/spark/cdctest"\nval data=Seq((1L,1L,"hello world","insert")).toDF("id","rangeid","value","op")\nLakeSoulTable.createTable(data, path).shortTableName("cdc").hashPartitions("id").hashBucketNum(2).rangePartitions("rangeid").tableProperty("lakesoul_cdc_change_column" -> "op").create()\n'})}),"\n",(0,s.jsx)(a.h3,{id:"54-start-spark-streaming-to-sync-debezium-cdc-data-into-lakesoul",children:"5.4 Start spark streaming to sync Debezium CDC data into LakeSoul"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nval path="/opt/spark/cdctest"\nval lakeSoulTable = LakeSoulTable.forPath(path)\nvar strList = List.empty[String]\n\n//js1 is just a fake data to help generate the schema\nval js1 = """{\n          |  "before": {\n          |    "id": 2,\n          |    "rangeid": 2,\n          |    "value": "sms"\n          |  },\n          |  "after": {\n          |    "id": 2,\n          |    "rangeid": 2,\n          |    "value": "sms"\n          |  },\n          |  "source": {\n          |    "version": "1.8.0.Final",\n          |    "connector": "mysql",\n          |    "name": "cdcserver",\n          |    "ts_ms": 1644461444000,\n          |    "snapshot": "false",\n          |    "db": "cdc",\n          |    "sequence": null,\n          |    "table": "sms",\n          |    "server_id": 529210004,\n          |    "gtid": "de525a81-57f6-11ec-9b60-fa163e692542:1621099",\n          |    "file": "binlog.000033",\n          |    "pos": 54831329,\n          |    "row": 0,\n          |    "thread": null,\n          |    "query": null\n          |  },\n          |  "op": "c",\n          |  "ts_ms": 1644461444777,\n          |  "transaction": null\n          |}""".stripMargin\nstrList = strList :+ js1\nval rddData = spark.sparkContext.parallelize(strList)\nval resultDF = spark.read.json(rddData)\nval sche = resultDF.schema\n\nimport org.apache.spark.sql.{DataFrame, SaveMode, SparkSession}\n\n// Specify kafka settings\nval kfdf = spark.readStream\n  .format("kafka")\n  .option("kafka.bootstrap.servers", "kafkahost:9092")\n  .option("subscribe", "cdcserver.cdc.test")\n  .option("startingOffsets", "latest")\n  .load()\n\n// parse CDC json from debezium, and transform `op` field into one of \'insert\', \'update\', \'delete\' into LakeSoul\nval kfdfdata = kfdf\n  .selectExpr("CAST(value AS STRING) as value")\n  .withColumn("payload", from_json($"value", sche))\n  .filter("value is not null")\n  .drop("value")\n  .select("payload.after", "payload.before", "payload.op")\n  .withColumn(\n    "op",\n    when($"op" === "c", "insert")\n      .when($"op" === "u", "update")\n      .when($"op" === "d", "delete")\n      .otherwise("unknown")\n  )\n  .withColumn(\n    "data",\n    when($"op" === "insert" || $"op" === "update", $"after")\n      .when($"op" === "delete", $"before")\n  )\n  .drop($"after")\n  .drop($"before")\n  .select("data.*", "op")\n\n// upsert into LakeSoul with microbatch\nkfdfdata.writeStream\n  .foreachBatch { (batchDF: DataFrame, _: Long) =>\n    {\n      lakeSoulTable.upsert(batchDF)\n      batchDF.show\n    }\n  }\n  .start()\n  .awaitTermination()\n'})}),"\n",(0,s.jsx)(a.h3,{id:"55-read-from-lakesoul-to-view-synchronized-data",children:"5.5 Read from LakeSoul to view synchronized data:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'import com.dmetasoul.lakesoul.tables.LakeSoulTable\nval path="/opt/spark/cdctest"\nval lakeSoulTable = LakeSoulTable.forPath(path)\nlakeSoulTable.toDF.select("*").show()\n'})})]})}function u(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>r});var s=n(7294);const t={},l=s.createContext(t);function r(e){const a=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:a},e.children)}}}]);