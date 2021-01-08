import axios from 'axios'

instance.interceptors.response.use((ret) => {

  return ret.data || ret;
})

export const get = (url, params) => {
  return axios.get(url, {params});
}


export const post =(url,params)=>{
  return axios.post(url,{...params})
}

