---
icon: question
category: 问题记录
sidebar: false 
---
# 背景

同事拉master代码，但是跑起来页面样式不一样，此时就怀疑是本地开发环境的问题。排查下来
同事的elementui的版本为2.15.6,自己的本地elementui版本为2.13.2，于是开始排查问题，首先找到
package.json中elementui依赖如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/6cf8f2c4be54465e9c74f5e99ce5d3aa.png)
然后确定这里的问题，为什么下载的版本不同，于是弄清楚 ^ 符号的作用。
# 先给结论
（1）指定版本：比如"axios": "0.21.0"，表示安装0.21.0的版本;
（2）波浪号~指定版本：比如  "core-js": "~3.6.5", 
     表示安装3.6.x的最新版本（不低于3.6.5），
     但是不安装3.7.x，也就是说安装时不改变大版本号和次要版本号  

（3）^指定版本：比如 "antd": "^3.1.4",
    表示安装3.1.4及以上的版本，但是不安装4.0.0，
    也就是说安装时不改变大版本号。 
  
在项目中我们经常是使用 ^
如何在项目中使用新的的版本。
将node_modules删除，执行cnpn i 就可以使用大版本中的最新版本了
如果你elementui中2.4.11，可能是没有抽屉的；
但是你删除后，重新下载，就可以使用抽屉了

# 测试验证

1.在elementUI官网中，查看elementUI的所有版本。
![在这里插入图片描述](https://img-blog.csdnimg.cn/c49396c0a5674413af37f6ac2e1d89b5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5bCx562J5pWF5LqL57uP6L-H,size_20,color_FFFFFF,t_70,g_se,x_16)

2.创建空白项目进行测试,`npm i element-ui -S`后elementui版本为2.15.6。
![在这里插入图片描述](https://img-blog.csdnimg.cn/b56904c9878e43cea38ffa76af80c665.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5bCx562J5pWF5LqL57uP6L-H,size_20,color_FFFFFF,t_70,g_se,x_16)
3.修改package.json中的elementui的版本依赖，改成项目中的^1.0.0之后重新安装，此时下载的版本为
![在这里插入图片描述](https://img-blog.csdnimg.cn/1c95b28ca5654ddd82e4557ee4a49bbe.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5bCx562J5pWF5LqL57uP6L-H,size_20,color_FFFFFF,t_70,g_se,x_16)

4.修改package.json中的elementui的版本依赖，改成项目中的^2.17.0之后重新安装，此时会报错匹配不到对应的版本，因为2.15是最高的版本。
![在这里插入图片描述](https://img-blog.csdnimg.cn/c3359f91f3604e28a37607bee8277a7f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5bCx562J5pWF5LqL57uP6L-H,size_20,color_FFFFFF,t_70,g_se,x_16)
4.修改package.json中的elementui的版本依赖，改成项目中的^2.0.8之后重新安装，此时下载的版本也为最新的2.15.6
