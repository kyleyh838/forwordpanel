# 闲蛋中转面板
一个轻量的中转面板, 一台面板管理多台中转机器, 实现出租, 限流, 转发等功能

介绍见wiki: https://github.com/xiaoli123/forwordpanel/wiki

基于Java编写的中转管理平台(中转面板)
使用的技术:
- springboot
- element-ui
- h2 

> 注意, 系统不必每个nat上都部署, 也不需要一定要部署在nat, 只要部署的机器能ssh上nat即可, 部署一套系统管理多个nat



## 主要功能
集中管理中转机器, 出租, 限流, 到期禁用等等, 具体见wiki:
https://github.com/xiaoli123/forwordpanel/wiki

## 使用方式

备份Docker地址：https://hub.docker.com/r/kyle838/forwordpanel/tags
## 搭建
### 安装docker
centos:
```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
```
yum install -y yum-utils
```
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
yum install docker-ce docker-ce-cli containerd.io -y
systemctl start docker
systemctl enable docker

ubuntu:

sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
systemctl start docker
systemctl enable docker

### 获取镜像
docker pull kyle838/forwordpanel:1.0.7-SNAPSHOT
### 运行容器
docker run --restart=always -d -p 10203:8080 kyle838/forwordpanel:1.0.7-SNAPSHOT
### 访问面板
http://你的ip:10203
（通过nginx反向代理即可进行域名绑定，这里就不过多阐述了，不会的自行查找资料）
默认账号密码
admin---XIAOLIzz123
