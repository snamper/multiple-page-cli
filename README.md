# multiple-page-cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


ps: 
1、 vue-devtools 这个chrome扩展程序，不能用cnpm，得用npm来安装
2、 用了vue-awesome-swiper做轮播，要给.swiper-container 加高度（垂直轮播），不然会炸

ui-lib：
1、$extend, $mount 这两个方法需要注意一下，写组件很常用。
2、loading 和 message 这两个组件可以，是写成服务形式的，需要import
3、 \uFEFF 非法字符，会阻碍json解析为object
  https://www.jianshu.com/p/ad8a0664d642

  const trim = function(string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
  };