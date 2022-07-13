import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.a5bdbb25.js";const p={},t=e(`<h1 id="\u4EFB\u610F\u7C7B\u578B\u4E0E\u672A\u77E5\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u7C7B\u578B\u4E0E\u672A\u77E5\u7C7B\u578B" aria-hidden="true">#</a> \u4EFB\u610F\u7C7B\u578B\u4E0E\u672A\u77E5\u7C7B\u578B</h1><h2 id="\u4EFB\u610F\u7C7B\u578B-any" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u7C7B\u578B-any" aria-hidden="true">#</a> \u4EFB\u610F\u7C7B\u578B any</h2><p>\u4EFB\u610F\u7C7B\u578B\u4F7F\u7528 <code>any</code> \u5173\u952E\u5B57\u6765\u5B9A\u4E49\uFF0C\u8868\u793A\u5141\u8BB8\u8D4B\u503C\u4E3A\u4EFB\u610F\u7C7B\u578B\u3002</p><h3 id="\u4EC0\u4E48\u662F\u4EFB\u610F\u503C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u4EFB\u610F\u503C\u7C7B\u578B" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u4EFB\u610F\u503C\u7C7B\u578B</h3><p>\u5982\u679C\u662F\u4E00\u4E2A\u666E\u901A\u7C7B\u578B\uFF0C\u5728\u8D4B\u503C\u8FC7\u7A0B\u4E2D\u6539\u53D8\u7C7B\u578B\u662F\u4E0D\u88AB\u5141\u8BB8\u7684\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;seven&#39;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

