
## 一、简介
declare 关键字用来告诉编译器，某个类型是存在的，可以在当前文件中使用。

它的主要作用，就是让当前文件可以使用其他文件声明的类型。
举例来说，自己的脚本使用外部库定义的函数，编译器会因为不知道外部函数的类型定义而报错，
这时就可以在自己的脚本里面使用declare关键字，告诉编译器外部函数的类型。
这样的话，编译单个脚本就不会因为使用了外部类型而报错。

declare 关键字可以描述以下类型。
    变量（const、let、var 命令声明）
    type 或者 interface 命令声明的类型
    class
    enum
    函数（function）
    模块（module）
    命名空间（namespace）

declare 关键字的重要特点是，它只是通知编译器某个类型是存在的，不用给出具体实现。
比如，只描述函数的类型，不给出函数的实现，如果不使用declare，这是做不到的。

declare 只能用来描述已经存在的变量和数据结构，不能用来声明新的变量和数据结构。
另外，所有 declare 语句都不会出现在编译后的文件里面。



## 二、declare variable
declare let x:number;
x = 1;

如果 declare 关键字没有给出变量的具体类型，那么变量类型就是any。


declare let x;
x = 1;

下面的例子是脚本使用浏览器全局对象document。
declare var document;
document.title = 'Hello';

注意，declare 关键字只用来给出类型描述，是纯的类型代码，不允许设置变量的初始值，即不能涉及值。



## 三、declare function
declare 关键字可以给出外部函数的类型描述。
declare function sayHello(
  name:string
):void;
sayHello('张三');
declare 命令给出了sayHello()的类型描述，表示这个函数是由外部文件定义的，因此这里可以直接使用该函数。
这种单独的函数类型声明语句，只能用于declare命令后面。一方面，TypeScript 不支持单独的函数类型声明语句；
另一方面，declare 关键字后面也不能带有函数的具体实现。


## 四、declare class
declare class Animal {
  constructor(name:string);
  eat():void;
  sleep():void;
}
同样的，declare 后面不能给出 Class 的具体实现或初始值。


## 五、declare module，declare namespace
如果想把变量、函数、类组织在一起，可以将 declare 与 module 或 namespace 一起使用。
declare module AnimalLib {
  class Animal {
    constructor(name:string);
    eat(): void;
    sleep(): void;
  }

  type Animals = 'Fish' | 'Dog';
}
declare module 和 declare namespace 里面，加不加 export 关键字都可以。

declare module 'io' {
  export function readFile(filename:string):string;
}
某些第三方模块，原始作者没有提供接口类型，这时可以在自己的脚本顶部加上下面一行命令。
declare module "模块名";
// 例子
declare module "hot-new-module";

加上上面的命令以后，外部模块即使没有类型声明，也可以通过编译。但是，从该模块输入的所有接口都将为any类型。

declare module 描述的模块名可以使用通配符。
declare module 'my-plugin-*' {
  interface PluginOptions {
    enabled: boolean;
    priority: number;
  }

  function initialize(options: PluginOptions): void;
  export = initialize;
}
上面示例中，模块名my-plugin-*表示适配所有以my-plugin-开头的模块名（比如my-plugin-logger）。








六、declare global

七、declare enum





export {}