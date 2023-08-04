(function (w,$) { 

var webapp = {}

webapp.js_center = function (dom) {
    var widht = $(dom).width();
    return widht;
 }

 
 webapp.js_Scroll = function (dom) {
    $(w).scroll(function(){
        console.log($(w).scrollTop())
        
        if ($(w).scrollTop()>200){
            $(dom).fadeIn(500);
        }
        else{
            $(dom).fadeOut(500);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $(dom).click(function(){
        $('body,html').animate({scrollTop:0},200);
        return false;
    });
}


 



w.webapp = webapp;
})(window,$)