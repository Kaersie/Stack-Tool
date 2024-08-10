import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  ],
  server: {				// ← ← ← ← ← ←
    host: '0.0.0.0'	,// ← 新增内容 ←
    https: false,
    // 是否自动在浏览器打开
    open: true,
    cors: true,
    proxy: {
      '/path': {
        target: 'https://aip.baidubce.com',    // 接口域名,接口服务器地止
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/path/, '')
    },},
  build: {
    rollupOptions: {
      output: {
        // manualChunks(id) { // 分包
        //  if (id.includes('node_modules')) {
        //   return id.toString().split('node_modules/')[1].split('/')[0].toString();
        // }
        //}
      }
    }
  }
})

