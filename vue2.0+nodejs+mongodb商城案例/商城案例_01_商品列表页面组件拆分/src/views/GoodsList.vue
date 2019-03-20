<template>
	<div>
		<!--01.编写静态页面html代码-->
		<!--03_3.绑定Header静态页面-->
		<NavHeader/>
		<!--05_3.绑定Bread静态页面-->
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
	              <li>
	                <div class="pic">
	                  <a href="#"><img src="static/1.jpg" alt=""></a>
	                </div>
	                <div class="main">
	                  <div class="name">XX</div>
	                  <div class="price">999</div>
	                  <div class="btn-area">
	                    <a href="javascript:;" class="btn btn--m">加入购物车</a>
	                  </div>
	                </div>
	              </li>
	              <li>
	                <div class="pic">
	                  <a href="#"><img src="static/2.jpg" alt=""></a>
	                </div>
	                <div class="main">
	                  <div class="name">XX</div>
	                  <div class="price">1000</div>
	                  <div class="btn-area">
	                    <a href="javascript:;" class="btn btn--m">加入购物车</a>
	                  </div>
	                </div>
	              </li>
	              <li>
	                <div class="pic">
	                  <a href="#"><img src="static/3.jpg" alt=""></a>
	                </div>
	                <div class="main">
	                  <div class="name">XX</div>
	                  <div class="price">500</div>
	                  <div class="btn-area">
	                    <a href="javascript:;" class="btn btn--m">加入购物车</a>
	                  </div>
	                </div>
	              </li>
	              <li>
	                <div class="pic">
	                  <a href="#"><img src="static/4.jpg" alt=""></a>
	                </div>
	                <div class="main">
	                  <div class="name">XX</div>
	                  <div class="price">2499</div>
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
		<!--04_3.绑定Footer静态页面-->
		<NavFooter/>
	</div>
</template>

<script>
	//01_1.编写静态页面对应的css样式文件
	import './../assets/css/base.css'
	import './../assets/css/product.css'
	import './../assets/css/checkout.css'
	import './../assets/css/login.css'
	//03_1.导入Header组件
	import NavHeader from '@/components/Header.vue'//@在build/webpack.base.conf.js内设置了别名。 '@': resolve('src'),
	//04_1.导入Header组件
	import NavFooter from '@/components/Footer.vue'
	//05_1.导入Header组件
	import NavBread from '@/components/Bread.vue'
		
	export default{
		
		components:{
			//03_2.关联Header组件
			NavHeader,
			//04_2.关联Footer组件
			NavFooter,
			//05_2.关联Bread组件
			NavBread,
		}
	}
</script>

<style>
</style>
