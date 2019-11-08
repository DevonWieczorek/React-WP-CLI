#!/usr/bin/env bash

welcome(){
    clear
    echo ""
    echo "############################################################"
    echo " $APP_NAME cli"
    echo " Version: $APP_VERSION"
    echo " $APP_DESCRIPTION"
    echo ""
    echo " Reminders:"
    echo " - All paths should be relative"
    echo " - Colors and font families should be valid CSS"
    echo " - All strings with spaces spaces should be double-quoted"
    echo "   (We are in the command line after all!)"
    echo "############################################################"
    echo ""
}
