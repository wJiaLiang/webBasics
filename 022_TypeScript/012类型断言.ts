/*

一、 对于没有类型声明的值，TypeScript 会进行类型推断，很多时候得到的结果，未必是开发者想要的。


TypeScript 提供了“类型断言”这样一种手段，允许开发者在代码中“断言”某个值的类型，告诉编译器此处的值是什么类型。
TypeScript 一旦发现存在类型断言，就不再对该值进行类型推断，而是直接采用断言给出的类型。

type T = 'a'|'b'|'c';
let foo = 'a';

let bar:T = foo; // 报错

回到上面的例子，解决方法就是进行类型断言，在赋值时断言变量foo的类型。
type T = 'a'|'b'|'c';

let foo = 'a';
let bar:T = foo as T; // 正确

最后一行的foo as T表示告诉编译器，变量foo的类型断言为T，
所以这一行不再需要类型推断了，编译器直接把foo的类型当作T，就不会报错了。
总之，类型断言并不是真的改变一个值的类型，而是提示编译器，应该如何处理这个值。
// 语法一：<类型>值
<Type>value

// 语法二：值 as 类型
value as Type


二、类型断言的条件
类型断言并不意味着，可以把某个值断言为任意类型。
const n = 1;
const m:string = n as string; // 报错
上面示例中，变量n是数值，无法把它断言成字符串，TypeScript 会报错。
expr是实际的值，T是类型断言，它们必须满足下面的条件：expr是T的子类型，或者T是expr的子类型。

三、as const 断言
如果没有声明变量类型，let 命令声明的变量，会被类型推断为 TypeScript 内置的基本类型之一；
const 命令声明的变量，则被推断为值类型常量。

四、非空断言
对于那些可能为空的变量（即可能等于undefined或null），TypeScript 提供了非空断言，保证这些变量不会为空，写法是在变量名后面加上感叹号!。






*/ 

export {}