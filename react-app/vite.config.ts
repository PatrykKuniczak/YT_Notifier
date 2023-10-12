import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import makeManifest from './utils/core/hmr-core/plugins/make-manifest';
import customDynamicImport from './utils/core/hmr-core/plugins/custom-dynamic-import';
import addHmr from './utils/core/hmr-core/plugins/add-hmr';
import watchRebuild from './utils/core/hmr-core/plugins/watch-rebuild';
import manifest from './manifest';

const rootDir = resolve(__dirname);
const outDir = resolve(rootDir, 'dist');
const publicDir = resolve(rootDir, 'public');
const srcDir = resolve(rootDir, 'src');
const pagesDir = resolve(srcDir, 'pages');
const assetsDir = resolve(srcDir, 'assets');

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
			'@assets': assetsDir,
			'@pages': pagesDir,
		},
	},
	plugins: [
		react(),
		makeManifest(manifest, { isDev }),
		customDynamicImport(),
		addHmr({ background: enableHmrInBackgroundScript, view: true }),
		watchRebuild(),
	],
	publicDir,
	build: {
		outDir,
		minify: isProduction,
		reportCompressedSize: isProduction,
		rollupOptions: {
			input: {
				background: resolve(pagesDir, 'background', 'index.ts'),
				popup: resolve(pagesDir, 'popup', 'index.html'),
				options: resolve(pagesDir, 'options', 'index.html'),
			},
			output: {
				entryFileNames: 'src/pages/[name]/index.js',
				chunkFileNames: isDev ? 'assets/js/[name].js' : 'assets/js/[name].[hash].js',
				assetFileNames: assetInfo => {
					const { dir, name: _name } = path.parse(assetInfo.name);
					const assetFolder = dir.split('/').at(-1);
					const name = assetFolder + firstUpperCase(_name);
					return `assets/[ext]/${name}.chunk.[ext]`;
				},
			},
		},
	},
});

function firstUpperCase(str: string) {
	const firstAlphabet = new RegExp(/( |^)[a-z]/, 'g');
	return str.toLowerCase().replace(firstAlphabet, L => L.toUpperCase());
}
