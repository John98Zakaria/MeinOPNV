import * as fs from 'fs';
import {parseFilePath} from './common.js';

const exportName = process.argv[2];
const inputFilePath = process.argv[3];
const outputFilePath = process.argv[4];
if (exportName === undefined
    || !parseFilePath('input', inputFilePath, '.ts')
    || !parseFilePath('output', outputFilePath, '.json')) {
    process.exit(1);
}
const module = await import(inputFilePath);

fs.writeFileSync(outputFilePath, JSON.stringify(module[exportName], null, 2));
