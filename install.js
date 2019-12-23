#!/usr/bin/env node

const chalk = require('chalk');
const shell = require('shelljs');

const install = () => {

    // Copy our library to the bin
    shell.chmod('+x', './index.js');
    shell.mkdir('/usr/local/bin/.react-wp');
    shell.cp('-rp', './', '/usr/local/bin/.react-wp');
    console.log(chalk.green('\nCopied successfully to /usr/local/bin/.react-wp/:\n'));

    // Print our library files for confirmation
    shell.cd('/usr/local/bin/.react-wp');
    shell.ls('-a', '.');

    // npm will create a symlink for this folder and mark it excecutable 
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
