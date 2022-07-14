import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as t,c as o,a as n,b as i,e as p,d as l}from"./app.9986d042.js";const c={},r=p(`<h1 id="nginx-\u90E8\u7F72\u524D\u540E\u7AEF\u5206\u79BB\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#nginx-\u90E8\u7F72\u524D\u540E\u7AEF\u5206\u79BB\u9879\u76EE" aria-hidden="true">#</a> Nginx \u90E8\u7F72\u524D\u540E\u7AEF\u5206\u79BB\u9879\u76EE</h1><h2 id="\u90E8\u7F72\u76EE\u6807" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u76EE\u6807" aria-hidden="true">#</a> \u90E8\u7F72\u76EE\u6807</h2><ul><li>\u89E3\u51B3\u524D\u540E\u7AEF\u5206\u79BB\u9879\u76EE\u7684\u8DE8\u57DF\u95EE\u9898</li><li>\u524D\u7AEF\u8DEF\u7531\u91C7\u7528 HTML5 History \u6A21\u5F0F</li><li>\u914D\u7F6E\u53CD\u5411\u4EE3\u7406 Websocket</li></ul><h2 id="\u90E8\u7F72\u524D\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u524D\u51C6\u5907" aria-hidden="true">#</a> \u90E8\u7F72\u524D\u51C6\u5907</h2><ul><li>\u5C06\u524D\u7AEF\u4EE3\u7801\u6253\u5305\u6210\u4E3A\u7EAF\u9759\u6001\u6587\u4EF6\uFF0C\u4E0A\u4F20\u81F3\u670D\u52A1\u5668</li><li>\u540E\u7AEF\u4EE3\u7801\u542F\u52A8\u5728\u670D\u52A1\u5668\uFF0C\u76D1\u542C <code>30000</code> \u7AEF\u53E3</li></ul><h2 id="nginx-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx-\u914D\u7F6E" aria-hidden="true">#</a> Nginx \u914D\u7F6E</h2><ul><li><code>location</code> \u4E3A\u4EE3\u7406\u63A5\u53E3\uFF0C\u53EF\u4EE5\u8F6C\u53D1\u4EE3\u7406\u540E\u7AEF\u7684\u8BF7\u6C42\u63A5\u53E3\u57DF\u540D\u6216\u8005 ip\uFF0C\u5373\u53EF\u89E3\u51B3\u63A5\u53E3\u8DE8\u57DF\u95EE\u9898</li><li>\u5347\u7EA7 Http1.1 \u5230 Websocket \u534F\u8BAE</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream http_proxy <span class="token punctuation">{</span>
    server <span class="token number">127.0</span>.0.1:30000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

upstream ws_proxy <span class="token punctuation">{</span>
    server <span class="token number">127.0</span>.0.1:30000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    root /home/spa-project/keyL-liucongblog<span class="token punctuation">;</span>
    index index.html<span class="token punctuation">;</span>

    <span class="token comment"># \u5C06 404 \u9519\u8BEF\u9875\u9762\u91CD\u5B9A\u5411\u5230 index.html \u53EF\u4EE5\u89E3\u51B3 history \u6A21\u5F0F\u8BBF\u95EE\u4E0D\u5230\u9875\u9762\u95EE\u9898</span>
    error_page    <span class="token number">404</span>         /index.html<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location ^~ /api/ <span class="token punctuation">{</span>
        proxy_pass http://http_proxy<span class="token punctuation">;</span>
        <span class="token comment"># timeout</span>
        proxy_connect_timeout <span class="token number">75</span><span class="token punctuation">;</span>
        proxy_read_timeout <span class="token number">150</span><span class="token punctuation">;</span>
        proxy_send_timeout <span class="token number">150</span><span class="token punctuation">;</span>
        client_max_body_size 50m<span class="token punctuation">;</span>
        <span class="token comment"># redefine request header to backend</span>
        proxy_set_header  Host              <span class="token variable">$http_host</span><span class="token punctuation">;</span>
        proxy_set_header  X-Real-IP         <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header  X-Forwarded-For   <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        proxy_set_header  X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location ^~ /ws/ <span class="token punctuation">{</span>
        proxy_pass http://ws_proxy<span class="token punctuation">;</span>
        <span class="token comment"># timeout</span>
        proxy_connect_timeout <span class="token number">75</span><span class="token punctuation">;</span>
        proxy_read_timeout <span class="token number">600</span><span class="token punctuation">;</span>  <span class="token comment"># Websocket \u4FDD\u6301\u957F\u8FDE\u63A5</span>
        proxy_send_timeout <span class="token number">150</span><span class="token punctuation">;</span>
        client_max_body_size 50m<span class="token punctuation">;</span>
        <span class="token comment"># http =&gt; websocket</span>
        proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
        proxy_set_header Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>
        proxy_set_header Connection <span class="token string">&quot;Upgrade&quot;</span><span class="token punctuation">;</span>
        <span class="token comment"># redefine request header to backend</span>
        proxy_set_header  Host              <span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header  X-Real-IP         <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header  X-Forwarded-For   <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        proxy_set_header  X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>html<span class="token operator">|</span>htm<span class="token punctuation">)</span>$ <span class="token punctuation">{</span> 
        expires 1h<span class="token punctuation">;</span>
        add_header Cache-Control <span class="token string">&quot;public&quot;</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
    
    location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>css<span class="token operator">|</span>js<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>gif<span class="token operator">|</span>png<span class="token operator">|</span>ico<span class="token operator">|</span>cur<span class="token operator">|</span>gz<span class="token operator">|</span>svg<span class="token operator">|</span>svgz<span class="token operator">|</span>map<span class="token operator">|</span>mp4<span class="token operator">|</span>ogg<span class="token operator">|</span>ogv<span class="token operator">|</span>webm<span class="token operator">|</span>htc<span class="token punctuation">)</span>$ <span class="token punctuation">{</span> 
        expires 24h<span class="token punctuation">;</span>
        access_log off<span class="token punctuation">;</span> 
        add_header Cache-Control <span class="token string">&quot;public&quot;</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
    
    access_log  /var/log/nginx/access/keyL-liucongblog.log<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90E8\u5206\u914D\u7F6E\u9879\u89E3\u6790\uFF1A</p><ul><li><code>proxy_connect_timeout</code>\uFF1A\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u53D1\u8D77\u63E1\u624B\u7B49\u5019\u54CD\u5E94\u8D85\u65F6\u65F6\u95F4\uFF08\u9ED8\u8BA4\u4E3A 60 \u79D2\uFF0C\u5B98\u65B9\u63A8\u8350\u6700\u957F\u4E0D\u8981\u8D85\u8FC7 75 \u79D2\uFF09</li><li><code>proxy_read_timeout</code>\uFF1A\u8FDE\u63A5\u6210\u529F\u540E\uFF0CNginx \u80FD\u591F\u7B49\u5F85\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u7684\u65F6\u95F4\uFF08\u9ED8\u8BA4 60 \u79D2\uFF09</li><li><code>proxy_send_timeout</code>\uFF1A\u540E\u7AEF\u670D\u52A1\u5668\u6570\u636E\u56DE\u4F20\u65F6\u95F4\uFF0C\u5C31\u662F\u5728\u89C4\u5B9A\u65F6\u95F4\u4E4B\u5185\u540E\u7AEF\u670D\u52A1\u5668\u5FC5\u987B\u4F20\u5B8C\u6240\u6709\u7684\u6570\u636E\uFF08\u9ED8\u8BA4 60 \u79D2\uFF09</li><li><code>client_max_body_size</code>\uFF1ANginx \u5BF9\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u7684\u9650\u5236\uFF08\u9ED8\u8BA4\u662F 1M\uFF09</li><li><code>proxy_set_header</code>\uFF1A\u7528\u6765\u91CD\u5B9A\u4E49\u53D1\u5F80\u540E\u7AEF\u670D\u52A1\u5668\u7684\u8BF7\u6C42\u5934 <ul><li><code>Host $http_host;</code>\uFF1A\u5C06\u539F http \u8BF7\u6C42 Header \u4E2D\u7684 Host \u5B57\u6BB5\u4E5F\u653E\u5230\u8F6C\u53D1\u7684\u8BF7\u6C42</li><li><code>X-Real-IP $remote_addr;</code>\uFF1A\u524D\u4E00\u8282\u70B9\u7684 IP\uFF08\u5E76\u4E0D\u4E00\u5B9A\u662F\u7528\u6237\u7684\u771F\u5B9E IP\uFF09</li><li><code>X-Forwarded-For $proxy_add_x_forwarded_for;</code>\uFF1A\u524D\u4E00\u8282\u70B9\u7684 X-Forwarded-For \u7684\u503C</li></ul><blockquote><p>X-Real-IP \u4E00\u822C\u662F\u6700\u540E\u4E00\u7EA7\u4EE3\u7406\u5C06\u4E0A\u6E38 IP \u5730\u5740\u6DFB\u52A0\u5230\u8BE5\u5934\u4E2D\uFF0CX-Forwarded-For \u662F\u591A\u4E2A IP \u5730\u5740\uFF0C\u800C X-Real-IP \u662F\u4E00\u4E2A\u3002</p></blockquote><ul><li><code>X-Forwarded-Proto $scheme;</code>\uFF1A\u62FF\u5230\u6765\u6E90\u7684\u4F20\u8F93\u534F\u8BAE\uFF08HTTP \u6216 HTTPS\uFF09</li></ul></li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,11),d={href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_set_header",title:"Module ngx_http_proxy_module\uFF1Aproxy_set_header",target:"_blank",rel:"noopener noreferrer"},u=l("Module ngx_http_proxy_module\uFF1Aproxy_set_header");function v(m,k){const s=e("ExternalLinkIcon");return t(),o("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[u,i(s)])])])])}var h=a(c,[["render",v],["__file","practice-in-front-end-separation-project.html.vue"]]);export{h as default};
