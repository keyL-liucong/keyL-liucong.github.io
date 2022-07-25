import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as p,c,a as n,b as o,e as t,d as i}from"./app.545d3eb0.js";const l={},u=t(`<h1 id="\u8C03\u7528\u51FD\u6570\u7684\u56DB\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u51FD\u6570\u7684\u56DB\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> \u8C03\u7528\u51FD\u6570\u7684\u56DB\u79CD\u65B9\u5F0F</h1><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u51FD\u6570\u5B9A\u4E49\u4ECE <code>function</code> \u5173\u952E\u5B57\u5F00\u59CB\uFF0C\u6784\u6210\u51FD\u6570\u4E3B\u4F53\u7684 JavaScript \u4EE3\u7801\u5728\u5B9A\u4E49\u4E4B\u65F6\u5E76\u4E0D\u4F1A\u6267\u884C\uFF0C\u53EA\u6709\u8C03\u7528\u8BE5\u51FD\u6570\u65F6\uFF0C\u5B83\u4EEC\u624D\u4F1A\u6267\u884C\u3002</p><blockquote><p>\u5173\u4E8E\u53D8\u91CF\u63D0\u5347\uFF1Avar \u53EA\u6709\u53D8\u91CF\u58F0\u660E\u63D0\u524D\uFF0C\u53D8\u91CF\u7684\u521D\u59CB\u5316\u4EE3\u7801\u4ECD\u7136\u5728\u539F\u6765\u7684\u4F4D\u7F6E\uFF1B\u7136\u800C function \u5219\u4F1A\u4F7F\u51FD\u6570\u540D\u79F0\u548C\u51FD\u6570\u4F53\u5747\u63D0\u524D\u3002</p></blockquote><p>\u51FD\u6570\u8C03\u7528\u65B9\u5F0F\u5171\u6709\u56DB\u79CD\uFF1A</p><ul><li>\u4F5C\u4E3A\u51FD\u6570\u8C03\u7528</li><li>\u4F5C\u4E3A\u65B9\u6CD5\u8C03\u7528</li><li>\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u8C03\u7528\uFF08<code>new</code> \u8C03\u7528\uFF09</li><li>\u4E0A\u4E0B\u6587\u8C03\u7528\uFF08<code>call</code>\u3001<code>apply</code>\u3001<code>bind</code>\uFF09</li></ul><p>\u5728 ECMAScript 2015\uFF08ES6\uFF09\u4E4B\u524D\uFF0C\u51FD\u6570\u5185\u90E8\u7684 <code>this</code> \u6307\u5411\u662F\u7531\u8BE5\u51FD\u6570\u7684\u8C03\u7528\u65B9\u5F0F\u51B3\u5B9A\u7684\u3002</p><h2 id="\u4F5C\u4E3A\u51FD\u6570\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A\u51FD\u6570\u8C03\u7528" aria-hidden="true">#</a> \u4F5C\u4E3A\u51FD\u6570\u8C03\u7528</h2><p>\u5BF9\u4E8E\u666E\u901A\u7684\u51FD\u6570\u8C03\u7528\uFF0C\u5982\u679C\u8BE5\u51FD\u6570\u6CA1\u6709\u6307\u5B9A\u8FD4\u56DE\u503C\uFF0C\u8FD4\u56DE\u503C\u5C31\u662F <code>undefined</code>\uFF1B\u5982\u679C\u8BE5\u51FD\u6570\u6307\u5B9A\u4E86\u8FD4\u56DE\u503C\uFF08\u6709 <code>return</code>\uFF09\uFF0C\u8FD4\u56DE\u503C\u5C31\u662F <code>return</code> \u4E4B\u540E\u7684\u8868\u8FBE\u5F0F\u7684\u503C\uFF1B\u5982\u679C <code>return</code> \u8BED\u53E5\u6CA1\u6709\u503C\uFF0C\u5219\u8FD4\u56DE <code>undefined</code>\u3002</p><p>\u5982\u679C\u51FD\u6570\u662F\u58F0\u660E\u5728 window \u5BF9\u8C61\u4E2D\u5168\u5C40\u51FD\u6570\uFF0C\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\u7684\u8C03\u7528\u4E0A\u4E0B\u6587\uFF08<code>this</code> \u7684\u503C\uFF09\u662F\u5168\u5C40\u5BF9\u8C61\uFF0C\u4E25\u683C\u6A21\u5F0F <code>this</code> \u4E3A <code>undefined</code>\u3002</p><p>\u57FA\u672C\u6A21\u5F0F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE window \u5BF9\u8C61</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F5C\u4E3A\u65B9\u6CD5\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A\u65B9\u6CD5\u8C03\u7528" aria-hidden="true">#</a> \u4F5C\u4E3A\u65B9\u6CD5\u8C03\u7528</h2><p>\u65B9\u6CD5\u6307\u8BE5 JavaScript \u51FD\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u51FD\u6570\u672C\u8EAB\u5C31\u662F\u4E00\u4E2A\u5C5E\u6027\u8BBF\u95EE\u8868\u8FBE\u5F0F\uFF0C\u8FD9\u610F\u5473\u7740\u8BE5\u51FD\u6570\u88AB\u5F53\u505A\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u666E\u901A\u51FD\u6570\u6765\u8C03\u7528\u3002\u5176\u8FD4\u56DE\u503C\u7684\u5904\u7406\u65B9\u5F0F\uFF0C\u548C\u666E\u901A\u51FD\u6570\u8C03\u7528\u5B8C\u5168\u4E00\u81F4\u3002</p><p>\u8C03\u7528\u4E0A\u4E0B\u6587\u4E3A\u5F53\u524D\u5BF9\u8C61\uFF0C\u5373 <code>this</code> \u6307\u5411\u5F53\u524D\u5BF9\u8C61\u3002</p><p>\u57FA\u672C\u6A21\u5F0F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> calculator <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value2</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this \u6307\u4EE3\u5F53\u524D\u5BF9\u8C61</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value1 <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

calculator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8C03\u7528 add \u65B9\u6CD5\u7ED3\u7B97\u7ED3\u679C</span>
calculator<span class="token punctuation">.</span>result<span class="token punctuation">;</span> <span class="token comment">// =&gt; 2</span>

<span class="token comment">// \u65B9\u62EC\u53F7\uFF08\u5C5E\u6027\u8BBF\u95EE\u8868\u8FBE\u5F0F\uFF09\u8FDB\u884C\u5C5E\u6027\u8BBF\u95EE\u64CD\u4F5C</span>
calculator<span class="token punctuation">[</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u548C\u53D8\u91CF\u4E0D\u540C\uFF0C\u5173\u952E\u5B57 <code>this</code> \u6CA1\u6709\u4F5C\u7528\u57DF\u7684\u9650\u5236\uFF0C\u5D4C\u5957\u7684\u51FD\u6570\u4E0D\u4F1A\u4ECE\u8C03\u7528\u5B83\u7684\u51FD\u6570\u4E2D\u7EE7\u627F <code>this</code>\u3002\u5982\u679C\u5D4C\u5957\u51FD\u6570\u4F5C\u4E3A\u65B9\u6CD5\u8C03\u7528\uFF0C\u5176 <code>this</code> \u7684\u503C\u6307\u5411\u8C03\u7528\u5B83\u7684\u5BF9\u8C61\u3002\u5982\u679C\u5D4C\u5957\u51FD\u6570\u4F5C\u4E3A\u51FD\u6570\u8C03\u7528\uFF0C\u5176 <code>this</code> \u503C\u4E0D\u662F\u5168\u5C40\u5BF9\u8C61\uFF08\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF09\u5C31\u662F <code>undefined</code>\uFF08\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF09\u3002</p><p>\u56E0\u6B64\u82E5\u60F3\u8BBF\u95EE\u5916\u90E8\u51FD\u6570\u7684 <code>this</code> \u503C\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u5C06 <code>this</code> \u4FDD\u5B58\u5728\u53D8\u91CF\u4E2D\uFF08\u53D8\u91CF\u5177\u6709\u4F5C\u7528\u57DF\uFF09\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">m</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>            <span class="token comment">// \u5C06this \u7684\u503C\u8FDB\u884C\u4FDD\u5B58</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// true</span>
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                        <span class="token comment">// \u8C03\u7528\u5D4C\u5957\u51FD\u6570f()</span>
        
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false\uFF1Athis \u7684\u503C\u4E3A\u5168\u5C40\u5BF9\u8C61\u6216 undefined</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>self <span class="token operator">===</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true\uFF1Aself \u6307\u5411\u5916\u90E8\u51FD\u6570 this \u7684\u503C</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u8C03\u7528" aria-hidden="true">#</a> \u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u8C03\u7528</h2><p>\u5982\u679C\u51FD\u6570\u6216\u8005\u65B9\u6CD5\u8C03\u7528\u4E4B\u524D\u5E26\u6709\u5173\u952E\u5B57 <code>new</code>\uFF0C\u5B83\u5C31\u6784\u6210\u6784\u9020\u51FD\u6570\u8C03\u7528\u3002</p><p>\u57FA\u672C\u6A21\u5F0F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6784\u9020\u51FD\u6570\u8C03\u7528\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7A7A\u5BF9\u8C61\uFF0C\u5E76\u521D\u59CB\u5316\u8FD9\u4E2A\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\uFF0C\u5C06\u8FD9\u4E2A\u5BF9\u8C61\u7528\u4F5C\u5176\u8C03\u7528\u4E0A\u4E0B\u6587\u3002\u56E0\u6B64\u6784\u9020\u51FD\u6570\u4E2D <code>this</code> \u5173\u952E\u5B57\u6307\u5411\u8FD9\u4E2A\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\u3002</p><p>\u5982\u4E0B\u793A\u4F8B\u4EE3\u7801\uFF0C\u5C3D\u7BA1\u6784\u9020\u51FD\u6570\u770B\u8D77\u6765\u50CF\u4E00\u4E2A\u65B9\u6CD5\u8C03\u7528\uFF0C\u4F46\u5B83\u4F9D\u7136\u4F1A\u4F7F\u7528 <code>new</code> \u51FA\u6765\u7684\u65B0\u5BF9\u8C61\u4F5C\u4E3A\u8C03\u7528\u4E0A\u4E0B\u6587\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u8868\u8FBE\u5F0F <code>new o.m()</code> \u4E2D\uFF0C\u8C03\u7528\u4E0A\u4E0B\u6587\u5E76\u4E0D\u662F <code>o</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">m</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">o<span class="token punctuation">.</span>m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6784\u9020\u51FD\u6570\u901A\u5E38\u4E0D\u4F7F\u7528 <code>return</code> \u5173\u952E\u5B57\uFF0C\u5B83\u4EEC\u901A\u5E38\u521D\u59CB\u5316\u65B0\u5BF9\u8C61\uFF0C\u5F53\u6784\u9020\u51FD\u6570\u7684\u51FD\u6570\u4F53\u6267\u884C\u5B8C\u6BD5\u65F6\uFF0C\u5B83\u4F1A\u663E\u5F0F\u8FD4\u56DE\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6784\u9020\u51FD\u6570\u8C03\u7528\u8868\u8FBE\u5F0F\u7684\u8BA1\u7B97\u7ED3\u679C\u5C31\u662F\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u7684\u503C\u3002\u7136\u800C\u5982\u679C\u6784\u9020\u51FD\u6570\u663E\u5F0F\u5730\u4F7F\u7528 <code>return</code> \u8BED\u53E5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90A3\u4E48\u8C03\u7528\u8868\u8FBE\u5F0F\u7684\u503C\u5C31\u662F\u8FD9\u4E2A\u5BF9\u8C61\u3002\u5982\u679C\u6784\u9020\u51FD\u6570\u4F7F\u7528 <code>return</code> \u8BED\u53E5\u4F46\u662F\u6CA1\u6709\u6307\u5B9A\u8FD4\u56DE\u503C\uFF0C\u6216\u8005\u8FD4\u56DE\u4E00\u4E2A\u539F\u59CB\u503C\uFF0C\u90A3\u4E48\u8FD9\u65F6\u5C06\u5FFD\u7565\u8FD4\u56DE\u503C\uFF0C\u540C\u65F6\u4F7F\u7528\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u4F5C\u4E3A\u8FD4\u56DE\u7ED3\u679C\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u7279\u522B\u63D0\u9192\u4E00\u4E0B\uFF0C<strong><code>new</code> \u8C03\u7528\u65F6\u7684\u8FD4\u56DE\u503C\uFF0C\u5982\u679C\u6CA1\u6709\u663E\u5F0F\u8FD4\u56DE\u5BF9\u8C61\u6216\u8005\u51FD\u6570</strong>\uFF08\u5305\u542B <code>Functoin</code>\uFF0C<code>Array</code>\uFF0C<code>Date</code>\uFF0C<code>RegExg</code>\uFF0C<code>Error</code>\uFF09\uFF0C<strong>\u624D\u662F\u8FD4\u56DE\u751F\u6210\u7684\u65B0\u5BF9\u8C61</strong>\u3002 \u867D\u7136\u5B9E\u9645\u4F7F\u7528\u65F6\u4E0D\u4F1A\u663E\u793A\u8FD4\u56DE\uFF0C\u4F46\u9762\u8BD5\u5B98\u53EF\u80FD\u4F1A\u95EE\u5230\u3002</p></div><h2 id="\u4E0A\u4E0B\u6587\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4E0B\u6587\u8C03\u7528" aria-hidden="true">#</a> \u4E0A\u4E0B\u6587\u8C03\u7528</h2><p>\u4E0A\u4E0B\u6587\u8C03\u7528\u65B9\u5F0F\u6709\u4E09\u79CD\uFF0C<code>call</code>\u3001<code>apply</code>\u3001<code>bind</code>\uFF0C\u8FD9\u662F\u4E00\u79CD\u5F88\u5F3A\u5927\u7684\u8C03\u7528\u65B9\u5F0F\u3002</p><h3 id="call-\u548C-apply" tabindex="-1"><a class="header-anchor" href="#call-\u548C-apply" aria-hidden="true">#</a> call \u548C apply</h3><p>JavaScript \u4E2D\u7684\u51FD\u6570\u4E5F\u662F\u5BF9\u8C61\uFF0C\u51FD\u6570\u5BF9\u8C61\u4E5F\u53EF\u4EE5\u5305\u542B\u65B9\u6CD5\u3002\u5176\u4E2D <code>call()</code> \u548C <code>apply()</code> \u5C31\u662F\u9884\u5B9A\u4E49\u7684\u51FD\u6570\u65B9\u6CD5\u3002</p><p>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u53EF\u7528\u4E8E\u95F4\u63A5\u5730\u8C03\u7528\u51FD\u6570\uFF0C\u5B83\u4EEC\u90FD\u5141\u8BB8\u663E\u5F0F\u6307\u5B9A\u8C03\u7528\u6240\u9700\u7684 <code>this</code> \u503C\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4EFB\u4F55\u51FD\u6570\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u4EFB\u4F55\u5BF9\u8C61\u7684\u65B9\u6CD5\u6765\u8C03\u7528\uFF0C\u4F7F\u5F97\u5173\u952E\u5B57 <code>this</code> \u6307\u5411\u8BE5\u5BF9\u8C61\uFF0C\u54EA\u6015\u8FD9\u4E2A\u51FD\u6570\u4E0D\u662F\u8BE5\u5BF9\u8C61\u7684\u65B9\u6CD5\u3002</p><p>\u4E24\u4E2A\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u8981\u8C03\u7528\u51FD\u6570\u7684\u6BCD\u5BF9\u8C61\uFF0C\u5B83\u662F\u8C03\u7528\u4E0A\u4E0B\u6587\u3002</p><p>\u57FA\u672C\u6A21\u5F0F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// call()</span>
<span class="token comment">// obj: \u8FD9\u4E2A\u5BF9\u8C61\u5C06\u4EE3\u66FF func \u91CC this \u5BF9\u8C61</span>
<span class="token comment">// param1 ~ paramN: \u8FD9\u662F\u4E00\u4E2A\u53C2\u6570\u5217\u8868</span>
<span class="token function">func</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;param1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;param2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// apply() </span>
<span class="token comment">// \u8BE5\u65B9\u6CD5\u80FD\u63A5\u6536\u4E24\u4E2A\u53C2\u6570</span>
<span class="token comment">// obj: \u8FD9\u4E2A\u5BF9\u8C61\u5C06\u4EE3\u66FF func \u91CC this \u5BF9\u8C61</span>
<span class="token comment">// args: \u8FD9\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5B83\u5C06\u4F5C\u4E3A\u53C2\u6570\u4F20\u7ED9 func\uFF08args --&gt; arguments\uFF09</span>
<span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;param1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;param2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A</p><ul><li><code>call</code> \u548C <code>apply</code> \u533A\u522B\u5728\u4E8E\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1A<code>apply</code> \u4F20\u5165\u7684\u662F\u4E00\u4E2A\u53C2\u6570\u6570\u7EC4\uFF0C\u4E5F\u5C31\u662F\u5C06\u591A\u4E2A\u53C2\u6570\u7EC4\u5408\u6210\u4E3A\u4E00\u4E2A\u6570\u7EC4\u4F20\u5165\uFF0C\u800C <code>call</code> \u4ECE\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5F00\u59CB\u90FD\u662F\u53C2\u6570\u3002</li><li>\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u5728\u8C03\u7528\u51FD\u6570\u65F6\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F1A\u6210\u4E3A <code>this</code> \u7684\u503C\uFF0C\u5373\u4F7F\u8BE5\u53C2\u6570\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002</li><li>\u5728\u975E\u4E25\u683C\u6A21\u4E0B\uFF0C\u5982\u679C\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684\u503C\u662F <code>null</code> \u6216 <code>undefined</code>\uFF0C\u5B83\u5C06\u4F7F\u7528\u5168\u5C40\u5BF9\u8C61\u66FF\u4EE3\u3002</li></ul><h3 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h3><p><code>bind</code> \u65B9\u5F0F\u4E00\u822C\u4EBA\u7528\u7684\u6BD4\u8F83\u5C11\uFF0C\u4F46\u6709\u7684\u65F6\u5019\u5177\u6709\u4E00\u4E9B\u4E3E\u8DB3\u8F7B\u91CD\u7684\u4F5C\u7528\u3002</p><p>\u4E0D\u540C\u7684\u662F\uFF0C<code>call</code>\u3001<code>apply</code> \u662F\u7ACB\u523B\u6267\u884C\u4E86\u8FD9\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E14\u6267\u884C\u8FC7\u7A0B\u4E2D\u7ED1\u5B9A\u4E86 <code>this</code> \u7684\u503C\uFF1B<code>bind</code> \u5E76\u6CA1\u6709\u7ACB\u523B\u6267\u884C\u8FD9\u4E2A\u51FD\u6570\uFF0C\u800C\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u65B0\u51FD\u6570\u7ED1\u5B9A\u4E86 <code>this</code> \u7684\u503C\uFF0C\u5982\u679C\u8981\u6267\u884C\u8FD8\u5F97\u5728\u540E\u9762\u52A0\u4E2A <code>()</code>\u3002</p><p>\u57FA\u672C\u6A21\u5F0F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bind() </span>
<span class="token comment">// \u8BE5\u65B9\u6CD5\u80FD\u63A5\u6536\u4E24\u4E2A\u53C2\u6570</span>
<span class="token comment">// obj: \u8FD9\u4E2A\u5BF9\u8C61\u5C06\u4EE3\u66FF func \u91CC this \u5BF9\u8C61</span>
<span class="token comment">// param1 ~ paramN: \u8FD9\u662F\u4E00\u4E2A\u53C2\u6570\u5217\u8868</span>
<span class="token function">func</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;param1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;param2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>bind \u51FD\u6570\u5728\u5BF9\u8C61\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u74DC&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">drink</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6A59\u6C41&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span><span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// &quot;\u6A59\u6C41&quot;</span>
<span class="token comment">// &quot;\u897F\u74DC&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>bind \u51FD\u6570\u5728\u5B9A\u65F6\u5668\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u74DC&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">drink</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// &quot;\u897F\u74DC&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="call\u3001apply\u3001bind-\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#call\u3001apply\u3001bind-\u5C0F\u7ED3" aria-hidden="true">#</a> call\u3001apply\u3001bind \u5C0F\u7ED3</h3><p>\u901A\u8FC7 <code>call</code>\u3001<code>apply</code>\u3001<code>bind</code> \u65B9\u6CD5\u628A\u5BF9\u8C61\u7ED1\u5B9A\u5230 <code>this</code> \u4E0A\uFF0C\u53EB\u505A\u663E\u5F0F\u7ED1\u5B9A\u3002\u5BF9\u4E8E\u88AB\u8C03\u7528\u7684\u51FD\u6570\u6765\u8BF4\uFF0C\u53EB\u505A\u95F4\u63A5\u8C03\u7528\u3002</p><ul><li><code>call</code>\u3001<code>apply</code>\u3001<code>bind</code> \u4E09\u8005\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u90FD\u662F <code>this</code> \u8981\u6307\u5411\u7684\u5BF9\u8C61\u3002</li><li><code>bind</code> \u53EA\u662F\u8FD4\u56DE\u51FD\u6570\uFF0C\u8FD8\u672A\u8C03\u7528\uFF0C\u6240\u4EE5\u5982\u679C\u8981\u6267\u884C\u8FD8\u5F97\u5728\u540E\u9762\u52A0\u4E2A <code>()</code>\uFF1B<code>call</code>\u3001<code>apply</code> \u662F\u7ACB\u5373\u6267\u884C\u51FD\u6570\u3002</li><li>\u4E09\u8005\u540E\u9762\u90FD\u53EF\u4EE5\u5E26\u53C2\u6570 <ul><li><code>call</code> \u540E\u9762\u7684\u53C2\u6570\u7528\u9017\u53F7\u9694\u5F00\uFF1A<code>func.call(obj, value1, value2);</code></li><li><code>apply</code> \u540E\u9762\u7684\u53C2\u6570\u4EE5\u6570\u7EC4\u7684\u5F62\u5F0F\u4F20\u5165\uFF1A<code>func.apply(obj, [value1, value2]);</code></li><li><code>bind</code> \u53EF\u4EE5\u5728\u6307\u5B9A\u5BF9\u8C61\u7684\u65F6\u5019\u4F20\u53C2\uFF08\u540C <code>call</code>\uFF09\uFF0C\u4EE5\u9017\u53F7\u9694\u5F00\uFF1B\u4E5F\u53EF\u4EE5\u5728\u6267\u884C\u7684\u65F6\u5019\u4F20\u53C2\uFF0C\u5199\u5230\u540E\u9762\u7684\u62EC\u53F7\u4E2D\uFF1A<code>func.bind(obj,value1,value2)();</code> \u6216 <code>func.bind(obj)(value1,value2);</code></li></ul></li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,54),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions",title:"\u51FD\u6570",target:"_blank",rel:"noopener noreferrer"},r=i("MDN - \u51FD\u6570");function k(v,m){const s=e("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[n("a",d,[r,o(s)])])])}var f=a(l,[["render",k],["__file","function-invocation.html.vue"]]);export{f as default};