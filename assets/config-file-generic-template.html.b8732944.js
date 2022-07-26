import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.5d4aa427.js";const i={},l=e(`<h1 id="ngixn-\u914D\u7F6E\u6587\u4EF6\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#ngixn-\u914D\u7F6E\u6587\u4EF6\u6A21\u677F" aria-hidden="true">#</a> Ngixn \u914D\u7F6E\u6587\u4EF6\u6A21\u677F</h1><p>\u672C\u6587\u57FA\u4E8E Nginx 1.18.0\uFF0C\u6574\u7406\u4E00\u4EFD\u914D\u7F6E\u6587\u4EF6 nginx.conf \u7684\u901A\u7528\u6A21\u677F\u3002</p><h2 id="\u6A21\u5757\u62C6\u5206" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u62C6\u5206" aria-hidden="true">#</a> \u6A21\u5757\u62C6\u5206</h2><p>\u5F53\u9879\u76EE\u6216\u4E1A\u52A1\u8D8A\u6765\u8D8A\u591A\u7684\u65F6\u5019\uFF0CNginx \u7684\u914D\u7F6E\u6587\u4EF6 nginx.conf \u4F1A\u8D8A\u6765\u8D8A\u5927\u548C\u590D\u6742\uFF0C\u4E0D\u4FBF\u4E8E\u7BA1\u7406\uFF0C\u6240\u4EE5\u9700\u8981\u62C6\u5206\u51FA\u591A\u4E2A\u5B50\u914D\u7F6E\u6587\u4EF6\u3002</p><p>\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5982\u679C\u4F60\u662F root \u8D26\u6237\uFF0C\u76F4\u63A5\u6267\u884C\u5373\u53EF\uFF0C\u4E0D\u662F\u7684\u8BDD\u524D\u9762\u52A0 <code>sudo</code> \u83B7\u53D6\u6743\u9650\u3002</p><p>\u9996\u5148\u5EFA\u7ACB\u5B50\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx/conf
<span class="token function">mkdir</span> vhosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5728 nginx.conf \u4E2D\u4F7F\u7528 <code>include</code> \u5F15\u5165\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    include /usr/local/nginx/conf/vhosts/*.conf<span class="token punctuation">;</span>   <span class="token comment"># *.conf \u4EE3\u8868\u6240\u6709 server \u914D\u7F6E\u6587\u4EF6</span>
    include /usr/local/nginx/conf/vhosts/*.proxy<span class="token punctuation">;</span>  <span class="token comment"># *.proxy \u4EE3\u8868\u6240\u6709\u505A\u53CD\u5411\u4EE3\u7406\u7684 server\uFF08\u770B\u60C5\u51B5\u53EF\u9009\uFF09</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u628A server \u6A21\u5757\u79FB\u5165\u5B50\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># web.conf</span>
server<span class="token punctuation">{</span>   
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name localhost<span class="token punctuation">;</span>
    <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

<span class="token comment"># api.conf</span>
server<span class="token punctuation">{</span>   
    listen <span class="token number">81</span><span class="token punctuation">;</span>
    server_name localhost<span class="token punctuation">;</span>
    <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\u7684 Nginx \u6587\u4EF6\u76EE\u5F55\u7ED3\u6784\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u251C\u2500\u2500 nginx
    \u2502\u2500\u2500 html
    \u2502\u2500\u2500 logs
    \u2502\u2500\u2500 sbin
    \u2502\u2500\u2500 <span class="token punctuation">..</span>.
    \u2514\u2500\u2500 conf
        \u251C\u2500\u2500 <span class="token punctuation">..</span>.
        \u251C\u2500\u2500 nginx.conf         <span class="token comment"># \u4E3B\u914D\u7F6E\u6587\u4EF6</span>
        \u2514\u2500\u2500 vhosts             <span class="token comment"># \u5B50\u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u5F55</span>
            \u251C\u2500\u2500 web.conf       <span class="token comment"># \u5B50\u914D\u7F6E\u6587\u4EF6 1</span>
            \u2514\u2500\u2500 api.conf       <span class="token comment"># \u5B50\u914D\u7F6E\u6587\u4EF6 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u601D\u8DEF\u5C31\u662F\u4E0A\u9762\u4ECB\u7ECD\u7684\u8FD9\u6837\uFF0C\u4E0B\u9762\u662F\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\u7684\u901A\u7528\u6A21\u677F\u3002</p><h2 id="\u4E3B\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u4E3B\u914D\u7F6E\u6587\u4EF6</h2><p>\u6211\u5728\u8FD9\u4EFD\u4E3B\u914D\u7F6E\u6587\u4EF6\u4E2D\u4EC5\u8BBE\u7F6E\u4E86\u51E0\u4E2A\u6838\u5FC3\u53C2\u6570\uFF0C\u5982\u679C\u6709\u7279\u5B9A\u9700\u6C42\u53EF\u81EA\u884C\u5B9A\u5236\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user  nginx nginx<span class="token punctuation">;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

error_log  /var/log/nginx/error.log crit<span class="token punctuation">;</span>

pid        /var/run/nginx.pid<span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    charset utf-8<span class="token punctuation">;</span>

    access_log  off<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    tcp_nopush     on<span class="token punctuation">;</span>
    tcp_nodelay on<span class="token punctuation">;</span>

    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    fastcgi_connect_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_send_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_read_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_buffer_size 64k<span class="token punctuation">;</span>
    fastcgi_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>
    fastcgi_busy_buffers_size 128k<span class="token punctuation">;</span>
    fastcgi_temp_file_write_size 128k<span class="token punctuation">;</span>

    <span class="token function">gzip</span> on<span class="token punctuation">;</span>
    gzip_min_length 1k<span class="token punctuation">;</span>
    gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span>
    gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span>
    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/bmp application/x-bmp image/x-ms-bmp application/vnd.ms-fontobject font/ttf font/opentype font/x-woff<span class="token punctuation">;</span>
    gzip_vary on<span class="token punctuation">;</span>
    <span class="token comment"># limit_zone crawler $binary_remote_addr 10m;    # \u5F00\u542F\u9650\u5236 IP \u8FDE\u63A5\u6570\u7684\u65F6\u5019\u9700\u8981\u4F7F\u7528</span>

    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    include /usr/local/nginx/conf/vhosts/*.conf<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B50\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B50\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u5B50\u914D\u7F6E\u6587\u4EF6</h2><p>\u9996\u5148\u522B\u5FD8\u4E86\u521B\u5EFA\u6587\u4EF6\u5939\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx/conf
<span class="token function">mkdir</span> vhosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8BE5\u6587\u4EF6\u5939\u4E0B\u6240\u6709\u4EE5 <code>.conf</code> \u7ED3\u5C3E\u7684\u6587\u4EF6\u90FD\u662F\u5B50\u914D\u7F6E\u6587\u4EF6\uFF0C\u5728\u4E3B\u914D\u7F6E\u6587\u4EF6\u7684\u672B\u5C3E\u88AB <code>include</code> \u5F15\u5165\u4E86\u3002</p><p>\u8FD9\u91CC\u53EA\u505A\u4E00\u4EFD\u6700\u57FA\u7840\u7684\u5B50\u914D\u7F6E\u6587\u4EF6\uFF08server \u90E8\u5206\uFF09\u6A21\u677F\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u9759\u6001\u7F51\u7AD9\u7684\u90E8\u7F72\u914D\u7F6E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  www.Hello W.cn Hello W.cn<span class="token punctuation">;</span>

    root /sites/Hello W<span class="token punctuation">;</span>
    index index.html<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>html<span class="token operator">|</span>htm<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
        expires 24h<span class="token punctuation">;</span>
        add_header Cache-Control <span class="token string">&quot;public&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>css<span class="token operator">|</span>js<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>gif<span class="token operator">|</span>png<span class="token operator">|</span>ico<span class="token operator">|</span>cur<span class="token operator">|</span>gz<span class="token operator">|</span>svg<span class="token operator">|</span>svgz<span class="token operator">|</span>map<span class="token operator">|</span>mp4<span class="token operator">|</span>ogg<span class="token operator">|</span>ogv<span class="token operator">|</span>webm<span class="token operator">|</span>htc<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
        expires 24h<span class="token punctuation">;</span>
        access_log off<span class="token punctuation">;</span>
        add_header Cache-Control <span class="token string">&quot;public&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    access_log  /var/log/nginx/access/Hello W.log<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u914D\u7F6E\u6587\u4EF6\u6211\u4EEC\u6307\u5B9A\u4E86\u8FD9\u4E2A\u5B50\u6A21\u5757\u7684\u65E5\u5FD7\u8F93\u51FA\u8DEF\u5F84\uFF0C\u6240\u4EE5\u9700\u8981\u521B\u5EFA\u8BE5\u8DEF\u5F84\u7684\u6587\u4EF6\u5939\uFF0C\u5426\u5219\u5728\u5199\u5165\u65E5\u5FD7\u65F6\u4F1A\u56E0\u6587\u4EF6\u5939\u4E0D\u5B58\u5728\u800C\u62A5\u9519\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /var/log/nginx/access/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u68C0\u67E5 Nginx \u914D\u7F6E\u6587\u4EF6\u7684\u6B63\u786E\u6027\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/usr/local/nginx/sbin/nginx -t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6700\u540E\u91CD\u65B0\u52A0\u8F7D Nginx \u914D\u7F6E\u5373\u53EF\u4E0A\u7EBF\u8BE5\u9759\u6001\u7F51\u7AD9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u679C\u5DF2\u5C06 Nginx \u52A0\u5165\u5F00\u673A\u81EA\u542F\uFF08\u6709 Nginx \u5F00\u673A\u81EA\u542F\u811A\u672C\uFF09</span>
/etc/init.d/nginx reload

<span class="token comment"># \u5982\u679C\u672A\u5C06 Nginx \u52A0\u5165\u5F00\u673A\u81EA\u542F</span>
/usr/local/nginx/sbin/nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u5982\u4F55\u914D\u7F6E\u6765\u5B9E\u73B0\u66F4\u591A\u5F3A\u5927\u7684\u529F\u80FD\uFF0C\u4F1A\u5728\u540E\u9762\u7AE0\u8282\u4E00\u4E00\u5C55\u5F00\u4ECB\u7ECD\u3002</p>`,30),c=[l];function t(p,o){return s(),a("div",null,c)}var r=n(i,[["render",t],["__file","config-file-generic-template.html.vue"]]);export{r as default};
