import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index' //首页

import Home from '@/components/index/Home' //首页-home
import Category from '@/components/index/Category' //首页-分类
import Cart from '@/components/index/Cart' //首页-购物车
import Center from '@/components/index/Center' //首页-个人中心

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/index"
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
        {
          path: '/',
          redirect:"home"
        },
        {
          path: "home",
          component:Home
        },
        {
          path: "category",
          component:Category
        },
        {
          path: "cart",
          component:Cart
        },
        {
          path: "center",
          component:Center
        },
      ]
    },

  ]
})
