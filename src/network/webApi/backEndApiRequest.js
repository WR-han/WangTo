import axios from "axios"
import $vuex from "../../store/index.js"
import $router from "../../router/index.js"

export function request(config) {

  const instance = axios.create({
    baseURL: "http://wangtoapi.wrhan.cn/v1/background",
    timeout: 5000
  })

  //拦截器
  instance.interceptors.request.use(
    config => {
      if ($vuex.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = $vuex.state.token;
      }
      return config
    },
    err => {
      return err
    }
  )

  instance.interceptors.response.use(
    res => {
      if (res.data.code == 401) {
        $vuex.commit("logout")
        if ($router.currentRoute.fullPath != "/login") {
          $router.replace("/login")
        }
      }
      return res.data
    },
    err => {
      return err
    }
  )

  return instance(config)
}