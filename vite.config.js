import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
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
  viteCompression({
    threshold: 100000 // 对大于 100kb 的文件进行压缩
  })
  ],
  server: {				// ← ← ← ← ← ←
    host: '0.0.0.0',
    },
  build: {
    rollupOptions: {
      output: {
     //    manualChunks(id) { // 分包
     //     if (id.includes('node_modules')) {
     //      return id.toString().split('node_modules/')[1].split('/')[0].toString();
     //    }
     //   }
      }
    }
  }
})

