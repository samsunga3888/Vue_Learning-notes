<template>
	<!--  08.编写页面评论回复区代码 -->
	<div class="col-md-8">
	    <h3 class="reply">评论回复：</h3>
	    <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
	    <ul class="list-group">
		  <!-- 14_2.显示Item.vue里面的静态页面代码。
		  并将for循环遍历的每一条评论内容comment，传递给Item.vue子组件-->
	      <Item v-for="(comment, index) in comments" :key="index" :comment="comment"/>
	    </ul>
	</div>
</template>

<script>
	//14.引入Item.vue子组件
	import Item from './Item.vue'
	export default{
		//13_2.通过props接收来自父组件App.vue传过来的数值。
		props:['comments'],
		//14_1.关联Item.vue为List.vue的组件标签
		components:{
			Item,
		}
	}
</script>

<style>
	/*12_1.拆分index.html页面引入的css样式*/
	.reply {
	  margin-top: 0px;
	}
	
</style>
