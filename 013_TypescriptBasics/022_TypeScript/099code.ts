
//例子1  元组 不限制长度的数组;
let a:[string,number];
a = ['hello',42];
a.push('world');
console.log(a); //[ 'hello', 42, 'world' ]


//例子2  类实现接口,实现约束
interface Country {
  name:string;
  capital:string;
}
class MyCountry implements Country {
  name = '中国'; // 没有写类型默认是 any 类型
  capital = '北京';
  a:number= 0;
}
console.log(new MyCountry().name); // 中国

//例子3  接口对象索引签名
interface A {
  [prop: string]: number;
}
let Aa: A = {'hello': 123, 'world': 456};
console.log(Aa); //{ hello: 123, world: 456 }


//例子4 interface 继承
interface Shape {
  name: string;
}
interface Circle extends Shape {
  radius: number;
}
let Circle: Circle = {name: 'Circle', radius: 1};



// 例子5  interface 继承 class interface 还可以继承 class，即继承该类的所有成员。
class ff {
  x:string = '';

  y():boolean {
    return true;
  }
}

interface ff1 extends ff {
  z: number
}