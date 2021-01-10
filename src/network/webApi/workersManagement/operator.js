import {
  request
} from "../backendApiRequest.js";

// export function getOperators(account, password) {
//   return request({
//     url: `/workersManagement/operator`,
//     method: "post",
//     data: {
//       account,
//       password
//     }
//   })
// }

export function getOperators({
  search,
  field,
  limit = 10,
  offset,
  ordering,
  data_category = "all"
}) {
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

export function getDropDownLeader({
  search,
  field,
  limit = 10,
  offset,
  ordering,
  data_category = "all"
}) {
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