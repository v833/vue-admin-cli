export interface ViteEnv {
  VITE_SOME_KEY: number
  VITE_API_URL: string
  VITE_ROUTE_AUTOLOAD: boolean
}

interface ImportMetaEnv extends ViteEnv {
  VITE_SOME_KEY: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
