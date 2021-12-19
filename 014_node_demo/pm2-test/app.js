const http = require('http');

const server = http.createServer((req,res)=>{
    // 模拟日志
    console.log('cur time ',Date.now())
    // 模拟错误
    console.error('假装出错',Date.now())
    // 
    console.log('路径',req.url);
    if(req.url == '/err'){
        throw new Error('出错了')
    }

    res.setHeader('Content-type','application/json');
    res.end(JSON.stringify({error:0,msg:'pm2 test server 1'}))
})

server.listen(8008);
console.log('server is listen on port 8008');