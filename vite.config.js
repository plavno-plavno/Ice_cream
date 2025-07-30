import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    target: ['es2015', 'safari11', 'chrome58', 'firefox57'],
    cssTarget: ['chrome58', 'safari11'],
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  esbuild: {
    target: 'es2015'
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            '> 1%',
            'last 2 versions',
            'iOS >= 9',
            'Safari >= 9',
            'Chrome >= 58',
            'Firefox >= 57',
            'not dead'
          ]
        })
      ]
    }
  }
}) 