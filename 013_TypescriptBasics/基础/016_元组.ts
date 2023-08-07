/*
数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象

如果存储的元素数据类型不同，则需要使用元组。
元组中允许存储不同类型的元素，元组可以作为参数传递给函数。
其他操作类似 数组 如 push pop 等方法;
*/ 

let tom: [string, number] = ['Tom', 25];


tom[0] = 'Tom';
tom[1] = 25;

let avalue = tom[0].slice(1);
let bvalue = tom[1].toFixed(2);
console.log(avalue, bvalue)  // om  25.00