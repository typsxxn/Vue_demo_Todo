const path = require('path')
const creatVueLoaderOptions = require('./vue-loader.config')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    mode: process.env.NODE_ENV || 'production',
    target: 'web',
    // 声明入口
    entry: path.join(__dirname, '../client/client-entry.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, '../public'),
        publicPath: 'http://127.0.0.1:8000/public/'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: creatVueLoaderOptions(isDev)
                }]
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'resources/[path][name].[hash:8].[ext]'
                        }
                    }

                ]
            }
        ]

    }
};


module.exports = config
