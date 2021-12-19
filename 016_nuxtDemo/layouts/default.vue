<template>
  <div>

    <div class="fs19 cr_red"> layouts pages </div>
    {{req}}
    <div class="tc fs20 pt10">
        <app-header> </app-header>  
    </div>

      <Nuxt />

  </div>
</template>

<script>
import header from  '../layouts/header'
export default {
 components: {
    "app-header":header
  },

  // 页面层级的中间件 结构 context 对象
  middleware({app,isClient,isServer,isStatic,isDev,route,store,env,params,query,req,res,redirect,error,nuxtState}){

    /*
     console.log("---------------middleware layouts 布局 start-----------------")
     console.log("app ===>",app)
     console.log("isClient ===>",isClient,process.client)
     console.log("isServer ===>",isServer,process.server)
     console.log("isStatic ===>",isStatic,process.static)
     console.log("isDev ===>",isDev)
     console.log("route ===>",route)
     console.log("store ===>",store)
     console.log("env ===>",env)
     console.log("params ===>",params)
     console.log("query ===>",query)
     console.log("req ===>",req)
     console.log("res ===>",res)
     console.log("redirect ===>",redirect)
     console.log("error ===>",error)
     console.log("nuxtState ===>",nuxtState)
     console.log("---------------middleware layouts 布局 end -----------------")

     */ 

    // 强制调转 到 home页面
    // redirect('/home')

  },
  data(){
    return{
      req:666,
    }
  }

}
</script>


<style>

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
