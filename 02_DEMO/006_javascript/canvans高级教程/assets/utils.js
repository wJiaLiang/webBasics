/*
    cavas 教程;

 */ 

let C= { }
// 获取鼠标在元素上的坐标;
C.getOffset = function(ele){
    let mouse = {x:0,y:0};
    ele.addEventListener('mousemove',function(ev){
        let {x,y}= C.eventWrapper(ev);
        mouse.x=x;
        mouse.y=y;
    })
    return mouse;
};


C.eventWrapper = function(ev){
    let {pageX,pageY,target} = ev;
    let {left,top} = target.getBoundingClientRect();
    return {x:pageX-left,y:pageY-top}
}