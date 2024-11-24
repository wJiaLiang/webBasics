/**
 * 在 TypeScript 中，数组类型有多种定义方式，比较灵活。
 * 
 * 
 */

//  最简单的方法是使用「类型 + 方括号」来表示数组： 第一了一 number类型的数组;
let fibonacci: number[] = [1, 1, 2, 3, 5];

/*
    数组的项中不允许出现其他的类型：      
    let fibonacci1: number[] = [1, '1', 2, 3, 5];
    数组的一些方法的参数也会根据数组在定义时约定的类型进行限制     
    fibonacci1.push('8');
 */

// 用接口表示数组
interface NumberArray {
    [index: number]: number;
}
let fibonacci2: NumberArray = [1, 1, 2, 3, 5];

// 类数组
// 省略....

// any 在数组中的应用   (用 any 表示数组中允许出现任意类型：)
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];





export default{}