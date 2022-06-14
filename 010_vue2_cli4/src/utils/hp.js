import axios from 'axios'

var app = new Object();

axios.defaults.baseURL = process.env.NODE_ENV === "development"?"/":process.env.VUE_APP_API

app.ajax = (url,method)=>{
  return axios({
       url:url,
       baseURL:process.env.NODE_ENV=="development"?'/':process.env.VUE_APP_API,
       method:method,
       params:{
           key:'19a578542216aeb8a23ccf5b05a61449'
       },

       data:{
           sort:'desc',
           page:1,
           pagesize:10,
           time:parseInt( new Date().getTime()/1000),
           key:'19a578542216aeb8a23ccf5b05a61449'
       },
       headers:{'Content-Type':'application/json;charset=UTF-8'},

   })

}

export default app;