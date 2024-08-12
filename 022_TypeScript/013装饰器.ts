/*
一、简介
装饰器（Decorator）是一种语法结构，用来在定义时修改类（class）的行为。

在语法上，装饰器有如下几个特征。
（1）第一个字符（或者说前缀）是@，后面是一个表达式。
（2）@后面的表达式，必须是一个函数（或者执行后可以得到一个函数）。
（3）这个函数接受所修饰对象的一些相关值作为参数。
（4）这个函数要么不返回值，要么返回一个新对象取代所修饰的目标对象。


大家只要理解，类A在执行前会先执行装饰器simpleDecorator()，并且会向装饰器自动传入参数就可以了。
装饰器有多种形式，基本上只要在@符号后面添加表达式都是可以的。下面都是合法的装饰器。

相比使用子类改变父类，装饰器更加简洁优雅，缺点是不那么直观，功能也受到一些限制。所以，装饰器一般只用来为类添加某种特定行为。
function simpleDecorator(
    value:any,
    context:any
  ) {
    console.log(`hi, this is ${context.kind} ${context.name}`);
    return value;
  }
  
  @simpleDecorator
  class A {} // "hi, this is class A"

*/

/* 
二、装饰器的结构
type Decorator = (
  value: DecoratedValue,
  context: {
    kind: string;
    name: string | symbol;
    addInitializer?(initializer: () => void): void;
    static?: boolean;
    private?: boolean;
    access: {
      get?(): unknown;
      set?(value: unknown): void;
    };
  }
) => void | ReplacementValue;

上面代码中，Decorator是装饰器的类型定义。它是一个函数，使用时会接收到value和context两个参数。
value：所装饰的对象。
context：上下文对象，TypeScript 提供一个原生接口
ClassMethodDecoratorContext，描述这个对象。


context对象的属性，根据所装饰对象的不同而不同，其中只有两个属性（kind和name）是必有的，其他都是可选的。
（1）kind：字符串，表示所装饰对象的类型，可能取以下的值。
'class'
'method'
'getter'
'setter'
'field'
'accessor'
（2）name：字符串或者 Symbol 值，所装饰对象的名字，比如类名、属性名等。
（3）addInitializer()：函数，用来添加类的初始化逻辑。以前，这些逻辑通常放在构造函数里面，对方法进行初始化，
现在改成以函数形式传入addInitializer()方法。注意，addInitializer()没有返回值。
（4）private：布尔值，表示所装饰的对象是否为类的私有成员。
（5）static：布尔值，表示所装饰的对象是否为类的静态成员。
（6）access：一个对象，包含了某个值的 get 和 set 方法。

*/

/*
三、类装饰器 
type ClassDecorator = (
  value: Function,
  context: {
    kind: 'class';
    name: string | undefined;
    addInitializer(initializer: () => void): void;
  }
) => Function | void;
类装饰器接受两个参数：value（当前类本身）和context（上下文对象）。其中，context对象的kind属性固定为字符串class。
类装饰器一般用来对类进行操作，可以不返回任何值，请看下面的例子。

function Greeter(value, context) {
  if (context.kind === 'class') {
    value.prototype.greet = function () {
      console.log('你好');
    };
  }
}

@Greeter
class User {}

let u = new User();
u.greet(); // "你好"

上面示例中，类装饰器@Greeter在类User的原型对象上，添加了一个greet()方法，实例就可以直接使用该方法。

类装饰器可以返回一个函数，替代当前类的构造方法。
function countInstances(value:any, context:any) {
  let instanceCount = 0;

  const wrapper = function (...args:any[]) {
    instanceCount++;
    const instance = new value(...args);
    instance.count = instanceCount;
    return instance;
  } as unknown as typeof MyClass;

  wrapper.prototype = value.prototype; // A
  return wrapper;
}

@countInstances
class MyClass {}

const inst1 = new MyClass();
inst1 instanceof MyClass // true
inst1.count // 1

类装饰器也可以返回一个新的类，替代原来所装饰的类。

*/

