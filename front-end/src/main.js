/**
 * @Author: qinzhenxing
 * @Date:   2017-12-28T17:25:55+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-02T15:27:26+08:00
 */



// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import '@/assets/scss/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
