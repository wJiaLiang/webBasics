const redis = require('redis');
const {REDIS_CONF } = require('../conf/db');

// kes * 获取所有设置的数据
// 创建客户端;
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);
// 监控错误;
redisClient.on('error',err=>{
    console.error(err);
})

module.exports = redisClient;