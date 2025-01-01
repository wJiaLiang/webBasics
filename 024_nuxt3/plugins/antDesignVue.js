/*

Nuxt拥有一个插件系统，可以在创建Vue应用程序时使用Vue插件和其他功能。
Nuxt会自动读取plugins/目录中的文件，并在创建Vue应用程序时加载它们。
只有目录的顶层文件（或任何子目录中的索引文件）才会自动注册为插件。

*/ 
export default defineNuxtPlugin(nuxtApp=>{
    // 注册一个插件
    let {vueApp,versions} = nuxtApp;
    console.log('插件',nuxtApp.vueApp);
    console.log('插件1',nuxtApp.versions)

})