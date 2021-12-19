const EventEmitter = require('events');
// es6 继承 EventEmitter类
class CustomEvent extends EventEmitter{

} 

function fn1(){
	console.log('fn1');
}
function fn2(){
	console.log('fn2');
}

//  移除事件;
const ce = new CustomEvent();

ce.on('test',fn1);
ce.on('test',fn2);


setInterval(function(){
	ce.emit('test')
},500);

setTimeout(function(){
  // ce.removeListener('test',fn1)
  // 全部移除;
  ce.removeAllListeners('test');

},2000)

