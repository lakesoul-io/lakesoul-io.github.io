"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[8366],{8359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(5893),i=a(1151);const r={},o="What's new in version 2.2.0",s={permalink:"/blog/2023/04/21/lakesoul-2.2.0-release",editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/blog/2023-04-21-lakesoul-2.2.0-release/index.md",source:"@site/blog/2023-04-21-lakesoul-2.2.0-release/index.md",title:"What's new in version 2.2.0",description:"\x3c!--",date:"2023-04-21T00:00:00.000Z",formattedDate:"April 21, 2023",tags:[],readingTime:9.9,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"LakeSoul releases version 2.3.0, with Fully Support of CDC Incremental Computing and Other Important Features",permalink:"/blog/2023/07/17/lakesoul-2.3.0-release"}},l={authorsImageUrls:[]},c=[{value:"LakeSoul Version 2.2.0 Update Content",id:"lakesoul-version-220-update-content",level:2},{value:"1. Native IO Detailed Explanation",id:"1-native-io-detailed-explanation",level:3},{value:"2. Introduction to Snapshot and Incremental Read Functions",id:"2-introduction-to-snapshot-and-incremental-read-functions",level:3},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Recently, after months of research and development, LakeSoul released version 2.2.0(",(0,n.jsx)(t.a,{href:"https://github.com/lakesoul-io/LakeSoul/releases/tag/v2.2.0",children:"Github Release Notes"}),"). The most important upgrade in this version is that the new Native IO is enabled by default in both Spark and Flink, and LakeSoul's performance has once again significantly been improved and expanded its performance leadership advantage in the field of Cloud Native Data Lakehouse.This article provides you with a detailed explanation of the updates to LakeSoul version 2.2.0 and the technical details of Native IO."]}),"\n",(0,n.jsx)(t.h2,{id:"lakesoul-version-220-update-content",children:"LakeSoul Version 2.2.0 Update Content"}),"\n",(0,n.jsx)(t.p,{children:"In version 2.2.0, LakeSoul implemented a brand-new Native IO, migrating full and incremental read-write logic to the new IO layer, and conducting extensive performance and correctness testing. The new IO layer was enabled by default in Spark and Flink."}),"\n",(0,n.jsxs)(t.p,{children:["Version 2.2.0 also released several new interfaces in Spark, such as ",(0,n.jsx)(t.a,{href:"https://lakesoul-io.github.io/docs/Tutorials/snapshot-manage",children:"snapshot reading, rollback and cleaning"}),", ",(0,n.jsx)(t.a,{href:"https://lakesoul-io.github.io/docs/Tutorials/incremental-query",children:"incremental batch reading, and incremental streaming reading"}),", which more perfectly supports the high-performance streaming incremental ETL data modeling process. Below, we will provide a detailed explanation of these new improvements and feature points."]}),"\n",(0,n.jsx)(t.h3,{id:"1-native-io-detailed-explanation",children:"1. Native IO Detailed Explanation"}),"\n",(0,n.jsx)(t.p,{children:"As a Cloud Native Data Lakehouse Framework, the read-write performance of  HDFS and Cloud storage is the top priority. LakeSoul supports the feature of streaming and batch integration, and supports Upsert update writing and Merge on Read reading for the primary key table in storage. The implementation of the IO layer has complexity. Previously, LakeSoul's Upsert writing mainly relied on computational frameworks for implementation. For example, in Spark, the primary key needs to be shuffled and sorted by Spark before being written to storage. When reading, a set of orderly file merging Reader is implemented in Spark. This implementation brings several issues:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Performance has room for optimization. LakeSoul primary key model adopts a hash bucket to store in an ordered manner, which does not need to merge with history during Upsert writing, resulting in high write throughput. However, MOR reading requires the orderly merging of multiple files, which has a greater impact on read performance in the case of more files, especially in the scenario of high latency object storage, and needs to be optimized."}),"\n",(0,n.jsx)(t.li,{children:"The original solution is tightly coupled with Spark, making it inconvenient to reuse read-write logic in other computing engines such as Flink, especially the more complex MOR read logic."}),"\n",(0,n.jsx)(t.li,{children:"The original solution was implemented in Java, which does not facilitate interfacing with computational engines implemented in other languages such as C++."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Considering the above issues, LakeSoul chose to use Native Code (Rust language) to re-implement the read-write logic of IO layer and provide CFFI based interface to the upper layer to facilitate further encapsulation in other languages such as Java, Python, etc., so as to interface with the computing engine. The specific design and implementation includes the following points:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Using Apache Arrow and Rust"}),"\n",(0,n.jsx)(t.p,{children:"LakeSoul uses Parquet as the physical storage format, so we choose to use Arrow as the in-memory intermediate representation layer for IO. On the one hand, Arrow is a mature in-memory column format with rich library support, such as Rust's implementation of Arrow-rs, and on the other hand, the column format is chosen to gain vectorization acceleration capability and can be easily interfaced with vectorization computation engines."}),"\n",(0,n.jsxs)(t.p,{children:["LakeSoul relies on Arrow's Rust implementation, namely ",(0,n.jsx)(t.a,{href:"https://github.com/apache/arrow-rs",children:"arrow-rs"}),", which already includes Parquet Reader, Writer, and object_store abstraction layer, and can well support cloud-native object stores such as S3. The main reason for choosing Rust implementation is that Rust has better support for asynchronous, and the operations on object stores can be implemented as async interfaces, which can be further optimized for IO in an asynchronous way."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"LakeSoul Native Writer"}),"\n",(0,n.jsxs)(t.p,{children:["LakeSoul's Native Writer implements single-file concurrent writes through the ",(0,n.jsx)(t.a,{href:"https://docs.amazonaws.cn/en_us/AmazonS3/latest/userguide/mpuoverview.html",children:"MultipartUpload"})," function encapsulated in Arrow-rs' object_store library. Specifically, a Parquet file can be organized into multiple RowGroups, each of which is serialized in memory as a contiguous buffer in advance. LakeSoul submits a RowGroup buffer as a part of object storage and asynchronously uploads it to the backend thread. At the same time, the computing thread can continue to organize the content of the next RowGroup, thus achieving concurrent writing of a single file on object storage."]}),"\n",(0,n.jsxs)(t.p,{children:["LakeSoul Native Writer supports sorting primary keys on write, using the ",(0,n.jsx)(t.a,{href:"https://github.com/apache/arrow-datafusion",children:"Arrow DataFusion"})," library's Sort implementation, which supports spilling the intermediate results of the sort to disk so that Writer can support large amounts of data writes, which is important in Flink Sink. The reason is that primary key sorting only sorts the same batch of written files, while LakeSoul's Flink Sink only writes files when Flink performs a checkpoint, which can be a long interval between checkpoints. With disk overflow writes, the problem of OOM due to excessive memory consumption is avoided."]}),"\n",(0,n.jsx)(t.p,{children:"MultipartUpload with object stores also has the advantage of eliminating the overhead of staging intermediate files and copying files at commit time. staging files were originally designed to avoid incomplete writes to the target table or partition directory, which could cause incomplete data to be read downstream. Both Flink and Spark need to write the staging file in a temporary directory first, and then rename the temporary directory to the final target directory when committing, which brings additional overhead for overwriting, especially when the object store does not support atomic renaming, and requires a complete copy of the data. And the Staging file also makes maintaining Flink Sink state more complex. LakeSoul supports the abort operation of MultipartUpload, which aborts the unwritten file if the write is cancelled in the middle, and LakeSoul's metadata layer implements a two-stage commit protocol in Spark and Flink to ensure consistency."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"LakeSoul Native Reader"}),"\n",(0,n.jsx)(t.p,{children:"In the Reader section, we have optimized the object store for accessing Parquet files and MOR for merging multiple ordered files."}),"\n",(0,n.jsx)(t.p,{children:"Object storage typically has high latency, the object_store library in arrow-rs has been optimized for small request merges (coalesce) and concurrent requests, but the results are still not good enough in our actual tests. Therefore, we made further optimizations in two areas:"}),"\n",(0,n.jsx)(t.p,{children:"One is to split read requests into multiple concurrent requests. The underlying object storage is actually the HTTP protocol, and you can specify the range of object files to be accessed in the HTTP request body. We limit the range size of a single request to 8M, and requests larger than 8M are automatically split into multiple concurrent requests to avoid long blocking waits caused by accessing too large a range of files in one request."}),"\n",(0,n.jsx)(t.p,{children:"The second optimization is to do background asynchronous prefetching of Parquet's RowGroup, again to allow the compute and IO threads to work simultaneously, masking latency with prefetching. By default, a RowGroup is prefetched to avoid taking up too much memory."}),"\n",(0,n.jsx)(t.p,{children:"For MOR ordered merging, we implement multiple Arrow RecordBatch asynchronous streams merging based on arrow-rs. The implementation uses the Row Format provided by arrow-rs to optimize the performance of comparing primary key order relationships and interleave to optimize the performance of merging multiple streams into one RecordBatch."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Spark, Flink Engine Interfacing with Native IO Layer"}),"\n",(0,n.jsxs)(t.p,{children:["As mentioned earlier, the Native IO layer is implemented in Rust. On top of it, we encapsulate a C interface to provide read and write functionality. Both synchronous blocking and asynchronous callbacks are supported for reads, so that the upper layer can choose according to its needs (for writes only the blocking interface is provided, because the underlying layer has already done the concurrency of Multipart uploads). On top of the C interface, the Java interface is implemented using ",(0,n.jsx)(t.a,{href:"https://github.com/jnr/jnr-ffi",children:"jnr-ffi"}),". Finally, the Reader and Writer interfaces are implemented on the Spark and Flink sides respectively."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"LakeSoul IO Performance Review"}),"\n",(0,n.jsx)(t.p,{children:"LakeSoul's Native IO layer implements vectorized read and write to Parquet file format, and does asynchronous concurrency, prefetching and other performance optimizations for object storage. The direct read and write to Parquet files has significant performance improvement over the native parquet-mr and Hadoop S3A implementations in Spark and Flink:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"nativeio-vs-parquet-mr",src:a(7823).Z+"",width:"1042",height:"724"})}),"\n",(0,n.jsxs)(t.p,{children:["We also did a read/write performance comparison of LakeSoul with Hudi and Iceberg in COW and MOR scenarios. The evaluation scenario is to first write 10 million lines of data and then Upsert 10 times, 2 million lines each time. The data and code for this performance evaluation are publicly available in the ",(0,n.jsx)(t.a,{href:"https://github.com/meta-soul/ccf-bdci2022-datalake-contest-examples/tree/mor",children:"performance evaluation code base"}),". The performance comparison is as follows:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"write-perf",src:a(5301).Z+"",width:"903",height:"722"})}),"\n",(0,n.jsx)(t.p,{children:"In terms of write performance, for COW mode, all three frameworks require full rewrite data, and the computational overhead is basically the same, LakeSoul is the best with the Native IO optimization. For MOR mode, LakeSoul uses the primary key bucketing mode, which does not need to maintain index updates, so it achieves high write throughput, significantly better than the other two frameworks."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"read-perf",src:a(8125).Z+"",width:"883",height:"700"})}),"\n",(0,n.jsx)(t.p,{children:"In terms of read performance, for COW mode, both read the merged file without merge overhead, LakeSoul also benefits from IO layer optimization to get ahead. For MOR mode, although LakeSoul's ordered merge has a theoretical performance disadvantage compared to Hudi's bloom filter filter and Iceberg's pos-delete filter, LakeSoul still has a 1X read performance lead over Iceberg with several optimizations in the IO layer."}),"\n",(0,n.jsx)(t.p,{children:"It is worth mentioning that LakeSoul has the smallest CPU and memory consumption among the three frameworks in the read and write process. In addition, LakeSoul's MOR read, after splitting incremental data into 100 Upsert writes, the read performance only decreases by about 15%, which means LakeSoul can guarantee better read performance even with high frequency writes without compaction."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"2-introduction-to-snapshot-and-incremental-read-functions",children:"2. Introduction to Snapshot and Incremental Read Functions"}),"\n",(0,n.jsx)(t.p,{children:"LakeSoul 2.2.0 provides a series of new interfaces for snapshot, incremental scenarios. lakeSoul uses MVCC multi-version control mechanism, which records the files corresponding to each version in the metadata. Therefore, it is easy to support snapshot reading (also known as Time Travel), which means reading the snapshot version of data at a previous point in time. LakeSoul can also support rollback to a point in time, so that if there is a problem with the latest data, it can be restored to the previous correct version."}),"\n",(0,n.jsxs)(t.p,{children:["For snapshot read, snapshot rollback and snapshot cleanup, users only need to provide the snapshot timestamp, expressed as a timestamp string, e.g. ",(0,n.jsx)(t.code,{children:'"2022-01-01 15:15:15"'}),", the timestamp does not need to strictly correspond to the actual write time, this time will be used as the upper bound of the timestamp of the write version, and LakeSoul will automatically find the snapshot corresponding to a timestamp less than or equal to this version."]}),"\n",(0,n.jsxs)(t.p,{children:["Snapshot-related function points can be found in the ",(0,n.jsx)(t.a,{href:"https://lakesoul-io.github.io/docs/Tutorials/snapshot-manage",children:"snapshot usage tutorial"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["LakeSoul also provides incremental reads. In streaming ETL, the incremental read function is of great significance. Incremental read can convert the entire ETL link to incremental computing, improve real-time performance, and save computing resources.LakeSoul 2.2.0 supports incremental batch reads and incremental streaming reads in Spark. When incremental streaming read, LakeSoul will act as Spark's Streaming data source and automatically discover and read incremental data of the table. For details, please refer to the ",(0,n.jsx)(t.a,{href:"https://lakesoul-io.github.io/docs/Tutorials/incremental-query",children:"incremental query tutorial"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["It is worth mentioning that, unlike Hudi and Iceberg, LakeSoul can support incremental reads for both primary and non-primary key tables, and for LakeSoul CDC tables (",(0,n.jsx)(t.a,{href:"https://lakesoul-io.github.io/docs/Tutorials/flink-cdc-sink",children:"refer to LakeSoul CDC table format"}),"), it can also read incremental CDC streams, which represent incremental changes to the LakeSoul table itself, including insert, update and delete operations, enabling flexible downstream incremental computation. In the next release, LakeSoul will support incremental reading of LakeSoul table CDC as Flink ChangeLog Stream, which can be used for efficient incremental ETL development with Flink SQL."]}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"LakeSoul 2.2.0 releases a new Native IO that further extends the performance benefits of the cloud-native LakeSoul framework domain. Snapshot and incremental interfaces are provided to better support streaming data modeling development."}),"\n",(0,n.jsx)(t.p,{children:"In the next release, LakeSoul will release global automatic Compaction, Flink Stream SQL Source and other important features, so stay tuned."})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7823:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nativeio-vs-parquet-mr-Eng-b751b5c44bc204e592a4e3855ed1ed94.PNG"},8125:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/read-perf-Eng-f61e173bf32c3295e8dc9578b554984c.PNG"},5301:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/writer-perf-Eng-40e54f273b4abc06117dbf1ea89a4e42.PNG"},1151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>o});var n=a(7294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);