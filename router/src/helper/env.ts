import _ from 'lodash'
import { ViteEnv } from 'types/viteEnv'

class EnvHelper {
  public static Inst: EnvHelper

  private constructor() {
    const envs: any = _.cloneDeep(import.meta.env)
    Object.entries(import.meta.env).forEach(([key, value]) => {
      if (value === 'true') envs[key] = true
      if (value === 'false') envs[key] = false
      if (/^\d+$/.test(value)) envs[key] = Number(value)
    })
    return envs as ViteEnv
  }

  public static getInstance(): EnvHelper {
    if (!this.Inst) {
      this.Inst = new EnvHelper()
    }
    return this.Inst
  }
}

export default EnvHelper.getInstance() as ViteEnv | ImportMetaEnv
