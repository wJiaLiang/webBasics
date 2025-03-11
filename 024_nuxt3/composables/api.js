let baseUrl = undefined;
/*
  use 开头的 内置组合式函数不能再 在模块的顶层（即文件的根作用域）调用
  因为 要访问 Nuxt 应用实例才能正常工作;
  而在模块的顶层（即文件的根作用域）直接调用 Composable：
  1.Nuxt 应用实例可能还没有完全初始化
  2.无法访问到正确的应用上下文
  3.可能会导致响应式系统的异常
  不能包一层 Promise 返回 ueseFetch,回破坏useFetch特性;
*/
export const useApi = (URL, opt) => {
  const config = useRuntimeConfig();
  console.log("import.meta.server", import.meta.server);
  if (import.meta.server) {
    baseUrl = config.public.hostbaseURL;
  } else {
    baseUrl = config.public.baseURL;
  }
  return useFetch(URL, {
    // method: opt.method,
    // headers: opt.headers,
    // body: opt.data || null,
    // query: opt.query||null,
    ...opt,
    baseURL: baseUrl,
    timeout: 6000,
    server: import.meta.server ? true : false,
    onRequest({ request, options }) {
      // console.log("request", request, options);
      options.headers.set("Authorization", "123456");
    },
    onRequestError({ request, options, error }) {
      console.log("request errors", request, options, error);
    },
    onResponse({ request, response, options }) {
      if (import.meta.client) {
        localStorage.setItem("token", response.url);
        useCookie("token", response.url);
      }
    },
    onResponseError({ request, response, options }) {
      console.log("response errors", response);
    },
    transform: (data) => {
      return data;
    },
  });
};

export const $http = {
  get: (url, opt={}) => {
    opt = {
      ...opt,
      method: "get",
    };
    return useApi(url, opt);
  },
  post: (url, opt = {}) => {
    return useApi(url, opt);
  },
  put: (url, opt = {}) => {
    return useApi(url, opt);
  },
  delete: (url, opt = {}) => {
    return useApi(url, opt);
  },
};

// 直接使用 useFetch 请求;
export const getFetch = (url) => {
  const config = useRuntimeConfig();
  const currentBaseUrl = import.meta.server
    ? config.public.hostbaseURL
    : config.public.baseURL;
  return useFetch(currentBaseUrl + url, { key: url });
};
