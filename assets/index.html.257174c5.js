import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as s}from"./app.15057efb.js";const l={},d=s(`<h1 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h1><h2 id="centos-\u9632\u706B\u5899\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#centos-\u9632\u706B\u5899\u76F8\u5173" aria-hidden="true">#</a> centos \u9632\u706B\u5899\u76F8\u5173</h2><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code># 1\u3001\u67E5\u770B\u9632\u706B\u5899\u72B6\u6001
firewall-cmd --state

# 2\u3001\u67E5\u770B\u9632\u706B\u5899\u6240\u6709\u5F00\u653E\u7684\u7AEF\u53E3
firewall-cmd --zone=public --list-ports

# 3.\u3001\u5F00\u5173\u9632\u706B\u5899
systemctl start firewalld.service
systemctl stop firewalld.service
systemctl restart firewalld.service

# 4\u3001\u5F00\u653E\u7AEF\u53E3
firewall-cmd --zone=public --add-port=80/tcp --permanent # \u5F00\u653E80\u7AEF\u53E3
firewall-cmd --zone=public --remove-port=80/tcp --permanent #\u5173\u95ED80\u7AEF\u53E3
firewall-cmd --reload # \u914D\u7F6E\u7ACB\u5373\u751F\u6548

# 5\u3001\u67E5\u770B\u76D1\u542C\u7684\u7AEF\u53E3
netstat -tunlp

# \u25CFcentos7\u9ED8\u8BA4\u6CA1\u6709 netstat \u547D\u4EE4\uFF0C\u9700\u8981\u5B89\u88C5 net-tools \u5DE5\u5177\uFF0Cyum install -y net-tools

# 6\u3001\u68C0\u67E5\u7AEF\u53E3\u88AB\u54EA\u4E2A\u8FDB\u7A0B\u5360\u7528
netstat -lnpt |grep 80

# 7\u3001\u67E5\u770B\u8FDB\u7A0B\u7684\u8BE6\u7EC6\u4FE1\u606F
ps 6832

# 8\u3001\u4E2D\u6B62\u8FDB\u7A0B
kill -9 6832
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[d];function r(c,v){return n(),i("div",null,a)}var u=e(l,[["render",r],["__file","index.html.vue"]]);export{u as default};
