import {
  request
} from "../backendApiRequest.js";

export function Login(account, password) {
  return request({
    url: "/Login",
    method: "post",
    data: {
      account,
      password
    }
  })
}