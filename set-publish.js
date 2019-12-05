#! /usr/bin/env node
const fs = require('fs');

let raw = fs.readFileSync('package.json');
let package = JSON.parse(raw);
let regex = /(s3:\/\/)(.*?)(\/)(.*?)(\/)/gi;

try{
    let _pub = package.scripts.publish;
    package.scripts.publish = _pub.replace(regex, `s3://${process.argv[2]}/${process.argv[3]}/`);
}
catch(e){
    let cmd = "cd $(npm root) && cd ../build && aws s3 cp $(pwd) s3://tsw-microsites-bucket/making-better-money/ --recursive";
    package.scripts.publish = cmd.replace(regex, `s3://${process.argv[2]}/${process.argv[3]}/`);
}

fs.writeFileSync('package.json', JSON.stringify(package));
