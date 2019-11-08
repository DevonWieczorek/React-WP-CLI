#!/usr/bin/env bash

updateCore() {
    printf "\nWARNING: Updating your project may overwrite any changes you made to the core files.\n"
    echo "Do you wish to continue? [y/n]: "
    read continue

    if [ "$continue" == "y" ] || [ "$continue" == "Y" ]
    then
        printf "\nCreating a commit to back up your work..\n"
        git commit -a -m "Pre-update backup"

        git fetch --all
        git merge -X theirs source_main/master
        git add .
        git commit -a -m "Updated core code from remote"

        printf "\nUpdate successful!\n"
    else
        printf "\nCancelling update.\n"
    fi

    exit 0
}
