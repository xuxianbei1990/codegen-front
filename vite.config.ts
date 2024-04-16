import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const root = process.cwd()

// 路径查找
function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{
      find: /\@\//,
      replacement: `${pathResolve('src')}/`
    }]
  }
})
