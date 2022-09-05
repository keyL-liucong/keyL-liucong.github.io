---
icon: question
category: 问题记录
sidebar: false 
---

## 背景

写了一个原生app内嵌h5的页面，产品提出页面不可以进行缩放。

## 解决方案

H5缩放有两种：

 - 双击缩放；
 - 双指手势缩放。
 
```javascript
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

解决方式直接上代码：
```javascript
window.onload = function() {
   // 禁用双指放大
   document.addEventListener('touchstart',function (event) {
       if(event.touches.length>1){
           event.preventDefault();
       }
   });
   // 禁用双击放大
   let lastTouchEnd=0;
   document.addEventListener('touchend',function (event) {
       const now=(new Date()).getTime();
       if(now-lastTouchEnd<=300){
           event.preventDefault();
       }
       lastTouchEnd=now;
   },false);
   document.addEventListener('gesturestart', function (event) {
       event.preventDefault();
   });
}
```
至此已经解决了  **双击放大**、  **双指缩放**的问题了。

没想到测试提出了在**页面滑动过程中页面也可以缩放**的问题。翻遍了类似所有的百度文章都没有解决方案，于是看到项目中的另外一个项目也是内嵌到app中的页面，竟然在滚动过程中不可以缩放，于是去研究了一下，发现是布局不一样(他的布局写的有点恶心)，于是受此启发，将body的scroll转移到app容器中(我的是Vue项目)。于是有以下修改：

```javascript
// 在public  index.html中修改
// 将body的scroll转移到app容器中
// 猜测是ios中body的scroll事件可以触发双指的手势操作，而其他容器不行，这样就解决了在滑动过程中的缩放问题
<body style="height: 100vh; width: 100vw;overflow: hidden;">
<div id="app" style="height: 100vh; width: 100vw; overflow: scroll;"></div>
```

至此解决了**双击放大**、  **双指缩放**、**滑动过程中的缩放**问题。