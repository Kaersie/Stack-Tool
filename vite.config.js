import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { viteSingleFile } from "vite-plugin-singlefile"
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(),//viteSingleFile(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
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

