import {
  request
} from "../backendApiRequest.js";

export function getLeaders({
  search,
  field,
  limit = 10,
  offset,
  ordering,
  data_category
} = {}) {
  return request({
    url: "/workersManagement/leader",
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

export function createLeaders(data) {
  return request({
    url: "/workersManagement/leader",
    method: "post",
    data
  })
}

export function changeLeader(data) {
  return request({
    url: "/workersManagement/leader",
    method: "put",
    data
  })
}

export function deleteLeader(data) {
  return request({
    url: "/workersManagement/leader",
    method: "delete",
    data
  })
}