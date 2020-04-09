#!/usr/bin/env node
const fs = require('fs');

let raw = fs.readFileSync('package.json');
let package = JSON.parse(raw);

module.exports = {
    APP_NAME: package.name,
    APP_VERSION: package.version,
    APP_DESCRIPTION: package.description
}
