
module.exports =  {
    devServer:{
        open:true,              // 自动打开浏览器
        hot:true,               // 开启热更新
        compress:true,          // 开启压缩
        https:false,            // 是否启用https
        disableHostCheck:true,  // webpack4.0后开启热更新
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