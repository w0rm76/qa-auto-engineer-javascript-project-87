#!/usr/bin/env node
import parse from './parse.js';
import generate from './generate.js';

import { Command } from 'commander';
const program = new Command();

let filepath1, filepath2;

program
    .name('gendiff');

program
    .version('0.0.1');

program
    .option('-f, --format <type>', 'output format');
    
program
    .argument('<filepath1>', 'адрес файла 1', filepath1)
    .argument('<filepath2>', 'адрес файла 2', filepath2)
    .action((filepath1, filepath2) => {
        const file1 = parse(filepath1);
        const file2 = parse(filepath2);
        console.log(file1);
        console.log(file2);
        generate(file1, file2); // генерация дифа, вынес в отдельную функцию сравнение двух неупорядоченных джейсонов
    });

program
    .description('Compares two configuration files and shows a difference.');

program.parse(process.argv);

export default { filepath1, filepath2 } 