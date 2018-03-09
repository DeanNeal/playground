var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var SmartBannerPlugin = require('smart-banner-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CssSourceMapPlugin = require('css-sourcemaps-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const NODE_ENV = process.env.NODE_ENV || 'dev';


const packageJSON = require('./package.json');

module.exports = {
    entry: {
        index: ['./src/app.js']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: NODE_ENV == 'prod' ? '[name][hash].js' : '[name].js',
        publicPath: ''
    },
    module: {
        loaders: [{
                loader: 'babel-loader',
                test: path.join(__dirname, 'src'),
                query: {
                    presets: 'es2015',
                    plugins: ['transform-decorators-legacy', 'transform-object-assign']
                }
            },
            {
                test: /\.(tpl|html)$/,
                loader: 'html',
                query: {
                    withImports: true
                }
            },
            {
                test: /\.scss$/,
                loader: 'css-loader!resolve-url!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            VERSION: JSON.stringify(packageJSON.version)
        }),
        new ExtractTextPlugin("[name].css", { allChunks: true }),
        // new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
            context: 'src/img',
            from: '**/*',
            to: 'img'
        }, {
            context: 'src/css',
            from: '**/*',
            to: 'css'
        }]),
        new HtmlWebpackPlugin({
            title: 'Playground',
            alwaysWriteToDisk: true,
            filename: path.resolve('index.html'),
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new HtmlWebpackHarddiskPlugin({
            alwaysWriteToDisk: true,
            filename: 'index.html'
        })
    ],
    // Create Sourcemaps for the bundle
    // devtool: 'source-map',
    resolve: {
        root: path.resolve(__dirname, 'src'),
        alias: {

        },
        extensions: ['', '.js', 'css', 'scss', 'html']
    },
    devServer: {
        port: "8080",
        contentBase: '',
        colors: true,
        historyApiFallback: true,
        hot: false,
        inline: true // reloads page after any changes
    }
};


//------PRODUCTION CONFIG--------//

if (NODE_ENV == 'prod') {
    module.exports.plugins.push(
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     mangle: {
        //         keep_fnames: true
        //     }
        // }),
        new SmartBannerPlugin({
            banner: `${packageJSON.name} ${packageJSON.version}\nMay be freely distributed under the MIT license \nAuthor: ${packageJSON.author}\nLast update: ${new Date().toLocaleString()}\n`,
            raw: false,
            entryOnly: true
        }),
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname),
            verbose: true
        })
    )
}