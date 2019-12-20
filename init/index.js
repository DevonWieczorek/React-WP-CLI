#!/usr/bin/env node

const chalk = require("chalk");
const shell = require("shelljs");
const cloneRepo = require("./clone-repo");
const cloneEnvFiles = require("./clone-env");
const runBuild = require("./run-build");
const welcome = require("../welcome");
const configure = require("../configure");

const npmInstall = () => {
    console.log(chalk.cyan('\nInstalling npm packages...\n'));
    shell.exec('npm install');
}

const init = () => {
    cloneRepo();
    npmInstall();
    welcome();
    cloneEnvFiles();
    configure('*')
        .then(() => runBuild())
        .catch(e => console.log(chalk.red(e)))

}

module.exports = init;
