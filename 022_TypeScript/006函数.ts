/*

一、简介
函数的类型声明，需要在声明函数时，给出参数的类型和返回值的类型。
如果变量被赋值为一个函数，变量的类型有两种写法。

写法二有两个地方需要注意。
首先，函数的参数要放在圆括号里面，不放会报错。
类型里面的参数名（本例是txt）是必须的

*/ 
// 写法一
const hello = function (txt:string) {
  console.log('hello ' + txt);
}

// 写法二
const hello2:(txt:string) => void = function (txt) {
  console.log('hello ' + txt);
};


/**
二、Function 类型
TypeScript 提供 Function 类型表示函数，任何函数都属于这个类型。
function doSomething(f:Function) {
  return f(1, 2, 3);
}
上面示例中，参数f的类型就是Function，代表这是一个函数。
Function 类型的函数可以接受任意数量的参数，每个参数的类型都是any，返回值的类型也是any，代表没有任何约束，
所以不建议使用这个类型，给出函数详细的类型声明会更好。

*/ 

/*
三、箭头函数
箭头函数是普通函数的一种简化写法，它的类型写法与普通函数类似。
const repeat = (
  str:string,
  times:number
):string => str.repeat(times);

注意，类型写在箭头函数的定义里面，与使用箭头函数表示函数类型，写法有所不同。
function greet(
  fn:(a:string) => void
):void {
  fn('world');
}
上面示例中，函数greet()的参数fn是一个函数，类型就用箭头函数表示。
这时，fn的返回值类型要写在箭头右侧，而不是写在参数列表的圆括号后面


*/ 

/*
四、可选参数
如果函数的某个参数可以省略，则在参数名后面加问号表示。
function f(x?:number) {
  // ...
}
f(); // OK
f(10); // OK
上面示例中，参数x后面有问号，表示该参数可以省略。
参数名带有问号，表示该参数的类型实际上是原始类型|undefined，它有可能为undefined。
比如，上例的x虽然类型声明为number，但是实际上是number|undefined。

函数的可选参数只能在参数列表的尾部，跟在必选参数的后面。

*/ 

/*
五、参数默认值
TypeScript 函数的参数默认值写法，与 JavaScript 一致。
设置了默认值的参数，就是可选的。如果不传入该参数，它就会等于默认值。
function createPoint(
  x:number = 0,
  y:number = 0
):[number, number] {
  return [x, y];
}
createPoint() // [0, 0]

*/ 

/*
六、参数结构
函数参数如果存在变量解构，类型写法如下。
function f(
  [x, y]: [number, number]
) {
  // ...
}

function sum(
  { a, b, c }: {
     a: number;
     b: number;
     c: number
  }
) {
  console.log(a + b + c);
}
参数解构可以结合类型别名（type 命令）一起使用，代码会看起来简洁一些。
type ABC = { a:number; b:number; c:number };

function sum({ a, b, c }:ABC) {
  console.log(a + b + c);
}


*/


/*
七、rest 参数
rest 参数表示函数剩余的所有参数，它可以是数组（剩余参数类型相同），也可能是元组（剩余参数类型不同）。
// rest 参数为数组
function joinNumbers(...nums:number[]) {
  // ...
}
// rest 参数为元组
function f(...args:[boolean, number]) {
  // ...
}
注意，元组需要声明每一个剩余参数的类型。如果元组里面的参数是可选的，则要使用可选参数。
function f(
  ...args: [boolean, string?]
) {}

下面是一个 rest 参数的例子。
function multiply(n:number, ...m:number[]) {
  return m.map((x) => n * x);
}
上面示例中，参数m就是 rest 类型，它的类型是一个数组




*/ 

/*
八、readonly 只读参数
如果函数内部不能修改某个参数，可以在函数定义时，在参数类型前面加上readonly关键字，表示这是只读参数。
function arraySum(
  arr:readonly number[]
) {
  // ...
  arr[0] = 0; // 报错
}

注意，readonly关键字目前只允许用在数组和元组类型的参数前面，如果用在其他类型的参数前面，就会报错。


*/ 

/*
九、void 类型
void 类型表示函数没有返回值。
function f():void {
  console.log('hello');
}
上面示例中，函数f没有返回值，类型就要写成void。
如果返回其他值，就会报错。

*/ 

/*
十、never 类型
never类型表示肯定不会出现的值。它用在函数的返回值，就表示某个函数肯定不会返回值，即函数不会正常执行结束。

它主要有以下两种情况。

（1）抛出错误的函数。
function fail(msg:string):never {
  throw new Error(msg);
}

（2）无限执行的函数。
const sing = function():never {
  while (true) {
    console.log('sing');
  }
};

注意，never类型不同于void类型。前者表示函数没有执行结束，不可能有返回值；后者表示函数正常执行结束，
但是不返回值，或者说返回undefined。


*/ 

/*
十一、局部类型
函数内部允许声明其他类型，该类型只在函数内部有效，称为局部类型。
function hello(txt:string) {
  type message = string;
  let newTxt:message = 'hello ' + txt;
  return newTxt;
}
const newTxt:message = hello('world'); // 报错
上面示例中，类型message是在函数hello()内部定义的，只能在函数内部使用。在函数外部使用，就会报错。


*/ 

/*
十二、高阶函数
一个函数的返回值还是一个函数，那么前一个函数就称为高阶函数（higher-order function）。
下面就是一个例子，箭头函数返回的还是一个箭头函数。
(someValue: number) => (multiplier: number) => someValue * multiplier;

*/ 

/*
十三、函数重载
有些函数可以接受不同类型或不同个数的参数，并且根据参数的不同，会有不同的函数行为。
这种根据参数类型不同，执行不同逻辑的行为，称为函数重载（function overload）。

reverse('abc') // 'cba'
reverse([1, 2, 3]) // [3, 2, 1]
上面示例中，函数reverse()可以将参数颠倒输出。参数可以是字符串，也可以是数组。
这意味着，该函数内部有处理字符串和数组的两套逻辑，根据参数类型的不同，分别执行对应的逻辑。这就叫“函数重载”。

TypeScript 对于“函数重载”的类型声明方法是，逐一定义每一种情况的类型。

由于重载是一种比较复杂的类型声明方法，为了降低复杂性，一般来说，如果可以的话，
应该优先使用联合类型替代函数重载，除非多个参数之间、或者某个参数与返回值之间，存在对应关系。

// 写法一
function len(s:string):number;
function len(arr:any[]):number;
function len(x:any):number {
  return x.length;
}

// 写法二
function len(x:any[]|string):number {
  return x.length;
}


*/ 

/*
十四、构造函数
JavaScript 语言使用构造函数，生成对象的实例。
构造函数的最大特点，就是必须使用new命令调用。

构造函数的类型写法，就是在参数列表前面加上new命令。
class Animal {
  numLegs:number = 4;
}
type AnimalConstructor = new () => Animal;

function create(c:AnimalConstructor):Animal {
  return new c();
}
const a = create(Animal);

上面示例中，类型AnimalConstructor就是一个构造函数，而函数create()需要传入一个构造函数。
在 JavaScript 中，类（class）本质上是构造函数，所以Animal这个类可以传入create()。

构造函数还有另一种类型写法，就是采用对象形式。
type F = {
  new (s:string): object;
};
上面示例中，类型 F 就是一个构造函数。类型写成一个可执行对象的形式，并且在参数列表前面要加上new命令。


type F = {
  new (s:string): object;
  (n?:number): number;
}
上面示例中，F 既可以当作普通函数执行，也可以当作构造函数使用。




*/ 

export {}
