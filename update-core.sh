#!/usr/bin/env bash

updateCore() {
    printf "\nWARNING: Updating your project may overwrite any changes you made to the core files.\n"
    read -p "Do you wish to continue? [y/n]: " $continue

    if [ $continue == 'y' ] || [ $continue == 'Y' ]
    then
        printf "\nCreating a commit to back up your work..\n"
        git commit -a -m "Pre-update backup"

        git fetch --all
        git merge -X theirs source_main/master
        git add .
        git commit -a -m "Updated core code from remote"
    else
        printf "\nCancelling update."
        exit 0
    fi

}
