import axios from "axios"
import $store from "../../store/index.js"
import $router from "../../router/index.js"

export function request(config) {

  const instance = axios.create({
    // baseURL: "http://wangtoapi.wrhan.cn/v1/background",
    baseURL: "http://127.0.0.1:8000/v1/backend",
    timeout: 5000
  })

  //拦截器
  instance.interceptors.request.use(
    config => {
      if ($store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = $store.state.token;
      }
      return config
    },
    err => {
      return err
    }
  )

  instance.interceptors.response.use(
    res => {
      if (res.data.code == 401) { // token过期
        $store.commit("logout")
        if ($router.currentRoute.fullPath != "/login") {
          $router.replace("/login")
        }
      }
      if (res.data.token){ // token更新
        $store.commit("login", res.data.token);
      }
      return res.data
    },
    err => {
      return err
    }
  )

  return instance(config)
}