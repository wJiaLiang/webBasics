"use strict";
/*
装饰器：
    装饰器是一种特殊类型的声明，他能够被附加到类声明，方法，属性或参数上，可以修改类的行为
    通俗的说 装饰器就是一个方法，可以注入到类，方法，属性 参数上来扩展类，属性，方法，参数的功能
    常见的装饰器：类装饰器，属性装饰器，方法装饰器，参数装饰器
    装饰器的写法：普通装饰器（无法传参数），装饰器工厂（可传参数）
    装饰器 是过去几年中 js 最大的成就之一，


*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 1.类装饰器:类装饰器在类声明之前被声明（紧靠类声明），类装饰器应用于类构造函数，可以用来监视，修改或替换类定义
// 1.1 普通装饰器
function logClass(params) {
    console.log(params);
    params.prototype.api = "动态扩展的 属性";
    params.prototype.run = function () {
        console.log("动态扩展的 run 函数");
    };
}
// 这样就是 给这类加了一个装饰器
let Httpclient = class Httpclient {
    constructor() {
    }
    getData() {
    }
};
Httpclient = __decorate([
    logClass
], Httpclient);
var http = new Httpclient();
console.log(http.api);
http.run();
// 1.2 装饰器共厂 可传参数
function logClass2(params) {
    return function (target) {
        console.log(target); // target 就是 Httpclient2类
        console.log(params);
        target.prototype.apiUrl = params; // params 就是传入进来的参数；
    };
}
let Httpclient2 = class Httpclient2 {
    constructor() {
    }
    getData() {
    }
};
Httpclient2 = __decorate([
    logClass2("https://www.baidu.com")
], Httpclient2);
var http2 = new Httpclient2();
console.log(http2.apiUrl);
//1.3 装饰器重装构造函数的例子
function logClass3(target) {
    console.log(target);
    return class extends target {
        constructor() {
            super(...arguments);
            this.apiUrl = "修改改后的apiUrl";
        }
        getData() {
            this.apiUrl = this.apiUrl + "重载构造函数";
            console.log(this.apiUrl);
        }
    };
}
let Httpclient3 = class Httpclient3 {
    constructor() {
        this.apiUrl = "构造函数里面的apiUrl";
    }
    getData() {
        console.log(this.apiUrl);
    }
};
Httpclient3 = __decorate([
    logClass3
], Httpclient3);
let http3 = new Httpclient3();
http3.getData();
// 2 属性装饰器
/*
    属性装饰器表达式会在运行时当作函数被调用，传入下面2个参数
    1.对于静态成员来说是类的构造函数 ，对于实例成员是类的原型对象;
    2.成员的名字

*/
console.log('---------------------------------');
function logProperty(params) {
    return function (target, attr) {
        console.log(target);
        console.log(attr);
        target[attr] = params;
    };
}
class Httpclient4 {
    constructor() {
    }
    getData() {
        console.log(this.url);
    }
}
__decorate([
    logProperty("www.baidu.com")
], Httpclient4.prototype, "url", void 0);
var http4 = new Httpclient4();
http4.getData();
console.log("--------------方法装饰器---------------");
/*
    3.方法装饰器
        它会应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义
        方法装饰器会在运行时传入下列3个参数
            1.对应静态成员来说是类的构造函数，对于实例成员是类的原型对象
            2.成员的名字
            3.成员属性描述符
*/
// 方法装饰器 修改属性 和 当前方法;
function get(params) {
    return function (target, methodName, desc) {
        console.log(target);
        console.log(methodName);
        console.log(desc);
        console.log(desc.value); //就是 getData 方法;
        // 在这个类实例上扩展性属性和方法
        target.api = "XXXX";
        target.run = function () {
            console.log("run 函数");
        };
        // 修改装饰器的方法 ，把装饰器方法里面传入的所有参数改为string类型
        var oMethod = desc.value;
        desc.value = function (...args) {
            args = args.map((value) => {
                return String(value);
            });
            console.log("修改参数后的值", args);
            oMethod.apply(this, args); // 这样调用 类中的 getData方法;
        };
    };
}
class Httpclient5 {
    constructor() {
    }
    getData(...args) {
        console.log("getdate方法", args);
        console.log("类里面的 getData 方法");
    }
}
__decorate([
    get("www.taobao.com")
], Httpclient5.prototype, "getData", null);
var http5 = new Httpclient5();
console.log(http5.api);
http5.run();
http5.getData(123, "sss");
console.log("----------方法参数装饰器-------------");
// 方法参数装饰器
/*
    参数装饰器表达式会在运行时当做函数的被调用，可以使用参数装饰器为类的原型增加一些元素数据，
    传入下列参数：
        1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        2. 方法的名字
        3. 参数在函数参数列表中的索引

*/
function logParams(params) {
    return function (target, methodName, paramsIndex) {
        console.log(params);
        console.log(target);
        console.log(methodName);
        console.log(paramsIndex);
        target.api = "XXXX";
    };
}
class Httpclient6 {
    constructor() {
    }
    getData(uuid) {
        console.log("类里面的 getData 方法" + uuid);
    }
}
__decorate([
    __param(0, logParams("uuid"))
], Httpclient6.prototype, "getData", null);
let http6 = new Httpclient6();
http6.getData("123456");
console.log(http6.api); // xxxx;
// 装饰器的执行顺序
/*
    属性> 方法> 方法参数>类

    如果有多个相同的装饰器，它会先执行后面的;
*/
