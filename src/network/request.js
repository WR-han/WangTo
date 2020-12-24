import axios from "axios"

export function request(config) {

  const instance = axios.create({
    baseURL: "https://demo1-1302289492.cos.ap-nanjing.myqcloud.com",
    timeout: 5000
  })

  //拦截器
  // instance.interceptors.request.use(
  //   config => {
  //     console.log(config)
  //     return config
  //   },
  //   err => {
  //     return err
  //   }
  // )

  // instance.interceptors.response.use(
  //   res => {
  //     console.log(res)
  //     return res.data
  //   },
  //   err => {
  //     return err
  //   }
  // )

  return instance(config)
}