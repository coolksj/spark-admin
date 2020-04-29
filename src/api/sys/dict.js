import request from '@/utils/request'

export function pageDict(params) {
  return request({
    url: '/admin/dict/page',
    method: 'post',
    params
  })
}

export function pageItemDict(params) {
  return request({
    url: '/admin/dict/page/item',
    method: 'post',
    params
  })
}

export function findDictType(type) {
  return request({
    url: `/admin/dict/type/${type}`,
    method: 'get'
  })
}

export function createDict(params) {
  return request({
    url: '/admin/dict',
    method: 'post',
    data: params
  })
}

export function createDictItem(params) {
  return request({
    url: '/admin/dict/item',
    method: 'post',
    data: params
  })
}

export function updateDict(params) {
  return request({
    url: '/admin/dict',
    method: 'put',
    data: params
  })
}

export function updateDictItem(params) {
  return request({
    url: '/admin/dict/item',
    method: 'put',
    data: params
  })
}

export function deleteDict(id) {
  return request({
    url: `/admin/dict/${id}`,
    method: 'delete'
  })
}

export function deleteDictItem(id) {
  return request({
    url: `/admin/dict/item/${id}`,
    method: 'delete'
  })
}

export function fetchDicts() {
  return request({
    url: '/admin/dict',
    method: 'get'
  })
}

export function resetCache() {
  return request({
    url: '/admin/dict/cache',
    method: 'get'
  })
}

