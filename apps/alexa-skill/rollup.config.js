import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import {defineConfig} from 'rollup';
import {sentryRollupPlugin} from "@sentry/rollup-plugin";

export default defineConfig({
    input: ['src/index.ts'],
    output: {
        file: "dist/index.cjs",
        sourcemap: true,
        format: "commonjs",
    },
    plugins: [
        typescript({tsconfig: 'tsconfig.json', compilerOptions: {}}),
        nodeResolve({browser: false, preferBuiltins: true,}),
        commonjs(),
        json({compact: true, preferConst: true, namedExports: true}),
        sentryRollupPlugin({
            org: "myself-2o",
            project: "alexa-bahn",
            // Specify the directory containing build artifacts
            include: "./dist",
            ignore: ["node_modules"],

            sourceMapReference: true,
            validate: true,
            rewrite: true
        }),
    ]
});
