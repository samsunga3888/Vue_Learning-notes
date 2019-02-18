<template>
	
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
		  <!--  02_5.将methods里面的新增的方法函数传递给Add.vue组件 -->
		  <Add :addComment="addComment"/>
		  <List :comments='comments'/>
	  </div>
	</div>
</template>

<script>
	
	import Add from './components/Add.vue'
	import List from './components/List.vue'
	
	export default{
		
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
		
		methods:{
			//02_4.编写添加评论方法
			addComment(comment){
				//unshift作用，在comments最前面增加一条评论数据
				this.comments.unshift(comment)
			}
		},
		
		
		components:{
			Add,
			List,
		}
	}
</script>

<style>
</style>
