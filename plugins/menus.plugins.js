#!/usr/bin/env node

let main = [
    {
        0: {
            content: '--install'
        },
        1: {
            content: 'Installs a plugin and adds it to plugins.json',
            padding: 0
        }
    },
    {
        0: {
            content: '--activate'
        },
        1: {
            content: 'Adds plugin export to plugins/index.js',
            padding: 0
        }
    },
    {
        0: {
            content: '--update'
        },
        1: {
            content: 'Pulls in the newest plugin code',
            padding: 0
        }
    },
    {
        0: {
            content: '--deactivate'
        },
        1: {
            content: 'Removes the plugin\'s exports from plugins/index.js',
            padding: 0
        }
    },
    {
        0: {
            content: '--uninstall'
        },
        1: {
            content: 'Deletes all plugin files & removes the plugin from plugins.json',
            padding: 0
        }
    },
    {
        0: {
            content: '--help'
        },
        1: {
            content: 'Prints this help menu',
            padding: 0
        }
    }
];

let install = [
    {
        0: {
            content: 'plugin'
        },
        1: {
            content: 'The name of the plugin to install',
            padding: 0
        }
    },
    {
        0: {
            content: 'repository'
        },
        1: {
            content: 'The repository (if not default) to install from',
            padding: 0
        }
    },
    {
        0: {
            content: 'path'
        },
        1: {
            content: 'The path to the plugin inside of the repository',
            padding: 0
        }
    }
];

let activate = [
    {
        0: {
            content: 'plugin'
        },
        1: {
            content: 'The name of the plugin to activate',
            padding: 0
        }
    }
];

let update = [
    {
        0: {
            content: 'plugin'
        },
        1: {
            content: 'The name of the plugin to update',
            padding: 0
        }
    }
];

let deactivate = [
    {
        0: {
            content: 'plugin'
        },
        1: {
            content: 'The name of the plugin to dectivate',
            padding: 0
        }
    }
];

let uninstall = [
    {
        0: {
            content: 'plugin'
        },
        1: {
            content: 'The name of the plugin to uninstall',
            padding: 0
        }
    }
];

module.exports = {
    main,
    install,
    activate,
    update,
    deactivate,
    uninstall
}
