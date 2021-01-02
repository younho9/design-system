import babel from 'rollup-plugin-babel';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

export default {
  input: './src/index.ts',
  plugins: [
    babel({
      extensions,
      include: ['src/**/*'],
      presets: [['react-app', { flow: false, typescript: true }]],
      runtimeHelpers: true,
    }),
    cleaner({ targets: ['./dist/'] }),
    commonjs({
      include: 'node_modules/**',
    }),
    resolve({ extensions }),
    peerDepsExternal(),
  ],
  output: [
    {
      file: pkg.module,
      format: 'es',
    },
  ],
};
