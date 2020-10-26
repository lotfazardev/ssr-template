const path = require('path')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base')

const clientConfig = {
    // Entry point
    entry: "./src/client/client.js",

    // output point
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    }
}

module.exports = merge(baseConfig, clientConfig);