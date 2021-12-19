

var arr1= [1,2,3];
console.log( arr1.toString() );


var arr2 = ['1','2','3'];
arr2.push('a','b','c'); //结尾添加一个或多个;
arr2.pop();             // 结尾删除一个;
console.log(arr2);


var arr3 = ['a','b','c'];
arr3.unshift('ss');     // 头部添加一个;
arr3.shift();           // 头部删除一个;
console.log(arr3);

/*
    1. map方法将数组的所有成员依次传入参数函数，
    然后把每一次的执行结果组成一个新数组返回。
*/ 
var arr4 = [1,2,3];
let new_arr4 = arr4.map(function (i) { return i+i })
console.log(new_arr4);  //[2,4,6];

/*
    2. forEach;forEach方法不返回值，只用来操作数据。
    这就是说，如果数组遍历的目的是为了得到返回值，那么使用map方法，否则使用forEach方法。
*/ 
var arr5 = [10,12,15];
arr5.forEach( (element,index,arr) => {
    console.log(element,index,arr);
});

//3. filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回。
var arr6 = [1,2,3,4,5,6,7,8];
let arr7 = arr6.filter(function (elem) {
    return elem%2 == 0;
 })
console.log(arr7);  //[2,4,6,8];


/*
    some 和 every 这两个方法类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。
    它们接受一个函数作为参数，所有数组成员依次执行该函数。
    该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。
*/

// some 方法是只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false。
var arr8 = [1,2,3,4,5,6,7,8];
let v8 = arr8.some(function (elem,index,arr) { 
    return elem > 5
 })
console.log(v8);  // ture;

// every方法是所有成员的返回值都是true，整个every方法才返回true，否则返回false。
var v9 = arr8.every(function (elem,index,arr) {
    return elem >=4;
 })
 console.log(v9); // false;