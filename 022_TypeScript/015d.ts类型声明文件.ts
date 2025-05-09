/*
一、简介

单独使用的模块，一般会同时提供一个单独的类型声明文件（declaration file），
把本模块的外部接口的所有类型都写在这个文件里面，便于模块使用者了解接口，也便于编译器检查使用者的用法是否正确。

类型声明文件里面只有类型代码，没有具体的代码实现。它的文件名一般为[模块名].d.ts的形式，其中的d表示 declaration（声明）。

下面是一个如何使用类型声明文件的简单例子。有一个类型声明文件types.d.ts。
// types.d.ts
export interface Character {
  catchphrase?: string;
  name: string;
}

然后，就可以在 TypeScript 脚本里面导入该文件声明的类型。
// index.ts
import { Character } from "./types";

export const character:Character = {
  catchphrase: "Yee-haw!",
  name: "Sandy Cheeks",
};


类型声明文件也可以包括在项目的 tsconfig.json 文件里面，
这样的话，编译器打包项目时，会自动将类型声明文件加入编译，而不必在每个脚本里面加载类型声明文件。
比如，moment 模块的类型声明文件是moment.d.ts，使用 moment 模块的项目可以将其加入项目的 tsconfig.json 文件。

// tsconfig.json
{
  "compilerOptions": {},
  "files": [
    "src/index.ts",
    "typings/moment.d.ts"
  ]
}



*/ 


/*
二、类型声明文件的来源
类型声明文件主要有以下三种来源。


1、TypeScript 编译器自动生成。

只要使用编译选项declaration，编译器就会在编译时自动生成单独的类型声明文件。
下面是在tsconfig.json文件里面，打开这个选项。
{
  "compilerOptions": {
    "declaration": true
  }
}
你也可以在命令行打开这个选项。
tsc --declaration

2、TypeScript 内置类型文件。
安装 TypeScript 语言时，会同时安装一些内置的类型声明文件，主要是内置的全局对象（JavaScript 语言接口和运行环境 API）的类型声明。
这些内置声明文件位于 TypeScript 语言安装目录的lib文件夹内，数量大概有几十个，下面是其中一些主要文件。
lib.d.ts
lib.dom.d.ts
lib.es2015.d.ts
.... 等等

TypeScript 编译器会自动根据编译目标target的值，加载对应的内置声明文件，所以不需要特别的配置。
但是，可以使用编译选项lib，指定加载哪些内置声明文件。
{
  "compilerOptions": {
    "lib": ["dom", "es2021"]
  }
}
上面示例中，lib选项指定加载dom和es2021这两个内置类型声明文件。



3、外部模块的类型声明文件，需要自己安装。
如果项目中使用了外部的某个第三方代码库，那么就需要这个库的类型声明文件。
这时又分成三种情况。
（1）这个库自带了类型声明文件。
        一般来说，如果这个库的源码包含了[vendor].d.ts文件，那么就自带了类型声明文件。其中的vendor表示这个库的名字，
        比如moment这个库就自带moment.d.ts。使用这个库可能需要单独加载它的类型声明文件。


（2）这个库没有自带，但是可以找到社区制作的类型声明文件。


（3）找不到类型声明文件，需要自己写。
    有时实在没有第三方库的类型声明文件，又很难完整给出该库的类型描述，这时你可以告诉 TypeScript 相关对象的类型是any。
    比如，使用 jQuery 的脚本可以写成下面这样。

declare var $:any
// 或者
declare type JQuery = any;
declare var $:JQuery;

也可以采用下面的写法，将整个外部模块的类型设为any。
declare module '模块名';


*/ 


/*
三、declare 关键字
类型声明文件只包含类型描述，不包含具体实现，所以非常适合使用 declare 语句来描述类型。

类型声明文件里面，变量的类型描述必须使用declare命令，否则会报错，因为变量声明语句是值相关代码。
declare let foo:string;

interface 类型有没有declare都可以，因为 interface 是完全的类型代码。

interface Foo {} // 正确
declare interface Foo {} // 正确




*/ 


/*
四、模块发布

当前模块如果包含自己的类型声明文件，可以在 package.json 文件里面添加一个types字段或typings字段，指明类型声明文件的位置。
上面示例中，types字段给出了类型声明文件的位置。
注意，如果类型声明文件名为index.d.ts，且在项目的根目录中，那就不需要在package.json里面注明了。




*/ 


/*
五、三斜杆命令
如果类型声明文件的内容非常多，可以拆分成多个文件，然后入口文件使用三斜杠命令，加载其他拆分后的文件。
三斜杠命令（///）是一个 TypeScript 编译器命令，用来指定编译器行为。它只能用在文件的头部，如果用在其他地方，会被当作普通的注释

除了拆分类型声明文件，三斜杠命令也可以用于普通脚本加载类型声明文件。

三斜杠命令主要包含三个参数，代表三种不同的命令。
path
types
lib

1、path
/// <reference path="" />是最常见的三斜杠命令，告诉编译器在编译时需要包括的文件，常用来声明当前脚本依赖的类型文件。

/// <reference path="./lib.ts" />
let count = add(1, 2);

上面示例表示，当前脚本依赖于./lib.ts，里面是add()的定义。编译当前脚本时，还会同时编译./lib.ts。
编译产物会有两个 JS 文件，一个当前脚本，另一个就是./lib.js。

下面的例子是当前脚本依赖于 Node.js 类型声明文件。
/// <reference path="node.d.ts"/>
import * as URL from "url";
let myUrl = URL.parse("https://www.typescriptlang.org");

编译器会在预处理阶段，找出所有三斜杠引用的文件，将其添加到编译列表中，然后一起编译。
path参数指定了所引入文件的路径。如果该路径是一个相对路径，则基于当前脚本的路径进行计算。

2、/// <reference types="" />
types 参数用来告诉编译器当前脚本依赖某个 DefinitelyTyped 类型库，通常安装在node_modules/@types目录。
types 参数的值是类型库的名称，也就是安装到node_modules/@types目录中的子目录的名字。

3、/// <reference lib="" />
/// <reference lib="..." /> 命令允许脚本文件显式包含内置 lib 库，等同于在tsconfig.json文件里面使用lib属性指定 lib 库。
安装 TypeScript 软件包时，会同时安装一些内置的类型声明文件，即内置的 lib 库。这些库文件位于 TypeScript 安装目录的lib文件夹中

而/// <reference lib="" />里面的lib属性的值就是库文件名的description部分，比如lib="es2015"就表示加载库文件lib.es2015.d.ts。





*/ 


export {}