// 依赖axios
import axios from 'axios'

// 配置axios全局使用
axios.defaults.baseURL = 'http://localhost:9080/api/private/v1'

// // 请求拦截器 配置token令牌
// axios.interceptors.request.use(config => {
//   // config可以给请求头追加属性
//   config.headers.Authorazition = sessionStorage.getItem('token')
//   return config
// })

// // 响应拦截器  判断token是否失效
// axios.interceptors.response.use(res => {
//   if (res.data.meta.status === 401) {
//     // token失效，跳转登录页
//     location.href = '#/login'
//   } else {
//     return res
//   }
// })

// 拦截器
axios.interceptors.request.use(config => {
  // 给config添加新的信息
  // config可以给请求头追加属性
  config.headers.Authorization = sessionStorage.getItem('token')
  return config
})
axios.interceptors.response.use(res => {
// 判断 token 是否失效
  if (res.data.meta.status === 401) {
    location.href = '#/login'
  } else {
    return res
  }
})

// 导出
export default axios
