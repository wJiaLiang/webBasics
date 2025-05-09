/*
    一、声明文件

    TypeScript 作为 JavaScript 的超集，在开发过程中不可避免要引用其他第三方的 JavaScript 的库。
    虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能。为了解决这个问题，
    需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。
    通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。


    当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。这是因为前端第三方库大多都是非 TypeScript 库，
    基本上都是使用 JS 编写的，在 TS 中使用非 TS 编写的第三方库，需要有个 xx.d.ts 声明文件。

    声明文件一般来讲不需要自己写，有两种情况来得到声明文件：

    1. npm 下载第三方包的时候，node_modules 里面一般自带了声明文件 index.d.ts 
    2. npm 如果第三方包没有提供TS 的声明文件,可以用 https://microsoft.github.io/TypeSearch/ 网址进行搜索 然后用npm 安装;


    其实就是 JavaScript 写的东西，在 Typescript 中无法直接使用，xxx.d.ts 就作为 JS 和 TS 之间，沟通的桥梁。
    一般来讲声明文件就是对 Javascript 进行类型美化。


    通常我们会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件
    一般来说，ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。
    所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了。

    例子：
    // jq.d.ts
    declare var jQuery: (selector: string) => any;

    // src/index.ts
    jQuery('#foo');   这样 ts文件才认识jq;

*/ 


/*
    二、声明文件类型
    在不同的场景下，我们引入第三方库的方式是不同的，所以声明文件的内容和使用方式会有所区别。

    ​1. 全局变量：                           通过 <script> 标签引入第三方库，注入全局变量
​    2. npm 包：                            通过 import foo from 'foo' 导入，符合 ES6 模块规范
​    3. UMD 库：                            既可以通过 <script> 标签引入，又可以通过 import 导入
​    4. 直接扩展全局变量：                   通过 <script> 标签引入后，改变一个全局变量的结构
​    5. 在 npm 包或 UMD 库中扩展全局变量：    引用 npm 包或 UMD 库后，改变一个全局变量的结构
​    6. 模块插件：                           通过 <script> 或 import 导入后，改变另一个模块的结构


    全局变量的声明文件主要有以下几种语法：
    
        declare var 声明全局的变量
        declare function 声明全局的方法
        declare class 声明全局的类
        declare enum 声明全局的枚举类型
        declare namespace 声明（含有子属性的）全局对象 它用来表示全局变量是一个对象，包含很多子属性。
        interface 和 type 声明全局类型

    npm 包
        npm 包创建声明文件之前，要看看声明文件是否已经存在了;
        判断依据：package.json 中有 types 字段，或者有一个 index.d.ts 声明文件
    



*/ 




export default{}