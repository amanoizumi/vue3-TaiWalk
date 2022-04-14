import path from 'path';
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  build: {
    chunkSizeWarningLimit:3000,
	},
  resolve : {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  base:'/vue3-TaiWalk/',
  
  plugins: [
    Vue(),
    Components({
      dirs: ['src/components'],
      resolvers: IconsResolver({
        prefix: false,
        enabledCollections: ['heroicons-solid', 'heroicons-outline'],
      }),
    }),
    Icons(),
  ],
})
