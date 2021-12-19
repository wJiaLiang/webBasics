const EventEmitter = require('events');
// es6 继承 EventEmitter类
class CustomEvent extends EventEmitter{

} 
const ce = new CustomEvent();

ce.on('ce',()=>{
	console.log('事件触发了');
})

setInterval(()=>{
	
	ce.emit('ce');
},1000);