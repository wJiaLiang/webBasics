// 标准输入和输出;
// process.stdin.pipe(process.stdout);

//const http = require('http');

// const server = http.createServer((req,res)=>{
//     if(req.method == 'POST'){
//         req.pipe(res);  // req 和 res 就相当于两个水桶,通过pipe链接起来;把数据从req中倒入res中
//     }


// })
// server.listen(8000,()=>{
//     console.log('启动成功')
// });



// 复制文件;
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const fileName1 = path.resolve(__dirname,'data.txt');
// const fileName2 = path.resolve(__dirname,'data_bak.txt');

// const readStream = fs.createReadStream(fileName1);
// const writeStream = fs.createWriteStream(fileName2);
// readStream.pipe(writeStream);

// readStream.on('data',(chunk)=>{
//     console.log(chunk);
// })
// readStream.on('end',()=>{
//     console.log('copy done');
// })


// 返回一个文件
// get 请求进入后 读取指定路径文件
const fs = require('fs');
const http = require('http');
const path = require('path');
const fileName = path.resolve(__dirname,'data.txt');

const myserver = http.createServer((req,res)=>{
    if(req.method == 'GET'){
        let readStream = fs.createReadStream(fileName);
        readStream.pipe(res);
    }

})
myserver.listen(8000,()=>{
    console.log('启动成功');
})