import { message } from 'ant-design-vue';

  // 封装请求方法
  const $request = async (url, options = {}) => {
    const config = useRuntimeConfig();
    const token = useCookie('token')||"";
    const fetchConfig = {
      // 基础URL
      baseURL: config.public.baseURL,
      // 请求头
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        appId: '1423218348394991618'
      },
      // 超时时间
      timeout: 30000
    };


    try {
      const response = await $fetch(url, {
        ...fetchConfig,
        ...options
      });
      return response;
    } catch (error) {
      // 错误处理
      const errMsg = error.response?._data?.message || error.message || '请求失败';

      // 使用 message 组件提示错误
      message.error({
        content: errMsg,
        duration: 3
      });

      // 抛出错误,让调用方可以继续处理
      throw error;
    }
  };

  // 封装常用请求方法
  export const request = {
    get: (url, params = {}) => {
      return $request(url, {
        method: 'GET',
        params
      });
    },

    post: (url, data = {}) => {
      return $request(url, {
        method: 'POST',
        body: data
      });
    },

    put: (url, data = {}) => {
      return $request(url, {
        method: 'PUT',
        body: data
      });
    },

    delete: (url, data = {}) => {
      return $request(url, {
        method: 'DELETE',
        body: data
      });
    }
  };

 
