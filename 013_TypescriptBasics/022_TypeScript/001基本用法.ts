

/**


一、 TypeScript 的编译
JavaScript 的运行环境（浏览器和 Node.js）不认识 TypeScript 代码。
所以，TypeScript 项目要想运行，必须先转为 JavaScript 代码，这个代码转换的过程就叫做“编译”（compile）。

TypeScript 官方没有做运行环境，只提供编译器。
编译时，会将类型声明和类型相关的代码全部删除，只留下能运行的 JavaScript 代码，并且不会改变 JavaScript 的运行结果。

因此，TypeScript 的类型检查只是编译时的类型检查，而不是运行时的类型检查。
一旦代码编译为 JavaScript，运行时就不再检查类型了。


二、值与类型
学习 TypeScript 需要分清楚“值”（value）和“类型”（type）。
“类型”是针对“值”的，可以视为是后者的一个元属性。每一个值在 TypeScript 里面都是有类型的。比如，3是一个值，它的类型是number。

TypeScript 代码只涉及类型，不涉及值。所有跟“值”相关的处理，都由 JavaScript 完成。


三、ts-node 模块
ts-node 是一个命令行工具，可以将 TypeScript 代码直接运行，无需编译。
npm install -g ts-node
ts-node script.ts

如果执行 ts-node 命令不带有任何参数，它会提供一个 TypeScript 的命令行 REPL 运行环境，
你可以在这个环境中输入 TypeScript 代码，逐行执行。

要退出这个 REPL 环境，可以按下 Ctrl + d，或者输入.exit。


// npm install -g typescript
// npm install -g ts-node

*/



export {}