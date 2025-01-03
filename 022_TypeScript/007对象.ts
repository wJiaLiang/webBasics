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

/*
五、结构赋值
解构赋值用于直接从对象中提取属性。
const {id, name, price} = product;
从对象product提取了三个属性，并声明属性名的同名变量。

解构赋值的类型写法，跟为对象声明类型是一样的。
const {id, name, price}:{
  id: string;
  name: string;
  price: number
} = product;

注意，目前没法为解构变量指定类型，因为对象解构里面的冒号，JavaScript 指定了其他用途。
let { x: foo, y: bar } = obj;

// 等同于
let foo = obj.x;
let bar = obj.y;
冒号不是表示属性x和y的类型，而是为这两个属性指定新的变量名。如果要为x和y指定类型，不得不写成下面这样。
let { x: foo, y: bar }:{ x: string; y: number } = obj;

这一点要特别小心，TypeScript 里面很容易搞糊涂。

function draw({
  shape: Shape,
  xPos: number = 100
}) {
  let myShape = shape; // 报错
  let x = xPos; // 报错
}

数draw()的参数是一个对象解构，里面的冒号很像是为变量指定类型，其实是为对应的属性指定新的变量名。
所以，TypeScript 就会解读成，函数体内不存在变量shape，而是属性shape的值被赋值给了变量Shape。

*/ 

/*
六、结构类型原则
只要对象 B 满足 对象 A 的结构特征，TypeScript 就认为对象 B 兼容对象 A 的类型，这称为“结构类型”原则（structural typing）。
type A = {
  x: number;
};

type B = {
  x: number;
  y: number;
};
对象A只有一个属性x，类型为number。对象B满足这个特征，因此兼容对象A，只要可以使用A的地方，就可以使用B


*/

/*
七、严格字面量检查
如果对象使用字面量表示，会触发 TypeScript 的严格字面量检查（strict object literal checking）。
如果字面量的结构跟类型定义的不一样（比如多出了未定义的属性），就会报错。
const point:{
  x:number;
  y:number;
} = {
  x: 1,
  y: 1,
  z: 1 // 报错
};
如果等号右边不是字面量，而是一个变量，根据结构类型原则，是不会报错的。
const myPoint = {
  x: 1,
  y: 1,
  z: 1
};

const point:{
  x:number;
  y:number;
} = myPoint; // 正确

如果允许字面量有多余属性，可以像下面这样在类型里面定义一个通用属性。
let x: {
  foo: number,
  [x: string]: any
};

x = { foo: 1, baz: 2 };  // Ok
上面示例中，变量x的类型声明里面，有一个属性的字符串索引（[x: string]），导致任何字符串属性名都是合法的。



*/ 
/*
八、最小可选属性规则
根据“结构类型”原则，如果一个对象的所有属性都是可选的，那么其他对象跟它都是结构类似的。
类型Options的所有属性都是可选的，所以它可以是一个空对象，也就意味着任意对象都满足Options的结构。
对象opts与类型Options没有共同属性，赋值给该类型的变量就会报错。

如果某个类型的所有属性都是可选的，那么该类型的对象必须至少存在一个可选属性，
不能所有可选属性都不存在。这就叫做“最小可选属性规则”。

type Options = {
  a?:number;
  b?:number;
  c?:number;
};

const opts = { d: 123 };

const obj:Options = opts; // 报错
要么在类型里面增加一条索引属性（[propName: string]: someType），要么使用类型断言（opts as Options）。

*/ 


type Options = {
  a?:number;
  b?:number;
  c?:number;
  [xs:string]:any
};

const opts = { d: 123 };

const obj:Options = opts; // 报错


/*
九、空对象
空对象是 TypeScript 的一种特殊值，也是一种特殊类型。

const obj = {};
obj.prop = 123; // 报错
上面示例中，变量obj的值是一个空对象，然后对obj.prop赋值就会报错。
原因是这时 TypeScript 会推断变量obj的类型为空对象，实际执行的是下面的代码。
const obj:{} = {};

空对象没有自定义属性，所以对自定义属性赋值就会报错。空对象只能使用继承的属性，即继承自原型对象Object.prototype的属性。
obj.toString() // 正确

这种写法其实在 JavaScript 很常见：先声明一个空对象，然后向空对象添加属性。
但是，TypeScript 不允许动态添加属性，所以对象不能分步生成，必须生成时一次性声明所有属性。

如果确实需要分步声明，一个比较好的方法是，使用扩展运算符（...）合成一个新对象。
const pt0 = {};
const pt1 = { x: 3 };
const pt2 = { y: 4 };

const pt = {
  ...pt0, ...pt1, ...pt2
};


空对象作为类型，其实是Object类型的简写形式。

let d:{};
// 等同于
// let d:Object;

d = {};
d = { x: 1 };
d = 'hello';
d = 2;
各种类型的值（除了null和undefined）都可以赋值给空对象类型，跟Object类型的行为是一样的。





*/ 


export {}