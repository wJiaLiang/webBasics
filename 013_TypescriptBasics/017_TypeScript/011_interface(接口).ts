/**
 * 在面向对象语言中，接口（Interfaces）是一个很重要的概念，
 * 它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）
 * 接口也是属于一种数据类型;
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 *
 */

// ##############对象类型接口###################对象类型接口#################对象类型接口############


/*

 类型检查器会查看printLabel的调用。 printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性。 
 需要注意的是，我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。
 */

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// ====================================================================================================
/*

LabelledValue接口就好比一个名字，用来描述上面例子里的要求。 
它代表了有一个 label属性且类型为string的对象。 
需要注意的是，我们在这里并不能像在其它语言里一样，说传给 printLabel的对象实现了这个接口。我们只会去关注值的外形。 
只要传入的对象满足上面提到的必要条件，那么它就是被允许的。

*/

interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj2 = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// ==========================================================================================================
/*
    可选属性
    带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。

*/
interface SquareConfig {
    color?: string;
    width?: number;
}
// ============================================================================================================

/*
    只读属性
    一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:

    interface Point {
        readonly x: number;
        readonly y: number;
    }
    let p1: Point = { x: 10, y: 20 };
    p1.x = 5;   // error!

    TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
*/

// #######################函数类型接口###################函数类型接口###############函数类型接口###########################################################

/*
    函数类型
    接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。
    为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。
    参数列表里的每个参数都需要名字和类型。

    创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。
*/

interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
};

// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
};
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。
// 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，因为函数直接赋值给了 SearchFunc类型变量

// ###########可索引的类型接口####################可索引的类型接口##############################可索引的类型接口##############################################
/*
    与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型
    可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。
*/
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

/*
上面例子里，我们定义了StringArray接口，它具有索引签名。 
这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值。

TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 
这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。

*/

// ###########类类型接口##############################类类型接口################################类类型接口##############################################

/*
TypeScript也能够用它来明确的强制一个类去符合某种契约

*/

interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}




export default{}