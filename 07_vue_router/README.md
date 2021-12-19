# vue_router_study

> Vue router 路由demo;

## Build Setup
``` bash
# install dependencies
npm install
# serve with hot reload at localhost:8080
npm run dev
# build for production with minification
npm run build
# build for production and view the bundle analyzer report
npm run build --report
```
### 线上部署注意问题
* 上线白屏问题?
    * config 文件中的index.js中,  build  和 dev 对象中 assetsPublicPath:'/' 修改为 assetsPublicPath:'./'

* 路由导航中默认为选中的高亮效果不生效问题?
    * 多半是路由 地址栏中的url 未匹配造成的; 可能是服务器中域名的根路径未指向index.html造成的;