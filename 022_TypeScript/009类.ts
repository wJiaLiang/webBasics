/*
一、简介
类（class）是面向对象编程的基本构件，封装了属性和方法，TypeScript 给予了全面支持。

1、属性的类型
类的属性可以在顶层声明，也可以在构造方法内部声明。
对于顶层声明的属性，可以在声明时同时给出类型。
class Point {
  x:number;
  y:number;
}
如果不给出类型，TypeScript 会认为x和y的类型都是any。
如果声明时给出初值，可以不写类型，TypeScript 会自行推断属性的类型。

2、readonly 修饰符
属性名前面加上 readonly 修饰符，就表示该属性是只读的。实例对象不能修改这个属性。
class A {
  readonly id = 'foo';
}
const a = new A();
a.id = 'bar'; // 报错

3、方法的类型
类的方法就是普通函数，类型声明方式与函数一致。






*/ 
