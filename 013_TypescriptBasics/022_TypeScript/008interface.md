
## 一、简介
### interface 是对象的模板，可以看作是一种类型约定，中文译为“接口”。使用了某个模板的对象，就拥有了指定的类型结构。
```ts
interface Person {s
  firstName: string;
  lastName: string;
  age: number;
}

定义了一个接口Person，它指定一个对象模板，拥有三个属性firstName、lastName和age。
任何实现这个接口的对象，都必须部署这三个属性，并且必须符合规定的类型。

实现该接口很简单，只要指定它作为对象的类型即可。
const p:Person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25
};
变量p的类型就是接口Person，所以必须符合Person指定的结构。
方括号运算符可以取出 interface 某个属性的类型。

interface Foo {
  a: string;
}
type A = Foo['a']; // string
Foo['a']返回属性a的类型，所以类型A就是string。
```

interface 可以表示对象的各种语法，它的成员有5种形式。
对象属性
对象的属性索引
对象方法
函数
构造函数


（1）对象属性
interface Point {
  x: number;
  y: number;
}
上面示例中，x和y都是对象的属性，分别使用冒号指定每个属性的类型。
属性之间使用分号或逗号分隔，最后一个属性结尾的分号或逗号可以省略。
如果属性是可选的，就在属性名后面加一个问号。
如果属性是只读的，需要加上readonly修饰符。
interface Foo {
  x?: string;
  readonly a: string;

}

（2）对象的属性索引
interface A {
  [prop: string]: number;
}
上面示例中，[prop: string]就是属性的字符串索引，表示属性名只要是字符串，都符合类型要求。
属性索引共有string、number和symbol三种类型。
一个接口中，最多只能定义一个字符串索引。字符串索引会约束该类型中所有名字为字符串的属性。
interface MyObj {
  [prop: string]: number;

  a: boolean;      // 编译错误
}
属性索引指定所有名称为字符串的属性，它们的属性值必须是数值（number）。属性a的值为布尔值就报错了。

属性的数值索引，其实是指定数组的类型。


一个接口中最多只能定义一个数值索引。数值索引会约束所有名称为数值的属性。
如果一个 interface 同时定义了字符串索引和数值索引，那么数值索引必须服从于字符串索引。
因为在 JavaScript 中，数值属性名最终是自动转换成字符串属性名。

interface B {
  [prop: string]: number;
  [prop: number]: number; // 正确
}


（3）对象的方法
```ts
对象的方法共有三种写法。
// 写法一
interface A {
  f(x: boolean): string;
}
// 写法二
interface B {
  f: (x: boolean) => string;
}
// 写法三
interface C {
  f: { (x: boolean): string };
}
// 写法四、属性名可以采用表达式，所以下面的写法也是可以的。
const f = 'f';
interface A {
  [f](x: boolean): string;
}

类型方法可以重载。
interface A {
  f(): number;
  f(x: boolean): boolean;
  f(x: string, y: string): string;
}

（4）函数
interface 也可以用来声明独立的函数。
interface Add {
  (x:number, y:number): number;
}
const myAdd:Add = (x,y) => x + y;

（5）构造函数
interface 内部可以使用new关键字，表示构造函数。
interface ErrorConstructor {
  new (message?: string): Error;
}
```





## 二、interface 的继承
interface 可以继承其他类型，主要有下面几种情况。

1、interface 继承 interface 
interface 可以使用 extends 关键字，继承其他 interface。
interface Shape {
  name: string;
}

interface Circle extends Shape {
  radius: number;
}
Circle继承了Shape，所以Circle其实有两个属性name和radius。这时，Circle是子接口，Shape是父接口。
extends关键字会从继承的接口里面拷贝属性类型，这样就不必书写重复的属性。
interface 允许多重继承。

interface Style {
  color: string;
}
interface Shape {
  name: string;
}
interface Circle extends Style, Shape {
  radius: number;
}
extends关键字会从继承的接口里面拷贝属性类型，这样就不必书写重复的属性。
interface Style {
  color: string;
}

interface Shape {
  name: string;
}

interface Circle extends Style, Shape {
  radius: number;
}
Circle同时继承了Style和Shape，所以拥有三个属性color、name和radius。
多重接口继承，实际上相当于多个父接口的合并。

如果子接口与父接口存在同名属性，那么子接口的属性会覆盖父接口的属性。
注意，子接口与父接口的同名属性必须是类型兼容的，不能有冲突，否则会报错。

Bar继承了Foo，但是两者的同名属性id的类型不兼容，导致报错。
多重继承时，如果多个父接口存在同名属性，那么这些同名属性不能有类型冲突，否则会报错。



