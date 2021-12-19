/**
 * argv
 * argv0;
 * execArgv
 * execPath
 * 
 */

//  启动这文件的时候传入的参数;
const {argv,argv0,execArgv,execPath} = process;

argv.forEach(item=>{
	console.log(item);
})