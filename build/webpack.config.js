
const webpackConfig = {
    // page: {
    //     index: './src/pages/index/index.js',
    //     first: './src/pages/first/first.js',
    // },
    // ....
    entry: {},
    plugins: []
}

module.exports = webpackConfig;

/**
 * some auto-create-function
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const glob = require('glob')

const isProduction = process.env.NODE_ENV === 'production'

// https://juejin.im/post/5a8453ae6fb9a0636263d968

// https://segmentfault.com/a/1190000005920125
// 获取指定路径下的入口文件
const getEntries = function (globPath) {
    let files = glob.sync(globPath)
    let entries = {}

    files.forEach(function (filePath) {
        // 取倒数第二层（views下面文件夹）做包名
        let split = filePath.split('/')
        let name = split[split.length - 2]

        entries[name] = './' + filePath;
    })

    return entries;
}

let entries = getEntries('src/pages/**/*.js');

Object.keys(entries).forEach(function (name) {
    
    // 每个页面生成一个entry，如果需要hotupdate，在这里修改entry
    webpackConfig.entry[name] = entries[name]

    // 每个页面生成一个html
    let plugin = new HtmlWebpackPlugin({
        // 生成出来的文件名
        filename: name + '.html',

        // 每个html的模板
        template: path.resolve(__dirname, '../src/pages/', name, name + '.html'),

        // 自动将引用插入html
        inject: true,

        // 每个html引用的js模块，也可以在这里加上vendor等公共模块
        chunks: [name],
    })

    webpackConfig.plugins.push(plugin);
})