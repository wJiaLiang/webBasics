/**
 * 
元组（tuple）是 TypeScript 特有的数据类型，JavaScript 没有单独区分这种类型。
它表示成员类型可以自由设置的数组，即数组的各个成员的类型可以不同。

const s:[string, string, boolean] = ['a', 'b', true];

// 数组
let a:number[] = [1];

// 元组
let t:[number] = [1];


1、元组成员的类型可以添加问号后缀（?），表示该成员是可选的。
let a:[number, number?] = [1];
问号只能用于元组的尾部成员，也就是说，所有可选成员必须在必选成员之后。


2、使用扩展运算符（...），可以表示不限成员数量的元组。
type NamedNums = [
  string,
  ...number[]
];

const a:NamedNums = ['A', 1, 2];
const b:NamedNums = ['B', 1, 2, 3];

元组可以通过方括号，读取成员类型。
type Tuple = [string, number];
type Age = Tuple[1]; // number



3、扩展运算符与成员数量
const arr = [1, 2];

function add(x:number, y:number){
  // ...
}
add(...arr) // 报错
原因是函数add()只能接受两个参数，但是传入的是...arr，TypeScript 认为转换后的参数个数是不确定的。






*/ 