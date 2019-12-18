#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const shell = require("shelljs");
const confirm = require("../utils").confirm;

const updateCore = () => {
    confirm('update', '\nWARNING: Updating your project may overwrite any changes you made to the core files.\nAre you sure you want to continue?')
        .then(res => {
            if(res.update){
                console.log('\nCreating a commit to back up your work..\n');

                shell.exec(`
                    git commit -a -m "Pre-update backup"
                    git fetch --all
                    git merge -X theirs source_main/master
                    git add .
                    git commit -a -m "Updated core code from remote"
                `);

                console.log(shell.green('\nUpdate successful!\n'));
            }
            else{
                console.log(chalk.yellow('\nCancelling update.\n'))
            }
        })
}

module.exports = updateCore;
