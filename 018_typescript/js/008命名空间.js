"use strict";
/*
命名空间：
    在代码量较大的情况下，为了避免各种变量命名相冲突，可以将相似的功能函数，类，接口等放置到命名空间内
    和 Java,.net 的命名空间一样 ts 的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象，
    命名空间内部的 代码 可以通过 export 导出

    命名空间和模块的区别：
    命名空间：内部模块，主要用于组织代码，避免命名冲突
    模块： ts 的外部模块的简称，侧重代码的复用，一个模块里面可以有对个命名空间；

    语法；
    namespace 名称{ 。。。 }

*/
var AA;
(function (AA) {
    let url = "xxx";
    class Person {
        constructor(name) {
            this.naem = name;
        }
        eat() {
            console.log(this.naem + "eat 方法");
        }
    }
    AA.Person = Person;
})(AA || (AA = {}));
var BB;
(function (BB) {
    BB.name = "测试命名空间";
})(BB || (BB = {}));
console.log(BB.name);
let aPerson = AA.Person;
let men = new aPerson("zs");
men.eat();
