
const env = process.env.NODE_ENV;  //获取之前设置的环境变量参数;

// 配置;
let MYSQL_CONF;
let REDIS_CONF;

if(env === 'dev'){
    // mysql;
    MYSQL_CONF = {
        host:"localhost", // 如果是线上，就是线上的地址;
        user:'root',  // 用户名;
        password:'',  // 密码;
        port:'13306', // mysql的端口;
        database:'myblog'  //数据库的名字;
    };
    // redis;
    REDIS_CONF = {
        port:6379,
        host:'127.0.0.1'
    }

}

if(env === 'production'){
    // mysql;
    MYSQL_CONF = {
        host:"localhost", // 如果是线上，就是线上的地址;
        user:'root',  // 用户名;
        password:'',  // 密码;
        port:'13306', // mysql的端口;
        database:'myblog'  //数据库的名字;
    }
      // redis;
      REDIS_CONF = {
        port:6379,
        host:'127.0.0.1'
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF

}