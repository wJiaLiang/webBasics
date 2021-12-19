const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    console.log('debugger');
    res.end('<h3>成功<h3>')

})

server.listen(3000,()=>{
    console.log('listening on 3000 port');
});