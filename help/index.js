#!/usr/bin/env node

const chalk = require("chalk");
const menu = require("./menus.help");
const utils = require("../utils");
const cli = require("../types");

const help = () => {
    let headers = {
        main: `Usage: ${chalk.yellow(`${cli.APP_NAME} [flag] <options...>`)}`,
        help: chalk.yellow(`${cli.APP_NAME} [--help | -h]`),
        version: chalk.yellow(`${cli.APP_NAME} [--version | -v]`),
        init: chalk.yellow(`${cli.APP_NAME} [--init | -i]`),
        configure: chalk.yellow(`${cli.APP_NAME} [--configure | -c] [environment | *]`),
        update: chalk.yellow(`${cli.APP_NAME} [--update | -u]`),
        plugin: chalk.yellow(`${cli.APP_NAME} [--plugin | -p] [flag] <options>`)
    }

    for(let i in Object.keys(headers)){
        let command = Object.keys(headers)[i];

        (command !== 'main') ? console.log('\n' + chalk.green(`--${command}`)) : console.log('\n');
        console.log(headers[command]);
        utils.prettyColumns([menu[i]]);
    }
    console.log('\n');
}

module.exports = help;
