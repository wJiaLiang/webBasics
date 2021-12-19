const http = require('http');
const serverHandle = require('../app');

const prot = 8000;

const server = http.createServer(serverHandle);

server.listen(prot,()=>{
    console.log('ok');
});

/** 
 * 安装 nodemon 和 cross-env 包监控文件变化,自动重启node;
 * npm install nodemon  cross-env --save-dev
 * 
 * package.json 文件里面设置了，Dev 指令, NODE_ENV=dev 表示设置的是环境变量;
 * 
 * */ 