const fs = require('fs');

// 获取当前文件夹下的所有文件;
// 
fs.readdir('../',(err,files)=>{

	if(err) throw err
	console.log(files)
});