import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(function (config) {
  // 发请求前需要做什么
  // console.log(config)
  config.params = {
    ...config.params,
    appkey: 'wuhen_zx_1549973556757'
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
export default axios
