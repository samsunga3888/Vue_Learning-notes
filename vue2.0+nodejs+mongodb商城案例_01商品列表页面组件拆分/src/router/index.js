import Vue from 'vue'
import Router from 'vue-router'
//02.改变路由默认显示的页面
import GoodsList from './../views/GoodsList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
