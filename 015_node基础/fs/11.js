const fs = require('fs');
const ws = fs.createWriteStream('./test.txt',);
let tid = setInterval(()=>{
	const num = parseInt(Math.random()*10);

	if(num<9){
		ws.write(num+'');
	}else{
		clearInterval(tid);
		ws.end();
	}

},500);

ws.on('finish',()=>{
	console.log('done!');
})