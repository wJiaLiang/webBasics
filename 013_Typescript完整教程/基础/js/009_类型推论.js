/**
 * 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
 *
 * let x = 'seven';   // 变量x的类型被推断为字符串。 这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时。
 * x = 7;             // 报错
 *
 *
 *
 * 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
 */
var myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
