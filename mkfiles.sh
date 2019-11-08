#!/usr/bin/env bash

wd="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

makeAll(){
    ENVIRONMENTS=('development' 'staging' 'production')
    for i in "${ENVIRONMENTS[@]}"; do cat $wd/.config.env > "$(pwd)/.env.$i"; done
}

makeFiles() {
    if [[ ! -z $env ]]
    then
        if [[ $env = '*' ]]
        then
            makeAll
        else
            cat $wd/.config.env > "$(pwd)/.env.$env"
        fi
    else
        makeAll
    fi
}
