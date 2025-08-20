/*
一、简介

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。


有些时候，函数返回值的类型与参数类型是相关的。
function getFirst<T>(arr:T[]):T {
  return arr[0];
}

，函数getFirst()的函数名后面尖括号的部分<T>，就是类型参数，参数要放在一对尖括号（<>）里面。本例只有一个类型参数T，
可以将其理解为类型声明需要的变量，需要在调用时传入具体的参数类型。

上例的函数getFirst()的参数类型是T[]，返回值类型是T，就清楚地表示了两者之间的关系。
比如，输入的参数类型是number[]，那么 T 的值就是number，因此返回值类型也是number。


二、泛型的写法 
泛型主要用在四个场合：函数、接口、类和别名。
1、函数泛型的写法
上一节提到，function关键字定义的泛型函数，类型参数放在尖括号中，写在函数名后面。
function id<T>(arg:T):T {
  return arg;
}
那么对于变量形式定义的函数，泛型有下面两种写法。
let myId:<T>(arg:T) => T = id;
let myId:{ <T>(arg:T): T } = id;

2、接口的泛型写法
interface Box<Type> {
  contents: Type;
}
let box:Box<string>;

3、类的泛型写法
class Pair<K, V> {
  key: K;
  value: V;
}
4、类型别名的泛型写法
type 命令定义的类型别名，也可以使用泛型。

Nullable<T>是一个泛型，只要传入一个类型，就可以得到这个类型与undefined和null的一个联合类型。
type Nullable<T> = T | undefined | null;


type Container<T> = { value: T };
const a: Container<number> = { value: 0 };
const b: Container<string> = { value: 'b' };



三、类型参数的默认值
类型参数可以设置默认值。使用时，如果没有给出类型参数的值，就会使用默认值。
function getFirst<T = string>(
  arr:T[]
):T {
  return arr[0];
}


function getFirst<T = string>(
  arr:T[]
):T {
  return arr[0];
}
let s = getFirst([1, 2, 3]) // 正确
console.log(s);
上面示例中，实际参数是[1, 2, 3]，TypeScript 推断 T 等于number，从而覆盖掉默认值string。

const g = new Generic();
g.add(4) // 报错
g.add('hello') // 正确
上面示例中，新建Generic的实例g时，没有给出类型参数T的值，所以T就等于string。
因此，向add()方法传入一个数值会报错，传入字符串就不会。

const g = new Generic<number>();
g.add(4) // 正确
g.add('hello') // 报错


四、数组的泛型表示
《数组》一章提到过，数组类型有一种表示方法是Array<T>。这就是泛型的写法，
Array是 TypeScript 原生的一个类型接口，T是它的类型参数。声明数组时，需要提供T的值。
let arr:Array<number> = [1, 2, 3];
TypeScript 默认还提供一个ReadonlyArray<T>接口，表示只读数组。


五、类型参数的约束条件
很多类型参数并不是无限制的，对于传入的类型存在约束条件。
function comp<Type>(a:Type, b:Type) {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}
上面示例中，类型参数 Type 有一个隐藏的约束条件：它必须存在length属性。如果不满足这个条件，就会报错。
TypeScript 提供了一种语法，允许在类型参数上面写明约束条件，如果不满足条件，编译时就会报错。
function comp<T extends { length: number }>(
  a: T,
  b: T
) {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}
上面示例中，T extends { length: number }就是约束条件，表示类型参数 T 必须满足{ length: number }，否则就会报错。

类型参数的约束条件采用下面的形式。
<TypeParameter extends ConstraintType>
TypeParameter表示类型参数，extends是关键字，这是必须的，ConstraintType表示类型参数要满足的条件，
即类型参数应该是ConstraintType的子类型。


六、使用注意点
（1）尽量少用泛型。
泛型虽然灵活，但是会加大代码的复杂性，使其变得难读难写。一般来说，只要使用了泛型，类型声明通常都不太易读，容易写得很复杂。
因此，可以不用泛型就不要用。

（2）类型参数越少越好。
多一个类型参数，多一道替换步骤，加大复杂性。因此，类型参数越少越好。

（3）类型参数需要出现两次。

（4）泛型可以嵌套。




*/ 

// 例子

function swap<T,U>(tuple:[T,U]):[U,T]{
  return [tuple[1],tuple[0]]
}

let result = swap(['STRING',123]);
console.log(result[0]) //123




//使用接口 约束 泛型参数
interface Iw{
  length:number
}

function echoWhite<T extends Iw >(arg: T) :T{
  console.log(arg.length) // arg 参数没有这个 length 属性就会报错，所以用接口约束
  return arg
}

const str = echoWhite('str');
const obj = echoWhite({a:'123',b:123,length:3})
const arr = echoWhite([1,2,3]);


// 泛型类，泛型对类的改造，使类更灵活;
class Queue<T>{
  private data:T[] = [];
  push(item:T){
    return this.data.push(item);
  }
  pop(){
    return this.data.shift()
  }
}
const queue = new Queue<number>();
queue.push(2);
const poped = queue.pop();
if(poped){
  poped.toFixed() //
}


// interface 接口泛型改造
interface KeyPair<T,U>{
  key:T,
  value:U
}

let kp1:KeyPair<number,string> = {key:1,value:'str'}
let kp2:KeyPair<string,number> = {key:'str',value:22}








export {}
