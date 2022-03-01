/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_API_BACKEND: string;
  readonly VITE_API_IMAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vitest" />
