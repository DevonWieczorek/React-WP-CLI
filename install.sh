#!/usr/bin/env bash

# Copy the contents of this directory (recursively) to the root
mkdir ~/.react-wp
cp -p * ~/.react-wp

# Create alias for our CLI
echo "" >> ~/.bash_profile
echo 'alias react-wp="sh ~/.react-wp/cli.sh"' >> ~/.bash_profile

# Reload the bash_profile so the changes are available
. ~/.bash_profile

# Print the help screen
printf "\nreact-wp cli installed!\n"
react-cli --help

# Remove this directory after copying to root
rm -rf $(pwd)
