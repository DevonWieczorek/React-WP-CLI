This CLI is used to install and configure the [React Wordpress Microsite](https://github.com/DevonWieczorek/React-Wordpress-Microsite), which is a reusable project for a decoupled Wordpress as a CMS and an extensible React front end.


## Installation
To install this library globally, run `npm i react-wp-cli -g`.

## Usage
Once installed, this CLI should be available from any directory. Simply run `react-wp [command] [arguments]`.

- `-h, --help`: Display the main help message
- `-v, --version`: Display the current version of the CLI
- `-i, --init`: Initialize a new React Wordpress Microsite project
- `-c, --configure`: Configure options for a specific environment, or configure all by passing `*` as the environment name
- `-u, --update`: Update the core code in an existing React Wordpress Microsite project
-  `-p, --plugin`: Install, Activate, Update, Deactivate, or Uninstall a plugin

## Uninstallation
This library can be uninstalled just like any other npm package by running `npm uninstall -g react-wp-cli`.
