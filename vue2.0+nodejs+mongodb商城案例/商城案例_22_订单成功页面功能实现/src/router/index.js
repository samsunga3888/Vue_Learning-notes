import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList.vue'
import Cart from './../views/Cart.vue'
import Address from './../views/Address.vue'
import OrderConfirm from './../views/OrderConfirm.vue'
//01_1.引入静态页面
import OrderSuccess from './../views/OrderSuccess.vue'

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
		{
			path:'/address',
			name:'address',
			component:Address
		},
		{
			path:'/orderconfirm',
			name:'orderconfirm',
			component:OrderConfirm
		},
		{
			//01_2.新增地址页面路由
			path:'/ordersuccess',
			name:'ordersuccess',
			component:OrderSuccess
		}
  ]
})
