import { message } from "ant-design-vue";

// 封装请求方法
export const $request = (url, options = {}) => {
  const config = useRuntimeConfig();
  let token = useCookie("token") || "aaa";
  console.log("token", token.value);
  let fetchConfig = {
    ...options,
    baseURL:config.public.baseURL,
    // 请求头
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      appId: "1423218348394991618",
    },
    timeout: 30000,
  };
  return $fetch(url, {
    ...fetchConfig,
    onRequest({ request, options }) {
      console.log("请求前处理:", request, options);
    },
    onRequestError({ request, options, error }) {
      console.log("请求错误处理:", request, options, error);
    },
    onResponse({ request, response, options }) {
      console.log("请求成功处理:", request, response, options);
    },
    onResponseError({ request, response, options }) {
      console.log("请求失败处理:", request, response, options);
      let errMsg = "";
      if (request.status == 404) {
        errMsg = response?.statusText || "服务端错误";
      }
      message.error({
        content: errMsg,
        duration: 3,
      });
    },
  });
};
