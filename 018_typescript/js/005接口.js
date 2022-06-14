"use strict";
/*
    接口的作用；
    在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用
    接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些方法的实现细节，它只规定这批类里必须、
    提供某些方法，提供这些方法的类就可以满足实际需求，同时还保留了更加灵活的接口类型，包括属性。函数，索引和类等；
    定义标准
*/
// 同过函数实现 参数的约束
function printLabel(lableInfo) {
    console.log(lableInfo);
}
printLabel({ lable: "666" }); //参数中包含 lable 属性;
function prName(name) {
    console.log(name.firstName + "----" + name.lastName);
}
let obj = { age: 20, firstName: "11", lastName: "99" };
// prName(obj)
prName({
    firstName: "li",
    lastName: "4",
});
// 通过接口，实现一个加密类型的函数
let md5 = function (key, value) {
    return key + value;
};
console.log(md5('name', 'zs'));
var arr5 = ["aaa", "bbb"];
console.log(arr5[0]);
var arr6 = { name: "33", age: "88" };
class dog7 {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name);
    }
}
let dd = new dog7("kg");
dd.eat();
class pics8 {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + "eat方法");
    }
    work() {
        console.log(this.name + "work方法");
    }
}
let PP = new pics8("lisi");
PP.eat();
//  
