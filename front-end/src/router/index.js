/**
 * @Author: qinzhenxing
 * @Date:   2017-12-28T17:25:55+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-02T17:11:58+08:00
 */

import Vue from 'vue'
import Router from 'vue-router'
import Admin from "@/views/Admin"
import Login from "@/components/Login"
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
