module.exports = function (path) {
    return {
        devtool: 'cheap-module-eval-source-map',
        module: {
            rules: [{
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                include: path
            }]
        }
    }
};