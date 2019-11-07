#!/usr/bin/env bash

source commands.sh
source clone-repo.sh
source welcome.sh
source mkfiles.sh
source configure.sh
source npm.sh
source update-core.sh

# CLI Info
APP_NAME="react-wp"
APP_DESCRIPTION="CLI for updating .env files to configure new headless Wordpress sites"
APP_VERSION="0.2.0"

# Flags
HELP=false
VERSION=false
CONFIGURE=false
INIT=false
UPDATE=false

# Variables
env="*"

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
  esac
done

# Based on whatever flags were turned on, run those commands
if $HELP; then help; fi

if $VERSION; then version; fi

if $INIT; then init $env; fi

if $CONFIGURE; then configure $env; fi

if $UPDATE; then updateCore; fi

# We reached the end with no recognizable command
echo "Unknown Command: '$*'"
min_help
