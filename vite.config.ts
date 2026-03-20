import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss()],
    // NOTE: Do NOT inject secrets (like GEMINI_API_KEY) into the client bundle.
    // If you need public flags, use PUBLIC_* env vars and reference them via import.meta.env.PUBLIC_X
    define: {
      // e.g. 'import.meta.env.PUBLIC_APP_URL': JSON.stringify(env.PUBLIC_APP_URL),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
