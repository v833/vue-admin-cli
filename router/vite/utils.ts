import _ from 'lodash'

export function parseEnv(env: Record<string, any>) {
  const envs = _.cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    if (value === 'true') envs[key] = true
    if (value === 'false') envs[key] = false
    if (/^\d+$/.test(value)) envs[key] = Number(value)
  })
  return envs
}
