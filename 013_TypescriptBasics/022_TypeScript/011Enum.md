
## Enum 是 TypeScript 新增的一种数据结构和类型，中文译为“枚举”。

### 一、实际开发中，经常需要定义一组相关的常量。

上面示例中，常量RED、GREEN、BLUE是相关的，意为变量color的三个可能的取值。它们具体等于什么值其实并不重要，只要不相等就可以了。
TypeScript 就设计了 Enum 结构，用来将相关常量放在一个容器里面，方便使用。

enum Color {
  Red,     // 0
  Green,   // 1
  Blue     // 2
}

Enum 结构的特别之处在于，它既是一种类型，也是一个值。绝大多数 TypeScript 语法都是类型语法，
编译后会全部去除，但是 Enum 结构是一个值，编译后会变成 JavaScript 对象，留在代码中。


由于 TypeScript 的定位是 JavaScript 语言的类型增强，所以官方建议谨慎使用 Enum 结构，
因为它不仅仅是类型，还会为编译后的代码加入一个对象。

### 二、Enum 成员的值
Enum 成员默认不必赋值，系统会从零开始逐一递增，按照顺序为每个成员赋值，比如0、1、2……
但是，也可以为 Enum 成员显式赋值。
// 等同于
enum Color {
  Red = 0,
  Green = 1,
  Blue = 2
}
成员的值可以是任意数值，但不能是大整数（Bigint）。


### 三、同名 Enum 的合并
```ts
enum Foo {
  A,
}
enum Foo {
  B = 1,
}
enum Foo {
  C = 2,
}
// 等同于
enum Foo {
  A,
  B = 1，
  C = 2
}
```

### 四、字符串 Enum 
Enum 成员的值除了设为数值，还可以设为字符串。也就是说，Enum 也可以用作一组相关字符串的集合。
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
除了数值和字符串，Enum 成员不允许使用其他值（比如 Symbol 值）。

### 五、keyof 运算符
keyof 运算符可以取出 Enum 结构的所有成员名，作为联合类型返回。
enum MyEnum {
  A = 'a',
  B = 'b'
}
// 'A'|'B'
type Foo = keyof typeof MyEnum;

### 五、反向映射
数值 Enum 存在反向映射，即可以通过成员值获得成员名。
enum Weekdays {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
console.log(Weekdays[3]) // Wednesday




export {}