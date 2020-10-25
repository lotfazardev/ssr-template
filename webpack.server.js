const path = require('path')

module.exports = {
    // build bundle for nodeJs
    target: "node",

    // Entery point
    entery: "./src/index.js",

    // output point
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },

    // run babel on every file it run through
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                excluder: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {
                            target: {
                                browsers: ['last 2 versions']
                            }
                        }]
                    ]
                }
            }
        ]
    }
}