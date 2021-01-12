import {get,post} from './http'

export const getCase = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/subject';
  return get(url, params)
}
export const getTeam = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/designer'
  return get(url, params)
}

export const getHotProperty = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/loupan'
  return get(url, params)
}



export const getAddress = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/company'
  return get(url, params)
}


export const getDecorateDetail = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/decorate_strategy/details?id=287'
  return get(url, params)
}

export const getCityInfo = (params) => {
  let url = 'https://api.iynn.cn/film/api/v1/getCitiesInfo?cors=T&';
  return get(url, params)
}

export const getProcessInfo = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/subject?site_id=1';
  return get(url, params)
}


