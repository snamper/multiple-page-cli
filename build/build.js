'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')      // 主要用来实现node.js命令行环境的loading效果，和显示各种状态的图标
const rm = require('rimraf')    // 清除文件用的包
const path = require('path')
const chalk = require('chalk')  // 颜色插件，控制console输出信息的颜色
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

// 清除dist/static 下的文件，使用globbing匹配，注意config文件中相关路径
// ** html因为 HtmlWebpackPlugin 会生成新的html并替换掉，因此并不需要在这里清除
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err

    // http://www.css88.com/archives/4548
    // ** process.stdout 控制标准输出，也就是在命令行窗口向用户显示内容。write 方法等同于console.log
    // ** process.stuerr 错误信息。

    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
