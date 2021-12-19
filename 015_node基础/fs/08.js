const fs = require('fs');

// 创建文件夹;
fs.rmdir('./fcs',(err,files)=>{

	if(err) throw err
	console.log(files)
});