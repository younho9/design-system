import commonjs from 'rollup-plugin-commonjs';
import cleaner from 'rollup-plugin-cleaner';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

export default {
  input: './src/index.ts',
  plugins: [
    cleaner({ targets: ['./dist/'] }),
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      extensions,
      include: ['src/**/*'],
      presets: [['react-app', { flow: false, typescript: true }]],
      runtimeHelpers: true
    })
  ],
  output: [
    {
      file: pkg.module,
      format: 'es'
    }
  ]
};
