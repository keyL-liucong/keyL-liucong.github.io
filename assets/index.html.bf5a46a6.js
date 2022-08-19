const e=JSON.parse('{"key":"v-2c28cbca","path":"/advanced/docker/","title":"docker","lang":"zh-CN","frontmatter":{"title":"docker","icon":"docker","category":["docker"],"sidebar":false,"tag":["docker","\u8F6F\u4EF6"],"summary":"\u4E00\u95E8\u65B0\u6280\u672F\u7684\u51FA\u73B0\uFF0C\u662F\u4E3A\u4E86\u89E3\u51B3\u5F53\u524D\u7684\u75DB\u70B9\u3002 \u4E00\u95E8\u65B0\u6280\u672F\u7684\u51FA\u73B0\uFF0C\u5728\u89E3\u51B3\u4EE5\u524D\u95EE\u9898\u7684\u540C\u65F6\u4E5F\u4F1A\u5F15\u8FDB\u590D\u6742\u6027\u3002 Docker \u4EA7\u751F\u7684\u80CC\u666F \u63D0\u9AD8\u8D44\u6E90\u7684\u5229\u7528\u7387\uFF0C\u5B9E\u73B0\u5206\u5E03\u5F0F\u7684\u8BA1\u7B97\u3002\u4E91\u8BA1\u7B97\u7684\u6838\u5FC3\u5373\u865A\u62DF\u5316\u548C\u5206\u5E03\u5F0F\uFF0C\u5229\u7528 Docker \u6211\u4EEC\u53EF\u4EE5\u5728\u591A\u53F0\u670D\u52A1\u5668\u8F7B\u677E\u5730\u6269\u5C55\u5E94\u7528\u3002\u6211\u4EEC\u6240\u719F\u77E5\u7684\u865A\u62DF\u673A VMWare \u5373\u4E00\u79CD\u865A\u62DF\u5316\u6280\u672F\uFF0CVMWare \u5EFA\u7ACB\u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E4B\u4E0A\uFF0C\u5E76\u4E14 VMWare \u5185\u90E8\u53EF\u4EE5","head":[["meta",{"property":"og:url","content":"https://keyl-liucong.github.io/advanced/docker/"}],["meta",{"property":"og:site_name","content":"Hello World"}],["meta",{"property":"og:title","content":"docker"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-18T12:59:46.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"\u8F6F\u4EF6"}],["meta",{"property":"article:modified_time","content":"2022-08-18T12:59:46.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Docker \u4EA7\u751F\u7684\u80CC\u666F","slug":"docker-\u4EA7\u751F\u7684\u80CC\u666F","children":[]},{"level":2,"title":"1.what","slug":"_1-what","children":[{"level":3,"title":"docker \u7684\u7528\u9014","slug":"docker-\u7684\u7528\u9014","children":[]},{"level":3,"title":"docker\u4E09\u5927\u6838\u5FC3","slug":"docker\u4E09\u5927\u6838\u5FC3","children":[]},{"level":3,"title":"docker \u67B6\u6784\u56FE","slug":"docker-\u67B6\u6784\u56FE","children":[]}]},{"level":2,"title":"2.why","slug":"_2-why","children":[{"level":3,"title":"\u6CA1\u6709\u865A\u62DF\u5316\u6280\u672F\u7684\u539F\u59CB\u5E74\u4EE3","slug":"\u6CA1\u6709\u865A\u62DF\u5316\u6280\u672F\u7684\u539F\u59CB\u5E74\u4EE3","children":[]},{"level":3,"title":"\u4F7F\u7528\u865A\u62DF\u673A\u90E8\u7F72\u5E94\u7528\u7A0B\u5E8F\u7684\u5E74\u4EE3","slug":"\u4F7F\u7528\u865A\u62DF\u673A\u90E8\u7F72\u5E94\u7528\u7A0B\u5E8F\u7684\u5E74\u4EE3","children":[]},{"level":3,"title":"Linux \u5BB9\u5668","slug":"linux-\u5BB9\u5668","children":[]}]},{"level":2,"title":"3.how","slug":"_3-how","children":[{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","children":[]},{"level":3,"title":"docker \u5E38\u7528\u547D\u4EE4","slug":"docker-\u5E38\u7528\u547D\u4EE4","children":[]},{"level":3,"title":"\u591A\u9636\u6BB5\u6784\u5EFA\u90E8\u7F72vue\u524D\u7AEF\u9879\u76EE","slug":"\u591A\u9636\u6BB5\u6784\u5EFA\u90E8\u7F72vue\u524D\u7AEF\u9879\u76EE","children":[]},{"level":3,"title":"\u5236\u4F5C Dockerfile","slug":"\u5236\u4F5C-dockerfile","children":[]},{"level":3,"title":"zz CICD \u8FC7\u7A0B","slug":"zz-cicd-\u8FC7\u7A0B","children":[]}]},{"level":2,"title":"\u5BB9\u5668\u7F16\u6392(docker-compose\u3001k8s)","slug":"\u5BB9\u5668\u7F16\u6392-docker-compose\u3001k8s","children":[{"level":3,"title":"\u5BB9\u5668\u7F16\u6392\u8BDE\u751F\u7684\u80CC\u666F","slug":"\u5BB9\u5668\u7F16\u6392\u8BDE\u751F\u7684\u80CC\u666F","children":[]},{"level":3,"title":"\u5BB9\u5668\u7F16\u6392\u600E\u4E48\u5DE5\u4F5C\u7684\uFF1F","slug":"\u5BB9\u5668\u7F16\u6392\u600E\u4E48\u5DE5\u4F5C\u7684","children":[]}]},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5","children":[]}],"git":{"createdTime":1660827586000,"updatedTime":1660827586000,"contributors":[{"name":"zzx","email":"","commits":1}]},"readingTime":{"minutes":12.71,"words":3813},"filePathRelative":"advanced/docker/README.md","localizedDate":"2022\u5E748\u670818\u65E5"}');export{e as data};
