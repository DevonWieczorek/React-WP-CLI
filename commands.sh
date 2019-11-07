#!/usr/bin/env bash

# Example CLI: https://github.com/sorens/bash-cli-example/blob/master/sample-cli

declare -i offset=6
declare -i min_column=30
declare -a command_short=()
declare -a command_long=()
declare -a command_description=()
declare -i command_count=0

# Build the command structure: short format, long format, description
command() {
    command_short[$command_count]=$1
    command_long[$command_count]=$2
    command_description[$command_count]=$3
    command_count+=1
}

# Print and format an individual command for --help
print_command() {
    declare -i padding=$1
    local short_command=$2
    local long_command=$3
    local desc=$4
    declare -i remaining_padding=0

    # Check if we have a short command
    if [[ -z $short_command ]];
    then
        short_command=""
    else
        short_command="${short_command},"
        short_command=$(printf '%-5s' "$short_command")
    fi

    long_command=$(printf '%s' "$long_command")

    # Calculate how much padding we'll need for the help section
    declare temp
    temp="$(printf "  %s%s" "$short_command" "$long_command")"
    remaining_padding=padding-${#temp}
    printf "%s" "$temp"

    # Pad for the help section
    local i
    for ((i=0; i<remaining_padding; i++))
    do
        printf " "
    done

    # Print the help section
    printf '%-50s\n' "$desc"
}

# Loop through all available commands (formatted) for --help
print_all_commands() {
    declare -i check=0
    # How much room do we need for long commands?
    declare -i column=min_column
    declare -i i=0

    for ((; i < command_count; i++))
    do
        check=${#command_long[$i]}+${#command_short[$i]}+offset
        if (( column < check )); then
            column=check
        fi
    done

    # Print all the commands now
    for ((i=0; i<command_count; i++))
    do
        print_command $column "${command_short[$i]}" "${command_long[$i]}" "${command_description[$i]}"
    done
}

# Print all commands and usage info
help() {
    printf "\nUsage: $APP_NAME [options...]\n\n"

    # Add/remove/update commands here to match commands that your cli supports
    command "-h" "--help" "Display this help message"
    command "-v" "--version" "Display the version"
    command "-i" "--init" "Initialize a new project"
    command "-c" "--configure" "Configure options for environment(s)"
    command "" "" "     Usage: $APP_NAME [environment || *]"

    # Boiler plate, do not remove
    print_all_commands
    echo ""

    exit 0
}

version() {
    printf "\n$APP_NAME cli\nVersion: $APP_VERSION\n\n"
    exit 0
}

init() {
    # Pull in project from github
    fetchRepo

    # Program Info
    welcome

    # Create .env files from .config.env
    makeFiles $env

    # Configure .env files
    configure $1

    # Build the project and start it
    build

    exit 0
}

# Error message if no arguments given
min_help() {
    echo "Try '$APP_NAME --help' for proper usage"
    exit 1
}
