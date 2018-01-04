/**
 * @Author: qinzhenxing
 * @Date:   2018-01-03T10:42:56+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-04T16:05:16+08:00
 */
 import http from './http'

 export default {
   // 获取商品列表
   getGoods() {
     return http.get('/api/getgoods/list')
   },
   // 获取商品详情
   getDetail(goodsId) {
     return http.get('/api/getDetail/' + goodsId)
   },

   // 获取报名表单中的校区列表
   getSchools() {
     return http.get('/apply/schools.json?debug=1')
   },

   /**
    * 提交报名表单
    * params{name: '', phone: '', age: '', school: ''}
    * 学生姓名、联系电话、年龄、校区id
    */
   submitFrom(params) {
     return http.post('/apply/submit.json?debug=1', params)
   },

 }
