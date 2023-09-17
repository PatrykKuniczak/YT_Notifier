/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly __DEV__: string;
    readonly __FIREFOX__: string;
    readonly VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
