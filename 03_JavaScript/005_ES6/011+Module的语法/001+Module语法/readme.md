
+ export 指定显示输出代码;
+ import 指定输出;
* [es6 module 语法介绍](http://es6.ruanyifeng.com/#docs/module);

#### 严格模式,ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。
	变量必须声明后再使用
	函数的参数不能有同名属性，否则报错
	不能使用with语句
	不能对只读属性赋值，否则报错
	不能使用前缀 0 表示八进制数，否则报错
	不能删除不可删除的属性，否则报错
	不能删除变量delete prop，会报错，只能删除属性delete global[prop]
	eval不会在它的外层作用域引入变量
	eval和arguments不能被重新赋值
	arguments不会自动反映函数参数的变化
	不能使用arguments.callee
	不能使用arguments.caller
	禁止this指向全局对象
	不能使用fn.caller和fn.arguments获取函数调用的堆栈
	增加了保留字（比如protected、static和interface）
	* 其中，尤其需要注意this的限制。ES6 模块之中，顶层的this指向undefined，即不应该在顶层代码使用this 
#### export 命令
```
	 一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。下面是一个 JS 文件，里面使用export命令输出变量。
	 export var firstName = 'Michael';
	 export var lastName = 'Jackson';
	 export var year = 1958;
	 等价于
	 export {firstName, lastName, year};
```	

> export命令除了输出变量，还可以输出函数或类（class）。
```
export function multiply(x, y) {
  return x * y;
};
export输出的变量就是本来的名字,但是可以使用as关键字重命名。
function v1() { ... }
function v2() { ... }
export {v1 as name1, v2 as name2};
```
 报错
	* function f() {}
	* export f;
 正确
	* export function f() {};
 正确
	* function f() {}
	* export {f};
#### import 命令
> import命令后用{}号接收;
```
1	使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。
import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。
如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
import {firstName, lastName, year} from './profile.js';
import { lastName as surname } from './profile.js';
2	import命令输入的变量都是只读的，因为它的本质是输入接口。不允许在加载模块的脚本里面，改写接口。
import {a} from './xxx.js'
a = {}; // Syntax Error : 'a' is read-only;
3	脚本加载了变量a，对其重新赋值就会报错，因为a是一个只读的接口。但是，如果a是一个对象，改写a的属性是允许的。
import {a} from './xxx.js'
a.foo = 'hello'; // 合法操
4	import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。
5	由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
6	
```
#### 模块的整体加载
除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。
```
export function a(set1){...}
export function b(set2){...}
- - - -
import * as mydemo from './circle';
mydemo.a
mymod.b
```
#### export default 命令
>import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。用export default命令，为模块指定默认输出。
```
1 export-default.js
	export default function () {
	  console.log('foo');
	}
	上面代码是一个模块文件export-default.js，它的默认输出是一个函数。
	其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。
2 import-default.js
	import customName from './export-default';
	customName(); // 'foo'
	这时import命令后面，不使用大括号。
	export default命令用在非匿名函数前，也是可以的。
	** 一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
	export default命令的本质是将后面的值，赋给default变量，所以可以直接将一个值写在export default之后。
	如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样
	import _, { each, forEach } from 'lodash';
```
#### export 与 import的复合写法
```
export {foo,bar} from './my_module';
	等同于
import {foo,bar} from './my_module';
 export {foo,bar};
 ```
 #### 模块的继承
 >假设有一个circleplus模块，继承了circle模块。
 ```
1  circleplus.js
	export * from 'circle';
	export var e = 2.71828182846;
	export default function(x) {
		return Math.exp(x);
	}
2  也可以将circle的属性或方法，改名后再输出。
	// circleplus.js
	export { area as circleArea } from 'circle';
3 加载上面模块的写法如下。
	// main.js
	import * as math from 'circleplus';
	import exp from 'circleplus';
	console.log(exp(math.e));
	mport exp表示，将circleplus模块的默认方法加载为exp方法。
 ```
 ###### 表格
|123|123|456|
|:-:|:----:|:-:|
|abc|abc|abc|
|abc|abc|abc|
|abc|abc|abc|
|abc|abc|abc|