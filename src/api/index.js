import {get,post} from './http'

export const getCityInfo = (params) => {
  let url = 'https://api.iynn.cn/film/api/v1/getCitiesInfo?cors=T&';
  return get(url, params)
}

export const getProcessInfo = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/subject?site_id=1';
  return get(url, params)
}

export const getshejishiInfo = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/designer?site_id=1&page=1&pageSize=8';
  return get(url, params)
}

export const getPhotoInfo = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/photo_album?site_id=1&page=1&pageSize=8';
  return get(url, params)
}