2、Bar继承了Foo，但是两者的同名属性id的类型不兼容，导致报错。
多重继承时，如果多个父接口存在同名属性，那么这些同名属性不能有类型冲突，否则会报错。

interface 可以继承type命令定义的对象类型。
type Country = {
  name: string;
  capital: string;
}

interface CountryWithPop extends Country {
  population: number;
}
CountryWithPop继承了type命令定义的Country对象，并且新增了一个population属性。
注意，如果type命令定义的类型不是对象，interface 就无法继承。


3、interface 继承 class 
interface 还可以继承 class，即继承该类的所有成员。
class A {
  x:string = '';

  y():boolean {
    return true;
  }
}

interface B extends A {
  z: number
}






## 三、接口合并

interface Box {
    height: number;
    width: number;
  }
  
  interface Box {
    length: number;
  }

上面示例中，两个Box接口会合并成一个接口，同时有height、width和length三个属性。
这样的设计主要是为了兼容 JavaScript 的行为。JavaScript 开发者常常对全局对象或者外部库，添加自己的属性和方法。
那么，只要使用 interface 给出这些自定义属性和方法的类型，就能自动跟原始的 interface 合并，使得扩展外部类型非常方便。


Web 网页开发经常会对window对象和document对象添加自定义属性，但是 TypeScript 会报错，因为原始定义没有这些属性。
解决方法就是把自定义属性写成 interface，合并进原始定义。
interface Document {
  foo: string;
}
document.foo = 'hello';
上面示例中，接口Document增加了一个自定义属性foo，从而就可以在document对象上使用自定义属性。

同名接口合并时，同一个属性如果有多个类型声明，彼此不能有类型冲突。
interface A {
  a: number;
}

interface A {
  a: string; // 报错
}
如果两个 interface 组成的联合类型存在同名属性，那么该属性的类型也是联合类型。
interface Circle {
  area: bigint;
}
interface Rectangle {
  area: number;
}

declare const s: Circle | Rectangle;
s.area;   // bigint | number






## 四、interface 与 type 的异同
interface命令与type命令作用类似，都可以表示对象类型。
很多对象类型既可以用 interface 表示，也可以用 type 表示。而且，两者往往可以换用，
几乎所有的 interface 命令都可以改写为 type 命令。

它们的相似之处，首先表现在都能为对象类型起名。
type Country = {
  name: string;
  capital: string;
}

interface Country {
  name: string;
  capital: string;
}
type命令和interface命令，分别定义同一个类型。
class命令也有类似作用，通过定义一个类，同时定义一个对象类型。但是，它会创造一个值，编译后依然存在。
如果只是单纯想要一个类型，应该使用type或interface。

interface 与 type 的区别有下面几点。
（1）type能够表示非对象类型，而interface只能表示对象类型（包括数组、函数等）。
（2）interface可以继承其他类型，type不支持继承。
继承的主要作用是添加属性，type定义的对象类型如果想要添加属性，只能使用&运算符，重新定义一个类型。

type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}
上面示例中，类型Bear在Animal的基础上添加了一个属性honey。
上例的&运算符，表示同时具备两个类型的特征，因此可以起到两个对象类型合并的作用。
作为比较，interface添加属性，采用的是继承的写法。
interface Animal {
  name: string
}
interface Bear extends Animal {
  honey: boolean
}
继承时，type 和 interface 是可以换用的。interface 可以继承 type。
type Foo = { x: number; };
interface Bar extends Foo {
  y: number;
}

type 也可以继承 interface。
interface Foo {
  x: number;
}

type Bar = Foo & { y: number; };

（3）同名interface会自动合并，同名type则会报错。也就是说，TypeScript 不允许使用type多次定义同一个类型。
type A = { foo:number }; // 报错
type A = { bar:number }; // 报错
上面示例中，type两次定义了类型A，导致两行都会报错。

（4）interface不能包含属性映射（mapping），type可以，详见《映射》一章。
interface Point {
  x: number;
  y: number;
}

// 正确
type PointCopy1 = {
  [Key in keyof Point]: Point[Key];
};
// 报错
interface PointCopy2 {
  [Key in keyof Point]: Point[Key];
};

（5）this关键字只能用于interface。
// 正确
interface Foo {
  add(num:number): this;
};
// 报错
type Foo = {
  add(num:number): this;
};

（6）type 可以扩展原始数据类型，interface 不行。
// 正确
type MyStr = string & {
  type: 'new'
};

// 报错
interface MyStr extends string {
  type: 'new'
}

（7）interface无法表达某些复杂类型（比如交叉类型和联合类型），但是type可以。
type A = { };
type B = { };

type AorB = A | B;
type AorBwithName = AorB & {
  name: string
};







export {}