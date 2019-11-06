#!/usr/bin/env bash
fetchRepo() {
    git init
    git remote add origin <REPO_LOCATION>
    git pull origin master
    git add .
    git commit -a -m "Initial Commit"
}
