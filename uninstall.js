#!/usr/bin/env node

const chalk = require('chalk');
const shell = require('shelljs');

const uninstall = () => {

    // Remove the library from the bin
    shell.rm('-Rf', '/usr/local/bin/.react-wp')

    // Unlink the library
    shell.exec('npm unlink');
    console.log(chalk.cyan('\nreact-wp cli uninstalled.\n'))

}
uninstall();
