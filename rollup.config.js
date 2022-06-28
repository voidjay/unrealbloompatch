import typescript from '@rollup/plugin-typescript';
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
export default [{
  input: './index.ts',
  output: {
    name:'threejs-unrealbloom',
    dir: 'build',
    format: 'umd',
    entryFileNames: '[name].js',
  },
},{
  input: './index.ts',
  output: {
    name:'threejs-unrealbloom',
    dir: 'build',
    format: 'esm',
    entryFileNames: '[name].module.js',
  },
}];