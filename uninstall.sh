#!/usr/bin/env bash

# Remove the directory from the bin
sudo rm -Rf /usr/local/bin/.react-wp

# Unalias react-wp
unalias react-wp

# Remove our alias from .bash_profile
sed -i "" "s|alias react-wp=\"/usr/local/bin/.react-wp/react-wp-cli.sh \$@\"| |g" ~/.bash_profile

# Refresh .bash_profile
. ~/.bash_profile

printf "\nreact-wp cli uninstalled.\n"