<span class="token comment">// error: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u5982\u679C\u662F <code>any</code> \u7C7B\u578B\uFF0C\u5219\u5141\u8BB8\u88AB\u8D4B\u503C\u4E3A\u4EFB\u610F\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;seven&#39;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4EFB\u610F\u503C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u503C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a> \u4EFB\u610F\u503C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</h3><p>\u5728\u4EFB\u610F\u503C\u4E0A\u8BBF\u95EE\u4EFB\u4F55\u5C5E\u6027\u90FD\u662F\u5141\u8BB8\u7684\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> anyThing<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anyThing<span class="token punctuation">.</span>myName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anyThing<span class="token punctuation">.</span>myName<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u5141\u8BB8\u8C03\u7528\u4EFB\u4F55\u65B9\u6CD5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> anyThing<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">;</span>
anyThing<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;Jerry&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
anyThing<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;Jerry&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
anyThing<span class="token punctuation">.</span>myName<span class="token punctuation">.</span><span class="token function">setFirstName</span><span class="token punctuation">(</span><span class="token string">&#39;Cat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u8BA4\u4E3A\uFF0C<strong>\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u4E3A\u4EFB\u610F\u503C\u4E4B\u540E\uFF0C\u5BF9\u5B83\u7684\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u7684\u5185\u5BB9\u7684\u7C7B\u578B\u90FD\u662F\u4EFB\u610F\u503C</strong>\u3002</p><h3 id="\u672A\u58F0\u660E\u7C7B\u578B\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u672A\u58F0\u660E\u7C7B\u578B\u7684\u53D8\u91CF" aria-hidden="true">#</a> \u672A\u58F0\u660E\u7C7B\u578B\u7684\u53D8\u91CF</h3><p><strong>\u53D8\u91CF\u5982\u679C\u5728\u58F0\u660E\u7684\u65F6\u5019\uFF0C\u672A\u6307\u5B9A\u5176\u7C7B\u578B\uFF0C\u90A3\u4E48\u5B83\u4F1A\u88AB\u8BC6\u522B\u4E3A\u4EFB\u610F\u503C\u7C7B\u578B</strong>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> something<span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token string">&#39;seven&#39;</span><span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

something<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B49\u4EF7\u4E8E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> something<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token string">&#39;seven&#39;</span><span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

something<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u672A\u77E5\u7C7B\u578B-unknow" tabindex="-1"><a class="header-anchor" href="#\u672A\u77E5\u7C7B\u578B-unknow" aria-hidden="true">#</a> \u672A\u77E5\u7C7B\u578B unknow</h2><p>\u524D\u9762\u8BB2\u8FC7\uFF0C<code>any</code> \u7C7B\u578B\u5177\u6709\u5F88\u5927\u7684\u7075\u6D3B\u6027\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u53D8\u91CF\u7B49\u4E8E\u4EFB\u4F55\u7C7B\u578B\u7684\u503C\uFF0C\u751A\u81F3\u80FD\u4EE5\u51FD\u6570\u7684\u5F62\u5F0F\u8C03\u7528\u5B83\uFF0C\u6216\u8005\u8C03\u7528\u5B83\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> randomValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
randomValue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
randomValue <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
randomValue <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">randomValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
randomValue<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u7F16\u8BD1\u65F6\u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F46\u5728\u8FD0\u884C\u65F6\u4F1A\u62A5\u9519\uFF1A<code>TypeError: randomValue is not a function</code>\u3002</p><p>\u76F8\u53CD\uFF0C<code>unknown</code> \u7C7B\u578B\u867D\u7136\u540C\u6837\u4E0D\u4FDD\u8BC1\u7C7B\u578B\uFF0C\u4F46\u53EF\u4EE5\u4FDD\u8BC1\u7C7B\u578B\u5B89\u5168\u3002\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\u5728\u4F7F\u7528 <code>unknown</code> \u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u9700\u8981\u505A\u4E00\u5B9A\u7A0B\u5EA6\u5224\u65AD\u548C\u7C7B\u578B\u8F6C\u6362\uFF0C\u5F53\u786E\u5B9A\u53D8\u91CF\u7C7B\u578B\u540E\uFF0C\u624D\u80FD\u6B63\u5E38\u4F7F\u7528\u3002</p><p>\u5C06\u4E0A\u8FF0\u4EE3\u7801\u7684 <code>any</code> \u4FEE\u6539\u4E3A <code>known</code> \u540E\uFF0C\u7F16\u8F91\u5668\u76F4\u63A5\u7ED9\u51FA\u4E86\u9519\u8BEF\u53CD\u9988\uFF0C\u6B64\u65F6\u7F16\u8BD1\u4E5F\u662F\u4E0D\u901A\u8FC7\u7684\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> randomValue<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
randomValue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
randomValue <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
randomValue <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">randomValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
randomValue<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// error: This expression is not callable.</span>
<span class="token comment">//   Type &#39;{}&#39; has no call signatures.ts(2349)</span>

<span class="token comment">// error: Property &#39;toUpperCase&#39; does not exist on type &#39;unknown&#39;.ts(2339)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\u5E94\u8BE5\u4FEE\u6539\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> randomValue<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
randomValue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
randomValue <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
randomValue <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> randomValue <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">randomValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> randomValue <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  randomValue<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4F7F\u7528 <code>any</code> \u9002\u5408\u4EE3\u7801\u7684\u5FEB\u901F\u6210\u578B\uFF0C\u4F46\u4F1A\u9057\u7559\u4E0B\u5B89\u5168\u9690\u60A3\uFF1B\u4F7F\u7528 <code>unknown</code> \u53EF\u4EE5\u4FDD\u8BC1\u7C7B\u578B\u7684\u5B89\u5168\u3002\u5728\u5B9E\u9645\u4F7F\u7528\u4E2D\u53EF\u4EE5\u6839\u636E\u5177\u4F53\u60C5\u51B5\u8FDB\u884C\u9009\u62E9\u3002</p><p>\uFF08\u5B8C\uFF09</p>`,31),o=[t];function c(i,l){return s(),a("div",null,o)}var d=n(p,[["render",c],["__file","any-and-unknow.html.vue"]]);export{d as default};