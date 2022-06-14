const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
console.log('vue.config.js',process.env.outputDir)
// 'http://v.juhe.cn/joke/content/text.php'
module.exports  = {
    outputDir:process.env.outputDir || 'dist',

    // 由于浏览器有跨域限制,这里cli 工具提供了 启动本地代理服务器 请求
    devServer:{
        open:false,      // 是否打开浏览器;
        hotOnly:true,    // 是否热更新;

        proxy:{
            '/api':{   // 路径中有 /api 的请求都会走这个代理 , 可以自己定义一个,下面移除即可
                target:'http://v.juhe.cn/joke',    // 目标代理接口地址,实际跨域要访问的接口,这个地址会替换掉 axios.defaults.baseURL
                secure:false,
                changeOrigin:true,  // 开启代理，在本地创建一个虚拟服务端
                ws:true,       // 是否启用  websockets;
                pathRewrite:{   // 去掉 路径中的  /api  的这一截
                    '^/api':''
                }
            },

            '/test':{
                target:'http://v.juhe.cn/joke',   // 目标代理接口地址,实际跨域要访问的接口,这个地址会替换掉 axios.defaults.baseURL
                secure:false,
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/test':'',
                }
            }
        
        },

    },
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              require("autoprefixer")({
                // 配置使用 autoprefixer
                overrideBrowserslist: ["last 15 versions"] 
              }),
              require("postcss-pxtorem")({
                rootValue: 75, // 换算的基数
                // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
                //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
                selectorBlackList: ["ig"],
                propList: ["*"],
                exclude: /node_modules/
              })
            ]
          }
        }
      }



}