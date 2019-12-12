This CLI is used to install and configure the [React Wordpress Microsite](https://github.com/FluentCo/React-Wordpress-Microsite), which is a reusable project for a decoupled Wordpress as a CMS and an extensible React front end.


## Installation
1. Clone this repository to your local machine by doing the following:
```
git init
git remote add origin https://github.com/FluentCo/React-WP-CLI.git
git pull origin master
```
2. Then run the installation using `sh install.sh` in the same directory you just installed the repo. You may need `sudo` privileges to run this script.


## Usage
Once installed, this CLI should be available from any directory. Simply run `react-wp [command] [arguments]`.

- `-h, --help`: Display the main help message
- `-v, --version`: Display the current version of the CLI
- `-i, --init`: Initialize a new React Wordpress Microsite project
- `-c, --configure`: Configure options for a specific environment, or configure all by passing `*` as the environment name
- `-u, --update`: Update the core code in an existing React Wordpress Microsite project
-  `-p, --plugin`: Install, Activate, Update, Deactivate, or Uninstall a plugin

## Uninstallation
This CLI can also be uninstalled by `cd /user/local/bin/.react-cli` and then running `sh uninstall.sh`.
You may need `sudo` privileges to run this script.
