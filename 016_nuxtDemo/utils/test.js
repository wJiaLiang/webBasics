/*
外部的js 可以通过 $nuxt 全局对象获取到 this;

实例初始化完毕以后 nuxt 会在 window 全局注入$nuxt ，
通过$nuxt.$store 可以访问 store，$nuxt.$router 可以访问到router，
但是需要注意的是，初始化完毕以前是无法访问$nuxt的，所以需要再初始化完毕之后才能使用该方法。

*/ 
export async function testHand(){
    console.log("$nuxt",$nuxt);
    console.log("axios",$nuxt.$axios.$post);

}

export function testHand2(){
    console.log("$nuxt",$nuxt);
    console.log("axios",$nuxt.$router);

}
