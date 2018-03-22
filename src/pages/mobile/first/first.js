// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import Vue from 'vue'
import middleware from '@/assets/js/middleware.js'
import App from './first.vue'

middleware.Vue.config.productionTip = false

new middleware.Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
