/*
枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。

枚举使用 enum 关键字来定义：
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

*/ 

// 1. 数字枚举
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0);     // true
console.log(Days["Mon"] === 1);     // true
console.log(Days["Tue"] === 2);     // true
console.log(Days["Sat"] === 6);     // true

// 手动赋值
enum Days2 {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
// 上面的例子中，未手动赋值的枚举项会接着上一个枚举项递增。
// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1：
console.log(Days2["Mon"] === 1); // true
console.log(Days2["Tue"] === 2); // true
console.log(Days2["Sat"] === 6); // true


// 2. 字符串枚举
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
let f:Direction;
console.log(Direction.Up)        // Up
console.log(Direction.Down)      // 
console.log(Direction.Left)      // 
console.log(Direction.Right)     //



// 3. 异构枚举（Heterogeneous enums）
// 从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做：
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}


// 4. 常数项和计算所得项

// enum Color {Red, Green, Blue = "blue".length};
// enum Color {Red = "red".length, Green, Blue};  // 计算所得项后面如果是未手动赋值项目 则报错


// 5. 当满足以下条件时，枚举成员被当作是常数：

/*
不具有初始化函数并且之前的枚举成员是常数。在这种情况下，当前枚举成员的值为上一个枚举成员的值加 1。但第一个枚举元素是个例外。如果它没有初始化方法，那么它的初始值为 0。
枚举成员使用常数枚举表达式初始化。常数枚举表达式是 TypeScript 表达式的子集，它可以在编译阶段求值。当一个表达式满足下面条件之一时，它就是一个常数枚举表达式：
        数字字面量

*/ 



// 6. 常数枚举
/*
常数枚举是使用 const enum 定义的枚举类型：
常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。

*/ 

// 7. 外部枚举
/*
之前提到过，declare 定义的类型只会用于编译时的检查，编译结果中会被删除。


*/ 
