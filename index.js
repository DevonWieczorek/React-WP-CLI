#!/usr/bin/env node

const shell = require('shelljs');
const cli = require('./types');
const welcome = require('./welcome');
const help = require('./help');

let commands = process.argv.slice(2, process.argv.length);

const version = () => {
    console.log(chalk.green(`${cli.APP_NAME} cli`));
    console.log(chalk.green(`Version: ${cli.APP_VERSION}`));
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
            welcome(); //placeholder
            break;
        case '-c':
        case '--configure':
            console.log('configure')
            break;
        case '-u':
        case '--update':
            console.log('update')
            break;
        case '-p':
        case '--plugin':
            console.log('plugin')
            break;
        default:
            throw new Error(chalk.red(`${commands[0]} is an invalid argument. Use react-wp --help for proper usage.`));
            break;
    }
}
run();
