/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
  readonly VITE_BASE_URL: string
  readonly VITE_ACCESS_KEY: string
  readonly VITE_SECRET_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
