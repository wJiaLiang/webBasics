/**
 * 
一、基础类型

boolean
string
number
bigint
symbol
object
undefined
null

TypeScript 继承了 JavaScript 的类型设计，以上8种类型可以看作 TypeScript 的基本类型。
上面所有类型的名称都是小写字母，首字母大写的Number、Boolean等在 JavaScript 语言中都是内置对象，而不是类型名称。
这8种基本类型是 TypeScript 类型系统的基础，复杂类型由它们组合而成。

 */ 



// 1、 bigint 类型 bigint 类型包含所有的大整数。
const x0:bigint = 123n;
const y0:bigint = 0xffffn;

// 2、 symbol 类型 symbol 类型包含所有的 Symbol 值。
const x1:symbol = Symbol();

// 3、object 类型 根据 JavaScript 的设计，object 类型包含了所有对象、数组和函数。
const x2:object = { foo: 123 };
const y2:object = [1, 2, 3];
const z2:object = (n:number) => n + 1;

// 4、undefined 类型，null 类型 undefined 和 null 是两种独立类型，它们各自都只有一个值。
let x3:undefined = undefined;
const y3:null = null;


/**
 * 
 * 

二、包装对象的概念
    JavaScript 中，所有基本类型（除了 null 和 undefined）都有一个对应的包装对象。
    上面这五种原始类型的值，都有对应的包装对象（wrapper object）。所谓“包装对象”，指的是这些值在需要时，会自动产生的对象。

    为了区分这两种情况，TypeScript 对五种原始类型分别提供了大写和小写两种类型。


    const s1:String = 'hello'; // 正确
    const s2:String = new String('hello'); // 正确

    const s3:string = 'hello'; // 正确
    const s4:string = new String('hello'); // 报错
    String类型可以赋值为字符串的字面量，也可以赋值为包装对象。但是，string类型只能赋值为字面量，赋值为包装对象就会报错。

    
建议只使用小写类型，不使用大写类型。因为绝大部分使用原始类型的场合，都是使用字面量，不使用包装对象。
而且，TypeScript 把很多内置方法的参数，定义成小写类型，使用大写类型会报错。
const n1:number = 1;
const n2:Number = 1;

Math.abs(n1) // 1
Math.abs(n2) // 报错


*/




/* 

三、Object 类型与 object 类型

Object 类型:

大写的Object类型代表 JavaScript 语言里面的广义对象。所有可以转成对象的值，都是Object类型，这囊括了几乎所有的值。
事实上，除了undefined和null这两个值不能转为对象，其他任何值都可以赋值给Object类型。
let obj:Object;


另外，空对象{}是Object类型的简写形式，所以使用Object时常常用空对象代替。
let obj:{};


object 类型：
小写的object类型代表 JavaScript 里面的狭义对象，即可以用字面量表示的对象，只包含对象、数组和函数，不包括原始类型的值。
我们使用对象类型，只希望包含真正的对象，不希望包含原始类型。所以，建议总是使用小写类型object，不使用大写类型Object。

无论是大写的Object类型，还是小写的object类型，都只包含 JavaScript 内置对象原生的属性和方法，
用户自定义的属性和方法都不存在于这两个类型之中。
const o1:Object = { foo: 0 };
const o2:object = { foo: 0 };

o1.toString() // 正确
o1.foo // 报错

o2.toString() // 正确
o2.foo // 报错
如何描述对象的自定义属性，详见《对象类型》一章。

*/



/* 

四、undefined 和 null 的特殊性 

undefined和null既是值，又是类型。
作为值，它们有一个特殊的地方：任何其他类型的变量都可以赋值为undefined或null。
let age:number = 24;
age = null;      // 正确
age = undefined; // 正确

*/



/* 
五、值类型

TypeScript 规定，单个值也是一种类型，称为“值类型”。
let x:'hello';
x = 'hello'; // 正确
x = 'world'; // 报错
变量x的类型是字符串hello，导致它只能赋值为这个字符串，赋值为其他字符串就会报错。

TypeScript 推断类型时，遇到const命令声明的变量，如果代码里面没有注明类型，就会推断该变量是值类型。
注意，const命令声明的变量，如果赋值为对象，并不会推断为值类型。

// x 的类型是 { foo: number }
const x = { foo: 1 };
变量x没有被推断为值类型，而是推断属性foo的类型是number。这是因为 JavaScript 里面，const变量赋值为对象时，属性值是可以改变的。


 */



/* 

六、联合类型

联合类型（union types）指的是多个类型组成的一个新类型，使用符号|表示。
联合类型A|B表示，任何一个类型只要属于A或B，就属于联合类型A|B。
let x:string|number;
x = 123; // 正确
x = 'abc'; // 正确

联合类型可以与值类型相结合，表示一个变量的值有若干种可能。
let setting:true|false;
let gender:'male'|'female';
let rainbowColor:'赤'|'橙'|'黄'|'绿'|'青'|'蓝'|'紫';

 */

/* 

七、交叉类型
交叉类型（intersection types）指的多个类型组成的一个新类型，使用符号&表示。

let x:number&string;
上面示例中，变量x同时是数值和字符串，这当然是不可能的，所以 TypeScript 会认为x的类型实际是never。


交叉类型的主要用途是表示对象的合成。
交叉类型常常用来为对象类型添加新属性。

 */


/* 
八、type 命令
type命令用来定义一个类型的别名。
type Age = number;
let age:Age = 55;

别名的作用域是块级作用域。这意味着，代码块内部定义的别名，影响不到外部。
别名支持使用表达式，也可以在定义一个别名时，使用另一个别名，即别名允许嵌套。

type World = "world";
type Greeting = \`hello ${World}\`

上面示例中，别名Greeting使用了模板字符串，读取另一个别名World。
type命令属于类型相关的代码，编译成 JavaScript 的时候，会被全部删除。

 */


/* 

九、typeof
JavaScript 语言中，typeof 运算符是一个一元运算符，返回一个字符串，代表操作数的类型。

JavaScript 里面，typeof运算符只可能返回八种结果，而且都是字符串。
typeof undefined; // "undefined"
typeof true; // "boolean"
typeof 1337; // "number"
typeof "foo"; // "string"
typeof {}; // "object"
typeof parseInt; // "function"
typeof Symbol(); // "symbol"
typeof 127n // "bigint"

TypeScript 将typeof运算符移植到了类型运算，它的操作数依然是一个值，但是返回的不是字符串，而是该值的 TypeScript 类型。

由于编译时不会进行 JavaScript 的值运算，所以TypeScript 规定，typeof 的参数只能是标识符，不能是需要运算的表达式。
let b:typeof a; // 错误

 */


/* 
十、块级类型声明

TypeScript 支持块级类型声明，即类型可以声明在代码块（用大括号表示）里面，并且只在当前代码块有效。
if (true) {
  type T = number;
  let v:T = 5;
} else {
  type T = string;
  let v:T = 'hello';
}
存在两个代码块，其中分别有一个类型T的声明。这两个声明都只在自己的代码块内部有效，在代码块外部无效。

 */



/* 

十一、类型的兼容 
变量a和b的类型是不一样的，但是变量a赋值给变量b并不会报错。这时，我们就认为，b的类型兼容a的类型。
type T = number|string;
let a:number = 1;
let b:T = a;
TypeScript 的一个规则是，凡是可以使用父类型的地方，都可以使用子类型，但是反过来不行。

 */

export {}