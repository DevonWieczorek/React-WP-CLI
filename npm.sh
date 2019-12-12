#!/usr/bin/env bash

build() {
    printf "\nInstalling npm packages...\n"
    npm install

    printf "\nRunning Build...\n"
    npm run-script build

    printf "\nStarting App...\n"
    npm start

    exit 0
}
