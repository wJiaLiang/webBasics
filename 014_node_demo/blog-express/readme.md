####   express(框架)
* 安装脚手架 express-generator        express --help
    * 0 用法：express [选项] [目录]
    * 1 npm install express-generator -g (全局安装)
    * 2 express express-test(项目名字);
    * 3 npm install & npm start
    * 4 安装 nodemon 和 cross-env

* 初始化代码，处理路由
    * 1 app.js介绍
    * 2 各个插件的使用;各个插件的原理;
    * 3 public 文件夹 和 views 文件夹 是静态文件和页面文件夹;用于前后端不用分离的项目;

* 使用中间件
    * 1 app.use
    * 2 路由中的 next

* 插件 登录方案的解决方法
    * npm i express-session --save
    * npm i redis connect-redis --save

* redis 命令:
    * keys *        // 获取全部key值
    * get key       // 获取可以对应的值;
    * flushall      // 清除所有库;
    * 
* 日志 ,利用 morgan 中间件,express框架默认安装;
    * 地址 https://github.com/expressjs/morgan

### 问题: 
* js异步带来了很多问题，promise也解决不了所有问题;
* node.js 8版本以上支持async/await语法
* Koa2 也已经原生支持 async/await语法

### 最后一章:线上环境 pm2使用
* pm2安装  npm install  pm2 -g
* 基本使用
    配置启动命令 "prd": "cross-env NODE_ENV=production pm2 start app.js"
    控制台输入内容：
    |App name| id | version | mode | pid   | staus  | restart | uptime | cpu | mem   | user | watching |
    |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
    | app    | 0  | 1.0.0   | fork | 64319 | online | 0       | 0s     | 0%  | 19.2M | wfp  | disabled |
* 常用命令
    0 pm2 --version
    1 pm2 start 后面可以跟一个配置文件
    2 pm2 list 可以看到进程列表;
    3 pm2 restart appname 或 id   重启进程
    4 pm2 info
    5 pm2 log
    6 pm2 monit  线上调试用,输出内存信息和日志
    7 pm2 stop app 停掉
    8 pm2 delete app 删除
    > pm2 是后台运行的 而nodemon是前台运行的,会使窗口卡死
    > 默认保存的日志文件路径:
        C:\Users\wei\.pm2\logs\app-error.log
        C:\Users\wei\.pm2\logs\app-out.log

### 进程守护
> node app.js 或 nodemon app.js 进程崩溃则不能访问
> pm2 进程崩溃则可以自动重启

### 常用配置文件
* 配置启动命令  "prd": "cross-env NODE_ENV=production pm2 start pm2.conf.json"  启动文件直接是配置文件了
> 新建pm2配置文件(包括进程数，日志文件目录等) logs
> 修改pm2启动命令，重启
> 访问server 检查日志文件内容，是否有效

### 多进程价值
* 系统会限制一个进程的内存
* 每个进程之间无法共享内存，通过 redis 解决
* pm2.conf.json 中 instances 字段配置,进程数量

### 运维
* 


```
* morgan 记录日志
if(ENV !== 'production'){
  app.use(logger('dev'));
}else{  
  const logfileName = path.join(__dirname,'logs','access.log');
  const writesStream = fs.createWriteStream(logfileName,{flags:'a'})

  app.use(logger('combined',{
    stream:writesStream
  }));
}
* pm2 josn 配置文件的基本格式
{
    "apps":{
        "name":"pm2-test",
        "script":"app.js",
        "watch":true,
        "instances":4,
        "ignore_watch":["node_modules","logs"],
        "error_file":"logs/err.log",
        "out_file":"logs/out.log",
        "log_date_format":"YYYY-MM-DD HH:mm:ss"
    }
}

```

