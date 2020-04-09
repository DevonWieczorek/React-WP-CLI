#!/usr/bin/env node

module.exports = [
    {
        name: 'REACT_APP_DEFAULT_AWS_BUCKET',
        type: 'input',
        message: 'Default AWS Bucket',
        default: 'tsw-microsites-bucket'
    },
    {
        name: 'REACT_APP_DEFAULT_AWS_DIRECTORY',
        type: 'input',
        message: 'Default Bucket Directory',
        default: (answers) => answers.REACT_APP_DEFAULT_SITENAME.toLowerCase().replace(/ /g, '-')
    }
]
