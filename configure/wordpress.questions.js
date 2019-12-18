#!/usr/bin/env node

module.exports = [
    {
        name: 'REACT_APP_DEFAULT_ENDPOINT',
        type: 'input',
        message: 'Default API Endpoint',
        default: 'https://thesmartwallet.com/wp-json/wp/v2'
    },
    {
        name: 'REACT_APP_DEFAULT_SITETAG',
        type: 'input',
        message: 'Default Wordpress Tag',
        default: 'microsite'
    },
    {
        name: 'REACT_APP_DEFAULT_TAG_ID',
        type: 'input',
        message: 'Default Wordpress Tag ID',
        default: '1355'
    },
    {
        name: 'REACT_APP_DEFAULT_CATEGORY_IDS',
        type: 'input',
        message: 'Default Wordpress Category IDs (Comma Separated - No Spaces)',
        default: '30,31,33'
    },
    {
        name: 'REACT_APP_DEFAULT_PRIVACY_POLICY_ID',
        type: 'input',
        message: 'Default Privacy Policy Page ID',
        default: '711'
    },
    {
        name: 'REACT_APP_DEFAULT_TERMS_CONDITIONS_ID',
        type: 'input',
        message: 'Default Terms & Conditions Page ID',
        default: '713'
    },
    {
        name: 'REACT_APP_DEFAULT_POSTS_PER_PAGE',
        type: 'input',
        message: 'Max Posts per Page',
        default: '12'
    }
]
