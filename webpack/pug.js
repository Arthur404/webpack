const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (path) {
    return {
        module: {
            rules: [{
                test: /\.pug$/,
                loader: 'pug-loader'
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({template: path + '/index.pug'})
        ]
    }
};