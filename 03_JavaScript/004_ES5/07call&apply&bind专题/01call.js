/*
函数.call(thisArg, arg1, arg2, ...)
第一个参数：指定函数内部的 this
后面参数：传给函数的实际参数


*/

// 用法 1：借用其他对象的方法（最常见）
function demo() {
  // arguments 是一个类数组对象（有 length，但没有数组方法）
  console.log(arguments); // { '0': 'a', '1': 'b', '2': 'c', length: 3 }

  // 借用 Array 的 slice 方法，把它变成真正的数组
  const realArray = Array.prototype.slice.call(arguments);
  console.log(realArray); // ['a', 'b', 'c'] —— 现在可以调用 push、map 等方法了！
}

demo("a", "b", "c");


// 2. 改变 this 指向
const obj = { name: "obj0" };
function showName() {
  console.log(this.name);
}
const obj1 = { name: "obj1" };
showName.call(obj1); // obj1


// 3 模拟“子类继承父类属性”
// 父类构造函数
function Animal(name) {
  this.name = name;
  this.species = "动物";
}

// 子类构造函数
function Dog(name, breed) {
  // 用 call 调用父类构造函数，把 this 指向当前 Dog 实例
  Animal.call(this, name);
  this.breed = breed;      // 狗的品种
}

const myDog = new Dog("旺财", "金毛");
console.log(myDog.name);   // "旺财"


// 二、 apply：和 call 一样，但参数打包成数组！
// 函数.apply(要借给的对象, [参数1, 参数2, ...])
function demo2(a, b, c) {
  console.log(a, b, c);
}
demo2.apply(null, ["a", "b", "c"]); // a b c



// 三、3 bind：先借好，以后再用！（不立即执行）
// const 新函数 = 函数.bind(要借给的对象, 参数1, 参数2, ...);
function speak(){
    console.log(this.name);
}
const xiaoming = {name: '小明'};
const speakXiaoming = speak.bind(xiaoming);
speakXiaoming(); // 小明
settimeout(speakXiaoming, 3000); // 1秒后输出 小明