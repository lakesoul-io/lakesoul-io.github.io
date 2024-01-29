"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[4893],{1531:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=l(5893),n=l(1151),r=l(4866),t=l(5162);const o={},c="Spark \u5feb\u901f\u5f00\u59cb",i={id:"Getting Started/spark-guide",title:"Spark \u5feb\u901f\u5f00\u59cb",description:"\x3c!--",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/01-Getting Started/02-spark-guide.mdx",sourceDirName:"01-Getting Started",slug:"/Getting Started/spark-guide",permalink:"/zh-Hans/docs/Getting Started/spark-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/01-Getting Started/02-spark-guide.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u642d\u5efa\u8fd0\u884c\u73af\u5883",permalink:"/zh-Hans/docs/Getting Started/setup-local-env"},next:{title:"Flink \u5feb\u901f\u5f00\u59cb",permalink:"/zh-Hans/docs/Getting Started/Flink-Guide"}},u={},d=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Spark 3 Support Matrix",id:"spark-3-support-matrix",level:3},{value:"Spark Shell/SQL/PySpark",id:"spark-shellsqlpyspark",level:3},{value:"Maven \u9879\u76ee\u4f9d\u8d56\u914d\u7f6e",id:"maven-\u9879\u76ee\u4f9d\u8d56\u914d\u7f6e",level:3},{value:"\u521b\u5efa\u547d\u540d\u7a7a\u95f4",id:"\u521b\u5efa\u547d\u540d\u7a7a\u95f4",level:2},{value:"\u521b\u5efa\u8868",id:"\u521b\u5efa\u8868",level:2},{value:"\u4e3b\u952e\u8868",id:"\u4e3b\u952e\u8868",level:3},{value:"\u4e3b\u952e CDC \u8868",id:"\u4e3b\u952e-cdc-\u8868",level:3},{value:"\u6570\u636e\u63d2\u5165/\u5408\u5e76",id:"\u6570\u636e\u63d2\u5165\u5408\u5e76",level:2},{value:"\u6570\u636e\u66f4\u65b0",id:"\u6570\u636e\u66f4\u65b0",level:2},{value:"\u6570\u636e\u5220\u9664",id:"\u6570\u636e\u5220\u9664",level:2},{value:"\u6570\u636e\u67e5\u8be2",id:"\u6570\u636e\u67e5\u8be2",level:2},{value:"Time Travel\u67e5\u8be2",id:"time-travel\u67e5\u8be2",level:2},{value:"\u5168\u91cf\u67e5\u8be2",id:"\u5168\u91cf\u67e5\u8be2",level:3},{value:"\u5feb\u7167\u67e5\u8be2",id:"\u5feb\u7167\u67e5\u8be2",level:3},{value:"\u589e\u91cf\u67e5\u8be2",id:"\u589e\u91cf\u67e5\u8be2",level:3},{value:"\u66f4\u591a\u6848\u4f8b",id:"\u66f4\u591a\u6848\u4f8b",level:2}];function h(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"spark-\u5feb\u901f\u5f00\u59cb",children:"Spark \u5feb\u901f\u5f00\u59cb"}),"\n",(0,s.jsx)(a.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,s.jsxs)(a.p,{children:["\u8981\u5728Spark\u4e2d\u4f7f\u7528LakeSoul\uff0c\u8bf7\u9996\u5148\u914d\u7f6e",(0,s.jsx)(a.a,{href:"/zh-Hans/docs/Getting%20Started/setup-local-env",children:"Spark Catalog"}),"\u3002LakeSoul\u4f7f\u7528Apache Spark\u7684DataSourceV2 API\u6765\u5b9e\u73b0\u6570\u636e\u6e90\u548c\u76ee\u5f55\u3002\u6b64\u5916\uff0cLakeSoul\u8fd8\u63d0\u4f9b\u4e86 Scala \u7684\u8868API\uff0c\u4ee5\u6269\u5c55LakeSoul\u6570\u636e\u8868\u7684\u529f\u80fd\u3002"]}),"\n",(0,s.jsx)(a.h3,{id:"spark-3-support-matrix",children:"Spark 3 Support Matrix"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"LakeSoul"}),(0,s.jsx)(a.th,{children:"Spark Version"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"2.2.x-2.4.x"}),(0,s.jsx)(a.td,{children:"3.3.x"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"2.0.x-2.1.x"}),(0,s.jsx)(a.td,{children:"3.1.x"})]})]})]}),"\n",(0,s.jsx)(a.h3,{id:"spark-shellsqlpyspark",children:"Spark Shell/SQL/PySpark"}),"\n",(0,s.jsxs)(a.p,{children:["\u4f7f\u7528",(0,s.jsx)(a.code,{children:"LakeSoulSparkSessionExtension"})," sql\u6269\u5c55\u6765\u8fd0\u884cspark-shell/spark-sql/pyspark\u3002"]}),"\n",(0,s.jsxs)(r.Z,{defaultValue:"Spark SQL",values:[{label:"Spark SQL",value:"Spark SQL"},{label:"Scala",value:"Scala"},{label:"PySpark",value:"PySpark"}],children:[(0,s.jsx)(t.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"spark-sql --conf spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension --conf spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog --conf spark.sql.defaultCatalog=lakesoul  --jars lakesoul-spark-2.5.1-spark-3.3.jar\n"})})}),(0,s.jsx)(t.Z,{value:"Scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"spark-shell --conf spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension --conf spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog --conf spark.sql.defaultCatalog=lakesoul  --jars lakesoul-spark-2.5.1-spark-3.3.jar\n"})})}),(0,s.jsx)(t.Z,{value:"PySpark",label:"PySpark",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"wget https://github.com/lakesoul-io/LakeSoul/tree/main/python/lakesoul/spark/tables.py\npyspark --conf spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension --conf spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog --conf spark.sql.defaultCatalog=lakesoul --jars lakesoul-spark-2.5.1-spark-3.3.jar --py-files tables.py\n"})})})]}),"\n",(0,s.jsx)(a.h3,{id:"maven-\u9879\u76ee\u4f9d\u8d56\u914d\u7f6e",children:"Maven \u9879\u76ee\u4f9d\u8d56\u914d\u7f6e"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.dmetasoul</groupId>\n    <artifactId>lakesoul</artifactId>\n    <version>2.5.1-spark-3.3</version>\n</dependency>\n"})}),"\n",(0,s.jsx)(r.Z,{children:(0,s.jsx)(t.Z,{value:"Scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'// Scala\nimport org.apache.spark.sql.SparkSession\nimport org.apache.spark.sql.types._\nimport org.apache.spark.sql.Row\nimport org.apache.spark.sql.lakesoul.LakeSoulOptions\nimport spark.implicits._\nimport com.dmetasoul.lakesoul.tables.LakeSoulTable\n\n\nval builder = SparkSession.builder()\n    .master("local")\n    .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n    .config("spark.sql.catalog.spark_catalog", "org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog")\n    .config("spark.sql.defaultCatalog", "lakesoul")\nval spark = builder.getOrCreate()\n\n'})})})}),"\n",(0,s.jsx)(a.h2,{id:"\u521b\u5efa\u547d\u540d\u7a7a\u95f4",children:"\u521b\u5efa\u547d\u540d\u7a7a\u95f4"}),"\n",(0,s.jsxs)(a.p,{children:["\u9996\u5148\uff0c\u4e3aLakeSoul\u8868\u521b\u5efa\u4e00\u4e2anamespace\uff0c\u5982\u679c\u4e0d\u521b\u5efa\u5c06\u4f7f\u7528\u9ed8\u8ba4\u7684namespace\uff0cLakeSoul Catalog\u7684\u9ed8\u8ba4namespace\u662f",(0,s.jsx)(a.code,{children:"default"}),"\u3002"]}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(t.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"CREATE NAMESPACE IF NOT EXISTS lakesoul_namespace;\nUSE lakesoul_namespace;\nSHOW TABLES;\n"})})}),(0,s.jsx)(t.Z,{value:"Scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'// Scala\nspark.sql("CREATE NAMESPACE IF NOT EXISTS lakesoul_namespace")\nspark.sql("USE lakesoul_namespace")\nspark.sql("SHOW TABLES")\n'})})}),(0,s.jsx)(t.Z,{value:"PySpark",label:"PySpark",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'// python\nspark.sql("CREATE NAMESPACE IF NOT EXISTS lakesoul_namespace")\nspark.sql("USE lakesoul_namespace")\nspark.sql("SHOW TABLES")\n'})})})]}),"\n",(0,s.jsx)(a.h2,{id:"\u521b\u5efa\u8868",children:"\u521b\u5efa\u8868"}),"\n",(0,s.jsxs)(a.p,{children:["\u4f7f\u7528",(0,s.jsx)(a.code,{children:"USING lakesoul"}),"\u7684\u5b50\u53e5\u521b\u5efa\u4e00\u4e2a\u5206\u533a\u7684LakeSoul\u8868\uff0c\u6216\u4f7f\u7528",(0,s.jsx)(a.code,{children:"DataFrameWriterV2"})," API\uff0c\u7b2c\u4e00\u6b21\u5199\u5165\u65f6\u81ea\u52a8\u521b\u5efa\u76f8\u5e94\u7684LakeSoul\u8868\u3002"]}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(t.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"CREATE TABLE lakesoul_table (id BIGINT, name STRING, `date` STRING) \nUSING lakesoul \nPARTITIONED BY (`date`) \nLOCATION 'file:/tmp/lakesoul_namespace/lakesoul_table';\n"})})}),(0,s.jsx)(t.Z,{value:"Scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:"// Scala\nspark.sql(\"CREATE TABLE lakesoul_table (id BIGINT, name STRING, `date` STRING) USING lakesoul PARTITIONED BY (`date`) LOCATION 'file:/tmp/lakesoul_namespace/lakesoul_table'\")\n"})})}),(0,s.jsx)(t.Z,{value:"PySpark",label:"PySpark",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"// python\nspark.sql(\"CREATE TABLE lakesoul_table (id BIGINT, name STRING, `date` STRING) USING lakesoul PARTITIONED BY (`date`) LOCATION 'file:/tmp/lakesoul_namespace/lakesoul_table'\")\n"})})})]}),"\n",(0,s.jsx)(a.h3,{id:"\u4e3b\u952e\u8868",children:"\u4e3b\u952e\u8868"}),"\n",(0,s.jsx)(a.p,{children:"\u5728LakeSoul\u4e2d\uff0c\u5e26\u6709\u4e3b\u952e\u7684\u8868\u88ab\u5b9a\u4e49\u4e3a\u54c8\u5e0c\u5206\u533a\u8868\u3002\u4f7f\u7528USING lakesoul\u5b50\u53e5\uff0c\u5e76\u7ed3\u5408TBLPROPERTIES\u8bbe\u7f6e\uff08\u5176\u4e2d'hashPartitions'\u6307\u5b9a\u4ee5\u9017\u53f7\u5206\u9694\u7684\u4e3b\u952e\u5217\u8868\uff0c'hashBucketNum'\u6307\u5b9a\u54c8\u5e0c\u6876\u7684\u5927\u5c0f\uff09\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u54c8\u5e0c\u5206\u533a\u7684LakeSoul\u8868\u3002"}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(t.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"CREATE TABLE lakesoul_hash_table (id BIGINT NOT NULL, name STRING, date STRING) \nUSING lakesoul \nPARTITIONED BY (date) \nLOCATION 'file:/tmp/lakesoul_namespace/lakesoul_hash_table' \nTBLPROPERTIES ( 'hashPartitions'='id', 'hashBucketNum'='2');\n"})})}),(0,s.jsx)(t.Z,{value:"Scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:"// Scala\nspark.sql(\"CREATE TABLE lakesoul_hash_table (id BIGINT NOT NULL, name STRING, date STRING) USING lakesoul PARTITIONED BY (date) LOCATION 'file:/tmp/lakesoul_namespace/lakesoul_hash_table' TBLPROPERTIES ( 'hashPartitions'='id', 'hashBucketNum'='2')\")\n"})})}),(0,s.jsx)(t.Z,{value:"PySpark",label:"PySpark",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"// python\nspark.sql(\"CREATE TABLE lakesoul_hash_table (id BIGINT NOT NULL, name STRING, date STRING) USING lakesoul PARTITIONED BY (date) LOCATION 'file:/tmp/lakesoul_namespace/lakesoul_hash_table' TBLPROPERTIES ( 'hashPartitions'='id', 'hashBucketNum'='2')\")\n"})})})]}),"\n",(0,s.jsx)(a.h3,{id:"\u4e3b\u952e-cdc-\u8868",children:"\u4e3b\u952e CDC \u8868"}),"\n",(0,s.jsxs)(a.p,{children:["\u54c8\u5e0c\u5206\u533a\u7684LakeSoul\u8868\u5177\u6709\u53ef\u9009\u7684\u6570\u636e\u53d8\u66f4\u6355\u83b7\uff08CDC\uff09\u529f\u80fd\uff0c\u80fd\u591f\u8bb0\u5f55\u6570\u636e\u7684\u53d8\u5316\u3002\u8981\u521b\u5efa\u652f\u6301CDC\u7684LakeSoul\u8868\uff0c\u53ef\u4ee5\u5728\u54c8\u5e0c\u5206\u533a\u8868\u7684DDL\u8bed\u53e5\u4e2d\u6dfb\u52a0\u989d\u5916\u7684",(0,s.jsx)(a.code,{children:"TBLPROPERTIES"}),"\u8bbe\u7f6e\uff0c\u6307\u5b9a",(0,s.jsx)(a.code,{children:"'lakesoul_cdc_change_column'"}),"\u5c5e\u6027\u3002\u8fd9\u4e2a\u5c5e\u6027\u5b9a\u4e49\u4e86\u4e00\u4e2a\u9690\u5f0f\u5217\uff0c\u5e2e\u52a9\u8868\u6709\u6548\u5730\u5904\u7406CDC\u4fe1\u606f\uff0c\u4ece\u800c\u5b9e\u73b0\u5bf9\u6570\u636e\u53d8\u66f4\u7684\u7cbe\u786e\u8ffd\u8e2a\u548c\u7ba1\u7406\u3002"]}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(t.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"CREATE TABLE lakesoul_cdc_table (id BIGINT NOT NULL, name STRING, date STRING) \nUSING lakesoul \nPARTITIONED BY (date) \nLOCATION 'file:/tmp/lakesoul_namespace/lakesoul_cdc_table' \nTBLPROPERTIES('hashPartitions'='id', 'hashBucketNum'='2', 'lakesoul_cdc_change_column' = 'op');\n"})})}),(0,s.jsx)(t.Z,{value:"Scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:"// Scala\nspark.sql(\"CREATE TABLE lakesoul_cdc_table (id BIGINT NOT NULL, name STRING, date STRING) USING lakesoul PARTITIONED BY (date) LOCATION 'file:/tmp/lakesoul_namespace/lakesoul_cdc_table' TBLPROPERTIES('hashPartitions'='id', 'hashBucketNum'='2', 'lakesoul_cdc_change_column' = 'op')\")\n"})})}),(0,s.jsx)(t.Z,{value:"PySpark",label:"PySpark",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"// python\nspark.sql(\"CREATE TABLE lakesoul_cdc_table (id BIGINT NOT NULL, name STRING, date STRING) USING lakesoul PARTITIONED BY (date) LOCATION 'file:/tmp/lakesoul_namespace/lakesoul_cdc_table' TBLPROPERTIES('hashPartitions'='id', 'hashBucketNum'='2', 'lakesoul_cdc_change_column' = 'op')\")\n"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"\u6570\u636e\u63d2\u5165\u5408\u5e76",children:"\u6570\u636e\u63d2\u5165/\u5408\u5e76"}),"\n",(0,s.jsxs)(a.p,{children:["\u8981\u4f7f\u7528Spark SQL\u5411\u975e\u54c8\u5e0c\u5206\u533a\u8868\u5199\u5165\u6570\u636e\uff0c\u8bf7\u4f7f\u7528",(0,s.jsx)(a.code,{children:"INSERT INTO"}),"\u8bed\u53e5\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["\u8981\u4f7f\u7528DataFrame\u5411\u8868\u5199\u5165\u6570\u636e\uff0c\u8bf7\u4f7f\u7528",(0,s.jsx)(a.code,{children:"DataFrameWriterV2"})," API\u3002\u5982\u679c\u8fd9\u662f\u5bf9\u8be5\u8868\u7684\u7b2c\u4e00\u6b21\u5199\u5165\uff0c\u5b83\u8fd8\u5c06\u81ea\u52a8\u521b\u5efa\u76f8\u5e94\u7684LakeSoul\u8868\u3002"]}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(t.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"INSERT INTO TABLE lakesoul_table VALUES (1, 'Alice', '2024-01-01'), (2, 'Bob', '2024-01-01'), (1, 'Cathy', '2024-01-02');\n"})})}),(0,s.jsx)(t.Z,{value:"Scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'// Scala\nval data = Seq(Row(1L, "Alice", "2024-01-01"), Row(2L, "Bob", "2024-01-01"), Row(1L, "Cathy", "2024-01-02"))\nval schema = StructType(Seq(StructField("id", LongType, false), StructField("name", StringType, true), StructField("date", StringType, false)))\nval df = spark.createDataFrame(spark.sparkContext.parallelize(data), schema)\ndf.write.format("lakesoul").insertInto("lakesoul_table")\n\n'})})}),(0,s.jsx)(t.Z,{value:"PySpark",label:"PySpark",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'  // python\nfrom pyspark.sql.types import *\ndata = [(1,"Cathy","2024-01-02")]\nschema = StructType([StructField("id", LongType(), False), StructField("name", StringType(), True), StructField("date", StringType(), False)])\ndf = spark.createDataFrame(data,schema=schema)\ndf.write.format("lakesoul").insertInto("lakesoul_table")\n'})})})]}),"\n",(0,s.jsxs)(a.p,{children:["\u8981\u4f7f\u7528Spark SQL\u5411\u54c8\u5e0c\u5206\u533a\u8868\u5199\u5165\u6570\u636e\uff0c\u8bf7\u4f7f\u7528",(0,s.jsx)(a.code,{children:"Merge INTO"}),"\u8bed\u53e5\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["\u8981\u4f7f\u7528DataFrame\u5411\u54c8\u5e0c\u5206\u533a\u8868\u5199\u5165\u6570\u636e\uff0c\u8bf7\u4f7f\u7528",(0,s.jsx)(a.code,{children:"LakeSoulTable"}),"\u7684",(0,s.jsx)(a.code,{children:"upsert"})," API\u3002"]}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(t.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"CREATE OR REPLACE VIEW spark_catalog.default.source_view (id , name, date)\nAS SELECT 1L as `id`, 'George' as `name`, '2024-01-01' as `date`;\n\n\nMERGE INTO lakesoul_hash_table AS t \nUSING spark_catalog.default.source_view AS s\nON t.id = s.id\nWHEN MATCHED THEN UPDATE SET *\nWHEN NOT MATCHED THEN INSERT *;\n"})})}),(0,s.jsx)(t.Z,{value:"Scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'// Scala\nimport com.dmetasoul.lakesoul.tables.LakeSoulTable\nval tablePath = "file:/tmp/lakesoul_namespace/lakesoul_upsert_table"\n\n// Init hash table with first dataframe\nval df = Seq((20201101, 1, 1), (20201101, 2, 2), (20201101, 3, 3), (20201102, 4, 4)).toDF("range", "hash", "value")\nval writer = df.write.format("lakesoul").mode("overwrite")\n\nwriter\n    .option("rangePartitions", "range")\n    .option("hashPartitions", "hash")\n    .option("hashBucketNum", 2)\n    .save(tablePath)\n\n// merge the second dataframe into hash table using LakeSoulTable upsert API\nval dfUpsert = Seq((20201101, 1, 1), (20201101, 2, 2), (20201101, 3, 3), (20201102, 4, 4)).toDF("range", "hash", "value")\nLakeSoulTable.forPath(tablePath).upsert(dfUpsert)\n\n'})})}),(0,s.jsx)(t.Z,{value:"PySpark",label:"PySpark",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'  // python\nfrom pyspark.sql.types import *\nfrom tables import LakeSoulTable\ntablePath = "file:/tmp/lakesoul_namespace/lakesoul_upsert_table"\ndf = spark.createDataFrame([(20201101, 1, 1), (20201101, 2, 2), (20201101, 3, 3), (20201102, 4, 4)],schema=\'range string,hash string,value string\')\ndf.write.format("lakesoul").mode("overwrite").option("rangePartitions", "range").option("hashPartitions", "hash").option("hashBucketNum", 2).save(tablePath)\ndfUpsert = spark.createDataFrame([(20201111, 1, 1), (20201111, 2, 2), (20201111, 3, 3), (20201112, 4, 4)],schema=\'range string,hash string,value string\')\nLakeSoulTable.forPath(spark,tablePath).upsert(dfUpsert)\n'})})})]}),"\n",(0,s.jsx)(a.h2,{id:"\u6570\u636e\u66f4\u65b0",children:"\u6570\u636e\u66f4\u65b0"}),"\n",(0,s.jsxs)(a.p,{children:["LakeSoul\u8868\u53ef\u4ee5\u901a\u8fc7DataFrame\u6216\u4f7f\u7528\u6807\u51c6\u7684",(0,s.jsx)(a.code,{children:"UPDATE"}),"\u8bed\u53e5\u8fdb\u884c\u66f4\u65b0\u3002\u8981\u4f7f\u7528DataFrame\u66f4\u65b0\u8868\u4e2d\u7684\u6570\u636e\uff0c\u8bf7\u4f7f\u7528",(0,s.jsx)(a.code,{children:"LakeSoulTable"}),"\u7684",(0,s.jsx)(a.code,{children:"updateExpr"})," API\u3002"]}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(t.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"UPDATE lakesoul_table SET name = 'David' WHERE id = 2;\n"})})}),(0,s.jsx)(t.Z,{value:"Scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'// Scala\nval tablePath = "file:/tmp/lakesoul_namespace/lakesoul_table"\nLakeSoulTable.forPath(tablePath).updateExpr("id = 2", Seq(("name"->"\'David\'")).toMap)\n'})})}),(0,s.jsx)(t.Z,{value:"PySpark",label:"PySpark",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'  // python\nfrom tables import LakeSoulTable\ntablePath = "file:/tmp/lakesoul_namespace/lakesoul_upsert_table"\nLakeSoulTable.forPath(spark,tablePath).update("hash = 4", { "value":"5"})\n'})})})]}),"\n",(0,s.jsx)(a.h2,{id:"\u6570\u636e\u5220\u9664",children:"\u6570\u636e\u5220\u9664"}),"\n",(0,s.jsxs)(a.p,{children:["LakeSoul\u8868\u53ef\u4ee5\u901a\u8fc7DataFrame\u6216\u4f7f\u7528\u6807\u51c6\u7684",(0,s.jsx)(a.code,{children:"DELETE"}),"\u8bed\u53e5\u6765\u5220\u9664\u8bb0\u5f55\u3002\u8981\u4f7f\u7528DataFrame\u4ece\u8868\u4e2d\u5220\u9664\u6570\u636e\uff0c\u8bf7\u4f7f\u7528",(0,s.jsx)(a.code,{children:"LakeSoulTable"}),"\u7684",(0,s.jsx)(a.code,{children:"delete"})," API\u3002"]}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(t.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"DELETE FROM lakesoul_table WHERE id =1;\n"})})}),(0,s.jsx)(t.Z,{value:"Scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'// Scala\nval tablePath = "file:/tmp/lakesoul_namespace/lakesoul_table"\nLakeSoulTable.forPath(tablePath).delete("id = 1 or id =2")\n'})})}),(0,s.jsx)(t.Z,{value:"PySpark",label:"PySpark",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'  // python\nfrom tables import LakeSoulTable\ntablePath = "file:/tmp/lakesoul_namespace/lakesoul_upsert_table"\nLakeSoulTable.forPath(spark,tablePath).delete("hash = 4")\n'})})})]}),"\n",(0,s.jsx)(a.h2,{id:"\u6570\u636e\u67e5\u8be2",children:"\u6570\u636e\u67e5\u8be2"}),"\n",(0,s.jsx)(a.p,{children:"LakeSoul\u8868\u53ef\u4ee5\u4f7f\u7528DataFrame\u6216Spark SQL\u8fdb\u884c\u67e5\u8be2\u3002"}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(t.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM lakesoul_table;\n"})})}),(0,s.jsx)(t.Z,{value:"Scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'// Scala\n\n// query data with DataFrameReader API\nval tablePath = "file:/tmp/lakesoul_namespace/lakesoul_table"\nspark.read.format("lakesoul").load(tablePath)\n\n// query data with LakeSoulTable API\nval tablePath = "file:/tmp/lakesoul_namespace/lakesoul_table"\nLakeSoulTable.forPath(tablePath).toDF\n\nval tableName = "lakesoul_table"\nLakeSoulTable.forName(tableName).toDF\n'})})}),(0,s.jsx)(t.Z,{value:"PySpark",label:"PySpark",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'  // python\nfrom tables import LakeSoulTable\ntablePath = "file:/tmp/lakesoul_namespace/lakesoul_upsert_table"\n\n// query data with LakeSoulTable API\nLakeSoulTable.forPath(spark,tablePath).toDF().show()\n\n// query data with DataFrameReader API\nspark.read.format("lakesoul").load(tablePath).show()\n'})})})]}),"\n",(0,s.jsx)(a.h2,{id:"time-travel\u67e5\u8be2",children:"Time Travel\u67e5\u8be2"}),"\n",(0,s.jsx)(a.p,{children:"LakeSoul\u652f\u6301Time Travel\u67e5\u8be2\uff0c\u53ef\u4ee5\u67e5\u8be2\u5386\u53f2\u4e0a\u4efb\u4f55\u65f6\u95f4\u70b9\u7684\u8868\u6216\u4e24\u4e2a\u63d0\u4ea4\u65f6\u95f4\u4e4b\u95f4\u7684\u66f4\u6539\u6570\u636e\u3002"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'// Scala\nval tablePath = "file:/tmp/lakesoul_namespace/cdc_table"\nSeq(("range1", "hash1", "insert"), ("range2", "hash2", "insert"), ("range3", "hash2", "insert"), ("range4", "hash2", "insert"), ("range4", "hash4", "insert"), ("range3", "hash3", "insert"))\n    .toDF("range", "hash", "op")\n    .write\n    .mode("append")\n    .format("lakesoul")\n    .option("rangePartitions", "range")\n    .option("hashPartitions", "hash")\n    .option("hashBucketNum", "2")\n    .option("shortTableName", "cdc_table")\n    .option("lakesoul_cdc_change_column", "op")\n    .save(tablePath)\n// record the version of 1st commit \nimport java.text.SimpleDateFormat\n\nval versionA: String = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(System.currentTimeMillis)\n\n\nval lakeTable = LakeSoulTable.forPath(tablePath)\nlakeTable.upsert(Seq(("range1", "hash1-1", "delete"), ("range2", "hash2-10", "delete"))\n.toDF("range", "hash", "op"))\n// record the version of 2nd commit \nval versionB: String = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(System.currentTimeMillis)\n\nlakeTable.upsert(Seq(("range1", "hash1-13", "insert"), ("range2", "hash2-13", "update"))\n.toDF("range", "hash", "op"))\nlakeTable.upsert(Seq(("range1", "hash1-15", "insert"), ("range2", "hash2-15", "update"))\n.toDF("range", "hash", "op"))\n// record the version of 3rd,4th commits \nval versionC: String = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(System.currentTimeMillis)\n\n\n'})}),"\n",(0,s.jsx)(a.h3,{id:"\u5168\u91cf\u67e5\u8be2",children:"\u5168\u91cf\u67e5\u8be2"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'// Scala\nspark.sql("SELECT * FROM cdc_table")\n'})}),"\n",(0,s.jsx)(a.h3,{id:"\u5feb\u7167\u67e5\u8be2",children:"\u5feb\u7167\u67e5\u8be2"}),"\n",(0,s.jsx)(a.p,{children:"LakeSoul\u652f\u6301\u5feb\u7167\u67e5\u8be2\uff0c\u53ef\u7528\u4e8e\u67e5\u8be2\u5386\u53f2\u4e0a\u67d0\u4e00\u65f6\u95f4\u70b9\u7684\u8868\u6570\u636e\u3002"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'// Scala\nspark.read.format("lakesoul")\n    .option(LakeSoulOptions.PARTITION_DESC, "range=range2")\n    .option(LakeSoulOptions.READ_END_TIME, versionB)\n    .option(LakeSoulOptions.READ_TYPE, LakeSoulOptions.ReadType.SNAPSHOT_READ)\n    .load(tablePath)\n'})}),"\n",(0,s.jsx)(a.h3,{id:"\u589e\u91cf\u67e5\u8be2",children:"\u589e\u91cf\u67e5\u8be2"}),"\n",(0,s.jsx)(a.p,{children:"LakeSoul\u652f\u6301\u589e\u91cf\u67e5\u8be2\uff0c\u53ef\u83b7\u5f97\u5728\u8d77\u59cb\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u4e4b\u95f4\u53d1\u751f\u66f4\u6539\u7684\u6570\u636e\u8bb0\u5f55\u3002"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'// Scala\nspark.read.format("lakesoul")\n    .option(LakeSoulOptions.PARTITION_DESC, "range=range1")\n    .option(LakeSoulOptions.READ_START_TIME, versionA)\n    .option(LakeSoulOptions.READ_END_TIME, versionB)\n    .option(LakeSoulOptions.READ_TYPE, LakeSoulOptions.ReadType.INCREMENTAL_READ)\n    .load(tablePath)\n'})}),"\n",(0,s.jsx)(a.h2,{id:"\u66f4\u591a\u6848\u4f8b",children:"\u66f4\u591a\u6848\u4f8b"}),"\n",(0,s.jsxs)(a.p,{children:["\u63a5\u4e0b\u6765\uff0c\u60a8\u53ef\u4ee5\u5728",(0,s.jsx)(a.a,{href:"/zh-Hans/docs/Usage%20Docs/spark-api-docs",children:"Spark API\u6587\u6863"}),"\u4e2d\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5728Spark\u4e2d\u4f7f\u7528LakeSoul\u8868\u7684\u6848\u4f8b\u3002"]})]})}function p(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5162:(e,a,l)=>{l.d(a,{Z:()=>t});l(7294);var s=l(6905);const n={tabItem:"tabItem_Ymn6"};var r=l(5893);function t(e){let{children:a,hidden:l,className:t}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(n.tabItem,t),hidden:l,children:a})}},4866:(e,a,l)=>{l.d(a,{Z:()=>f});var s=l(7294),n=l(6905),r=l(2466),t=l(6550),o=l(469),c=l(1980),i=l(7392),u=l(12);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:l}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:l,attributes:s,default:n}}=e;return{value:a,label:l,attributes:s,default:n}}))}(l);return function(e){const a=(0,i.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,l])}function p(e){let{value:a,tabValues:l}=e;return l.some((e=>e.value===a))}function k(e){let{queryString:a=!1,groupId:l}=e;const n=(0,t.k6)(),r=function(e){let{queryString:a=!1,groupId:l}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:a,groupId:l});return[(0,c._X)(r),(0,s.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function S(e){const{defaultValue:a,queryString:l=!1,groupId:n}=e,r=h(e),[t,c]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=l.find((e=>e.default))??l[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:r}))),[i,d]=k({queryString:l,groupId:n}),[S,m]=function(e){let{groupId:a}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,u.Nk)(l);return[n,(0,s.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:n}),x=(()=>{const e=i??S;return p({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:t,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=l(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=l(5893);function g(e){let{className:a,block:l,selectedValue:s,selectValue:t,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.o5)(),u=e=>{const a=e.currentTarget,l=c.indexOf(a),n=o[l].value;n!==s&&(i(a),t(n))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;a=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;a=c[l]??c[c.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},a),children:o.map((e=>{let{value:a,label:l,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>c.push(e),onKeyDown:d,onClick:u,...r,className:(0,n.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===a}),children:l??a},a)}))})}function T(e){let{lazy:a,children:l,selectedValue:n}=e;const r=(Array.isArray(l)?l:[l]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function j(e){const a=S(e);return(0,b.jsxs)("div",{className:(0,n.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(g,{...e,...a}),(0,b.jsx)(T,{...e,...a})]})}function f(e){const a=(0,m.Z)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(a))}},1151:(e,a,l)=>{l.d(a,{Z:()=>o,a:()=>t});var s=l(7294);const n={},r=s.createContext(n);function t(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);