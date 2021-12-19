
// 安装redis   npm i redis --save
// 启动  redis-server.exe redis.windows.conf
// 另一个窗口进入  redis-cli.exe -h 127.0.0.1 -p 6379

const redis = require('redis');

// 创建客户端;
const redisClient = redis.createClient(6379,'127.0.0.1');
// 监控错误;
redisClient.on('error',err=>{
    console.error(err);
})
// 设置 值 获取值;
redisClient.set('myname','kg',redis.print);
redisClient.get('myname',(err,val)=>{
    if(err){
        console.error(err);
        return
    }
    console.log(val);
    // 退出  关闭连接
    redisClient.quit();
})
