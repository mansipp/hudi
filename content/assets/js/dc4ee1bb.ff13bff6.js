"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[87971],{6779:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"metrics","title":"Metrics","description":"In this section, we will introduce the MetricsReporter and HoodieMetrics in Hudi. You can view the metrics-related configurations here.","source":"@site/versioned_docs/version-0.9.0/metrics.md","sourceDirName":".","slug":"/metrics","permalink":"/docs/0.9.0/metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.9.0/metrics.md","tags":[],"version":"0.9.0","frontMatter":{"title":"Metrics","keywords":["hudi","administration","operation","devops","metrics"],"summary":"This section offers an overview of metrics in Hudi","toc":true,"last_modified_at":"2020-06-20T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Docker Demo","permalink":"/docs/0.9.0/docker_demo"},"next":{"title":"Privacy Policy","permalink":"/docs/0.9.0/privacy"}}');var o=r(74848),n=r(28453);const s={title:"Metrics",keywords:["hudi","administration","operation","devops","metrics"],summary:"This section offers an overview of metrics in Hudi",toc:!0,last_modified_at:new Date("2020-06-20T19:59:57.000Z")},c=void 0,d={},a=[{value:"MetricsReporter",id:"metricsreporter",level:2},{value:"JmxMetricsReporter",id:"jmxmetricsreporter",level:3},{value:"Configurations",id:"configurations",level:4},{value:"Demo",id:"demo",level:4},{value:"MetricsGraphiteReporter",id:"metricsgraphitereporter",level:3},{value:"Configurations",id:"configurations-1",level:4},{value:"Demo",id:"demo-1",level:4},{value:"DatadogMetricsReporter",id:"datadogmetricsreporter",level:3},{value:"Configurations",id:"configurations-2",level:4},{value:"Demo",id:"demo-2",level:4},{value:"UserDefinedMetricsReporter",id:"userdefinedmetricsreporter",level:3},{value:"Configurations",id:"configurations-3",level:4},{value:"Demo",id:"demo-3",level:4},{value:"HoodieMetrics",id:"hoodiemetrics",level:2}];function l(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["In this section, we will introduce the ",(0,o.jsx)(i.code,{children:"MetricsReporter"})," and ",(0,o.jsx)(i.code,{children:"HoodieMetrics"})," in Hudi. You can view the metrics-related configurations ",(0,o.jsx)(i.a,{href:"configurations#metrics-configs",children:"here"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"metricsreporter",children:"MetricsReporter"}),"\n",(0,o.jsxs)(i.p,{children:["MetricsReporter provides APIs for reporting ",(0,o.jsx)(i.code,{children:"HoodieMetrics"})," to user-specified backends. Currently, the implementations include InMemoryMetricsReporter, JmxMetricsReporter, MetricsGraphiteReporter and DatadogMetricsReporter. Since InMemoryMetricsReporter is only used for testing, we will introduce the other three implementations."]}),"\n",(0,o.jsx)(i.h3,{id:"jmxmetricsreporter",children:"JmxMetricsReporter"}),"\n",(0,o.jsx)(i.p,{children:"JmxMetricsReporter is an implementation of JMX reporter, which used to report JMX metrics."}),"\n",(0,o.jsx)(i.h4,{id:"configurations",children:"Configurations"}),"\n",(0,o.jsxs)(i.p,{children:["The following is an example of ",(0,o.jsx)(i.code,{children:"JmxMetricsReporter"}),". More detaile configurations can be referenced ",(0,o.jsx)(i.a,{href:"configurations#jmx",children:"here"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-properties",children:"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=JMX\nhoodie.metrics.jmx.host=192.168.0.106\nhoodie.metrics.jmx.port=4001\n"})}),"\n",(0,o.jsx)(i.h4,{id:"demo",children:"Demo"}),"\n",(0,o.jsx)(i.p,{children:"As configured above, JmxMetricsReporter will started JMX server on port 4001. We can start a jconsole to connect to 192.168.0.106:4001. Below is an illustration of monitoring Hudi JMX metrics through jconsole."}),"\n",(0,o.jsx)("figure",{children:(0,o.jsx)("img",{className:"docimage",src:r(1591).A,alt:"hudi_jxm_metrics.png"})}),"\n",(0,o.jsx)(i.h3,{id:"metricsgraphitereporter",children:"MetricsGraphiteReporter"}),"\n",(0,o.jsxs)(i.p,{children:["MetricsGraphiteReporter is an implementation of Graphite reporter, which connects to a Graphite server, and send ",(0,o.jsx)(i.code,{children:"HoodieMetrics"})," to it."]}),"\n",(0,o.jsx)(i.h4,{id:"configurations-1",children:"Configurations"}),"\n",(0,o.jsxs)(i.p,{children:["The following is an example of ",(0,o.jsx)(i.code,{children:"MetricsGraphiteReporter"}),". More detaile configurations can be referenced ",(0,o.jsx)(i.a,{href:"configurations#graphite",children:"here"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-properties",children:"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=GRAPHITE\nhoodie.metrics.graphite.host=192.168.0.106\nhoodie.metrics.graphite.port=2003\nhoodie.metrics.graphite.metric.prefix=<your metrics prefix>\n"})}),"\n",(0,o.jsx)(i.h4,{id:"demo-1",children:"Demo"}),"\n",(0,o.jsx)(i.p,{children:"As configured above, assuming a Graphite server is running on host 192.168.0.106 and port 2003, a running Hudi job will connect and report metrics data to it. Below is an illustration of monitoring hudi metrics through Graphite."}),"\n",(0,o.jsx)("figure",{children:(0,o.jsx)("img",{className:"docimage",src:r(49290).A,alt:"hudi_graphite_metrics.png"})}),"\n",(0,o.jsx)(i.h3,{id:"datadogmetricsreporter",children:"DatadogMetricsReporter"}),"\n",(0,o.jsx)(i.p,{children:"DatadogMetricsReporter is an implementation of Datadog reporter.\nA reporter which publishes metric values to Datadog monitoring service via Datadog HTTP API."}),"\n",(0,o.jsx)(i.h4,{id:"configurations-2",children:"Configurations"}),"\n",(0,o.jsxs)(i.p,{children:["The following is an example of ",(0,o.jsx)(i.code,{children:"DatadogMetricsReporter"}),". More detailed configurations can be referenced ",(0,o.jsx)(i.a,{href:"configurations#datadog",children:"here"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-properties",children:"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=DATADOG\nhoodie.metrics.datadog.api.site=EU # or US\nhoodie.metrics.datadog.api.key=<your api key>\nhoodie.metrics.datadog.metric.prefix=<your metrics prefix>\n"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"hoodie.metrics.datadog.api.site"})," will set the Datadog API site, which determines whether the requests will be sent to api.datadoghq.eu (EU) or api.datadoghq.com (US). Set this according to your Datadog account settings."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"hoodie.metrics.datadog.api.key"})," will set the api key."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"hoodie.metrics.datadog.metric.prefix"})," will help segregate metrics by setting different prefixes for different jobs. Note that it will use ",(0,o.jsx)(i.code,{children:"."})," to delimit the prefix and the metric name. For example, if the prefix is set to ",(0,o.jsx)(i.code,{children:"foo"}),", then ",(0,o.jsx)(i.code,{children:"foo."})," will be prepended to the metric name."]}),"\n"]}),"\n",(0,o.jsx)(i.h4,{id:"demo-2",children:"Demo"}),"\n",(0,o.jsxs)(i.p,{children:["In this demo, we ran a ",(0,o.jsx)(i.code,{children:"HoodieDeltaStreamer"})," job with ",(0,o.jsx)(i.code,{children:"HoodieMetrics"})," turned on and other configurations set properly."]}),"\n",(0,o.jsx)("figure",{children:(0,o.jsx)("img",{className:"docimage",src:r(37988).A,alt:"hudi_datadog_metrics.png"})}),"\n",(0,o.jsx)(i.p,{children:"As shown above, we were able to collect Hudi's action-related metrics like"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"<prefix>.<table name>.commit.totalScanTime"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"<prefix>.<table name>.clean.duration"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"<prefix>.<table name>.index.lookup.duration"})}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["as well as ",(0,o.jsx)(i.code,{children:"HoodieDeltaStreamer"}),"-specific metrics"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"<prefix>.<table name>.deltastreamer.duration"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"<prefix>.<table name>.deltastreamer.hiveSyncDuration"})}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"userdefinedmetricsreporter",children:"UserDefinedMetricsReporter"}),"\n",(0,o.jsx)(i.p,{children:"Allows users to define a custom metrics reporter."}),"\n",(0,o.jsx)(i.h4,{id:"configurations-3",children:"Configurations"}),"\n",(0,o.jsxs)(i.p,{children:["The following is an example of ",(0,o.jsx)(i.code,{children:"UserDefinedMetricsReporter"}),". More detailed configurations can be referenced ",(0,o.jsx)(i.a,{href:"configurations#user-defined-reporter",children:"here"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-properties",children:"hoodie.metrics.on=true\nhoodie.metrics.reporter.class=test.TestUserDefinedMetricsReporter\n"})}),"\n",(0,o.jsx)(i.h4,{id:"demo-3",children:"Demo"}),"\n",(0,o.jsx)(i.p,{children:"In this simple demo, TestMetricsReporter will print all gauges every 10 seconds"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:'public static class TestUserDefinedMetricsReporter \n    extends AbstractUserDefinedMetricsReporter {\n  private static final Logger log = LogManager.getLogger(DummyMetricsReporter.class);\n\n  private ScheduledExecutorService exec = Executors.newScheduledThreadPool(1, r -> {\n      Thread t = Executors.defaultThreadFactory().newThread(r);\n      t.setDaemon(true);\n      return t;\n  });\n\n  public TestUserDefinedMetricsReporter(Properties props, MetricRegistry registry) {\n    super(props, registry);\n  }\n\n  @Override\n  public void start() {\n    exec.schedule(this::report, 10, TimeUnit.SECONDS);\n  }\n\n  @Override\n  public void report() {\n    this.getRegistry().getGauges().forEach((key, value) -> \n      log.info("key: " + key + " value: " + value.getValue().toString()));\n  }\n\n  @Override\n  public Closeable getReporter() {\n    return null;\n  }\n\n  @Override\n  public void stop() {\n    exec.shutdown();\n  }\n}\n'})}),"\n",(0,o.jsx)(i.h2,{id:"hoodiemetrics",children:"HoodieMetrics"}),"\n",(0,o.jsxs)(i.p,{children:["Once the Hudi writer is configured with the right table and environment for ",(0,o.jsx)(i.code,{children:"HoodieMetrics"}),", it produces the following ",(0,o.jsx)(i.code,{children:"HoodieMetrics"}),", that aid in debugging hudi tables"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Commit Duration"})," - The amount of time it took to successfully commit a batch of records"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Rollback Duration"})," - Similarly, the amount of time taken to undo partial data left over by a failed commit (rollback happens automatically after a failing write)"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"File Level metrics"})," - Shows the amount of new files added, versions, deleted (cleaned) in each commit"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Record Level Metrics"})," - Total records inserted/updated etc per commit"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Partition Level metrics"})," - number of partitions upserted (super useful to understand sudden spikes in commit duration)"]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["These ",(0,o.jsx)(i.code,{children:"HoodieMetrics"})," can then be plotted on a standard tool like grafana. Below is a sample commit duration chart."]}),"\n",(0,o.jsx)("figure",{children:(0,o.jsx)("img",{className:"docimage",src:r(46264).A,alt:"hudi_commit_duration.png"})})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},37988:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/2020-05-28-datadog-metrics-demo-fff08d34cd7ef2473f16e9b48dd66793.png"},46264:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/hudi_commit_duration-64b7b65fc946ab2d6b69ffdf6f5bb9b0.png"},49290:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/hudi_graphite_metrics-095040421628091f1e447e385189aa5d.png"},1591:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/hudi_jxm_metrics-477d99943f7bc84f9063e4ce2787cc6c.png"},28453:(e,i,r)=>{r.d(i,{R:()=>s,x:()=>c});var t=r(96540);const o={},n=t.createContext(o);function s(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);