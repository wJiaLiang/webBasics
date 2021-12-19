####  环境安装

* npm install cross-env nodemon --save-dev
* cross-env 安装  设置环境变量用       通过全局变量获取  process.env.NODE_ENV;
* nodemon   安装  监听文件变化自动重启

* MongoDB启动
    * net start MongoDB
    * localhost:27017

* mysql8
    * 启动  net start mysql8  (使用管理员权限)
    * 停止  net stop mysql8   (使用管理员权限)

* redis启动  进入目标文件夹
    * redis-server.exe redis.windows.conf  (redis服务启动)
    * redis-cli.exe -h 127.0.0.1 -p 6379   (客户端启动)
    * kes * 获取所有设置的数据

* nginx 安装 启动
    * 测试配置文件格式是否正确 nginx -t;
    * 启动 nginx.exe 或者 start nginx  重启 nginx -s reload;
    * 停止nginx -s stop

* 静态HTML服务器
    * npm install http-server -g
    * http-server -p 8001               // 8001端口号;

* 日志拆分 linux 下的 crontab 命令,即定时任务;
    * 设置格式:  五个心号 ***** command(shell 脚本);     utils/copy.sh;
    * 将access.log 拷贝并重命名为2019-02-12.access.log
    * 清空access.log 文件,继续积累日志;

* 安全
    *  sql 注入  窃取数据库内容;
        1 输入一个sql片段,最终拼接成一段攻击代码;
        2 预防的措施  使用 mysql 的 escape 函数处理输入内容即可;
    *  xss 攻击  窃取前端的cookie信息;
        1 攻击方式  在页面展示内容中掺杂js代码，以获取网页信息;
        2 预防方式  转换生成js的特殊字符
        3 安装 xss 模块； npm install xss --save;

* 加密
    *  crypto 加密库;不用安装，node原生自带;

* 执行过程
    1 bin 中 www.js 启动服务器, app.js 入口函数;
    2 app.js 中记录日志，解析 cookie ,解析 query 参数,判断session 存取redis;
    3 调用 controller 中的请求数据库方法; 根据参数拼接成查询语句，调用查询方法返回查询结果;
    4 根据查询接口返回的数据实例化数据模型返回;

### 相关书籍
   1 <<代码大全2>> 
   2 <<javascrip高级编程>>
   3 <<流畅的python>>
   4 <<图解算法>>
   5 <<黑客与画家>>
   6 <<万历十五年>>
   7 <<念楼学短>>
   8 <<少年得到>>
   9 工作的几个等级: 奴、徒、工、匠、师、家、圣
