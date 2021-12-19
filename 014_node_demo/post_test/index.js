const http = require('http');

const server =  http.createServer((req,res)=>{
    if(req.method == 'POST'){
        
        console.log('content-type',req.headers);
        
        let postData = '';
        req.on('data',(chunk)=>{
            postData +=chunk.toString();
        })
        
        req.on('end',()=>{
            console.log(postData);
            console.log('接收结束');
            res.end('hello,world');
        })

    }
})


server.listen(3000,()=>{
    console.log('ok');
})