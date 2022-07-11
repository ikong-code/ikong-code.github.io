import { defineConfig, normalizePath } from "vite"
import react from "@vitejs/plugin-react"
import autoprefixer from "autoprefixer"
import WindiCSS from "vite-plugin-windicss"
import { mdToJsonVitePlugin } from './mdToJson'
import inspect from 'vite-plugin-inspect';
import path from "path"

const variablePath = normalizePath(
  path.resolve("./src/assets/styles/variable.less")
)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS(), mdToJsonVitePlugin({type: 1}), inspect()],
  build: {
    outDir: "./docs",
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
