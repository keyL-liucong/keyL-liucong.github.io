import{_ as n}from"./webpack.f1cd3a29.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as e,e as i}from"./app.a58ccdd2.js";const l={},t=i(`<h1 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u672C\u914D\u7F6E</h1><p>Webpack \u7684\u57FA\u672C\u914D\u7F6E\u4E3B\u8981\u5206\u4E3A 6 \u4E2A\u65B9\u9762\uFF1A</p><ul><li>\u62C6\u5206\u914D\u7F6E\u548C merge</li><li>\u542F\u52A8\u672C\u5730\u670D\u52A1</li><li>\u5904\u7406 ES6</li><li>\u5904\u7406\u6837\u5F0F</li><li>\u5904\u7406\u56FE\u7247</li><li>\u6A21\u5757\u5316</li></ul><p>\u5B8C\u6210\u57FA\u672C\u914D\u7F6E\u540E\uFF0C\u9879\u76EE\u5C31\u80FD\u591F\u5728 demo \u73AF\u5883\u8FD0\u884C\u3002</p><h2 id="\u62C6\u5206\u914D\u7F6E\u548C-merge" tabindex="-1"><a class="header-anchor" href="#\u62C6\u5206\u914D\u7F6E\u548C-merge" aria-hidden="true">#</a> \u62C6\u5206\u914D\u7F6E\u548C merge</h2><p>\u4F20\u7EDF\u65B9\u5F0F\uFF0C\u4F1A\u5728\u9879\u76EE\u4E2D\u65B0\u5EFA\u4E00\u4E2A <code>webpack.config.js</code> \u6587\u4EF6\uFF0C\u5C06\u6240\u6709\u914D\u7F6E\u6C47\u603B\u5728\u4E00\u8D77\u3002</p><p>\u800C\u5982\u679C\u62C6\u5206\u914D\u7F6E\uFF0C\u6211\u4EEC\u4F1A\u5C06\u5B83\u5206\u4E3A\u4E09\u4E2A\u6587\u4EF6\uFF1A</p><ul><li>webpack.common.js</li><li>webpack.dev.js</li><li>webpack.prod.js</li></ul><p>\u4E0E\u6B64\u540C\u65F6\u4FEE\u6539 <code>package.json</code> \u4E2D\u7684\u547D\u4EE4\u8BED\u53E5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;scripts&quot;: {
  &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;,
  &quot;dev-without-dev-server&quot;: &quot;webpack --config build/webpack.dev.js&quot;,
  &quot;dev&quot;: &quot;webpack serve --config build/webpack.dev.js&quot;,
  &quot;build&quot;: &quot;webpack --config build/webpack.prod.js&quot;
}
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>webpack.common.js</code> \u57FA\u7840\u914D\u7F6E\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./paths&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 dev\uFF08\u5F00\u53D1\u73AF\u5883\u914D\u7F6E\uFF09\u548C prod\uFF08\u751F\u4EA7\u73AF\u5883\u914D\u7F6E\uFF09\u4E2D\u5206\u522B\u90FD\u901A\u8FC7 <code>merge</code>\uFF08\u9700\u8981\u5B89\u88C5 <code>webpack-merge</code> \u8FD9\u4E2A\u4F9D\u8D56\uFF09 \u5C06 common\uFF08\u516C\u5171\u914D\u7F6E\uFF09\u5F15\u8FDB\u6765\u3002</p><p><code>webpack.dev.js</code> \u57FA\u7840\u914D\u7F6E\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackCommonConf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.common.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> merge <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./paths&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u90E8\u5206\u914D\u7F6E\u9879\u7701\u7565\uFF0C\u540E\u9762\u4F1A\u5355\u72EC\u8BE6\u7EC6\u8BB2\u2026\u2026</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// window.ENV = &#39;development&#39;</span>
      <span class="token constant">ENV</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>webpack.prod.js</code> \u57FA\u7840\u914D\u7F6E\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackCommonConf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.common.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> merge <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./paths&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.[contenthash:8].js&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u6253\u5305\u4EE3\u7801\u65F6\uFF0C\u52A0\u4E0A hash \u6233</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> distPath<span class="token punctuation">,</span>
    <span class="token comment">// publicPath: &#39;http://cdn.abc.com&#39;  // \u4FEE\u6539\u6240\u6709\u9759\u6001\u6587\u4EF6 url \u7684\u524D\u7F00\uFF08\u5982 cdn \u57DF\u540D\uFF09\uFF0C\u8FD9\u91CC\u6682\u65F6\u7528\u4E0D\u5230</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u4F1A\u9ED8\u8BA4\u6E05\u7A7A output.path \u6587\u4EF6\u5939</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// window.ENV = &#39;production&#39;</span>
      <span class="token constant">ENV</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u4E09\u4EFD\u914D\u7F6E\u6587\u4EF6\u90FD\u5F15\u5165\u4E86 <code>paths.js</code>\uFF0C\u8FD9\u662F\u4E00\u4E2A\u901A\u7528\u7684 JS \u6587\u4EF6\uFF0C\u5B83\u91CC\u9762\u7684\u5B8C\u6574\u4EE3\u7801\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u5E38\u7528\u6587\u4EF6\u5939\u8DEF\u5F84
 * <span class="token keyword">@author</span> keyL-liucong
 */</span>

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> srcPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> distPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  srcPath<span class="token punctuation">,</span>
  distPath
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u62C6\u5206\u914D\u7F6E\u540E\u7684\u76EE\u5F55\u7ED3\u6784\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u251C\u2500\u2500 src/                       <span class="token comment"># \u9879\u76EE\u6E90\u4EE3\u7801</span>
\u251C\u2500\u2500 paths.js                   <span class="token comment"># \u5E38\u7528\u6587\u4EF6\u5939\u8DEF\u5F84\uFF0C\u8FD4\u56DE\u76EE\u5F55\u53D8\u91CF\u7ED9\u5176\u5B83\u6587\u4EF6\u7528</span>
\u251C\u2500\u2500 webpack.common.js          <span class="token comment"># \u516C\u5171\u914D\u7F6E</span>
\u251C\u2500\u2500 webpack.dev.js             <span class="token comment"># \u5F00\u53D1\u73AF\u5883\u914D\u7F6E</span>
\u251C\u2500\u2500 webpack.prod.js            <span class="token comment"># \u751F\u4EA7\u73AF\u5883\u914D\u7F6E</span>
\u2514\u2500\u2500 .babelrc                   <span class="token comment"># babel \u914D\u7F6E\uFF08\u540E\u9762\u4F1A\u8BB2\u5230\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8\u672C\u5730\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u672C\u5730\u670D\u52A1" aria-hidden="true">#</a> \u542F\u52A8\u672C\u5730\u670D\u52A1</h2><p>\u8FD9\u4E2A\u529F\u80FD\u53EA\u5728 dev \u73AF\u5883\u4E0B\u4F7F\u7528\uFF0C\u501F\u52A9\u4E86 <code>webpack-dev-server</code> \u8FD9\u4E2A\u4F9D\u8D56\uFF0C\u914D\u7F6E\u5199\u5728 <code>webpack.dev.js</code> \u4E2D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const path = require(&#39;path&#39;)
const webpack = require(&#39;webpack&#39;)
const webpackCommonConf = require(&#39;./webpack.common.js&#39;)
const { merge } = require(&#39;webpack-merge&#39;)
const { srcPath, distPath } = require(&#39;./paths&#39;)

module.exports = merge(webpackCommonConf, {
  mode: &#39;development&#39;,
  devServer: {
    historyApiFallback: true, // \u524D\u7AEF\u8DEF\u7531\u914D\u7F6E\u4E3A history \u6A21\u5F0F\u65F6\u7528
    contentBase: distPath,    // \u6839\u76EE\u5F55
    open: true,               // \u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668
    compress: true,           // \u542F\u52A8 gzip \u538B\u7F29
    hot: true,                // \u70ED\u66F4\u65B0
    port: 8080,               // \u542F\u52A8\u7AEF\u53E3

    // \u8BBE\u7F6E\u4EE3\u7406\uFF0C\u89E3\u51B3\u8DE8\u57DF\u8BBF\u95EE \u2014\u2014 \u5982\u679C\u6709\u9700\u8981\u7684\u8BDD
    proxy: {
      // \u5C06\u672C\u5730 /api/xxx \u4EE3\u7406\u5230 localhost:3000/api/xxx
      &#39;/api&#39;: &#39;http://localhost:3000&#39;,

      // \u5C06\u672C\u5730 /api2/xxx \u4EE3\u7406\u5230 localhost:3000/xxx
      &#39;/api2&#39;: {
        target: &#39;http://localhost:3000&#39;,
        pathRewrite: {
          &#39;/api2&#39;: &#39;&#39;
        }
      }
    }
  }
})
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5904\u7406-es6" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406-es6" aria-hidden="true">#</a> \u5904\u7406 ES6</h2><p>\u5904\u7406 ES6 \u662F\u901A\u7528\u7684\u529F\u80FD\uFF0C\u501F\u52A9\u4E86 <code>babel-loader</code> \u8FD9\u4E2A\u4F9D\u8D56\uFF0C\u914D\u7F6E\u5199\u5728 <code>webpack.common.js</code> \u4E2D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const path = require(&#39;path&#39;)
const { srcPath, distPath } = require(&#39;./paths&#39;)

module.exports = {
  entry: path.join(srcPath, &#39;index&#39;),
  module: {
    rules: [
      {
        test: /\\.js$/,
        use: [&#39;babel-loader&#39;], 
        include: srcPath,
        exclude: /node_modules/
      }
    ]
  }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E <code>babel-loader</code> \u4F7F\u7528\u5230\u4E86 babel\uFF0C\u56E0\u6B64\u8FD8\u9700\u8981\u914D\u7F6E <code>.babelrc</code>\u3002\u4E00\u822C\u7B80\u5355\u914D\u7F6E\u5C31\u5DF2\u7ECF\u5305\u542B\u4E86 ES6\u30017\u30018 \u5E38\u7528\u8BED\u6CD5\uFF0C\u7279\u6B8A\u60C5\u51B5\u518D\u914D\u7F6E plugins\u3002\u6240\u4EE5\u5E38\u7528\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5904\u7406\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u6837\u5F0F" aria-hidden="true">#</a> \u5904\u7406\u6837\u5F0F</h2><p>\u5904\u7406\u6837\u5F0F\u4E5F\u662F\u901A\u7528\u7684\u529F\u80FD\uFF0C\u501F\u52A9\u4E86 <code>css-loader</code>\u3001<code>style-loader</code> \u548C <code>postcss-loader</code> \u8FD9\u51E0\u4E2A\u4F9D\u8D56\uFF0C\u914D\u7F6E\u5199\u5728 <code>webpack.common.js</code> \u4E2D\u3002</p><ul><li>postcss-loader\uFF1ACSS \u8BED\u6CD5\u8BC6\u522B\uFF0C\u5904\u7406\u6D4F\u89C8\u5668\u517C\u5BB9\u6027</li><li>css-loader\uFF1A\u5C06 .css \u7ED3\u5C3E\u7684\u6587\u4EF6\u89E3\u6790\u4E3A CSS\uFF08webpack \u4E2D\u4E00\u5207\u7686\u6A21\u5757\uFF0C\u5B83\u4E0D\u8BA4\u8BC6 .css \u6587\u4EF6\u548C .js \u6587\u4EF6\u7684\u533A\u522B\uFF09</li><li>style-loader\uFF1A\u5C06\u89E3\u6790\u5B8C\u7684 CSS \u63D2\u5165\u5230\u9875\u9762\u4E2D\uFF08style \u6807\u7B7E\u4E2D\uFF09</li></ul><p>\u5904\u7406\u6837\u5F0F\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const path = require(&#39;path&#39;)
const { srcPath, distPath } = require(&#39;./paths&#39;)

module.exports = {
  entry: path.join(srcPath, &#39;index&#39;),
  module: {
    rules: [
      {
        test: /\\.css$/,
        // loader \u7684\u6267\u884C\u987A\u5E8F\u662F\uFF1A\u4ECE\u540E\u5F80\u524D
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;postcss-loader&#39;]
      },
      {
        test: /\\.less$/,
        // \u589E\u52A0 &#39;less-loader&#39;\uFF0C\u6CE8\u610F\u987A\u5E8F
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;]
      }
    ]
  }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D postcss-loader \u9700\u8981\u914D\u7F6E\u4E00\u4EFD <code>postcss.config.js</code> \u6587\u4EF6\uFF0C\u5728\u8FD9\u4E2A\u6587\u4EF6\u91CC\u53EF\u4EE5\u9009\u62E9\u4E00\u4E9B\u63D2\u4EF6\uFF0C\u6B64\u5904\u6211\u4EEC\u5B89\u88C5\u5E76\u5F15\u5165 <code>autoprefixer</code> \u8FD9\u4E2A\u4F9D\u8D56\uFF08\u4E3A CSS \u8BED\u6CD5\u6DFB\u52A0\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u7684\u524D\u7F00\uFF09\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5904\u7406\u6837\u5F0F\u7684\u914D\u7F6E\u4E2D\uFF0C\u9664\u4E86 CSS\uFF0C\u540C\u7406\u8FD8\u6709 Less\uFF0CSass \u7B49\uFF0C\u90FD\u662F\u5DEE\u4E0D\u591A\u7684\u601D\u8DEF\uFF08\u89E3\u6790 Less \u8BED\u6CD5 =&gt; \u89E3\u6790 CSS \u8BED\u6CD5 =&gt; \u8F6C\u6210 style\uFF09\uFF0C\u8BE6\u89C1\u4E0A\u9762\u7684\u914D\u7F6E\u793A\u4F8B\u3002</p><h2 id="\u5904\u7406\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u56FE\u7247" aria-hidden="true">#</a> \u5904\u7406\u56FE\u7247</h2><p>\u5904\u7406\u56FE\u7247\u5728 dev \u73AF\u5883\u548C prod \u73AF\u5883\u7684\u601D\u8DEF\u4E0D\u540C\u3002</p><ul><li>dev \u73AF\u5883\uFF1A\u501F\u52A9 <code>file-loader</code> \u4F9D\u8D56\uFF0C<strong>\u76F4\u63A5\u5F15\u5165\u56FE\u7247 url</strong>\u3002\u5728 <code>webpack.dev.js</code> \u4E2D\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const webpackCommonConf = require(&#39;./webpack.common.js&#39;)
const { merge } = require(&#39;webpack-merge&#39;)

module.exports = merge(webpackCommonConf, {
  mode: &#39;development&#39;,
  module: {
    rules: [
      // \u76F4\u63A5\u5F15\u5165\u56FE\u7247 url
      {
        test: /\\.(png|jpg|jpeg|gif)$/,
        use: &#39;file-loader&#39;
      }
    ]
  }
})
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>prod \u73AF\u5883\uFF1A\u4ECE\u6027\u80FD\u4F18\u5316\u7684\u89D2\u5EA6\u8003\u8651\uFF0C\u5927\u56FE\u7247\u501F\u52A9 <code>file-loader</code> \u4F9D\u8D56\uFF0C\u76F4\u63A5\u5F15\u5165\u56FE\u7247 url\uFF0C\u5E76\u6253\u5305\u5230\u6307\u5B9A\u76EE\u5F55\u4E0B\uFF1B\u5C0F\u56FE\u7247\u8F6C\u6210 base64 \u7684\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u51CF\u5C11\u4E00\u6B21 http \u8BF7\u6C42\u3002\u5728 <code>webpack.prod.js</code> \u4E2D\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const webpackCommonConf = require(&#39;./webpack.common.js&#39;)
const { merge } = require(&#39;webpack-merge&#39;)
const { srcPath, distPath } = require(&#39;./paths&#39;)

module.exports = merge(webpackCommonConf, {
  mode: &#39;production&#39;,
  output: {
    filename: &#39;bundle.[contenthash:8].js&#39;,  // \u6253\u5305\u4EE3\u7801\u65F6\uFF0C\u52A0\u4E0A hash \u6233\uFF0C\u4E3B\u8981\u9488\u5BF9 JS \u6587\u4EF6
    path: distPath,
    // publicPath: &#39;http://cdn.abc.com&#39;  // \u4FEE\u6539\u6240\u6709\u9759\u6001\u6587\u4EF6 url \u7684\u524D\u7F00\uFF08\u5982 cdn \u57DF\u540D\uFF09\uFF0C\u8FD9\u91CC\u6682\u65F6\u7528\u4E0D\u5230
  },
  module: {
    rules: [
      // \u56FE\u7247 - \u8003\u8651 base64 \u7F16\u7801\u7684\u60C5\u51B5
      {
        test: /\\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: &#39;url-loader&#39;,
          options: {
            // \u5C0F\u4E8E 5kb \u7684\u56FE\u7247\u7528 base64 \u683C\u5F0F\u4EA7\u51FA
            // \u5426\u5219\uFF0C\u4F9D\u7136\u5EF6\u7528 file-loader \u7684\u5F62\u5F0F\uFF0C\u4EA7\u51FA url \u683C\u5F0F
            limit: 5 * 1024,

            // \u6253\u5305\u5230 img \u76EE\u5F55\u4E0B
            outputPath: &#39;/img/&#39;,

            // \u8BBE\u7F6E\u56FE\u7247\u7684 cdn \u5730\u5740\uFF08\u4E5F\u53EF\u4EE5\u7EDF\u4E00\u5728\u5916\u9762\u7684 output \u4E2D\u8BBE\u7F6E\uFF0C\u90A3\u5C06\u4F5C\u7528\u4E8E\u6240\u6709\u9759\u6001\u8D44\u6E90\uFF09
            // publicPath: &#39;http://cdn.abc.com&#39;
          }
        }
      }
    ]
  }
})
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u5316" aria-hidden="true">#</a> \u6A21\u5757\u5316</h2><p>\u4E00\u4E2A Web \u5DE5\u7A0B\u901A\u5E38\u4F1A\u5305\u542B\u4E00\u7CFB\u5217\u7684\u9759\u6001\u8D44\u6E90\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u8D44\u6E90\u4E00\u822C\u4F1A\u5B58\u5728\u67D0\u79CD\u76F8\u4E92\u4F9D\u8D56\u7684\u5173\u7CFB\u3002\u4E00\u822C\u9759\u6001\u8D44\u6E90\u5305\u542B\uFF1A</p><ul><li>HTML/CSS/JavaScript</li><li>\u56FE\u7247/\u97F3\u89C6\u9891</li><li>\u5B57\u4F53</li><li>\u6A21\u677F \u3002\u3002\u3002</li></ul><p>\u5BF9\u4E8E webpack \u6765\u8BF4\uFF0C\u8FD9\u4E9B\u9759\u6001\u8D44\u6E90\u90FD\u662F\u6A21\u5757\uFF0C\u6211\u4EEC\u53EF\u4EE5\u50CF\u52A0\u8F7D\u4E00\u4E2A JS \u6A21\u5757\u4E00\u6837\u53BB\u52A0\u8F7D\u5B83\u4EEC\uFF0C\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165 CSS</span>
<span class="token keyword">import</span> <span class="token string">&#39;./style/style1.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./style/style2.css&#39;</span>

<span class="token comment">// \u5F15\u5165 JS \u65B9\u6CD5</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./math&#39;</span>

<span class="token comment">// \u5F15\u5165\u7B2C\u4E09\u65B9\u6A21\u5757</span>
<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">&#39;lodash&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div style="text-align:center;"><img src="`+n+`" alt="webpack"><p style="text-align:center;color:#888;">\uFF08webpack\uFF0C\u56FE\u6765\u6E90\u4E8E\u5B98\u7F51\u6587\u6863\uFF09</p></div><p>\u4E0A\u56FE\u4E3A webpack \u5B98\u7F51\u4E0A\u7684\u56FE\u7247\uFF0C\u4E00\u5207\u6587\u4EF6\uFF1AJavaScript\u3001CSS\u3001SCSS\u3001\u56FE\u7247\u3001\u6A21\u677F\uFF0C\u5728 webpack \u773C\u4E2D\u90FD\u662F\u4E00\u4E2A\u4E2A\u6A21\u5757\uFF0C\u8FD9\u6837\u7684\u597D\u5904\u662F\u80FD\u6E05\u6670\u7684\u63CF\u8FF0\u51FA\u5404\u4E2A\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4EE5\u65B9\u4FBF webpack \u5BF9\u6A21\u5757\u8FDB\u884C\u7EC4\u5408\u548C\u6253\u5305\u3002\u7ECF\u8FC7 webpack \u7684\u5904\u7406\uFF0C\u6700\u7EC8\u4F1A\u8F93\u51FA\u6D4F\u89C8\u5668\u80FD\u4F7F\u7528\u7684\u9759\u6001\u8D44\u6E90\u3002</p><p>\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u4EC0\u4E48\u5462\uFF1F</p><p>\u4E3E\u4E2A\u573A\u666F\uFF1A<strong>\u67D0\u9875\u9762\u6A21\u5757\u9700\u8981\u7528\u5230\u6309\u94AE</strong>\uFF0C\u4E8E\u662F\u6211\u4EEC\u52A0\u8F7D\u5B83\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/page/index.js&#39;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&#39;./components/button/button.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u52A0\u8F7D\u4E86 JS \u6587\u4EF6\u4E4B\u540E\u53D1\u73B0\u9700\u8981\u5404\u7C7B\u6837\u5F0F\uFF0C\u56E0\u6B64\u4ECD\u9700\u8981\u5F15\u5165\u6309\u94AE\u7EC4\u4EF6\u7684\u6837\u5F0F\u6587\u4EF6\uFF1A</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// src/page/style.scss  \u4EE5 SCSS \u4E3A\u4F8B</span>
<span class="token keyword">@import</span> <span class="token string">&#39;./components/button/style.scss&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u5728 webpack \u4E2D\u5B9E\u9645\u6784\u5EFA\u65F6\uFF0C\u53EF\u4EE5\u91C7\u7528\u66F4\u52A0\u7B80\u6D01\u7684\u5199\u6CD5\u6765\u5904\u7406\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/page/index.js</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&#39;./components/button/index.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ./components/button/index.js</span>
<span class="token keyword">import</span> <span class="token string">&#39;./style.scss&#39;</span> <span class="token comment">// \u5F15\u7528\u7EC4\u4EF6\u81EA\u8EAB\u6837\u5F0F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u4F8B\u5B50\u53EF\u4EE5\u770B\u5230\uFF0C\u5728 button \u7684 JS \u4E2D\u52A0\u8F7D\u4E86\u7EC4\u4EF6\u81EA\u8EAB\u7684\u6837\u5F0F\uFF0C\u4F46\u5BF9\u4E8E\u9700\u8981\u8BE5\u7EC4\u4EF6\u7684\u9875\u9762\u6765\u8BF4\uFF0C\u53EA\u9700\u8981\u5F15\u5165 button \u7684 JS \u6A21\u5757\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u518D\u8FD9\u91CC\u5F15\u5165 button \u7684\u6837\u5F0F\u4E86\u3002\u8FD9\u6837\u5728\u8FDB\u884C\u7EC4\u4EF6\u7684\u5F15\u5165\u4E0E\u5220\u9664\u65F6\uFF0C\u76F4\u63A5\u64CD\u4F5C\u4E00\u6B21\u5373\u53EF\u8FBE\u6210\u76EE\u7684\u3002</p><p>\u5728\u9879\u76EE\u5177\u6709\u4E00\u5B9A\u89C4\u6A21\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u66F4\u52A0\u6E05\u6670\u660E\u4E86\u7684\u770B\u51FA webpack \u5BF9\u6211\u4EEC\u9879\u76EE\u5DE5\u7A0B\u4F18\u5316\u4E4B\u5904\uFF1A</p><ul><li>\u5DE5\u7A0B\u7ED3\u6784\u66F4\u7B80\u6D01</li><li>\u8BA9\u4F9D\u8D56\u5173\u7CFB\u66F4\u76F4\u89C2</li><li>\u4EE3\u7801\u53EF\u7EF4\u62A4\u6027\u66F4\u5F3A</li></ul>`,61),c=[t];function p(o,d){return a(),e("div",null,c)}var m=s(l,[["render",p],["__file","basic-config.html.vue"]]);export{m as default};
