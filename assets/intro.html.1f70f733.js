import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as s,c as n,a as e,b as a,e as i,d as t}from"./app.545d3eb0.js";const c={},d=i('<p>\u4ECE\u672C\u7AE0\u5F00\u59CB\uFF0C\u6211\u4EEC\u5C31\u6B63\u5F0F\u5F00\u542F JavaScript \u7684\u540E\u7AEF\u5F00\u53D1\u4E4B\u65C5\u3002</p><p>Node.js \u662F\u76EE\u524D\u975E\u5E38\u706B\u70ED\u7684\u6280\u672F\uFF0C\u4F46\u662F\u5B83\u7684\u8BDE\u751F\u7ECF\u5386\u5374\u5F88\u5947\u7279\u3002</p><p>\u4F17\u6240\u5468\u77E5\uFF0C\u5728 Netscape \u8BBE\u8BA1\u51FA JavaScript \u540E\u7684\u77ED\u77ED\u51E0\u4E2A\u6708\uFF0CJavaScript \u4E8B\u5B9E\u4E0A\u5DF2\u7ECF\u662F\u524D\u7AEF\u5F00\u53D1\u7684\u552F\u4E00\u6807\u51C6\u3002</p><p>\u540E\u6765\uFF0C\u5FAE\u8F6F\u901A\u8FC7 IE \u51FB\u8D25\u4E86 Netscape \u540E\u4E00\u7EDF\u684C\u9762\uFF0C\u7ED3\u679C\u51E0\u5E74\u65F6\u95F4\uFF0C\u6D4F\u89C8\u5668\u6BEB\u65E0\u8FDB\u6B65\u3002(2001 \u5E74\u63A8\u51FA\u7684\u53E4\u8001\u7684 IE 6 \u5230\u4ECA\u5929\u4ECD\u7136\u6709\u4EBA\u5728\u4F7F\u7528! )</p><p>\u6CA1\u6709\u7ADE\u4E89\u5C31\u6CA1\u6709\u53D1\u5C55\u3002\u5FAE\u8F6F\u8BA4\u4E3A IE6 \u6D4F\u89C8\u5668\u5DF2\u7ECF\u975E\u5E38\u5B8C\u5584\uFF0C\u51E0\u4E4E\u6CA1\u6709\u53EF\u6539\u8FDB\u4E4B\u5904\uFF0C\u7136\u540E\u89E3\u6563\u4E86 IE6 \u5F00\u53D1\u56E2\u961F! \u800C Google \u5374\u8BA4\u4E3A\u652F\u6301\u73B0\u4EE3 Web \u5E94\u7528\u7684\u65B0\u4E00\u4EE3\u6D4F\u89C8\u5668\u624D\u521A\u521A\u8D77\u6B65\uFF0C\u5C24\u5176\u662F\u6D4F\u89C8\u5668\u8D1F\u8D23\u8FD0\u884C JavaScript \u7684\u5F15\u64CE\u6027\u80FD\u8FD8\u53EF\u63D0\u5347 10 \u500D\u3002</p><p>\u5148\u662F Mozilla \u501F\u52A9\u5DF2\u58EE\u70C8\u727A\u7272\u7684 Netscape \u9057\u4EA7\u5728 2002 \u5E74\u63A8\u51FA\u4E86 Firefox \u6D4F\u89C8\u5668\uFF0C\u7D27\u63A5\u7740 Apple \u4E8E 2003 \u5E74\u5728\u5F00\u6E90\u7684 KHTML \u6D4F\u89C8\u5668\u7684\u57FA\u7840\u4E0A\u63A8\u51FA\u4E86 WebKit \u5185\u6838\u7684 Safari \u6D4F\u89C8\u5668\uFF0C\u4E0D\u8FC7\u4EC5\u9650\u4E8E Mac \u5E73\u53F0\u3002</p><p>\u968F\u540E\uFF0CGoogle \u4E5F\u5F00\u59CB\u521B\u5EFA\u81EA\u5BB6\u7684\u6D4F\u89C8\u5668\u3002\u4ED6\u4EEC\u4E5F\u770B\u4E2D\u4E86 WebKit \u5185\u6838\uFF0C\u4E8E\u662F\u57FA\u4E8E WebKit \u5185\u6838\u63A8\u51FA\u4E86 Chrome \u6D4F\u89C8\u5668\u3002</p><p>Chrome \u6D4F\u89C8\u5668\u662F\u8DE8 Windows \u548C Mac \u5E73\u53F0\u7684\uFF0C\u5E76\u4E14\uFF0CGoogle \u8BA4\u4E3A\u8981\u8FD0\u884C\u73B0\u4EE3 Web \u5E94\u7528\uFF0C\u6D4F\u89C8\u5668\u5FC5\u987B\u6709\u4E00\u4E2A\u6027\u80FD\u975E\u5E38\u5F3A\u52B2\u7684 JavaScript \u5F15\u64CE\uFF0C\u4E8E\u662F Google \u81EA\u5DF1\u5F00\u53D1\u4E86\u4E00\u4E2A\u9AD8\u6027\u80FD JavaScript \u5F15\u64CE\uFF0C\u540D\u5B57\u53EB V8\uFF0C\u4EE5 BSD \u8BB8\u53EF\u8BC1\u5F00\u6E90\u3002</p><p>\u73B0\u4EE3\u6D4F\u89C8\u5668\u5927\u6218\u8BA9\u5FAE\u8F6F\u7684 IE \u6D4F\u89C8\u5668\u8FDC\u8FDC\u5730\u843D\u540E\u4E86\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u89E3\u6563\u4E86\u6700\u6709\u7ECF\u9A8C\u3001\u6218\u6597\u529B\u6700\u5F3A\u7684\u6D4F\u89C8\u5668\u56E2\u961F! \u56DE\u8FC7\u5934\u518D\u8FFD\u8D76\u5374\u53D1\u73B0\uFF0C\u652F\u6301 HTML5 \u7684 WebKit \u5DF2\u7ECF\u6210\u4E3A\u624B\u673A\u7AEF\u7684\u6807\u51C6\u4E86\uFF0CIE \u6D4F\u89C8\u5668\u4ECE\u6B64\u4E0E\u4E3B\u6D41\u79FB\u52A8\u7AEF\u8BBE\u5907\u7EDD\u7F18\u3002</p><h2 id="\u6D4F\u89C8\u5668\u5927\u6218\u548C-node-js-\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u5927\u6218\u548C-node-js-\u7684\u5173\u7CFB" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u5927\u6218\u548C Node.js \u7684\u5173\u7CFB</h2><p>\u8BDD\u8BF4\u6709\u4E2A\u53EB Ryan Dahl \u7684\u6B6A\u679C\u4EC1\uFF0C\u4ED6\u7684\u5DE5\u4F5C\u662F\u7528 C/C++\u5199\u9AD8\u6027\u80FD Web \u670D\u52A1\u3002\u5BF9\u4E8E\u9AD8\u6027\u80FD\uFF0C\u5F02\u6B65 IO\u3001\u4E8B\u4EF6\u9A71\u52A8\u662F\u57FA\u672C\u539F\u5219\uFF0C\u4F46\u662F\u7528 C/C++\u5199\u5C31\u592A\u75DB\u82E6\u4E86\u3002\u4E8E\u662F\u8FD9\u4F4D\u4EC1\u5144\u5F00\u59CB\u8BBE\u60F3\u7528\u9AD8\u7EA7\u8BED\u8A00\u5F00\u53D1 Web \u670D\u52A1\u3002\u4ED6\u8BC4\u4F30\u4E86\u5F88\u591A\u79CD\u9AD8\u7EA7\u8BED\u8A00\uFF0C\u53D1\u73B0\u5F88\u591A\u8BED\u8A00\u867D\u7136\u540C\u65F6\u63D0\u4F9B\u4E86\u540C\u6B65 IO \u548C\u5F02\u6B65 IO\uFF0C\u4F46\u662F\u5F00\u53D1\u4EBA\u5458\u4E00\u65E6\u7528\u4E86\u540C\u6B65 IO\uFF0C\u4ED6\u4EEC\u5C31\u518D\u4E5F\u61D2\u5F97\u5199\u5F02\u6B65 IO \u4E86\uFF0C\u6240\u4EE5\uFF0C\u6700\u7EC8\uFF0CRyan \u7784\u5411\u4E86 JavaScript\u3002</p><p>\u56E0\u4E3A JavaScript \u662F\u5355\u7EBF\u7A0B\u6267\u884C\uFF0C\u6839\u672C\u4E0D\u80FD\u8FDB\u884C\u540C\u6B65 IO \u64CD\u4F5C\uFF0C\u6240\u4EE5\uFF0CJavaScript \u7684\u8FD9\u4E00\u201C\u7F3A\u9677\u201D\u5BFC\u81F4\u4E86\u5B83\u53EA\u80FD\u4F7F\u7528\u5F02\u6B65 IO\u3002</p><p>\u9009\u5B9A\u4E86\u5F00\u53D1\u8BED\u8A00\uFF0C\u8FD8\u8981\u6709\u8FD0\u884C\u65F6\u5F15\u64CE\u3002\u8FD9\u4F4D\u4EC1\u5144\u66FE\u8003\u8651\u8FC7\u81EA\u5DF1\u5199\u4E00\u4E2A\uFF0C\u4E0D\u8FC7\u660E\u667A\u5730\u653E\u5F03\u4E86\uFF0C\u56E0\u4E3A V8 \u5C31\u662F\u5F00\u6E90\u7684 JavaScript \u5F15\u64CE\u3002\u8BA9 Google \u6295\u8D44\u53BB\u4F18\u5316 V8\uFF0C\u54B1\u53EA\u8D1F\u8D23\u6539\u9020\u4E00\u4E0B\u62FF\u6765\u7528\uFF0C\u8FD8\u4E0D\u7528\u4ED8\u94B1\uFF0C\u8FD9\u4E2A\u4E70\u5356\u5F88\u5212\u7B97\u3002</p><p>\u4E8E\u662F\u5728 2009 \u5E74\uFF0CRyan \u6B63\u5F0F\u63A8\u51FA\u4E86\u57FA\u4E8E JavaScript \u8BED\u8A00\u548C V8 \u5F15\u64CE\u7684\u5F00\u6E90 Web \u670D\u52A1\u5668\u9879\u76EE\uFF0C\u547D\u540D\u4E3A Node.js\u3002\u867D\u7136\u540D\u5B57\u5F88\u571F\uFF0C\u4F46\u662F\uFF0CNode.js \u7B2C\u4E00\u6B21\u628A JavaScript \u5E26\u5165\u5230\u540E\u7AEF\u670D\u52A1\u5668\u5F00\u53D1\uFF0C\u52A0\u4E0A\u4E16\u754C\u4E0A\u5DF2\u7ECF\u6709\u65E0\u6570\u7684 JavaScript \u5F00\u53D1\u4EBA\u5458\uFF0C\u6240\u4EE5 Node.js \u4E00\u4E0B\u5B50\u5C31\u706B\u4E86\u8D77\u6765\u3002</p><h2 id="\u5728-node-js-\u4E0A\u8FD0\u884C\u7684-javascript-\u76F8\u6BD4\u5176\u4ED6\u540E\u7AEF\u5F00\u53D1\u8BED\u8A00\u7684\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#\u5728-node-js-\u4E0A\u8FD0\u884C\u7684-javascript-\u76F8\u6BD4\u5176\u4ED6\u540E\u7AEF\u5F00\u53D1\u8BED\u8A00\u7684\u4F18\u52BF" aria-hidden="true">#</a> \u5728 Node.js \u4E0A\u8FD0\u884C\u7684 JavaScript \u76F8\u6BD4\u5176\u4ED6\u540E\u7AEF\u5F00\u53D1\u8BED\u8A00\u7684\u4F18\u52BF</h2><p>\u6700\u5927\u7684\u4F18\u52BF\u662F\u501F\u52A9 JavaScript \u5929\u751F\u7684\u4E8B\u4EF6\u9A71\u52A8\u673A\u5236\u52A0 V8 \u9AD8\u6027\u80FD\u5F15\u64CE\uFF0C\u4F7F\u7F16\u5199\u9AD8\u6027\u80FD Web \u670D\u52A1\u8F7B\u800C\u6613\u4E3E\u3002</p><p>\u5176\u6B21\uFF0CJavaScript \u8BED\u8A00\u672C\u8EAB\u662F\u5B8C\u5584\u7684\u51FD\u6570\u5F0F\u8BED\u8A00\uFF0C\u5728\u524D\u7AEF\u5F00\u53D1\u65F6\uFF0C\u5F00\u53D1\u4EBA\u5458\u5F80\u5F80\u5199\u5F97\u6BD4\u8F83\u968F\u610F\uFF0C\u8BA9\u4EBA\u611F\u89C9 JavaScript \u5C31\u662F\u4E2A\u201C\u73A9\u5177\u8BED\u8A00\u201D\u3002\u4F46\u662F\uFF0C\u5728 Node.js \u73AF\u5883\u4E0B\uFF0C\u901A\u8FC7\u6A21\u5757\u5316\u7684 JavaScript \u4EE3\u7801\uFF0C\u52A0\u4E0A\u51FD\u6570\u5F0F\u7F16\u7A0B\uFF0C\u5E76\u4E14\u65E0\u9700\u8003\u8651\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u76F4\u63A5\u4F7F\u7528\u6700\u65B0\u7684 ECMAScript 6 \u6807\u51C6\uFF0C\u53EF\u4EE5\u5B8C\u5168\u6EE1\u8DB3\u5DE5\u7A0B\u4E0A\u7684\u9700\u6C42\u3002</p><blockquote><p>\u6211\u8FD8\u542C\u8BF4\u8FC7 io.js\uFF0C\u8FD9\u53C8\u662F\u4EC0\u4E48\u9B3C?</p></blockquote><p>\u56E0\u4E3A Node.js \u662F\u5F00\u6E90\u9879\u76EE\uFF0C\u867D\u7136\u7531\u793E\u533A\u63A8\u52A8\uFF0C\u4F46\u5E55\u540E\u4E00\u76F4\u7531 Joyent \u516C\u53F8\u8D44\u52A9\u3002\u7531\u4E8E\u4E00\u7FA4\u5F00\u53D1\u8005\u5BF9 Joyent \u516C\u53F8\u7684\u7B56\u7565\u4E0D\u6EE1\uFF0C\u4E8E 2014 \u5E74\u4ECE Node.js \u9879\u76EE fork \u51FA\u4E86 io.js \u9879\u76EE\uFF0C\u51B3\u5B9A\u5355\u72EC\u53D1\u5C55\uFF0C\u4F46\u4E24\u8005\u5B9E\u9645\u4E0A\u662F\u517C\u5BB9\u7684\u3002</p><p>\u7136\u800C\u4E2D\u56FD\u6709\u53E5\u53E4\u8BDD\uFF0C\u53EB\u505A\u201C\u5206\u4E45\u5FC5\u5408\uFF0C\u5408\u4E45\u5FC5\u5206\u201D\u3002\u5206\u5BB6\u540E\u6CA1\u591A\u4E45\uFF0CJoyent \u516C\u53F8\u8868\u793A\u8981\u548C\u89E3\uFF0C\u4E8E\u662F\uFF0Cio.js \u9879\u76EE\u53C8\u51B3\u5B9A\u56DE\u5F52 Node.js\u3002</p><p>\u5177\u4F53\u505A\u6CD5\u662F\u5C06\u6765 io.js \u5C06\u9996\u5148\u6DFB\u52A0\u65B0\u7684\u7279\u6027\uFF0C\u5982\u679C\u5927\u5BB6\u6D4B\u8BD5\u7528\u5F97\u723D\uFF0C\u5C31\u628A\u65B0\u7279\u6027\u52A0\u5165 Node.js\u3002Io.js \u662F\u201C\u5C1D\u9C9C\u7248\u201D\uFF0C\u800C Node.js \u662F\u7EBF\u4E0A\u7A33\u5B9A\u7248\uFF0C\u76F8\u5F53\u4E8E Fedora Linux \u548C RHEL \u7684\u5173\u7CFB\u3002</p><p>\u672C\u7AE0\u6559\u7A0B\u7684\u6240\u6709\u4EE3\u7801\u90FD\u5728 Node.js \u4E0A\u8C03\u8BD5\u901A\u8FC7\u3002\u5982\u679C\u60A8\u8981\u5C1D\u8BD5 io.js \u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u4E0D\u8FC7\u4E24\u8005\u5982\u679C\u9047\u5230\u4E00\u4E9B\u533A\u522B\u8BF7\u81EA\u884C\u67E5\u770B io.js \u7684\u6587\u6863\u3002</p><h2 id="node-js-\u76F8\u5173\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#node-js-\u76F8\u5173\u94FE\u63A5" aria-hidden="true">#</a> Node.js \u76F8\u5173\u94FE\u63A5</h2>',23),l={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},h=t("Node.js \u5B98\u7F51"),j={href:"https://nodejs.org/zh-cn/docs/",target:"_blank",rel:"noopener noreferrer"},_=t("Node.js \u6700\u65B0\u6587\u6863"),v={href:"https://nodejs.org/dist/latest-v16.x/docs/api/",target:"_blank",rel:"noopener noreferrer"},N=t("Node.js \u6700\u65B0 API \u6587\u6863");function S(J,f){const o=p("ExternalLinkIcon");return s(),n("div",null,[d,e("ul",null,[e("li",null,[e("p",null,[e("a",l,[h,a(o)])])]),e("li",null,[e("p",null,[e("a",j,[_,a(o)])])]),e("li",null,[e("p",null,[e("a",v,[N,a(o)])])])])])}var I=r(c,[["render",S],["__file","intro.html.vue"]]);export{I as default};