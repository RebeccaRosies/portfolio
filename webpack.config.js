const path = require('path');

module.exports = {
    // entry: ['./src/index.js', './src/savedInput.js'],
    entry: {
        script: './src/script.js',
        portfolio: './src/portfolio.js',
        portfolioM: './src/portfolioM.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/src'),
        filename: '[name].js'
    },
    mode: 'development'
}