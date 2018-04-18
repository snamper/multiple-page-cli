// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './index.vue'

import '@/assets/css/middleware.scss';
import '@/assets/js/commonFontsizeMatchDeviceWidthAdaptatePC'

import Message from '@/ui-lib/src/message/index'

Vue.use(vuex)
Vue.use(Router)
Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
    el: '#app',
    components: {App},
    template: '<App/>',
})