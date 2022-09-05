---
icon: question
category: 问题记录
sidebar: false 
---
# 小程序wx.login用code换openid一直请求不通的情况

## 现象说明
简单的用code请求后端接口拿到openid.然后一直请求不通，后端给我报code不正确。然后叫后端看日志，显示错误信息
invalid code, hints: [ req_id: mlNBpz4ce-L3x.HA ]

## 原因
然后百度了一波，原来是使用的appid不对，(因为切换了开发者工具的原因，导致开发者工具使用的是测试账号的appid)，所以一直有问题。

## 解决
使用正确的appid即可。