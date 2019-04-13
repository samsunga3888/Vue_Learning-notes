import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList.vue'
import Cart from './../views/Cart.vue'
//01_1.导入adress页面
import Address from './../views/Address.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
		
		{
			path:'/cart',
			name:'cart',
			component:Cart
		},
		//01_2.新增地址页面路由
		{
			path:'/address',
			name:'address',
			component:Address
		},
  ]
})
