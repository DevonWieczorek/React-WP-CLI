#!/usr/bin/env node

const chalk = require("chalk");
const shell = require("shelljs");
const inquirer = require("inquirer");
const setPublishCommand = require("./set-publish");
const utils = require("../utils");

const wordpress = require("./wordpress.questions");
const theme = require("./theme.questions");
const meta = require("./meta.questions");
const gtm = require("./gtm.questions");
const aws = require("./aws.questions");

let awsOpts = {
    bucket: '',
    directory: ''
}

let questions = [
    ...wordpress,
    ...theme,
    ...meta,
    ...gtm,
    ...aws
]

const askQuestions = (questions) => inquirer.prompt(questions);

const replaceEnvVar = (search, replacement, files) => {
    let regex = new RegExp(`^${search}=.*$`);
    let _replacement = `${search}=${replacement}`;
    shell.sed('-i', regex, _replacement, files);
}

const configure = async (env = '*') => {
    let files = [];
    if(env === '*'){
        files = ['.env.development', '.env.staging', '.env.production'];
    }
    else{
        for(let e in files) files.push(`.env.${files[e]}`)
    }

    return new Promise(async (resolve, reject) => {
        let answers = await askQuestions(questions);

        // Grab our AWS options
        awsOpts.bucket = answers.REACT_APP_DEFAULT_AWS_BUCKET;
        awsOpts.directory = answers.REACT_APP_DEFAULT_AWS_DIRECTORY;

        Object.keys(answers).map(key => {

            // Replace double quotes with single quotes
            answers[key] = answers[key].replace(/"/g, "'");

            // Wrap in quotes
            if(answers[key].slice(0,1) === '#' || answers[key].indexOf(' ') !== -1) answers[key] = `"${answers[key]}"`;

            replaceEnvVar(key, answers[key], files);
        })
    })
}

const runConfiguration = () => {
    return new Promise((resolve, reject) => {
        utils.cdProjectRoot();

        configure()
            .then(() => {
                setPublishCommand(awsOpts.bucket, awsOpts.directory)
                    .then(() => resolve())
                    .catch(e => reject(e));
            })
            .catch(e => reject(e));
    });
}

module.exports = runConfiguration;
