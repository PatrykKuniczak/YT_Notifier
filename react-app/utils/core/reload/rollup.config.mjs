import typescript from "@rollup/plugin-typescript";

const plugins = [typescript()];

export default [
  {
    plugins,
    input: 'utils/core/reload/initReloadServer.ts',
    output: {
      file: 'utils/core/reload/initReloadServer.js',
    },
    external: ['ws', 'chokidar', 'timers'],
  },
  {
    plugins,
    input: 'utils/core/reload/injections/script.ts',
    output: {
      file: 'utils/core/reload/injections/script.js',
    },
  },
  {
    plugins,
    input: 'utils/core/reload/injections/view.ts',
    output: {
      file: 'utils/core/reload/injections/view.js',
    },
  },
];
