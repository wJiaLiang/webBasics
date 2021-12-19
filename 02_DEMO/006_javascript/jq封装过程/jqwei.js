(function(w,undefined){
//节省全局查找window对象的时间；
//压缩的时候可以压缩window对象了;就是相当与吧这个对象赋值个一个变量;
//undefined就是因为老的浏览器可以改变undefined的值为了防止被改;
//如这种情况   if(a==undefined){}
//jqwei的角色（对象和普通函数）
var jqwei=function(select){
			return new $.fn.init(select);
		};
		jqwei.fn=jqwei.prototype={
			init:function(select){
				this.css=function(){
					console.log('css方法');
				}
			},
			jq:"verson2.0",
			size:function(){
				console.log(this.jq)
			}
		};
		//jq 插件的内部实现机制; 
		jqwei.extend=jqwei.fn.extend=function(o1,o2){
				//这里面的this指向的是jqwei.fn或者jqwei（也就是jq原型和jq本身）
			var f=arguments;
			//这里仅是一个浅拷贝; 
			if(f.length==1){
				for(var key in f[0]){
					this[key]=f[0][key];
				}
			}else if(f.length===2){
				for(var key in o2){
					o1[key]=o2[key];
				}
			}
		}

		jqwei.fn.init.prototype=jqwei.fn;
		
		window.$=window.jQuery=jqwei;
})(window)

