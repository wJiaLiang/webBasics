// 定义一个类
class Person{
    // 属性 
    public name:string;
    // 构造函数 实例化类的时候执行的方法;
    constructor(n:string){
        this.name = n;
    }
    run():void{
        alert(this.name)
    }
    getName():string{
        return this.name;
    }
    setName(name:string):string{
        return this.name = name;
    }
}
let p = new Person("zs");
p.run();
p.setName("ls");
console.log(p.getName());


// 2.实现继承
// 使用 extends  super 关键字
class Animal extends Person{
    constructor(name:string){
        super(name);// 初始化父类的构造函数
    }
    // 现在子类找,没有才到父类中找
    run():void{
        console.log("子类的和父类相同的run 方法");
    }
}
let A = new Animal("ww");
console.log(A.getName());
A.run();

// 3.类总的修饰符
/*
 定义属性和方法的时候的 3种修饰符 
 public,    公有  在类里面  子类 类外面都可以访问  没写 默认 是public
 protected, 保护类型 在类的里面, 子类里面可以访问，在类的外部没法访问
 private    私有的，在类的里面可以访问，子类，类的外部都没有办法访问

*/ 
class dog extends Animal{
    constructor(name:string){
        super(name)
    }
    private work():void{
        console.log(this.name+"在工作");
        
    }
    test():void{
        this.work();
    }
}
var d = new dog("pic");
d.test();


/*
4.
    静态属性，静态方法  
    抽象类型，继承多太

*/

// 静态属性和静态方法; 通过类名直接调用;
// 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用
class Person2{
    public name:string
    public age:number = 30
    static sex:number = 1;
    constructor(name:string){
        this.name = name;
    }
    run(){
        console.log(this.name+"run 方法")
    }
    work(){
        // 静态方法和属性 都无法在内部进行调用
        // console.log(this.sex);
        // this.prints();
    }
    // 通过 static 关键字定义一个静态方法;
    static prints(){
        console.log(this.name+"静态方法")
    }
}
var Per = new Person2("zl");
Person2.prints();


// 多太
/*
    多太父类定义一个方法不去实现，让继承他的子类去实现，每个子类都要不同的实现
    多太也是继承的一种
*/ 
class Animal5{
    name:string
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log("this is eat fun");
    }
}
class Dog5 extends Animal5{
    constructor(name:string){
        super(name)
    }
    eat(){
        console.log("this is dog fun" + this.name);
        return this.name + "喝"
        
    }
}
class cat5 extends Animal5{
    constructor(name:string){
        super(name)
    }
    eat(){
        console.log("this is cat fun"+ this.name);
        return this.name + "吃"
    }
    work(){
        console.log(this.name);
    }
}
let Pcat5 = new cat5("kg")
Pcat5.eat()
Pcat5.work()

/*
    抽象类：
    他是一个提供其他类继承的基类，不能直接被实例化
    用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现（子类中实现）
    抽象方法只能放在抽象类里面
    抽象方法和抽象类用来定义标准   ,下面例子： Animal6 这个类要求他的子类都必须包含 eat这个方法;

*/ 

abstract class Animal6{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract eat():any;
}
class Dog6 extends Animal6{
    constructor(name:any){
        super(name)
    }
    eat() {
        console.log(this.name + "吃")
    }
}
var Pdog6 = new Dog6("狗")
Pdog6.eat();