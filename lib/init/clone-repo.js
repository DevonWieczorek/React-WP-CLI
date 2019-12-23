#!/usr/bin/env node

const chalk = require("chalk");
const shell = require("shelljs");

const cloneRepo = () => {
    shell.exec(`
        git init
        git remote add source_main https://github.com/FluentCo/React-Wordpress-Microsite.git
        git remote add source_plugins https://github.com/FluentCo/React-Wordpress-Microsite-Plugins.git
        git pull source_main master
        git add .
        git commit -a -m "Initial Commit"
    `);
    console.log(chalk.green('\nFetched code from repository.\n'))
}

module.exports = cloneRepo;
