/// <reference types="vite/client" />

interface ImportMetaEnv {
  // env variable goes here
  readonly VITE_INFURA_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
