// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // zy: can take alias

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { size: 'mini' })

import '@/styles/zy_index.scss' // global css

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/admin'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // zy: Or router: router's alias
  components: { App },
  template: '<App/>'
})
