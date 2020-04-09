#!/usr/bin/env node

module.exports = [
    {
        name: 'REACT_APP_DEFAULT_SITENAME',
        type: 'input',
        message: 'Default Meta Sitename:',
        default: 'Making Better Money'
    },
    {
        name: 'REACT_APP_DEFAULT_TITLE',
        type: 'input',
        message: 'Default Meta Title',
        default: (answers) => answers.REACT_APP_DEFAULT_SITENAME
    },
    {
        name: 'REACT_APP_DEFAULT_DESCRIPTION',
        type: 'input',
        message: 'Default Meta Description',
        default: (answers) => answers.REACT_APP_DEFAULT_SITENAME
    },
    {
        name: 'REACT_APP_DEFAULT_KEYWORDS',
        type: 'input',
        message: 'Default Meta Keywords',
        default: ' '
    },
    {
        name: 'REACT_APP_DEFAULT_SUBJECT',
        type: 'input',
        message: 'Default Meta Subject',
        default: ' '
    },
    {
        name: 'REACT_APP_DEFAULT_ROBOTS',
        type: 'input',
        message: 'Default Meta Robots [noindex, nofollow]:',
        default: 'noindex, nofollow'
    },
    {
        name: 'REACT_APP_DEFAULT_TYPE',
        type: 'input',
        message: 'Default Meta Type:',
        default: ' '
    },
    {
        name: 'REACT_APP_DEFAULT_URL',
        type: 'input',
        message: 'Default Site URL:',
        default: (answers) => `https:\/\/${answers.REACT_APP_DEFAULT_SITENAME.toLowerCase().replace(/ /g, '')}.com`
    }
]
