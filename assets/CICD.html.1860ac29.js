import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as c,c as o,a as n,b as a,d as s,e as i}from"./app.6d04d96f.js";var p="/assets/6.8cfd8610.png",r="/assets/10.400b06f7.png",d="/assets/1.2e7ed4e7.png",u="/assets/2.8d204958.png",m="/assets/3.82972ba9.png",v="/assets/4.ff3cf26b.png",b="/assets/5.3b7cd058.png",k="/assets/8.974f5073.png",h="/assets/7.eaf7feac.png",_="/assets/9.32fa9846.png";const g={},f=n("h1",{id:"cicd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cicd","aria-hidden":"true"},"#"),s(" CICD")],-1),x=s("\u53C2\u8003\u6587\u7AE0 "),w={href:"https://juejin.cn/post/7102360505313918983",target:"_blank",rel:"noopener noreferrer"},y=s("\u4FDD\u59C6\u7EA7\u6559\u5B66 Jenkins \u90E8\u7F72\u524D\u7AEF\u9879\u76EE"),z=i('<h2 id="cicd\u5B9E\u8DF5\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#cicd\u5B9E\u8DF5\u8FC7\u7A0B" aria-hidden="true">#</a> CICD\u5B9E\u8DF5\u8FC7\u7A0B</h2><blockquote><ul><li>gitee/gitlab =&gt; tomcat jsp</li><li>gitee/gitlab =&gt; xftp =&gt; nginx</li><li>gitee/gitlab =&gt; jenkins =&gt; nginx</li><li>gitee/gitlab =&gt; jenkins =&gt; docker =&gt; k8s =&gt; nginx</li><li>......</li></ul></blockquote><p><img src="'+p+'" alt="image" loading="lazy"></p><p><img src="'+r+'" alt="image" loading="lazy"></p><h2 id="_1-\u4E91\u670D\u52A1\u5668ecs-elastic-compute-service-cvm-cloud-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_1-\u4E91\u670D\u52A1\u5668ecs-elastic-compute-service-cvm-cloud-virtual-machine" aria-hidden="true">#</a> 1.\u4E91\u670D\u52A1\u5668ECS(Elastic Compute Service) || CVM(Cloud Virtual Machine)</h2><h3 id="_1-1-\u8D2D\u4E70\u76F8\u5173\u7684\u4E91\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_1-1-\u8D2D\u4E70\u76F8\u5173\u7684\u4E91\u670D\u52A1\u5668" aria-hidden="true">#</a> 1.1 \u8D2D\u4E70\u76F8\u5173\u7684\u4E91\u670D\u52A1\u5668</h3>',6),j={href:"https://buy.cloud.tencent.com/cvm",target:"_blank",rel:"noopener noreferrer"},q=s("\u817E\u8BAF\u4E91"),I={href:"https://www.aliyun.com/product/ecs",target:"_blank",rel:"noopener noreferrer"},$=s("\u963F\u91CC\u4E91"),S={href:"https://www.huaweicloud.com/product/ecs.html",target:"_blank",rel:"noopener noreferrer"},N=s("\u534E\u4E3A\u4E91"),E=i('<blockquote><p>\u{1F4A1}<strong>\u4EE5\u4E0B\u4EE5\u817E\u8BAF\u4E91\u4E3A\u4F8B</strong></p></blockquote><h4 id="_1-1-\u9009\u62E9\u76F8\u5E94\u7684\u670D\u52A1\u5668\u914D\u7F6E\u8FDB\u884C\u8D2D\u4E70" tabindex="-1"><a class="header-anchor" href="#_1-1-\u9009\u62E9\u76F8\u5E94\u7684\u670D\u52A1\u5668\u914D\u7F6E\u8FDB\u884C\u8D2D\u4E70" aria-hidden="true">#</a> 1.1 \u9009\u62E9\u76F8\u5E94\u7684\u670D\u52A1\u5668\u914D\u7F6E\u8FDB\u884C\u8D2D\u4E70</h4><div style="text-align:center;"><img src="'+d+'"></div><h4 id="_1-2-\u817E\u8BAF\u4E91\u540E\u53F0\u7BA1\u7406\u670D\u52A1\u5668\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-2-\u817E\u8BAF\u4E91\u540E\u53F0\u7BA1\u7406\u670D\u52A1\u5668\u5B9E\u4F8B" aria-hidden="true">#</a> 1.2 \u817E\u8BAF\u4E91\u540E\u53F0\u7BA1\u7406\u670D\u52A1\u5668\u5B9E\u4F8B</h4><ul><li>\u6CE8\u610F\u4E8B\u9879\uFF1A\u5F00\u542F\u9632\u706B\u5899\uFF0C\u9ED8\u8BA4\u53EF\u8BBF\u95EE\u7AEF\u53E3</li><li>HTTP(80)</li><li>HTTPS(443)</li><li>Linux\u767B\u5F55(22)</li><li>Windows\u767B\u5F55(3389)</li><li>\u5982\u9700\u5176\u4ED6\u7AEF\u53E3\u53EF\u8BBF\u95EE\u9700\u81EA\u884C\u6DFB\u52A0</li></ul>',5),C={href:"https://console.cloud.tencent.com/lighthouse/instance/index",target:"_blank",rel:"noopener noreferrer"},P=s("\u817E\u8BAF\u4E91\u7BA1\u7406\u540E\u53F0"),D=n("div",{style:{"text-align":"center"}},[n("img",{src:u})],-1),X=n("h4",{id:"_1-3-\u4E0B\u8F7Dxshell\u3001xftp\u5DE5\u5177",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-3-\u4E0B\u8F7Dxshell\u3001xftp\u5DE5\u5177","aria-hidden":"true"},"#"),s(" 1.3 \u4E0B\u8F7DXshell\u3001xftp\u5DE5\u5177")],-1),T=n("p",null,"\u94FE\u63A5\u8FDC\u7A0B\u670D\u52A1\u5668\u3001\u8FDC\u7A0B\u63A7\u5236\u7EC8\u7AEF\uFF0Cecs\u9700\u8981\u5F00\u542F\u76F8\u5E94\u7684\u7AEF\u53E3(22)\u5F00\u653E\u3002",-1),F={href:"https://xshell.en.softonic.com/download",target:"_blank",rel:"noopener noreferrer"},J=s("Xshell\u4E0B\u8F7D"),O={href:"https://cloud.tencent.com/developer/article/1688834?ivk_sa=1024320u",target:"_blank",rel:"noopener noreferrer"},L=s("\u5982\u4F55\u4F7F\u7528Xshell\u8FDE\u63A5\u817E\u8BAF\u4E91\u670D\u52A1\u5668"),B=i('<div style="text-align:center;"><img src="'+m+'"></div><h2 id="_2-\u642D\u5EFAnginx\u670D\u52A1-\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_2-\u642D\u5EFAnginx\u670D\u52A1-\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668" aria-hidden="true">#</a> 2.\u642D\u5EFAnginx\u670D\u52A1\uFF0C\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668</h2><h3 id="nginx\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#nginx\u7B80\u4ECB" aria-hidden="true">#</a> nginx\u7B80\u4ECB</h3><p>Nginx\u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684HTTP\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u3002\u7279\u70B9\u662F\u5360\u7528\u5185\u5B58\u5C11\uFF0C\u5E76\u53D1\u80FD\u529B\u5F3A\u3002\u5B9E\u9645\u4E0ANginx\u7684\u5E76\u53D1\u80FD\u529B\u662F\u540C\u7C7B\u7684\u7F51\u9875\u670D\u52A1\u5668\u4E2D\u6700\u597D\u7684\u3002\u901A\u8FC7\u914D\u7F6E Nginx \u914D\u7F6E\u6587\u4EF6\uFF0C\u5B9E\u73B0\u6B63\u5411\u4EE3\u7406\u3001\u53CD\u5411\u4EE3\u7406\u3001\u8D1F\u8F7D\u5747\u8861\u3001Nginx \u7F13\u5B58\u3001\u52A8\u9759\u5206\u79BB\u548C\u9AD8\u53EF\u7528 Nginx 6\u79CD\u529F\u80FD\u3002</p><p>\u203B \u{1F53A} \u5E38\u7528\u7684web\u670D\u52A1\u5668\u6709\uFF1A1.apache\uFF1B2.Lighttpd\uFF1B3.Tomcat\uFF1B4.IBM WebSphere\uFF1B5.IIS\uFF1B6.Nginx</p>',5),H={href:"https://juejin.cn/post/6844904046789132301",target:"_blank",rel:"noopener noreferrer"},M=s("\u4ECE\u539F\u7406\u5230\u5B9E\u6218\uFF0C\u5F7B\u5E95\u641E\u61C2Nginx"),V={href:"https://juejin.cn/post/6844903684967825421",target:"_blank",rel:"noopener noreferrer"},G=s("Nginx\u4E0E\u524D\u7AEF\u5F00\u53D1"),R=n("h3",{id:"_2-1-\u4E0B\u8F7D\u5B89\u88C5\u542F\u52A8nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-1-\u4E0B\u8F7D\u5B89\u88C5\u542F\u52A8nginx","aria-hidden":"true"},"#"),s(" 2.1 \u4E0B\u8F7D\u5B89\u88C5\u542F\u52A8nginx")],-1),A={href:"https://blog.51cto.com/u_11990719/3113865",target:"_blank",rel:"noopener noreferrer"},U=s("\u817E\u8BAF\u4E91CentOS\u5B89\u88C5 Nginx"),W=n("h3",{id:"_2-2-nginx\u914D\u7F6E\u8BF4\u660E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-2-nginx\u914D\u7F6E\u8BF4\u660E","aria-hidden":"true"},"#"),s(" 2.2 nginx\u914D\u7F6E\u8BF4\u660E")],-1),Z=n("p",null,"Nginx\u7684\u4E3B\u914D\u7F6E\u6587\u4EF6\u662Fnginx.conf\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u4E00\u5171\u7531\u4E09\u90E8\u5206\u7EC4\u6210\uFF0C\u5206\u522B\u4E3A\u5168\u5C40\u5757\u3001events\u5757\u548Chttp\u5757\u3002\u5728http\u5757\u4E2D\uFF0C\u53C8\u5305\u542Bhttp\u5168\u5C40\u5757\u3001\u591A\u4E2Aserver\u5757\u3002\u6BCF\u4E2Aserver\u5757\u4E2D\uFF0C\u53EF\u4EE5\u5305\u542Bserver\u5168\u5C40\u5757\u548C\u591A\u4E2Alocation\u5757\u3002\u5728\u540C\u4E00\u914D\u7F6E\u5757\u4E2D\u5D4C\u5957\u7684\u914D\u7F6E\u5757\uFF0C\u5404\u4E2A\u4E4B\u95F4\u4E0D\u5B58\u5728\u6B21\u5E8F\u5173\u7CFB\u3002",-1),K={href:"https://blog.csdn.net/SELF_REDEEM/article/details/119299510",target:"_blank",rel:"noopener noreferrer"},Y=s("Nginx\u914D\u7F6E\u8BE6\u89E3"),Q={href:"https://www.cnblogs.com/yxhblogs/p/12906046.html",target:"_blank",rel:"noopener noreferrer"},nn=s("Nginx \u4FEE\u9970\u7B26 Location \u8BE6\u89E3"),sn=i('<div style="text-align:center;"><img src="'+v+`"></div><h4 id="_2-2-1-\u5168\u5C40\u5757" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u5168\u5C40\u5757" aria-hidden="true">#</a> 2.2.1 \u5168\u5C40\u5757</h4><blockquote><p>\u914D\u7F6E\u5F71\u54CDnginx\u5168\u5C40\u7684\u6307\u4EE4\u3002\u4E00\u822C\u6709\u8FD0\u884Cnginx\u670D\u52A1\u5668\u7684\u7528\u6237\u7EC4\uFF0Cnginx\u8FDB\u7A0Bpid\u5B58\u653E\u8DEF\u5F84\uFF0C\u65E5\u5FD7\u5B58\u653E\u8DEF\u5F84\uFF0C\u914D\u7F6E\u6587\u4EF6\u5F15\u5165\uFF0C\u5141\u8BB8\u751F\u6210worker process\u6570\u7B49\u3002</p></blockquote><h4 id="_2-2-2-events\u5757" tabindex="-1"><a class="header-anchor" href="#_2-2-2-events\u5757" aria-hidden="true">#</a> 2.2.2 events\u5757</h4><blockquote><p>\u914D\u7F6E\u5F71\u54CDnginx\u670D\u52A1\u5668\u6216\u4E0E\u7528\u6237\u7684\u7F51\u7EDC\u8FDE\u63A5\u3002\u6709\u6BCF\u4E2A\u8FDB\u7A0B\u7684\u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u9009\u53D6\u54EA\u79CD\u4E8B\u4EF6\u9A71\u52A8\u6A21\u578B\u5904\u7406\u8FDE\u63A5\u8BF7\u6C42\uFF0C\u662F\u5426\u5141\u8BB8\u540C\u65F6\u63A5\u53D7\u591A\u4E2A\u7F51\u8DEF\u8FDE\u63A5\uFF0C\u5F00\u542F\u591A\u4E2A\u7F51\u7EDC\u8FDE\u63A5\u5E8F\u5217\u5316\u7B49\u3002</p></blockquote><h4 id="_2-2-3-http\u5757" tabindex="-1"><a class="header-anchor" href="#_2-2-3-http\u5757" aria-hidden="true">#</a> 2.2.3 http\u5757</h4><blockquote><p>\u53EF\u4EE5\u5D4C\u5957\u591A\u4E2Aserver\uFF0C\u914D\u7F6E\u4EE3\u7406\uFF0C\u7F13\u5B58\uFF0C\u65E5\u5FD7\u5B9A\u4E49\u7B49\u7EDD\u5927\u591A\u6570\u529F\u80FD\u548C\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u914D\u7F6E\u3002\u5982\u6587\u4EF6\u5F15\u5165\uFF0Cmime-type\u5B9A\u4E49\uFF0C\u65E5\u5FD7\u81EA\u5B9A\u4E49\uFF0C\u662F\u5426\u4F7F\u7528sendfile\u4F20\u8F93\u6587\u4EF6\uFF0C\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u8FDE\u63A5\u8BF7\u6C42\u6570\u7B49\u3002</p></blockquote><h4 id="_2-2-4-server\u5757" tabindex="-1"><a class="header-anchor" href="#_2-2-4-server\u5757" aria-hidden="true">#</a> 2.2.4 server\u5757</h4><blockquote><p>\u914D\u7F6E\u865A\u62DF\u4E3B\u673A\u7684\u76F8\u5173\u53C2\u6570\uFF0C\u4E00\u4E2Ahttp\u4E2D\u53EF\u4EE5\u6709\u591A\u4E2Aserver\u3002</p></blockquote><h4 id="_2-2-5-location\u5757" tabindex="-1"><a class="header-anchor" href="#_2-2-5-location\u5757" aria-hidden="true">#</a> 2.2.5 location\u5757</h4><blockquote><p>\u914D\u7F6E\u8BF7\u6C42\u7684\u8DEF\u7531\uFF0C\u4EE5\u53CA\u5404\u79CD\u9875\u9762\u7684\u5904\u7406\u60C5\u51B5\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">######Nginx\u914D\u7F6E\u6587\u4EF6nginx.conf\u4E2D\u6587\u8BE6\u89E3#####</span>

<span class="token comment">#\u5B9A\u4E49Nginx\u8FD0\u884C\u7684\u7528\u6237\u548C\u7528\u6237\u7EC4</span>
user www www<span class="token punctuation">;</span>

<span class="token comment">#nginx\u8FDB\u7A0B\u6570\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u7B49\u4E8ECPU\u603B\u6838\u5FC3\u6570\u3002</span>
worker_processes <span class="token number">8</span><span class="token punctuation">;</span>
 
<span class="token comment">#\u5168\u5C40\u9519\u8BEF\u65E5\u5FD7\u5B9A\u4E49\u7C7B\u578B\uFF0C[ debug | info | notice | warn | error | crit ]</span>
error_log /usr/local/nginx/logs/error.log info<span class="token punctuation">;</span>

<span class="token comment">#\u8FDB\u7A0Bpid\u6587\u4EF6</span>
pid /usr/local/nginx/logs/nginx.pid<span class="token punctuation">;</span>

<span class="token comment">#\u6307\u5B9A\u8FDB\u7A0B\u53EF\u4EE5\u6253\u5F00\u7684\u6700\u5927\u63CF\u8FF0\u7B26\uFF1A\u6570\u76EE</span>
<span class="token comment">#\u5DE5\u4F5C\u6A21\u5F0F\u4E0E\u8FDE\u63A5\u6570\u4E0A\u9650</span>
<span class="token comment">#\u8FD9\u4E2A\u6307\u4EE4\u662F\u6307\u5F53\u4E00\u4E2Anginx\u8FDB\u7A0B\u6253\u5F00\u7684\u6700\u591A\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570\u76EE\uFF0C\u7406\u8BBA\u503C\u5E94\u8BE5\u662F\u6700\u591A\u6253\u5F00\u6587\u4EF6\u6570\uFF08ulimit -n\uFF09\u4E0Enginx\u8FDB\u7A0B\u6570\u76F8\u9664\uFF0C\u4F46\u662Fnginx\u5206\u914D\u8BF7\u6C42\u5E76\u4E0D\u662F\u90A3\u4E48\u5747\u5300\uFF0C\u6240\u4EE5\u6700\u597D\u4E0Eulimit -n \u7684\u503C\u4FDD\u6301\u4E00\u81F4\u3002</span>
<span class="token comment">#\u73B0\u5728\u5728linux 2.6\u5185\u6838\u4E0B\u5F00\u542F\u6587\u4EF6\u6253\u5F00\u6570\u4E3A65535\uFF0Cworker_rlimit_nofile\u5C31\u76F8\u5E94\u5E94\u8BE5\u586B\u519965535\u3002</span>
<span class="token comment">#\u8FD9\u662F\u56E0\u4E3Anginx\u8C03\u5EA6\u65F6\u5206\u914D\u8BF7\u6C42\u5230\u8FDB\u7A0B\u5E76\u4E0D\u662F\u90A3\u4E48\u7684\u5747\u8861\uFF0C\u6240\u4EE5\u5047\u5982\u586B\u519910240\uFF0C\u603B\u5E76\u53D1\u91CF\u8FBE\u52303-4\u4E07\u65F6\u5C31\u6709\u8FDB\u7A0B\u53EF\u80FD\u8D85\u8FC710240\u4E86\uFF0C\u8FD9\u65F6\u4F1A\u8FD4\u56DE502\u9519\u8BEF\u3002</span>
worker_rlimit_nofile <span class="token number">65535</span><span class="token punctuation">;</span>


events
<span class="token punctuation">{</span>
    <span class="token comment">#\u53C2\u8003\u4E8B\u4EF6\u6A21\u578B\uFF0Cuse [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll\u6A21\u578B</span>
    <span class="token comment">#\u662FLinux 2.6\u4EE5\u4E0A\u7248\u672C\u5185\u6838\u4E2D\u7684\u9AD8\u6027\u80FD\u7F51\u7EDCI/O\u6A21\u578B\uFF0Clinux\u5EFA\u8BAEepoll\uFF0C\u5982\u679C\u8DD1\u5728FreeBSD\u4E0A\u9762\uFF0C\u5C31\u7528kqueue\u6A21\u578B\u3002</span>
    <span class="token comment">#\u8865\u5145\u8BF4\u660E\uFF1A</span>
    <span class="token comment">#\u4E0Eapache\u76F8\u7C7B\uFF0Cnginx\u9488\u5BF9\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u6709\u4E0D\u540C\u7684\u4E8B\u4EF6\u6A21\u578B</span>
    <span class="token comment">#A\uFF09\u6807\u51C6\u4E8B\u4EF6\u6A21\u578B</span>
    <span class="token comment">#Select\u3001poll\u5C5E\u4E8E\u6807\u51C6\u4E8B\u4EF6\u6A21\u578B\uFF0C\u5982\u679C\u5F53\u524D\u7CFB\u7EDF\u4E0D\u5B58\u5728\u66F4\u6709\u6548\u7684\u65B9\u6CD5\uFF0Cnginx\u4F1A\u9009\u62E9select\u6216poll</span>
    <span class="token comment">#B\uFF09\u9AD8\u6548\u4E8B\u4EF6\u6A21\u578B</span>
    <span class="token comment">#Kqueue\uFF1A\u4F7F\u7528\u4E8EFreeBSD 4.1+, OpenBSD 2.9+, NetBSD 2.0 \u548C MacOS X.\u4F7F\u7528\u53CC\u5904\u7406\u5668\u7684MacOS X\u7CFB\u7EDF\u4F7F\u7528kqueue\u53EF\u80FD\u4F1A\u9020\u6210\u5185\u6838\u5D29\u6E83\u3002</span>
    <span class="token comment">#Epoll\uFF1A\u4F7F\u7528\u4E8ELinux\u5185\u68382.6\u7248\u672C\u53CA\u4EE5\u540E\u7684\u7CFB\u7EDF\u3002</span>
    <span class="token comment">#/dev/poll\uFF1A\u4F7F\u7528\u4E8ESolaris 7 11/99+\uFF0CHP/UX 11.22+ (eventport)\uFF0CIRIX 6.5.15+ \u548C Tru64 UNIX 5.1A+\u3002</span>
    <span class="token comment">#Eventport\uFF1A\u4F7F\u7528\u4E8ESolaris 10\u3002 \u4E3A\u4E86\u9632\u6B62\u51FA\u73B0\u5185\u6838\u5D29\u6E83\u7684\u95EE\u9898\uFF0C \u6709\u5FC5\u8981\u5B89\u88C5\u5B89\u5168\u8865\u4E01\u3002</span>
    use epoll<span class="token punctuation">;</span>

    <span class="token comment">#\u5355\u4E2A\u8FDB\u7A0B\u6700\u5927\u8FDE\u63A5\u6570\uFF08\u6700\u5927\u8FDE\u63A5\u6570=\u8FDE\u63A5\u6570*\u8FDB\u7A0B\u6570\uFF09</span>
    <span class="token comment">#\u6839\u636E\u786C\u4EF6\u8C03\u6574\uFF0C\u548C\u524D\u9762\u5DE5\u4F5C\u8FDB\u7A0B\u914D\u5408\u8D77\u6765\u7528\uFF0C\u5C3D\u91CF\u5927\uFF0C\u4F46\u662F\u522B\u628Acpu\u8DD1\u5230100%\u5C31\u884C\u3002\u6BCF\u4E2A\u8FDB\u7A0B\u5141\u8BB8\u7684\u6700\u591A\u8FDE\u63A5\u6570\uFF0C\u7406\u8BBA\u4E0A\u6BCF\u53F0nginx\u670D\u52A1\u5668\u7684\u6700\u5927\u8FDE\u63A5\u6570\u4E3A\u3002</span>
    worker_connections <span class="token number">65535</span><span class="token punctuation">;</span>

    <span class="token comment">#keepalive\u8D85\u65F6\u65F6\u95F4\u3002</span>
    keepalive_timeout <span class="token number">60</span><span class="token punctuation">;</span>

    <span class="token comment">#\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u90E8\u7684\u7F13\u51B2\u533A\u5927\u5C0F\u3002\u8FD9\u4E2A\u53EF\u4EE5\u6839\u636E\u4F60\u7684\u7CFB\u7EDF\u5206\u9875\u5927\u5C0F\u6765\u8BBE\u7F6E\uFF0C\u4E00\u822C\u4E00\u4E2A\u8BF7\u6C42\u5934\u7684\u5927\u5C0F\u4E0D\u4F1A\u8D85\u8FC71k\uFF0C\u4E0D\u8FC7\u7531\u4E8E\u4E00\u822C\u7CFB\u7EDF\u5206\u9875\u90FD\u8981\u5927\u4E8E1k\uFF0C\u6240\u4EE5\u8FD9\u91CC\u8BBE\u7F6E\u4E3A\u5206\u9875\u5927\u5C0F\u3002</span>
    <span class="token comment">#\u5206\u9875\u5927\u5C0F\u53EF\u4EE5\u7528\u547D\u4EE4getconf PAGESIZE \u53D6\u5F97\u3002</span>
    <span class="token comment">#[root@web001 ~]# getconf PAGESIZE</span>
    <span class="token comment">#4096</span>
    <span class="token comment">#\u4F46\u4E5F\u6709client_header_buffer_size\u8D85\u8FC74k\u7684\u60C5\u51B5\uFF0C\u4F46\u662Fclient_header_buffer_size\u8BE5\u503C\u5FC5\u987B\u8BBE\u7F6E\u4E3A\u201C\u7CFB\u7EDF\u5206\u9875\u5927\u5C0F\u201D\u7684\u6574\u500D\u6570\u3002</span>
    client_header_buffer_size 4k<span class="token punctuation">;</span>

    <span class="token comment">#\u8FD9\u4E2A\u5C06\u4E3A\u6253\u5F00\u6587\u4EF6\u6307\u5B9A\u7F13\u5B58\uFF0C\u9ED8\u8BA4\u662F\u6CA1\u6709\u542F\u7528\u7684\uFF0Cmax\u6307\u5B9A\u7F13\u5B58\u6570\u91CF\uFF0C\u5EFA\u8BAE\u548C\u6253\u5F00\u6587\u4EF6\u6570\u4E00\u81F4\uFF0Cinactive\u662F\u6307\u7ECF\u8FC7\u591A\u957F\u65F6\u95F4\u6587\u4EF6\u6CA1\u88AB\u8BF7\u6C42\u540E\u5220\u9664\u7F13\u5B58\u3002</span>
    open_file_cache <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">65535</span> <span class="token assign-left variable">inactive</span><span class="token operator">=</span>60s<span class="token punctuation">;</span>

    <span class="token comment">#\u8FD9\u4E2A\u662F\u6307\u591A\u957F\u65F6\u95F4\u68C0\u67E5\u4E00\u6B21\u7F13\u5B58\u7684\u6709\u6548\u4FE1\u606F\u3002</span>
    <span class="token comment">#\u8BED\u6CD5:open_file_cache_valid time \u9ED8\u8BA4\u503C:open_file_cache_valid 60 \u4F7F\u7528\u5B57\u6BB5:http, server, location \u8FD9\u4E2A\u6307\u4EE4\u6307\u5B9A\u4E86\u4F55\u65F6\u9700\u8981\u68C0\u67E5open_file_cache\u4E2D\u7F13\u5B58\u9879\u76EE\u7684\u6709\u6548\u4FE1\u606F.</span>
    open_file_cache_valid 80s<span class="token punctuation">;</span>

    <span class="token comment">#open_file_cache\u6307\u4EE4\u4E2D\u7684inactive\u53C2\u6570\u65F6\u95F4\u5185\u6587\u4EF6\u7684\u6700\u5C11\u4F7F\u7528\u6B21\u6570\uFF0C\u5982\u679C\u8D85\u8FC7\u8FD9\u4E2A\u6570\u5B57\uFF0C\u6587\u4EF6\u63CF\u8FF0\u7B26\u4E00\u76F4\u662F\u5728\u7F13\u5B58\u4E2D\u6253\u5F00\u7684\uFF0C\u5982\u4E0A\u4F8B\uFF0C\u5982\u679C\u6709\u4E00\u4E2A\u6587\u4EF6\u5728inactive\u65F6\u95F4\u5185\u4E00\u6B21\u6CA1\u88AB\u4F7F\u7528\uFF0C\u5B83\u5C06\u88AB\u79FB\u9664\u3002</span>
    <span class="token comment">#\u8BED\u6CD5:open_file_cache_min_uses number \u9ED8\u8BA4\u503C:open_file_cache_min_uses 1 \u4F7F\u7528\u5B57\u6BB5:http, server, location  \u8FD9\u4E2A\u6307\u4EE4\u6307\u5B9A\u4E86\u5728open_file_cache\u6307\u4EE4\u65E0\u6548\u7684\u53C2\u6570\u4E2D\u4E00\u5B9A\u7684\u65F6\u95F4\u8303\u56F4\u5185\u53EF\u4EE5\u4F7F\u7528\u7684\u6700\u5C0F\u6587\u4EF6\u6570,\u5982\u679C\u4F7F\u7528\u66F4\u5927\u7684\u503C,\u6587\u4EF6\u63CF\u8FF0\u7B26\u5728cache\u4E2D\u603B\u662F\u6253\u5F00\u72B6\u6001.</span>
    open_file_cache_min_uses <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token comment">#\u8BED\u6CD5:open_file_cache_errors on | off \u9ED8\u8BA4\u503C:open_file_cache_errors off \u4F7F\u7528\u5B57\u6BB5:http, server, location \u8FD9\u4E2A\u6307\u4EE4\u6307\u5B9A\u662F\u5426\u5728\u641C\u7D22\u4E00\u4E2A\u6587\u4EF6\u65F6\u8BB0\u5F55cache\u9519\u8BEF.</span>
    open_file_cache_errors on<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
 
 
<span class="token comment">#\u8BBE\u5B9Ahttp\u670D\u52A1\u5668\uFF0C\u5229\u7528\u5B83\u7684\u53CD\u5411\u4EE3\u7406\u529F\u80FD\u63D0\u4F9B\u8D1F\u8F7D\u5747\u8861\u652F\u6301</span>
http
<span class="token punctuation">{</span>
    <span class="token comment">#\u6587\u4EF6\u6269\u5C55\u540D\u4E0E\u6587\u4EF6\u7C7B\u578B\u6620\u5C04\u8868</span>
    include mime.types<span class="token punctuation">;</span>

    <span class="token comment">#\u9ED8\u8BA4\u6587\u4EF6\u7C7B\u578B</span>
    default_type application/octet-stream<span class="token punctuation">;</span>

    <span class="token comment">#\u9ED8\u8BA4\u7F16\u7801</span>
    <span class="token comment">#charset utf-8;</span>

    <span class="token comment">#\u670D\u52A1\u5668\u540D\u5B57\u7684hash\u8868\u5927\u5C0F</span>
    <span class="token comment">#\u4FDD\u5B58\u670D\u52A1\u5668\u540D\u5B57\u7684hash\u8868\u662F\u7531\u6307\u4EE4server_names_hash_max_size \u548Cserver_names_hash_bucket_size\u6240\u63A7\u5236\u7684\u3002\u53C2\u6570hash bucket size\u603B\u662F\u7B49\u4E8Ehash\u8868\u7684\u5927\u5C0F\uFF0C\u5E76\u4E14\u662F\u4E00\u8DEF\u5904\u7406\u5668\u7F13\u5B58\u5927\u5C0F\u7684\u500D\u6570\u3002\u5728\u51CF\u5C11\u4E86\u5728\u5185\u5B58\u4E2D\u7684\u5B58\u53D6\u6B21\u6570\u540E\uFF0C\u4F7F\u5728\u5904\u7406\u5668\u4E2D\u52A0\u901F\u67E5\u627Ehash\u8868\u952E\u503C\u6210\u4E3A\u53EF\u80FD\u3002\u5982\u679Chash bucket size\u7B49\u4E8E\u4E00\u8DEF\u5904\u7406\u5668\u7F13\u5B58\u7684\u5927\u5C0F\uFF0C\u90A3\u4E48\u5728\u67E5\u627E\u952E\u7684\u65F6\u5019\uFF0C\u6700\u574F\u7684\u60C5\u51B5\u4E0B\u5728\u5185\u5B58\u4E2D\u67E5\u627E\u7684\u6B21\u6570\u4E3A2\u3002\u7B2C\u4E00\u6B21\u662F\u786E\u5B9A\u5B58\u50A8\u5355\u5143\u7684\u5730\u5740\uFF0C\u7B2C\u4E8C\u6B21\u662F\u5728\u5B58\u50A8\u5355\u5143\u4E2D\u67E5\u627E\u952E \u503C\u3002\u56E0\u6B64\uFF0C\u5982\u679CNginx\u7ED9\u51FA\u9700\u8981\u589E\u5927hash max size \u6216 hash bucket size\u7684\u63D0\u793A\uFF0C\u90A3\u4E48\u9996\u8981\u7684\u662F\u589E\u5927\u524D\u4E00\u4E2A\u53C2\u6570\u7684\u5927\u5C0F.</span>
    server_names_hash_bucket_size <span class="token number">128</span><span class="token punctuation">;</span>

    <span class="token comment">#\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u90E8\u7684\u7F13\u51B2\u533A\u5927\u5C0F\u3002\u8FD9\u4E2A\u53EF\u4EE5\u6839\u636E\u4F60\u7684\u7CFB\u7EDF\u5206\u9875\u5927\u5C0F\u6765\u8BBE\u7F6E\uFF0C\u4E00\u822C\u4E00\u4E2A\u8BF7\u6C42\u7684\u5934\u90E8\u5927\u5C0F\u4E0D\u4F1A\u8D85\u8FC71k\uFF0C\u4E0D\u8FC7\u7531\u4E8E\u4E00\u822C\u7CFB\u7EDF\u5206\u9875\u90FD\u8981\u5927\u4E8E1k\uFF0C\u6240\u4EE5\u8FD9\u91CC\u8BBE\u7F6E\u4E3A\u5206\u9875\u5927\u5C0F\u3002\u5206\u9875\u5927\u5C0F\u53EF\u4EE5\u7528\u547D\u4EE4getconf PAGESIZE\u53D6\u5F97\u3002</span>
    client_header_buffer_size 32k<span class="token punctuation">;</span>

    <span class="token comment">#\u5BA2\u6237\u8BF7\u6C42\u5934\u7F13\u51B2\u5927\u5C0F\u3002nginx\u9ED8\u8BA4\u4F1A\u7528client_header_buffer_size\u8FD9\u4E2Abuffer\u6765\u8BFB\u53D6header\u503C\uFF0C\u5982\u679Cheader\u8FC7\u5927\uFF0C\u5B83\u4F1A\u4F7F\u7528large_client_header_buffers\u6765\u8BFB\u53D6\u3002</span>
    large_client_header_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>

    <span class="token comment">#\u8BBE\u5B9A\u901A\u8FC7nginx\u4E0A\u4F20\u6587\u4EF6\u7684\u5927\u5C0F</span>
    client_max_body_size 8m<span class="token punctuation">;</span>

    <span class="token comment">#\u5F00\u542F\u9AD8\u6548\u6587\u4EF6\u4F20\u8F93\u6A21\u5F0F\uFF0Csendfile\u6307\u4EE4\u6307\u5B9Anginx\u662F\u5426\u8C03\u7528sendfile\u51FD\u6570\u6765\u8F93\u51FA\u6587\u4EF6\uFF0C\u5BF9\u4E8E\u666E\u901A\u5E94\u7528\u8BBE\u4E3A on\uFF0C\u5982\u679C\u7528\u6765\u8FDB\u884C\u4E0B\u8F7D\u7B49\u5E94\u7528\u78C1\u76D8IO\u91CD\u8D1F\u8F7D\u5E94\u7528\uFF0C\u53EF\u8BBE\u7F6E\u4E3Aoff\uFF0C\u4EE5\u5E73\u8861\u78C1\u76D8\u4E0E\u7F51\u7EDCI/O\u5904\u7406\u901F\u5EA6\uFF0C\u964D\u4F4E\u7CFB\u7EDF\u7684\u8D1F\u8F7D\u3002\u6CE8\u610F\uFF1A\u5982\u679C\u56FE\u7247\u663E\u793A\u4E0D\u6B63\u5E38\u628A\u8FD9\u4E2A\u6539\u6210off\u3002</span>
    <span class="token comment">#sendfile\u6307\u4EE4\u6307\u5B9A nginx \u662F\u5426\u8C03\u7528sendfile \u51FD\u6570\uFF08zero copy \u65B9\u5F0F\uFF09\u6765\u8F93\u51FA\u6587\u4EF6\uFF0C\u5BF9\u4E8E\u666E\u901A\u5E94\u7528\uFF0C\u5FC5\u987B\u8BBE\u4E3Aon\u3002\u5982\u679C\u7528\u6765\u8FDB\u884C\u4E0B\u8F7D\u7B49\u5E94\u7528\u78C1\u76D8IO\u91CD\u8D1F\u8F7D\u5E94\u7528\uFF0C\u53EF\u8BBE\u7F6E\u4E3Aoff\uFF0C\u4EE5\u5E73\u8861\u78C1\u76D8\u4E0E\u7F51\u7EDCIO\u5904\u7406\u901F\u5EA6\uFF0C\u964D\u4F4E\u7CFB\u7EDFuptime\u3002</span>
    sendfile on<span class="token punctuation">;</span>

    <span class="token comment">#\u5F00\u542F\u76EE\u5F55\u5217\u8868\u8BBF\u95EE\uFF0C\u5408\u9002\u4E0B\u8F7D\u670D\u52A1\u5668\uFF0C\u9ED8\u8BA4\u5173\u95ED\u3002</span>
    autoindex on<span class="token punctuation">;</span>

    <span class="token comment">#\u6B64\u9009\u9879\u5141\u8BB8\u6216\u7981\u6B62\u4F7F\u7528socke\u7684TCP_CORK\u7684\u9009\u9879\uFF0C\u6B64\u9009\u9879\u4EC5\u5728\u4F7F\u7528sendfile\u7684\u65F6\u5019\u4F7F\u7528</span>
    tcp_nopush on<span class="token punctuation">;</span>
     
    tcp_nodelay on<span class="token punctuation">;</span>

    <span class="token comment">#\u957F\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2</span>
    keepalive_timeout <span class="token number">120</span><span class="token punctuation">;</span>

    <span class="token comment">#FastCGI\u76F8\u5173\u53C2\u6570\u662F\u4E3A\u4E86\u6539\u5584\u7F51\u7AD9\u7684\u6027\u80FD\uFF1A\u51CF\u5C11\u8D44\u6E90\u5360\u7528\uFF0C\u63D0\u9AD8\u8BBF\u95EE\u901F\u5EA6\u3002\u4E0B\u9762\u53C2\u6570\u770B\u5B57\u9762\u610F\u601D\u90FD\u80FD\u7406\u89E3\u3002</span>
    fastcgi_connect_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_send_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_read_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_buffer_size 64k<span class="token punctuation">;</span>
    fastcgi_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>
    fastcgi_busy_buffers_size 128k<span class="token punctuation">;</span>
    fastcgi_temp_file_write_size 128k<span class="token punctuation">;</span>

    <span class="token comment">#gzip\u6A21\u5757\u8BBE\u7F6E</span>
    <span class="token function">gzip</span> on<span class="token punctuation">;</span> <span class="token comment">#\u5F00\u542Fgzip\u538B\u7F29\u8F93\u51FA</span>
    gzip_min_length 1k<span class="token punctuation">;</span>    <span class="token comment">#\u6700\u5C0F\u538B\u7F29\u6587\u4EF6\u5927\u5C0F</span>
    gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span>    <span class="token comment">#\u538B\u7F29\u7F13\u51B2\u533A</span>
    gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span>    <span class="token comment">#\u538B\u7F29\u7248\u672C\uFF08\u9ED8\u8BA41.1\uFF0C\u524D\u7AEF\u5982\u679C\u662Fsquid2.5\u8BF7\u4F7F\u75281.0\uFF09</span>
    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>    <span class="token comment">#\u538B\u7F29\u7B49\u7EA7</span>
    gzip_types text/plain application/x-javascript text/css application/xml<span class="token punctuation">;</span>    <span class="token comment">#\u538B\u7F29\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u5C31\u5DF2\u7ECF\u5305\u542Btextml\uFF0C\u6240\u4EE5\u4E0B\u9762\u5C31\u4E0D\u7528\u518D\u5199\u4E86\uFF0C\u5199\u4E0A\u53BB\u4E5F\u4E0D\u4F1A\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u4F1A\u6709\u4E00\u4E2Awarn\u3002</span>
    gzip_vary on<span class="token punctuation">;</span>
    <span class="token comment">#\u5F00\u542F\u9650\u5236IP\u8FDE\u63A5\u6570\u7684\u65F6\u5019\u9700\u8981\u4F7F\u7528</span>
    <span class="token comment">#limit_zone crawler $binary_remote_addr 10m;</span>
    <span class="token comment">#\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E</span>
    upstream jh.w3cschool.cn <span class="token punctuation">{</span>
     
        <span class="token comment">#upstream\u7684\u8D1F\u8F7D\u5747\u8861\uFF0Cweight\u662F\u6743\u91CD\uFF0C\u53EF\u4EE5\u6839\u636E\u673A\u5668\u914D\u7F6E\u5B9A\u4E49\u6743\u91CD\u3002weigth\u53C2\u6570\u8868\u793A\u6743\u503C\uFF0C\u6743\u503C\u8D8A\u9AD8\u88AB\u5206\u914D\u5230\u7684\u51E0\u7387\u8D8A\u5927\u3002</span>
        server <span class="token number">192.168</span>.80.121:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.80.122:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.80.123:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>

        <span class="token comment">#nginx\u7684upstream\u76EE\u524D\u652F\u63014\u79CD\u65B9\u5F0F\u7684\u5206\u914D</span>
        <span class="token comment">#1\u3001\u8F6E\u8BE2\uFF08\u9ED8\u8BA4\uFF09</span>
        <span class="token comment">#\u6BCF\u4E2A\u8BF7\u6C42\u6309\u65F6\u95F4\u987A\u5E8F\u9010\u4E00\u5206\u914D\u5230\u4E0D\u540C\u7684\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u5982\u679C\u540E\u7AEF\u670D\u52A1\u5668down\u6389\uFF0C\u80FD\u81EA\u52A8\u5254\u9664\u3002</span>
        <span class="token comment">#2\u3001weight</span>
        <span class="token comment">#\u6307\u5B9A\u8F6E\u8BE2\u51E0\u7387\uFF0Cweight\u548C\u8BBF\u95EE\u6BD4\u7387\u6210\u6B63\u6BD4\uFF0C\u7528\u4E8E\u540E\u7AEF\u670D\u52A1\u5668\u6027\u80FD\u4E0D\u5747\u7684\u60C5\u51B5\u3002</span>
        <span class="token comment">#\u4F8B\u5982\uFF1A</span>
        <span class="token comment">#upstream bakend {</span>
        <span class="token comment">#    server 192.168.0.14 weight=10;</span>
        <span class="token comment">#    server 192.168.0.15 weight=10;</span>
        <span class="token comment">#}</span>
        <span class="token comment">#2\u3001ip_hash</span>
        <span class="token comment">#\u6BCF\u4E2A\u8BF7\u6C42\u6309\u8BBF\u95EEip\u7684hash\u7ED3\u679C\u5206\u914D\uFF0C\u8FD9\u6837\u6BCF\u4E2A\u8BBF\u5BA2\u56FA\u5B9A\u8BBF\u95EE\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u89E3\u51B3session\u7684\u95EE\u9898\u3002</span>
        <span class="token comment">#\u4F8B\u5982\uFF1A</span>
        <span class="token comment">#upstream bakend {</span>
        <span class="token comment">#    ip_hash;</span>
        <span class="token comment">#    server 192.168.0.14:88;</span>
        <span class="token comment">#    server 192.168.0.15:80;</span>
        <span class="token comment">#}</span>
        <span class="token comment">#3\u3001fair\uFF08\u7B2C\u4E09\u65B9\uFF09</span>
        <span class="token comment">#\u6309\u540E\u7AEF\u670D\u52A1\u5668\u7684\u54CD\u5E94\u65F6\u95F4\u6765\u5206\u914D\u8BF7\u6C42\uFF0C\u54CD\u5E94\u65F6\u95F4\u77ED\u7684\u4F18\u5148\u5206\u914D\u3002</span>
        <span class="token comment">#upstream backend {</span>
        <span class="token comment">#    server server1;</span>
        <span class="token comment">#    server server2;</span>
        <span class="token comment">#    fair;</span>
        <span class="token comment">#}</span>
        <span class="token comment">#4\u3001url_hash\uFF08\u7B2C\u4E09\u65B9\uFF09</span>
        <span class="token comment">#\u6309\u8BBF\u95EEurl\u7684hash\u7ED3\u679C\u6765\u5206\u914D\u8BF7\u6C42\uFF0C\u4F7F\u6BCF\u4E2Aurl\u5B9A\u5411\u5230\u540C\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u4E3A\u7F13\u5B58\u65F6\u6BD4\u8F83\u6709\u6548\u3002</span>
        <span class="token comment">#\u4F8B\uFF1A\u5728upstream\u4E2D\u52A0\u5165hash\u8BED\u53E5\uFF0Cserver\u8BED\u53E5\u4E2D\u4E0D\u80FD\u5199\u5165weight\u7B49\u5176\u4ED6\u7684\u53C2\u6570\uFF0Chash_method\u662F\u4F7F\u7528\u7684hash\u7B97\u6CD5</span>
        <span class="token comment">#upstream backend {</span>
        <span class="token comment">#    server squid1:3128;</span>
        <span class="token comment">#    server squid2:3128;</span>
        <span class="token comment">#    hash $request_uri;</span>
        <span class="token comment">#    hash_method crc32;</span>
        <span class="token comment">#}</span>

        <span class="token comment">#tips:</span>
        <span class="token comment">#upstream bakend{#\u5B9A\u4E49\u8D1F\u8F7D\u5747\u8861\u8BBE\u5907\u7684Ip\u53CA\u8BBE\u5907\u72B6\u6001}{</span>
        <span class="token comment">#    ip_hash;</span>
        <span class="token comment">#    server 127.0.0.1:9090 down;</span>
        <span class="token comment">#    server 127.0.0.1:8080 weight=2;</span>
        <span class="token comment">#    server 127.0.0.1:6060;</span>
        <span class="token comment">#    server 127.0.0.1:7070 backup;</span>
        <span class="token comment">#}</span>
        <span class="token comment">#\u5728\u9700\u8981\u4F7F\u7528\u8D1F\u8F7D\u5747\u8861\u7684server\u4E2D\u589E\u52A0 proxy_pass http://bakend/;</span>

        <span class="token comment">#\u6BCF\u4E2A\u8BBE\u5907\u7684\u72B6\u6001\u8BBE\u7F6E\u4E3A:</span>
        <span class="token comment">#1.down\u8868\u793A\u5355\u524D\u7684server\u6682\u65F6\u4E0D\u53C2\u4E0E\u8D1F\u8F7D</span>
        <span class="token comment">#2.weight\u4E3Aweight\u8D8A\u5927\uFF0C\u8D1F\u8F7D\u7684\u6743\u91CD\u5C31\u8D8A\u5927\u3002</span>
        <span class="token comment">#3.max_fails\uFF1A\u5141\u8BB8\u8BF7\u6C42\u5931\u8D25\u7684\u6B21\u6570\u9ED8\u8BA4\u4E3A1.\u5F53\u8D85\u8FC7\u6700\u5927\u6B21\u6570\u65F6\uFF0C\u8FD4\u56DEproxy_next_upstream\u6A21\u5757\u5B9A\u4E49\u7684\u9519\u8BEF</span>
        <span class="token comment">#4.fail_timeout:max_fails\u6B21\u5931\u8D25\u540E\uFF0C\u6682\u505C\u7684\u65F6\u95F4\u3002</span>
        <span class="token comment">#5.backup\uFF1A \u5176\u5B83\u6240\u6709\u7684\u975Ebackup\u673A\u5668down\u6216\u8005\u5FD9\u7684\u65F6\u5019\uFF0C\u8BF7\u6C42backup\u673A\u5668\u3002\u6240\u4EE5\u8FD9\u53F0\u673A\u5668\u538B\u529B\u4F1A\u6700\u8F7B\u3002</span>

        <span class="token comment">#nginx\u652F\u6301\u540C\u65F6\u8BBE\u7F6E\u591A\u7EC4\u7684\u8D1F\u8F7D\u5747\u8861\uFF0C\u7528\u6765\u7ED9\u4E0D\u7528\u7684server\u6765\u4F7F\u7528\u3002</span>
        <span class="token comment">#client_body_in_file_only\u8BBE\u7F6E\u4E3AOn \u53EF\u4EE5\u8BB2client post\u8FC7\u6765\u7684\u6570\u636E\u8BB0\u5F55\u5230\u6587\u4EF6\u4E2D\u7528\u6765\u505Adebug</span>
        <span class="token comment">#client_body_temp_path\u8BBE\u7F6E\u8BB0\u5F55\u6587\u4EF6\u7684\u76EE\u5F55 \u53EF\u4EE5\u8BBE\u7F6E\u6700\u591A3\u5C42\u76EE\u5F55</span>
        <span class="token comment">#location\u5BF9URL\u8FDB\u884C\u5339\u914D.\u53EF\u4EE5\u8FDB\u884C\u91CD\u5B9A\u5411\u6216\u8005\u8FDB\u884C\u65B0\u7684\u4EE3\u7406 \u8D1F\u8F7D\u5747\u8861</span>
    <span class="token punctuation">}</span>
     
     
     
    <span class="token comment">#\u865A\u62DF\u4E3B\u673A\u7684\u914D\u7F6E</span>
    server
    <span class="token punctuation">{</span>
        <span class="token comment">#\u76D1\u542C\u7AEF\u53E3</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>

        <span class="token comment">#\u57DF\u540D\u53EF\u4EE5\u6709\u591A\u4E2A\uFF0C\u7528\u7A7A\u683C\u9694\u5F00</span>
        server_name www.w3cschool.cn w3cschool.cn<span class="token punctuation">;</span>
        index index.html index.htm index.php<span class="token punctuation">;</span>
        root /data/www/w3cschool<span class="token punctuation">;</span>

        <span class="token comment">#\u5BF9******\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861</span>
        location ~ .*.<span class="token punctuation">(</span>php<span class="token operator">|</span>php5<span class="token punctuation">)</span>?$
        <span class="token punctuation">{</span>
            fastcgi_pass <span class="token number">127.0</span>.0.1:9000<span class="token punctuation">;</span>
            fastcgi_index index.php<span class="token punctuation">;</span>
            include fastcgi.conf<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
         
        <span class="token comment">#\u56FE\u7247\u7F13\u5B58\u65F6\u95F4\u8BBE\u7F6E</span>
        location ~ .*.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$
        <span class="token punctuation">{</span>
            expires 10d<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
         
        <span class="token comment">#JS\u548CCSS\u7F13\u5B58\u65F6\u95F4\u8BBE\u7F6E</span>
        location ~ .*.<span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>?$
        <span class="token punctuation">{</span>
            expires 1h<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
         
        <span class="token comment">#\u65E5\u5FD7\u683C\u5F0F\u8BBE\u5B9A</span>
        <span class="token comment">#$remote_addr\u4E0E$http_x_forwarded_for\u7528\u4EE5\u8BB0\u5F55\u5BA2\u6237\u7AEF\u7684ip\u5730\u5740\uFF1B</span>
        <span class="token comment">#$remote_user\uFF1A\u7528\u6765\u8BB0\u5F55\u5BA2\u6237\u7AEF\u7528\u6237\u540D\u79F0\uFF1B</span>
        <span class="token comment">#$time_local\uFF1A \u7528\u6765\u8BB0\u5F55\u8BBF\u95EE\u65F6\u95F4\u4E0E\u65F6\u533A\uFF1B</span>
        <span class="token comment">#$request\uFF1A \u7528\u6765\u8BB0\u5F55\u8BF7\u6C42\u7684url\u4E0Ehttp\u534F\u8BAE\uFF1B</span>
        <span class="token comment">#$status\uFF1A \u7528\u6765\u8BB0\u5F55\u8BF7\u6C42\u72B6\u6001\uFF1B\u6210\u529F\u662F200\uFF0C</span>
        <span class="token comment">#$body_bytes_sent \uFF1A\u8BB0\u5F55\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u6587\u4EF6\u4E3B\u4F53\u5185\u5BB9\u5927\u5C0F\uFF1B</span>
        <span class="token comment">#$http_referer\uFF1A\u7528\u6765\u8BB0\u5F55\u4ECE\u90A3\u4E2A\u9875\u9762\u94FE\u63A5\u8BBF\u95EE\u8FC7\u6765\u7684\uFF1B</span>
        <span class="token comment">#$http_user_agent\uFF1A\u8BB0\u5F55\u5BA2\u6237\u6D4F\u89C8\u5668\u7684\u76F8\u5173\u4FE1\u606F\uFF1B</span>
        <span class="token comment">#\u901A\u5E38web\u670D\u52A1\u5668\u653E\u5728\u53CD\u5411\u4EE3\u7406\u7684\u540E\u9762\uFF0C\u8FD9\u6837\u5C31\u4E0D\u80FD\u83B7\u53D6\u5230\u5BA2\u6237\u7684IP\u5730\u5740\u4E86\uFF0C\u901A\u8FC7$remote_add\u62FF\u5230\u7684IP\u5730\u5740\u662F\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u7684iP\u5730\u5740\u3002\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u5728\u8F6C\u53D1\u8BF7\u6C42\u7684http\u5934\u4FE1\u606F\u4E2D\uFF0C\u53EF\u4EE5\u589E\u52A0x_forwarded_for\u4FE1\u606F\uFF0C\u7528\u4EE5\u8BB0\u5F55\u539F\u6709\u5BA2\u6237\u7AEF\u7684IP\u5730\u5740\u548C\u539F\u6765\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u7684\u670D\u52A1\u5668\u5730\u5740\u3002</span>
        log_format access <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
        <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
        <span class="token string">&#39;&quot;$http_user_agent&quot; $http_x_forwarded_for&#39;</span><span class="token punctuation">;</span>
         
        <span class="token comment">#\u5B9A\u4E49\u672C\u865A\u62DF\u4E3B\u673A\u7684\u8BBF\u95EE\u65E5\u5FD7</span>
        access_log  /usr/local/nginx/logs/host.access.log  main<span class="token punctuation">;</span>
        access_log  /usr/local/nginx/logs/host.access.404.log  log404<span class="token punctuation">;</span>
         
        <span class="token comment">#\u5BF9 &quot;/&quot; \u542F\u7528\u53CD\u5411\u4EE3\u7406</span>
        location / <span class="token punctuation">{</span>
            proxy_pass http://127.0.0.1:88<span class="token punctuation">;</span>
            proxy_redirect off<span class="token punctuation">;</span>
            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
             
            <span class="token comment">#\u540E\u7AEF\u7684Web\u670D\u52A1\u5668\u53EF\u4EE5\u901A\u8FC7X-Forwarded-For\u83B7\u53D6\u7528\u6237\u771F\u5B9EIP</span>
            proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
             
            <span class="token comment">#\u4EE5\u4E0B\u662F\u4E00\u4E9B\u53CD\u5411\u4EE3\u7406\u7684\u914D\u7F6E\uFF0C\u53EF\u9009\u3002</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>

            <span class="token comment">#\u5141\u8BB8\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5355\u6587\u4EF6\u5B57\u8282\u6570</span>
            client_max_body_size 10m<span class="token punctuation">;</span>

            <span class="token comment">#\u7F13\u51B2\u533A\u4EE3\u7406\u7F13\u51B2\u7528\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5B57\u8282\u6570\uFF0C</span>
            <span class="token comment">#\u5982\u679C\u628A\u5B83\u8BBE\u7F6E\u4E3A\u6BD4\u8F83\u5927\u7684\u6570\u503C\uFF0C\u4F8B\u5982256k\uFF0C\u90A3\u4E48\uFF0C\u65E0\u8BBA\u4F7F\u7528firefox\u8FD8\u662FIE\u6D4F\u89C8\u5668\uFF0C\u6765\u63D0\u4EA4\u4EFB\u610F\u5C0F\u4E8E256k\u7684\u56FE\u7247\uFF0C\u90FD\u5F88\u6B63\u5E38\u3002\u5982\u679C\u6CE8\u91CA\u8BE5\u6307\u4EE4\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u7684client_body_buffer_size\u8BBE\u7F6E\uFF0C\u4E5F\u5C31\u662F\u64CD\u4F5C\u7CFB\u7EDF\u9875\u9762\u5927\u5C0F\u7684\u4E24\u500D\uFF0C8k\u6216\u800516k\uFF0C\u95EE\u9898\u5C31\u51FA\u73B0\u4E86\u3002</span>
            <span class="token comment">#\u65E0\u8BBA\u4F7F\u7528firefox4.0\u8FD8\u662FIE8.0\uFF0C\u63D0\u4EA4\u4E00\u4E2A\u6BD4\u8F83\u5927\uFF0C200k\u5DE6\u53F3\u7684\u56FE\u7247\uFF0C\u90FD\u8FD4\u56DE500 Internal Server Error\u9519\u8BEF</span>
            client_body_buffer_size 128k<span class="token punctuation">;</span>

            <span class="token comment">#\u8868\u793A\u4F7Fnginx\u963B\u6B62HTTP\u5E94\u7B54\u4EE3\u7801\u4E3A400\u6216\u8005\u66F4\u9AD8\u7684\u5E94\u7B54\u3002</span>
            proxy_intercept_errors on<span class="token punctuation">;</span>

            <span class="token comment">#\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4_\u53D1\u8D77\u63E1\u624B\u7B49\u5019\u54CD\u5E94\u8D85\u65F6\u65F6\u95F4</span>
            <span class="token comment">#nginx\u8DDF\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4(\u4EE3\u7406\u8FDE\u63A5\u8D85\u65F6)</span>
            proxy_connect_timeout <span class="token number">90</span><span class="token punctuation">;</span>

            <span class="token comment">#\u540E\u7AEF\u670D\u52A1\u5668\u6570\u636E\u56DE\u4F20\u65F6\u95F4(\u4EE3\u7406\u53D1\u9001\u8D85\u65F6)</span>
            <span class="token comment">#\u540E\u7AEF\u670D\u52A1\u5668\u6570\u636E\u56DE\u4F20\u65F6\u95F4_\u5C31\u662F\u5728\u89C4\u5B9A\u65F6\u95F4\u4E4B\u5185\u540E\u7AEF\u670D\u52A1\u5668\u5FC5\u987B\u4F20\u5B8C\u6240\u6709\u7684\u6570\u636E</span>
            proxy_send_timeout <span class="token number">90</span><span class="token punctuation">;</span>

            <span class="token comment">#\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4(\u4EE3\u7406\u63A5\u6536\u8D85\u65F6)</span>
            <span class="token comment">#\u8FDE\u63A5\u6210\u529F\u540E_\u7B49\u5019\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4_\u5176\u5B9E\u5DF2\u7ECF\u8FDB\u5165\u540E\u7AEF\u7684\u6392\u961F\u4E4B\u4E2D\u7B49\u5019\u5904\u7406\uFF08\u4E5F\u53EF\u4EE5\u8BF4\u662F\u540E\u7AEF\u670D\u52A1\u5668\u5904\u7406\u8BF7\u6C42\u7684\u65F6\u95F4\uFF09</span>
            proxy_read_timeout <span class="token number">90</span><span class="token punctuation">;</span>

            <span class="token comment">#\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\uFF08nginx\uFF09\u4FDD\u5B58\u7528\u6237\u5934\u4FE1\u606F\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span>
            <span class="token comment">#\u8BBE\u7F6E\u4ECE\u88AB\u4EE3\u7406\u670D\u52A1\u5668\u8BFB\u53D6\u7684\u7B2C\u4E00\u90E8\u5206\u5E94\u7B54\u7684\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u8FD9\u90E8\u5206\u5E94\u7B54\u4E2D\u5305\u542B\u4E00\u4E2A\u5C0F\u7684\u5E94\u7B54\u5934\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8FD9\u4E2A\u503C\u7684\u5927\u5C0F\u4E3A\u6307\u4EE4proxy_buffers\u4E2D\u6307\u5B9A\u7684\u4E00\u4E2A\u7F13\u51B2\u533A\u7684\u5927\u5C0F\uFF0C\u4E0D\u8FC7\u53EF\u4EE5\u5C06\u5176\u8BBE\u7F6E\u4E3A\u66F4\u5C0F</span>
            proxy_buffer_size 4k<span class="token punctuation">;</span>

            <span class="token comment">#proxy_buffers\u7F13\u51B2\u533A\uFF0C\u7F51\u9875\u5E73\u5747\u572832k\u4EE5\u4E0B\u7684\u8BBE\u7F6E</span>
            <span class="token comment">#\u8BBE\u7F6E\u7528\u4E8E\u8BFB\u53D6\u5E94\u7B54\uFF08\u6765\u81EA\u88AB\u4EE3\u7406\u670D\u52A1\u5668\uFF09\u7684\u7F13\u51B2\u533A\u6570\u76EE\u548C\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E5F\u4E3A\u5206\u9875\u5927\u5C0F\uFF0C\u6839\u636E\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4E0D\u540C\u53EF\u80FD\u662F4k\u6216\u80058k</span>
            proxy_buffers <span class="token number">4</span> 32k<span class="token punctuation">;</span>

            <span class="token comment">#\u9AD8\u8D1F\u8377\u4E0B\u7F13\u51B2\u5927\u5C0F\uFF08proxy_buffers*2\uFF09</span>
            proxy_busy_buffers_size 64k<span class="token punctuation">;</span>

            <span class="token comment">#\u8BBE\u7F6E\u5728\u5199\u5165proxy_temp_path\u65F6\u6570\u636E\u7684\u5927\u5C0F\uFF0C\u9884\u9632\u4E00\u4E2A\u5DE5\u4F5C\u8FDB\u7A0B\u5728\u4F20\u9012\u6587\u4EF6\u65F6\u963B\u585E\u592A\u957F</span>
            <span class="token comment">#\u8BBE\u5B9A\u7F13\u5B58\u6587\u4EF6\u5939\u5927\u5C0F\uFF0C\u5927\u4E8E\u8FD9\u4E2A\u503C\uFF0C\u5C06\u4ECEupstream\u670D\u52A1\u5668\u4F20</span>
            proxy_temp_file_write_size 64k<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
         
         
        <span class="token comment">#\u8BBE\u5B9A\u67E5\u770BNginx\u72B6\u6001\u7684\u5730\u5740</span>
        location /NginxStatus <span class="token punctuation">{</span>
            stub_status on<span class="token punctuation">;</span>
            access_log on<span class="token punctuation">;</span>
            auth_basic <span class="token string">&quot;NginxStatus&quot;</span><span class="token punctuation">;</span>
            auth_basic_user_file confpasswd<span class="token punctuation">;</span>
            <span class="token comment">#htpasswd\u6587\u4EF6\u7684\u5185\u5BB9\u53EF\u4EE5\u7528apache\u63D0\u4F9B\u7684htpasswd\u5DE5\u5177\u6765\u4EA7\u751F\u3002</span>
        <span class="token punctuation">}</span>
         
        <span class="token comment">#\u672C\u5730\u52A8\u9759\u5206\u79BB\u53CD\u5411\u4EE3\u7406\u914D\u7F6E</span>
        <span class="token comment">#\u6240\u6709jsp\u7684\u9875\u9762\u5747\u4EA4\u7531tomcat\u6216resin\u5904\u7406</span>
        location ~ .<span class="token punctuation">(</span>jsp<span class="token operator">|</span>jspx<span class="token operator">|</span><span class="token keyword">do</span><span class="token punctuation">)</span>?$ <span class="token punctuation">{</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
            proxy_pass http://127.0.0.1:8080<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
         
        <span class="token comment">#\u6240\u6709\u9759\u6001\u6587\u4EF6\u7531nginx\u76F4\u63A5\u8BFB\u53D6\u4E0D\u7ECF\u8FC7tomcat\u6216resin</span>
        location ~ .*.<span class="token punctuation">(</span>htm<span class="token operator">|</span>html<span class="token operator">|</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token operator">|</span>ioc<span class="token operator">|</span><span class="token function">rar</span><span class="token operator">|</span><span class="token function">zip</span><span class="token operator">|</span>txt<span class="token operator">|</span>flv<span class="token operator">|</span>mid<span class="token operator">|</span>doc<span class="token operator">|</span>ppt<span class="token operator">|</span>
        pdf<span class="token operator">|</span>xls<span class="token operator">|</span>mp3<span class="token operator">|</span>wma<span class="token punctuation">)</span>$
        <span class="token punctuation">{</span>
            expires 15d<span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>
         
        location ~ .*.<span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>?$
        <span class="token punctuation">{</span>
            expires 1h<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">######Nginx\u914D\u7F6E\u6587\u4EF6nginx.conf\u4E2D\u6587\u8BE6\u89E3#####</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u57FA\u7840nginx-conf" tabindex="-1"><a class="header-anchor" href="#_2-3-\u57FA\u7840nginx-conf" aria-hidden="true">#</a> 2.3 \u57FA\u7840nginx.conf</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>worker_processes  <span class="token number">8</span><span class="token punctuation">;</span>
 
events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
    sendfile        on<span class="token punctuation">;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>
    <span class="token comment">#\u5F00\u542Fgzip</span>
    <span class="token function">gzip</span>  on<span class="token punctuation">;</span>
    <span class="token comment">#\u4F4E\u4E8E1kb\u7684\u8D44\u6E90\u4E0D\u538B\u7F29 </span>
    gzip_min_length 1k<span class="token punctuation">;</span>
    <span class="token comment">#\u538B\u7F29\u7EA7\u522B1-9\uFF0C\u8D8A\u5927\u538B\u7F29\u7387\u8D8A\u9AD8\uFF0C\u540C\u65F6\u6D88\u8017cpu\u8D44\u6E90\u4E5F\u8D8A\u591A\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u57285\u5DE6\u53F3\u3002 </span>
    gzip_comp_level <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token comment">#\u9700\u8981\u538B\u7F29\u54EA\u4E9B\u54CD\u5E94\u7C7B\u578B\u7684\u8D44\u6E90\uFF0C\u591A\u4E2A\u7A7A\u683C\u9694\u5F00\u3002\u4E0D\u5EFA\u8BAE\u538B\u7F29\u56FE\u7247.</span>
    gzip_types text/plain application/javascript application/x-javascript text/javascript text/xml text/css image/png font/woff<span class="token punctuation">;</span> 
    <span class="token comment">#\u914D\u7F6E\u7981\u7528gzip\u6761\u4EF6\uFF0C\u652F\u6301\u6B63\u5219\u3002\u6B64\u5904\u8868\u793Aie6\u53CA\u4EE5\u4E0B\u4E0D\u542F\u7528gzip\uFF08\u56E0\u4E3Aie\u4F4E\u7248\u672C\u4E0D\u652F\u6301\uFF09</span>
    gzip_disable <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span> 
    <span class="token comment">#\u662F\u5426\u6DFB\u52A0\u201CVary: Accept-Encoding\u201D\u54CD\u5E94\u5934</span>
    gzip_vary on<span class="token punctuation">;</span>
 
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span> default_server<span class="token punctuation">;</span>
        <span class="token comment"># ipv6</span>
        listen    <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80<span class="token punctuation">;</span> 
        server_name  localhost<span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span>
            root   /www/server/dist/dist<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment"># \u4EE3\u7406\u8F6C\u53D1</span>
        location /saas-admin <span class="token punctuation">{</span>
            proxy_pass https://cd-admin-sit.zhizukj.com<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">8081</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span>
            root   /www/server/dist<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment"># \u4EE3\u7406\u8F6C\u53D1</span>
        location /saas-admin <span class="token punctuation">{</span>
            proxy_pass https://cd-admin-sit.zhizukj.com<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">8088</span><span class="token punctuation">;</span>
        listen    <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:8088<span class="token punctuation">;</span>
        server_name  <span class="token number">127.0</span>.0.1:8088<span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span>
            root   /www/server/dist<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment"># \u4EE3\u7406\u8F6C\u53D1</span>
        location /saas-admin <span class="token punctuation">{</span>
            proxy_pass https://cd-admin-sit.zhizukj.com<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-nginx\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-4-nginx\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 2.4 nginx\u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770Bnginx\u8FD0\u884C\u72B6\u6001</span>
<span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> nginx

<span class="token comment"># \u67E5\u770Bnginx\u7248\u672C\u53F7</span>
nginx -V

<span class="token comment"># \u67E5\u770Bnginx\u72B6\u6001</span>
systemctl status nginx.service

<span class="token comment"># \u542F\u52A8nginx</span>
systemctl start nginx.service

<span class="token comment"># \u505C\u6B62nginx</span>
systemctl stop nginx.service

<span class="token comment"># \u91CD\u8F7Dnginx</span>
systemctl reload nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h3><ul><li>ecs\u7BA1\u7406\u540E\u53F0\u9632\u706B\u5899\uFF0C\u9700\u8981\u5F00\u542F\u5BF9\u5E94\u7684\u7AEF\u53E3\u540E\uFF0C\u5426\u5219\u65E0\u6CD5\u8BBF\u95EE</li></ul><h2 id="_3-\u642D\u5EFAjenkins\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_3-\u642D\u5EFAjenkins\u670D\u52A1" aria-hidden="true">#</a> 3.\u642D\u5EFAjenkins\u670D\u52A1</h2><h3 id="_3-1-jenkins\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_3-1-jenkins\u7B80\u4ECB" aria-hidden="true">#</a> 3.1 jenkins\u7B80\u4ECB</h3><p>Jenkins\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u5F00\u6E90\u8F6F\u4EF6\u9879\u76EE\uFF0C\u662F\u57FA\u4E8EJava\u5F00\u53D1\u7684\u4E00\u79CD\u6301\u7EED\u96C6\u6210\u5DE5\u5177\uFF0C\u7528\u4E8E\u76D1\u63A7\u6301\u7EED\u91CD\u590D\u7684\u5DE5\u4F5C\uFF0C\u65E8\u5728\u63D0\u4F9B\u4E00\u4E2A\u5F00\u653E\u6613\u7528\u7684\u8F6F\u4EF6\u5E73\u53F0\uFF0C\u4F7F\u8F6F\u4EF6\u7684\u6301\u7EED\u96C6\u6210\u53D8\u6210\u53EF\u80FD\u3002\u524D\u8EAB\u662FHudson\u662F\u4E00\u4E2A\u53EF\u6269\u5C55\u7684\u6301\u7EED\u96C6\u6210\u5F15\u64CE\u3002\u53EF\u7528\u4E8E\u81EA\u52A8\u5316\u5404\u79CD\u4EFB\u52A1\uFF0C\u5982\u6784\u5EFA\uFF0C\u6D4B\u8BD5\u548C\u90E8\u7F72\u8F6F\u4EF6\u3002Jenkins\u53EF\u4EE5\u901A\u8FC7\u672C\u673A\u7CFB\u7EDF\u5305Docker\u5B89\u88C5\uFF0C\u751A\u81F3\u53EF\u4EE5\u901A\u8FC7\u5B89\u88C5Java Runtime Environment\u7684\u4EFB\u4F55\u673A\u5668\u72EC\u7ACB\u8FD0\u884C\u3002</p><h3 id="_3-2-\u642D\u5EFAjenkins\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_3-2-\u642D\u5EFAjenkins\u73AF\u5883" aria-hidden="true">#</a> 3.2 \u642D\u5EFAjenkins\u73AF\u5883</h3>`,22),en={href:"https://cloud.tencent.com/developer/article/1954451",target:"_blank",rel:"noopener noreferrer"},an=s("Centos7\u5B89\u88C5Jenkins"),tn={href:"https://blog.csdn.net/xj757306533/article/details/121683492",target:"_blank",rel:"noopener noreferrer"},ln=s("\u817E\u8BAF\u4E91\u670D\u52A1\u5668Centos\u4E0A\u5B89\u88C5Jenkins"),cn=s("\u6D4F\u89C8\u5668\u767B\u5F55\uFF1A"),on={href:"http://xn--ip-im8ckc",target:"_blank",rel:"noopener noreferrer"},pn=s("http://ip\u5730\u5740"),rn=s(":\u5177\u4F53\u7AEF\u53E3 \u51FA\u73B0\u5982\u4E0B\u754C\u9762\u5373\u5B89\u88C5\u6210\u529F"),dn=n("div",{style:{"text-align":"center"}},[n("img",{src:b})],-1),un=n("h3",{id:"_3-3-\u6784\u5EFA\u7B2C\u4E00\u4E2Ademo-\u62C9\u53D6\u4EE3\u7801",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-3-\u6784\u5EFA\u7B2C\u4E00\u4E2Ademo-\u62C9\u53D6\u4EE3\u7801","aria-hidden":"true"},"#"),s(" 3.3 \u6784\u5EFA\u7B2C\u4E00\u4E2Ademo(\u62C9\u53D6\u4EE3\u7801)")],-1),mn=s("\u4E07\u91CC\u957F\u5F81\u7B2C\u4E00\u6B65 "),vn={href:"https://blog.csdn.net/heian_99/article/details/124809338",target:"_blank",rel:"noopener noreferrer"},bn=s("Jenkins\u5165\u95E8\u914D\u7F6E"),kn=i(`<h4 id="_3-3-1-\u914D\u7F6E\u670D\u52A1\u5668\u672C\u5730git\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_3-3-1-\u914D\u7F6E\u670D\u52A1\u5668\u672C\u5730git\u5730\u5740" aria-hidden="true">#</a> 3.3.1 \u914D\u7F6E\u670D\u52A1\u5668\u672C\u5730git\u5730\u5740</h4><p>\u67E5\u770B\u670D\u52A1\u5668git\u5730\u5740</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">whereis</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+k+'" alt="image" loading="lazy"></p><p>jenkins \u914D\u7F6E\u670D\u52A1\u5668\u672C\u5730git</p><p><img src="'+h+'" alt="image" loading="lazy"></p><h4 id="_3-3-2-jenkins\u51ED\u636E\u7BA1\u7406-\u914D\u7F6Egitee\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#_3-3-2-jenkins\u51ED\u636E\u7BA1\u7406-\u914D\u7F6Egitee\u79C1\u94A5" aria-hidden="true">#</a> 3.3.2 Jenkins\u51ED\u636E\u7BA1\u7406 ---- \u914D\u7F6EGitee\u79C1\u94A5</h4>',7),hn={href:"https://blog.csdn.net/redrose2100/article/details/121627320",target:"_blank",rel:"noopener noreferrer"},_n=s("\u914D\u7F6EGitee\u79C1\u94A5"),gn=n("h4",{id:"_3-3-3-\u6210\u529F\u6784\u5EFA",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-3-3-\u6210\u529F\u6784\u5EFA","aria-hidden":"true"},"#"),s(" 3.3.3 \u6210\u529F\u6784\u5EFA")],-1),fn=n("p",null,[n("img",{src:_,alt:"image",loading:"lazy"})],-1),xn={href:"https://juejin.cn/post/7110208075214094350",target:"_blank",rel:"noopener noreferrer"},wn=s("Jenkins + Github + Nginx \u5B9E\u73B0\u524D\u7AEF\u81EA\u52A8\u5316"),yn=n("h2",{id:"_4-docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-docker","aria-hidden":"true"},"#"),s(" 4.docker")],-1),zn=n("h3",{id:"_4-1-docker\u7B80\u4ECB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-1-docker\u7B80\u4ECB","aria-hidden":"true"},"#"),s(" 4.1 docker\u7B80\u4ECB")],-1),jn={href:"https://juejin.cn/post/7044142817345536030",target:"_blank",rel:"noopener noreferrer"},qn=s("\u4E00\u6B65\u4E00\u6B65\u4ECE0\u52301\u638C\u63E1Docker"),In={href:"https://mp.weixin.qq.com/s/ELUr5M5Yp1Y7n_sw1e_F4Q",target:"_blank",rel:"noopener noreferrer"},$n=s("\u5199\u7ED9\u524D\u7AEF\u7684Docker\u5165\u95E8\u7EC8\u6781\u6307\u5357\uFF0C\u522B\u518D\u8BF4\u4E0D\u4F1A\u7528Docker\u4E86"),Sn=i('<h3 id="_4-2-k8s" tabindex="-1"><a class="header-anchor" href="#_4-2-k8s" aria-hidden="true">#</a> 4.2 k8s</h3><h3 id="_4-3" tabindex="-1"><a class="header-anchor" href="#_4-3" aria-hidden="true">#</a> 4.3 ......</h3><h2 id="_5-https\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#_5-https\u8BBF\u95EE" aria-hidden="true">#</a> 5. https\u8BBF\u95EE</h2><h3 id="_5-1-\u5B9E\u540D\u8BA4\u8BC1-\u8D2D\u4E70\u57DF\u540D-ssl\u8BC1\u4E66\u8BA4\u8BC1-\u7F51\u7AD9\u5907\u6848" tabindex="-1"><a class="header-anchor" href="#_5-1-\u5B9E\u540D\u8BA4\u8BC1-\u8D2D\u4E70\u57DF\u540D-ssl\u8BC1\u4E66\u8BA4\u8BC1-\u7F51\u7AD9\u5907\u6848" aria-hidden="true">#</a> 5.1 \u5B9E\u540D\u8BA4\u8BC1 \u8D2D\u4E70\u57DF\u540D ssl\u8BC1\u4E66\u8BA4\u8BC1 \u7F51\u7AD9\u5907\u6848</h3><h3 id="_5-2" tabindex="-1"><a class="header-anchor" href="#_5-2" aria-hidden="true">#</a> 5.2 .....</h3>',5);function Nn(En,Cn){const e=l("ExternalLinkIcon");return c(),o("div",null,[f,n("p",null,[x,n("a",w,[y,a(e)])]),z,n("ul",null,[n("li",null,[n("a",j,[q,a(e)])]),n("li",null,[n("a",I,[$,a(e)])]),n("li",null,[n("a",S,[N,a(e)])])]),E,n("p",null,[n("a",C,[P,a(e)])]),D,X,T,n("p",null,[n("a",F,[J,a(e)])]),n("p",null,[n("a",O,[L,a(e)])]),B,n("p",null,[n("a",H,[M,a(e)])]),n("p",null,[n("a",V,[G,a(e)])]),R,n("p",null,[n("a",A,[U,a(e)])]),W,Z,n("p",null,[n("a",K,[Y,a(e)])]),n("p",null,[n("a",Q,[nn,a(e)])]),sn,n("p",null,[n("a",en,[an,a(e)])]),n("p",null,[n("a",tn,[ln,a(e)])]),n("p",null,[cn,n("a",on,[pn,a(e)]),rn]),dn,un,n("p",null,[mn,n("a",vn,[bn,a(e)])]),kn,n("p",null,[n("a",hn,[_n,a(e)])]),gn,fn,n("p",null,[n("a",xn,[wn,a(e)])]),yn,zn,n("p",null,[n("a",jn,[qn,a(e)])]),n("p",null,[n("a",In,[$n,a(e)])]),Sn])}var Xn=t(g,[["render",Nn],["__file","CICD.html.vue"]]);export{Xn as default};
