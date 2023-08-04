/*
    003类.ts 已经分析了例子

*/ 

// 当构造函数修饰为 protected 时，该类只允许被继承：
class Animal23 {
    public name;
    protected constructor(name: any) {
      this.name = name;
    }
  }
  class Cat extends Animal23 {
    constructor(name: string) {
      super(name);
    }
  }
  let aAnimal = new Animal23('Jack');
  