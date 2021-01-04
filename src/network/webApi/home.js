import {
  request
} from "./backEndApiRequest.js";

export function GetHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function GetHomeGoodsData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page,
    }
  })
}