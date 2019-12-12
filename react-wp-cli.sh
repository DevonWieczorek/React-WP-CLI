#!/usr/bin/env bash

wd="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source $wd/commands.sh
source $wd/clone-repo.sh
source $wd/welcome.sh
source $wd/mkfiles.sh
source $wd/configure.sh
source $wd/npm.sh
source $wd/plugins.sh
source $wd/update-core.sh

# CLI Info
APP_NAME="react-wp"
APP_DESCRIPTION="CLI for updating .env files to configure new headless Wordpress sites"
APP_VERSION="0.5.2"

# Flags
HELP=false
VERSION=false
CONFIGURE=false
INIT=false
UPDATE=false
PLUGINS=false

# Variables
env="*"
AWS_BUCKET=""
AWS_DIRECTORY=""

# Loop through arguments and set appropriate flags as true
for i in "$@"
do
    case $i in
    -h|--help)
        # boiler plate, do not remove
        HELP=true
        shift
    ;;
    -v|--version)
        # boiler plate, do not remove
        VERSION=true
        shift
    ;;
    -i|--init)
        INIT=true
        shift
    ;;
    -c|--configure)
        CONFIGURE=true
        shift
        env=$1
    ;;
    -u|--update)
        UPDATE=true
        shift
    ;;
    -p|--plugin)
        PLUGINS=true
        shift # Drop the --plugin arg
        PLUGIN_ARGS="$@" # Capture the remaining args
        for i in "$@"; do shift; done # Shift the remaining args to prevent errors
    ;;
  esac
done

# Based on whatever flags were turned on, run those commands
if $HELP; then help; fi

if $VERSION; then version; fi

if $INIT; then init $env; fi

if $CONFIGURE; then configure $env; fi

if $UPDATE; then updateCore; fi

if $PLUGINS; then handle_plugins $PLUGIN_ARGS; fi

# We reached the end with no recognizable command
if [[ $* != '' ]]
then
    echo "Unknown Command: '$*'"
    min_help
fi
