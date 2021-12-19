const EventEmitter = require('events');
// es6 继承 EventEmitter类
class CustomEvent extends EventEmitter{

} 
const ce = new CustomEvent();

ce.on('error',(err)=>{
	console.log('err',err);
})

ce.emit('error',Date.now());



