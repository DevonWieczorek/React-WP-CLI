#!/usr/bin/env bash
fetchRepo() {
    git init
    git remote add origin https://github.com/FluentCo/React-Wordpress-Microsite.git
    git pull origin master
    git add .
    git commit -a -m "Initial Commit"
}
