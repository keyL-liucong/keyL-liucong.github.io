import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as t,e,a}from"./app.924bc22b.js";const p={},c=e(`<h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h1><p>React \u662F\u4E00\u4E2A\u7528\u4E8E\u52A8\u6001\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684 JavaScript \u5E93\uFF08\u53EA\u5173\u6CE8\u4E8E\u89C6\u56FE\uFF09\u3002</p><p>\u8D77\u6E90\u4E8E Facebook \u7684\u5185\u90E8\u9879\u76EE\uFF0C\u7528\u6765\u67B6\u8BBE Instagram \u7684\u7F51\u7AD9\uFF0C\u5E76\u4E8E 2013 \u5E74 5 \u6708\u5F00\u6E90\u3002</p><hr><p>React \u7279\u70B9\uFF1A</p><ul><li><strong>\u58F0\u660E\u5F0F\u8BBE\u8BA1</strong>\uFF1AReact \u91C7\u7528\u58F0\u660E\u5F0F\u7F16\u7801\uFF0C\u53EF\u4EE5\u8F7B\u677E\u63CF\u8FF0\u5E94\u7528\u3002</li><li><strong>\u9AD8\u6548</strong>\uFF1AReact \u4F7F\u7528\u865A\u62DF DOM\uFF0C\u4E0D\u603B\u662F\u76F4\u63A5\u64CD\u4F5C\u9875\u9762\u771F\u5B9E DOM\uFF1B\u901A\u8FC7\u4F18\u79C0\u7684 Diffing \u7B97\u6CD5\uFF0C\u6700\u5C0F\u5316\u9875\u9762\u91CD\u7ED8\u3002</li><li><strong>\u7075\u6D3B</strong>\uFF1AReact \u53EF\u4EE5\u4E0E\u5DF2\u77E5\u7684\u5E93\u6216\u6846\u67B6\u5F88\u597D\u5730\u914D\u5408\u3002</li><li><strong>JSX</strong>\uFF1AJSX \u662F JavaScript \u8BED\u6CD5\u7684\u6269\u5C55\uFF0CReact \u5F00\u53D1\u4E0D\u4E00\u5B9A\u4F7F\u7528 JSX\uFF0C\u4F46\u4F7F\u7528\u5B83\u80FD\u5E26\u6765\u5F88\u5927\u7684\u4FBF\u5229\u3002</li><li><strong>\u7EC4\u4EF6</strong>\uFF1A\u901A\u8FC7 React \u6784\u5EFA\u7EC4\u4EF6\uFF0C\u4F7F\u5F97\u4EE3\u7801\u66F4\u52A0\u5BB9\u6613\u5F97\u5230\u590D\u7528\uFF0C\u80FD\u591F\u5F88\u597D\u7684\u5E94\u7528\u5728\u5927\u9879\u76EE\u7684\u5F00\u53D1\u4E2D\u3002</li><li><strong>\u5355\u5411\u54CD\u5E94\u7684\u6570\u636E\u6D41</strong>\uFF1AReact \u5B9E\u73B0\u4E86\u5355\u5411\u54CD\u5E94\u7684\u6570\u636E\u6D41\uFF0C\u4ECE\u800C\u51CF\u5C11\u4E86\u91CD\u590D\u4EE3\u7801\uFF0C\u8FD9\u4E5F\u662F\u5B83\u4E3A\u4EC0\u4E48\u6BD4\u4F20\u7EDF\u6570\u636E\u7ED1\u5B9A\u66F4\u7B80\u5355\u3002</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/babel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>\u58F0\u660E\u5F0F\u7F16\u7801\u4E0E\u547D\u4EE4\u5F0F\u7F16\u7801\u7684\u533A\u522B\uFF1A</p><ul><li>\u547D\u4EE4\u5F0F\u7F16\u7801\uFF1A\u6BCF\u4E00\u6B65\u90FD\u8981\u81EA\u5DF1\u4EB2\u81EA\u53BB\u5B9A\u4E49\u3001\u8C03\u7528\uFF0C\u6BCF\u4E00\u6B65\u90FD\u4F1A\u6309\u7167\u81EA\u5DF1\u7684\u547D\u4EE4\u4F9D\u6B21\u6267\u884C\u3002</li><li>\u58F0\u660E\u5F0F\u7F16\u7801\uFF1A\u5F88\u591A\u64CD\u4F5C\u4E0D\u7528\u4EB2\u5386\u4EB2\u4E3A\uFF0C\u53EA\u9700\u8981\u6839\u636E\u89C4\u5B9A\u7684\u8BED\u6CD5\u8FDB\u884C\u58F0\u660E\uFF0C\u5269\u4E0B\u7684\u5DE5\u4F5C\u7531\u6846\u67B6\u6216\u5E93\u5185\u90E8\u5B8C\u6210\u3002</li></ul><hr><p>\u5173\u4E8E React \u7684\u77E5\u8BC6\u70B9\uFF0C\u4E3B\u8981\u53C2\u8003\uFF1A</p><ul><li>\u5B98\u65B9\u6587\u6863</li><li>\u5C1A\u7845\u8C37 React \u6280\u672F\u5168\u5BB6\u6876</li></ul>`,13),l=a("div",{style:{"text-align":"right"}},[a("svg",{t:"1628346206220",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"10033",width:"64",height:"64"},[a("path",{d:"M512 511.8m-80 0a80 80 0 1 0 160 0 80 80 0 1 0-160 0Z",fill:"#61DAFB","p-id":"10034"}),a("path",{d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-0.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3z m58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1 0.8 34.5 1.3 52.2 1.3 17.7 0 35.1-0.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-0.8-34.4-1.3-52.1-1.3-17.7 0-35 0.5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7z m158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6z m345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8z m268.5 49.2c-29.9 17.3-81.4-0.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9z m44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-0.1 40.7-60.4 84.2-160 112.6z",fill:"#61DAFB","p-id":"10035"})])],-1),o=[c,l];function i(r,u){return s(),t("div",null,o)}var g=n(p,[["render",i],["__file","index.html.vue"]]);export{g as default};