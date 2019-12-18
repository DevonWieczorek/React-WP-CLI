#!/usr/bin/env node

const shell = require("shelljs");
const utils = require("../utils");

const cloneEnvFiles = () => {
    const environments = ['development', 'staging', 'production'];

    environments.map(env => {
        shell.cat(`${utils.wd()}/.config.env`).to(`.env.${env}`);
    });

}

module.exports = cloneEnvFiles;
