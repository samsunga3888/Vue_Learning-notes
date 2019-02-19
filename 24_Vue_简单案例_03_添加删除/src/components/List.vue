<template>
	
	<div class="col-md-8">
	    <h3 class="reply">评论回复：</h3>
		<!-- 02.当comments的内容为空时，修改无评论数据时的页面显示.-->
	    <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
	    <ul class="list-group">
		  <!-- 01_6.显示Item.vue里面的静态页面代码。
		  并将for循环遍历的每一条评论内容comment，和删除评论数据的方法函数，和每条评论的数组下标，传递给Item.vue子组件-->
	      <Item v-for="(comment, index) in comments" :key="index" :comment="comment" :deleteComment="deleteComment" :index="index"/>
	    </ul>
	</div>
</template>

<script>
	
	import Item from './Item.vue'
	export default{
		//01_5.通过props接收来自父组件App.vue传过来的deleteComment的数值。
		props:['comments','deleteComment'],
		
		components:{
			Item,
		}
	}
</script>

<style>
	
	.reply {
	  margin-top: 0px;
	}
	
</style>
