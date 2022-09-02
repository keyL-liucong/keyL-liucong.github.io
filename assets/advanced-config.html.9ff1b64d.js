import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as r,c as v,a as n,b as l,e,d as i}from"./app.a148f620.js";const c={},b=e(`<h1 id="\u9AD8\u7EA7\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7\u914D\u7F6E" aria-hidden="true">#</a> \u9AD8\u7EA7\u914D\u7F6E</h1><p>\u57FA\u672C\u914D\u7F6E\u4E3B\u8981\u786E\u4FDD\u9879\u76EE\u80FD\u591F\u5728 demo \u73AF\u5883\u8FD0\u884C\uFF0C\u800C\u7528\u4E8E\u7EBF\u4E0A\u73AF\u5883\u65F6\u5F80\u5F80\u9700\u8981\u8FDB\u884C\u4E00\u4E9B\u9AD8\u7EA7\u914D\u7F6E\u3002</p><p>Webpack \u7684\u9AD8\u7EA7\u914D\u7F6E\u4E3B\u8981\u5206\u4E3A 6 \u4E2A\u65B9\u9762\uFF0C\u6839\u636E\u9700\u8981\u8FDB\u884C\u9009\u62E9\uFF1A</p><ul><li>\u591A\u5165\u53E3</li><li><strong>\u62BD\u79BB\u538B\u7F29 CSS \u6587\u4EF6</strong></li><li><strong>\u62BD\u79BB\u516C\u5171\u4EE3\u7801</strong></li><li><strong>\u61D2\u52A0\u8F7D - \u5F02\u6B65\u52A0\u8F7D JS</strong></li><li>\u5904\u7406 JSX</li><li>\u5904\u7406 Vue</li></ul><h2 id="\u591A\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#\u591A\u5165\u53E3" aria-hidden="true">#</a> \u591A\u5165\u53E3</h2><p>\u901A\u8FC7\u57FA\u672C\u914D\u7F6E\uFF0C\u6211\u4EEC\u5728\u6253\u5305\u7F16\u8BD1\u540E\u4EA7\u751F\u7684\u9875\u9762\u53EA\u662F\u4E00\u4E2A\u6587\u4EF6 <code>index.html</code>\u3002\u5982\u679C\u5728\u4E00\u4E2A\u9879\u76EE\u4E2D\u60F3\u4EA7\u751F\u4E24\u4E2A\u9875\u9762 <code>index.html</code> \u548C <code>other.html</code>\uFF08\u6216\u591A\u4E2A\u9875\u9762\uFF09\uFF0C\u5C31\u9700\u8981\u8FDB\u884C\u591A\u5165\u53E3\u914D\u7F6E\u3002</p><p>\u9996\u5148\u5728 <code>webpack.common.js</code> \u4E2D\u5EFA\u5165\u53E3\uFF08<code>entry</code>\uFF09\u7684\u65F6\u5019\u5C31\u9700\u8981\u5EFA\u7ACB\u4E24\u4E2A\uFF08\u6216\u591A\u4E2A\uFF09\uFF0C\u5176\u6B21\u5728\u63D2\u4EF6\uFF08<code>plugins</code>\uFF09\u4E2D\u9488\u5BF9\u6BCF\u4E00\u4E2A\u5165\u53E3\u90FD\u8981 <code>new</code> \u4E00\u4E2A <code>HtmlWebpackPlugin</code> \u7684\u5B9E\u4F8B\u3002\u914D\u7F6E\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const path = require(&#39;path&#39;)
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)
const { srcPath, distPath } = require(&#39;./paths&#39;)

module.exports = {
  entry: {
    index: path.join(srcPath, &#39;index.js&#39;),
    other: path.join(srcPath, &#39;other.js&#39;)
  },
  module: {
    rules: [
      // \u6B64\u5904\u7701\u7565\u5904\u7406 js\u3001css\u3001less \u7684\u914D\u7F6E
    ]
  },
  plugins: [
    // \u591A\u5165\u53E3 - \u751F\u6210 index.html
    new HtmlWebpackPlugin({
      template: path.join(srcPath, &#39;index.html&#39;), // \u5BF9\u5E94\u5230 index.html \u8FD9\u4E2A\u6A21\u677F\u6587\u4EF6
      filename: &#39;index.html&#39;, // \u751F\u6210\u7684\u6587\u4EF6\uFF0C\u540D\u5B57\u968F\u4FBF\u53D6
      // chunks \u8868\u793A\u8BE5\u9875\u9762\u8981\u5F15\u5165\u54EA\u4E9B JS \u6587\u4EF6\uFF08\u5373 entry \u4E2D\u914D\u7F6E\u7684 JS \u6587\u4EF6\uFF09\uFF0C\u9ED8\u8BA4\u5168\u90E8\u5F15\u7528
      chunks: [&#39;index&#39;]  // \u53EA\u5F15\u7528 index.js
    }),
    // \u591A\u5165\u53E3 - \u751F\u6210 other.html
    new HtmlWebpackPlugin({
      template: path.join(srcPath, &#39;other.html&#39;), // \u5BF9\u5E94\u5230 other.html \u8FD9\u4E2A\u6A21\u677F\u6587\u4EF6
      filename: &#39;other.html&#39;, // \u751F\u6210\u7684\u6587\u4EF6\uFF0C\u540D\u5B57\u968F\u4FBF\u53D6
      chunks: [&#39;other&#39;]  // \u53EA\u5F15\u7528 other.js
    })
  ]
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u6B21\u4FEE\u6539 prod\uFF08\u751F\u4EA7\u73AF\u5883\u914D\u7F6E\uFF09\u4E2D\u7684 <code>output</code>\uFF0C\u5C06 <code>webpack.prod.js</code> \u4E2D <code>output.filename</code> \u7684\u56FA\u5B9A\u503C <code>bundle</code> \u4FEE\u6539\u4E3A\u53D8\u91CF <code>[name]</code>\u3002\u914D\u7F6E\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const path = require(&#39;path&#39;)
const webpack = require(&#39;webpack&#39;)
const { CleanWebpackPlugin } = require(&#39;clean-webpack-plugin&#39;)
const webpackCommonConf = require(&#39;./webpack.common.js&#39;)
const { merge } = require(&#39;webpack-merge&#39;)
const { srcPath, distPath } = require(&#39;./paths&#39;)

module.exports = merge(webpackCommonConf, {
  mode: &#39;production&#39;,
  output: {
    // filename: &#39;bundle.[contenthash:8].js&#39;,  // \u6253\u5305\u4EE3\u7801\u65F6\uFF0C\u52A0\u4E0A hash \u6233
    filename: &#39;[name].[contenthash:8].js&#39;, // name \u5373\u591A\u5165\u53E3\u65F6 entry \u7684 key
    path: distPath,
  },
  module: {
    rules: [
      // \u6B64\u5904\u7701\u7565\u5904\u7406\u56FE\u7247\u7684\u914D\u7F6E
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // \u4F1A\u9ED8\u8BA4\u6E05\u7A7A output.path \u6587\u4EF6\u5939
    new webpack.DefinePlugin({
      // window.ENV = &#39;production&#39;
      ENV: JSON.stringify(&#39;production&#39;)
    })
  ]
})
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u62BD\u79BB\u538B\u7F29-css-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u62BD\u79BB\u538B\u7F29-css-\u6587\u4EF6" aria-hidden="true">#</a> \u62BD\u79BB\u538B\u7F29 CSS \u6587\u4EF6</h2><p>\u5728\u57FA\u7840\u914D\u7F6E\u4E2D\uFF0C\u662F\u628A\u6240\u6709 CSS \u6587\u4EF6\u5168\u90E8\u5199\u5230\u9875\u9762\u7684 style \u6807\u7B7E\u91CC\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5728\u5F00\u53D1\u6A21\u5F0F\u4E2D\u95EE\u9898\u4E0D\u5927\uFF0C\u4F46\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u663E\u7136\u4E0D\u79D1\u5B66\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u628A CSS \u6587\u4EF6\u62BD\u79BB\u538B\u7F29\u3002</p><p>\u9996\u5148\u5728 <code>webpack.common.js</code> \u4E2D\u5220\u9664\u5BF9 CSS \u548C Less \u7684\u5904\u7406\uFF0C\u53EA\u4FDD\u7559\u5BF9 JS \u6587\u4EF6\u7684\u5904\u7406\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const path = require(&#39;path&#39;)
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)
const { srcPath, distPath } = require(&#39;./paths&#39;)

module.exports = {
  entry: {
    index: path.join(srcPath, &#39;index.js&#39;)
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        use: [&#39;babel-loader&#39;],
        include: srcPath,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, &#39;index.html&#39;),
      filename: &#39;index.html&#39;
    })
  ]
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u6B21\u5C06\u539F\u6765 CSS \u548C Less \u7684\u5904\u7406\u903B\u8F91\u653E\u5230\u5F00\u53D1\u73AF\u5883\u4E0B\uFF0C\u5373 <code>webpack.dev.js</code> \u4E2D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const path = require(&#39;path&#39;)
const webpack = require(&#39;webpack&#39;)
const webpackCommonConf = require(&#39;./webpack.common.js&#39;)
const { merge } = require(&#39;webpack-merge&#39;)
const { srcPath, distPath } = require(&#39;./paths&#39;)

module.exports = merge(webpackCommonConf, {
  mode: &#39;development&#39;,
  module: {
    rules: [
      // \u76F4\u63A5\u5F15\u5165\u56FE\u7247 url
      {
        test: /\\.(png|jpg|jpeg|gif)$/,
        use: &#39;file-loader&#39;
      },
      {
        test: /\\.css$/,
        // loader \u7684\u6267\u884C\u987A\u5E8F\u662F\uFF1A\u4ECE\u540E\u5F80\u524D
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;postcss-loader&#39;] // \u52A0\u4E86 postcss
      },
      {
        test: /\\.less$/,
        // \u589E\u52A0 &#39;less-loader&#39; \uFF0C\u6CE8\u610F\u987A\u5E8F
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      // window.ENV = &#39;development&#39;
      ENV: JSON.stringify(&#39;development&#39;)
    })
  ],
  devServer: {
    // \u6B64\u5904\u7701\u7565 devServer \u7684\u914D\u7F6E
  }
})
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u624D\u662F\u5728 <code>webpack.prod.js</code> \u4E2D\u8FDB\u884C\u914D\u7F6E\uFF0C\u8FD9\u91CC\u5BF9 CSS \u548C Less \u7684\u5904\u7406\u903B\u8F91\u4E0E\u5728\u5F00\u53D1\u73AF\u5883\u4E2D\u5F88\u4E0D\u4E00\u6837\u3002\u9700\u8981\u5B89\u88C5\u4E09\u4E2A\u63D2\u4EF6 \u2014\u2014 \u7528\u4E8E\u62BD\u79BB\u7684 <code>mini-css-extract-plugin</code>\uFF0C\u7528\u4E8E\u538B\u7F29\u7684 <code>terser-webpack-plugin</code> \u548C <code>optimize-css-assets-webpack-plugin</code>\u3002\u914D\u7F6E\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const path = require(&#39;path&#39;)
const webpack = require(&#39;webpack&#39;)
const { merge } = require(&#39;webpack-merge&#39;)
const { CleanWebpackPlugin } = require(&#39;clean-webpack-plugin&#39;)
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;)
const TerserJSPlugin = require(&#39;terser-webpack-plugin&#39;)
const OptimizeCSSAssetsPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;)
const webpackCommonConf = require(&#39;./webpack.common.js&#39;)
const { srcPath, distPath } = require(&#39;./paths&#39;)

module.exports = merge(webpackCommonConf, {
  mode: &#39;production&#39;,
  output: {
    filename: &#39;[name].[contenthash:8].js&#39;, // name \u5373\u591A\u5165\u53E3\u65F6 entry \u7684 key
    path: distPath,
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
      },
      // \u62BD\u79BB css
      {
        test: /\\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // \u6CE8\u610F\uFF0C\u8FD9\u91CC\u4E0D\u518D\u7528 style-loader
          &#39;css-loader&#39;,
          &#39;postcss-loader&#39;
        ]
      },
      // \u62BD\u79BB less
      {
        test: /\\.less$/,
        use: [
          MiniCssExtractPlugin.loader, // \u6CE8\u610F\uFF0C\u8FD9\u91CC\u4E0D\u518D\u7528 style-loader
          &#39;css-loader&#39;,
          &#39;less-loader&#39;,
          &#39;postcss-loader&#39;
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // \u4F1A\u9ED8\u8BA4\u6E05\u7A7A output.path \u6587\u4EF6\u5939
    new webpack.DefinePlugin({
      // window.ENV = &#39;production&#39;
      ENV: JSON.stringify(&#39;production&#39;)
    }),

    // \u62BD\u79BB css \u6587\u4EF6\uFF0C\u547D\u540D\u4E3A main + hash\u503C
    new MiniCssExtractPlugin({
      filename: &#39;css/main.[contenthash:8].css&#39;
    })
  ],

  optimization: {
    // \u538B\u7F29 css
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  }
})
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u62BD\u79BB\u516C\u5171\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u62BD\u79BB\u516C\u5171\u4EE3\u7801" aria-hidden="true">#</a> \u62BD\u79BB\u516C\u5171\u4EE3\u7801</h2><p>\u4E3A\u4E86\u63D0\u5347\u6027\u80FD\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u6253\u5305\u65F6\u5C06<strong>\u7B2C\u4E09\u65B9\u6A21\u5757</strong>\u548C<strong>\u516C\u7528\u5F15\u7528\u7684\u4EE3\u7801</strong>\u5355\u72EC\u62C6\u5206\u51FA\u53BB\u3002</p><p>\u65E2\u7136\u662F\u5728\u6253\u5305\u65F6\u8FDB\u884C\u7684\u4F18\u5316\uFF0C\u5C31\u662F\u4FEE\u6539\u9996\u5148\u5728 <code>webpack.prod.js</code> \u8FD9\u4EFD\u751F\u4EA7\u73AF\u5883\u7684\u914D\u7F6E\u6587\u4EF6\u3002\u5728 <code>optimization</code> \u4E2D\u6DFB\u52A0\u5206\u5272\u4EE3\u7801\u5757\u7684\u903B\u8F91\uFF0C\u914D\u7F6E\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const webpack = require(&#39;webpack&#39;)
const { merge } = require(&#39;webpack-merge&#39;)
const { CleanWebpackPlugin } = require(&#39;clean-webpack-plugin&#39;)
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;)
const TerserJSPlugin = require(&#39;terser-webpack-plugin&#39;)
const OptimizeCSSAssetsPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;)
const webpackCommonConf = require(&#39;./webpack.common.js&#39;)
const { srcPath, distPath } = require(&#39;./paths&#39;)

module.exports = merge(webpackCommonConf, {
  mode: &#39;production&#39;,
  output: {
    filename: &#39;[name].[contenthash:8].js&#39;, // name \u5373\u591A\u5165\u53E3\u65F6 entry \u7684 key
    path: distPath,
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
      },
      // \u62BD\u79BB css
      {
        test: /\\.css$/,
        use: [
          MiniCssExtractPlugin.loader,  // \u6CE8\u610F\uFF0C\u8FD9\u91CC\u4E0D\u518D\u7528 style-loader
          &#39;css-loader&#39;,
          &#39;postcss-loader&#39;
        ]
      },
      // \u62BD\u79BB less
      {
        test: /\\.less$/,
        use: [
          MiniCssExtractPlugin.loader,  // \u6CE8\u610F\uFF0C\u8FD9\u91CC\u4E0D\u518D\u7528 style-loader
          &#39;css-loader&#39;,
          &#39;less-loader&#39;,
          &#39;postcss-loader&#39;
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // \u4F1A\u9ED8\u8BA4\u6E05\u7A7A output.path \u6587\u4EF6\u5939
    new webpack.DefinePlugin({
      // window.ENV = &#39;production&#39;
      ENV: JSON.stringify(&#39;production&#39;)
    }),

    // \u62BD\u79BB css \u6587\u4EF6
    new MiniCssExtractPlugin({
      filename: &#39;css/main.[contenthash:8].css&#39;
    })
  ],

  optimization: {
    // \u538B\u7F29 css
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],

    // \u5206\u5272\u4EE3\u7801\u5757
    splitChunks: {
      chunks: &#39;all&#39;,
      /**
       * initial \u5165\u53E3 chunk\uFF0C\u5BF9\u4E8E\u5F02\u6B65\u5BFC\u5165\u7684\u6587\u4EF6\u4E0D\u5904\u7406
       * async \u5F02\u6B65 chunk\uFF0C\u53EA\u5BF9\u5F02\u6B65\u5BFC\u5165\u7684\u6587\u4EF6\u5904\u7406
       * all \u5168\u90E8 chunk\uFF0C\u4E00\u822C\u9009\u62E9 all \u6A21\u5F0F
       */

      // \u7F13\u5B58\u5206\u7EC4
      cacheGroups: {
        // \u7B2C\u4E09\u65B9\u6A21\u5757
        vendor: {
          name: &#39;vendor&#39;,       // chunk \u540D\u79F0
          priority: 1,          // \u6743\u9650\u66F4\u9AD8\uFF0C\u4F18\u5148\u62BD\u79BB\uFF08\u4F8B\u5982\u7B2C\u4E09\u65B9\u6A21\u5757\u540C\u65F6\u4E5F\u4F5C\u4E3A\u516C\u5171\u6A21\u5757\u5728\u591A\u5904\u5F15\u7528\u65F6\uFF0C\u6309\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u89C4\u5219\u8FDB\u884C\u62BD\u79BB\uFF09
          test: /node_modules/, // \u68C0\u67E5\u6A21\u5757\u662F\u5426\u4F4D\u4E8E node_modules/ \u76EE\u5F55\u4E0B
          minSize: 30000,       // \u5927\u5C0F\u9650\u5236\uFF08Byte\uFF09\uFF0C\u592A\u5C0F\u7684\u4E0D\u7528\u62BD\u79BB
          minChunks: 1          // \u6700\u5C11\u590D\u7528\u8FC7\u51E0\u6B21\uFF08\u7B2C\u4E09\u65B9\u6A21\u5757\u53EA\u8981\u5F15\u7528\u8FC7\u4E00\u6B21\u5C31\u62BD\u53D6\u51FA\u6765\uFF09
        },

        // \u516C\u5171\u7684\u6A21\u5757
        common: {
          name: &#39;common&#39;,       // chunk \u540D\u79F0
          priority: 0,          // \u4F18\u5148\u7EA7
          minSize: 50000,       // \u516C\u5171\u6A21\u5757\u7684\u5927\u5C0F\u9650\u5236\uFF08\u6B64\u5904\u8BBE\u7F6E 50KB\uFF09
          minChunks: 2          // \u516C\u5171\u6A21\u5757\u6700\u5C11\u590D\u7528\u8FC7\u51E0\u6B21
        }
      }
    }
  }
})
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E<strong>\u591A\u5165\u53E3\u7684\u60C5\u51B5</strong>\uFF0C\u4E3A\u4E86\u9632\u6B62\u591A\u4F59\u7684\u7B2C\u4E09\u65B9\u6A21\u5757\u88AB\u6253\u5305\u5230\u6CA1\u6709\u5F15\u7528\u5B83\u7684\u9875\u9762\u91CC\uFF0C\u9700\u8981\u5728 <code>webpack.common.js</code> \u4E2D\u7684 <code>plugins</code> \u5185\u9009\u62E9\u6240\u9700\u7684 chunk\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const path = require(&#39;path&#39;)
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)
const { srcPath, distPath } = require(&#39;./paths&#39;)

module.exports = {
  entry: {
    index: path.join(srcPath, &#39;index.js&#39;),
    other: path.join(srcPath, &#39;other.js&#39;)
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        use: [&#39;babel-loader&#39;],
        include: srcPath,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // \u591A\u5165\u53E3 - \u751F\u6210 index.html
    new HtmlWebpackPlugin({
      template: path.join(srcPath, &#39;index.html&#39;),
      filename: &#39;index.html&#39;,
      // chunks \u8868\u793A\u8BE5\u9875\u9762\u8981\u5F15\u7528\u54EA\u4E9B chunk \uFF08\u5373\u4E0A\u9762\u7684 index \u548C other\uFF09\uFF0C\u9ED8\u8BA4\u5168\u90E8\u5F15\u7528
      chunks: [&#39;index&#39;, &#39;vendor&#39;, &#39;common&#39;]  // \u8981\u8003\u8651\u4EE3\u7801\u5206\u5272
    }),
    // \u591A\u5165\u53E3 - \u751F\u6210 other.html
    new HtmlWebpackPlugin({
      template: path.join(srcPath, &#39;other.html&#39;),
      filename: &#39;other.html&#39;,
      chunks: [&#39;other&#39;, &#39;common&#39;]  // \u8003\u8651\u4EE3\u7801\u5206\u5272
    })
  ]
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76EE\u524D chunks \u4E00\u5171\u51FA\u73B0\u5728\u4E86\u4E09\u4E2A\u5730\u65B9\uFF1A</p><ul><li>common \u91CC\u7684 <code>entry</code> \u5B9A\u4E49\u4E86\u8981\u751F\u6210\u54EA\u4E9B chunk</li><li>common \u91CC\u7684 <code>plugins</code> \u4E2D\u5B9A\u4E49\u4E86\u67D0\u4E2A\u9875\u9762\u8981\u5F15\u7528\u54EA\u4E9B chunk</li><li>prod \u91CC\u7684 <code>splitChunks</code> \u4E2D\u5B9A\u4E49\u4E86\u4EE3\u7801\u5206\u5272\u6210\u54EA\u4E9B chunk</li></ul><h2 id="\u61D2\u52A0\u8F7D-\u5F02\u6B65\u52A0\u8F7D-js" tabindex="-1"><a class="header-anchor" href="#\u61D2\u52A0\u8F7D-\u5F02\u6B65\u52A0\u8F7D-js" aria-hidden="true">#</a> \u61D2\u52A0\u8F7D - \u5F02\u6B65\u52A0\u8F7D JS</h2><p>\u61D2\u52A0\u8F7D\u5C31\u662F\u5F15\u5165\u52A8\u6001\u6570\u636E\uFF0Cwebpack \u672C\u8EAB\u652F\u6301\u8FD9\u79CD\u673A\u5236\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u989D\u5916\u914D\u7F6E\uFF0C\u53EA\u9700\u8981\u501F\u52A9 <code>import()</code> \u8BED\u6CD5\u6765\u5F15\u5165 JS \u6587\u4EF6\u3002\u8FD9\u79CD\u8BED\u6CD5\u548C Vue \u548C React \u4E2D\u7684\u5F02\u6B65\u7EC4\u4EF6\u662F\u4E00\u6837\u7684\u3002</p><p>\u5982\u4E0B\u4F8B\u5B50\uFF0C\u8FD9\u6BB5\u4EE3\u7801\u5199\u5728\u67D0\u4E2A JS \u6587\u4EF6\u4E2D\uFF0C\u5C06\u5728 1.5s \u4E4B\u540E\u52A0\u8F7D\u51FA <code>dynamic-data.js</code> \u8FD9\u4E2A\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B9A\u4E49 chunk</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./dynamic-data.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>default<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u5F02\u6B65\u52A0\u8F7D\u4E5F\u4F1A\u4EA7\u51FA\u4E00\u4E2A chunk\uFF0C\u6587\u4EF6\u540D\u662F\u968F\u673A\u7684\u5B57\u7B26\u4E32\u3002</p><h2 id="\u5904\u7406-jsx" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406-jsx" aria-hidden="true">#</a> \u5904\u7406 JSX</h2>`,32),t=i("\u501F\u52A9 babel \u5373\u53EF\uFF0C"),u={href:"https://www.babeljs.cn/docs/babel-preset-react",target:"_blank",rel:"noopener noreferrer"},m=i("\u53C2\u8003\u5B98\u7F51"),h=i("\u3002"),o=e(`<p>\u9700\u8981\u5148\u5B89\u88C5 <code>@babel/preset-react</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @babel/preset-react
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u5728 <code>.babelrc</code> \u4E2D\u5199\u4E0A <code>@babel/preset-react</code>\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-react&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5904\u7406-vue" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406-vue" aria-hidden="true">#</a> \u5904\u7406 Vue</h2>`,5),p=i("\u501F\u52A9 vue-loader \u5373\u53EF\uFF0C"),g={href:"https://www.npmjs.com/package/vue-loader",target:"_blank",rel:"noopener noreferrer"},k=i("\u53C2\u8003\u5B98\u7F51"),x=i("\u3002"),w=e(`<p>\u9700\u8981\u5148\u5B89\u88C5\u4F9D\u8D56\u5305\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i vue-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u5728 <code>webpack.common.js</code> \u4E2D\u6DFB\u52A0\u5BF9\u5E94\u7684\u89C4\u5219\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const path = require(&#39;path&#39;)
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)
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
      },
      {
        test: /\\.vue/,
        use: [&#39;vue-loader&#39;],
        include: srcPath
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, &#39;index.html&#39;),
      filename: &#39;index.html&#39;
    })
  ]
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function P(f,j){const s=a("ExternalLinkIcon");return r(),v("div",null,[b,n("p",null,[t,n("a",u,[m,l(s)]),h]),o,n("p",null,[p,n("a",g,[k,l(s)]),x]),w])}var S=d(c,[["render",P],["__file","advanced-config.html.vue"]]);export{S as default};
