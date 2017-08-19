# kandian-web-node

## 安装与部署
```
$ git clone https://github.com/tmeixia/kandian-web-node.git
$ cd kandian-web-node
$ npm install
```

## 接入 TSW
1. 从 SVN checkout TSW 源码到`root/TSW`
2. 将`root/pre-conf`文件夹下的文件直接复制到根目录


## 使用
```
$ node server/core

/* or use TSW */

$ node TSW
```

打开 demo 页：
```
http://127.0.0.1/home.html

http://127.0.0.1/test.html
```

## 目录说明
`server` 目录：
1. `server/core`：node 服务器核心代码，实现中间件接入、路由解析、设置服务器根路径和静态文件文件缓存规则，开发时一般不需要关注。
2. `server/controllers`：存放控制层代码，负责相关接口的逻辑处理和页面的渲染，其中`render.js`同意负责页面渲染的逻辑处理。
3. `server/service`：存放服务层代码，负责数据转换以及异步请求处理。
4. `server/util`：自定义工具函数。
5. `server/config`：接入 TSW 的相关配置文件，开发时无须关注。
6. `server/conf.js`：服务器配置文件。
7. `server/routes.js`：路由表。