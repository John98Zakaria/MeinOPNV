import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { defineConfig } from 'rollup';
import { sentryRollupPlugin } from '@sentry/rollup-plugin';
import copy from 'rollup-plugin-copy';

export default defineConfig({
    input: ['src/index.ts'],
    output: {
        file: 'dist/index.cjs',
        sourcemap: true,
        format: 'commonjs',
    },
    plugins: [
        typescript({ tsconfig: 'tsconfig.json', compilerOptions: {} }),
        nodeResolve({ browser: false, preferBuiltins: true }),
        commonjs(),
        json({ compact: true, preferConst: true, namedExports: true }),
        copy({
            targets: [
                { src: 'prisma/schema.prisma', dest: 'dist' },
                {
                    src: '../../node_modules/.prisma/client/libquery_engine-rhel-openssl-1.0.x.so.node',
                    dest: 'dist',
                },
                { src: 'package.json', dest: 'dist' },
                {
                    src: '../../node_modules/hafas-client/p/db/base.json',
                    dest: 'dist',
                },
            ],
        }),
        sentryRollupPlugin({
            org: 'myself-2o',
            project: 'alexa-bahn',
            // Specify the directory containing build artifacts
            include: [
                { paths: ['./dist'], ext: ['.js', '.cjs', '.map'] },
                { paths: ['./src'], ext: ['.ts'] },
            ],
            ignore: ['node_modules'],
            urlPrefix: 'app:///../../src',
            stripCommonPrefix: true,
            sourceMapReference: true,
            cleanArtifacts: true,
            validate: true,
            rewrite: true,
        }),
    ],
});
