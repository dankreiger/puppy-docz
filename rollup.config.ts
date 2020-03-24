import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const config = {
  input: 'src/components/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [resolve(), commonjs(), typescript()],
  external: [
    ...Object.keys(pkg.peerDependencies),
    ...Object.keys(pkg.devDependencies)
  ]
};

export default config;
