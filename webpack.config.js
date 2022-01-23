const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    target: 'web',
    devtool: 'source-map',
    mode: "development",
    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
    },
    plugins: [
        // Re-generate index.html with injected script tag.
        // The injected script tag contains a src value of the
        // filename output defined above.
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            favicon: "./public/favicon.png",
        }),
    ],
}

if (process.env.NODE_ENV === "production") {
    delete config.devtool;
    config.mode = "production";
}

module.exports = config;