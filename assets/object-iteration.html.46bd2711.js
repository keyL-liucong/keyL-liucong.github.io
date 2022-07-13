import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.97b0820c.js";const p={},o=t(`<h1 id="\u5BF9\u8C61\u904D\u5386\u7684\u51E0\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u904D\u5386\u7684\u51E0\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> \u5BF9\u8C61\u904D\u5386\u7684\u51E0\u79CD\u65B9\u5F0F</h1><h2 id="for-in" tabindex="-1"><a class="header-anchor" href="#for-in" aria-hidden="true">#</a> for...in...</h2><p>\u8981\u4F7F\u7528 <code>(const i in obj)</code> \u800C\u4E0D\u662F <code>(i in obj)</code>\uFF0C\u56E0\u4E3A\u540E\u8005\u5C06\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Object \u539F\u578B\u94FE\u4E0A\u6269\u5C55\u7684\u65B9\u6CD5\u4E5F\u4F1A\u88AB\u904D\u5386\u51FA\u6765</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">13</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token string">&#39;:&#39;</span><span class="token punctuation">,</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
<span class="token comment">// name : zhangsan</span>
<span class="token comment">// age : 13</span>
<span class="token comment">// fun : () =&gt; {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 <code>for...in...</code> \u5FAA\u73AF\u65F6\uFF0C\u8FD4\u56DE\u7684\u662F\u6240\u6709\u80FD\u591F\u901A\u8FC7\u5BF9\u8C61\u8BBF\u95EE\u7684\u3001\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\uFF0C\u65E2\u5305\u62EC\u5B58\u5728\u4E8E\u5B9E\u4F8B\u4E2D\u7684\u5C5E\u6027\uFF0C\u4E5F\u5305\u62EC\u5B58\u5728\u4E8E\u539F\u578B\u4E2D\u7684\u5B9E\u4F8B\u3002\u5982\u679C\u53EA\u9700\u8981\u83B7\u53D6\u5BF9\u8C61\u7684\u5B9E\u4F8B\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>hasOwnProperty</code> \u8FDB\u884C\u8FC7\u6EE4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4E0D\u5C5E\u4E8E\u81EA\u8EAB\u7684\u5C5E\u6027\u5C06\u88AB hasOwnProperty \u8FC7\u6EE4</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">13</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token string">&#39;:&#39;</span><span class="token punctuation">,</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// name : zhangsan</span>
<span class="token comment">// age : 13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>for...in...</code> \u7684\u5FAA\u73AF\u987A\u5E8F\uFF0C\u53C2\u8003\u300AJavaScript \u6743\u5A01\u6307\u5357\uFF08\u7B2C7\u7248\uFF09\u300B6.6.1\u3002</p><ul><li>\u5148\u5217\u51FA\u540D\u5B57\u4E3A\u975E\u8D1F\u6574\u6570\u7684\u5B57\u7B26\u4E32\u5C5E\u6027\uFF0C\u6309\u7167\u6570\u503C\u987A\u5E8F\u4ECE\u6700\u5C0F\u5230\u6700\u5927\u3002\u8FD9\u6761\u89C4\u5219\u610F\u5473\u7740\u6570\u7EC4\u548C\u7C7B\u6570\u7EC4\u5BF9\u8C61\u7684\u5C5E\u6027\u4F1A\u6309\u7167\u987A\u5E8F\u88AB\u679A\u4E3E\u3002</li><li>\u5728\u5217\u51FA\u7C7B\u6570\u7EC4\u7D22\u5F15\u7684\u6240\u6709\u5C5E\u6027\u4E4B\u540E\uFF0C\u5728\u5217\u51FA\u6240\u6709\u5269\u4E0B\u7684\u5B57\u7B26\u4E32\u540D\u5B57\uFF08\u5305\u62EC\u770B\u8D77\u6765\u50CF\u6574\u8D1F\u6570\u6216\u6D6E\u70B9\u6570\u7684\u540D\u5B57\uFF09\u7684\u5C5E\u6027\u3002\u8FD9\u4E9B\u5C5E\u6027\u6309\u7167\u5B83\u4EEC\u6DFB\u52A0\u5230\u5BF9\u8C61\u7684\u5148\u540E\u987A\u5E8F\u5217\u51FA\u3002\u5BF9\u4E8E\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C\u6309\u7167\u4ED6\u4EEC\u5728\u5B57\u9762\u91CF\u4E2D\u51FA\u73B0\u7684\u987A\u5E8F\u5217\u51FA\u3002</li><li>\u6700\u540E\uFF0C\u540D\u5B57\u4E3A\u7B26\u53F7\u5BF9\u8C61\u7684\u5C5E\u6027\u6309\u7167\u5B83\u4EEC\u6DFB\u52A0\u5230\u5BF9\u8C61\u7684\u5148\u540E\u987A\u5E8F\u5217\u51FA\u3002</li></ul><h2 id="object-keys" tabindex="-1"><a class="header-anchor" href="#object-keys" aria-hidden="true">#</a> Object.keys</h2><p>\u7528\u4E8E\u83B7\u53D6\u5BF9\u8C61\u81EA\u8EAB\u6240\u6709\u7684\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u503C\uFF0C\u4F46\u4E0D\u5305\u62EC\u539F\u578B\u4E2D\u7684\u5C5E\u6027\uFF0C\u7136\u540E\u8FD4\u56DE\u4E00\u4E2A\u7531<strong>\u5C5E\u6027\u540D</strong>\u7EC4\u6210\u7684\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;helloworld&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;, &quot;5&quot;, &quot;6&quot;, &quot;7&quot;, &quot;8&quot;, &quot;9&quot;]</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;]</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">13</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;name&quot;, &quot;age&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-values" tabindex="-1"><a class="header-anchor" href="#object-values" aria-hidden="true">#</a> Object.values</h2><p>\u7528\u4E8E\u83B7\u53D6\u5BF9\u8C61\u81EA\u8EAB\u6240\u6709\u7684\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u503C\uFF0C\u4F46\u4E0D\u5305\u62EC\u539F\u578B\u4E2D\u7684\u5C5E\u6027\uFF0C\u7136\u540E\u8FD4\u56DE\u4E00\u4E2A\u7531<strong>\u5C5E\u6027\u503C</strong>\u7EC4\u6210\u7684\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;helloworld&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;h&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot;, &quot;w&quot;, &quot;o&quot;, &quot;r&quot;, &quot;l&quot;, &quot;d&quot;]</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">13</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;zhangsan&quot;, 13]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-entries" tabindex="-1"><a class="header-anchor" href="#object-entries" aria-hidden="true">#</a> Object.entries</h2><p>\u7528\u4E8E\u83B7\u53D6\u5BF9\u8C61\u81EA\u8EAB\u6240\u6709\u7684\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u503C\uFF0C\u4F46\u4E0D\u5305\u62EC\u539F\u578B\u4E2D\u7684\u5C5E\u6027\uFF0C\u7136\u540E\u8FD4\u56DE\u4E8C\u7EF4\u6570\u7EC4\u3002\u6BCF\u4E00\u4E2A\u5B50\u6570\u7EC4\u7531\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u3001\u5C5E\u6027\u503C\u7EC4\u6210\u3002</p><p>\u662F\u4E00\u79CD\u53EF\u4EE5\u540C\u65F6\u62FF\u5230\u5C5E\u6027\u540D\u4E0E\u5C5E\u6027\u503C\u7684\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0: h</span>
<span class="token comment">// 1: e</span>
<span class="token comment">// 2: l</span>
<span class="token comment">// 3: l</span>
<span class="token comment">// 4: o</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0: a</span>
<span class="token comment">// 1: b</span>
<span class="token comment">// 2: c</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">13</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// name: zhangsan</span>
<span class="token comment">// age: 13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-getownpropertynames" tabindex="-1"><a class="header-anchor" href="#object-getownpropertynames" aria-hidden="true">#</a> Object.getOwnPropertyNames</h2><p>\u7528\u4E8E\u83B7\u53D6\u5BF9\u8C61\u81EA\u8EAB\u6240\u6709\u7684\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u503C\uFF08\u4E0D\u5305\u62EC Symbol \u503C\u4F5C\u4E3A\u540D\u79F0\u7684\u5C5E\u6027\uFF09\uFF0C\u4F46\u4E0D\u5305\u62EC\u539F\u578B\u4E2D\u7684\u5C5E\u6027\uFF0C\u7136\u540E\u8FD4\u56DE\u4E00\u4E2A\u7531<strong>\u5C5E\u6027\u540D</strong>\u7EC4\u6210\u7684\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;, &quot;length&quot;]</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;, &quot;length&quot;]</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">13</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> symbol1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;symbol1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> symbol2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;symbol2&#39;</span><span class="token punctuation">)</span>
obj<span class="token punctuation">[</span>symbol1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
obj<span class="token punctuation">[</span>symbol2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;world&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;name&quot;, &quot;age&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-getownpropertysymbols" tabindex="-1"><a class="header-anchor" href="#object-getownpropertysymbols" aria-hidden="true">#</a> Object.getOwnPropertySymbols()</h2><p>\u7528\u4E8E\u83B7\u53D6\u6307\u5B9A\u5BF9\u8C61\u7684\u6240\u6709 Symbol \u5C5E\u6027\u540D\u3002\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6210\u5458\u662F\u5F53\u524D\u5BF9\u8C61\u7684\u6240\u6709\u7528\u4F5C\u5C5E\u6027\u540D\u7684 Symbol \u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">13</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> symbol1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;symbol1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> symbol2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;symbol2&#39;</span><span class="token punctuation">)</span>
obj<span class="token punctuation">[</span>symbol1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
obj<span class="token punctuation">[</span>symbol2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;world&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [Symbol(symbol1), Symbol(symbol2)]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reflect-ownkeys" tabindex="-1"><a class="header-anchor" href="#reflect-ownkeys" aria-hidden="true">#</a> Reflect.ownKeys()</h2><p>\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u5BF9\u8C61\u81EA\u8EAB\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u4E0D\u7BA1\u662F\u5C5E\u6027\u540D\u662F Symbol \u6216\u5B57\u7B26\u4E32\uFF0C\u4E5F\u4E0D\u7BA1\u662F\u5426\u53EF\u679A\u4E3E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">13</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> symbol1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;symbol1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> symbol2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;symbol2&#39;</span><span class="token punctuation">)</span>
obj<span class="token punctuation">[</span>symbol1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
obj<span class="token punctuation">[</span>symbol2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;world&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;name&quot;, &quot;age&quot;, Symbol(symbol1), Symbol(symbol2)]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),e=[o];function c(l,u){return s(),a("div",null,e)}var k=n(p,[["render",c],["__file","object-iteration.html.vue"]]);export{k as default};
