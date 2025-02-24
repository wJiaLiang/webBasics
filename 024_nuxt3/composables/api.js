let baseUrl = undefined;
/*
  use 开头的 内置组合式函数不能再 在模块的顶层（即文件的根作用域）调用
  因为 要访问 Nuxt 应用实例才能正常工作;
  而在模块的顶层（即文件的根作用域）直接调用 Composable：
  1.Nuxt 应用实例可能还没有完全初始化
  2.无法访问到正确的应用上下文
  3.可能会导致响应式系统的异常
*/ 
export const useApi = (URL, opt) => {
  const config = useRuntimeConfig();
  console.log("import.meta.server", import.meta.server);
  if (import.meta.server) {
    baseUrl = config.public.hostbaseURL;
  } else {
    baseUrl = config.public.baseURL;
  }

  return new Promise((resolve, reject) => {
    return useFetch(URL, {
      method: opt.method,
      baseURL: baseUrl,
      headers: opt.headers,
      body: opt.data || null,
      query: opt.query||null,
      timeout: 6000,
      onRequest({ request, options }) {
        options.headers.set("Authorization", "123456");
      },
      onRequestError({ request, options, error }) {
        console.log("request errors",request,options,error);
      },
      onResponse({ request, response, options }) {
        console.log("response", response);
        resolve(response._data);
        if (import.meta.client) {
          localStorage.setItem("token", response._data.token);
        }
      },
      onResponseError({ request, response, options }) {
        console.log("Handle the response errors");
        reject(response);
      },
    });
  });
};

export const $http={
  get:(url,query,headers)=>{
    return useApi(url,{method:"get",query,headers})
  },
  post:(url,data,headers)=>{
    return useApi(url,{method:"post",data,headers})
  },
  put:(url,data,headers)=>{
    return useApi(url,{method:"put",data,headers})
  },
  delete:(url,data,headers)=>{
    return useApi(url,{method:"delete",data,headers})
  },
}

export const getApi = (url, query, headers) => {
  const config = useRuntimeConfig();
  const currentBaseUrl = import.meta.server ? config.public.hostbaseURL : config.public.baseURL;
    return useApi(url, { method: "get", query, headers });
};
