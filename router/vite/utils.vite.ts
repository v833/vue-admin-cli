import _ from 'lodash'
import { ViteEnv } from '../types/viteEnv'

export function parseEnv(env: Record<string, any>): ViteEnv {
  const envs: any = _.cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    if (value === 'true') envs[key] = true
    if (value === 'false') envs[key] = false
    if (/^\d+$/.test(value)) envs[key] = Number(value)
  })
  return envs
}
