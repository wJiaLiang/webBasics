export default defineNuxtPlugin((nuxtApp) => {
//   let baseUrl = undefined;
//   if (import.meta.server) {
//     baseUrl = process.env.S_API_URL;
//   } else {
//     baseUrl = process.env.API_URL;
//   }

//   const useApi = (URL, opt) => {
//     return new Promise((resolve, reject) => {
//       return useFetch(URL, {
//         method: opt.method,
//         baseURL: baseUrl,
//         headers: opt.headers,
//         body: opt.data || {},
//         query: opt.query,
//         timeout: 6000,
//         onRequest({ request, options }) {
//           options.headers.set("Authorization", "123456");
//         },
//         onRequestError({ request, options, error }) {
//           console.log("Handle the request errors");
//         },
//         onResponse({ request, response, options }) {
//           console.log("response", response);
//           resolve(response);
//           if (import.meta.client) {
//             localStorage.setItem("token", response._data.token);
//           }
//         },
//         onResponseError({ request, response, options }) {
//           console.log("Handle the response errors");
//           reject(response);
//         },
//       });
//     });
//   };

//   nuxtApp.provide("$http", {
//     get: (url, query, headers) =>
//       useApi(url, { method: "get", query, headers }),
//     post: (url, body, headers) =>
//       useApi(url, { method: "post", body, headers }),
//   });
});
