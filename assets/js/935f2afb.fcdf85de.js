"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"LakeSoul Introduction","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"LakeSoul General Concepts Introduction","href":"/docs/Getting Started/concepts","docId":"Getting Started/concepts"},{"type":"link","label":"Setup a Local Environment","href":"/docs/Getting Started/setup-local-env","docId":"Getting Started/setup-local-env"},{"type":"link","label":"Use Docker Compose","href":"/docs/Getting Started/docker-compose","docId":"Getting Started/docker-compose"}]},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"LakeSoul CDC Ingestion via Spark Streaming","href":"/docs/Tutorials/consume-cdc-via-spark-streaming","docId":"Tutorials/consume-cdc-via-spark-streaming"},{"type":"link","label":"LakeSoul Flink CDC Whole Database Synchronization Tutorial","href":"/docs/Tutorials/flink-cdc-sink/","docId":"Tutorials/flink-cdc-sink/index"},{"type":"link","label":"Snapshot Related API Usage Tutorial","href":"/docs/Tutorials/snapshot-manage","docId":"Tutorials/snapshot-manage"},{"type":"link","label":"Mount LakeSoul Data to Hive Meta","href":"/docs/Tutorials/data-mount-to-hive","docId":"Tutorials/data-mount-to-hive"},{"type":"link","label":"Upsert Data and Merge UDF Tutorial","href":"/docs/Tutorials/upsert-and-merge-udf","docId":"Tutorials/upsert-and-merge-udf"},{"type":"link","label":"Multi Stream Merge to Build Wide Table Tutorial","href":"/docs/Tutorials/mutil-stream-merge","docId":"Tutorials/mutil-stream-merge"},{"type":"link","label":"Multiple Kafka Topics Data to LakeSoul Tutorial","href":"/docs/Tutorials/kafka-topics-data-to-lakesoul","docId":"Tutorials/kafka-topics-data-to-lakesoul"},{"type":"link","label":"Incremental Query Function Tutorial","href":"/docs/Tutorials/incremental-query","docId":"Tutorials/incremental-query"}]},{"type":"category","label":"Usage Docs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Setup LakeSoul Meta DB","href":"/docs/Usage Docs/setup-meta-env","docId":"Usage Docs/setup-meta-env"},{"type":"link","label":"Setup Your Spark and Flink Project/Job","href":"/docs/Usage Docs/setup-spark","docId":"Usage Docs/setup-spark"},{"type":"link","label":"Spark API Docs","href":"/docs/Usage Docs/api-docs","docId":"Usage Docs/api-docs"},{"type":"link","label":"Use LakeSoul CDC Table Format","href":"/docs/Usage Docs/cdc-ingestion-table","docId":"Usage Docs/cdc-ingestion-table"},{"type":"link","label":"Synchronization of Entire Database into LakeSoul","href":"/docs/Usage Docs/flink-cdc-sync","docId":"Usage Docs/flink-cdc-sync"},{"type":"link","label":"LakeSoul Flink Connector","href":"/docs/Usage Docs/flink-lakesoul-connector","docId":"Usage Docs/flink-lakesoul-connector"},{"type":"link","label":"LakeSoul Global Automatic Compaction Service Usage","href":"/docs/Usage Docs/auto-compaction-task","docId":"Usage Docs/auto-compaction-task"},{"type":"link","label":"LakeSoul Table Lifecycle Automatic Maintenance and Redundant Data Automatic Cleaning","href":"/docs/Usage Docs/clean-redundant-data","docId":"Usage Docs/clean-redundant-data"},{"type":"link","label":"Use Presto to Query LakeSoul\'s Table","href":"/docs/Usage Docs/setup-presto","docId":"Usage Docs/setup-presto"},{"type":"link","label":"LakeSoul\'s Supports for Python and Machine Learning","href":"/docs/Usage Docs/machine-learning-support","docId":"Usage Docs/machine-learning-support"},{"type":"link","label":"Multi-tenant: Workspace and Role Permission Control","href":"/docs/Usage Docs/workspace-and-rbac","docId":"Usage Docs/workspace-and-rbac"},{"type":"link","label":"Use Kyuubi JDBC to Access Lakesoul\'s Table","href":"/docs/Usage Docs/setup-kyuubi","docId":"Usage Docs/setup-kyuubi"},{"type":"link","label":"Sync LakeSoul Tables to other Databases","href":"/docs/Usage Docs/export-to-databases","docId":"Usage Docs/export-to-databases"}]}]},"docs":{"Getting Started/concepts":{"id":"Getting Started/concepts","title":"LakeSoul General Concepts Introduction","description":"LakeSoul is an end-to-end real-time lake warehouse storage framework that uses an open architecture design to achieve high-performance reading and writing (Upsert and Merge on Read) through the NativeIO layer, and uniformly supports multiple computing engines, including batch processing (Spark) , stream processing (Flink), MPP (Presto), AI (PyTorch, Pandas, Ray), which can be deployed in Hadoop clusters and Kubernetes clusters. The overall architecture of LakeSoul is shown in the figure below:","sidebar":"tutorialSidebar"},"Getting Started/docker-compose":{"id":"Getting Started/docker-compose","title":"Use Docker Compose","description":"\x3c!--","sidebar":"tutorialSidebar"},"Getting Started/setup-local-env":{"id":"Getting Started/setup-local-env","title":"Setup a Local Environment","description":"\x3c!--","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"LakeSoul Introduction","description":"\x3c!--","sidebar":"tutorialSidebar"},"Tutorials/consume-cdc-via-spark-streaming":{"id":"Tutorials/consume-cdc-via-spark-streaming","title":"LakeSoul CDC Ingestion via Spark Streaming","description":"\x3c!--","sidebar":"tutorialSidebar"},"Tutorials/data-mount-to-hive":{"id":"Tutorials/data-mount-to-hive","title":"Mount LakeSoul Data to Hive Meta","description":"\x3c!--","sidebar":"tutorialSidebar"},"Tutorials/flink-cdc-sink/index":{"id":"Tutorials/flink-cdc-sink/index","title":"LakeSoul Flink CDC Whole Database Synchronization Tutorial","description":"\x3c!--","sidebar":"tutorialSidebar"},"Tutorials/incremental-query":{"id":"Tutorials/incremental-query","title":"Incremental Query Function Tutorial","description":"\x3c!--","sidebar":"tutorialSidebar"},"Tutorials/kafka-topics-data-to-lakesoul":{"id":"Tutorials/kafka-topics-data-to-lakesoul","title":"Multiple Kafka Topics Data to LakeSoul Tutorial","description":"\x3c!--","sidebar":"tutorialSidebar"},"Tutorials/mutil-stream-merge":{"id":"Tutorials/mutil-stream-merge","title":"Multi Stream Merge to Build Wide Table Tutorial","description":"\x3c!--","sidebar":"tutorialSidebar"},"Tutorials/snapshot-manage":{"id":"Tutorials/snapshot-manage","title":"Snapshot Related API Usage Tutorial","description":"\x3c!--","sidebar":"tutorialSidebar"},"Tutorials/upsert-and-merge-udf":{"id":"Tutorials/upsert-and-merge-udf","title":"Upsert Data and Merge UDF Tutorial","description":"\x3c!--","sidebar":"tutorialSidebar"},"Usage Docs/api-docs":{"id":"Usage Docs/api-docs","title":"Spark API Docs","description":"\x3c!--","sidebar":"tutorialSidebar"},"Usage Docs/auto-compaction-task":{"id":"Usage Docs/auto-compaction-task","title":"LakeSoul Global Automatic Compaction Service Usage","description":"\x3c!--","sidebar":"tutorialSidebar"},"Usage Docs/cdc-ingestion-table":{"id":"Usage Docs/cdc-ingestion-table","title":"Use LakeSoul CDC Table Format","description":"\x3c!--","sidebar":"tutorialSidebar"},"Usage Docs/clean-redundant-data":{"id":"Usage Docs/clean-redundant-data","title":"LakeSoul Table Lifecycle Automatic Maintenance and Redundant Data Automatic Cleaning","description":"This feature is available starting from version 2.4.0","sidebar":"tutorialSidebar"},"Usage Docs/export-to-databases":{"id":"Usage Docs/export-to-databases","title":"Sync LakeSoul Tables to other Databases","description":"\x3c!--","sidebar":"tutorialSidebar"},"Usage Docs/flink-cdc-sync":{"id":"Usage Docs/flink-cdc-sync","title":"Synchronization of Entire Database into LakeSoul","description":"\x3c!--","sidebar":"tutorialSidebar"},"Usage Docs/flink-lakesoul-connector":{"id":"Usage Docs/flink-lakesoul-connector","title":"LakeSoul Flink Connector","description":"\x3c!--","sidebar":"tutorialSidebar"},"Usage Docs/machine-learning-support":{"id":"Usage Docs/machine-learning-support","title":"LakeSoul\'s Supports for Python and Machine Learning","description":"LakeSoul implements interfaces for PyTorch/PyArrow/HuggingFace/Ray, allowing users to retrieve datasets from LakeSoul tables through the interfaces. Distributed reading is supported for both PyTorch and Ray. LakeSoul for Python has now released 1.0 Beta.","sidebar":"tutorialSidebar"},"Usage Docs/setup-kyuubi":{"id":"Usage Docs/setup-kyuubi","title":"Use Kyuubi JDBC to Access Lakesoul\'s Table","description":"\x3c!--","sidebar":"tutorialSidebar"},"Usage Docs/setup-meta-env":{"id":"Usage Docs/setup-meta-env","title":"Setup LakeSoul Meta DB","description":"\x3c!--","sidebar":"tutorialSidebar"},"Usage Docs/setup-presto":{"id":"Usage Docs/setup-presto","title":"Use Presto to Query LakeSoul\'s Table","description":"Available since version 2.4.","sidebar":"tutorialSidebar"},"Usage Docs/setup-spark":{"id":"Usage Docs/setup-spark","title":"Setup Your Spark and Flink Project/Job","description":"\x3c!--","sidebar":"tutorialSidebar"},"Usage Docs/workspace-and-rbac":{"id":"Usage Docs/workspace-and-rbac","title":"Multi-tenant: Workspace and Role Permission Control","description":"Supported since 2.4.","sidebar":"tutorialSidebar"}}}')}}]);