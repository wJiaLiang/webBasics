/*
一、简介
TypeScript 对于对象类型有很多规则。

一旦声明了类型，对象赋值时，就不能缺少指定的属性，也不能有多余的属性。
同样地，也不能删除类型声明中存在的属性，修改属性值是可以的。


type命令可以为对象类型声明一个别名，TypeScript 还提供了interface命令，可以把对象类型提炼为一个接口。
// 写法一
type MyObj = {
  x:number;
  y:number;
};
const obj:MyObj = { x: 1, y: 1 };

// 写法二
interface MyObj {
  x: number;
  y: number;
}

const obj:MyObj = { x: 1, y: 1 };


TypeScript 不区分对象自身的属性和继承的属性，一律视为对象的属性。

interface MyInterface {
  toString(): string; // 继承的属性
  prop: number; // 自身的属性
}

const obj:MyInterface = { // 正确
  prop: 123,
};
obj只写了prop属性，但是不报错。因为它可以继承原型上面的toString()方法。

*/

/*

二、可选属性

如果某个属性是可选的（即可以忽略），需要在属性名后面加一个问号。
const obj: {
  x: number;
  y?: number;
} = { x: 1 };

可选属性等同于允许赋值为undefined，下面两种写法是等效的。
// 等同于
type User = {
  firstName: string;
  lastName?: string|undefined;
};





*/ 

/*
三、只读属性
属性名前面加上readonly关键字，表示这个属性是只读属性，不能修改。

interface MyInterface {
  readonly prop: number;
}
只读属性只能在对象初始化期间赋值，此后就不能修改该属性。
注意，如果属性值是一个对象，readonly修饰符并不禁止修改该对象的属性，只是禁止完全替换掉该对象。


as const属于 TypeScript 的类型推断，如果变量明确地声明了类型，那么 TypeScript 会以声明的类型为准。
const myUser = {
  name: "Sabrina",
} as const;

myUser.name = "Cynthia"; // 报错

const myUser:{ name: string } = {
  name: "Sabrina",
} as const;

myUser.name = "Cynthia"; // 正确



*/ 


/*

四、属性名的索引类型

如果对象的属性非常多，一个个声明类型就很麻烦，而且有些时候，无法事前知道对象会有多少属性，比如外部 API 返回的对象。
这时 TypeScript 允许采用属性名表达式的写法来描述类型，称为“属性名的索引类型”。
索引类型里面，最常见的就是属性名的字符串索引。

 type MyObj = {
  [property: string]: string
};

const obj:MyObj = {
  foo: 'a',
  bar: 'b',
  baz: 'c',
};  
类型MyObj的属性名类型就采用了表达式形式，写在方括号里面。
[property: string]的property表示属性名，这个是可以随便起的，它的类型是string，即属性名类型为string。
也就是说，不管这个对象有多少属性，只要属性名为字符串，且属性值也是字符串，就符合这个类型声明。


*/ 






