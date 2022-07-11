import { defineConfig, normalizePath } from "vite"
import react from "@vitejs/plugin-react"
import autoprefixer from "autoprefixer"
import WindiCSS from "vite-plugin-windicss"
import path from "path"

// const variablePath = normalizePath(
//   path.resolve("./src/assets/styles/variable.less")
// )

export default defineConfig({
  plugins: [react(), WindiCSS()],
  build: {
    outDir: "./build",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~antd": "antd",
    },
  },
  // css 相关的配置
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve(
            __dirname,
            "src/assets/styles/variable.less"
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
    // 进行 PostCSS 配置
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"],
        }) as any,
      ],
    },
  },
})
