import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as l,c,a as n,b as p,e as a,d as s}from"./app.924bc22b.js";const o={},r=a(`<h1 id="\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u539F\u7406</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u54CD\u5E94\u5F0F\u6307\u7684\u662F\u7EC4\u4EF6 data \u7684\u6570\u636E\u4E00\u65E6\u53D8\u5316\uFF0C\u7ACB\u523B\u89E6\u53D1\u89C6\u56FE\u7684\u66F4\u65B0\u3002\u5B83\u662F\u5B9E\u73B0\u6570\u636E\u9A71\u52A8\u89C6\u56FE\u7684\u7B2C\u4E00\u6B65\u3002</p><h2 id="\u76D1\u542C-data-\u53D8\u5316\u7684\u6838\u5FC3-api" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C-data-\u53D8\u5316\u7684\u6838\u5FC3-api" aria-hidden="true">#</a> \u76D1\u542C data \u53D8\u5316\u7684\u6838\u5FC3 API</h2><p>Vue \u5B9E\u73B0\u54CD\u5E94\u5F0F\u7684\u4E00\u4E2A\u6838\u5FC3 API \u662F <code>Object.defineProperty</code>\u3002\u8BE5\u65B9\u6CD5\u4F1A\u76F4\u63A5\u5728\u4E00\u4E2A\u5BF9\u8C61\u4E0A\u5B9A\u4E49\u4E00\u4E2A\u65B0\u5C5E\u6027\uFF0C\u6216\u8005\u4FEE\u6539\u4E00\u4E2A\u5BF9\u8C61\u7684\u73B0\u6709\u5C5E\u6027\uFF0C\u5E76\u8FD4\u56DE\u6B64\u5BF9\u8C61\u3002</p><p>\u57FA\u672C\u7528\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;zhangsan&#39;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> name
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set&#39;</span><span class="token punctuation">)</span>
    name <span class="token operator">=</span> newVal
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">// \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// get zhangsan</span>
data<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;lisi&#39;</span>     <span class="token comment">// set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528 <code>Object.defineProperty</code> \u91CD\u5199 <code>get</code> \u548C <code>set</code>\uFF0C\u5C06\u5BF9\u8C61\u5C5E\u6027\u7684\u8D4B\u503C\u548C\u83B7\u53D6\u53D8\u6210\u51FD\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684\u53CC\u5411\u7ED1\u5B9A\u3002</p><h2 id="\u5982\u4F55\u76D1\u542C-data-\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u76D1\u542C-data-\u53D8\u5316" aria-hidden="true">#</a> \u5982\u4F55\u76D1\u542C data \u53D8\u5316</h2><p>\u5171\u5B9A\u4E49\u4E86\u4E09\u4E2A\u51FD\u6570\uFF1A</p><ul><li>updateView\uFF1A\u6A21\u62DF Vue \u66F4\u65B0\u89C6\u56FE\u7684\u5165\u53E3\u51FD\u6570\u3002</li><li>defineReactive\uFF1A\u5BF9\u6570\u636E\u8FDB\u884C\u76D1\u542C\u7684\u5177\u4F53\u5B9E\u73B0\u3002</li><li>observer\uFF1A\u8C03\u7528\u8BE5\u51FD\u6570\u540E\uFF0C\u53EF\u5BF9\u76EE\u6807\u5BF9\u8C61\u8FDB\u884C\u76D1\u542C\uFF0C\u5C06\u76EE\u6807\u5BF9\u8C61\u7F16\u7A0B\u54CD\u5E94\u5F0F\u7684\u3002</li></ul><p>\u6267\u884C\u903B\u8F91\u4E3A\uFF1A<br> \u5B9A\u4E49\u4E00\u4E2A\u5BF9\u8C61 <code>data</code> =&gt; \u8C03\u7528 <code>observer(data)</code> \u5C06\u5BF9\u8C61\u53D8\u6210\u54CD\u5E94\u5F0F\u7684 =&gt; \u4FEE\u6539\u5BF9\u8C61\u5185\u7684\u5C5E\u6027 =&gt; \u66F4\u65B0\u89C6\u56FE</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u89E6\u53D1\u66F4\u65B0\u89C6\u56FE</span>
<span class="token keyword">function</span> <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u89C6\u56FE\u66F4\u65B0&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u91CD\u65B0\u5B9A\u4E49\u5C5E\u6027\uFF0C\u76D1\u542C\u8D77\u6765</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6838\u5FC3 API</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">!==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8BBE\u7F6E\u65B0\u503C</span>
        <span class="token comment">// \u6CE8\u610F\uFF0Cvalue \u4E00\u76F4\u5728\u95ED\u5305\u4E2D\uFF0C\u6B64\u5904\u8BBE\u7F6E\u5B8C\u4E4B\u540E\uFF0C\u518D get \u65F6\u4E5F\u662F\u4F1A\u83B7\u53D6\u6700\u65B0\u7684\u503C</span>
        value <span class="token operator">=</span> newValue

        <span class="token comment">// \u89E6\u53D1\u66F4\u65B0\u89C6\u56FE</span>
        <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u76D1\u542C\u5BF9\u8C61\u5C5E\u6027</span>
<span class="token keyword">function</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u76D1\u542C\u7684\u4E0D\u662F\u5BF9\u8C61\u6216\u6570\u7EC4\u65F6\uFF0C\u76F4\u63A5\u8FD4\u56DE</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>

  <span class="token comment">// \u91CD\u65B0\u5B9A\u4E49\u5404\u4E2A\u5C5E\u6027\uFF08for in \u4E5F\u53EF\u4EE5\u904D\u5386\u6570\u7EC4\uFF09</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">defineReactive</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u4E00\u4E0B\uFF0C\u4F1A\u6253\u5370\u51FA\u4E24\u4E2A <code>&quot;\u89C6\u56FE\u66F4\u65B0&quot;</code> \u5B57\u7B26\u4E32\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u51C6\u5907\u6570\u636E</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u76D1\u542C\u6570\u636E</span>
<span class="token function">observer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment">// \u6D4B\u8BD5</span>
data<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;lisi&#39;</span>
data<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5982\u4F55\u6DF1\u5EA6\u76D1\u542C-data-\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u6DF1\u5EA6\u76D1\u542C-data-\u53D8\u5316" aria-hidden="true">#</a> \u5982\u4F55\u6DF1\u5EA6\u76D1\u542C data \u53D8\u5316</h2><p>\u5BF9\u4E8E\u6709\u5D4C\u5957\u5C5E\u6027\u7684\u6570\u636E\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u51C6\u5907\u6570\u636E</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;\u5317\u4EAC&#39;</span> <span class="token comment">// \u9700\u8981\u6DF1\u5EA6\u76D1\u542C</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u60F3\u76D1\u542C\u5230 <code>info.address</code> \u7684\u53D8\u5316\uFF0C\u5219\u9700\u8981\u6DF1\u5EA6\u76D1\u542C\uFF0C\u4FEE\u6539 defineReactive \u65B9\u6CD5\u5373\u53EF\uFF1A</p><ul><li>\u5728\u521A\u8FDB\u5165 <code>defineReactive</code> \u51FD\u6570\u7684\u65F6\u5019\uFF0C\u5148\u8C03\u7528 <code>observer</code> \u5BF9\u4F20\u8FDB\u6765\u7684\u503C\u8FDB\u884C\u5224\u65AD\uFF0C\u7531\u4E8E <code>info</code> \u662F\u4E2A\u5BF9\u8C61\uFF0C\u6240\u4EE5\u4F1A\u5BF9 <code>info</code> \u904D\u5386\u540E\u518D\u6267\u884C <code>defineReactive</code>\uFF1B\u800C\u5176\u5B83\u57FA\u672C\u7C7B\u578B\u7684\u503C\u5728 <code>observer</code> \u4E2D\u88AB\u76F4\u63A5\u8FD4\u56DE\u3002</li><li>\u5728\u8BBE\u7F6E\u65B0\u503C\u65F6\u4E5F\u8981\u5BF9\u65B0\u503C\u8FDB\u884C\u6DF1\u5EA6\u76D1\u542C\uFF0C\u539F\u56E0\u662F\u65B0\u503C\u4E5F\u53EF\u80FD\u662F\u4E2A\u5BF9\u8C61\uFF0C\u9700\u8981\u76D1\u542C\u5230\u5B83\u91CC\u9762\u7684\u5C5E\u6027\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u91CD\u65B0\u5B9A\u4E49\u5C5E\u6027\uFF0C\u76D1\u542C\u8D77\u6765
function defineReactive(target, key, value) {
  // \u6DF1\u5EA6\u76D1\u542C
  observer(value)

  // \u6838\u5FC3 API
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue !== value) {
        // \u6DF1\u5EA6\u76D1\u542C
        observer(newValue)

        // \u8BBE\u7F6E\u65B0\u503C
        // \u6CE8\u610F\uFF0Cvalue \u4E00\u76F4\u5728\u95ED\u5305\u4E2D\uFF0C\u6B64\u5904\u8BBE\u7F6E\u5B8C\u4E4B\u540E\uFF0C\u518D get \u65F6\u4E5F\u662F\u4F1A\u83B7\u53D6\u6700\u65B0\u7684\u503C
        value = newValue

        // \u89E6\u53D1\u66F4\u65B0\u89C6\u56FE
        updateView()
      }
    }
  })
}
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-defineproperty-\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#object-defineproperty-\u7F3A\u70B9" aria-hidden="true">#</a> Object.defineProperty \u7F3A\u70B9</h2><ul><li>\u6DF1\u5EA6\u76D1\u542C\u65F6\uFF0C\u9700\u8981\u9012\u5F52\u5230\u5E95\uFF0C\u4E00\u6B21\u6027\u8BA1\u7B97\u91CF\u5927</li><li>\u65E0\u6CD5\u76D1\u542C\u65B0\u589E\u5C5E\u6027/\u5220\u9664\u5C5E\u6027\uFF08\u6240\u4EE5\u5F00\u53D1\u4E2D\u9700\u8981\u4F7F\u7528 Vue.set \u548C Vue.delete \u8FD9\u4E24\u4E2A API \u6765\u589E\u5220 data \u7684\u5C5E\u6027\uFF09</li><li>\u65E0\u6CD5\u539F\u751F\u76D1\u542C\u6570\u7EC4\uFF0C\u9700\u8981\u7279\u6B8A\u5904\u7406</li></ul><h2 id="\u5982\u4F55\u76D1\u542C\u6570\u7EC4\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u76D1\u542C\u6570\u7EC4\u53D8\u5316" aria-hidden="true">#</a> \u5982\u4F55\u76D1\u542C\u6570\u7EC4\u53D8\u5316</h2>`,24),d={href:"https://segmentfault.com/a/1190000015783546",target:"_blank",rel:"noopener noreferrer"},u=s("\u7531\u4E8E\u6027\u80FD\u539F\u56E0"),v=s("\uFF0CVue \u4E0D\u662F\u901A\u8FC7 "),k=n("code",null,"Object.defineProperty",-1),b=s(" \u6765\u76D1\u542C\u6570\u7EC4\u7684\u3002"),m=a(`<p>\u5BF9\u4E8E\u6570\u7EC4\uFF0C\u662F\u901A\u8FC7\u91CD\u5199\u6570\u7EC4\u65B9\u6CD5\u6765\u5B9E\u73B0\uFF0C\u5171\u4FEE\u6539\u4E86\u4E24\u5904\uFF1A</p><ul><li>\u5BF9\u539F\u751F\u6570\u7EC4\u539F\u578B\u505A\u4E00\u4E2A\u5907\u4EFD\uFF08\u9632\u6B62\u540E\u7EED\u7684\u64CD\u4F5C\u6C61\u67D3\u539F\u751F\u6570\u7EC4\u539F\u578B\uFF09\uFF0C\u57FA\u4E8E\u8FD9\u4E2A\u5907\u4EFD\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF0C\u5E76\u6269\u5C55\uFF08\u5728\u6267\u884C\u539F\u65B9\u6CD5\u524D\u89E6\u53D1\u4E00\u6B21\u89C6\u56FE\u66F4\u65B0\uFF09\u5B83\u7684\u65B9\u6CD5\u3002</li><li>observer \u65B9\u6CD5\u4E2D\uFF0C\u589E\u52A0\u5BF9\u6570\u7EC4\u7684\u5904\u7406\u3002</li></ul><p>\u6267\u884C\u903B\u8F91\u4E3A\uFF1A<br> \u5B9A\u4E49\u4E00\u4E2A\u5BF9\u8C61 <code>data</code> =&gt; \u8C03\u7528 <code>observer(data)</code>\uFF0C\u5728\u5185\u90E8\u5224\u65AD <code>data</code> \u662F\u5BF9\u8C61\uFF0C\u5219\u904D\u5386\u8BE5\u5BF9\u8C61\u7684\u6BCF\u4E2A\u5C5E\u6027\u5E76\u4F9D\u6B21\u6267\u884C <code>defineReactive</code> =&gt; <code>defineReactive</code> \u5185\u90E8\u7684 <code>observer(value)</code> \u78B0\u5230\u6570\u7EC4 <code>nums</code>\uFF0C\u5219\u5C06\u8BE5\u6570\u7EC4\u7684\u9690\u5F0F\u539F\u578B\u8D4B\u503C\u6210\u6211\u4EEC\u91CD\u5199\u4E4B\u540E\u7684\u539F\u578B\uFF1B\u9664 <code>nums</code> \u5916\u7684\u5176\u5B83\u7C7B\u578B\u5C5E\u6027\uFF0C\u8D70\u4E4B\u524D\u7684\u903B\u8F91 =&gt; \u66F4\u65B0\u89C6\u56FE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u89E6\u53D1\u66F4\u65B0\u89C6\u56FE
function updateView() {
  console.log(&#39;\u89C6\u56FE\u66F4\u65B0&#39;)
}

// \u91CD\u65B0\u5B9A\u4E49\u6570\u7EC4\u539F\u578B
const oldArrayProperty = Array.prototype
// \u521B\u5EFA\u65B0\u5BF9\u8C61\uFF0C\u539F\u578B\u6307\u5411 oldArrayProperty \uFF0C\u518D\u6269\u5C55\u65B0\u7684\u65B9\u6CD5\u4E0D\u4F1A\u5F71\u54CD\u539F\u578B
const arrProto = Object.create(oldArrayProperty);
[&#39;push&#39;, &#39;pop&#39;, &#39;shift&#39;, &#39;unshift&#39;, &#39;splice&#39;].forEach(methodName =&gt; {
  arrProto[methodName] = function () {
    updateView() // \u89E6\u53D1\u89C6\u56FE\u66F4\u65B0
    oldArrayProperty[methodName].call(this, ...arguments)
  }
})

// \u91CD\u65B0\u5B9A\u4E49\u5C5E\u6027\uFF0C\u76D1\u542C\u8D77\u6765
function defineReactive(target, key, value) {
  // \u6DF1\u5EA6\u76D1\u542C
  observer(value)

  // Object.defineProperty \u90E8\u5206\u7684\u4EE3\u7801\u7701\u7565
  \u2026\u2026
}

// \u76D1\u542C\u5BF9\u8C61\u5C5E\u6027
function observer(target) {
  if (typeof target !== &#39;object&#39; || target === null) {
    // \u76D1\u542C\u7684\u4E0D\u662F\u5BF9\u8C61\u6216\u6570\u7EC4\u65F6\uFF0C\u76F4\u63A5\u8FD4\u56DE
    return target
  }

  if (Array.isArray(target)) {
    target.__proto__ = arrProto
  }

  // \u91CD\u65B0\u5B9A\u4E49\u5404\u4E2A\u5C5E\u6027\uFF08for in \u4E5F\u53EF\u4EE5\u904D\u5386\u6570\u7EC4\uFF09
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u4E00\u4E0B\uFF0C\u6267\u884C <code>data.nums.push(4)</code> \u65F6\u4F1A\u6253\u5370\u51FA <code>&quot;\u89C6\u56FE\u66F4\u65B0&quot;</code> \u5B57\u7B26\u4E32\u5E76\u5728\u6570\u7EC4\u672B\u5C3E\u6DFB\u52A0\u8FDB\u5143\u7D20\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u51C6\u5907\u6570\u636E</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;\u5317\u4EAC&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nums</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span> <span class="token comment">// \u9700\u8981\u76D1\u542C\u7684\u6570\u7EC4</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u76D1\u542C\u6570\u636E</span>
<span class="token function">observer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment">// \u6D4B\u8BD5</span>
data<span class="token punctuation">.</span>nums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// \u76D1\u542C\u6570\u7EC4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function h(g,f){const e=t("ExternalLinkIcon");return l(),c("div",null,[r,n("p",null,[n("a",d,[u,p(e)]),v,k,b]),m])}var _=i(o,[["render",h],["__file","reactive-data.html.vue"]]);export{_ as default};
