/**
 * Created by reven on 10.03.2016.
 */
var path = require('path');
var webpack = require('webpack');

var entry = [
    './src/index'
];

module.exports = {
    devtool: 'eval',
    entry: entry,
    output: {
        path: path.join(__dirname + '/public', 'js'),
        filename: 'app.js',
        publicPath: '/js/'
    },
    plugins: [
        /*new webpack.HotModuleReplacementPlugin(),*/
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            Component: 'react/lib/ReactComponent.js'
        })
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2|html|json)/,
                loader: 'file?name=[path][name].[ext]?[hash]'
            }
        ]
    },
};
