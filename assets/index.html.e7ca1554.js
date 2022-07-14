import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as d,c as l,a as n,b as t,w as e,d as a,e as r}from"./app.f0487313.js";const u={},h=a("\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u6846\u67B6\u63D0\u4F9B\u4E30\u5BCC\u7684\u5FAE\u4FE1\u539F\u751F API\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u8C03\u8D77\u5FAE\u4FE1\u63D0\u4F9B\u7684\u80FD\u529B\uFF0C\u5982\u83B7\u53D6\u7528\u6237\u4FE1\u606F\uFF0C\u672C\u5730\u5B58\u50A8\uFF0C\u652F\u4ED8\u529F\u80FD\u7B49\u3002\u8BE6\u7EC6\u4ECB\u7ECD\u8BF7\u53C2\u8003 "),k={href:"https://developers.weixin.qq.com/miniprogram/dev/api/",target:"_blank",rel:"noopener noreferrer"},m=a("API \u6587\u6863"),v=a("\u3002 "),_=r(`<p>\u901A\u5E38\uFF0C\u5728\u5C0F\u7A0B\u5E8F API \u6709\u4EE5\u4E0B\u51E0\u79CD\u7C7B\u578B:</p><h2 id="\u4E8B\u4EF6\u76D1\u542C-api" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u76D1\u542C-api" aria-hidden="true">#</a> \u4E8B\u4EF6\u76D1\u542C API</h2><p>\u6211\u4EEC\u7EA6\u5B9A\uFF0C\u4EE5 on \u5F00\u5934\u7684 API \u7528\u6765\u76D1\u542C\u67D0\u4E2A\u4E8B\u4EF6\u662F\u5426\u89E6\u53D1\uFF0C\u5982: <code>wx.onSocketOpen</code>, <code>wx.onCompassChange</code> \u7B49\u3002</p><p>\u8FD9\u7C7B API \u63A5\u53D7\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5F53\u4E8B\u4EF6\u89E6\u53D1\u65F6\u4F1A\u8C03\u7528\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u5E76\u5C06\u76F8\u5173\u6570\u636E\u4EE5\u53C2\u6570\u5F62\u5F0F\u4F20\u5165\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">onCompassChange</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>direction<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u540C\u6B65-api" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65-api" aria-hidden="true">#</a> \u540C\u6B65 API</h2><p>\u6211\u4EEC\u7EA6\u5B9A\uFF0C\u4EE5 <code>Sync</code> \u7ED3\u5C3E\u7684 API \u90FD\u662F\u540C\u6B65 API\uFF0C \u5982 <code>wx.setStorageSync</code>\uFF0C<code>wx.getSystemInfoSync</code> \u7B49\u3002\u6B64\u5916\uFF0C\u4E5F\u6709\u4E00\u4E9B\u5176\u4ED6\u7684\u540C\u6B65 API\uFF0C\u5982 <code>wx.createWorker</code>, <code>wx.getBackgroundAudioManager</code> \u7B49\uFF0C\u8BE6\u60C5\u53C2\u89C1 API \u6587\u6863\u4E2D\u7684\u8BF4\u660E\u3002</p><p>\u540C\u6B65 API \u7684\u6267\u884C\u7ED3\u679C\u53EF\u4EE5\u901A\u8FC7\u51FD\u6570\u8FD4\u56DE\u503C\u76F4\u63A5\u83B7\u53D6\uFF0C\u5982\u679C\u6267\u884C\u51FA\u9519\u4F1A\u629B\u51FA\u5F02\u5E38\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F02\u6B65-api" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65-api" aria-hidden="true">#</a> \u5F02\u6B65 API</h2><p>\u5927\u591A\u6570 API \u90FD\u662F\u5F02\u6B65 API\uFF0C\u5982 <code>wx.request</code>\uFF0C<code>wx.login</code> \u7B49\u3002\u8FD9\u7C7B API \u63A5\u53E3\u901A\u5E38\u90FD\u63A5\u53D7\u4E00\u4E2A <code>Object</code> \u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u8FD9\u4E2A\u53C2\u6570\u90FD\u652F\u6301\u6309\u9700\u6307\u5B9A\u4EE5\u4E0B\u5B57\u6BB5\u6765\u63A5\u6536\u63A5\u53E3\u8C03\u7528\u7ED3\u679C:</p><h3 id="object-\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#object-\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> Object \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>success</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr><tr><td>\u5176\u4ED6</td><td>Any</td><td>-</td><td>\u63A5\u53E3\u5B9A\u4E49\u7684\u5176\u4ED6\u53C2\u6570</td></tr></tbody></table><h3 id="\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570" aria-hidden="true">#</a> \u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570</h3><p><code>success</code>, <code>fail</code>, <code>complete</code> \u51FD\u6570\u8C03\u7528\u65F6\u4F1A\u4F20\u5165\u4E00\u4E2A <code>Object</code> \u7C7B\u578B\u53C2\u6570\uFF0C\u5305\u542B\u4EE5\u4E0B\u5B57\u6BB5:</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>errMsg</td><td>string</td><td>\u9519\u8BEF\u4FE1\u606F\uFF0C\u5982\u679C\u8C03\u7528\u6210\u529F\u8FD4\u56DE <code>\${apiName}:ok</code></td></tr><tr><td>errCode</td><td>number</td><td>\u9519\u8BEF\u7801\uFF0C\u4EC5\u90E8\u5206 API \u652F\u6301\uFF0C\u5177\u4F53\u542B\u4E49\u8BF7\u53C2\u8003\u5BF9\u5E94 API \u6587\u6863\uFF0C\u6210\u529F\u65F6\u4E3A 0\u3002</td></tr><tr><td>\u5176\u4ED6</td><td>Any</td><td>\u63A5\u53E3\u8FD4\u56DE\u7684\u5176\u4ED6\u6570\u636E</td></tr></tbody></table><p>\u5F02\u6B65 API \u7684\u6267\u884C\u7ED3\u679C\u9700\u8981\u901A\u8FC7 <code>Object</code> \u7C7B\u578B\u7684\u53C2\u6570\u4E2D\u4F20\u5165\u7684\u5BF9\u5E94\u56DE\u8C03\u51FD\u6570\u83B7\u53D6\u3002\u90E8\u5206\u5F02\u6B65 API \u4E5F\u4F1A\u6709\u8FD4\u56DE\u503C\uFF0C\u53EF\u4EE5\u7528\u6765\u5B9E\u73B0\u66F4\u4E30\u5BCC\u7684\u529F\u80FD\uFF0C\u5982 <code>wx.request</code>, <code>wx.connectSocke</code>t\` \u7B49\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5F02\u6B65\u51FD\u6570\u4F1A\u5728\u5F02\u6B65\u52A8\u4F5C\u8FDB\u884C\u5B8C\u4E4B\u540E\uFF0C\u89E6\u53D1\u5BF9\u5E94\u8BBE\u7F6E\u597D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u6240\u4EE5\u6B64\u65F6\u7684\u51FD\u6570\u6267\u884C\u5DF2\u7ECF\u8131\u79BB\u4E86\u6B63\u5E38 js \u7684\u6267\u884C\u4E0A\u4E0B\u6587\u3002</p><p>\u5982\u679C\u5BF9\u4E0A\u9762\u7684\u8BDD\u4E0D\u7406\u89E3\uFF0C\u8BF7\u52A1\u5FC5\u67E5\u9605<strong>\u4EC0\u4E48\u662F\u540C\u6B65/\u5F02\u6B65\u51FD\u6570</strong>\u3002</p></div><h2 id="\u5E38\u89C1-api" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1-api" aria-hidden="true">#</a> \u5E38\u89C1 API</h2>`,20),b=a("\u8DEF\u7531"),g=a("\u6570\u636E\u7F13\u5B58"),f=a("\u4EA4\u4E92"),x=a("\u7F51\u7EDC"),A=a("\u7CFB\u7EDF\u4FE1\u606F");function I(P,w){const c=o("ExternalLinkIcon"),p=o("Badge"),s=o("RouterLink");return d(),l("div",null,[n("p",null,[h,n("a",k,[m,t(c)]),v,t(p,{text:"\u91CD\u8981",type:"error"})]),_,n("ul",null,[n("li",null,[n("p",null,[t(s,{to:"/frame/mini-app/guide/service/api/route.html"},{default:e(()=>[b]),_:1})])]),n("li",null,[n("p",null,[t(s,{to:"/frame/mini-app/guide/service/api/storage.html"},{default:e(()=>[g]),_:1})])]),n("li",null,[n("p",null,[t(s,{to:"/frame/mini-app/guide/service/api/interact.html"},{default:e(()=>[f]),_:1})])]),n("li",null,[n("p",null,[t(s,{to:"/frame/mini-app/guide/service/api/network.html"},{default:e(()=>[x]),_:1})])]),n("li",null,[n("p",null,[t(s,{to:"/frame/mini-app/guide/service/api/system.html"},{default:e(()=>[A]),_:1})])])])])}var S=i(u,[["render",I],["__file","index.html.vue"]]);export{S as default};
