import axios from "axios"
import router from './../router'
export const ajax = (config) => {
  const ins = axios.create({
    baseURL:'/api/v4',
    timeout:''
  })

  ins.interceptors.request.use(config => {

    config.headers.Authorization = sessionStorage.getItem("token")
    return config
  })
  ins.interceptors.response.use(response => {
    if (response.data.errcode === 90101){
      router.push("/login")
    }
    return response.data
  })
  return ins(config)

}

