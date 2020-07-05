var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//清空基本配置的插件列表
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig,{
    output: {
        publicPath:'/dist',

        //将入口文件重命名为带有20位hash值的唯一文件
        filename: '[name].[hash].js'
    },
    plugins:[
        new ExtractTextPlugin({
            //提取css,重命名为带有20位hash值的唯一文件
            filename: '[name][hash].css',
            allChunks:true
        }),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'production'
            }
        }),
        new HtmlWebpackPlugin({
            filename: '../index_prod.html',
            template:'./index.ejs',
            inject:false
        }),
        new VueLoaderPlugin()
    ]
})