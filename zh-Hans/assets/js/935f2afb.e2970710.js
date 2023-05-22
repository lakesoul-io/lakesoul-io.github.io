"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"LakeSoul \u4ecb\u7ecd","href":"/zh-Hans/docs/intro","docId":"intro"},{"type":"category","label":"\u5feb\u901f\u5f00\u59cb","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u642d\u5efa\u672c\u5730\u6d4b\u8bd5\u73af\u5883","href":"/zh-Hans/docs/Getting Started/setup-local-env","docId":"Getting Started/setup-local-env"},{"type":"link","label":"\u4f7f\u7528 Docker Compose","href":"/zh-Hans/docs/Getting Started/docker-compose","docId":"Getting Started/docker-compose"}]},{"type":"category","label":"\u4f7f\u7528\u6559\u7a0b","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u901a\u8fc7 Spark Streaming \u5bfc\u5165 LakeSoul CDC \u8868","href":"/zh-Hans/docs/Tutorials/consume-cdc-via-spark-streaming","docId":"Tutorials/consume-cdc-via-spark-streaming"},{"type":"link","label":"LakeSoul Flink CDC \u6574\u5e93\u540c\u6b65\u4f7f\u7528\u6559\u7a0b","href":"/zh-Hans/docs/Tutorials/flink-cdc-sink/","docId":"Tutorials/flink-cdc-sink/index"},{"type":"link","label":"\u5feb\u7167\u76f8\u5173\u529f\u80fd\u7528\u6cd5\u6559\u7a0b","href":"/zh-Hans/docs/Tutorials/snapshot-manage","docId":"Tutorials/snapshot-manage"},{"type":"link","label":"\u5c06LakeSoul\u6570\u636e\u6302\u8f7d\u5230hive meta\u7528\u6cd5\u6559\u7a0b","href":"/zh-Hans/docs/Tutorials/data-mount-to-hive","docId":"Tutorials/data-mount-to-hive"},{"type":"link","label":"\u6570\u636e\u66f4\u65b0 (Upsert) \u548c Merge UDF \u4f7f\u7528\u6559\u7a0b","href":"/zh-Hans/docs/Tutorials/upsert-and-merge-udf","docId":"Tutorials/upsert-and-merge-udf"},{"type":"link","label":"\u591a\u6d41\u5408\u5e76\u6784\u5efa\u5bbd\u8868\u6559\u7a0b","href":"/zh-Hans/docs/Tutorials/mutil-stream-merge","docId":"Tutorials/mutil-stream-merge"},{"type":"link","label":"Kafka \u591a topic \u6570\u636e\u5165 LakeSoul \u6559\u7a0b","href":"/zh-Hans/docs/Tutorials/kafka-topics-data-to-lakesoul","docId":"Tutorials/kafka-topics-data-to-lakesoul"},{"type":"link","label":"\u589e\u91cf\u67e5\u8be2\u529f\u80fd\u6559\u7a0b","href":"/zh-Hans/docs/Tutorials/incremental-query","docId":"Tutorials/incremental-query"}]},{"type":"category","label":"\u4f7f\u7528\u6587\u6863","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u914d\u7f6e LakeSoul \u5143\u6570\u636e\u5e93","href":"/zh-Hans/docs/Usage Docs/setup-meta-env","docId":"Usage Docs/setup-meta-env"},{"type":"link","label":"\u8bbe\u7f6e Spark/Flink \u5de5\u7a0b/\u4f5c\u4e1a","href":"/zh-Hans/docs/Usage Docs/setup-spark","docId":"Usage Docs/setup-spark"},{"type":"link","label":"Spark API \u6587\u6863","href":"/zh-Hans/docs/Usage Docs/api-docs","docId":"Usage Docs/api-docs"},{"type":"link","label":"LakeSoul CDC \u8868","href":"/zh-Hans/docs/Usage Docs/cdc-ingestion-table","docId":"Usage Docs/cdc-ingestion-table"},{"type":"link","label":"LakeSoul Flink CDC \u6574\u5e93\u5343\u8868\u540c\u6b65","href":"/zh-Hans/docs/Usage Docs/flink-cdc-sync","docId":"Usage Docs/flink-cdc-sync"},{"type":"link","label":"LakeSoul Flink Connector","href":"/zh-Hans/docs/Usage Docs/flink-lakesoul-connector","docId":"Usage Docs/flink-lakesoul-connector"},{"type":"link","label":"LakeSoul \u81ea\u52a8\u538b\u7f29\u4efb\u52a1\u6559\u7a0b","href":"/zh-Hans/docs/Usage Docs/auto-compaction-task","docId":"Usage Docs/auto-compaction-task"}]}]},"docs":{"Getting Started/docker-compose":{"id":"Getting Started/docker-compose","title":"\u4f7f\u7528 Docker Compose","description":"Docker Compose \u6587\u4ef6","sidebar":"tutorialSidebar"},"Getting Started/setup-local-env":{"id":"Getting Started/setup-local-env","title":"\u642d\u5efa\u672c\u5730\u6d4b\u8bd5\u73af\u5883","description":"\u542f\u52a8\u4e00\u4e2a PostgreSQL \u6570\u636e\u5e93","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"LakeSoul \u4ecb\u7ecd","description":"LakeSoul \u662f\u7531\u6570\u5143\u7075\u79d1\u6280\u7814\u53d1\u5e76\u4e8e 2023 \u5e74 5 \u6708\u6350\u8d60\u7ed9 Linux Foundation AI & Data \u57fa\u91d1\u4f1a\u7684\u4e00\u4e2a\u7684\u4e91\u539f\u751f\u6e56\u4ed3\u4e00\u4f53\u6846\u67b6\uff0c\u5177\u5907\u9ad8\u53ef\u6269\u5c55\u7684\u5143\u6570\u636e\u7ba1\u7406\u3001ACID \u4e8b\u52a1\u3001\u9ad8\u6548\u7075\u6d3b\u7684 upsert \u64cd\u4f5c\u3001Schema \u6f14\u8fdb\u548c\u6279\u6d41\u4e00\u4f53\u5316\u5904\u7406\u7b49\u7279\u6027\u3002","sidebar":"tutorialSidebar"},"Tutorials/consume-cdc-via-spark-streaming":{"id":"Tutorials/consume-cdc-via-spark-streaming","title":"\u901a\u8fc7 Spark Streaming \u5bfc\u5165 LakeSoul CDC \u8868","description":"1. CDC \u5165\u6e56\u4ecb\u7ecd","sidebar":"tutorialSidebar"},"Tutorials/data-mount-to-hive":{"id":"Tutorials/data-mount-to-hive","title":"\u5c06LakeSoul\u6570\u636e\u6302\u8f7d\u5230hive meta\u7528\u6cd5\u6559\u7a0b","description":"\u81ea 2.0 \u7248\u672c\u8d77\uff0cLakeSoul \u652f\u6301\u5c06 Compaction \u540e\u7684\u76ee\u5f55\u8def\u5f84\uff0c\u6302\u8f7d\u5230\u6307\u5b9a\u7684 Hive \u8868\uff0c\u6307\u5b9a\u548c LakeSoul \u5206\u533a\u540d\u4e00\u81f4\u548c\u81ea\u5b9a\u4e49\u5206\u533a\u540d\u4e24\u79cd\u529f\u80fd\u3002\u8be5\u529f\u80fd\u53ef\u4ee5\u65b9\u4fbf\u4e0b\u6e38\u4e00\u4e9b\u53ea\u80fd\u652f\u6301\u8bbf\u95ee Hive \u7684\u7cfb\u7edf\u8bfb\u53d6\u5230 LakeSoul \u7684\u6570\u636e\u3002\u66f4\u63a8\u8350\u7684\u65b9\u5f0f\u662f\u901a\u8fc7 Kyuubi \u6765\u652f\u6301 Hive JDBC\uff0c\u8fd9\u6837\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Hive JDBC \u8c03\u7528 Spark \u5f15\u64ce\u6765\u8bbf\u95ee LakeSoul \u8868\uff0c\u5305\u62ec Merge on Read \u8bfb\u53d6\u3002","sidebar":"tutorialSidebar"},"Tutorials/flink-cdc-sink/index":{"id":"Tutorials/flink-cdc-sink/index","title":"LakeSoul Flink CDC \u6574\u5e93\u540c\u6b65\u4f7f\u7528\u6559\u7a0b","description":"LakeSoul Flink CDC Sink \u652f\u6301\u4ece MySQL \u6570\u636e\u6e90\u6574\u5e93\u540c\u6b65\u5230 LakeSoul\uff0c\u80fd\u591f\u652f\u6301\u81ea\u52a8\u5efa\u8868\u3001\u81ea\u52a8 Schema \u53d8\u66f4\u3001Exactly Once \u8bed\u4e49\u7b49\u3002","sidebar":"tutorialSidebar"},"Tutorials/incremental-query":{"id":"Tutorials/incremental-query","title":"\u589e\u91cf\u67e5\u8be2\u529f\u80fd\u6559\u7a0b","description":"LakeSoul\u63d0\u4f9b\u57fa\u4e8e\u65f6\u95f4\u6233\u7684\u589e\u91cf\u67e5\u8be2 API\uff0c\u65b9\u4fbf\u7528\u6237\u83b7\u53d6\u81ea\u7ed9\u5b9a\u65f6\u95f4\u6233\u4ee5\u540e\u65b0\u589e\u7684\u6570\u636e\u6d41\u3002\u7528\u6237\u901a\u8fc7\u6307\u5b9a\u8d77\u59cb\u65f6\u95f4\u6233\u548c\u7ed3\u675f\u65f6\u95f4\u6233\uff0c\u53ef\u4ee5\u67e5\u8be2\u8fd9\u4e00\u65f6\u95f4\u8303\u56f4\u5185\u7684\u589e\u91cf\u6570\u636e\uff0c\u5982\u679c\u672a\u6307\u5b9a\u7ed3\u675f\u65f6\u95f4\u6233\uff0c\u5219\u67e5\u8be2\u8d77\u59cb\u65f6\u95f4\u5230\u5f53\u524d\u6700\u65b0\u65f6\u95f4\u7684\u589e\u91cf\u6570\u636e\u3002","sidebar":"tutorialSidebar"},"Tutorials/kafka-topics-data-to-lakesoul":{"id":"Tutorials/kafka-topics-data-to-lakesoul","title":"Kafka \u591a topic \u6570\u636e\u5165 LakeSoul \u6559\u7a0b","description":"\u901a\u8fc7 LakeSul Kafka Stream \u5c06 Kafka \u4e2d\u7684\u6570\u636e\u540c\u6b65\u5230 LakeSul \u975e\u5e38\u65b9\u4fbf\u3002","sidebar":"tutorialSidebar"},"Tutorials/mutil-stream-merge":{"id":"Tutorials/mutil-stream-merge","title":"\u591a\u6d41\u5408\u5e76\u6784\u5efa\u5bbd\u8868\u6559\u7a0b","description":"\u4e3a\u6784\u5efa\u5bbd\u8868\uff0c\u4f20\u7edf\u6570\u4ed3\u7684 ETL \u5728\u505a\u591a\u8868\u5173\u8054\u65f6\uff0c\u9700\u8981\u6839\u636e\u4e3b\u5916\u952e\u591a\u6b21 join\uff0c\u7136\u540e\u6784\u5efa\u4e00\u4e2a\u5927\u5bbd\u8868\u3002\u5f53\u6570\u636e\u91cf\u8f83\u591a\u6216\u9700\u8981\u591a\u6b21join\u65f6\uff0c\u4f1a\u6709\u6548\u7387\u4f4e\u4e0b\uff0c\u5185\u5b58\u6d88\u8017\u5927\uff0c\u5bb9\u6613 OOM \u7b49\u95ee\u9898\uff0c\u4e14 Shuffle \u8fc7\u7a0b\u5360\u636e\u5927\u90e8\u5206\u6570\u636e\u4ea4\u6362\u65f6\u95f4\uff0c\u6548\u7387\u4e5f\u5f88\u4f4e\u4e0b\u3002LakeSoul \u652f\u6301\u5bf9\u6570\u636e\u8fdb\u884c Upsert\uff0c\u5e76\u652f\u6301\u81ea\u5b9a\u4e49 MergeOperator \u529f\u80fd\uff0c\u53ef\u4ee5\u907f\u514d\u4e0a\u8ff0\u5b58\u5728\u7684\u95ee\u9898\uff0c\u4e0d\u5fc5Join\u5373\u53ef\u5f97\u5230\u5408\u5e76\u7ed3\u679c\u3002\u4e0b\u9762\u9488\u5bf9\u8fd9\u4e00\u573a\u666f\u5177\u4f53\u4e3e\u4f8b\u8fdb\u884c\u8bf4\u660e\u3002","sidebar":"tutorialSidebar"},"Tutorials/snapshot-manage":{"id":"Tutorials/snapshot-manage","title":"\u5feb\u7167\u76f8\u5173\u529f\u80fd\u7528\u6cd5\u6559\u7a0b","description":"LakeSoul \u4f7f\u7528\u5feb\u7167\u7684\u65b9\u5f0f\u6765\u8bb0\u5f55\u6bcf\u4e00\u6b21\u66f4\u65b0\u7684\u6587\u4ef6\u96c6\u5408\uff0c\u5e76\u5728\u5143\u6570\u636e\u4e2d\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u7248\u672c\u53f7\u3002\u5386\u53f2\u7684\u5feb\u7167\u7248\u672c\u5982\u679c\u6ca1\u6709\u88ab\u6e05\u7406\uff0c\u5219\u4e5f\u53ef\u4ee5\u901a\u8fc7 LakeSoul API \u8fdb\u884c\u8bfb\u53d6\u3001\u56de\u6eda\u548c\u6e05\u7406\u7b49\u64cd\u4f5c\u3002\u7531\u4e8e\u5feb\u7167\u7248\u672c\u662f\u5185\u90e8\u7684\u673a\u5236\uff0c\u4e3a\u4e86\u4f7f\u7528\u65b9\u4fbf\uff0cLakeSoul \u63d0\u4f9b\u4e86\u57fa\u4e8e\u65f6\u95f4\u6233\u7684\u5feb\u7167\u7ba1\u7406 API\u3002","sidebar":"tutorialSidebar"},"Tutorials/upsert-and-merge-udf":{"id":"Tutorials/upsert-and-merge-udf","title":"\u6570\u636e\u66f4\u65b0 (Upsert) \u548c Merge UDF \u4f7f\u7528\u6559\u7a0b","description":"LakeSoul\u53ef\u4ee5\u652f\u6301\u5bf9\u5df2\u7ecf\u5165\u6e56\u7684\u6570\u636e\u505a\u90e8\u5206\u5b57\u6bb5\u66f4\u65b0\u529f\u80fd\uff0c\u800c\u4e0d\u5fc5\u5c06\u6574\u5f20\u6570\u636e\u8868\u5168\u90e8\u8986\u76d6\u91cd\u5199\uff0c\u907f\u514d\u8fd9\u79cd\u7e41\u91cd\u4e14\u6d6a\u8d39\u8d44\u6e90\u7684\u64cd\u4f5c\u3002","sidebar":"tutorialSidebar"},"Usage Docs/api-docs":{"id":"Usage Docs/api-docs","title":"Spark API \u6587\u6863","description":"1. \u521b\u5efa\u548c\u5199\u5165 LakeSoulTable","sidebar":"tutorialSidebar"},"Usage Docs/auto-compaction-task":{"id":"Usage Docs/auto-compaction-task","title":"LakeSoul \u81ea\u52a8\u538b\u7f29\u4efb\u52a1\u6559\u7a0b","description":"\u4e0d\u7ba1\u662f\u6279\u91cf\u8fd8\u662f\u6d41\u5f0f\u4efb\u52a1\u7684\u6570\u636e\u5199\u5165\uff0c\u56e0\u4e3a\u6570\u636e\u591a\u662fmerge\u65b9\u5f0f\u5199\u5165\uff0c\u6240\u4ee5\u5b58\u5728\u4e00\u4e9b\u4e2d\u95f4\u5197\u4f59\u6570\u636e\u4ee5\u53ca\u5927\u91cf\u5c0f\u6587\u4ef6\u60c5\u51b5\uff0c\u4e3a\u4e86\u51cf\u5c11\u6b64\u7c7b\u6570\u636e\u9020\u6210\u8d44\u6e90\u7684\u6d6a\u8d39\u4ee5\u53ca\u63d0\u9ad8\u6570\u636e\u8bfb\u53d6\u7684\u6548\u7387\uff0c\u9700\u8981\u5c06\u6570\u636e\u8fdb\u884c\u538b\u7f29\u3002","sidebar":"tutorialSidebar"},"Usage Docs/cdc-ingestion-table":{"id":"Usage Docs/cdc-ingestion-table","title":"LakeSoul CDC \u8868","description":"CDC (Change Data Capture) \u662f\u6e56\u4ed3\u91cd\u8981\u7684\u6570\u636e\u6e90\u4e4b\u4e00. LakeSoul CDC \u8868\u7684\u76ee\u6807\u662f\u80fd\u591f\u4ece\u5728\u7ebf OLTP \u6570\u636e\u5e93\u5feb\u901f\u540c\u6b65\u6570\u636e\u5230 LakeSoul \u8868\u4e2d\uff0c\u4ece\u800c\u4e0b\u6e38\u5206\u6790\u8ba1\u7b97\u4efb\u52a1\u5728\u8f83\u5c0f\u7684\u65f6\u95f4\u95f4\u9694\u540e\u5c31\u53ef\u4ee5\u8bfb\u5230\u5728\u7ebf\u6570\u636e\u5e93\u7684\u540c\u6b65\u6570\u636e\uff0c\u6d88\u9664\u4e86\u4f20\u7edf T+1 \u590d\u5236\u7684\u5f00\u9500\u3002","sidebar":"tutorialSidebar"},"Usage Docs/flink-cdc-sync":{"id":"Usage Docs/flink-cdc-sync","title":"LakeSoul Flink CDC \u6574\u5e93\u5343\u8868\u540c\u6b65","description":"LakeSoul \u81ea 2.1.0 \u7248\u672c\u8d77\uff0c\u5b9e\u73b0\u4e86 Flink CDC Sink\uff0c\u80fd\u591f\u652f\u6301 Table API \u53ca SQL \uff08\u5355\u8868\uff09\uff0c\u4ee5\u53ca Stream API \uff08\u6574\u5e93\u591a\u8868\uff09\u3002\u76ee\u524d\u652f\u6301\u7684\u4e0a\u6e38\u6570\u636e\u6e90\u4e3a MySQL\uff085.6-8.0\uff09","sidebar":"tutorialSidebar"},"Usage Docs/flink-lakesoul-connector":{"id":"Usage Docs/flink-lakesoul-connector","title":"LakeSoul Flink Connector","description":"LakeSoul \u63d0\u4f9b\u4e86 Flink Connector\uff0c\u5b9e\u73b0\u4e86 Flink Dynamic Table \u63a5\u53e3\uff0c\u53ef\u4ee5\u4f7f\u7528 Flink \u7684 DataStream API\uff0c Table API \u6216 SQL \u6765\u6267\u884c\u5bf9 LakeSoul \u6570\u636e\u7684\u8bfb\u5199\uff0c\u652f\u6301\u6d41\u5f0f\u548c\u6279\u5f0f\u4e24\u79cd\u6a21\u5f0f\u3002","sidebar":"tutorialSidebar"},"Usage Docs/setup-meta-env":{"id":"Usage Docs/setup-meta-env","title":"\u914d\u7f6e LakeSoul \u5143\u6570\u636e\u5e93","description":"\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6","sidebar":"tutorialSidebar"},"Usage Docs/setup-spark":{"id":"Usage Docs/setup-spark","title":"\u8bbe\u7f6e Spark/Flink \u5de5\u7a0b/\u4f5c\u4e1a","description":"Spark \u7248\u672c","sidebar":"tutorialSidebar"}}}')}}]);