#!/usr/bin/env bash

# Copy the contents of this directory (recursively) to the bin
chmod +x ./react-wp-cli.sh
sudo mkdir /usr/local/bin/.react-wp
sudo cp -rp ./ /usr/local/bin/.react-wp
printf "\nCopied successfully to /usr/local/bin/.react-wp/:\n"
ls -a /usr/local/bin/.react-wp

# Install node dependencies
printf"\nInstalling dependencies...\n"
npm install

# Create alias for our CLI
printf"\nCreating alias...\n"
echo "" >> ~/.bash_profile
alias react-wp="/usr/local/bin/.react-wp/react-wp-cli.sh $@"
echo 'alias react-wp="/usr/local/bin/.react-wp/react-wp-cli.sh $@"' >> ~/.bash_profile

# Reload the bash_profile so the changes are available
. ~/.bash_profile

# Print the help screen
printf "\nreact-wp cli installed!\n"
react-wp --help

# Remove this directory after copying to root
rm -rf $(pwd)
