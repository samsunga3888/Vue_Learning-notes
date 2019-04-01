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
	        <a href="javascript:void(0)" class="price" @click="sortGoods">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
	        <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
	      </div>
	      <div class="accessory-result">
	        <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
	          <dl class="filter-price">
	            <dt>Price:</dt>
	            <dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="setPriceFilter('all')">All</a></dd>
	            <dd v-for="(price, index) in priceFilter" :key="index" >
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
						<a href="#"><img v-lazy="'/static/'+item.productImage" alt=""></a>
	                </div>
	                <div class="main">
	                  <div class="name">{{item.productName}}</div>
	                  <div class="price">{{item.salePrice}}</div>
	                  <div class="btn-area">
						<!--03.触发addCart方法，将用户选中的商品加入购物车-->
	                    <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
	                  </div>
	                </div>
	              </li>
	            </ul>
	          </div>
			  <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
				  <img src="../../static/loading-svg/loading-spinning-bubbles.svg" v-show="loading">
			  </div>
	        </div>
	      </div>
	    </div>
		</div>
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
				priceFilter:[
					{
						startPrice:'0.00',
						endPrice:'100.00'
					},
					{
						startPrice:'100.00',
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
				sortFlag:true,
				page:1,
				pageSize:8,
				priceChecked:'all',
				filterBy:false,
				overLayFlag:false,
				busy:true,
				loading:false
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
			getGoodsList(flag){
				var param = {
					page:this.page,
					pageSize:this.pageSize,
					sort:this.sortFlag?1:-1,
					priceLevel:this.priceChecked
					
				}
				this.loading = true;
				axios.get("/goods",{
					params:param
				}).then((result)=>{
					this.loading = false;
					let res = result.data;
					if(res.status=="0"){
						if(flag){
							this.goodsList = this.goodsList.concat(res.result.list);
							if(res.result.count==0){
								this.busy = true;
							}else{
								this.busy = false;
							}
						}else{
							this.goodsList = res.result.list;
							this.busy = false;
						}
					}else{
						this.goodsList = [];
					}
					
				})
			},
			
			showFilterPop(){
				this.filterBy = true;
				this.overLayFlag = true;
			},
			
			closePop(){
				this.filterBy = false;
				this.overLayFlag = false;
			},
			
			setPriceFilter(index){
				this.page = 1;
				this.priceChecked = index;
				this.closePop();
				this.getGoodsList();
			},
		
			sortGoods(){
				this.sortFlag = !this.sortFlag;
				this.page = 1;
				this.getGoodsList();
			},
			
			loadMore(){
				this.busy = true;
				setTimeout(()=>{
					this.page++;
					this.getGoodsList(true);
				},1000);
			},
			//03_1.编写加入购物车函数
			addCart(productId){
				axios.post("/goods/addCart",{
					productId:productId,
				}).then((res)=>{
					if(res.status==200){
						alert("加入成功");
					}else{
						alert("msg:"+res.msg);
					}
				});
			}
		},
	}
</script>

<style>
.load-more{
	height: 100px;
	line-height: 100px;
	text-align: center;
}
</style>
