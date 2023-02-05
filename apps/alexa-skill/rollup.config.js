import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeGlobals from 'rollup-plugin-node-globals';
import { defineConfig } from 'rollup';

export default defineConfig({
    input: ['src/index.ts'],
    output: {
        dir: 'dist',
        sourcemap: true
    },
    plugins: [
        typescript({ tsconfig: 'tsconfig.json' }),
        nodeResolve({ browser: false, preferBuiltins: true }),
        commonjs(),
        nodeGlobals(),
        json({ compact: true, preferConst: true, namedExports: true })
    ]
});
