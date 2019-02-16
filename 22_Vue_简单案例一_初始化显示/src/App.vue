<template>
	<!--  06.编写页面header代码 -->
	<div>
	  <header class="site-header jumbotron">
	    <div class="container">
	      <div class="row">
	        <div class="col-xs-12">
	          <h1>请发表对Vue的评论</h1>
	        </div>
	      </div>
	    </div>
	  </header>
	  <div class="container">
		  <!--  10_3.显示Add.vue和List.vue里面的静态页面代码 -->
		  <Add/>
		  <!--13_1.展示data里面的初始化页面数据。将data里面的数据传递给List.vue组件-->
		  <List :comments='comments'/>
	  </div>
	</div>
</template>

<script>
	//10_1.引入子组件Add.vue和List.vue
	import Add from './components/Add.vue'
	import List from './components/List.vue'
	
	export default{
		//13.初始化页面展示数据，存入data。
		data(){
			return{
				comments:[
					{
						name:'BOB',
						content:'Vue还不错'
					},
					{
						name:'Cat',
						content:'Vue So Easy'
					},
					{
						name:'BZ',
						content:'Vue So So'
					}
				]
			}
		},
		//10_2.关联Add.vue和List.vue为App.vue的组件标签
		components:{
			Add,
			List,
		}
	}
</script>

<style>
</style>
