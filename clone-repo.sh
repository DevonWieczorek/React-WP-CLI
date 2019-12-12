#!/usr/bin/env bash
fetchRepo() {
    git init
    git remote add source_main https://github.com/FluentCo/React-Wordpress-Microsite.git
    git remote add source_plugins https://github.com/FluentCo/React-Wordpress-Microsite-Plugins.git
    git pull source_main master
    printf "\nFetched code from repository.\n"
    git add .
    git commit -a -m "Initial Commit"
}
