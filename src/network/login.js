import {
  request
} from "./request.js";

export function Login(account, password) {
  return request({
    url: `http://wangtoapi.wrhan.cn/v1/background/account`,
    method: "post",
    data: {
      account,
      password
    }
  })
}