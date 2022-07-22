import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as l,c,a as n,b as e,d as s,e as o}from"./app.3e6f6869.js";const i={},r=n("h1",{id:"\u539F\u59CB\u6570\u636E\u7C7B\u578B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u539F\u59CB\u6570\u636E\u7C7B\u578B","aria-hidden":"true"},"#"),s(" \u539F\u59CB\u6570\u636E\u7C7B\u578B")],-1),d=s("JavaScript \u7684\u7C7B\u578B\u5206\u4E3A\u4E24\u79CD\uFF1A\u539F\u59CB\u6570\u636E\u7C7B\u578B\uFF08"),u={href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive",target:"_blank",rel:"noopener noreferrer"},k=s("Primitive data types"),m=s("\uFF09\u548C\u5BF9\u8C61\u7C7B\u578B\uFF08Object types\uFF09\u3002"),v=s("\u539F\u59CB\u6570\u636E\u7C7B\u578B\u5305\u62EC\uFF1A\u5E03\u5C14\u503C\u3001\u6570\u503C\u3001\u5B57\u7B26\u4E32\u3001"),b=n("code",null,"null",-1),h=s("\u3001"),_=n("code",null,"undefined",-1),y=s(" \u4EE5\u53CA ES6 \u4E2D\u7684\u65B0\u7C7B\u578B "),g={href:"http://es6.ruanyifeng.com/#docs/symbol",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"Symbol",-1),w=s(" \u548C ES10 \u4E2D\u7684\u65B0\u7C7B\u578B "),B={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"BigInt",-1),x=s("\u3002"),A=o(`<p>\u672C\u8282\u4E3B\u8981\u4ECB\u7ECD<strong>\u524D\u4E94\u79CD</strong>\u539F\u59CB\u6570\u636E\u7C7B\u578B\u5728 TypeScript \u4E2D\u7684\u5E94\u7528\u3002</p><h2 id="\u5E03\u5C14\u503C" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C14\u503C" aria-hidden="true">#</a> \u5E03\u5C14\u503C</h2><p>\u5E03\u5C14\u503C\u662F\u6700\u57FA\u7840\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5728 TypeScript \u4E2D\uFF0C\u4F7F\u7528 <code>boolean</code> \u5B9A\u4E49\u5E03\u5C14\u503C\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// \u7F16\u8BD1\u901A\u8FC7</span>
<span class="token comment">// \u540E\u9762\u7EA6\u5B9A\uFF0C\u672A\u5F3A\u8C03\u7F16\u8BD1\u9519\u8BEF\u7684\u4EE3\u7801\u7247\u6BB5\uFF0C\u9ED8\u8BA4\u4E3A\u7F16\u8BD1\u901A\u8FC7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u4F7F\u7528\u6784\u9020\u51FD\u6570 <code>Boolean</code> \u521B\u9020\u7684\u5BF9\u8C61<strong>\u4E0D\u662F</strong>\u5E03\u5C14\u503C\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> createdByNewBoolean<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Type &#39;Boolean&#39; is not assignable to type &#39;boolean&#39;.</span>
<span class="token comment">//   &#39;boolean&#39; is a primitive, but &#39;Boolean&#39; is a wrapper object. Prefer using &#39;boolean&#39; when possible.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E8B\u5B9E\u4E0A <code>new Boolean()</code> \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A <code>Boolean</code> \u5BF9\u8C61\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> createdByNewBoolean<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76F4\u63A5\u8C03\u7528 <code>Boolean</code> \u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A <code>boolean</code> \u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> createdByBoolean<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728 TypeScript \u4E2D\uFF0C<code>boolean</code> \u662F JavaScript \u4E2D\u7684\u57FA\u672C\u7C7B\u578B\uFF0C\u800C <code>Boolean</code> \u662F JavaScript \u4E2D\u7684\u6784\u9020\u51FD\u6570\u3002\u5176\u4ED6\u57FA\u672C\u7C7B\u578B\uFF08\u9664\u4E86 <code>null</code> \u548C <code>undefined</code>\uFF09\u4E00\u6837\uFF0C\u4E0D\u518D\u8D58\u8FF0\u3002</p><h2 id="\u6570\u503C" tabindex="-1"><a class="header-anchor" href="#\u6570\u503C" aria-hidden="true">#</a> \u6570\u503C</h2><p>\u4F7F\u7528 <code>number</code> \u5B9A\u4E49\u6570\u503C\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> decLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hexLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>
<span class="token comment">// ES6 \u4E2D\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u6CD5</span>
<span class="token keyword">let</span> binaryLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span>
<span class="token comment">// ES6 \u4E2D\u7684\u516B\u8FDB\u5236\u8868\u793A\u6CD5</span>
<span class="token keyword">let</span> octalLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o744</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> notANumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> infinityNumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u7ED3\u679C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> decLiteral <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> hexLiteral <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>
<span class="token comment">// ES6 \u4E2D\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u6CD5</span>
<span class="token keyword">var</span> binaryLiteral <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">// ES6 \u4E2D\u7684\u516B\u8FDB\u5236\u8868\u793A\u6CD5</span>
<span class="token keyword">var</span> octalLiteral <span class="token operator">=</span> <span class="token number">484</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> notANumber <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> infinityNumber <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),S=s("\u5176\u4E2D "),N=n("code",null,"0b1010",-1),T=s(" \u548C "),L=n("code",null,"0o744",-1),j=s(" \u662F "),C={href:"http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},I=s("ES6 \u4E2D\u7684\u4E8C\u8FDB\u5236\u548C\u516B\u8FDB\u5236\u8868\u793A\u6CD5"),q=s("\uFF0C\u5B83\u4EEC\u4F1A\u88AB\u7F16\u8BD1\u4E3A\u5341\u8FDB\u5236\u6570\u5B57\u3002"),D=o(`<h2 id="\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B57\u7B26\u4E32</h2><p>\u4F7F\u7528 <code>string</code> \u5B9A\u4E49\u5B57\u7B26\u4E32\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> myAge<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>

<span class="token comment">// \u6A21\u677F\u5B57\u7B26\u4E32</span>
<span class="token keyword">let</span> sentence<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>myName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.
I&#39;ll be </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>myAge <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old next month.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u7ED3\u679C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myAge <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
<span class="token comment">// \u6A21\u677F\u5B57\u7B26\u4E32</span>
<span class="token keyword">var</span> sentence <span class="token operator">=</span> <span class="token string">&quot;Hello, my name is &quot;</span> <span class="token operator">+</span> myName <span class="token operator">+</span> <span class="token string">&quot;.\\nI&#39;ll be &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>myAge <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; years old next month.&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),F=s("\u5176\u4E2D "),z=n("code",null,"`",-1),J=s(" \u7528\u6765\u5B9A\u4E49 "),P={href:"http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2",target:"_blank",rel:"noopener noreferrer"},V=s("ES6 \u4E2D\u7684\u6A21\u677F\u5B57\u7B26\u4E32"),G=s("\uFF0C"),U=n("code",null,"${expr}",-1),$=s(" \u7528\u6765\u5728\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\u5D4C\u5165\u8868\u8FBE\u5F0F\u3002"),H=o(`<h2 id="\u7A7A\u503C" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u503C" aria-hidden="true">#</a> \u7A7A\u503C</h2><p>JavaScript \u6CA1\u6709\u7A7A\u503C\uFF08Void\uFF09\u7684\u6982\u5FF5\uFF0C\u5728 TypeScript \u4E2D\uFF0C\u53EF\u4EE5\u7528 <code>void</code> \u8868\u793A\u6CA1\u6709\u4EFB\u4F55\u8FD4\u56DE\u503C\u7684\u51FD\u6570\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">alertName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;My name is Tom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u58F0\u660E\u4E00\u4E2A <code>void</code> \u7C7B\u578B\u7684\u53D8\u91CF\u6CA1\u6709\u4EC0\u4E48\u7528\uFF0C\u56E0\u4E3A\u4F60\u53EA\u80FD\u5C06\u5B83\u8D4B\u503C\u4E3A <code>undefined</code> \u548C <code>null</code>\uFF08\u53EA\u5728 --strictNullChecks \u672A\u6307\u5B9A\u65F6\uFF09\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> unusable<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="null-\u548C-undefined" tabindex="-1"><a class="header-anchor" href="#null-\u548C-undefined" aria-hidden="true">#</a> Null \u548C Undefined</h2><p>\u5728 TypeScript \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>null</code> \u548C <code>undefined</code> \u6765\u5B9A\u4E49\u8FD9\u4E24\u4E2A\u539F\u59CB\u6570\u636E\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0E <code>void</code> \u7684\u533A\u522B\u662F\uFF0C<code>undefined</code> \u548C <code>null</code> \u662F\u6240\u6709\u7C7B\u578B\u7684\u5B50\u7C7B\u578B\u3002\u4E5F\u5C31\u662F\u8BF4 <code>undefined</code> \u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u53EF\u4EE5\u8D4B\u503C\u7ED9 <code>number</code> \u7C7B\u578B\u7684\u53D8\u91CF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u8FD9\u6837\u4E0D\u4F1A\u62A5\u9519</span>
<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u8FD9\u6837\u4E5F\u4E0D\u4F1A\u62A5\u9519</span>
<span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C <code>void</code> \u7C7B\u578B\u7684\u53D8\u91CF\u4E0D\u80FD\u8D4B\u503C\u7ED9 <code>number</code> \u7C7B\u578B\u7684\u53D8\u91CF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>

<span class="token comment">// Type &#39;void&#39; is not assignable to type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,14),O={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"},M=s("Basic Types"),R=s("\uFF08"),W={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html",target:"_blank",rel:"noopener noreferrer"},K=s("\u4E2D\u6587\u7248"),Q=s("\uFF09"),X={href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive",target:"_blank",rel:"noopener noreferrer"},Y=s("Primitive data types"),Z=n("li",null,[s("[ES6 \u4E2D\u7684\u65B0\u7C7B\u578B "),n("code",null,"Symbol"),s("][]")],-1),nn={href:"http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},sn=s("ES6 \u4E2D\u7684\u4E8C\u8FDB\u5236\u548C\u516B\u8FDB\u5236\u8868\u793A\u6CD5"),an={href:"http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2",target:"_blank",rel:"noopener noreferrer"},en=s("ES6 \u4E2D\u7684\u6A21\u677F\u5B57\u7B26\u4E32");function on(tn,pn){const a=p("ExternalLinkIcon");return l(),c("div",null,[r,n("p",null,[d,n("a",u,[k,e(a)]),m]),n("p",null,[v,b,h,_,y,n("a",g,[f,e(a)]),w,n("a",B,[E,e(a)]),x]),A,n("p",null,[S,N,T,L,j,n("a",C,[I,e(a)]),q]),D,n("p",null,[F,z,J,n("a",P,[V,e(a)]),G,U,$]),H,n("ul",null,[n("li",null,[n("a",O,[M,e(a)]),R,n("a",W,[K,e(a)]),Q]),n("li",null,[n("a",X,[Y,e(a)])]),Z,n("li",null,[n("a",nn,[sn,e(a)])]),n("li",null,[n("a",an,[en,e(a)])])])])}var rn=t(i,[["render",on],["__file","primitive-data-types.html.vue"]]);export{rn as default};
