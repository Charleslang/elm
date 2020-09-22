import {request} from './request'

export function listBusiness() {
  return request({
    url: '/business/list',
    method: 'get',
    headers: {}
  })
}