declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.json'
declare module '*.css'

declare namespace NodeJS {
  export interface ProcessEnv {
    // NODE_ENV: 'development' | 'production' | 'test'
  }
}
