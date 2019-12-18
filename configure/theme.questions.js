#!/usr/bin/env node

module.exports = [
    {
        name: 'REACT_APP_DEFAULT_LOGO_MAIN=${PUBLIC_URL}/',
        type: 'input',
        message: 'Main Logo Source (Relative Path)',
        default: 'logo-main.svg'
    },
    {
        name: 'REACT_APP_DEFAULT_LOGO_ALT=${PUBLIC_URL}/',
        type: 'input',
        message: 'Alt Logo Source (Relative Path)',
        default: 'logo-white.svg'
    },
    {
        name: 'REACT_APP_DEFAULT_LOGO_ICON=${PUBLIC_URL}/',
        type: 'input',
        message: 'Icon Logo Source (Relative Path)',
        default: 'short-logo.svg'
    },
    {
        name: 'REACT_APP_DEFAULT_PRIMARY_THEME_COLOR',
        type: 'input',
        message: 'Primary Theme Color (Valid CSS)',
        default: '#19405E'
    },
    {
        name: 'REACT_APP_DEFAULT_SECONDARY_THEME_COLOR',
        type: 'input',
        message: 'Secondary Theme Color (Valid CSS)',
        default: '#196B93'
    },
    {
        name: 'REACT_APP_DEFAULT_TERTIARY_THEME_COLOR',
        type: 'input',
        message: 'Tertiary Theme Color (Valid CSS)',
        default: '#FFAE34'
    },
    {
        name: 'REACT_APP_DEFAULT_HEADER_TEXT_COLOR',
        type: 'input',
        message: 'Header Text Color (Valid CSS)',
        default: '#494949'
    },
    {
        name: 'REACT_APP_DEFAULT_BODY_TEXT_COLOR',
        type: 'input',
        message: 'Body Text Color (Valid CSS)',
        default: '#494949'
    },
    {
        name: 'REACT_APP_DEFAULT_HEADER_FONT',
        type: 'input',
        message: 'Header Font Family (Valid CSS)',
        default: '"Poppins", sans-serif'
    },
    {
        name: 'REACT_APP_DEFAULT_BODY_FONT',
        type: 'input',
        message: 'Body Font Family (Valid CSS)',
        default: '"Open Sans", sans-serif'
    }
]
