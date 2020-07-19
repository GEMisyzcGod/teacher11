import {reqUserInfo} from "./api"
import store from './../store'


const initUserInfo = () => {
  if (sessionStorage.getItem("token")){
    reqUserInfo().then(data => {
      console.log(data.data)
      if (data.errcode === 0){
        store.commit("saveUser",data.data)
    }
    })
  }
}

export default {
  initUserInfo
}

