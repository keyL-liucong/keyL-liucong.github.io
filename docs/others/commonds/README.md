---
sidebar: false
---

# 常用命令

## centos 防火墙相关
```Bash
# 1、查看防火墙状态
firewall-cmd --state

# 2、查看防火墙所有开放的端口
firewall-cmd --zone=public --list-ports

# 3.、开关防火墙
systemctl start firewalld.service
systemctl stop firewalld.service
systemctl restart firewalld.service

# 4、开放端口
firewall-cmd --zone=public --add-port=80/tcp --permanent # 开放80端口
firewall-cmd --zone=public --remove-port=80/tcp --permanent #关闭80端口
firewall-cmd --reload # 配置立即生效

# 5、查看监听的端口
netstat -tunlp

# ●centos7默认没有 netstat 命令，需要安装 net-tools 工具，yum install -y net-tools

# 6、检查端口被哪个进程占用
netstat -lnpt |grep 80

# 7、查看进程的详细信息
ps 6832

# 8、中止进程
kill -9 6832
```