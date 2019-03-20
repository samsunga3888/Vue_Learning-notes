<template>
	<div>
		<NavHeader/>
		<NavBread>
			<span slot="Bread">Goods</span>
		</NavBread>
	  <div class="accessory-result-page accessory-page">
	    <div class="container">
	      <div class="filter-nav">
	        <span class="sortby">Sort by:</span>
	        <a href="javascript:void(0)" class="default cur">Default</a>
	        <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
	        <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
	      </div>
	      <div class="accessory-result">
	        <!-- filter -->
	        <div class="filter stopPop" id="filter">
	          <dl class="filter-price">
	            <dt>Price:</dt>
	            <dd><a href="javascript:void(0)">All</a></dd>
	            <dd>
	              <a href="javascript:void(0)">0 - 100</a>
	            </dd>
	            <dd>
	              <a href="javascript:void(0)">100 - 500</a>
	            </dd>
	            <dd>
	              <a href="javascript:void(0)">500 - 1000</a>
	            </dd>
	            <dd>
	              <a href="javascript:void(0)">1000 - 2000</a>
	            </dd>
	          </dl>
	        </div>
	
	        <!-- search result accessories list -->
	        <div class="accessory-list-wrap">
	          <div class="accessory-list col-4">
	            <ul>
								<!--02_4.遍历将json数据显示在页面-->
	              <li v-for="(item,index) in goodsList" :key="index">
	                <div class="pic">
	                  <a href="#"><img v-bind:src="'/static/'+item.productImg" alt=""></a>
	                </div>
	                <div class="main">
	                  <div class="name">{{item.productName}}</div>
	                  <div class="price">{{item.productPrice}}</div>
	                  <div class="btn-area">
	                    <a href="javascript:;" class="btn btn--m">加入购物车</a>
	                  </div>
	                </div>
	              </li>
	            </ul>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
		<NavFooter/>
	</div>
</template>

<script>

	import './../assets/css/base.css'
	import './../assets/css/product.css'
	import './../assets/css/checkout.css'
	import './../assets/css/login.css'

	import NavHeader from '@/components/Header.vue'//@在build/webpack.base.conf.js内设置了别名。 '@': resolve('src'),
	import NavFooter from '@/components/Footer.vue'
	import NavBread from '@/components/Bread.vue'
	
	//02.导入axios插件
	import axios from 'axios'
		
	export default{
		//02_1.定义goodsList数组
		data(){
			return{
				goodsList:[]
			}
		},
		components:{
			NavHeader,
			NavFooter,
			NavBread,
		},
		//02_3.在页面加载阶段显示json数据
		mounted:function(){
			this.getGoodsList();
		},
		//02_2.编写调用json数据的方法
		methods:{
			getGoodsList(){
				axios.get("/goods/result").then((result)=>{
					var res = result.data;
					this.goodsList = res.data;
				})
			}
		},
	}
</script>

<style>
</style>
