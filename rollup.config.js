import { babel } from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      alias({
        resolve: ['.js', '.ts', '.tsx', '.jsx'],
        entries: [
          {
            find: '@src',
            replacement: './src',
          },
          {
            find: '@components',
            replacement: './src/components',
          },
          {
            find: '@utils',
            replacement: './src/utils',
          },
        ],
      }),

      resolve({
        extensions: ['.js', '.jsx'],
        browser: true,
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      commonjs(),
      peerDepsExternal(),
      resolve(),
      terser(),
    ],
  },
];