/*
四、方法装饰器 
type ClassMethodDecorator = (
  value: Function,
  context: {
    kind: 'method';
    name: string | symbol;
    static: boolean;
    private: boolean;
    access: { get: () => unknown };
    addInitializer(initializer: () => void): void;
  }
) => Function | void;
根据上面的类型，方法装饰器是一个函数，接受两个参数：value和context。
参数value是方法本身，参数context是上下文对象，有以下属性。

    kind：值固定为字符串method，表示当前为方法装饰器。
    name：所装饰的方法名，类型为字符串或 Symbol 值。
    static：布尔值，表示是否为静态方法。该属性为只读属性。
    private：布尔值，表示是否为私有方法。该属性为只读属性。
    access：对象，包含了方法的存取器，但是只有get()方法用来取值，没有set()方法进行赋值。
    addInitializer()：为方法增加初始化函数。


方法装饰器会改写类的原始方法，实质等同于下面的操作。
function trace(decoratedMethod) {
  // ...
}
class C {
  @trace
  toString() {
    return 'C';
  }
}
// `@trace` 等同于
// C.prototype.toString = trace(C.prototype.toString);
   
如果方法装饰器返回一个新的函数，就会替代所装饰的原始函数。

*/


/*
五、属性装饰器
属性装饰器用来装饰定义在类顶部的属性（field）。它的类型描述如下。
type ClassFieldDecorator = (
  value: undefined,
  context: {
    kind: 'field';
    name: string | symbol;
    static: boolean;
    private: boolean;
    access: { get: () => unknown, set: (value: unknown) => void };
    addInitializer(initializer: () => void): void;
  }
) => (initialValue: unknown) => unknown | void;

装饰器的第一个参数value的类型是undefined，这意味着这个参数实际上没用的，装饰器不能从value获取所装饰属性的值。另外，
第二个参数context对象的kind属性的值为字符串field，而不是“property”或“attribute”，这一点是需要注意的。

属性装饰器要么不返回值，要么返回一个函数，该函数会自动执行，用来对所装饰属性进行初始化。
该函数的参数是所装饰属性的初始值，该函数的返回值是该属性的最终值。

*/ 

/*
六、getter 装饰器，setter 装饰器
getter 装饰器和 setter 装饰器，是分别针对类的取值器（getter）和存值器（setter）的装饰器。它们的类型描述如下。

getter 装饰器的上下文对象context的access属性，只包含get()方法；setter 装饰器的access属性，只包含set()方法。
这两个装饰器要么不返回值，要么返回一个函数，取代原来的取值器或存值器。
下面的例子是将取值器的结果，保存为一个属性，加快后面的读取。

*/


/*
七、accessor 装饰器
装饰器语法引入了一个新的属性修饰符accessor。

*/

/*

八、装饰器的执行顺序
装饰器的执行分为两个阶段。
（1）评估（evaluation）：计算@符号后面的表达式的值，得到的应该是函数。
（2）应用（application）：将评估装饰器后得到的函数，应用于所装饰对象。
也就是说，装饰器的执行顺序是，先评估所有装饰器表达式的值，再将其应用于当前类。
应用装饰器时，顺序依次为方法装饰器和属性装饰器，然后是类装饰器。


（1）装饰器评估：这一步计算装饰器的值，首先是类装饰器，然后是类内部的装饰器，按照它们出现的顺序。
（2）装饰器应用：实际执行装饰器函数，将它们与对应的方法和属性进行结合。



如果一个方法或属性有多个装饰器，则内层的装饰器先执行，外层的装饰器后执行。
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @bound
  @log
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
上面示例中，greet()有两个装饰器，内层的@log先执行，外层的@bound针对得到的结果再执行。

*/ 

function d(str:string) {
    console.log(`评估 @d(): ${str}`);
    return (
      value:any, context:any
    ) => console.log(`应用 @d(): ${str}`);
  }
  
  function log(str:string) {
    console.log(str);
    return str;
  }
  
  @d('类装饰器')
  class T {
    @d('静态属性装饰器')
    static staticField = log('静态属性值');
  
    @d('原型方法')
    [log('计算方法名')]() {}
  
    @d('实例属性')
    instanceField = log('实例属性值');
  
    @d('静态方法装饰器')
    static fn(){}
  }