/*
    模块是在其自身的作用域里执行，并不是在全局作用域，这意味着定义在模块里面的变量、函数和类等在模块外部是不可见的，
    除非明确地使用 export 导出它们。

    类似地，我们必须通过 import 导入其他模块导出的变量、函数、类等。

    两个模块之间的关系是通过在文件级别上使用 import 和 export 建立的。

    模块使用模块加载器去导入其它的模块。 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。


    TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。
    相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）

*/ 


// 一、 导出声明
/*
任何声明（比如变量，函数，类，类型别名或接口）都能够通过添加export关键字来导出。

export interface StringValidator {
    isAcceptable(s: string): boolean;
}

导出语句很便利，因为我们可能需要对导出的部分重命名
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator as mainValidator };

*/ 


// 导入

/*
    模块的导入操作与导出一样简单。 可以使用以下 import形式之一来导入其它模块中的导出内容。

    import { ZipCodeValidator } from "./ZipCodeValidator";

    1. 可以对导入内容重命名
    import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";

    2. 将整个模块导入到一个变量，并通过它来访问模块的导出部分
    import * as validator from "./ZipCodeValidator";


    3. 具有副作用的导入模块
    一些模块会设置一些全局状态供其它模块使用。 这些模块可能没有任何的导出或用户根本就不关注它的导出。 使用下面的方法来导入这类模块：
    import "./my-module.js";

    4. 默认导出
    每个模块都可以有一个default导出。 默认导出使用 default关键字标记；并且一个模块只能够有一个default导出。 
    需要使用一种特殊的导入形式来导入 default导出。
    export default $;
    import $ from "JQuery";


    5. 类和函数声明可以直接被标记为默认导出。 标记为默认导出的类和函数的名字是可以省略的。
    export default class ZipCodeValidator {
        static numberRegexp = /^[0-9]+$/;
    }
    import validator from "./ZipCodeValidator";
    或者
    export default function (s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
    import validate from "./StaticZipCodeValidator";


    6. default导出也可以是一个值
    export default "123";
    import num from "./OneTwoThree";


    7. 为了支持CommonJS和AMD的exports, TypeScript提供了export =语法。
        export =语法定义一个模块的导出对象。 这里的对象一词指的是类，接口，命名空间，函数或枚举。
        若使用export =导出一个模块，则必须使用TypeScript的特定语法import module = require("module")来导入此模块。
    let numberRegexp = /^[0-9]+$/;
    class ZipCodeValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    export = ZipCodeValidator;

    import zip = require("./ZipCodeValidator");


*/ 



//生成模块代码

/*
    根据编译时指定的模块目标参数，编译器会生成相应的供Node.js (CommonJS)，Require.js (AMD)，UMD，SystemJS或ECMAScript 2015 native modules (ES6)模块加载系统使用的代码。
    对于Node.js来说，使用--module commonjs； 
    对于Require.js来说，使用--module amd。

    tsc --module commonjs Test.ts

    编译完成后，每个模块会生成一个单独的.js文件;

*/ 


