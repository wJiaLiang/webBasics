/**
 * 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型
 * 
 * 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 
 * 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 
 * 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
 * 
 */

//  类型断言有两种形式。 其一是“尖括号”语法：

let someValue: any = "this is a string";
let someString:any = "thisIsAString";

let strLength: number = (<string> someValue).length;     // 16 空格也算
let strLength1:number = (<string> someString).length;   // 13
console.log(strLength,strLength1);

// 另一个为as语法：

let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;
console.log(strLength2)    // 16

// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。


export default{}