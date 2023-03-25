import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import sass from 'vite-plugin-sass-dts';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    plugins: [sass()]
  }
})
