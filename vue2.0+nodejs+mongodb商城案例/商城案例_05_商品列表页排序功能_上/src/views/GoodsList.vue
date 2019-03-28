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
			<!--01_6.调用sortFlag方法，触发页面的升降序显示。-->
	        <a href="javascript:void(0)" class="price" @click="sortGoods">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
	        <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
	      </div>
	      <div class="accessory-result">
	        <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
	          <dl class="filter-price">
	            <dt>Price:</dt>
	            <dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="priceChecked='all'">All</a></dd>
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
	                    <a href="javascript:;" class="btn btn--m">加入购物车</a>
	                  </div>
	                </div>
	              </li>
	            </ul>
	          </div>
			  <!--03_2.在页面中的数据位置，触发插件滚动效果-->
			  <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
				  加载中...
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
				//01.根据后端api调用参数，设置对应前端初始化数值
				//01_1.设置产品价格的默认排序为升序
				sortFlag:true,
				//01_2.定义初始化页面为第一页
				page:1,
				//01_3.定义初始化每页显示8条数据
				pageSize:8,
				priceChecked:'all',
				filterBy:false,
				overLayFlag:false,
				//03_3.定义页面滚动插件初始化状态为生效
				busy:true,
			}
		},
		components:{
			NavHeader,
			NavFooter,
			NavBread,
		},
		
		mounted:function(){
			//01_4.页面加载时首先从数据库加载数据
			this.getGoodsList();
		},
		
		methods:{
			//03_6.flag为true表明分页数据累加显示
			getGoodsList(flag){
				//01_7.设置与后端api一致的参数
				var param = {
					page:this.page,//当前显示第几页
					pageSize:this.pageSize,//当前的分页数量
					sort:this.sortFlag?1:-1//当前是升序还是降序排列
				}
				//01_8.利用axios的params参数，发起对后端数据库信息的检索
				axios.get("/goods",{
					params:param
				}).then((result)=>{
					let res = result.data;
					if(res.status=="0"){
						if(flag){
							this.goodsList = this.goodsList.concat(res.result.list);//03_7.concat数据累加
							//03_10.如果数据加载完成
							if(res.result.count==0){
								this.busy = true;//关闭页面滚动效果显示
							}else{
								this.busy = false;//打开页面滚动效果显示
							}
						}else{
							this.goodsList = res.result.list;//03_8.不需要数据累加的情况
							this.busy = false;//03_9.打开页面滚动效果显示
						}
					}else{
						this.goodsList = [];//03_10.代表请求失败
					}
					
				})
			},
			
			showFilterPop(){
				this.filterBy = true
				this.overLayFlag = true
			},
			
			closePop(){
				this.filterBy = false
				this.overLayFlag = false
			},
			
			setPriceFilter(index){
				this.priceChecked = index
				this.closePop()
			},
			
			//01_5.编写price排序函数
			sortGoods(){
				this.sortFlag = !this.sortFlag;//在升序和降序之间来回切换
				this.page = 1;//排序后，总是显示首页数据
				this.getGoodsList();//第二次调用axios异步方式从后台数据库检索数据
			},
			//03_4.编写页面滚动显示效果函数
			loadMore(){
				this.busy = true;//禁用滚动功能
				setTimeout(()=>{//设置延时为了降低服务器的负载
					this.page++;//后续页面加载完成
					//03_5.flag为true表明分页数据累加显示
					this.getGoodsList(true);//第三次加载商品列表
				},1000);
			},
		},
	}
</script>

<style>
/*04.设置加载中的样式*/
.load-more{
	height: 100px;
	line-height: 100px;
	text-align: center;
}
</style>
