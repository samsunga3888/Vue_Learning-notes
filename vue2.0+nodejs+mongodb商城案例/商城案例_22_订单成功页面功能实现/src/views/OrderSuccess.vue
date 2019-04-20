<template>
	<!--01.编写静态页面-->
    <div>
      <nav-header></nav-header>
      <div class="container">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>check out</span></h2>
        </div>
        <!-- 进度条 -->
        <div class="check-step">
          <ul>
            <li class="cur"><span>Confirm</span> address</li>
            <li class="cur"><span>View your</span> order</li>
            <li class="cur"><span>Make</span> payment</li>
            <li class="cur"><span>Order</span> confirmation</li>
          </ul>
        </div>

        <div class="order-create">
          <div class="order-create-pic"><img src="/static/ok-2.png" alt=""></div>
          <div class="order-create-main">
            <h3>Congratulations! <br>Your order is under processing!</h3>
            <p>
							<!--04.将数据显示到前台页面-->
              <span>Order ID：{{orderId}}</span>
              <span>Order total：{{(orderTotal)|currency('$')}}</span>
            </p>
            <div class="order-create-btn-wrap">
              <div class="btn-l-wrap">
								<!--05.跳转到购物车页面-->
                <router-link class="btn btn--m" to="/cart">Cart List</router-link>
              </div>
              <div class="btn-r-wrap">
								<!--06.跳转到商品清单列表-->
                <router-link class="btn btn--m" to="/">Goods List</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav-footer></nav-footer>
    </div>
</template>
<script>
	
    import NavHeader from '@/components/Header.vue'//@在build/webpack.base.conf.js内设置了别名。 '@': resolve('src'),
    import NavFooter from '@/components/Footer.vue'
    import NavBread from '@/components/Bread.vue'
    import {currency} from './../util/currency'
    import axios from 'axios'
		
    export default{
        data(){
            return{
							//02_1.初始化相关订单参数
                orderId:'',
								orderTotal:0
            }
        },
        components:{
          NavHeader,
          NavFooter,
          NavBread
        },
        filters:{
          currency:currency
        },
				//02.编写页面完成后加载订单详情函数
				mounted() {
					let orderId = this.$route.query.orderId;
					if(!orderId){
						return;
					}
					axios.get("/users/orderDetail",{
						params:{
							orderId:orderId	
						}

					}).then((response)=>{
						
						let res = response.data;
						if(res.status=='0'){
							this.orderId = orderId;
							this.orderTotal = res.result.orderTotal;
						}
					});
				}
    }
</script>
