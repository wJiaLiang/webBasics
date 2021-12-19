#### 安装 koa 生成器
* cnpm install koa-generator -g
* koa2 blog-koa2      生成项目目录结构拉取脚手架模板
* nodemon已经默认有了只要 安装 cnpm install cross-env --save-dev  

* npm install koa-generic-session koa-redis --save  (session和redis)
* npm install mysql xss --save

### redis 启动
* redis-server.exe redis.windows.conf

### koa2 的中间件
* app.use

* next参数

### 实现登录
* 和express类似
* 基于koa-generic-session 和 koa-redis


### 路由

### 日志
* npm install koa-morgan

### 总结
* 和express主要的不同点 koa2中使用了 async  await 函数来解决异步问题,代码更加简洁更加直观;
* requset 和 respone 对象封装成一个 ctx 中,