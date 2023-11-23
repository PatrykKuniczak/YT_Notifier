import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import addHmr from './utils/core/plugins/add-hmr';
import customDynamicImport from './utils/core/plugins/custom-dynamic-import';
import makeManifest from './utils/core/plugins/make-manifest';
import watchRebuild from './utils/core/plugins/watch-rebuild';

const rootDir = resolve(__dirname);
const outDir = resolve(rootDir, 'dist');
const publicDir = resolve(rootDir, 'public');

const srcDir = resolve(rootDir, 'src');
const pagesDir = resolve(srcDir, 'pages');
const assetsDir = resolve(srcDir, 'assets');

const utilsDir = resolve(rootDir, 'utils');
const hooksDir = resolve(utilsDir, 'hooks');
const typesDir = resolve(utilsDir, 'types');
const interfacesDir = resolve(utilsDir, 'interfaces');

const libsDir = resolve(utilsDir, 'libs');
const authDir = resolve(libsDir, 'authentication');
const httpClientDir = resolve(libsDir, 'http-client');
const queryClientDir = resolve(libsDir, 'query-client');

const isDev = process.env.__DEV__ === 'true';
const isProduction = !isDev;

// ENABLE HMR IN BACKGROUND SCRIPT
const enableHmrInBackgroundScript = true;

export default defineConfig({
  envDir: './envs',
  resolve: {
    alias: {
      '@root': rootDir,
      '@src': srcDir,
      '@utils': utilsDir,
      '@assets': assetsDir,
      '@pages': pagesDir,
      '@hooks': hooksDir,
      '@types': typesDir,
      '@interfaces': interfacesDir,
      '@authentication': authDir,
      '@http-client': httpClientDir,
      '@query-client': queryClientDir,
    },
  },
  plugins: [
    makeManifest(),
    react(),
    customDynamicImport(),
    addHmr({ background: enableHmrInBackgroundScript, view: true }),
    isDev && watchRebuild(),
  ],
  publicDir,
  build: {
    outDir,
    minify: isProduction,
    modulePreload: false,
    reportCompressedSize: isProduction,
    rollupOptions: {
      input: {
        background: resolve(pagesDir, 'background', 'index.ts'),
        popup: resolve(pagesDir, 'popup', 'index.html'),
        options: resolve(pagesDir, 'options', 'index.html'),
        content: resolve(pagesDir, 'content', 'index.ts'),
      },
      output: {
        entryFileNames: 'src/pages/[name]/index.js',
        chunkFileNames: isDev ? 'assets/js/[name].js' : 'assets/js/[name].[hash].js',
      },
    },
  },
});
