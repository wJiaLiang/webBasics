// 布尔类型
var flag:boolean = true;

// 数字类型
var a:number = 12;
var b:number = 12.56;
console.log(a);
console.log(b);

// 字符串
var  str:string = "test ts"

// 数组:
// 第一种定义数组 
let arr:number[]=[1,2,3];
let strarr:string[]= ["a","aaff"];

// 第二种定义数组
let arr1:Array<number> = [33,5566,3,23223];


// 元组类型 tuple 属于数组的一种
/*
如果存储的元素数据类型不同，则需要使用元组。
元组中允许存储不同类型的元素，元组可以作为参数传递给函数。
其他操作类似 数组 如 push pop 等方法;
*/
let arr2:[string,number,boolean] = ["ts",333,true];
console.log(arr2); //['ts', 333, true]


// 枚举类型
/*
    考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示他的每一个值,
    这种方法称为枚举方法，用这种方法定义的类型称为枚举类型
    emum 枚举名{
        标识符[=整型常数],
        标识符[=整型常数],
        ....
    }
    falg    1 表示成功，  -1 表示失败
*/ 

enum Falg{
    success=1,error=-1 
}
var f:Falg= Falg.success// 当看到 success 就知道 表示成功的含义
console.log(f);// 1;

enum Color {Red, Green, Blue = "blue".length};
var f1:Color = Color.Green
console.log(f1); //1  如果没有赋值，就是默认的索引
var f2:Color = Color.Blue;
console.log(f2);// 4;


// 任意类型 any; 用于获取dom元素
var n:any = 123;
n= "aa"
console.log(n);
var box:any = document.getElementById("box");
box.style.color = "red";

// null和undefined，  其他（never）类型的子类型
var c:undefined|number; // 可能是 number类型或者 undefined类型
console.log(c);// 没有赋值 undefined
c = 12;
console.log(c); //12
//  一个变量可以设置多个类型;
var c2:number|undefined|null;
console.log(c2);//undefined
c2=null;
console.log(c2);//null



// void类型：ts中的void表示没有任何类型，一般用于定义方法的时候没有返回值
// 方法没有 任何 数据类型返回
function run():void{
    console.log("run .... run...");
    
}



// never 类型：是其他类型 （包括 null 和 undefined）的子类型，表示从不出现的值
// 声明 never 的变量只能被never类型所赋值;
// 一个总是会抛出错误的函数（如：function foo() { throw new Error('Not Implemented') }，foo 的返回类型是 never）；
var c4:undefined;
c4=undefined;

var c5:null;
c5=null;


export default{}