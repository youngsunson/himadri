import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  // Base for GitHub Pages: /<repo>/ when not using a user/organization site.
  const repoBase = '/himadri/';

  return {
    base: mode === 'production' ? repoBase : '/',
    plugins: [react(), tailwindcss()],
    define: {
      // keep empty to avoid injecting client secrets
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
