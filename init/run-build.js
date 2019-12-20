#!/usr/bin/env node

const chalk = require("chalk");
const shell = require("shelljs");

const runBuild = () => {
    console.log(chalk.blue('\nRunning Build...\n'));
    shell.exec('npm run-script build');

    console.log(chalk.blue('\nStarting App...\n'));
    shell.exec('npm start');
}

module.exports = runBuild;
