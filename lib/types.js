#!/usr/bin/env node
const fs = require('fs');
const utils = require('./utils');

let raw = fs.readFileSync(`${utils.cliDir()}/package.json`);
let package = JSON.parse(raw);

module.exports = {
    APP_NAME: package.name,
    APP_VERSION: package.version,
    APP_DESCRIPTION: package.description
}
