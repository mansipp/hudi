"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[8889],{62079:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"timeline","title":"Timeline","description":"Changes to table state (writes, table services, schema changes, etc) are recorded as actions_** in the Hudi timeline_. The Hudi timeline is a log of all actions performed","source":"@site/docs/timeline.md","sourceDirName":".","slug":"/timeline","permalink":"/cn/docs/next/timeline","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/timeline.md","tags":[],"version":"current","frontMatter":{"title":"Timeline","toc":true,"toc_min_heading_level":2,"toc_max_heading_level":4},"sidebar":"docs","previous":{"title":"Apache Hudi Stack","permalink":"/cn/docs/next/hudi_stack"},"next":{"title":"Storage Layouts","permalink":"/cn/docs/next/storage_layouts"}}');var s=i(74848),a=i(28453);const r={title:"Timeline",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},o=void 0,l={},c=[{value:"Action Types",id:"action-types",level:3},{value:"State Transitions",id:"state-transitions",level:3},{value:"TrueTime Generation",id:"truetime-generation",level:3},{value:"Ordering of Actions",id:"ordering-of-actions",level:3},{value:"Timeline Components",id:"timeline-components",level:3},{value:"Active Timeline",id:"active-timeline",level:4},{value:"LSM Timeline History",id:"lsm-timeline-history",level:4},{value:"Timeline Archival Configs",id:"timeline-archival-configs",level:3},{value:"Spark configs",id:"spark-configs",level:4},{value:"Flink Options",id:"flink-options",level:4},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Changes to table state (writes, table services, schema changes, etc) are recorded as ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"actions"})})," in the Hudi ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"timeline"})}),". The Hudi timeline is a log of all actions performed\non the table at different ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"instants"})})," (points in time). It is a key component of Hudi's architecture, acting as a source of truth for the state of the table. All instant times\nused on the timeline follow ",(0,s.jsx)(t.a,{href:"https://research.google/pubs/spanner-truetime-and-the-cap-theorem/",children:"TrueTime"})," semantics, and are monotonically increasing globally across various\nprocesses involved. See TrueTime section below for more details."]}),"\n",(0,s.jsx)(t.p,{children:"Each action has the following attributes associated with it."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"requested instant"})," : Instant time representing when the action was requested on the timeline and acts as the transaction id. An immutable plan for the action should be generated before the action is requested."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"completed instant"})," : Instant time representing when the action was completed on the timeline. All relevant changes to table data/metadata should be made before the action is completed."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"state"})," :  state of the action. valid states are ",(0,s.jsx)(t.code,{children:"REQUESTED"}),", ",(0,s.jsx)(t.code,{children:"INFLIGHT"})," and ",(0,s.jsx)(t.code,{children:"COMPLETED"})," during an action's lifecycle."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"type"})," : the kind of action performed. See below for full list of actions."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Timeline actions",src:i(57050).A+"",width:"817",height:"424"}),"\n",(0,s.jsx)("p",{align:"center",children:"Figure: Actions in the timeline"})]}),"\n",(0,s.jsx)(t.h3,{id:"action-types",children:"Action Types"}),"\n",(0,s.jsx)(t.p,{children:"Following are the valid action types."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"COMMIT"})," - Write operation denoting an atomic write of a batch of records into a base files in the table."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"DELTA_COMMIT"})," - Write operation denoting an atomic write of a batch of records into merge-on-read type table, where some/all of the data could be just written to delta logs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"REPLACE_COMMIT"})," - Write operation that atomically replaces a set of file groups in the table with another. Used for implementing batch write operations like ",(0,s.jsx)(t.em,{children:"insert_overwrite"}),", ",(0,s.jsx)(t.em,{children:"delete_partition"})," etc, as well as table services\nlike clustering."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"CLEANS"})," - Table service that removes older file slices that are no longer needed from the table, by deleting those files."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"COMPACTION"})," - Table service to reconcile differential data between base and delta files, by merging delta files into base files."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"LOGCOMPACTION"})," - Table service to merge multiple small log files into a bigger log file in the same file slice."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"CLUSTERING"})," - Table service to rewrite existing file groups with optimized sort order or storage layouts, as new file groups in the table."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"INDEXING"})," - Table service to build an index of a requested type on a column of the table, consistent with the state of the table at the completed instant in face of ongoing writes."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ROLLBACK"})," - Indicates that an unsuccessful write operation was rolled back, removing any partial/uncommitted files produced during such a write from storage."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"SAVEPOINT"}),' - Marks certain file slices as "saved", such that cleaner will not delete them. It helps restore the table to a point on the timeline, in case of disaster/data recovery scenarios or perform time-travel queries as of those instants.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"RESTORE"})," - Restores a table to a given savepoint on the timeline, in case of disaster/data recovery scenarios."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["In some cases, action types in the completed state may be different from requested/inflight states, but still tracked by the same requested instant. For e.g. ",(0,s.jsx)(t.em,{children:"CLUSTERING"})," as in requested/inflight state,\nbecomes ",(0,s.jsx)(t.em,{children:"REPLACE_COMMIT"})," in completed state. Compactions complete as ",(0,s.jsx)(t.em,{children:"COMMIT"})," action on the timeline producing new base files. In general, multiple write operations from the storage engine\nmay map to the same action on the timeline."]}),"\n",(0,s.jsx)(t.h3,{id:"state-transitions",children:"State Transitions"}),"\n",(0,s.jsxs)(t.p,{children:["Actions go through state transitions on the timeline, with each transition recorded by a file of the pattern ",(0,s.jsx)(t.code,{children:"<requsted instant>.<action>.<state>"}),"(for other states) or\n",(0,s.jsx)(t.code,{children:"<requsted instant>_<completed instant>.<action>"})," (for COMPLETED state). Hudi guarantees that the state transitions are atomic and timeline consistent based on the instant time.\nAtomicity is achieved by relying on the atomic operations on the underlying storage (e.g. PUT calls to S3/Cloud Storage)."]}),"\n",(0,s.jsx)(t.p,{children:"Valid state transitions are as follows:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"[       ] -> REQUESTED"})," - Denotes an action has been scheduled, but has not initiated by any process yet.\nNote that the process requesting the action can be different from the process that will perform/complete the action."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"REQUESTED -> INFLIGHT"})," - Denotes that the action is currently being performed by some process."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"INFLIGHT -> REQUESTED"})," or ",(0,s.jsx)(t.code,{children:"INFLIGHT -> INFLIGHT"})," - A process can safely fail many times while performing the action."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"INFLIGHT -> COMPLETED"})," - Denotes that the action has been completed successfully."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The current state of an action on the timeline is the highest state recorded for that action on the timeline, with states ordered as ",(0,s.jsx)(t.code,{children:"REQUESTED < INFLIGHT < COMPLETED"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"truetime-generation",children:"TrueTime Generation"}),"\n",(0,s.jsxs)(t.p,{children:["Time in distributed systems has been studied literally for ",(0,s.jsx)(t.a,{href:"https://lamport.azurewebsites.net/pubs/chandy.pdf",children:"decades"}),". Google Spanner\u2019s\n",(0,s.jsx)(t.a,{href:"https://research.google/pubs/spanner-truetime-and-the-cap-theorem/",children:"TrueTime"})," API addresses the challenges of managing time in distributed systems by providing a globally\nsynchronized clock with bounded uncertainty. Traditional systems struggle with clock drift and lack of a consistent timeline, but TrueTime ensures that all nodes operate with\na common notion of time, defined by a strict interval of uncertainty. This enables Spanner to achieve external consistency in distributed transactions, allowing it to assign\ntimestamps with confidence that no other operation in the past or future will conflict, solving age-old issues of clock synchronization and causality. Several OLTP databases\nlike Spanner, ",(0,s.jsx)(t.a,{href:"https://www.cockroachlabs.com/blog/living-without-atomic-clocks/",children:"CockroachDB"})," rely on TrueTime."]}),"\n",(0,s.jsx)(t.p,{children:"Hudi uses these semantics for instant times on the timeline, to provide unique monotonically increasing instant values. TrueTime can be generated by a single shared time generator\nprocess or by having each process generate its own time and waiting for time >= maximum expected clock drift across all processes within a distributed lock. Locking ensures only one\nprocess is generating time at a time and waiting ensures enough time passes such that any new time generated is guaranteed to be greater than the previous time."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Timeline actions",src:i(94200).A+"",width:"704",height:"511"}),"\n",(0,s.jsx)("p",{align:"center",children:"Figure: TrueTime generation for processes A & B"})]}),"\n",(0,s.jsxs)(t.p,{children:["The figure above shows how time generated by process A and B are monotonically increasing, even though process B has a lower local clock than A at the start, by waiting for uncertainty window of x ms to pass.",(0,s.jsx)(t.br,{}),"\n","In fact, given Hudi targets transaction durations > 1 second, we can afford to operate with a much higher uncertainty bound (> 100ms) guaranteeing extremely high fidelity time generation."]}),"\n",(0,s.jsx)(t.h3,{id:"ordering-of-actions",children:"Ordering of Actions"}),"\n",(0,s.jsx)(t.p,{children:"Thus, actions appear on the timeline as an interval starting at the requested instant and ending at the completed instant. Such actions can be ordered by completion time to"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Commit time ordering"})," : To obtain serializable execution order of writes performed consistent with typical relational databases, the actions can be ordered by completed instant."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Event time ordering"}),": Data lakehouses ultimately deal with streams of data (CDC, events, slowly changing data etc), where ordering is dependent on business fields in\nthe data. In such cases, actions can be ordered by commit time, while the records themselves are further merged in order of a specified event time field."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Hudi relies on ordering of requested instants of certain actions against completed instants of other actions, to implement non-blocking table service operations or concurrent streaming model\nwrites with event time ordering."}),"\n",(0,s.jsx)(t.h3,{id:"timeline-components",children:"Timeline Components"}),"\n",(0,s.jsx)(t.h4,{id:"active-timeline",children:"Active Timeline"}),"\n",(0,s.jsxs)(t.p,{children:["Hudi implements the timeline as a Log Structured Merge (",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Log-structured_merge-tree",children:"LSM"}),") tree under the ",(0,s.jsx)(t.code,{children:".hoodie/timeline"})," directory. Unlike typical LSM implementations,\nthe memory component and the write-ahead-log are at once replaced by ",(0,s.jsx)(t.a,{href:"https://avro.apache.org/",children:"avro"})," serialized files containing individual actions (",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"active timeline"})}),") for high durability and inter-process co-ordination.\nAll actions on the Hudi table are created in the active timeline a new entry and periodically actions are archived from the active timeline to the LSM structure (timeline history).\nAs the name suggests active timeline is consulted all the time to build a consistent view of data and archiving completed actions ensures reads on the timeline does not incur unnecessary latencies\nas timeline grows. The key invariant around such archiving is that any side effects from completed/pending actions (e.g. uncommitted files) are removed from storage, before archiving them."]}),"\n",(0,s.jsx)(t.h4,{id:"lsm-timeline-history",children:"LSM Timeline History"}),"\n",(0,s.jsxs)(t.p,{children:["As mentioned above, active timeline has limited log history to be fast, while archived timeline is expensive to access\nduring reads or writes, especially with high write throughput. To overcome this limitation, Hudi introduced the LSM (\nlog-structured merge) tree based timeline. Completed actions, their plans and completion metadata are stored in a more\nscalable LSM tree based archived timeline organized in an ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"history"})})," storage folder under the ",(0,s.jsx)(t.code,{children:".hoodie/timeline"})," metadata\npath. It consists of Apache Parquet files with action instant data and bookkeeping metadata files, in the following\nmanner."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"/.hoodie/timeline/history/ \t\t\t\t\t\n\u251c\u2500\u2500 _version_      \t\t\t\t\t        <-- stores the manifest version that is current\n\u251c\u2500\u2500 manifest_1                              <-- manifests store list of files in timeline\n\u251c\u2500\u2500 manifest_2                              <-- compactions, cleaning, writes produce new manifest files\n\u251c\u2500\u2500 ...                                      \n\u251c\u2500\u2500 manifest_<N>                            <-- there can be many manifest files at any given time\n\u251c\u2500\u2500 <min_time>_<max_time>_<level>.parquet   <-- files storing actual action details\n"})}),"\n",(0,s.jsx)(t.p,{children:"One can read more about the details of LSM timeline in Hudi 1.0 specs. To understand it better, here is an example."}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:i(91140).A,alt:"lsm_tree.png"})}),"\n",(0,s.jsxs)(t.p,{children:["In the above figure, each level is a tree sorted by instant times. We can see that for a bunch of commits the metadata\nis stored in a parquet file. As and when more commits are accumulated, they get compacted and pushed down to lower level\nof the tree. Each new operation to the timeline yields a new snapshot version. The advantage of such a structure is that\nwe can keep the top level in memory if needed, and still load the remaining levels efficiently from the disk if we need to walk\nback longer history. The LSM timeline compaction frequency is controlled by",(0,s.jsx)(t.code,{children:"hoodie.timeline.compaction.batch.size"})," i.e.\nfor every ",(0,s.jsx)(t.em,{children:"N"})," parquet files in the current level, they are merged and flush as a compacted file in the next level."]}),"\n",(0,s.jsx)(t.h3,{id:"timeline-archival-configs",children:"Timeline Archival Configs"}),"\n",(0,s.jsx)(t.p,{children:"Basic configurations that control archival."}),"\n",(0,s.jsx)(t.h4,{id:"spark-configs",children:"Spark configs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config Name"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.keep.max.commits"}),(0,s.jsx)(t.td,{children:"30 (Optional)"}),(0,s.jsx)(t.td,{children:"Archiving service moves older entries from timeline into an archived log after each write, to keep the metadata overhead constant, even as the table size grows. This config controls the maximum number of instants to retain in the active timeline."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.keep.min.commits"}),(0,s.jsx)(t.td,{children:"20 (Optional)"}),(0,s.jsx)(t.td,{children:"Similar to hoodie.keep.max.commits, but controls the minimum number of instants to retain in the active timeline."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.timeline.compaction.batch.size"}),(0,s.jsx)(t.td,{children:"10 (Optional)"}),(0,s.jsx)(t.td,{children:"Controls the number of parquet files to compact in a single compaction run at the current level of the LSM tree."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["For more advanced configs refer ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#Archival-Configs-advanced-configs",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"flink-options",children:"Flink Options"}),"\n",(0,s.jsx)(t.p,{children:"Flink jobs using the SQL can be configured through the options in WITH clause. The actual datasource level configs are listed below."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config Name"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"archive.max_commits"}),(0,s.jsx)(t.td,{children:"50 (Optional)"}),(0,s.jsxs)(t.td,{children:["Max number of commits to keep before archiving older commits into a sequential log, default 50",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," ",(0,s.jsx)(t.code,{children:"Config Param: ARCHIVE_MAX_COMMITS"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"archive.min_commits"}),(0,s.jsx)(t.td,{children:"40 (Optional)"}),(0,s.jsxs)(t.td,{children:["Min number of commits to keep before archiving older commits into a sequential log, default 40",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," ",(0,s.jsx)(t.code,{children:"Config Param: ARCHIVE_MIN_COMMITS"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.timeline.compaction.batch.size"}),(0,s.jsx)(t.td,{children:"10 (Optional)"}),(0,s.jsx)(t.td,{children:"Controls the number of parquet files to compact in a single compaction run at the current level of the LSM tree."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Refer ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#Flink-Options",children:"here"})," for more details."]}),"\n",(0,s.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsx)("h3",{children:"Blogs"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://medium.com/@simpsons/hoodie-timeline-foundational-pillar-for-acid-transactions-be871399cbae",children:"Apache Hudi Timeline: Foundational pillar for ACID transactions"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},91140:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/lsm_tree-0a069798a1196c1c71330abcb7ff3581.png"},57050:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/hudi-timeline-actions-e56d0d9fad5645d9910f2591ad7775de.png"},94200:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/hudi-timeline-truetime-4cb47da19e5344580d5ebdcdce3d6cf2.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);