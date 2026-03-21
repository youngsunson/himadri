import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  // Base for GitHub Pages: /<repo>/ when not using a user/organization site.
  const repoBase = '/';

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
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          bn: path.resolve(__dirname, 'bn.html')
        }
      }
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
