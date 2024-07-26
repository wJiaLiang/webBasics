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
都注明了参数类型，但是省略了返回值类型，因为 TypeScript 可以自己推断出来。
类的方法跟普通函数一样，可以使用参数默认值，以及函数重载。
另外，构造方法不能声明返回值类型，否则报错，因为它总是返回实例对象。

class Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  add(point:Point){
    return new Point(
        this.x + point.x,
        this.y + point.y
      );
    }
}

4、存取器方法
存取器（accessor）是特殊的类方法，包括取值器（getter）和存值器（setter）两种方法。
它们用于读写某个属性，取值器用来读取属性，存值器用来写入属性。


5、属性索引
[s:string]表示所有属性名类型为字符串的属性，它们的属性值要么是布尔值，要么是返回布尔值的函数。
class MyClass {
  [s:string]: boolean |
    ((s:string) => boolean);

  get(s:string) {
    return this[s] as boolean;
  }
}
由于类的方法是一种特殊属性（属性值为函数的属性），所以属性索引的类型定义也涵盖了方法。
如果一个对象同时定义了属性索引和方法，那么前者必须包含后者的类型。
class MyClass {
  [s:string]: boolean | (() => boolean);
  f() {
    return true;
  }
}



*/ 

/**
 二、类的 interface 接口
 interface 接口或 type 别名，可以用对象的形式，为 class 指定一组检查条件
 然后，类使用 implements 关键字，表示当前类满足这些外部类型条件的限制。

 1、implements 关键字

interface Country {
  name:string;
  capital:string;
}
// 或者
type Country = {
  name:string;
  capital:string;
}

class MyCountry implements Country {
  name = '';
  capital = '';
}
interface 只是指定检查条件，如果不满足这些条件就会报错。它并不能代替 class 自身的类型声明。

interface A {
  get(name:string): boolean;
}

class B implements A {
  get(s) { // s 的类型是 any
    return true;
  }
}
上面示例中，类B实现了接口A，但是后者并不能代替B的类型声明。
因此，B的get()方法的参数s的类型是any，而不是string。B类依然需要声明参数s的类型。


interface A {
  x: number;
  y?: number;
}
class B implements A {
  x = 0;
}
const b = new B();
b.y = 10; // 报错
接口A有一个可选属性y，类B没有声明这个属性，所以可以通过类型检查。
但是，如果给B的实例对象的属性y赋值，就会报错。所以，B类还是需要声明可选属性y。


implements关键字后面，不仅可以是接口，也可以是另一个类。这时，后面的类将被当作接口。
class Car {
  id:number = 1;
  move():void {};
}
class MyCar implements Car {
  id = 2; // 不可省略
  move():void {};   // 不可省略
}


2、实现多个接口




 */ 
