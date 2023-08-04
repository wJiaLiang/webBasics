/*
    接口的作用；
    在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用
    接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些方法的实现细节，它只规定这批类里必须、
    提供某些方法，提供这些方法的类就可以满足实际需求，同时还保留了更加灵活的接口类型，包括属性。函数，索引和类等；
    定义标准
*/ 

// 同过函数实现 参数的约束
function printLabel(lableInfo:{lable:string}):void{
    console.log(lableInfo)
}
printLabel({lable:"666"}) //参数中包含 lable 属性;
// printLabel({name:"666"}) // 错误写法;


// 1.属性类型接口  接口： 行为和动作的规范，对批量方法进行约束;
interface FullName{
    firstName:string;
    lastName?:string; //表示可传可选
}

function prName(name:FullName):void{
    console.log(name.firstName+"----"+name.lastName);
}
let obj = {age:20,firstName:"11",lastName:"99"}
// prName(obj)
prName({
    firstName:"li",
    lastName:"4",
})

// 2。函数类型接口：对方法传入的 参数以及返回值 进行约束
interface encrypt{
    (key:string,value:string):string; //前面参数，后面返回值
}
// 通过接口，实现一个加密类型的函数
let md5:encrypt = function(key:string,value:string):string{
    return key+value;
}
console.log(md5('name','zs'))

// 3、可索引接口
// 对数组和 对象的约束
// 设置数组里的都是 字符串 
interface UserArr{
    [index:number]:string
}
var arr5:UserArr = ["aaa","bbb"];
console.log(arr5[0]);

// 对对象的约束
interface UserObj{
    [index:string]:string
}
var arr6:UserObj={name:"33",age:"88"}

// 4. 类类型接口：对类的约束 和 抽象类有类似;
interface Animal7{
    name:string;
    eat(name:string):void
}
// 通过 implements 关键字 实现 Animal7 这个接口
class dog7 implements Animal7{
    name:string
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log(this.name);
    }
}
let dd = new dog7("kg")
dd.eat();


// 5接口的继承;
interface Animal8{
    eat():void
}
interface Person8 extends Animal8{
    work():void
}
class pics8 implements Person8{
    name:string
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log(this.name+"eat方法");
    }
    work(){
        console.log(this.name + "work方法");
        
    }
}
let PP = new pics8("lisi")
PP.eat();

//  