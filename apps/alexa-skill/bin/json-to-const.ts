import * as fs from 'fs';
import { parseFilePath } from './common.js';
const modelName = process.argv[2];
const inputFilePath = process.argv[3];
const outputFilePath = process.argv[4];

console.error(inputFilePath);
console.error(process.cwd());
console.log(process.argv)


if (modelName === undefined
    || !parseFilePath('input', inputFilePath, '.json')
    || !parseFilePath('output', outputFilePath, '.ts')) {
    process.exit(1);
}

const inputFile = JSON.parse(fs.readFileSync(inputFilePath).toString());

const output = `export const ${modelName} = ${JSON.stringify(inputFile)} as const;`;

fs.writeFileSync(outputFilePath, output);
