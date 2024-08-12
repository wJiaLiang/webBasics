/*

一、简介
函数的类型声明，需要在声明函数时，给出参数的类型和返回值的类型。
如果变量被赋值为一个函数，变量的类型有两种写法。

写法二有两个地方需要注意。
首先，函数的参数要放在圆括号里面，不放会报错。
类型里面的参数名（本例是txt）是必须的

*/ 
// 写法一
const hello = function (txt:string) {
  console.log('hello ' + txt);
}

// 写法二
const hello2:(txt:string) => void = function (txt) {
  console.log('hello ' + txt);
};


/*
二、Function 类型
TypeScript 提供 Function 类型表示函数，任何函数都属于这个类型。

下面示例中，参数f的类型就是Function，代表这是一个函数。
Function 类型的值都可以直接执行。

Function 类型的函数可以接受任意数量的参数，每个参数的类型都是any，返回值的类型也是any，代表没有任何约束，
所以不建议使用这个类型，给出函数详细的类型声明会更好。

*/ 
function doSomething(f:Function) {
  return f(1, 2, 3);
}