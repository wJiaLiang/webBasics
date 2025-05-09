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
类可以实现多个接口（其实是接受多重限制），每个接口之间使用逗号分隔。
class Car implements MotorVehicle, Flyable, Swimmable {
  // ...
}
Car类同时实现了MotorVehicle、Flyable、Swimmable三个接口。 
同时实现多个接口并不是一个好的写法，容易使得代码难以管理，可以使用两种方法替代。
第一种方法是类的继承。


第二种方法是接口的继承。
接口B继承了接口A，类只要实现接口B，就相当于实现A和B两个接口。


3、类与接口的合并

TypeScript 不允许两个同名的类，但是如果一个类和一个接口同名，那么接口会被合并进类。
class A {
  x:number = 1;
}

interface A {
  y:number;
}

let a = new A();
a.y = 10;

a.x // 1
a.y // 10
console.log(a.x,a.y)

上面示例中，类A与接口A同名，后者会被合并进前者的类型定义。



 */ 



/*

三、 Class 类型

1、实例类型
TypeScript 的类本身就是一种类型，但是它代表该类的实例类型，而不是 class 的自身类型。
作为类型使用时，类名只能表示实例的类型，不能表示类的自身类型。
class Point {
  x:number;
  y:number;

  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
  }
}

// 错误
function createPoint(
  PointClass:Point,
  x: number,
  y: number
) {
  return new PointClass(x, y);
}
函数createPoint()的第一个参数PointClass，需要传入 Point 这个类，
但是如果把参数的类型写成Point就会报错，因为Point描述的是实例类型，而不是 Class 的自身类型。

由于类名作为类型使用，实际上代表一个对象，因此可以把类看作为对象类型起名。
事实上，TypeScript 有三种方法可以为对象类型起名：type、interface 和 class。


2、类的自身类型

要获得一个类的自身类型，一个简便的方法就是使用 typeof 运算符。
function createPoint(
  PointClass:typeof Point,
  x:number,
  y:number
):Point {
  return new PointClass(x, y);
}
上面示例中，createPoint()的第一个参数PointClass是Point类自身，
要声明这个参数的类型，简便的方法就是使用typeof Point。因为Point类是一个值，typeof Point返回这个值的类型。
注意，createPoint()的返回值类型是Point，代表实例类型。

总结一下，类的自身类型就是一个构造函数，可以单独定义一个接口来表示。


3、结构类型原则
Class 也遵循“结构类型原则”。一个对象只要满足 Class 的实例结构，就跟该 Class 属于同一个类型。
class Foo {
  id!:number;
}
function fn(arg:Foo) {
  // ...
}
const bar = {
  id: 10,
  amount: 100,
};
fn(bar); // 正确
对象bar满足类Foo的实例结构，只是多了一个属性amount。所以，它可以当作参数，传入函数fn()。
如果两个类的实例结构相同，那么这两个类就是兼容的，可以用在对方的使用场合。


class Person {
  name: string;
}
const obj = { name: 'John' };
const p:Person = obj; // 正确
对象obj并不是Person的实例，但是赋值给变量p不会报错，TypeScript 认为obj也属于Person类型，因为它们的属性相同。
由于这种情况，运算符instanceof不适用于判断某个对象是否跟某个 class 属于同一类型。



*/ 


/*
四、类的继承
类（这里又称“子类”）可以使用 extends 关键字继承另一个类（这里又称“基类”）的所有属性和方法。
class B extends A {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name}`);
    }
  }
}
类B定义了一个方法greet()，覆盖了基类A的同名方法。其中，参数name省略时，
就调用基类A的greet()方法，这里可以写成super.greet()，使用super关键字指代基类是常见做法。


注意，extends关键字后面不一定是类名，可以是一个表达式，只要它的类型是构造函数就可以了。


*/ 


/*
五、可访问性修饰符 
类的内部成员的外部可访问性，由三个可访问性修饰符（access modifiers）控制：public、private和protected。
1、这三个修饰符的位置，都写在属性或方法的最前面。
public 
public修饰符表示这是公开成员，外部可以自由访问。

private 
private修饰符表示私有成员，只能用在当前类的内部，类的实例和子类都不能使用该成员。

protected
protected修饰符表示该成员是保护成员，只能在类的内部使用该成员，实例无法使用该成员，但是子类内部可以使用。

2、实例属性的简写形式
实际开发中，很多实例属性的值，是通过构造方法传入的。
class Point {
  x:number;
  y:number;

  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
  }
}
上面实例中，属性x和y的值是通过构造方法的参数传入的。

这样的写法等于对同一个属性要声明两次类型，一次在类的头部，另一次在构造方法的参数里面。
这有些累赘，TypeScript 就提供了一种简写形式。

class Point {
  constructor(
    public x:number,
    public y:number
  ) {}
}

const p = new Point(10, 10);
p.x // 10


3、顶层属性的处理方法
对于类的顶层属性，TypeScript 早期的处理方法，与后来的 ES2022 标准不一致。这会导致某些代码的运行结果不一样。
类的顶层属性在 TypeScript 里面，有两种写法。
TypeScript 早期的处理方法是，先在顶层声明属性，但不进行初始化，等到运行构造方法时，再完成所有初始化。



4、静态成员
类的内部可以使用static关键字，定义静态成员。
静态成员是只能通过类本身使用的成员，不能通过实例对象使用。
static关键字前面可以使用 public、private、protected 修饰符。




5、泛型类
类也可以写成泛型，使用类型参数。关于泛型的详细介绍，请看《泛型》一章。



6、抽象类，抽象成员
TypeScript 允许在类的定义前面，加上关键字 abstract，表示该类不能被实例化，只能当作其他类的模板。
这种类就叫做“抽象类”（ abstract class）。



7、this 问题 
类的方法经常用到this关键字，它表示该方法当前所在的对象。



*/ 

export {}