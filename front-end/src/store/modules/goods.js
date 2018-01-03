/**
 * @Author: qinzhenxing
 * @Date:   2018-01-03T15:14:58+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-03T15:20:39+08:00
 */
import * as types from '../mutation-types'

// initial state
const state = {
  user: null,
  goodsDetail: null
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getGoods({commit}) {
    commit(types.GET_GOODS, {products})
  }
}

// mutations
const mutations = {
  user (state, payload) {
    state.user = payload;
  }
}

export default {state, getters, actions, mutations}
