import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as i,e}from"./app.924bc22b.js";const a={},l=e(`<h1 id="nginx-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#nginx-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Nginx \u5E38\u7528\u547D\u4EE4</h1><h2 id="nginx-\u64CD\u4F5C\u7684\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#nginx-\u64CD\u4F5C\u7684\u547D\u4EE4" aria-hidden="true">#</a> Nginx \u64CD\u4F5C\u7684\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B Nginx \u7248\u672C</span>
/usr/local/nginx/sbin/nginx -v

<span class="token comment"># \u68C0\u67E5\u914D\u7F6E\u6587\u4EF6 ngnix.conf \u7684\u6B63\u786E\u6027</span>
/usr/local/nginx/sbin/nginx -t

<span class="token comment"># \u542F\u52A8 Nginx \u670D\u52A1</span>
/usr/local/nginx/sbin/nginx

<span class="token comment"># \u542F\u52A8 Nginx \u670D\u52A1\uFF0C-c \u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84</span>
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf

<span class="token comment"># \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E</span>
/usr/local/nginx/sbin/nginx -s reload

<span class="token comment"># \u505C\u6B62 Nginx \u670D\u52A1\uFF08\u5FEB\u901F\u5173\u95ED\uFF0C\u4E0D\u7BA1\u6709\u6CA1\u6709\u6B63\u5728\u5904\u7406\u7684\u8BF7\u6C42\uFF09</span>
/usr/local/nginx/sbin/nginx -s stop

<span class="token comment"># \u5B89\u5168\u9000\u51FA Nginx \u670D\u52A1\uFF08\u5728\u9000\u51FA\u524D\u4F1A\u5B8C\u6210\u5DF2\u7ECF\u63A5\u53D7\u7684\u8FDE\u63A5\u8BF7\u6C42\uFF0C\u6BD4\u8F83\u4F18\u96C5\uFF09</span>
/usr/local/nginx/sbin/nginx -s quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux-\u68C0\u67E5\u7684\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#linux-\u68C0\u67E5\u7684\u547D\u4EE4" aria-hidden="true">#</a> Linux \u68C0\u67E5\u7684\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B Nginx \u8FDB\u7A0B</span>
<span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> nginx

<span class="token comment"># \u68C0\u67E5 Nginx \u542F\u52A8\u7684\u7AEF\u53E3</span>
<span class="token function">netstat</span> -lntup <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u670D\u52A1\u5668\u9632\u706B\u5899\u76F8\u5173\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u9632\u706B\u5899\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a> \u670D\u52A1\u5668\u9632\u706B\u5899\u76F8\u5173\u547D\u4EE4</h2><p>\u5982\u679C Nginx \u542F\u52A8\u6210\u529F\u540E\uFF0C\u4ECE\u6D4F\u89C8\u5668\u8BBF\u95EE\u8FD8\u662F\u8FDE\u63A5\u4E0D\u4E0A\uFF0C\u6309\u5982\u4E0B\u6B65\u9AA4\u6392\u67E5\uFF1A</p><ul><li>\u68C0\u67E5\u963F\u91CC\u4E91\u5B89\u5168\u7EC4\u662F\u5426\u5F00\u653E\u7AEF\u53E3\uFF08\u901A\u8FC7\u963F\u91CC\u4E91\u540E\u53F0\uFF09</li><li>\u68C0\u67E5\u817E\u8BAF\u4E91\u5B9E\u4F8B\u7BA1\u7406\u9632\u706B\u5899\u662F\u5426\u5F00\u653E\u7AEF\u53E3\uFF08\u901A\u8FC7\u817E\u8BAF\u4E91\u540E\u53F0\uFF09</li><li>\u670D\u52A1\u5668\u9632\u706B\u5899\u662F\u5426\u5F00\u653E\u7AEF\u53E3</li></ul>`,8),c=[l];function d(r,o){return s(),i("div",null,c)}var u=n(a,[["render",d],["__file","common-commands.html.vue"]]);export{u as default};
