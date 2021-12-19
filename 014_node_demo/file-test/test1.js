const fs = require('fs')
const path = require('path')


const fileName = path.resolve(__dirname,'data.txt')

// 读取文件  同步读取的化，文件过大 data变量存的内容就很大;
fs.readFile(fileName,(err,data)=>{
    if(err){
        console.error(err);
    }
    // data 为二进制文件要转换成字符串;
    console.log(data.toString());
})


// 写入;
const content = '这是写入内容\n';
const opt = {flag:'a'}  // 追加写入  覆盖用'w';

fs.writeFile(fileName,content,opt,(err)=>{
    if(err){
        console.error(err);
    }
})

// 判断文件是否存在;
fs.exists(fileName,(exist)=>{
    console.log(exist);
})