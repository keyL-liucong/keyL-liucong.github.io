const e=JSON.parse('{"key":"v-7c0949c4","path":"/foundation/javascript/execution-context.html","title":"\u6267\u884C\u4E0A\u4E0B\u6587\u548C\u8C03\u7528\u6808","lang":"zh-CN","frontmatter":{"summary":"\u6267\u884C\u4E0A\u4E0B\u6587\u548C\u8C03\u7528\u6808 \u6267\u884C\u4E0A\u4E0B\u6587\u7684\u5206\u7C7B \u6267\u884C\u4E0A\u4E0B\u6587\u662F JavaScript \u6267\u884C\u4E00\u6BB5\u4EE3\u7801\u65F6\u7684\u8FD0\u884C\u73AF\u5883\uFF0C\u5B83\u4E00\u5171\u6709\u4E09\u79CD\uFF1A \u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\uFF1A\u4E00\u4E2A\u7A0B\u5E8F\u53EA\u6709\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\u5373 window \u5BF9\u8C61\uFF08\u6D4F\u89C8\u5668\u7684\u60C5\u51B5\u4E0B\uFF09\uFF0C\u5168\u5C40\u5BF9\u8C61\u6240\u5904\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u5C31\u662F\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u3002; \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF1A\u6BCF\u5F53\u4E00\u4E2A\u51FD\u6570\u88AB\u8C03\u7528\u65F6, \u90FD\u4F1A\u4E3A\u8BE5\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E0A\u4E0B\u6587\u3002\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u5B83\u81EA\u5DF1\u7684\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u4E0D\u8FC7\u662F\u5728\u51FD","head":[["meta",{"property":"og:url","content":"https://keyl-liucong.github.io/foundation/javascript/execution-context.html"}],["meta",{"property":"og:site_name","content":"Hello World"}],["meta",{"property":"og:title","content":"\u6267\u884C\u4E0A\u4E0B\u6587\u548C\u8C03\u7528\u6808"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-13T03:02:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-07-13T03:02:27.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u5206\u7C7B","slug":"\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u5206\u7C7B","children":[]},{"level":2,"title":"\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u4EA7\u751F","slug":"\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u4EA7\u751F","children":[]},{"level":2,"title":"JS \u4EE3\u7801\u7684\u7F16\u8BD1\u9636\u6BB5","slug":"js-\u4EE3\u7801\u7684\u7F16\u8BD1\u9636\u6BB5","children":[{"level":3,"title":"\u8BCD\u6CD5\u73AF\u5883\uFF08Lexical Environment\uFF09","slug":"\u8BCD\u6CD5\u73AF\u5883-lexical-environment","children":[]},{"level":3,"title":"\u53D8\u91CF\u73AF\u5883\uFF08Viriable Environment\uFF09","slug":"\u53D8\u91CF\u73AF\u5883-viriable-environment","children":[]}]},{"level":2,"title":"JS \u4EE3\u7801\u7684\u6267\u884C\u9636\u6BB5","slug":"js-\u4EE3\u7801\u7684\u6267\u884C\u9636\u6BB5","children":[{"level":3,"title":"\u8C03\u7528\u6808\uFF1A\u7528\u6765\u7BA1\u7406\u6267\u884C\u4E0A\u4E0B\u6587","slug":"\u8C03\u7528\u6808-\u7528\u6765\u7BA1\u7406\u6267\u884C\u4E0A\u4E0B\u6587","children":[]},{"level":3,"title":"\u8C03\u7528\u6808\u8FD0\u884C\u8FC7\u7A0B","slug":"\u8C03\u7528\u6808\u8FD0\u884C\u8FC7\u7A0B","children":[]},{"level":3,"title":"\u8C03\u7528\u6808\u5927\u5C0F","slug":"\u8C03\u7528\u6808\u5927\u5C0F","children":[]}]},{"level":2,"title":"\u4F2A\u4EE3\u7801\u6F14\u793A\u5168\u8FC7\u7A0B","slug":"\u4F2A\u4EE3\u7801\u6F14\u793A\u5168\u8FC7\u7A0B","children":[]},{"level":2,"title":"\u66FE\u7ECF\u7684 VO/AO","slug":"\u66FE\u7ECF\u7684-vo-ao","children":[{"level":3,"title":"VO \u53D8\u91CF\u5BF9\u8C61","slug":"vo-\u53D8\u91CF\u5BF9\u8C61","children":[]},{"level":3,"title":"AO \u6D3B\u52A8\u5BF9\u8C61","slug":"ao-\u6D3B\u52A8\u5BF9\u8C61","children":[]}]},{"level":2,"title":"\u5907\u6CE8","slug":"\u5907\u6CE8","children":[]}],"git":{"createdTime":1657681347000,"updatedTime":1657681347000,"contributors":[{"name":"zzx","email":"","commits":1}]},"readingTime":{"minutes":24.71,"words":7414},"filePathRelative":"foundation/javascript/execution-context.md","localizedDate":"2022\u5E747\u670813\u65E5"}');export{e as data};
