import { ConfigEnv, loadEnv } from 'vite'
import alias from './vite/alias.vite'
import { parseEnv } from './vite/utils.vite'
import setupPlugins from './vite/plugins/index'

export default ({ command, mode }: ConfigEnv) => {
  const isBuid = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))

  return {
    plugins: setupPlugins(isBuid, env),
    resolve: {
      alias
    }
  }
}
