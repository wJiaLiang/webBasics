const fs = require('fs');

fs.writeFile('./text','this is my create for files',{encoding:'utf8'},err=>{
	if(err) throw err;

	console.log('done!');
})