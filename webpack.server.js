const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base')

const serverConfig = {
    // build bundle for nodeJs
    target: "node",

    // Entry point
    entry: "./src/index.js",

    // output point
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    }
}

module.exports = merge(baseConfig, serverConfig);