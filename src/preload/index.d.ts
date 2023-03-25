import { ElectronAPI } from '@electron-toolkit/preload'



declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
  }
}

declare module 'vite-plugin-sass';