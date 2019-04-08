import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList.vue'
//01_1.引入购物车页面文件
import Cart from './../views/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
		//01.新增购物车页面路由
		{
			path:'/cart',
			name:'Cart',
			component:Cart
		}
  ]
})
