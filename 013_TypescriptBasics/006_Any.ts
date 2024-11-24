// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：

/*
    1. 但如果是 any 类型，则允许被赋值为任意类型。

    2. 在任意值上访问任何属性都是允许的, 也允许调用任何方法

    3. 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

*/
let some;
some = 'abc';
some = 123;
console.log(some)       // 123

let some2:any;
some2 = 456;
some2 = "this is some2";
console.log(some2)      // this is some2


let anyThing: any = {};
anyThing.myName = 'hello';
console.log(anyThing.myName);    // hello
console.log(anyThing.myName.firstName);    //undefined







export default{}