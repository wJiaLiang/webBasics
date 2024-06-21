/*

一、简介
函数的类型声明，需要在声明函数时，给出参数的类型和返回值的类型。

如果变量被赋值为一个函数，变量的类型有两种写法。

// 写法一
const hello = function (txt:string) {
  console.log('hello ' + txt);
}

// 写法二
const hello:(txt:string) => void
= function (txt) {
  console.log('hello ' + txt);
};


*/ 