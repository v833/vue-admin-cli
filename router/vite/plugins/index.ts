import vue from '@vitejs/plugin-vue'
import { ViteEnv } from 'types/viteEnv'
import { Plugin } from 'vite'
import setupMockPlugin from './mockjs'

export default function setupPlugins(isBuid: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue(), setupMockPlugin(isBuid)]
  return plugins
}
