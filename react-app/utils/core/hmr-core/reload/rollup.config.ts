import typescript from '@rollup/plugin-typescript';

const plugins = [typescript()];

export default [
	{
		plugins,
		input: 'utils/core/hmr-core/reload/initReloadServer.ts',
		output: {
			file: 'utils/core/hmr-core/reload/initReloadServer.js',
		},
		external: ['ws', 'chokidar', 'timers'],
	},
	{
		plugins,
		input: 'utils/core/hmr-core/reload/injections/script.ts',
		output: {
			file: 'utils/core/hmr-core/reload/injections/script.js',
		},
	},
	{
		plugins,
		input: 'utils/core/hmr-core/reload/injections/view.ts',
		output: {
			file: 'utils/core/hmr-core/reload/injections/view.js',
		},
	},
];
