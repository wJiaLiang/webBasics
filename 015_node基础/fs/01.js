const fs = require('fs');

//  函数的第一参数通常是保留给错误的;
//  异步读取;
fs.readFile('../events(事件)/01.js','utf8',(err,data)=>{
	if(err) throw  err;
	console.log(data);
});


//  同步读取;

let data = fs.readFileSync('./01.js','utf8');

console.log(data);