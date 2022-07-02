import axios from 'axios'
import store from '@/store'
import { Toast } from 'antd-mobile'
import { customHistory } from './history'

const http = axios.create({
  baseURL: 'http://toutiao.itheima.net/v1_0',
  timeout: 5000
})

//请求拦截器
http.interceptors.request.use(config => {
  let { login: { token } } = store.getState()

  if (!config.url?.startsWith('/authorizations')) {
    config.headers!.Authorization = `Bearer ${token}`
  }
  return config
}, error => Promise.reject(error))

//响应拦截器
http.interceptors.response.use(response => {
  response.data ? response.data : {}
}, error => {
  if (error.response.status === 401) {
    Toast.show({
      content: '登录超时啦！！！！！！！',
      duration: 1000,
      afterClose () {
        customHistory.push('/login')
      },
    })
  }
  return Promise.reject(error)
})


export { http }