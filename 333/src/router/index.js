import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Home = () => import("views/home/Home")
const Cart = () => import("views/cart/Cart")
const Me = () => import("views/me/Me")
const ProductDetail = () => import("views/productDetail/ProductDetail")
const Login = () => import("views/login/Login")
const routes = [
  {
    path: '/login',
    component: Login,
    name: 'Login',
  },
  {
    path: '/detail',
    component: ProductDetail,
    name: 'ProductDetail',
  },
  {
    path: '/home',
    component: Home,
    name: 'Home',
  },
  {
    path: '/cart',
    component: Cart,
    name: 'Cart',
    meta:{
      authFlag:true
    }

  },
  {
    path: '/me',
    component: Me,
    name: 'Me'

  },
  {
    path:'/',
    redirect:'/home'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.authFlag){
    //需要登录
    if (sessionStorage.getItem("token")){
      //已经登录
      next()
    }else{
      //还没登录
      next("/login")
    }
  }else{
    //不需要登录
    next()
  }
})

export default router
