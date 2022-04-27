import axios from 'axios'

import store from '../store'
import { CHANGE_LOADING } from '../actions/actionType'

// 配置项
const axiosOption = {
  baseURL: 'https://dev-v2.bundleb2b.net/apidoc-server/app/mock/55/api',
  timeout: 5000
}

// 创建一个单例
const instance = axios.create(axiosOption);

// 添加请求拦截器
instance.interceptors.request.use(function (config) {

  // 显示loading
  store.dispatch({
    type: CHANGE_LOADING,
    payload: true
  })

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  //影藏loading
  store.dispatch({
    type: CHANGE_LOADING,
    payload: false
  })

  return response;
}, function (error) {
  // 对响应错误做点什么
  //影藏loading
  store.dispatch({
    type: CHANGE_LOADING,
    payload: false
  })

  return Promise.reject(error);
});

export default instance;
