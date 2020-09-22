import {request} from './request'

export function listBusinessWithType(typeId) {
  return request({
    url: '/category/list/' + typeId,
    method: 'get',
    headers: {}
  })
}