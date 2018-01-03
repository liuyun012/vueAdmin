/**
 * @Author: qinzhenxing
 * @Date:   2017-12-28T17:25:55+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-03T11:33:43+08:00
 */

import Vue from 'vue'
import Router from 'vue-router'
import Admin from "@/views/Admin"
import Login from "@/components/Login"
import HelloWorld from '@/components/HelloWorld'
import GoodsForm from "@/views/goods/Goods-form"
import GoodsList from "@/views/goods/Goods-list"
import UserForm from "@/views/user/User-form"
import UserList from "@/views/user/User-list"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/admin',
      name: 'Admin',
      redirect: '/admin/goods-list',
      component: Admin,
      children: [
        {
          path: '/admin/goods-list',
          component: GoodsList
        }, {
          path: '/admin/goods-form',
          component: GoodsForm
        }, {
          path: '/admin/user-list',
          component: UserList
        }, {
          path: '/admin/user-form',
          component: UserForm
        }
      ]
    }
  ]
})
