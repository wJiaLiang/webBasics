function t1(){
	console.log('t1');
}
function t2(){
	console.log('t2');
}
function t3(){
	console.log('t3');
}
function t4(){
	console.log('t4');
}
let obj = {
	t2,t3,t4
}
//  一个模块中 export default 只能用一次; 也可以用于具名函数;
export default obj
