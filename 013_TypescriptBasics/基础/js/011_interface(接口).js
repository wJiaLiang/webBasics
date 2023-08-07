/**
 * 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）
 * 接口也是属于一种数据类型;
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 *
 */
// ##############对象类型接口#######################对象类型接口###################################对象类型接口##################
/*

 类型检查器会查看printLabel的调用。 printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性。
 需要注意的是，我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。
 */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var myObj2 = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
var mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
