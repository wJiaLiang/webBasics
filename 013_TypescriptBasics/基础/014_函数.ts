/**
  
  函数是JavaScript应用程序的基础。 它帮助你实现抽象层，模拟类，信息隐藏和模块。 
  在TypeScript里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义 行为的地方。 
  TypeScript为JavaScript函数添加了额外的功能，让我们可以更容易地使用。

  TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。

    1.函数声明
    2.函数表达式
    3.用接口定义函数的形状
    4.可选参数
    5.参数默认值
    6.剩余参数
    7.重载


 */

 
// 1.函数声明
/**
 * 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到
 * 注意，输入多余的（或者少于要求的）参数，是不被允许的：
 *
 */
function sum(x: number, y: number): number {
    return x + y;
}
// sum(1, 2, 3);  只能有两个参数，多或者少都会错误;
// sum(1,);



// 2.函数表达式

let mySum = function (x: number, y: number): number {
    return x + y;
};

/**
上面的代码,这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，
而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样：

注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
 */

let myAdd: (x: number, y: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};


// 3. 用接口定义函数的形状

/**
    我们也可以使用接口的方式来定义一个函数需要符合的形状：
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    let mySearch: SearchFunc;
    mySearch = function(source: string, subString: string) {
        return source.search(subString) !== -1;
    }
    采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，
    可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。
 */


// 4. 可选参数
/*
前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？
与接口中的可选属性类似，我们用 ? 表示可选的参数 可选参数必须接在必需参数后面。

*/
function myfunc(name: string, age?: number) {
    console.log(name, age);
}

// 5. 参数默认值
/*
TypeScript 会将添加了默认值的参数识别为可选参数：
此时就不受「可选参数必须接在必需参数后面」的限制了

*/
function buildName(firstName: string = "Tom", lastName: string) {
    return firstName + " " + lastName;
}
let tomcat = buildName("Tom", "Cat");
let cat = buildName(undefined, "Cat");

// 6. 剩余参数
/*
ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：
剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个
编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。
*/
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// 7. 重载
/*
重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。

*/ 
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}