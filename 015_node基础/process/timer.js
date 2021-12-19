
//  传入一个函数，在下一个事件队列中调用

setImmediate(()=>{console.log('setImmediate')}); // 最后执行;

setTimeout(()=>{console.log('setTimeout')}); // 中间执行

process.nextTick(()=>{console.log('nextTick')});  //最先执行 放在当前队列的队尾,执行完才执行下个队列;