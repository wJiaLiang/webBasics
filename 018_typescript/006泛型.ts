/*
    泛型: 软件工程中，我们不仅要创建一致性的良好api ,同时也傲考虑可重用性，组件不仅能够支持当前的数据类型 
          同时也能够支持未来的数据类型，这在创建大型的系统时为你提供了十分灵活的功能

    通俗理解：  泛型就是解决  类，接口，方法的复用性。以及对不特定数据类型的支持;
    可以支持不特定的数据类型

*/ 

// 1.泛型函数
// T 表示泛型，具体什么类型是调用方法的时候决定的
function getData<T>(value:T):T{
    return value
}
getData<number>(666) //去前面的number 表示传入的参数必须是number 类型

// 2. 泛型 类
class MinClass<T>{
    list:T[] = []
    add(value:T){
        this.list.push(value)
    }
    min():T{
        let minNum = this.list[0];
        for(let i = 0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum = this.list[i]
            }
        }
        return minNum;
    }
}
// 实例化这个泛型类，并且制定了类的T代表的类型是 number类型;
var m1 = new MinClass<number>()
m1.add(23);
m1.add(66);
m1.add(2);
console.log(m1.min()); //2  

var m2 = new MinClass<string>();
m2.add('b')
m2.add('f')
m2.add('a')
m2.add('c');
console.log(m2.min()) //a

// 3. 泛型 接口

// 函数类型的接口
interface ConfigFn{
    (value1:string,value2:string):string
}
var setData:ConfigFn = function(value1:string,value2:string):string{
    return value1+ value2;
}
console.log(setData("lisi","zs"));


// 泛型接口 接口类型是在调用的时候动态传入的
interface  ConfigFn{
    <T>(value1:T,value2:T):T
}
let getdata1:ConfigFn = function<T>(value1:T,value2:T):T{
    console.log(value1,value2);
    return value1
}
getdata1<string>('zs','ls')


// 第二种定义泛型接口的 方法
interface ConfigFn2<T>{
    (value:T):T
}
function getdata2<T>(value:T):T{
    return value
}
var mygetData:ConfigFn2<string>=getdata2;
mygetData('22');
// mygetData(23); 错误写法，上面定义了为 string 类型；



// =================================================================================

// 4. 把类当做参数的泛型类
// 泛型：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持(类型校验)
/*
    定义一个User的类这个类的作用是映射数据库的字段
    然后定义一个MysqlDB的一个类用于操作数据库 ,然后把User类作为参数传入到MysqlDB中

*/ 
//  把类作为参数来约束数据传入的类型;
class User{
    username:string|undefined;
    password:string|undefined
}
class MysqlDB{
    add(users:User):boolean{
        console.log(users);
        return true
    }
}
var u = new User();
u.username = "zs";
u.password = "123456"
var db = new MysqlDB();
db.add(u)

// 通过泛型实现
class User2{
    username:string|undefined;
    password:string|undefined
}
class MysqlDB2<T>{
    add(users:T):boolean{
        console.log(users);
        return true
    }
}
var u2 = new User2();
u2.username = "ls";
u2.password = '123';
var db2 = new MysqlDB2<User2>()
db2.add(u2);


// 另一个例子 定义一个 ArticleCate 类 和 数据库进行映射;    
class ArticleCate{
    title:string|undefined;
    desc:string|undefined;
    status:number|undefined;
    // 设定参数类型
    constructor(params:{
        title:string|undefined;
        desc:string|undefined;
        status?:number|undefined;
    }){
        this.title = this.title;
        this.desc = this.desc;
        this.status = this.status;
    }
}
// 实例化 传入参据
var a1 = new ArticleCate({
    title:"test11",
    desc:"aaaaaa",
    status:1
});
let  db3 = new MysqlDB2<ArticleCate>();
db3.add(a1);