/**
 * @Author: qinzhenxing
 * @Date:   2018-01-03T14:40:09+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-03T14:43:05+08:00
 */
'use strict'

import axios from 'axios'
import qs from 'qs'
import {Message, Loading} from "element-ui"

// axios 全局配置
axios.defaults.timeout = 5000;
// axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// var loadingInstance;

axios.interceptors.request.use(config => { // loading
  //  loadingInstance = Loading.service({text: '数据请求中...'});
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  //  loadingInstance.close();
  return response
}, error => {
  //  loadingInstance.close();
  return Promise.resolve(error.response)
})

//返回状态判断
function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {status: -404, msg: '网络异常'}
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    Message({ //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message: res.msg,
      type: "error"
    });
  }
  if (res.data && (!res.data.enMsg)) {
    Message({ //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message: res.data.error_msg,
      type: "error"
    });
  }
  return res
}

export default {
  post(url, data) {
    return axios({method: 'post', url, data: qs.stringify(data)}).then((response) => {
      return checkStatus(response)
    }).then((res) => {
      return checkCode(res)
    })
  },
  get(url, params) {
    return axios({
      method: 'get', url, params, // get 请求时带的参数
    }).then((response) => {
      return checkStatus(response)
    }).then((res) => {
      return checkCode(res)
    })
  }
}
