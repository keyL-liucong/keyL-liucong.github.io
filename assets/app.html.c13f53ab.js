import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o as d,c as r,a as n,b as t,w as l,d as e,e as o}from"./app.f0487313.js";const h={},u=e("\u6CE8\u518C\u5C0F\u7A0B\u5E8F\u3002\u63A5\u53D7\u4E00\u4E2A Object \u53C2\u6570\uFF0C\u5176\u6307\u5B9A\u5C0F\u7A0B\u5E8F\u7684\u751F\u547D\u5468\u671F\u56DE\u8C03\u7B49\u3002 "),_=o('<div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>App() \u5FC5\u987B\u5728 app.js \u4E2D\u8C03\u7528\uFF0C\u5FC5\u987B\u8C03\u7528\u4E14\u53EA\u80FD\u8C03\u7528\u4E00\u6B21\u3002\u4E0D\u7136\u4F1A\u51FA\u73B0\u65E0\u6CD5\u9884\u671F\u7684\u540E\u679C\u3002</p></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><h3 id="object-object" tabindex="-1"><a class="header-anchor" href="#object-object" aria-hidden="true">#</a> Object object</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th><th>\u6700\u4F4E\u7248\u672C</th></tr></thead><tbody><tr><td>onLaunch</td><td>function</td><td></td><td>\u5426</td><td>\u751F\u547D\u5468\u671F\u56DE\u8C03\u2014\u2014\u76D1\u542C\u5C0F\u7A0B\u5E8F\u521D\u59CB\u5316\u3002</td><td></td></tr><tr><td>onShow</td><td>function</td><td></td><td>\u5426</td><td>\u751F\u547D\u5468\u671F\u56DE\u8C03\u2014\u2014\u76D1\u542C\u5C0F\u7A0B\u5E8F\u542F\u52A8\u6216\u5207\u524D\u53F0\u3002</td><td></td></tr><tr><td>onHide</td><td>function</td><td></td><td>\u5426</td><td>\u751F\u547D\u5468\u671F\u56DE\u8C03\u2014\u2014\u76D1\u542C\u5C0F\u7A0B\u5E8F\u5207\u540E\u53F0\u3002</td><td></td></tr><tr><td>onError</td><td>function</td><td></td><td>\u5426</td><td>\u9519\u8BEF\u76D1\u542C\u51FD\u6570\u3002</td><td></td></tr><tr><td>onPageNotFound</td><td>function</td><td></td><td>\u5426</td><td>\u9875\u9762\u4E0D\u5B58\u5728\u76D1\u542C\u51FD\u6570\u3002</td><td>1.9.90</td></tr><tr><td>onUnhandledRejection</td><td>function</td><td></td><td>\u5426</td><td>\u672A\u5904\u7406\u7684 Promise \u62D2\u7EDD\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570\u3002</td><td>2.10.0</td></tr><tr><td>onThemeChange</td><td>function</td><td></td><td>\u5426</td><td>\u76D1\u542C\u7CFB\u7EDF\u4E3B\u9898\u53D8\u5316</td><td>2.11.0</td></tr></tbody></table><p>| \u5176\u4ED6 | any | | \u5426 | \u5F00\u53D1\u8005\u53EF\u4EE5\u6DFB\u52A0\u4EFB\u610F\u7684\u51FD\u6570\u6216\u6570\u636E\u53D8\u91CF\u5230 <code>Object</code> \u53C2\u6570\u4E2D\uFF0C\u7528 <code>this</code> \u53EF\u4EE5\u8BBF\u95EE |</p>',5),m=e("\u5173\u4E8E\u5C0F\u7A0B\u5E8F\u524D\u540E\u53F0\u7684\u5B9A\u4E49\u548C\u5C0F\u7A0B\u5E8F\u7684\u8FD0\u884C\u673A\u5236\uFF0C\u8BF7\u53C2\u8003 "),b=e("\u8FD0\u884C\u673A\u5236"),v=e("\u3002"),k=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something initial when launch.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something when show.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something when hide.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token string">&quot;I am global data&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onlaunch-object-object" tabindex="-1"><a class="header-anchor" href="#onlaunch-object-object" aria-hidden="true">#</a> onLaunch(Object object)</h3>`,2),g=e("\u5C0F\u7A0B\u5E8F\u521D\u59CB\u5316\u5B8C\u6210\u65F6\u89E6\u53D1\uFF0C\u5168\u5C40\u53EA\u89E6\u53D1\u4E00\u6B21\u3002\u53C2\u6570\u4E5F\u53EF\u4EE5\u4F7F\u7528 "),f={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"wx.getLaunchOptionsSync",-1),x=e(" \u83B7\u53D6\u3002"),w=e("\u53C2\u6570: \u4E0E "),q={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"wx.getLaunchOptionsSync",-1),y=e(" \u4E00\u81F4"),O=n("h3",{id:"onshow-object-object",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onshow-object-object","aria-hidden":"true"},"#"),e(" onShow(Object object)")],-1),N=e("\u5C0F\u7A0B\u5E8F\u542F\u52A8\uFF0C\u6216\u4ECE\u540E\u53F0\u8FDB\u5165\u524D\u53F0\u663E\u793A\u65F6\u89E6\u53D1\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528 "),S={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"wx.onAppShow",-1),L=e(" \u7ED1\u5B9A\u76D1\u542C\u3002"),E=e("\u53C2\u6570: \u4E0E "),R={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html",target:"_blank",rel:"noopener noreferrer"},F=n("code",null,"wx.onAppShow",-1),T=e(" \u4E00\u81F4"),C=n("h2",{id:"onhide",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onhide","aria-hidden":"true"},"#"),e(" onHide()")],-1),U=e("\u5C0F\u7A0B\u5E8F\u4ECE\u524D\u53F0\u8FDB\u5165\u540E\u53F0\u65F6\u89E6\u53D1\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528 "),I={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"wx.onAppHide",-1),B=e(" \u7ED1\u5B9A\u76D1\u542C\u3002"),H=n("h2",{id:"onerror-string-error",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onerror-string-error","aria-hidden":"true"},"#"),e(" onError(String error)")],-1),V=e("\u5C0F\u7A0B\u5E8F\u53D1\u751F\u811A\u672C\u9519\u8BEF\u6216 API \u8C03\u7528\u62A5\u9519\u65F6\u89E6\u53D1\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528 "),z={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"wx.onError",-1),J=e(" \u7ED1\u5B9A\u76D1\u542C\u3002"),K=e("\u53C2\u6570: \u4E0E "),M={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html",target:"_blank",rel:"noopener noreferrer"},Q=n("code",null,"wx.onError",-1),W=e(" \u4E00\u81F4"),X=n("h2",{id:"onpagenotfound-object-object",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onpagenotfound-object-object","aria-hidden":"true"},"#"),e(" onPageNotFound(Object object)")],-1),Y=e("\u5C0F\u7A0B\u5E8F\u8981\u6253\u5F00\u7684\u9875\u9762\u4E0D\u5B58\u5728\u65F6\u89E6\u53D1\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528 "),Z={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},$=n("code",null,"wx.onPageNotFound",-1),nn=e(" \u7ED1\u5B9A\u76D1\u542C\u3002\u6CE8\u610F\u4E8B\u9879\u8BF7\u53C2\u8003 "),en={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},tn=n("code",null,"wx.onPageNotFound",-1),an=e("\u3002"),on=e("\u53C2\u6570: \u4E0E "),sn={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},pn=n("code",null,"wx.onPageNotFound",-1),cn=e(" \u4E00\u81F4"),dn=o(`<p>\u793A\u4F8B\u4EE3\u7801:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onPageNotFound</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;pages/...&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5982\u679C\u662F tabbar \u9875\u9762\uFF0C\u8BF7\u4F7F\u7528 wx.switchTab</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="onunhandledrejection-object-object" tabindex="-1"><a class="header-anchor" href="#onunhandledrejection-object-object" aria-hidden="true">#</a> onUnhandledRejection(Object object)</h2><blockquote><p>\u57FA\u7840\u5E93 2.10.0 \u5F00\u59CB\u652F\u6301</p></blockquote>`,4),rn=e("\u5C0F\u7A0B\u5E8F\u6709\u672A\u5904\u7406\u7684 Promise \u62D2\u7EDD\u65F6\u89E6\u53D1\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528 "),ln={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},hn=n("code",null,"wx.onUnhandledRejection",-1),un=e(" \u7ED1\u5B9A\u76D1\u542C\u3002\u6CE8\u610F\u4E8B\u9879\u8BF7\u53C2\u8003 "),_n={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},mn=n("code",null,"wx.onUnhandledRejection",-1),bn=e("\u3002"),vn=e("\u53C2\u6570: \u4E0E "),kn={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},gn=n("code",null,"wx.onUnhandledRejection",-1),fn=e(" \u4E00\u81F4"),jn=n("h2",{id:"onthemechange-object-object",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onthemechange-object-object","aria-hidden":"true"},"#"),e(" onThemeChange(Object object)")],-1),xn=n("blockquote",null,[n("p",null,"\u57FA\u7840\u5E93 2.11.0 \u5F00\u59CB\u652F\u6301")],-1),wn=e("\u7CFB\u7EDF\u5207\u6362\u4E3B\u9898\u65F6\u89E6\u53D1\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528 "),qn={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html",target:"_blank",rel:"noopener noreferrer"},An=n("code",null,"wx.onThemeChange",-1),yn=e(" \u7ED1\u5B9A\u76D1\u542C\u3002"),On=e("\u53C2\u6570: \u4E0E "),Nn={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html",target:"_blank",rel:"noopener noreferrer"},Sn=n("code",null,"wx.onThemeChange",-1),Pn=e(" \u4E00\u81F4"),Ln=o(`<h2 id="appobject-getapp-object-object" tabindex="-1"><a class="header-anchor" href="#appobject-getapp-object-object" aria-hidden="true">#</a> AppObject getApp(Object object)</h2><p>\u83B7\u53D6\u5230\u5C0F\u7A0B\u5E8F\u5168\u5C40\u552F\u4E00\u7684 App \u5B9E\u4F8B\u3002</p><h3 id="getapp-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#getapp-\u53C2\u6570" aria-hidden="true">#</a> getApp \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th><th>\u6700\u4F4E\u7248\u672C</th></tr></thead><tbody><tr><td>allowDefault</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u5728 <code>App</code> \u672A\u5B9A\u4E49\u65F6\u8FD4\u56DE\u9ED8\u8BA4\u5B9E\u73B0\u3002\u5F53 <code>App</code> \u88AB\u8C03\u7528\u65F6\uFF0C\u9ED8\u8BA4\u5B9E\u73B0\u4E2D\u5B9A\u4E49\u7684\u5C5E\u6027\u4F1A\u88AB\u8986\u76D6\u5408\u5E76\u5230 App \u4E2D\u3002\u4E00\u822C\u7528\u4E8E\u72EC\u7ACB\u5206\u5305</td><td>2.2.4</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// other.js</span>
<span class="token keyword">const</span> appInstance <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appInstance<span class="token punctuation">.</span>globalData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// I am global data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><ul><li>\u4E0D\u8981\u5728\u5B9A\u4E49\u4E8E <code>App()</code> \u5185\u7684\u51FD\u6570\u4E2D\uFF0C\u6216\u8C03\u7528 <code>App</code> \u524D\u8C03\u7528 <code>getApp()</code> \uFF0C\u4F7F\u7528 <code>this</code> \u5C31\u53EF\u4EE5\u62FF\u5230 app \u5B9E\u4F8B\u3002</li><li>\u901A\u8FC7 <code>getApp()</code> \u83B7\u53D6\u5B9E\u4F8B\u4E4B\u540E\uFF0C\u4E0D\u8981\u79C1\u81EA\u8C03\u7528\u751F\u547D\u5468\u671F\u51FD\u6570\u3002</li></ul></div>`,8);function En(Rn,Fn){const p=s("Badge"),c=s("RouterLink"),a=s("ExternalLinkIcon");return d(),r("div",null,[n("p",null,[u,t(p,{text:"\u91CD\u8981",type:"error"})]),_,n("p",null,[m,t(c,{to:"/frame/mini-app/guide/service/run.html"},{default:l(()=>[b]),_:1}),v]),k,n("p",null,[g,n("a",f,[j,t(a)]),x]),n("p",null,[w,n("a",q,[A,t(a)]),y]),O,n("p",null,[N,n("a",S,[P,t(a)]),L]),n("p",null,[E,n("a",R,[F,t(a)]),T]),C,n("p",null,[U,n("a",I,[D,t(a)]),B]),H,n("p",null,[V,n("a",z,[G,t(a)]),J]),n("p",null,[K,n("a",M,[Q,t(a)]),W]),X,n("p",null,[Y,n("a",Z,[$,t(a)]),nn,n("a",en,[tn,t(a)]),an]),n("p",null,[on,n("a",sn,[pn,t(a)]),cn]),dn,n("p",null,[rn,n("a",ln,[hn,t(a)]),un,n("a",_n,[mn,t(a)]),bn]),n("p",null,[vn,n("a",kn,[gn,t(a)]),fn]),jn,xn,n("p",null,[wn,n("a",qn,[An,t(a)]),yn]),n("p",null,[On,n("a",Nn,[Sn,t(a)]),Pn]),Ln])}var Un=i(h,[["render",En],["__file","app.html.vue"]]);export{Un as default};
