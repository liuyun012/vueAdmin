/**
 * @Author: qinzhenxing
 * @Date:   2018-01-03T14:57:00+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-03T15:19:23+08:00
 */
 import Vue from 'vue'
 import Vuex from 'vuex'
 import * as actions from './actions'
 import * as getters from './getters'
 import goods from './modules/goods'

 Vue.use(Vuex)

 export default new Vuex.Store({
  actions,
  getters,
  modules: {
    goods
  },
  strict: false,
  plugins: []
})
