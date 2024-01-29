"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[5096],{3209:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=l(5893),n=l(1151),s=l(4866),r=l(5162);const o={},i="Spark Getting Started Guide",c={id:"Getting Started/spark-guide",title:"Spark Getting Started Guide",description:"Setup",source:"@site/docs/01-Getting Started/02-spark-guide.mdx",sourceDirName:"01-Getting Started",slug:"/Getting Started/spark-guide",permalink:"/docs/Getting Started/spark-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/01-Getting Started/02-spark-guide.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quick Setup Environment",permalink:"/docs/Getting Started/setup-local-env"},next:{title:"Flink Getting Started Guide",permalink:"/docs/Getting Started/Flink-Guide"}},u={},d=[{value:"Setup",id:"setup",level:2},{value:"Setup",id:"setup-1",level:2},{value:"Spark 3 Support Matrix",id:"spark-3-support-matrix",level:3},{value:"Spark Shell/SQL/PySpark",id:"spark-shellsqlpyspark",level:3},{value:"Setup Maven Project",id:"setup-maven-project",level:3},{value:"Create Namespace",id:"create-namespace",level:2},{value:"Create Table",id:"create-table",level:2},{value:"Primary Key Table",id:"primary-key-table",level:3},{value:"CDC Table",id:"cdc-table",level:3},{value:"Insert/Merge Data",id:"insertmerge-data",level:2},{value:"Update Data",id:"update-data",level:2},{value:"Delete Data",id:"delete-data",level:2},{value:"Query Data",id:"query-data",level:2},{value:"Time Travel Query",id:"time-travel-query",level:2},{value:"Complete Query",id:"complete-query",level:3},{value:"Snapshot Query",id:"snapshot-query",level:3},{value:"Incremental Query",id:"incremental-query",level:3},{value:"Next steps",id:"next-steps",level:2}];function p(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"spark-getting-started-guide",children:"Spark Getting Started Guide"}),"\n",(0,t.jsx)(a.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(a.h2,{id:"setup-1",children:"Setup"}),"\n",(0,t.jsxs)(a.p,{children:["To use LakeSoul in Spark, first configure ",(0,t.jsx)(a.a,{href:"/docs/Getting%20Started/setup-local-env",children:"Spark Catalog"}),". LakeSoul uses Apache Spark\u2019s DataSourceV2 API for data source and catalog implementations. Moreover, LakeSoul provides scala table API to extend the capability of LakeSoul table."]}),"\n",(0,t.jsx)(a.h3,{id:"spark-3-support-matrix",children:"Spark 3 Support Matrix"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"LakeSoul"}),(0,t.jsx)(a.th,{children:"Spark Version"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"2.2.x-2.4.x"}),(0,t.jsx)(a.td,{children:"3.3.x"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"2.0.x-2.1.x"}),(0,t.jsx)(a.td,{children:"3.1.x"})]})]})]}),"\n",(0,t.jsx)(a.h3,{id:"spark-shellsqlpyspark",children:"Spark Shell/SQL/PySpark"}),"\n",(0,t.jsxs)(a.p,{children:["Run spark-shell/spark-sql/pyspark with the ",(0,t.jsx)(a.code,{children:"LakeSoulSparkSessionExtension"})," sql extension."]}),"\n",(0,t.jsxs)(s.Z,{defaultValue:"Spark SQL",values:[{label:"Spark SQL",value:"Spark SQL"},{label:"Scala",value:"Scala"},{label:"PySpark",value:"PySpark"}],children:[(0,t.jsx)(r.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"spark-sql --conf spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension --conf spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog --conf spark.sql.defaultCatalog=lakesoul --jars lakesoul-spark-2.5.1-spark-3.3.jar\n"})})}),(0,t.jsx)(r.Z,{value:"Scala",label:"Scala",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"spark-shell --conf spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension --conf spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog --conf spark.sql.defaultCatalog=lakesoul --jars lakesoul-spark-2.5.1-spark-3.3.jar\n"})})}),(0,t.jsx)(r.Z,{value:"PySpark",label:"PySpark",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"wget https://github.com/lakesoul-io/LakeSoul/tree/main/python/lakesoul/spark/tables.py\npyspark --conf spark.sql.extensions=com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension --conf spark.sql.catalog.lakesoul=org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog --conf spark.sql.defaultCatalog=lakesoul --jars lakesoul-spark-2.5.1-spark-3.3.jar --py-files tables.py\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"setup-maven-project",children:"Setup Maven Project"}),"\n",(0,t.jsx)(a.p,{children:"Include maven dependencies in your project:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.dmetasoul</groupId>\n    <artifactId>lakesoul</artifactId>\n    <version>2.5.1-spark-3.3</version>\n</dependency>\n"})}),"\n",(0,t.jsx)(s.Z,{children:(0,t.jsx)(r.Z,{value:"Scala",label:"Scala",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'// Scala\nimport org.apache.spark.sql.SparkSession\nimport org.apache.spark.sql.types._\nimport org.apache.spark.sql.Row\nimport org.apache.spark.sql.lakesoul.LakeSoulOptions\nimport spark.implicits._\nimport com.dmetasoul.lakesoul.tables.LakeSoulTable\n\n\nval builder = SparkSession.builder()\n    .master("local")\n    .config("spark.sql.extensions", "com.dmetasoul.lakesoul.sql.LakeSoulSparkSessionExtension")\n    .config("spark.sql.catalog.spark_catalog", "org.apache.spark.sql.lakesoul.catalog.LakeSoulCatalog")\n    .config("spark.sql.defaultCatalog", "lakesoul")\nval spark = builder.getOrCreate()\n\n'})})})}),"\n",(0,t.jsx)(a.h2,{id:"create-namespace",children:"Create Namespace"}),"\n",(0,t.jsxs)(a.p,{children:["First, create a namespace for LakeSoul table, default namespace of LakeSoul Catalog is ",(0,t.jsx)(a.code,{children:"default"}),"."]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(r.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE NAMESPACE IF NOT EXISTS lakesoul_namespace;\nUSE lakesoul_namespace;\nSHOW TABLES;\n"})})}),(0,t.jsx)(r.Z,{value:"Scala",label:"Scala",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'// Scala\nspark.sql("CREATE NAMESPACE IF NOT EXISTS lakesoul_namespace")\nspark.sql("USE lakesoul_namespace")\nspark.sql("SHOW TABLES")\n'})})}),(0,t.jsx)(r.Z,{value:"PySpark",label:"PySpark",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'// python\nspark.sql("CREATE NAMESPACE IF NOT EXISTS lakesoul_namespace")\nspark.sql("USE lakesoul_namespace")\nspark.sql("SHOW TABLES")\n'})})})]}),"\n",(0,t.jsx)(a.h2,{id:"create-table",children:"Create Table"}),"\n",(0,t.jsxs)(a.p,{children:["Create a partitioned LakeSoul table using SQL with the clause ",(0,t.jsx)(a.code,{children:"USING lakesoul"}),", or using ",(0,t.jsx)(a.code,{children:"DataFrameWriterV2"})," API at the first ",(0,t.jsx)(a.code,{children:"save"}),"."]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(r.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE TABLE lakesoul_table (id BIGINT, name STRING, `date` STRING) \nUSING lakesoul \nPARTITIONED BY (`date`) \nLOCATION 'file:/tmp/lakesoul_namespace/lakesoul_table';\n"})})}),(0,t.jsx)(r.Z,{value:"Scala",label:"Scala",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"// Scala\nspark.sql(\"CREATE TABLE lakesoul_table (id BIGINT, name STRING, `date` STRING) USING lakesoul PARTITIONED BY (`date`) LOCATION 'file:/tmp/lakesoul_namespace/lakesoul_table'\")\n"})})}),(0,t.jsx)(r.Z,{value:"PySpark",label:"PySpark",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"// python\nspark.sql(\"CREATE TABLE lakesoul_table (id BIGINT, name STRING, `date` STRING) USING lakesoul PARTITIONED BY (`date`) LOCATION 'file:/tmp/lakesoul_namespace/lakesoul_table'\")\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"primary-key-table",children:"Primary Key Table"}),"\n",(0,t.jsxs)(a.p,{children:["In LakeSoul, a table with primary keys is defined as a hash-partitioned table. To create such a table, use the ",(0,t.jsx)(a.code,{children:"USING lakesoul"})," clause and specify the ",(0,t.jsx)(a.code,{children:"TBLPROPERTIES"})," setting, where ",(0,t.jsx)(a.code,{children:"'hashPartitions'"})," designates a comma-separated list of primary key column names, and ",(0,t.jsx)(a.code,{children:"'hashBucketNum'"})," determines the size or number of hash buckets."]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(r.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE TABLE lakesoul_hash_table (id BIGINT NOT NULL, name STRING, date STRING) \nUSING lakesoul \nPARTITIONED BY (date) \nLOCATION 'file:/tmp/lakesoul_namespace/lakesoul_hash_table' \nTBLPROPERTIES ( 'hashPartitions'='id', 'hashBucketNum'='2');\n"})})}),(0,t.jsx)(r.Z,{value:"Scala",label:"Scala",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"// Scala\nspark.sql(\"CREATE TABLE lakesoul_hash_table (id BIGINT NOT NULL, name STRING, date STRING) USING lakesoul PARTITIONED BY (date) LOCATION 'file:/tmp/lakesoul_namespace/lakesoul_hash_table' TBLPROPERTIES ( 'hashPartitions'='id', 'hashBucketNum'='2')\")\n"})})}),(0,t.jsx)(r.Z,{value:"PySpark",label:"PySpark",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"// python\nspark.sql(\"CREATE TABLE lakesoul_hash_table (id BIGINT NOT NULL, name STRING, date STRING) USING lakesoul PARTITIONED BY (date) LOCATION 'file:/tmp/lakesoul_namespace/lakesoul_hash_table' TBLPROPERTIES ( 'hashPartitions'='id', 'hashBucketNum'='2')\")\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"cdc-table",children:"CDC Table"}),"\n",(0,t.jsxs)(a.p,{children:["Optionally, a hash-partitioned LakeSoul table has the capability to record Change Data Capture (CDC) data, enabling the tracking of data modifications. To create a LakeSoul table with CDC support, one can utilize the DDL statement for a hash-partitioned LakeSoul table and include an additional ",(0,t.jsx)(a.code,{children:"TBLPROPERTIES"})," setting specifying the ",(0,t.jsx)(a.code,{children:"'lakesoul_cdc_change_column'"})," attribute. This attribute introduces an implicit column that assists the table in efficiently handling CDC information, ensuring precise tracking and management of data changes."]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(r.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE TABLE lakesoul_cdc_table (id BIGINT NOT NULL, name STRING, date STRING) \nUSING lakesoul \nPARTITIONED BY (date) \nLOCATION 'file:/tmp/lakesoul_namespace/lakesoul_cdc_table' \nTBLPROPERTIES('hashPartitions'='id', 'hashBucketNum'='2', 'lakesoul_cdc_change_column' = 'op');\n"})})}),(0,t.jsx)(r.Z,{value:"Scala",label:"Scala",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"// Scala\nspark.sql(\"CREATE TABLE lakesoul_cdc_table (id BIGINT NOT NULL, name STRING, date STRING) USING lakesoul PARTITIONED BY (date) LOCATION 'file:/tmp/lakesoul_namespace/lakesoul_cdc_table' TBLPROPERTIES('hashPartitions'='id', 'hashBucketNum'='2', 'lakesoul_cdc_change_column' = 'op')\")\n"})})}),(0,t.jsx)(r.Z,{value:"PySpark",label:"PySpark",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"// python\nspark.sql(\"CREATE TABLE lakesoul_cdc_table (id BIGINT NOT NULL, name STRING, date STRING) USING lakesoul PARTITIONED BY (date) LOCATION 'file:/tmp/lakesoul_namespace/lakesoul_cdc_table' TBLPROPERTIES('hashPartitions'='id', 'hashBucketNum'='2', 'lakesoul_cdc_change_column' = 'op')\")\n"})})})]}),"\n",(0,t.jsx)(a.h2,{id:"insertmerge-data",children:"Insert/Merge Data"}),"\n",(0,t.jsx)(a.p,{children:"To append new data to a non-hash-partitioned table using Spark SQL, use INSERT INTO."}),"\n",(0,t.jsxs)(a.p,{children:["To append new data to a table using DataFrame, use ",(0,t.jsx)(a.code,{children:"DataFrameWriterV2"})," API. If this is the first write of the table, it will also auto-create the corresponding LakeSoul table."]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(r.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"INSERT INTO TABLE lakesoul_table VALUES (1, 'Alice', '2024-01-01'), (2, 'Bob', '2024-01-01'), (1, 'Cathy', '2024-01-02');\n"})})}),(0,t.jsx)(r.Z,{value:"Scala",label:"Scala",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'// Scala\nval data = Seq(Row(1L, "Alice", "2024-01-01"), Row(2L, "Bob", "2024-01-01"), Row(1L, "Cathy", "2024-01-02"))\nval schema = StructType(Seq(StructField("id", LongType, false), StructField("name", StringType, true), StructField("date", StringType, false)))\nval df = spark.createDataFrame(spark.sparkContext.parallelize(data), schema)\n\ndf.write.format("lakesoul").insertInto("lakesoul_table")\n\n'})})}),(0,t.jsx)(r.Z,{value:"PySpark",label:"PySpark",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'  // python\nfrom pyspark.sql.types import *\ndata = [(1,"Cathy","2024-01-02")]\nschema = StructType([StructField("id", LongType(), False), StructField("name", StringType(), True), StructField("date", StringType(), False)])\ndf = spark.createDataFrame(data,schema=schema)\ndf.write.format("lakesoul").insertInto("lakesoul_table")\n'})})})]}),"\n",(0,t.jsx)(a.p,{children:"To append new data to a hash-partitioned table using Spark SQL, use Merge INTO."}),"\n",(0,t.jsxs)(a.p,{children:["To append new data to a hash-partitioned table using DataFrame, use ",(0,t.jsx)(a.code,{children:"LakeSoulTable"})," upsert API."]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(r.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE OR REPLACE VIEW spark_catalog.default.source_view (id , name, date)\nAS SELECT 1L as `id`, 'George' as `name`, '2024-01-01' as `date`;\n\n\nMERGE INTO lakesoul_hash_table AS t \nUSING spark_catalog.default.source_view AS s\nON t.id = s.id\nWHEN MATCHED THEN UPDATE SET *\nWHEN NOT MATCHED THEN INSERT *;\n"})})}),(0,t.jsx)(r.Z,{value:"Scala",label:"Scala",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'// Scala\nval tablePath = "file:/tmp/lakesoul_namespace/lakesoul_upsert_table"\n\n// Init hash table with first dataframe\nval df = Seq((20201101, 1, 1), (20201101, 2, 2), (20201101, 3, 3), (20201102, 4, 4)).toDF("range", "hash", "value")\nval writer = df.write.format("lakesoul").mode("overwrite")\n\nwriter\n    .option("rangePartitions", "range")\n    .option("hashPartitions", "hash")\n    .option("hashBucketNum", 2)\n    .save(tablePath)\n\n// merge the second dataframe into hash table using LakeSoulTable upsert API\nval dfUpsert = Seq((20201101, 1, 1), (20201101, 2, 2), (20201101, 3, 3), (20201102, 4, 4)).toDF("range", "hash", "value")\nLakeSoulTable.forPath(tablePath).upsert(dfUpsert)\n\n'})})}),(0,t.jsx)(r.Z,{value:"PySpark",label:"PySpark",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'  // python\nfrom pyspark.sql.types import *\nfrom tables import LakeSoulTable\ntablePath = "file:/tmp/lakesoul_namespace/lakesoul_upsert_table"\ndf = spark.createDataFrame([(20201101, 1, 1), (20201101, 2, 2), (20201101, 3, 3), (20201102, 4, 4)],schema=\'range string,hash string,value string\')\ndf.write.format("lakesoul").mode("overwrite").option("rangePartitions", "range").option("hashPartitions", "hash").option("hashBucketNum", 2).save(tablePath)\ndfUpsert = spark.createDataFrame([(20201111, 1, 1), (20201111, 2, 2), (20201111, 3, 3), (20201112, 4, 4)],schema=\'range string,hash string,value string\')\nLakeSoulTable.forPath(spark,tablePath).upsert(dfUpsert)\n'})})})]}),"\n",(0,t.jsx)(a.h2,{id:"update-data",children:"Update Data"}),"\n",(0,t.jsxs)(a.p,{children:["LakeSoul tables can be updated by a DataFrame or using a standard ",(0,t.jsx)(a.code,{children:"UPDATE"})," statement.\nTo update data to a table using DataFrame, use ",(0,t.jsx)(a.code,{children:"LakeSoulTable"})," updateExpr API."]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(r.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"UPDATE lakesoul_table SET name = 'David' WHERE id = 2;\n"})})}),(0,t.jsx)(r.Z,{value:"Scala",label:"Scala",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'// Scala\nval tablePath = "file:/tmp/lakesoul_namespace/lakesoul_table"\nLakeSoulTable.forPath(tablePath).updateExpr("id = 2", Seq(("name"->"\'David\'")).toMap)\n\n\n'})})}),(0,t.jsx)(r.Z,{value:"PySpark",label:"PySpark",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'  // python\nfrom tables import LakeSoulTable\ntablePath = "file:/tmp/lakesoul_namespace/lakesoul_upsert_table"\nLakeSoulTable.forPath(spark,tablePath).update("hash = 4", { "value":"5"})\n'})})})]}),"\n",(0,t.jsx)(a.h2,{id:"delete-data",children:"Delete Data"}),"\n",(0,t.jsxs)(a.p,{children:["LakeSoul tables can be removes the records by a DataFrame or using a standard ",(0,t.jsx)(a.code,{children:"DELETE"})," statement.\nTo delete data to a table using DataFrame, use ",(0,t.jsx)(a.code,{children:"LakeSoulTable"})," ",(0,t.jsx)(a.code,{children:"delete"})," API."]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(r.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"DELETE FROM lakesoul_table WHERE id =1;\n"})})}),(0,t.jsx)(r.Z,{value:"Scala",label:"Scala",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'// Scala\nval tablePath = "file:/tmp/lakesoul_namespace/lakesoul_table"\nLakeSoulTable.forPath(tablePath).delete("id = 1 or id =2")\n'})})}),(0,t.jsx)(r.Z,{value:"PySpark",label:"PySpark",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'  // python\nfrom tables import LakeSoulTable\ntablePath = "file:/tmp/lakesoul_namespace/lakesoul_upsert_table"\nLakeSoulTable.forPath(spark,tablePath).delete("hash = 4")\n'})})})]}),"\n",(0,t.jsx)(a.h2,{id:"query-data",children:"Query Data"}),"\n",(0,t.jsx)(a.p,{children:"LakeSoul tables can be queried using a DataFrame or Spark SQL."}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(r.Z,{value:"Spark SQL",label:"Spark SQL",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM lakesoul_table;\n"})})}),(0,t.jsx)(r.Z,{value:"Scala",label:"Scala",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'// Scala\n\n// query data with DataFrameReader API\nval tablePath = "file:/tmp/lakesoul_namespace/lakesoul_table"\nspark.read.format("lakesoul").load(tablePath)\n\n// query data with LakeSoulTable API\nval tablePath = "file:/tmp/lakesoul_namespace/lakesoul_table"\nLakeSoulTable.forPath(tablePath).toDF\n\nval tableName = "lakesoul_table"\nLakeSoulTable.forName(tableName).toDF\n'})})}),(0,t.jsx)(r.Z,{value:"PySpark",label:"PySpark",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'  // python\nfrom tables import LakeSoulTable\ntablePath = "file:/tmp/lakesoul_namespace/lakesoul_upsert_table"\n\n// query data with LakeSoulTable API\nLakeSoulTable.forPath(spark,tablePath).toDF().show()\n\n// query data with DataFrameReader API\nspark.read.format("lakesoul").load(tablePath).show()\n'})})})]}),"\n",(0,t.jsx)(a.h2,{id:"time-travel-query",children:"Time Travel Query"}),"\n",(0,t.jsx)(a.p,{children:"LakeSoul supports time travel query to query the table at any point-in-time in history or the changed data between two commit time."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'// Scala\nval tablePath = "file:/tmp/lakesoul_namespace/cdc_table"\nSeq(("range1", "hash1", "insert"), ("range2", "hash2", "insert"), ("range3", "hash2", "insert"), ("range4", "hash2", "insert"), ("range4", "hash4", "insert"), ("range3", "hash3", "insert"))\n    .toDF("range", "hash", "op")\n    .write\n    .mode("append")\n    .format("lakesoul")\n    .option("rangePartitions", "range")\n    .option("hashPartitions", "hash")\n    .option("hashBucketNum", "2")\n    .option("shortTableName", "cdc_table")\n    .option("lakesoul_cdc_change_column", "op")\n    .save(tablePath)\n// record the version of 1st commit \nimport java.text.SimpleDateFormat\n\nval versionA: String = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(System.currentTimeMillis)\n\n\nval lakeTable = LakeSoulTable.forPath(tablePath)\nlakeTable.upsert(Seq(("range1", "hash1-1", "delete"), ("range2", "hash2-10", "delete"))\n.toDF("range", "hash", "op"))\n// record the version of 2nd commit \nval versionB: String = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(System.currentTimeMillis)\n\nlakeTable.upsert(Seq(("range1", "hash1-13", "insert"), ("range2", "hash2-13", "update"))\n.toDF("range", "hash", "op"))\nlakeTable.upsert(Seq(("range1", "hash1-15", "insert"), ("range2", "hash2-15", "update"))\n.toDF("range", "hash", "op"))\n// record the version of 3rd,4th commits \nval versionC: String = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(System.currentTimeMillis)\n\n\n'})}),"\n",(0,t.jsx)(a.h3,{id:"complete-query",children:"Complete Query"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'// Scala\nspark.sql("SELECT * FROM cdc_table")\n'})}),"\n",(0,t.jsx)(a.h3,{id:"snapshot-query",children:"Snapshot Query"}),"\n",(0,t.jsx)(a.p,{children:"LakeSoul supports snapshot query for query the table at a point-in-time in history."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'// Scala\nspark.read.format("lakesoul")\n    .option(LakeSoulOptions.PARTITION_DESC, "range=range2")\n    .option(LakeSoulOptions.READ_END_TIME, versionB)\n    .option(LakeSoulOptions.READ_TYPE, LakeSoulOptions.ReadType.SNAPSHOT_READ)\n    .load(tablePath)\n'})}),"\n",(0,t.jsx)(a.h3,{id:"incremental-query",children:"Incremental Query"}),"\n",(0,t.jsx)(a.p,{children:"LakeSoul supports incremental query to obtain a set of records that changed between a start and end time."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'// Scala\nspark.read.format("lakesoul")\n    .option(LakeSoulOptions.PARTITION_DESC, "range=range1")\n    .option(LakeSoulOptions.READ_START_TIME, versionA)\n    .option(LakeSoulOptions.READ_END_TIME, versionB)\n    .option(LakeSoulOptions.READ_TYPE, LakeSoulOptions.ReadType.INCREMENTAL_READ)\n    .load(tablePath)\n'})}),"\n",(0,t.jsx)(a.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsxs)(a.p,{children:["Next, you can learn more usage cases about LakeSoul tables in Spark at ",(0,t.jsx)(a.a,{href:"/docs/Usage%20Docs/spark-api-docs",children:"Spark API docs"}),"."]})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},5162:(e,a,l)=>{l.d(a,{Z:()=>r});l(7294);var t=l(6905);const n={tabItem:"tabItem_Ymn6"};var s=l(5893);function r(e){let{children:a,hidden:l,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(n.tabItem,r),hidden:l,children:a})}},4866:(e,a,l)=>{l.d(a,{Z:()=>f});var t=l(7294),n=l(6905),s=l(2466),r=l(6550),o=l(469),i=l(1980),c=l(7392),u=l(12);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:l}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:l,attributes:t,default:n}}=e;return{value:a,label:l,attributes:t,default:n}}))}(l);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,l])}function h(e){let{value:a,tabValues:l}=e;return l.some((e=>e.value===a))}function k(e){let{queryString:a=!1,groupId:l}=e;const n=(0,r.k6)(),s=function(e){let{queryString:a=!1,groupId:l}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:a,groupId:l});return[(0,i._X)(s),(0,t.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(n.location.search);a.set(s,e),n.replace({...n.location,search:a.toString()})}),[s,n])]}function S(e){const{defaultValue:a,queryString:l=!1,groupId:n}=e,s=p(e),[r,i]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=l.find((e=>e.default))??l[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:s}))),[c,d]=k({queryString:l,groupId:n}),[S,m]=function(e){let{groupId:a}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,s]=(0,u.Nk)(l);return[n,(0,t.useCallback)((e=>{l&&s.set(e)}),[l,s])]}({groupId:n}),b=(()=>{const e=c??S;return h({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=l(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=l(5893);function x(e){let{className:a,block:l,selectedValue:t,selectValue:r,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const a=e.currentTarget,l=i.indexOf(a),n=o[l].value;n!==t&&(c(a),r(n))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const l=i.indexOf(e.currentTarget)+1;a=i[l]??i[0];break}case"ArrowLeft":{const l=i.indexOf(e.currentTarget)-1;a=i[l]??i[i.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},a),children:o.map((e=>{let{value:a,label:l,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,n.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===a}),children:l??a},a)}))})}function T(e){let{lazy:a,children:l,selectedValue:n}=e;const s=(Array.isArray(l)?l:[l]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function j(e){const a=S(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...a}),(0,g.jsx)(T,{...e,...a})]})}function f(e){const a=(0,m.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(a))}},1151:(e,a,l)=>{l.d(a,{Z:()=>o,a:()=>r});var t=l(7294);const n={},s=t.createContext(n);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);