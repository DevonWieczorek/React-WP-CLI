#!/usr/bin/env node

const chalk = require('chalk');
const figlet = require('figlet');
const shell = require('shelljs');
const cli = require('./types');

const line = () => {
    console.log(chalk.green('\n###########################################################################################\n'));
}

const welcome = () => {
    console.clear();

    line();

    console.log(chalk.green(figlet.textSync(cli.APP_NAME + ' cli', {
        font: 'colossal'
    })))

    console.log(chalk.green(`Version: ${cli.APP_VERSION}`));
    console.log(chalk.green('\n' + cli.APP_DESCRIPTION));

    console.log(chalk.green(`
        \nReminders:\n- All paths should be relative\n- Colors and font families should be valid CSS\n- All strings with spaces spaces should be double-quoted\n  (We are in the command line after all!)
    `));

    line();
}

module.exports = welcome;
