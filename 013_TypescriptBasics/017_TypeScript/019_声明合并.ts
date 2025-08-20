/*

如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：


*/ 

// 1. 接口的合并
interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}
// 上面两个 等同于下面     注意，合并的属性的类型必须是唯一的   接口中方法的合并，与函数的合并一样;
interface Alarm {
    price: number;
    weight: number;
}


// 2. 类的合并 
/*
类的合并与接口的合并规则一致。

*/ 



export default{}