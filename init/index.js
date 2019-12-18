#!/usr/bin/env node

const cloneRepo = require("./clone-repo");
const cloneEnvFiles = require("./clone-env");
const runBuild = require("run-build");
const welcome = require("../welcome");
const configure = require("../configure");

const init = () => {
    cloneRepo();
    welcome();
    cloneEnvFiles();
    configure('*');
    runBuild();
}

module.exports = init;
