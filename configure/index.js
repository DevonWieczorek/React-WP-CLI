#!/usr/bin/env node

const chalk = require("chalk");
const inquirer = require("inquirer");
const setPublishCommand = require("./set-publish");
const utils = require("../utils");

const wordpress = require("./wordpress.questions");
const theme = require("./theme.questions");
const meta = require("./meta.questions");
const gtm = require("./gtm.questions");
const aws = require("./aws.questions");

let aws = {
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
    shell.sed('-i', `/^${search}=.*$/`, `${search}=${replacement}`, files);
}

const configure = async (env = '*') => {
    let files = [];
    if(env === '*'){
        files = ['.env.development', '.env.staging', '.env.production'];
    }
    else{
        for(let e in env) files.push(`.env.${env[e]}`)
    }

    return new Promise(async (resolve, reject) => {
        let answers = await askQuestions(questions);

        // Grab our AWS options
        aws.bucket = answers.REACT_APP_DEFAULT_AWS_BUCKET;
        aws.directory = answers.REACT_APP_DEFAULT_AWS_DIRECTORY;

        Object.keys(answers).map(key => {

            // Replace double quotes with single quotes
            answers[key] = answers[key].replace(/"/g, "'");

            // Wrap in quotes
            if(answers[key].slice(0,1) === '#' || answers[key].indexOf(' ') !== -1) answers[key] = `"${answers[key]}"`;

            console.log(key, answers[key])
            //replaceEnvVar(key, answers[key], env);
        })
    })
}

const runConfiguration = () => {
    utils.cdProjectRoot();

    configure()
        .then(() => { setPublishCommand(aws.bucket, aws.directory) })
        .catch(e => { console.log(chalk.red(e)) });
}

module.exports = runConfiguration;
