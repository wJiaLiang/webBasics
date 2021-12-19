// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
var u = undefined;
var n = null;
/*
与 void 的区别是，undefined 和 null 是所有类型的子类型。
也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

"strict": true,  设置为true的时候 null和undefined只能赋值给void和它们各自。

官方文档中指的是 --strictNullChecks标记,tsconfig.json中为 strict 这个字段;

*/
// 这样不会报错
var num1 = 123;
num1 = undefined;
// 这样也不会报错
var u1;
var num2 = u1;
