import {get,post} from './http'

export const getCityInfo = (params) => {
  let url = 'https://api.iynn.cn/film/api/v1/getCitiesInfo?cors=T&';
  return get(url, params)
}

export const getIndexSwiper = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/subject?site_id=1&page=1&pageSize=8?cors=T&';
  return get(url, params)
}

export const getBanner = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/banner?category_ids=3%2C4%2C30?cors=T&';
  return get(url, params)
}
export const getStory = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn//api/owner_story/index?page=1&pageSize=10?cors=T&';
  return get(url, params)
}
export const getOnlineSite = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/construction?site_id=1&page=1&pageSize=2?cors=T&';
  return get(url, params)
}
export const getCaseDel = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/subject/details?';
  return get(url, params)
}
export const getAdv = (params) => {
  let url = 'https://xcx2020.dyrs.com.cn/api/banner?category_ids=6';
  return get(url, params)
}








