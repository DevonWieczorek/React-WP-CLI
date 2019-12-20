#!/usr/bin/env node

const chalk = require('chalk');
const shell = require('shelljs');
const cli = require('./types');
const welcome = require('./welcome');
const help = require('./help');
//const plugins = require('./plugins');
const configure = require('./configure');
const init = require('./init');
const update = require('./update');

let commands = process.argv.slice(2, process.argv.length);

const version = () => {
    console.log(chalk.green(`\n${cli.APP_NAME} cli`));
    console.log(chalk.green(`Version: ${cli.APP_VERSION}\n`));
}

const run = () => {
    let flag = commands[0];
    let args = commands.slice(1, commands.length);

    switch(commands[0]){
        case '-h':
        case '--help':
            help();
            break;
        case '-v':
        case '--version':
            version();
            break;
        case '-i':
        case '--init':
            init();
            break;
        case '-c':
        case '--configure':
            configure();
            break;
        case '-u':
        case '--update':
            update();
            break;
        case '-p':
        case '--plugin':
            //plugins(args);
            break;
        default:
            throw new Error(chalk.red(`${commands[0]} is an invalid argument. Use react-wp --help for proper usage.`));
            break;
    }
}
run();
