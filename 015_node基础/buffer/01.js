//
//buffer  实例类似整数数组,大小固定
//
//
//
// http://nodejs.cn/api/buffer.html#buffer_buffer_from_buffer_alloc_and_buffer_allocunsafe
console.log(Buffer.alloc(19));

console.log(Buffer.alloc(5,1));

console.log(Buffer.allocUnsafe(5,1));  //创建一个长度为 10、且未初始化的 Buffer。

console.log(Buffer.from([1,2,3]));   // 01 02 03 

console.log(Buffer.from('test'));




/*
 Buffer.byteLength(); // 返回字节数
 Buffer.isBuffer();   // 是否是buffer;
 Buffer.concat();

 */ 

console.log(Buffer.byteLength('text')); // 4
console.log(Buffer.byteLength('测试')); // 6;


const buf1 = Buffer.from('this');
const buf2 = Buffer.from('is');
const buf3 = Buffer.from('buffer');
const buf4 = Buffer.from('!');

const buf = Buffer.concat([buf1,buf2,buf3,buf4])
console.log(buf.toString())