#! /usr/bin/env node

const fs = require('fs');

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

        fs.writeFileSync('package.json', JSON.stringify(package));
        resolve();
    });
}

module.exports = setPublishCommand;
