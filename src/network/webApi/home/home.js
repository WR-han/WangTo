import {
  request
} from "../backEndApiRequest.js";

export function GetHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function GetHomeGoodsData(search, field, limit, offset, ordering) {
  return request({
    url: '/home/data',
    params: {
      search,
      field,
      limit,
      offset,
      ordering
    }
  })
}