const fs = require('fs');

// promisify 运用; promise 解决异步回调;
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

read('./11.js')
.then(data=>{
   console.log(data.toString())
})
.catch(err=>{
	console.log('err')
})