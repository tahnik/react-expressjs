const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = [
    {
    entry: './app.js',
    output: {
        path: './',
        filename: 'server.bundle.js',
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
    //If you want to minify your files uncomment this
    // ,
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false,
    //         },
    //         output: {
    //             comments: false,
    //         },
    //     }),
    // ]
    },
    {
        entry: './views/index.js',
        output: {
            path: './bin',
            filename: 'app.bundle.js',
        },
        module: {
            loaders: [{
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
        //If you want to minify your files uncomment this
        // ,
        // plugins: [
        //     new webpack.optimize.UglifyJsPlugin({
        //         compress: {
        //             warnings: false,
        //         },
        //         output: {
        //             comments: false,
        //         },
        //     }),
        // ]
    }
]
