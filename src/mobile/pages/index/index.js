// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './index1.vue'

import Message from '@/ui-lib/src/message/index'

Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})