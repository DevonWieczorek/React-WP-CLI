#! /usr/bin/env node
const fs = require('fs');

let raw = fs.readFileSync('package.json');
let package = JSON.parse(raw);
let cmd = package.scripts.publish;
let regex = /(s3:\/\/)(.*?)(\/)(.*?)(\/)/gi;

package.scripts.publish = cmd.replace(regex, `s3://${process.argv[2]}/${process.argv[3]}/`);
fs.writeFileSync('package.json', JSON.stringify(package));
