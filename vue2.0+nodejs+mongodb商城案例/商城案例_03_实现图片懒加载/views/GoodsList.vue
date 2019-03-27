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
					<!--03.调用showFilterPop方法，触发filter by页面显示。-->
	        <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
	      </div>
	      <div class="accessory-result">
	        <!-- 03_3.通过filterby-show样式显示与否判断，页面是否显示-->
	        <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
	          <dl class="filter-price">
	            <dt>Price:</dt>
							<!--02_1.计算priceChecked状态并显示到页面上-->
	            <dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="priceChecked='all'">All</a></dd>
							<!--01_1.遍历priceFilter数据显示在页面-->
	            <dd v-for="(price, index) in priceFilter" :key="index" >
								<!--02_2.计算priceChecked状态并显示到页面上-->
								<!--04_1.调用setPriceFilter函数-->
	              <a href="javascript:void(0)" v-bind:class="{'cur':priceChecked==index}" @click="setPriceFilter(index)">{{price.startPrice}} - {{price.endPrice}}</a>
	            </dd>
	          </dl>
	        </div>
	
	        <!-- search result accessories list -->
	        <div class="accessory-list-wrap">
	          <div class="accessory-list col-4">
	            <ul>
	              <li v-for="(item,index) in goodsList" :key="index">
	                <div class="pic">
	                  <!--<a href="#"><img v-bind:src="'/static/'+item.productImg" alt=""></a><!-->
										<!--05_2.将v-bind:src修改为v-lazy，触发页面调用懒加载功能-->
										<a href="#"><img v-lazy="'/static/'+item.productImg" alt=""></a>
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
		<!-- 03_5.通过voerLayFlag判断是否显示遮罩效果，通过click触发关闭遮罩效果显示。-->
		<div class="md-overlay " v-show="overLayFlag" @click="closePop"></div>
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
	
	
	import axios from 'axios'
		
	export default{
		
		data(){
			return{
				goodsList:[],
				//01.定义价格区间数据
				priceFilter:[
					{
						startPrice:'0.00',
						endPrice:'500.00'
					},
					{
						startPrice:'500.00',
						endPrice:'1000.00'
					},
					{
						startPrice:'1000.00',
						endPrice:'2000.00'
					}
				],
				//02.定义价格区间选中状态
				priceChecked:'all',
				//03_2.定义页面初始化显示的数值，false代表默认不显示。
				filterBy:false,
				//03_4.定义页面遮罩效果初始化显示id数值。false代表默认不显示。
				overLayFlag:false
			}
		},
		components:{
			NavHeader,
			NavFooter,
			NavBread,
		},
		
		mounted:function(){
			this.getGoodsList();
		},
		
		methods:{
			getGoodsList(){
				axios.get("/goods/result").then((result)=>{
					var res = result.data;
					this.goodsList = res.data;
				})
			},
			//03_1.编写filter by页面显示的方法
			showFilterPop(){
				this.filterBy = true
				this.overLayFlag = true
			},
			//03_5.编写关闭遮罩效果的方法
			closePop(){
				this.filterBy = false
				this.overLayFlag = false
			},
			//04.编写选择价格区间后，自动关闭遮罩功能方法
			setPriceFilter(index){
				this.priceChecked = index
				this.closePop()
			}
		},
	}
</script>

<style>
</style>
