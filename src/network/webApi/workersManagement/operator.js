import {
  request
} from "../backendApiRequest.js";

export function getOperators({
  search,
  field,
  limit = 10,
  offset,
  ordering,
  data_category
} = {}) {
  return request({
    url: "/workersManagement/operator",
    method: "get",
    params: {
      search,
      field,
      limit,
      offset,
      ordering,
      data_category
    }
  })
}

export function createOperators(data) {
  return request({
    url: "/workersManagement/operator",
    method: "post",
    data
  })
}