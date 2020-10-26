const path = require('path')

module.exports = {
    // Entry point
    entry: "./src/client/App.js",

    // output point
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },

    // run babel on every file it run through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
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