
// const exports = module.exports;  这行代码相当于环境自动部署的; 后面就不准在修改 exports 的执行：



exports.test = 100;


// 不能这样赋值的;相当于修改了exports 的指向, exports 相当于修改了指向; 指向了一个字面量对象;

exports = {
	a:1,
	b:2,
}