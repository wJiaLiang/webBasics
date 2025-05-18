import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";

console.log("url=>", import.meta.url);
console.log("环境变量:", process.cwd());

export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const env = loadEnv(mode, process.cwd());
  console.log("配置", env);
  return {
    /*
    用于设置开发服务器（dev server）和构建（build）时的公共基础路径。
    当你在本地开发时，base 会影响开发服务器的 URL。
    例如，如果你设置 base: '/myapp/'，那么当你启动开发服务器时，你可能需要在浏览器中访问 http://localhost:3000/myapp/ 来看到你的应用。
    
    当你构建你的应用进行生产部署时，base 参数将影响构建后的资源路径。
    它决定了你的静态资源（如 JavaScript、CSS、图片等）在部署到服务器后相对于服务器根目录的路径。

    打包后 静态资源路径前缀 index.html中的链资源会加上这个前缀
    如: <link rel="modulepreload" crossorigin href="/myapp/assets/vue-router-1b19bf1b.js">
    */ 
    base: env.VITE_APP_BASE_URL,
    plugins: [
      vue(),
      legacy({ targets: ["defaults", "not IE 11"] }),
      viteImagemin({
        verbose: true,
        gifsicle: {
          optimizationLevel: 3,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 50,
        },
        pngquant: {
          quality: [0.6, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: "removeViewBox",
            },
            {
              name: "removeEmptyAttrs",
              active: false,
            },
          ],
        },
      }),
      viteCompression({
        ext: ".gz",
        algorithm: "gzip",
        deleteOriginFile: false,
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      sourcemap: false,
      outDir: env.VITE_APP_outDir, // 打包后的输出目录
      assetsInlineLimit: 4096,
      chunkSizeWarningLimit: 1024 * 2,
      rollupOptions: {
        //  external: ['vue', 'vuex', 'vueRouter' ], // 不打包这几项;单独引入cdn
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
    server: {
      open: false,
      port: null,
      host: "0.0.0.0",
      // proxy: {
      //   "/api": {
      //     target: "https://test-api.test.com/api/",
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, "")
      //   },
      //   "/ws-api": {
      //     target: "wss://test-api.test.com",
      //     changeOrigin: true, //是否允许跨域
      //     ws: true
      //   }
      // }
    },
  };
});

/*
export default ({mode})=>{
  //mode为开放模式或生产模式
  console.log(mode);
  const env = loadEnv(mode, process.cwd());   // 获取.env文件里定义的环境变量
  return defineConfig({

  })
}
*/

/*
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({targets: ['defaults', 'not IE 11']}),
    viteImagemin({
      verbose:true,
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 50,
      },
      pngquant: {
        quality: [0.6, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    viteCompression({ext:'.gz',algorithm:'gzip',deleteOriginFile:false }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build:{
    sourcemap:false,
    outDir:"dist", //打包后的输出目录
    assetsInlineLimit:4096,
    chunkSizeWarningLimit:1024*2,
    rollupOptions: {
      output:{
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  server: {
    open: false,
    port: 3006,
    host: "0.0.0.0",
    // proxy: {
    //   "/api": {
    //     target: "https://test-api.test.com/api/",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, "")
    //   },
    //   "/ws-api": {
    //     target: "wss://test-api.test.com",
    //     changeOrigin: true, //是否允许跨域
    //     ws: true
    //   }
    // }
  }


});
*/
