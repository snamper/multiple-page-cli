// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/**
 * 改前必读！！！！！
 * 
 * 该文件为mobile的专题页。
 * 但是因为后台的问题，路径无法随意配置，只能放到 /pcmall/** 下，因此不得已只能放在这个地方
 * 
 * 再次强调！一定要注意！
 * 用的样式和组件，特地写个变量，指向到mobile目录中
 */

import Vue from 'vue'
import 'babel-polyfill'

import App from './special_v1.vue'

// import '@/assets/js/commonFontsizeMatchDeviceWidthAdaptatePC'  // 在mounted中调用

import Message from '@/ui-lib/src/message/index'

Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
