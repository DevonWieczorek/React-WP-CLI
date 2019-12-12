#!/usr/bin/env node

// https://codeburst.io/building-a-node-js-interactive-cli-3cb80ed76c86
const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");
const shell = require("shelljs");
const find_folder = require("node-find-folder");

const PLUGIN_ROOT = new find_folder("plugins")[0];
shell.cd(`${PLUGIN_ROOT}`);
console.log(`Changed to ${shell.pwd()}`);

const PLUGIN_INDEX = `index.js`;
const PLUGIN_MANIFEST = `plugins.json`;
const DEFAULT_REPO = 'https://github.com/FluentCo/React-Wordpress-Microsite-Plugins.git';

let busy = false;
let plugins = JSON.parse(fs.readFileSync(PLUGIN_MANIFEST));
let commands = process.argv.slice(2, process.argv.length);

const wait = (time) => new Promise((resolve) => { setTimeout(() => { resolve() }, time) });

const confirm = (name, question) => {
    return inquirer.prompt({name: name, type: 'confirm', message: question});
}

const downloadPlugin = (plugin, repo, repoPath) => {
    return new Promise((resolve, reject) => {
        busy = true;

        const cmd = `
            git init
            git remote add tmp_${plugin} ${repo}
            git fetch tmp_${plugin}
            git checkout tmp_${plugin}/master -- ${repoPath}
            git remote rm tmp_${plugin}
        `;

        shell.exec(cmd, (code, stdout, stderr) => {
            busy = false;
            (code === 0) ? resolve(stdout, code) : reject(stderr, code);
        }, {silent: true})
    });
}

const errorInstallingPlugin = (err, code, plugin, repo, repoPath) => {
    console.log(`Error installing ${plugin} from ${repo} ${repoPath}:`);
    console.log(err);
    console.log(chalk.red(`Exited with status ${code}`));
}

const tryInstallPlugin = (plugin, repo, repoPath) => {
    if(!plugin){
        throw new Error(chalk.red(`No plugin specified.`));

        // TODO: implement
        installAllFromJSON(plugin, repo, repoPath);
        // return false;
    }

    busy = true;
    console.log(chalk.yellow(`Checking to see if ${plugin} is already installed...`));
    if(shell.find(plugin).length > 0){
        console.log(chalk.yellow(`${plugin} is already installed.`));
        confirm('update', 'Would you like to update it?')
            .then(res => { if(res.update) updatePlugin(plugin, repo, repoPath) })
    }
    else{
        installPlugin(plugin, repo, repoPath);
    }
}

const installAllFromJSON = (plugin, repo, repoPath) => {
    let stack = Object.keys(plugins.plugins).map(plugin => {
        let _plugin = plugins.plugins[plugin];
        return {name: _plugin.name, repo: _plugin.repo, path: _plugin.path};
    });

    let executeCallStack = () => {
        if(!busy && stack.length > 0){
            let item = stack.pop();
            tryInstallPlugin(item.name, item.repo, item.path);
            if(stack.length > 0) executeCallStack();
        }
        else{ executeCallStack() }
    }
    executeCallStack();
}

const installPlugin = (plugin, repo, repoPath) => {
    downloadPlugin(plugin, repo, repoPath)
        .then((res, code) => {
            plugins.version = plugins.version + 1;

            plugins.last_modified = Date.now();

            plugins.plugins[plugin] = {
                name: plugin,
                repo: repo,
                path: repoPath
            }

            fs.writeFileSync(PLUGIN_MANIFEST, JSON.stringify(plugins));

            console.log(chalk.green(`${plugin} successfully installed.`));
            confirm('activate', 'Would you like to activate it?')
                .then(res => { if(res.activate) tryActivatePlugin(plugin) })
        })
        .catch((err, code) => { errorInstallingPlugin(err, code, plugin, repo, repoPath) });
}

const isPluginActive = (plugin) => {
    let index = fs.readFileSync(PLUGIN_INDEX).toString();
    let regex = new RegExp(plugin + '([\s|\/|\'|"])', 'g');
    return regex.test(index);
}

const tryActivatePlugin = (plugin) => {
    if(isPluginActive(plugin)){
        console.log(chalk.yellow(`${plugin} is already active.`));
        return false;
    }
    else if(shell.find(plugin).length === 0){
        throw new Error(chalk.red(`${plugin} does not exist in the Plugins directory.`))
    }
    else{
        activatePlugin(plugin);
    }
}

const activatePlugin = (plugin) => {
    fs.appendFileSync(PLUGIN_INDEX, `\nexport * from './${plugin}';`);
    console.log(chalk.green(`${plugin} activated!`))
}

const updatePlugin = (plugin, repo, repoPath) => {
    downloadPlugin(plugin, repo, repoPath)
        .then((res, code) => {
            plugins.version = plugins.version + 1;
            plugins.last_modified = Date.now();
            fs.writeFileSync(PLUGIN_MANIFEST, JSON.stringify(plugins));
            console.log(chalk.green(`${plugin} successfully updated.`));
        })
        .catch((err, code) => { errorInstallingPlugin(err, code, plugin, repo, repoPath) });
}

const tryDeactivatePlugin = (plugin) => {
    if(!isPluginActive(plugin)){
        console.log(chalk.yellow(`${plugin} is not currently active.`));
        return false;
    }
    else{
        confirm('deactivate', `Are you sure you want to deactivate ${plugin}?`)
            .then(res => { if(res.deactivate) deactivatePlugin(plugin) })
    }
}

const deactivatePlugin = (plugin) => {
    let regex = new RegExp(plugin + '([\s|\/|\'|"])', 'g');
    let index = fs.readFileSync(PLUGIN_INDEX).toString();
    index = index.split('\n').filter(i => (!regex.test(i) && i !== ''));

    fs.writeFileSync(PLUGIN_INDEX, index.join('\n'));
    console.log(chalk.green(`${plugin} deactivated.`))
}

const tryUninstallPlugin = (plugin) => {
    if(shell.find(plugin).length === 0){
        throw new Error(chalk.red(`${plugin} does not exist in the Plugins directory.`))
    }

    confirm('uninstall', `Are you sure you want to uninstall ${plugin}?`)
        .then(res => { if(res.uninstall) uninstallPlugin(plugin)  })
}

const uninstallPlugin = (plugin) => {
    if(isPluginActive(plugin)) deactivatePlugin(plugin);

    shell.rm('-r', plugin);

    plugins.version = plugins.version + 1;
    plugins.last_modified = Date.now();
    delete plugins.plugins[plugin];

    fs.writeFileSync(PLUGIN_MANIFEST, JSON.stringify(plugins));
    console.log(chalk.green(`${plugin} successfully uninstalled.`));
}

const run = () => {
    let flag = commands[0];
    let plugin = commands[1];
    let repo = commands[2] || DEFAULT_REPO;
    let repoPath = commands[3] || plugin;

    switch(commands[0]){
        case '-i':
        case '--install':
            tryInstallPlugin(plugin, repo, repoPath);
            break;
        case '-a':
        case '--activate':
            tryActivatePlugin(plugin);
            break;
        case '-D':
        case '--deactivate':
            tryDeactivatePlugin(plugin);
            break;
        case '-u':
        case '--update':
            updatePlugin(plugin, repo, repoPath);
            break;
        case '-Un':
        case '--uninstall':
            confirm('uninstall', `Are you sure you want to uninstall ${plugin}?`)
                .then(res => { if(res.uninstall) uninstallPlugin(plugin)  })
            break;
        default:
            throw new Error(chalk.red(`${commands[0]} is an invalid argument.`));
    }
}
run();
