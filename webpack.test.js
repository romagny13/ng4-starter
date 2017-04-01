var path = require('path'),
    webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            { test: /\.ts$/, exclude: [/node_modules/], use: ['ts-loader', 'angular2-template-loader'] },
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, use: ['null-loader'] },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, './src/app'),
                use: ['null-loader']
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, './src/app'),
                use: ['raw-loader']
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        // suppress warning https://github.com/angular/angular/issues/14898
        // or exprContextCritical: false (in module)
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, './src')
        )
    ],
    devtool: 'inline-source-map'
}

