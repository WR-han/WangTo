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