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
		 
		  <Add :addComment="addComment"/>
		  <!--  01_4.将methods里面新增的方函数传递给List.vue组件 -->
		  <List :comments='comments' :deleteComment="deleteComment"/>
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
			
			addComment(comment){
				
				this.comments.unshift(comment)
			},
			//01_3.编写删除指定评论的方法
			deleteComment(index){
				//splice作用，利用数组下标进行数组数据切分
				this.comments.splice(index, 1)
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
