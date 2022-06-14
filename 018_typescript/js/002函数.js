"use strict";
// 1.函数的定义
// 指定函数返回参数类型
function run0() {
    return 'run';
}
// 匿名函数
let run2 = function () {
    return 123;
};
// 定义方法传参
function getInfo(name, age) {
    return `${name}---${age}`;
}
getInfo("keke", 23);
//匿名函数
let getInfo2 = function (name, age) {
    return `${name}---${age}`;
};
// 没有返回值的函数定义
function run3() {
    console.log("no return");
}
// 2. 可选参数  在参数后面加个问号,可选参数必须放到最后面
function getAge(name, age) {
    return `姓名${name}---${age ? age : "666"}`;
}
console.log(getAge("kg"));
// 3.默认参数
function getAge2(name = "aa", age) {
    return `姓名${name}---${age ? age : "666"}`;
}
console.log(getAge2());
// 4.剩余参数  三点运算符
function sum(...res) {
    var sum = 0;
    for (let i = 0; i < res.length; i++) {
        sum += res[i];
    }
    console.log(sum);
    return sum;
}
sum(1, 2, 3, 4, 5);
function get1(name, age) {
    if (age) {
        return "w" + name + age;
    }
    else {
        return "z" + name;
    }
}
