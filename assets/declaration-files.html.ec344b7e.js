const e=JSON.parse('{"key":"v-29abac78","path":"/foundation/typescript/basics/declaration-files.html","title":"\u58F0\u660E\u6587\u4EF6","lang":"zh-CN","frontmatter":{"summary":"\u58F0\u660E\u6587\u4EF6 \u5F53\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u5F15\u7528\u5B83\u7684\u58F0\u660E\u6587\u4EF6\uFF0C\u624D\u80FD\u83B7\u5F97\u5BF9\u5E94\u7684\u4EE3\u7801\u8865\u5168\u3001\u63A5\u53E3\u63D0\u793A\u7B49\u529F\u80FD\u3002 \u65B0\u8BED\u6CD5\u7D22\u5F15 \u7531\u4E8E\u672C\u7AE0\u6D89\u53CA\u5927\u91CF\u65B0\u8BED\u6CD5\uFF0C\u6545\u5728\u672C\u7AE0\u5F00\u5934\u5217\u51FA\u65B0\u8BED\u6CD5\u7684\u7D22\u5F15\uFF0C\u65B9\u4FBF\u5927\u5BB6\u5728\u4F7F\u7528\u8FD9\u4E9B\u65B0\u8BED\u6CD5\u65F6\u80FD\u5FEB\u901F\u67E5\u627E\u5230\u5BF9\u5E94\u7684\u8BB2\u89E3\uFF1A declare var \u58F0\u660E\u5168\u5C40\u53D8\u91CF; declare function \u58F0\u660E\u5168\u5C40\u65B9\u6CD5; declare class \u58F0\u660E\u5168\u5C40\u7C7B; declare","head":[["meta",{"property":"og:url","content":"https://keyl-liucong.github.io/foundation/typescript/basics/declaration-files.html"}],["meta",{"property":"og:site_name","content":"Hello World"}],["meta",{"property":"og:title","content":"\u58F0\u660E\u6587\u4EF6"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-22T11:13:20.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-07-22T11:13:20.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u65B0\u8BED\u6CD5\u7D22\u5F15","slug":"\u65B0\u8BED\u6CD5\u7D22\u5F15","children":[]},{"level":2,"title":"\u4EC0\u4E48\u662F\u58F0\u660E\u8BED\u53E5","slug":"\u4EC0\u4E48\u662F\u58F0\u660E\u8BED\u53E5","children":[]},{"level":2,"title":"\u4EC0\u4E48\u662F\u58F0\u660E\u6587\u4EF6","slug":"\u4EC0\u4E48\u662F\u58F0\u660E\u6587\u4EF6","children":[{"level":3,"title":"\u7B2C\u4E09\u65B9\u58F0\u660E\u6587\u4EF6","slug":"\u7B2C\u4E09\u65B9\u58F0\u660E\u6587\u4EF6","children":[]}]},{"level":2,"title":"\u4E66\u5199\u58F0\u660E\u6587\u4EF6","slug":"\u4E66\u5199\u58F0\u660E\u6587\u4EF6","children":[{"level":3,"title":"\u5168\u5C40\u53D8\u91CF","slug":"\u5168\u5C40\u53D8\u91CF","children":[]},{"level":3,"title":"npm \u5305","slug":"npm-\u5305","children":[]},{"level":3,"title":"UMD \u5E93","slug":"umd-\u5E93","children":[]},{"level":3,"title":"\u76F4\u63A5\u6269\u5C55\u5168\u5C40\u53D8\u91CF","slug":"\u76F4\u63A5\u6269\u5C55\u5168\u5C40\u53D8\u91CF","children":[]},{"level":3,"title":"\u5728 npm \u5305\u6216 UMD \u5E93\u4E2D\u6269\u5C55\u5168\u5C40\u53D8\u91CF","slug":"\u5728-npm-\u5305\u6216-umd-\u5E93\u4E2D\u6269\u5C55\u5168\u5C40\u53D8\u91CF","children":[]},{"level":3,"title":"\u6A21\u5757\u63D2\u4EF6","slug":"\u6A21\u5757\u63D2\u4EF6","children":[]},{"level":3,"title":"\u58F0\u660E\u6587\u4EF6\u4E2D\u7684\u4F9D\u8D56","slug":"\u58F0\u660E\u6587\u4EF6\u4E2D\u7684\u4F9D\u8D56","children":[]},{"level":3,"title":"\u81EA\u52A8\u751F\u6210\u58F0\u660E\u6587\u4EF6","slug":"\u81EA\u52A8\u751F\u6210\u58F0\u660E\u6587\u4EF6","children":[]}]},{"level":2,"title":"\u53D1\u5E03\u58F0\u660E\u6587\u4EF6","slug":"\u53D1\u5E03\u58F0\u660E\u6587\u4EF6","children":[{"level":3,"title":"\u5C06\u58F0\u660E\u6587\u4EF6\u548C\u6E90\u7801\u653E\u5728\u4E00\u8D77","slug":"\u5C06\u58F0\u660E\u6587\u4EF6\u548C\u6E90\u7801\u653E\u5728\u4E00\u8D77","children":[]},{"level":3,"title":"\u5C06\u58F0\u660E\u6587\u4EF6\u53D1\u5E03\u5230 @types \u4E0B","slug":"\u5C06\u58F0\u660E\u6587\u4EF6\u53D1\u5E03\u5230-types-\u4E0B","children":[]}]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","children":[]}],"git":{"createdTime":1658488400000,"updatedTime":1658488400000,"contributors":[{"name":"zzx","email":"","commits":1}]},"readingTime":{"minutes":28.36,"words":8508},"filePathRelative":"foundation/typescript/basics/declaration-files.md","localizedDate":"2022\u5E747\u670822\u65E5"}');export{e as data};
