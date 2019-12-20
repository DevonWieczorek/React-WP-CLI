#!/usr/bin/env node

const chalk = require('chalk');
const shell = require('shelljs');

const install = () => {
    // npm will copy this folder to the bin and mark it as executable
    shell.exec('npm link');
    console.log(chalk.green('\nreact-wp installed!\n'));

    // Install dependencies
    console.log(chalk.cyan('\nInstalling dependencies...\n'));
    shell.exec('npm install');

    // Print help menu
    shell.exec('react-wp --help');

    // Delete this directory (recursively)
    shell.rm('-rf', `${shell.pwd()}`);
}
install();
