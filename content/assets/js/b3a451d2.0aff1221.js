"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[5289],{23882:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var t=i(83846),a=i(74848),s=i(28453);i(54892);const r={title:"Apache Hudi 2024: A Year In Review",excerpt:"Reflect on and celebrate the myriad of exciting developments and accomplishments that have defined the year 2024 for the Hudi community.",author:"Shiyan Xu",category:"blog",image:"/assets/images/blog/2024-12-29-a-year-in-review-2024/cover.jpg",tags:["apache hudi","community"]},o=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Community Growth and Engagement",id:"community-growth-and-engagement",level:2},{value:"Major Milestones",id:"major-milestones",level:2},{value:"Apache Hudi 1.0 Release",id:"apache-hudi-10-release",level:3},{value:"Launch of Hudi-rs",id:"launch-of-hudi-rs",level:3},{value:"Published Books and Educational Content",id:"published-books-and-educational-content",level:3},{value:"Community Events and Sharing",id:"community-events-and-sharing",level:2},{value:"Lakehouse Chronicles with Apache Hudi",id:"lakehouse-chronicles-with-apache-hudi",level:3},{value:"Hudi Newsletter",id:"hudi-newsletter",level:3},{value:"Community Syncs",id:"community-syncs",level:3},{value:"Notable User Stories and Technical Content",id:"notable-user-stories-and-technical-content",level:2},{value:"Looking Ahead to 2025",id:"looking-ahead-to-2025",level:2},{value:"Get Involved",id:"get-involved",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{src:"/assets/images/blog/2024-12-29-a-year-in-review-2024/cover.jpg",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),"\n",(0,a.jsx)(n.p,{children:"As we wrap up another remarkable year for Apache Hudi, I am thrilled to reflect on the tremendous achievements and milestones that have defined 2024. This year has been particularly special as we achieved several significant milestones, including the landmark release of Hudi 1.0, the publication of comprehensive books, and the introduction of new tools that expand Hudi's ecosystem."}),"\n",(0,a.jsx)(n.h2,{id:"community-growth-and-engagement",children:"Community Growth and Engagement"}),"\n",(0,a.jsx)(n.p,{children:"The Apache Hudi community continued its impressive growth trajectory in 2024. The number of new PRs has remained stable, indicating a consistent level of development activities:"}),"\n",(0,a.jsx)("img",{src:"/assets/images/blog/2024-12-29-a-year-in-review-2024/pr-history.svg",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),"\n",(0,a.jsx)(n.p,{children:"Our community presence expanded significantly across various platforms:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The community grew to over 10,500 followers on LinkedIn"}),"\n",(0,a.jsx)(n.li,{children:"Added 8,755 new followers in the last 365 days"}),"\n",(0,a.jsx)(n.li,{children:"Generated 441,402 content impressions"}),"\n",(0,a.jsx)(n.li,{children:"Received 6,555 reactions and 493 comments across platforms"}),"\n",(0,a.jsx)(n.li,{children:"Our Slack community remained vibrant with rich technical discussions and knowledge sharing"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"major-milestones",children:"Major Milestones"}),"\n",(0,a.jsx)(n.h3,{id:"apache-hudi-10-release",children:"Apache Hudi 1.0 Release"}),"\n",(0,a.jsxs)(n.p,{children:["2024 marked a historic moment with the ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/releases/release-1.0.0",children:"release of Apache Hudi 1.0"}),", representing a major evolution in data lakehouse technology. This release brought several groundbreaking features:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Secondary Indexing"}),": First of its kind in lakehouses, enabling database-like query acceleration with demonstrated 95% latency reduction on 10TB TPC-DS for low-moderate selectivity queries"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Logical Partitioning via Expression Indexes"}),": Introducing PostgreSQL-style expression indexes for more efficient partition management"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Partial Updates"}),": Achieving 2.6x performance improvement and 85% reduction in bytes written for update-heavy workloads"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Non-blocking Concurrency Control (NBCC)"}),": An industry-first feature allowing simultaneous writing from multiple writers"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Merge Modes"}),": First-class support for both ",(0,a.jsx)(n.code,{children:"commit_time_ordering"})," and ",(0,a.jsx)(n.code,{children:"event_time_ordering"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"LSM Timeline"}),": Revamped timeline storage as a scalable LSM tree for extended table history retention"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"TrueTime"}),": Strengthened time semantics ensuring forward-moving clocks in distributed processes"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Please check out the ",(0,a.jsx)(n.a,{href:"/blog/2024/12/16/announcing-hudi-1-0-0",children:"announcement blog"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"launch-of-hudi-rs",children:"Launch of Hudi-rs"}),"\n",(0,a.jsxs)(n.p,{children:["A significant expansion of the Hudi ecosystem occurred with the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/hudi-rs",children:"release of Hudi-rs"}),", the native Rust implementation for Apache Hudi with Python API bindings. This new project enables:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Reading Hudi Tables without Spark or JVM dependencies"}),"\n",(0,a.jsx)(n.li,{children:"Integration with Apache Arrow for enhanced compatibility"}),"\n",(0,a.jsx)(n.li,{children:"Support for Copy-on-Write (CoW) table snapshots and time-travel reads"}),"\n",(0,a.jsx)(n.li,{children:"Cloud storage support across AWS, Azure, and GCP"}),"\n",(0,a.jsx)(n.li,{children:"Native integration with Apache DataFusion, Ray, Daft, etc"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"published-books-and-educational-content",children:"Published Books and Educational Content"}),"\n",(0,a.jsx)(n.p,{children:"2024 saw the release of two comprehensive guides to Apache Hudi:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://learning.oreilly.com/library/view/apache-hudi-the/9781098173821/",children:(0,a.jsx)(n.strong,{children:'"Apache Hudi: The Definitive Guide"'})})," (O'Reilly) - Released in early access, ",(0,a.jsx)(n.a,{href:"https://www.onehouse.ai/whitepaper/apache-hudi-the-definitive-guide",children:"free copy available"}),", providing comprehensive coverage of:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Distributed query engines"}),"\n",(0,a.jsx)(n.li,{children:"Snapshot and time travel queries"}),"\n",(0,a.jsx)(n.li,{children:"Incremental queries"}),"\n",(0,a.jsx)(n.li,{children:"Change-data-capture modes"}),"\n",(0,a.jsx)(n.li,{children:"End-to-end ingestion with Hudi Streamer"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("img",{src:"/assets/images/blog/2024-12-29-a-year-in-review-2024/hudi-tdg.jpg",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://blog.datumagic.com/p/apache-hudi-from-zero-to-one-110",children:(0,a.jsx)(n.strong,{children:'"Apache Hudi: From Zero to One"'})})," - A 10-part blog series turned into ",(0,a.jsx)(n.a,{href:"https://www.onehouse.ai/whitepaper/ebook-apache-hudi---zero-to-one",children:"an ebook"}),", offering deep technical insights into Hudi's architecture and capabilities, covering:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Storage format and operations"}),"\n",(0,a.jsx)(n.li,{children:"Read and write flows"}),"\n",(0,a.jsx)(n.li,{children:"Table services and indexing"}),"\n",(0,a.jsx)(n.li,{children:"Incremental processing"}),"\n",(0,a.jsx)(n.li,{children:"Hudi 1.0 features"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("img",{src:"/assets/images/blog/2024-12-29-a-year-in-review-2024/hudi0to1.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),"\n",(0,a.jsx)(n.h2,{id:"community-events-and-sharing",children:"Community Events and Sharing"}),"\n",(0,a.jsx)(n.p,{children:"The Apache Hudi community maintained a strong presence at major industry events throughout 2024:"}),"\n",(0,a.jsx)("img",{src:"/assets/images/blog/2024-12-29-a-year-in-review-2024/community-events.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Databricks' Data+AI Summit - Presenting Apache Hudi's role in the lakehouse ecosystem and its interoperability with other table formats through XTable, an open-source project enabling seamless conversion between Hudi, Delta Lake, and Iceberg"}),"\n",(0,a.jsx)(n.li,{children:"Confluent's Current 2024 - Demonstrating Hudi's powerful CDC capabilities with Apache Flink, showcasing real-time data pipelines and the innovative Non-Blocking Concurrency Control (NBCC) for high-volume streaming workloads"}),"\n",(0,a.jsx)(n.li,{children:"Trino Fest 2024 - Showcasing Hudi connector's evolution and innovations in Trino, including multi-modal indexing capabilities and the roadmap for enhanced query performance through Alluxio-powered caching and expanded DDL/DML support"}),"\n",(0,a.jsx)(n.li,{children:"Bangalore Lakehouse Days - Deep dive into Apache Hudi 1.0's groundbreaking features including LSM-based timeline, functional indexes, and non-blocking concurrency control, demonstrating Hudi's continued innovation in the lakehouse space"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Additionally, the community launched several new initiatives to foster learning and knowledge sharing:"}),"\n",(0,a.jsx)(n.h3,{id:"lakehouse-chronicles-with-apache-hudi",children:(0,a.jsx)(n.a,{href:"https://www.youtube.com/playlist?list=PLxSSOLH2WRMNQetyPU98B2dHnYv91R6Y8",children:"Lakehouse Chronicles with Apache Hudi"})}),"\n",(0,a.jsx)(n.p,{children:"A new community series with 4 episodes released."}),"\n",(0,a.jsx)("img",{src:"/assets/images/blog/2024-12-29-a-year-in-review-2024/lakehouse-chronicles.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),"\n",(0,a.jsx)(n.h3,{id:"hudi-newsletter",children:(0,a.jsx)(n.a,{href:"https://hudinewsletter.substack.com/",children:"Hudi Newsletter"})}),"\n",(0,a.jsx)(n.p,{children:"9 editions published, keeping the community informed about latest developments."}),"\n",(0,a.jsx)("img",{src:"/assets/images/blog/2024-12-29-a-year-in-review-2024/newsletter.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),"\n",(0,a.jsx)(n.h3,{id:"community-syncs",children:(0,a.jsx)(n.a,{href:"https://www.youtube.com/@apachehudi",children:"Community Syncs"})}),"\n",(0,a.jsx)(n.p,{children:"Featured 8 user stories from major organizations including Amazon, Peloton, Shopee and Uber."}),"\n",(0,a.jsx)("img",{src:"/assets/images/blog/2024-12-29-a-year-in-review-2024/community-syncs.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=rMXhlb7Uci8",children:"Powering Amazon Unit Economics with Configurations and Hudi"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=-Pyid5K9dyU",children:"Modernizing Data Infrastructure at Peleton using Apache Hudi"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=fqhr-4jXi6I",children:"Innovative Solution for Real-time Analytics at Scale using Apache Hudi (Shopee)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VpdimpH_nsI",children:"Scaling Complex Data Workflows using Apache Hudi (Uber)"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"notable-user-stories-and-technical-content",children:"Notable User Stories and Technical Content"}),"\n",(0,a.jsx)(n.p,{children:"Throughout 2024, several organizations shared their Hudi implementation experiences:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.notion.com/blog/building-and-scaling-notions-data-lake",children:"Notion's transition from Snowflake to Hudi"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://engineering.grab.com/enabling-near-realtime-data-analytics",children:"Grab's implementation of near-realtime data analytics"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://aws.amazon.com/blogs/big-data/use-aws-data-exchange-to-seamlessly-share-apache-hudi-datasets/",children:"AWS's data sharing capabilities with AWS Data Exchange"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.y.uno/post/how-apache-hudi-transformed-yunos-data-lake",children:"Yuno's data lake transformation"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://blogs.halodoc.io/data-lake-cost-optimisation-strategies/",children:"Halodoc's cost optimization strategies"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://medium.com/upstox-engineering/navigating-the-future-the-evolutionary-journey-of-upstoxs-data-platform-92dc10ff22ae",children:"Upstox's data platform evolution"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"looking-ahead-to-2025",children:"Looking Ahead to 2025"}),"\n",(0,a.jsx)(n.p,{children:"As we look forward to 2025, Apache Hudi's roadmap includes several exciting developments:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Enhanced core engine with modernized write paths and advanced indexing (bitmap, vector search)"}),"\n",(0,a.jsx)(n.li,{children:"Multi-modal data support with improved storage engine APIs and cross-format interoperability"}),"\n",(0,a.jsx)(n.li,{children:"Enterprise-grade features including multi-table transactions and advanced caching"}),"\n",(0,a.jsx)(n.li,{children:"Robust platform services with Data Lakehouse Management System (DLMS) components"}),"\n",(0,a.jsx)(n.li,{children:"Broader adoption of Hudi-rs across the ecosystem"}),"\n",(0,a.jsx)(n.li,{children:"Continued focus on stability and seamless migration path for the community"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"These initiatives reflect our commitment to advancing data lakehouse technology while ensuring reliability and user experience."}),"\n",(0,a.jsx)(n.h2,{id:"get-involved",children:"Get Involved"}),"\n",(0,a.jsx)(n.p,{children:"Join our thriving community:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Contribute to the project on GitHub: ",(0,a.jsx)(n.a,{href:"https://github.com/apache/hudi",children:"Hudi"})," & ",(0,a.jsx)(n.a,{href:"https://github.com/apache/hudi-rs",children:"Hudi-rs"})]}),"\n",(0,a.jsxs)(n.li,{children:["Join our ",(0,a.jsx)(n.a,{href:"https://apache-hudi.slack.com/join/shared_invite/zt-2ggm1fub8-_yt4Reu9djwqqVRFC7X49g",children:"Slack community"})]}),"\n",(0,a.jsxs)(n.li,{children:["Follow us on ",(0,a.jsx)(n.a,{href:"https://www.linkedin.com/company/apache-hudi/",children:"LinkedIn"})," and ",(0,a.jsx)(n.a,{href:"https://x.com/apachehudi",children:"X (Twitter)"})]}),"\n",(0,a.jsxs)(n.li,{children:["Subscribe to our ",(0,a.jsx)(n.a,{href:"https://www.youtube.com/@apachehudi",children:"YouTube channel"})]}),"\n",(0,a.jsxs)(n.li,{children:["Participate in our ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/community/syncs",children:"community syncs"})," and ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/community/office_hours",children:"office hours"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Subscribe to the dev mailing list by sending an empty email to ",(0,a.jsx)(n.code,{children:"dev-subscribe@hudi.apache.org"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The success of Apache Hudi in 2024 wouldn't have been possible without our dedicated community of contributors, users, and supporters. As we celebrate these achievements, we look forward to another year of innovation and growth in 2025."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},54892:(e,n,i)=>{i.d(n,{A:()=>s});var t=i(40797),a=i(74848);const s=e=>{let{title:n,isItalic:i}=e;const{siteConfig:s}=(0,t.A)(),{slackUrl:r}=s.customFields;return(0,a.jsx)("a",{href:r,style:{fontStyle:i?"italic":"normal"},target:"_blank",rel:"noopener noreferrer",children:n})}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}},83846:e=>{e.exports=JSON.parse('{"permalink":"/blog/2024/12/29/apache-hudi-2024-a-year-in-review","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2024-12-29-apache-hudi-2024-a-year-in-review.mdx","source":"@site/blog/2024-12-29-apache-hudi-2024-a-year-in-review.mdx","title":"Apache Hudi 2024: A Year In Review","description":"As we wrap up another remarkable year for Apache Hudi, I am thrilled to reflect on the tremendous achievements and milestones that have defined 2024. This year has been particularly special as we achieved several significant milestones, including the landmark release of Hudi 1.0, the publication of comprehensive books, and the introduction of new tools that expand Hudi\'s ecosystem.","date":"2024-12-29T00:00:00.000Z","tags":[{"inline":true,"label":"apache hudi","permalink":"/blog/tags/apache-hudi"},{"inline":true,"label":"community","permalink":"/blog/tags/community"}],"readingTime":5.23,"hasTruncateMarker":false,"authors":[{"name":"Shiyan Xu","key":null,"page":null}],"frontMatter":{"title":"Apache Hudi 2024: A Year In Review","excerpt":"Reflect on and celebrate the myriad of exciting developments and accomplishments that have defined the year 2024 for the Hudi community.","author":"Shiyan Xu","category":"blog","image":"/assets/images/blog/2024-12-29-a-year-in-review-2024/cover.jpg","tags":["apache hudi","community"]},"unlisted":false,"nextItem":{"title":"Announcing Apache Hudi 1.0 and the Next Generation of Data Lakehouses","permalink":"/blog/2024/12/16/announcing-hudi-1-0-0"}}')}}]);