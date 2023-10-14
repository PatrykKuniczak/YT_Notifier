import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import manifest from './manifest';
import addHmr from './utils/core/hmr-core/plugins/add-hmr';
import customDynamicImport from './utils/core/hmr-core/plugins/custom-dynamic-import';
import makeManifest from './utils/core/hmr-core/plugins/make-manifest';
import watchRebuild from './utils/core/hmr-core/plugins/watch-rebuild';

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
