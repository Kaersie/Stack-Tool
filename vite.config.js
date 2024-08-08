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
    host: '0.0.0.0'	// ← 新增内容 ←
  }		,
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
