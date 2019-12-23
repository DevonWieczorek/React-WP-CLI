#! /usr/bin/env node

const fs = require('fs');
const chalk = require("chalk");
const shell = require("shelljs");

const setPublishCommand = (bucket, directory) => {
    return new Promise((resolve, reject) => {
        // Already in project root when this gets called
        let raw = fs.readFileSync('package.json');
        let package = JSON.parse(raw);
        let regex = /(s3:\/\/)(.*?)(\/)(.*?)(\/)/gi;

        try{
            let _pub = package.scripts.publish;
            package.scripts.publish = _pub.replace(regex, `s3://${bucket}/${directory}/`);
        }
        catch(e){
            let cmd = "cd $(npm root) && cd ../build && aws s3 cp $(pwd) s3://tsw-microsites-bucket/making-better-money/ --recursive";
            package.scripts.publish = cmd.replace(regex, `s3://${bucket}/${directory}/`);
        }

        fs.writeFile('package.json', JSON.stringify(package), (err) => {
            if(err) reject(err);
            console.log(chalk.green('package.json updated!'))
            resolve();
        });
    });
}

module.exports = setPublishCommand;
