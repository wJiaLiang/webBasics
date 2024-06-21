/* 

一、定义:

TypeScript 数组有一个根本特征：所有成员的类型必须相同，但是成员数量是不确定的，可以是无限数量的成员，也可以是零成员。

数组的类型有两种写法。
第一种写法是在数组成员的类型后面，加上一对方括号。
let arr:number[] = [1, 2, 3];
let arr:(number|string)[];

第二种写法是使用 TypeScript 内置的 Array 接口。
let arr:Array<number> = [1, 2, 3];
let arr:Array<number|string>;

这种写法本质上属于泛型，这里只要知道怎么写就可以了，详细解释参见《泛型》一章。
另外，数组类型还有第三种写法，因为很少用到，本章就省略了，详见《interface 接口》一章。

特点:
    1、数组类型声明了以后，成员数量是不限制的，任意数量的成员都可以，也可以是空数组。
        let arr:number[];
        arr = [];
        arr = [1, 2, 3];

    2、正是由于成员数量可以动态变化，所以 TypeScript 不会对数组边界进行检查，越界访问数组并不会报错。
        let arr:number[] = [1, 2, 3];
        let foo = arr[3]; // 正确


二、数组的类型推断
    如果数组变量没有声明类型，TypeScript 就会推断数组成员的类型。

    const arr = [];
    arr // 推断为 any[]

    arr.push(123);
    arr // 推断类型为 number[]

    arr.push('abc');
    arr // 推断类型为 (string|number)[]
    类型推断的自动更新只发生初始值为空数组的情况。如果初始值不是空数组，类型推断就不会更新。


三、只读数组，const 断言
    JavaScript 规定，const命令声明的数组变量是可以改变成员的。
    const arr = [0, 1];
    arr[0] = 2;


    但是，很多时候确实有声明为只读数组的需求，即不允许变动数组成员。
    TypeScript 允许声明只读数组，方法是在数组类型前面加上readonly关键字。
    const arr:readonly number[] = [0, 1];

    arr[1] = 2; // 报错
    arr.push(3); // 报错
    delete arr[0]; // 报错

    TypeScript 将readonly number[]与number[]视为两种不一样的类型，后者是前者的子类型。
    子类型继承了父类型的所有特征，并加上了自己的特征，所以子类型number[]可以用于所有使用父类型的场合，反过来就不行。

四、多维数组
TypeScript 使用T[][]的形式，表示二维数组，T是最底层数组成员的类型。
var multi:number[][] = [[1,2,3], [23,24,25]];


*/

