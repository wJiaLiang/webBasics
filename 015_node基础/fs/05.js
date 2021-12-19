const fs = require('fs');

fs.unlink('./test.text',(err,data)=>{
	if(err){
		throw  err;
	}
	console.log('成功',data);
})