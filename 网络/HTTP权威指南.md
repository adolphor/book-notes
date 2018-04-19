
# 第一部分
HTTP: Web 的基础

主要概述HTTP协议，Web的基础构件以及HTTP的核心技术。

1. HTTP概述
2. RUL与资源
3. HTTP报文
4. 连接管理

## 第一章 HTTP概述

* Web 客户端与服务器如何通信
* (Web内容的) 资源来自何方
* Web 事务是怎样工作的
* HTTP通信所使用的报文格式
* 地城TCP网络传输
* 不同的HTTP协议变体
* 部分HTTP构架组件

#### 数据格式
MIME常见的有如下分类：
* text/html => HTML格式的文本文档
* text/plain => 普通的ASCII文本文档
* image/jpeg => JPEG图片
* image/gif => GIF图片
* video/quicktime => Apple 的 QuickTime 电影
* application/vnd.ms-powerpoint => 微软的PowerPoint演示文件

#### URL & URN
URL包括三个部分：
* scheme（协议）：http、https 等
* 服务器地址：www.baidu.com
* 某资源位置：/specials/saw-blade.gif

URN还处于试验阶段。

#### HTTP方法类型
* GET     从服务器想客户端发送命名资源
* PUT     客户端数据存储到服务器资源中
* DELETE  从服务器删除数据
* POST    客户端数据发送到一个服务器网关应用
* HEAD    仅发送命名资源响应中的HTTP首部

#### 报文
包括三部分：
* 起始行：报文第一行
* 首部：起始行后面有零个或多个首部，首部以空行结束
* 主体：首部空行之后的数据就是主体，包括所有类型的数据

#### 结构组件
* 代理：转发客户端请求到服务器
* 缓存：是一种特殊的代理服务器，减轻服务器压力
* 网关：不同协议进行转换
* 隧道：隧道建立之后，进行数据的盲转发
* Agent代理：就是客户端程序

## 第二章 RUL与资源

* URL语法
* RRL快捷方式：相对URL和自动扩展URL
* URL编码和字符规则
* 常见URL方案
* URL的未来，包括URN

大多数URL结构：
<方案>://<服务器位置>/<资源路径>

通用格式：
<scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<query>#<frag>

## 第三章 HTTP报文

* 报文是如何流动的
* HTTP报文的三个组成部分：起始行、首部、实体的主体部分
* 请求和响应报文的区别
* 请求报文支持的各种功能（方法）
* 响应报文中的状态码
* 各种HTTP首部作用

#### 报文格式


版本格式：HTTP/<major>.<minor>
原因短码：reason-phrase
首部：可以有零个或多个首部



* 请求报文格式

```
<method> <request-URL> <version>
<headers>

<entity-body>
``` 

* 响应报文格式

```
<method> <status> <reason-phrase>
<headers>

<entity-body>
```

##### 首部

* 通用首部
* 请求首部
* 响应首部
* 实体首部
* 扩展首部


## 第四章 连接管理

* HTTP 如何使用 TCP 连接
* TCP 连接的时延、瓶颈以及存在的障碍
* HTTP的优化，包括并行连接、keep-alive和管道化连接
* 管理连接应该和不应该做的事

TCP的数据是通过IP分组(或IP数据报)的小数据块发送的。
HTTP就是“HTTP over TCP over IP”这个协议栈的最顶层。
其安全版本HTTPS就是在HTTP和TCP之间插入了一个（称为TLS或SSL的）密码加密层。

TCP收到数据流后，会将数据流砍成被称作段的小数据块，并将段封装在IP分组中，通过因特网进行传输。所有这些工作都是由TCP/IP程序来处理的，HTTP程序员看不到。

![HTTP/HTTPS协议栈](./image/http_qwzn_c04_01.jpg)

#### 持久连接

* HTTP 1.0：Keep-Alive，默认关闭；哑代理 & 聪明代理 => Keep-Alive 问题。  
* HTTP 1.1：持久连接 persistent connection，默认开启，发送connection:close关闭连接

#### 管道化连接
* 如果HTTP无法确认连接是持久的，就不要使用管道连接
* 不要使用管道连接，发送非幂等请求（如POST操作）
* HTTP必须做好管道可能随时被关闭的风险处理
* 必须按照与请求相同的顺序回送响应（如何保证？）
* 管道关闭：完全关闭 & 半关闭

## 第二部分 HTTP结构

## 名词汇总
* MIME：multipurpose Internet Mail Extension，多用途因特网邮件扩展，标记数据格式
* 

## mark
* 20180418 HTTP代理 & 抓包工具的使用
































