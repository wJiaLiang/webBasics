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
// 类装饰器:类装饰器在类声明之前被声明（紧靠类声明），类装饰器应用于类构造函数，可以用来监视，修改或替换类定义
function logClass(params) {
    console.log(params);
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
