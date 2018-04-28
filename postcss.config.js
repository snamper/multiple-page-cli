/*
 *  这块是用于转换px与rem的
 *  稿子宽度一般是750px，开发的手机尺寸宽度一般是375px
*/
// 默认rem的值
const browserDefaultFontsize = 16;

// 默认设备宽度
const deviceDefaultWidth = 375;

// 默认稿子宽度
const designDefaultWidth = 750;

// 缩放比
const ratio =  designDefaultWidth / deviceDefaultWidth;

// 判断是PC文件还是mobile文件，对应是否使用pxtorem
// const isMobile

// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      remove: false
    },

    /**
     * 用法： https://www.npmjs.com/package/postcss-pxtorem
     */
    "postcss-pxtorem": {
      rootValue: browserDefaultFontsize * ratio,      
      unitPrecision: 5,
      propList: ['*'],
      minPixelValue: 6
    }
  }
}
