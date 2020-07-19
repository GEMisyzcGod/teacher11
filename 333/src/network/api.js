import {ajax} from "./ajax";
//请求首页商品
export const reqProductList = (params) => {
  return ajax({
    url:'/product/pagination',
    method:'get',
    params
  })
}
//获取商品详情
export const reqProductDetail = (id) => {
  return ajax({
    url:'/product',
    method: "get",
    params: {
      id
    }
  })
}

//登录或者注册
export const reaLogin = (data) => {
  return ajax({
    url:'/user/signin',
    method:"post",
    data
  })
}

//获取用户信息
export const reqUserInfo = () => {
  return ajax({
    url:'/user/info',
    method:'get'
  })
}

//收藏
export const reqAddLike = (id) => {
  return ajax({
    url:'/product_like/create',
    method:'post',
    data:{product_id:id}
  })
}



