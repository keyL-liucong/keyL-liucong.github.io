import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as c,c as p,a as s,b as e,e as i,d as n}from"./app.a58ccdd2.js";const o={},r=i(`<h1 id="nginx-\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#nginx-\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> Nginx \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F</h1><p>\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u5982\u679C\u6211\u4EEC\u7684\u670D\u52A1\u5668\u610F\u5916\u91CD\u542F\uFF0C\u6B64\u65F6\u8981\u662F Nginx \u6CA1\u6709\u968F\u670D\u52A1\u5668\u542F\u52A8\u8D77\u6765\uFF0C\u6211\u4EEC\u7684 Web \u7AD9\u70B9\u5C31\u4F1A\u662F\u65E0\u5E94\u7B54\u7684\u72B6\u6001\uFF0C\u8FD9\u4F1A\u7ED9\u6211\u4EEC\u5E26\u6765\u4E0D\u540C\u7A0B\u5EA6\u635F\u5931\u3002</p><p>\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u8BBE\u7F6E Nginx \u5F00\u673A\u81EA\u542F\u3002</p><h2 id="ubuntu-\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#ubuntu-\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> Ubuntu \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F</h2><blockquote><p>\u4EE5\u4E0B\u6240\u6709\u547D\u4EE4\uFF0C\u5982\u679C\u4F60\u662F root \u8D26\u6237\uFF0C\u76F4\u63A5\u6267\u884C\u5373\u53EF\uFF0C\u4E0D\u662F\u7684\u8BDD\u524D\u9762\u52A0 <code>sudo</code> \u83B7\u53D6\u6743\u9650\u3002</p></blockquote><p>\u5728 Ubuntu \u548C Debian \u4E0B\uFF0C\u6211\u4EEC\u901A\u8FC7 update-rc.d \u8BBE\u7F6E Nginx \u7684\u5F00\u673A\u542F\u52A8\u3002</p><p>\u7ECF\u5B9E\u9A8C\uFF0C\u4EE5\u4E0B\u6B65\u9AA4\u9002\u7528\u4E8E Ubuntu 16.04\u300118.04\u300120.04 \u7248\u672C\u7684\u7CFB\u7EDF\u3002</p><h3 id="\u521B\u5EFA\u542F\u52A8\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u542F\u52A8\u811A\u672C" aria-hidden="true">#</a> \u521B\u5EFA\u542F\u52A8\u811A\u672C</h3><p>\u5728 Linux \u7CFB\u7EDF\u7684 <code>/etc/init.d/</code> \u76EE\u5F55\u4E0B\u521B\u5EFA <code>nginx</code> \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/init.d/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F80\u8BE5\u6587\u4EF6\u5185\u5199\u5165\u4EE5\u4E0B\u811A\u672C\u5185\u5BB9\uFF08\u8BE5\u811A\u672C\u5185\u5BB9\u6765\u81EA\u7F51\u7EDC\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#! /bin/sh</span>
<span class="token comment"># chkconfig: 2345 55 25</span>
<span class="token comment"># Description: Startup script for nginx webserver on Debian. Place in /etc/init.d and</span>
<span class="token comment"># run &#39;update-rc.d -f nginx defaults&#39;, or use the appropriate command on your</span>
<span class="token comment"># distro. For CentOS/Redhat run: &#39;chkconfig --add nginx&#39;</span>

<span class="token comment">### BEGIN INIT INFO</span>
<span class="token comment"># Provides:          nginx</span>
<span class="token comment"># Required-Start:    $all</span>
<span class="token comment"># Required-Stop:     $all</span>
<span class="token comment"># Default-Start:     2 3 4 5</span>
<span class="token comment"># Default-Stop:      0 1 6</span>
<span class="token comment"># Short-Description: starts the nginx web server</span>
<span class="token comment"># Description:       starts nginx using start-stop-daemon</span>
<span class="token comment">### END INIT INFO</span>

<span class="token comment"># Author:   licess</span>
<span class="token comment"># website:  http://lnmp.org</span>

<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
<span class="token assign-left variable">NAME</span><span class="token operator">=</span>nginx
<span class="token assign-left variable">NGINX_BIN</span><span class="token operator">=</span>/usr/local/nginx/sbin/<span class="token variable">$NAME</span>
<span class="token assign-left variable">CONFIGFILE</span><span class="token operator">=</span>/usr/local/nginx/conf/<span class="token variable">$NAME</span>.conf
<span class="token assign-left variable">PIDFILE</span><span class="token operator">=</span>/usr/local/nginx/logs/<span class="token variable">$NAME</span>.pid

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    start<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Starting <span class="token variable">$NAME</span>... &quot;</span>

        <span class="token keyword">if</span> <span class="token function">netstat</span> -tnpl <span class="token operator">|</span> <span class="token function">grep</span> -q nginx<span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$NAME</span> (pid <span class="token variable"><span class="token variable">\`</span>pidof $NAME<span class="token variable">\`</span></span>) already running.&quot;</span>
            <span class="token builtin class-name">exit</span> <span class="token number">1</span>
        <span class="token keyword">fi</span>

        <span class="token variable">$NGINX_BIN</span> -c <span class="token variable">$CONFIGFILE</span>

        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot; failed&quot;</span>
            <span class="token builtin class-name">exit</span> <span class="token number">1</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot; done&quot;</span>
        <span class="token keyword">fi</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    stop<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Stoping <span class="token variable">$NAME</span>... &quot;</span>

        <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">netstat</span> -tnpl <span class="token operator">|</span> <span class="token function">grep</span> -q nginx<span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$NAME</span> is not running.&quot;</span>
            <span class="token builtin class-name">exit</span> <span class="token number">1</span>
        <span class="token keyword">fi</span>

        <span class="token variable">$NGINX_BIN</span> -s stop

        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot; failed. Use force-quit&quot;</span>
            <span class="token builtin class-name">exit</span> <span class="token number">1</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot; done&quot;</span>
        <span class="token keyword">fi</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    status<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token function">netstat</span> -tnpl <span class="token operator">|</span> <span class="token function">grep</span> -q nginx<span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token assign-left variable">PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>pidof nginx<span class="token variable">\`</span></span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$NAME</span> (pid <span class="token variable">$PID</span>) is running...&quot;</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$NAME</span> is stopped&quot;</span>
            <span class="token builtin class-name">exit</span> <span class="token number">0</span>
        <span class="token keyword">fi</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    force-quit<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Terminating <span class="token variable">$NAME</span>... &quot;</span>

        <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">netstat</span> -tnpl <span class="token operator">|</span> <span class="token function">grep</span> -q nginx<span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$NAME</span> is not running.&quot;</span>
            <span class="token builtin class-name">exit</span> <span class="token number">1</span>
        <span class="token keyword">fi</span>

        <span class="token function">kill</span> <span class="token variable"><span class="token variable">\`</span>pidof $NAME<span class="token variable">\`</span></span>

        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot; failed&quot;</span>
            <span class="token builtin class-name">exit</span> <span class="token number">1</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot; done&quot;</span>
        <span class="token keyword">fi</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    restart<span class="token punctuation">)</span>
        <span class="token variable">$0</span> stop
        <span class="token function">sleep</span> <span class="token number">1</span>
        <span class="token variable">$0</span> start
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    reload<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Reload service <span class="token variable">$NAME</span>... &quot;</span>

        <span class="token keyword">if</span> <span class="token function">netstat</span> -tnpl <span class="token operator">|</span> <span class="token function">grep</span> -q nginx<span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token variable">$NGINX_BIN</span> -s reload
            <span class="token builtin class-name">echo</span> <span class="token string">&quot; done&quot;</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$NAME</span> is not running, can&#39;t reload.&quot;</span>
            <span class="token builtin class-name">exit</span> <span class="token number">1</span>
        <span class="token keyword">fi</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    configtest<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Test <span class="token variable">$NAME</span> configure files... &quot;</span>

        <span class="token variable">$NGINX_BIN</span> -t
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable">$0</span> {start|stop|force-quit|restart|reload|status|configtest}&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>

<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u90E8\u5206\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u90E8\u5206\u53C2\u6570" aria-hidden="true">#</a> \u4FEE\u6539\u90E8\u5206\u53C2\u6570</h3><p>\u5982\u679C\u4F60\u7684 Nginx \u662F\u901A\u8FC7\u7F16\u8BD1\u5B89\u88C5\u7684\uFF0C\u5219\u9700\u8981\u6839\u636E\u5B9E\u9645\u5B89\u88C5\u65F6\u7684\u8BBE\u7F6E\uFF0C\u4FEE\u6539\u542F\u52A8\u811A\u672C\u4E2D\u7684\u51E0\u4E2A\u53C2\u6570\uFF08\u5927\u7EA6\u5728\u7B2C\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u679C\u662F\u6309\u7167\u6211\u65B9\u5F0F\u7F16\u8BD1\u5B89\u88C5\u7684\uFF0C\u5219\u4E0D\u7528\u4FEE\u6539\uFF0C\u9ED8\u8BA4\u53C2\u6570\u503C\u5C31\u662F\u6211\u7684\u5B9E\u9645\u5B89\u88C5\u4F4D\u7F6E</span>
<span class="token assign-left variable">NGINX_BIN</span><span class="token operator">=</span>/usr/local/nginx/sbin/<span class="token variable">$NAME</span>
<span class="token assign-left variable">CONFIGFILE</span><span class="token operator">=</span>/usr/local/nginx/conf/<span class="token variable">$NAME</span>.conf
<span class="token assign-left variable">PIDFILE</span><span class="token operator">=</span>/usr/local/nginx/logs/<span class="token variable">$NAME</span>.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u6267\u884C\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6267\u884C\u6743\u9650" aria-hidden="true">#</a> \u6DFB\u52A0\u6267\u884C\u6743\u9650</h3><p>\u4E0A\u8FF0\u811A\u672C\u4FDD\u5B58\u4E3A <code>/etc/init.d/nginx</code>\uFF0C\u7136\u540E\u8BBE\u7F6E\u6587\u4EF6\u7684\u6267\u884C\u6743\u9650\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7ED9\u6240\u6709\u7528\u6237\u7ED9\u4E88\u53EF\u6267\u884C\u6743\u9650</span>
<span class="token function">chmod</span> a+x /etc/init.d/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64\u5C31\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u6307\u4EE4\u63A7\u5236 Nginx \u7684\u542F\u52A8\u3001\u505C\u6B62\u548C\u91CD\u65B0\u52A0\u8F7D\u4E86\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8</span>
/etc/init.d/nginx start

<span class="token comment"># \u505C\u6B62</span>
/etc/init.d/nginx stop

<span class="token comment"># \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E</span>
/etc/init.d/nginx reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u81F3\u5F00\u673A\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u81F3\u5F00\u673A\u81EA\u542F\u52A8" aria-hidden="true">#</a> \u6DFB\u52A0\u81F3\u5F00\u673A\u81EA\u542F\u52A8</h3><p>\u73B0\u5728\u5C06 Nginx \u670D\u52A1\u52A0\u5165\u5F00\u673A\u81EA\u542F\u52A8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</span>
<span class="token function">sudo</span> update-rc.d nginx defaults

<span class="token comment"># \u542F\u52A8 Nginx</span>
<span class="token function">sudo</span> /etc/init.d/nginx start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\u4E86\uFF0C\u5982\u679C\u9700\u8981\u5173\u95ED\u5F00\u673A\u542F\u52A8\u7684\u529F\u80FD\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u53D6\u6D88\u5F00\u673A\u542F\u52A8</span>
<span class="token function">sudo</span> update-rc.d -f nginx remove
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="centos-6-x-\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#centos-6-x-\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> CentOS 6.x \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F</h2><blockquote><p>\u4EE5\u4E0B\u6240\u6709\u547D\u4EE4\uFF0C\u5982\u679C\u4F60\u662F root \u8D26\u6237\uFF0C\u76F4\u63A5\u6267\u884C\u5373\u53EF\uFF0C\u4E0D\u662F\u7684\u8BDD\u524D\u9762\u52A0 <code>sudo</code> \u83B7\u53D6\u6743\u9650\u3002</p></blockquote><h3 id="\u521B\u5EFA\u542F\u52A8\u811A\u672C-1" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u542F\u52A8\u811A\u672C-1" aria-hidden="true">#</a> \u521B\u5EFA\u542F\u52A8\u811A\u672C</h3><p>\u5728 Linux \u7CFB\u7EDF\u7684 <code>/etc/init.d/</code> \u76EE\u5F55\u4E0B\u521B\u5EFA <code>nginx</code> \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/init.d/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30),d=n("\u5F80\u8BE5\u6587\u4EF6\u5185\u5199\u5165\u4EE5\u4E0B\u811A\u672C\u5185\u5BB9\uFF08\u8BE5\u811A\u672C\u5185\u5BB9\u6765\u81EA"),u={href:"https://www.nginx.com/resources/wiki/start/topics/examples/redhatnginxinit/",target:"_blank",rel:"noopener noreferrer"},v=n("\u5B98\u65B9\u7F51\u7AD9 - Red Hat NGINX Init Script"),m=n("\uFF09\uFF1A"),b=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token comment">#</span>
<span class="token comment"># nginx - this script starts and stops the nginx daemon</span>
<span class="token comment">#</span>
<span class="token comment"># chkconfig:   - 85 15</span>
<span class="token comment"># description:  NGINX is an HTTP(S) server, HTTP(S) reverse \\</span>
<span class="token comment">#               proxy and IMAP/POP3 proxy server</span>
<span class="token comment"># processname: nginx</span>
<span class="token comment"># config:      /etc/nginx/nginx.conf</span>
<span class="token comment"># config:      /etc/sysconfig/nginx</span>
<span class="token comment"># pidfile:     /var/run/nginx.pid</span>

<span class="token comment"># Source function library.</span>
<span class="token builtin class-name">.</span> /etc/rc.d/init.d/functions

<span class="token comment"># Source networking configuration.</span>
<span class="token builtin class-name">.</span> /etc/sysconfig/network

<span class="token comment"># Check that networking is up.</span>
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$NETWORKING</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;no&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token assign-left variable">nginx</span><span class="token operator">=</span><span class="token string">&quot;/usr/sbin/nginx&quot;</span>
<span class="token assign-left variable">prog</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $nginx<span class="token variable">)</span></span>

<span class="token assign-left variable">NGINX_CONF_FILE</span><span class="token operator">=</span><span class="token string">&quot;/etc/nginx/nginx.conf&quot;</span>

<span class="token punctuation">[</span> -f /etc/sysconfig/nginx <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> /etc/sysconfig/nginx

<span class="token assign-left variable">lockfile</span><span class="token operator">=</span>/var/lock/subsys/nginx

<span class="token function-name function">make_dirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment"># make required directories</span>
   <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>$nginx -V <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;configure arguments:.*--user=&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/[^*]*--user=\\([^ ]*\\).*/\\1/g&#39;</span> -<span class="token variable">\`</span></span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">$user</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> $user /etc/passwd<span class="token variable">\`</span></span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
         <span class="token function">useradd</span> -M -s /bin/nologin <span class="token variable">$user</span>
      <span class="token keyword">fi</span>
      <span class="token assign-left variable">options</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>$nginx -V <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;configure arguments:&#39;</span><span class="token variable">\`</span></span>
      <span class="token keyword">for</span> <span class="token for-or-select variable">opt</span> <span class="token keyword">in</span> <span class="token variable">$options</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
          <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $opt <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;.*-temp-path&#39;</span><span class="token variable">\`</span></span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
              <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $opt <span class="token operator">|</span> <span class="token function">cut</span> -d <span class="token string">&quot;=&quot;</span> -f <span class="token number">2</span><span class="token variable">\`</span></span>
              <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token string">&quot;<span class="token variable">$value</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                  <span class="token comment"># echo &quot;creating&quot; $value</span>
                  <span class="token function">mkdir</span> -p <span class="token variable">$value</span> <span class="token operator">&amp;&amp;</span> <span class="token function">chown</span> -R <span class="token variable">$user</span> <span class="token variable">$value</span>
              <span class="token keyword">fi</span>
          <span class="token keyword">fi</span>
       <span class="token keyword">done</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span> -x <span class="token variable">$nginx</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">5</span>
    <span class="token punctuation">[</span> -f <span class="token variable">$NGINX_CONF_FILE</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">6</span>
    make_dirs
    <span class="token builtin class-name">echo</span> -n $<span class="token string">&quot;Starting <span class="token variable">$prog</span>: &quot;</span>
    daemon <span class="token variable">$nginx</span> -c <span class="token variable">$NGINX_CONF_FILE</span>
    <span class="token assign-left variable">retval</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$retval</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> <span class="token variable">$lockfile</span>
    <span class="token builtin class-name">return</span> <span class="token variable">$retval</span>
<span class="token punctuation">}</span>

<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> -n $<span class="token string">&quot;Stopping <span class="token variable">$prog</span>: &quot;</span>
    killproc <span class="token variable">$prog</span> -QUIT
    <span class="token assign-left variable">retval</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$retval</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> -f <span class="token variable">$lockfile</span>
    <span class="token builtin class-name">return</span> <span class="token variable">$retval</span>
<span class="token punctuation">}</span>

<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    configtest <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$?</span>
    stop
    <span class="token function">sleep</span> <span class="token number">1</span>
    start
<span class="token punctuation">}</span>

<span class="token function-name function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    configtest <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span> -n $<span class="token string">&quot;Reloading <span class="token variable">$prog</span>: &quot;</span>
    killproc <span class="token variable">$prog</span> -HUP
    <span class="token assign-left variable">retval</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
<span class="token punctuation">}</span>

<span class="token function-name function">force_reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    restart
<span class="token punctuation">}</span>

<span class="token function-name function">configtest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$nginx</span> -t -c <span class="token variable">$NGINX_CONF_FILE</span>
<span class="token punctuation">}</span>

<span class="token function-name function">rh_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    status <span class="token variable">$prog</span>
<span class="token punctuation">}</span>

<span class="token function-name function">rh_status_q</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rh_status <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token punctuation">}</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    start<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    stop<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    restart<span class="token operator">|</span>configtest<span class="token punctuation">)</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    reload<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">7</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    force-reload<span class="token punctuation">)</span>
        force_reload
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    status<span class="token punctuation">)</span>
        rh_status
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    condrestart<span class="token operator">|</span>try-restart<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> $<span class="token string">&quot;Usage: <span class="token variable">$0</span> {start|stop|status|restart|condrestart|try-restart|reload|force-reload|configtest}&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">2</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u90E8\u5206\u53C2\u6570-1" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u90E8\u5206\u53C2\u6570-1" aria-hidden="true">#</a> \u4FEE\u6539\u90E8\u5206\u53C2\u6570</h3><p>\u5982\u679C\u4F60\u7684 Nginx \u662F\u901A\u8FC7\u7F16\u8BD1\u5B89\u88C5\u7684\uFF0C\u5219\u9700\u8981\u6839\u636E\u5B9E\u9645\u5B89\u88C5\u65F6\u7684\u8BBE\u7F6E\uFF0C\u4FEE\u6539\u542F\u52A8\u811A\u672C\u4E2D\u7684\u4E24\u4E2A\u53C2\u6570\uFF08\u5927\u7EA6\u5728\u7B2C 22 \u884C\u548C\u7B2C 25 \u884C\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4FEE\u6539\u6210 Nginx \u6267\u884C\u7A0B\u5E8F\u7684\u8DEF\u5F84\uFF0C\u4F8B\u5982\u6211\u7684\u4E00\u822C\u662F\uFF1A/usr/local/nginx/sbin/nginx</span>
<span class="token assign-left variable">nginx</span><span class="token operator">=</span><span class="token string">&quot;/usr/sbin/nginx&quot;</span>

<span class="token comment"># \u4FEE\u6539\u6210\u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u4F8B\u5982\u6211\u7684\u4E00\u822C\u662F\uFF1A/usr/local/nginx/conf/nginx.conf</span>
<span class="token assign-left variable">NGINX_CONF_FILE</span><span class="token operator">=</span><span class="token string">&quot;/etc/nginx/nginx.conf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u9700\u8981\u4FEE\u6539 PID \u6587\u4EF6\u8DEF\u5F84\uFF0C\u5927\u7EA6\u5728\u542F\u52A8\u811A\u672C\u4E2D\u7684\u7B2C 11 \u884C\u53EF\u4EE5\u770B\u5230\u88AB\u6CE8\u91CA\u7684\u9ED8\u8BA4\u8DEF\u5F84\uFF0C\u5728\u4E0B\u9762\u52A0\u4E00\u884C\uFF0C\u624B\u52A8\u6307\u5B9A\u6210\u548C nginx.conf \u6587\u4EF6\u4E2D\u7684 PID \u8DEF\u5F84\u4E00\u81F4\u5373\u53EF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u8BBE\u7F6E\u6210\u548C nginx.conf \u4E2D\u4E00\u81F4\u3002\u4F8B\u5982\u6211\u7684\u4E00\u822C\u662F\uFF1A/usr/local/nginx/logs/nginx.pid
<span class="token comment"># pidfile:     /var/run/nginx.pid</span>
pidfile:     /usr/local/nginx/logs/nginx.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u6267\u884C\u6743\u9650-1" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6267\u884C\u6743\u9650-1" aria-hidden="true">#</a> \u6DFB\u52A0\u6267\u884C\u6743\u9650</h3><p>\u4E0A\u8FF0\u811A\u672C\u4FDD\u5B58\u4E3A <code>/etc/init.d/nginx</code>\uFF0C\u7136\u540E\u8BBE\u7F6E\u6587\u4EF6\u7684\u6267\u884C\u6743\u9650\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7ED9\u6240\u6709\u7528\u6237\u7ED9\u4E88\u53EF\u6267\u884C\u6743\u9650</span>
<span class="token function">chmod</span> a+x /etc/init.d/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64\u5C31\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u6307\u4EE4\u63A7\u5236 Nginx \u7684\u542F\u52A8\u3001\u505C\u6B62\u548C\u91CD\u65B0\u52A0\u8F7D\u4E86\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8</span>
/etc/init.d/nginx start

<span class="token comment"># \u505C\u6B62</span>
/etc/init.d/nginx stop

<span class="token comment"># \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E</span>
/etc/init.d/nginx reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u81F3\u5F00\u673A\u81EA\u542F\u52A8-1" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u81F3\u5F00\u673A\u81EA\u542F\u52A8-1" aria-hidden="true">#</a> \u6DFB\u52A0\u81F3\u5F00\u673A\u81EA\u542F\u52A8</h3><p>\u73B0\u5728\u5C06 Nginx \u670D\u52A1\u52A0\u5165 chkconfig \u7BA1\u7406\u5217\u8868\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0 Nginx \u542F\u52A8\u811A\u672C\u4E3A chkconfig \u7BA1\u7406\u7684\u4E00\u4E2A\u670D\u52A1</span>
<span class="token function">chkconfig</span> --add /etc/init.d/nginx

<span class="token comment"># \u5C06 Nginx \u52A0\u5165\u5F00\u673A\u81EA\u542F</span>
<span class="token function">chkconfig</span> /etc/init.d/nginx on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\u4E86\uFF0C\u5982\u679C\u9700\u8981\u5173\u95ED\u5F00\u673A\u542F\u52A8\u7684\u529F\u80FD\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u8BE5\u670D\u52A1\u8FDB\u7A0B\u72B6\u6001</span>
<span class="token function">chkconfig</span> --list nginx

<span class="token comment"># \u5173\u95ED Nginx \u5F00\u673A\u81EA\u542F</span>
<span class="token function">chkconfig</span> /etc/init.d/nginx off

<span class="token comment"># \u5220\u9664 chkconfig \u7BA1\u7406\u7684\u7684 Nginx \u542F\u52A8\u670D\u52A1\uFF08\u5982\u679C\u786E\u5B9E\u4E0D\u9700\u8981\u4E86\uFF09</span>
<span class="token function">chkconfig</span> --del /etc/init.d/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F00\u673A\u81EA\u542F\u811A\u672C\u63D0\u4F9B\u7684\u5FEB\u6377\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5F00\u673A\u81EA\u542F\u811A\u672C\u63D0\u4F9B\u7684\u5FEB\u6377\u547D\u4EE4" aria-hidden="true">#</a> \u5F00\u673A\u81EA\u542F\u811A\u672C\u63D0\u4F9B\u7684\u5FEB\u6377\u547D\u4EE4</h3><p>\u901A\u8FC7 Nginx \u5F00\u673A\u81EA\u542F\u811A\u672C\u672C\u8EAB\u63D0\u4F9B\u4E86\u4E00\u4E9B Nginx \u5E38\u7528\u64CD\u4F5C\u7684\u5FEB\u6377\u547D\u4EE4\uFF0C\u4E00\u65E6\u6211\u4EEC\u901A\u8FC7\u8FD9\u4E2A\u811A\u672C\u5B9E\u73B0\u5F00\u673A\u81EA\u542F\u540E\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E9B\u5FEB\u6377\u547D\u4EE4\u6765\u64CD\u4F5C Nginx \u4E86\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8 Nginx</span>
/etc/init.d/nginx start

<span class="token comment"># \u91CD\u65B0\u52A0\u8F7D Nginx \u914D\u7F6E</span>
/etc/init.d/nginx reload

<span class="token comment"># \u505C\u6B62 Nginx</span>
/etc/init.d/nginx stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E9B\u547D\u4EE4\u901A\u8FC7\u770B\u811A\u672C\u4EE3\u7801\u5C31\u80FD\u627E\u5230\u3002</p><h2 id="centos-7-x-\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#centos-7-x-\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> CentOS 7.x \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F</h2><blockquote><p>\u4EE5\u4E0B\u6240\u6709\u547D\u4EE4\uFF0C\u5982\u679C\u4F60\u662F root \u8D26\u6237\uFF0C\u76F4\u63A5\u6267\u884C\u5373\u53EF\uFF0C\u4E0D\u662F\u7684\u8BDD\u524D\u9762\u52A0 <code>sudo</code> \u83B7\u53D6\u6743\u9650\u3002</p></blockquote>`,22),k=n("\u5728 CentOS 7.x \u7248\u672C\u7684\u7CFB\u7EDF\u5F00\u59CB\uFF0C\u5C31\u4E0D\u592A\u597D\u901A\u8FC7 chkconfig + "),g={href:"https://www.nginx.com/resources/wiki/start/topics/examples/redhatnginxinit/",target:"_blank",rel:"noopener noreferrer"},h=n("Red Hat NGINX Init Script"),f=n(" \u7684\u65B9\u5F0F\u6765\u8BBE\u7F6E Nginx \u7684\u5F00\u673A\u542F\u52A8\u4E86\u3002"),x=i(`<p>\u56E0\u4E3A\u4F1A\u7559\u4E0B\u4E86\u4E00\u4E2A bug\uFF1A\u901A\u8FC7 <code>/etc/init.d/nginx</code> \u811A\u672C\u65B9\u5F0F\u6765\u63A7\u5236 Nginx \u7684\u542F\u52A8\u3001\u505C\u6B62\u65F6\uFF0Cstart \u4E00\u76F4\u5361\u7740\uFF08\u5B9E\u9645\u7AEF\u53E3\u662F\u5F00\u542F\u4E86\uFF0C\u5FC5\u987B\u901A\u8FC7 Ctrl + C \u5F3A\u5236\u5173\u95ED\uFF09\uFF0Cstop \u4E0D\u751F\u6548\uFF08\u63D0\u793A\u6210\u529F\uFF0C\u4F46\u662F\u7AEF\u53E3\u6CA1\u5173\u95ED\uFF09\u3002</p><p>\u90A3\u4E48\u5BF9\u4E8E CentOS 7.x \u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u901A\u8FC7 systemd \u6765\u7BA1\u7406 Nginx\u3002</p><h3 id="\u5EFA\u7ACB\u670D\u52A1\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB\u670D\u52A1\u6587\u4EF6" aria-hidden="true">#</a> \u5EFA\u7ACB\u670D\u52A1\u6587\u4EF6</h3><p>\u65B0\u5EFA\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /usr/lib/systemd/system/nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),N=n("\u5F80\u8BE5\u6587\u4EF6\u5185\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u6A21\u7248\u53C2\u8003\u5B98\u7F51 "),q={href:"https://www.nginx.com/resources/wiki/start/topics/examples/systemd/",target:"_blank",rel:"noopener noreferrer"},y=n("NGINX systemd service file"),_=n("\uFF09\uFF1A"),$=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>The NGINX HTTP and reverse proxy server
<span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target network-online.target remote-fs.target nss-lookup.target
<span class="token assign-left variable">Wants</span><span class="token operator">=</span>network-online.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/run/nginx.pid
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/sbin/nginx -t
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/nginx
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/sbin/nginx -s reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill -s QUIT <span class="token variable">$MAINPID</span>
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6587\u4EF6\u5185\u5BB9\u89E3\u91CA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>:\u670D\u52A1\u7684\u8BF4\u660E
Description:\u63CF\u8FF0\u670D\u52A1
After:\u63CF\u8FF0\u670D\u52A1\u7C7B\u522B

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>\u670D\u52A1\u8FD0\u884C\u53C2\u6570\u7684\u8BBE\u7F6E
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking\u662F\u540E\u53F0\u8FD0\u884C\u7684\u5F62\u5F0F
ExecStart\u4E3A\u670D\u52A1\u7684\u5177\u4F53\u8FD0\u884C\u547D\u4EE4
ExecReload\u4E3A\u91CD\u542F\u547D\u4EE4
ExecStop\u4E3A\u505C\u6B62\u547D\u4EE4
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>True\u8868\u793A\u7ED9\u670D\u52A1\u5206\u914D\u72EC\u7ACB\u7684\u4E34\u65F6\u7A7A\u95F4
\u6CE8\u610F\uFF1A\u542F\u52A8\u3001\u91CD\u542F\u3001\u505C\u6B62\u547D\u4EE4\u5168\u90E8\u8981\u6C42\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>\u670D\u52A1\u5B89\u88C5\u7684\u76F8\u5173\u8BBE\u7F6E\uFF0C\u53EF\u8BBE\u7F6E\u4E3A\u591A\u7528\u6237
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u90E8\u5206\u53C2\u6570-2" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u90E8\u5206\u53C2\u6570-2" aria-hidden="true">#</a> \u4FEE\u6539\u90E8\u5206\u53C2\u6570</h3><p>\u5982\u679C\u4F60\u7684 Nginx \u662F\u901A\u8FC7\u7F16\u8BD1\u5B89\u88C5\u7684\uFF0C\u5219\u9700\u8981\u6839\u636E\u5B9E\u9645\u5B89\u88C5\u65F6\u7684\u8BBE\u7F6E\uFF0C\u4FEE\u6539\u6587\u4EF6\u4E2D\u7684\u90E8\u5206\u53C2\u6570\uFF0C\u4FEE\u6539\u540E\u7684\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>The NGINX HTTP and reverse proxy server
<span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target network-online.target remote-fs.target nss-lookup.target
<span class="token assign-left variable">Wants</span><span class="token operator">=</span>network-online.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/usr/local/nginx/logs/nginx.pid
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx -s reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx -s quit
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u6267\u884C\u6743\u9650-2" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6267\u884C\u6743\u9650-2" aria-hidden="true">#</a> \u6DFB\u52A0\u6267\u884C\u6743\u9650</h3><p>\u7ED9\u4E0A\u8FF0\u6587\u4EF6\u6DFB\u52A0\u6267\u884C\u6743\u9650\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> +x /usr/lib/systemd/system/nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u81F3\u5F00\u673A\u81EA\u542F\u52A8-2" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u81F3\u5F00\u673A\u81EA\u542F\u52A8-2" aria-hidden="true">#</a> \u6DFB\u52A0\u81F3\u5F00\u673A\u81EA\u542F\u52A8</h3><p>\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nginx-\u670D\u52A1\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#nginx-\u670D\u52A1\u7BA1\u7406" aria-hidden="true">#</a> Nginx \u670D\u52A1\u7BA1\u7406</h3><p>\u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E9B\u5FEB\u6377\u547D\u4EE4\u8FDB\u884C Nginx \u670D\u52A1\u7BA1\u7406\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Nginx \u542F\u52A8</span>
systemctl start nginx.service

<span class="token comment"># \u67E5\u770B Nginx \u670D\u52A1\u5F53\u524D\u72B6\u6001</span>
systemctl status nginx.service

<span class="token comment"># Nginx \u91CD\u8F7D</span>
systemctl reload nginx.service

<span class="token comment"># Nginx \u505C\u6B62</span>
systemctl stop nginx.service

<span class="token comment"># \u91CD\u65B0\u542F\u52A8 Nginx \u670D\u52A1</span>
systemctl restart nginx.service

<span class="token comment"># \u505C\u6B62 Nginx \u7684\u5F00\u673A\u81EA\u542F\u52A8</span>
systemctl disable nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nginx \u542F\u52A8\u65E5\u5FD7\u67E5\u770B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>journalctl -f -u nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="systemd-\u63D0\u4F9B\u7684\u4E00\u4E9B\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#systemd-\u63D0\u4F9B\u7684\u4E00\u4E9B\u547D\u4EE4" aria-hidden="true">#</a> systemd \u63D0\u4F9B\u7684\u4E00\u4E9B\u547D\u4EE4</h3><p>\u67E5\u770B\u6240\u6709\u5DF2\u542F\u52A8\u7684\u670D\u52A1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl list-units --type<span class="token operator">=</span>service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u547D\u4EE4\u96C6\u5408\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709\u5F00\u673A\u542F\u52A8\u9879</span>
systemctl list-unit-files --type<span class="token operator">=</span>service <span class="token operator">|</span> <span class="token function">grep</span> enabled

<span class="token comment"># \u67E5\u8BE2\u670D\u52A1\u662F\u5426\u5F00\u673A\u542F\u52A8</span>
systemctl is-enabled servicename.service

<span class="token comment"># \u5F00\u673A\u8FD0\u884C\u670D\u52A1</span>
systemctl <span class="token builtin class-name">enable</span> *.service

<span class="token comment"># \u53D6\u6D88\u5F00\u673A\u8FD0\u884C</span>
systemctl disable *.service

<span class="token comment"># \u542F\u52A8\u670D\u52A1</span>
systemctl start *.service

<span class="token comment"># \u505C\u6B62\u670D\u52A1</span>
systemctl stop *.service

<span class="token comment"># \u91CD\u542F\u670D\u52A1</span>
systemctl restart *.service

<span class="token comment"># \u91CD\u65B0\u52A0\u8F7D\u670D\u52A1\u914D\u7F6E\u6587\u4EF6</span>
systemctl reload *.service

<span class="token comment"># \u67E5\u8BE2\u670D\u52A1\u8FD0\u884C\u72B6\u6001</span>
systemctl status *.service

<span class="token comment"># \u663E\u793A\u542F\u52A8\u5931\u8D25\u7684\u670D\u52A1</span>
systemctl --failed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1A<code>*</code> \u4EE3\u8868\u67D0\u4E2A\u670D\u52A1\u7684\u540D\u5B57\uFF0C\u5982 http \u7684\u670D\u52A1\u540D\u4E3A httpd\u3002</p><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,24),w={href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html",target:"_blank",rel:"noopener noreferrer"},I=n("Systemd \u5165\u95E8\u6559\u7A0B\uFF1A\u547D\u4EE4\u7BC7");function E(S,A){const a=t("ExternalLinkIcon");return c(),p("div",null,[r,s("p",null,[d,s("a",u,[v,e(a)]),m]),b,s("p",null,[k,s("a",g,[h,e(a)]),f]),x,s("p",null,[N,s("a",q,[y,e(a)]),_]),$,s("ul",null,[s("li",null,[s("a",w,[I,e(a)])])])])}var F=l(o,[["render",E],["__file","set-auto-start-after-server-reboot.html.vue"]]);export{F as default};
