import {
  request
} from "./backEndApiRequest.js";

export function Login(account, password) {
  return request({
    url: `/account`,
    method: "post",
    data: {
      account,
      password
    }
  })
}