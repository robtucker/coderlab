const webpack = require('webpack');

const helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

/**
 * Merge in the development environment variables
 */
const PRODUCTION_GLOBALS = helpers.mergeEnvironment({
    ENV: ENV,
    LOG_LEVEL: 300
});

let externals = [
    'react',
    'react-dom',
    'react-router',
    'redux',
    'lodash',
];

/**
 * Merge in the development webpack config properties
 */
module.exports = helpers.mergeWebpackConfig({
    plugins: [
        new webpack.DefinePlugin(helpers.configureAppGlobals(PRODUCTION_GLOBALS))
    ]
});