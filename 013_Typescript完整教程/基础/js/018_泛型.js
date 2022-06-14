/*
泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

*/
// identity函数。 这个函数会返回任何传入它的值
// 不用泛型的话，这个函数可能是下面这样：
function identity(arg) {
    return arg;
}
// 或者，我们使用any类型来定义函数：
function identity1(arg) {
    return arg;
}
// 使用any类型会导致这个函数可以接收任何类型的arg参数，
// 如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。
/*
给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。
之后我们再次使用了 T当做返回值类型。

可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：
let output = identity2<string>("myString");
第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
let output = identity("myString");

*/
function identity2(arg) {
    return arg;
}
// 1. 多个类型参数
//  定义泛型的时候，可以一次定义多个类型参数：
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
console.log(swap([7, 'seven'])); // ['seven', 7]
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity("abc");
// 也可以把泛型参数提前到接口名上：
// interface CreateArrayFunc<T> {
//     (length:number,value:T):Array<T>
// }
var createArray;
createArray = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    console.log(result);
    return result;
};
createArray(3, 'x'); // ['x', 'x', 'x']
// 4. 泛型类   与泛型接口类似，泛型也可以用于类的类型定义中：
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
// 5. 泛型参数的 默认类型
/*
在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。
当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。

*/
function createArray5(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
