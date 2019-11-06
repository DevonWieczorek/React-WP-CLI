#!/usr/bin/env bash

makeAll(){
    ENVIRONMENTS=('development' 'staging' 'production')
    for i in "${ENVIRONMENTS[@]}"; do cat .config.env > ".env.$i"; done
}

makeFiles() {
    if [[ ! -z $env ]]
    then
        if [[ $env = '*' ]]
        then
            makeAll
        else
            cat .config.env > ".env.$env"
        fi
    else
        makeAll
    fi
}
