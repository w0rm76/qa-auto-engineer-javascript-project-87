#!/usr/bin/env node

const commander = require('commander');
const program = new commander.Command();

program
    .name('gendiff');

program
    .version('0.0.1');

program
    .option('-f, --format <type>', 'output format');

program
    .argument('<filepath1>', 'filepath1')
    .argument('<filepath2>', 'filepath2');

program
    .description('Compares two configuration files and shows a difference.');

program.parse(process.argv);
