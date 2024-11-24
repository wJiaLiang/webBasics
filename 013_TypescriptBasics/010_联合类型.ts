/**
 * 联合类型（Union Types）表示取值可以为多种类型中的一种。
 * 联合类型使用 | 分隔每个类型。
 * 
 */

let myNumber: string | number;  // 可以 赋值 字符串类型 和 数字类型； 但是不能是其他类型。

//

function getLength(something: string | number): number {
     if(typeof something === "string"){
        return 123
     }else{
         return something
     }
}
console.log(getLength("45"));





export default{}