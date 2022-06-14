var add = function(x,y){
    if(typeof x == 'number' && typeof y == 'number'){
        console.log(x+y);
        return x+y;
    }else{
        console.log(new Error(x,y))
    }
}