#!/usr/bin/env node

const chalk = require("chalk");
const cloneRepo = require("./clone-repo");
const cloneEnvFiles = require("./clone-env");
const runBuild = require("./run-build");
const welcome = require("../welcome");
const configure = require("../configure");

const init = () => {
    cloneRepo();
    welcome();
    cloneEnvFiles();
    configure('*')
        .then(() => runBuild())
        .catch(e => console.log(chalk.red(e)))
}

module.exports = init;
