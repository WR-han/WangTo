import {
  request
} from "../webApi/cosApiRequest";

export function PutZipFile(fileName, fileDate,Token,type) {
  return request({
    url: `/demo1/${fileName}`,
    method: "put",
    data: fileDate,
    headers:{
      "Authorization":Token,
      "Content-Type":type
    }
  })
}