/*
TypeScript 允许你覆盖它的推断，并且能以你任何你想要的方式分析它，这种机制被称为「类型断言」。
TypeScript 类型断言用来告诉编译器你比它更了解这个类型，并且它不应该再发出错误。


*/ 



interface Foo {
    bar: number;
    bas: string;
  }
  
  const foo = {} as Foo;
  foo.bar = 123;
  foo.bas = 'hello';



  

export default{}