const path = require('path');

const config = {
    entry: {
        pageOne: './src/pageOne/index.js', // 怎么跟HTML融合？
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
    },
    output: {
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            {test: /\.txt$/, use: 'raw-loader'}
        ]
    }
};

module.exports = config;
