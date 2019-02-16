<template>
	<!--  09.编写各种评论代码 -->
	<li class="list-group-item">
	  <div class="handle">
	    <a href="javascript:;">删除</a>
	  </div>
		<!-- 14_4.动态显示每一条评论内容comment-->
	  <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
	  <p class="centence">{{comment.content}}</p>
	</li>
</template>

<script>
	export default{
		//14_3.通过props接收来自父组件List.vue传过来的数值。
		props:{//第二种写法，指定属性名和属性值的类型。第一种写法props:['comment']。
			comment:Object
		}
	}
</script>

<style>
	/*12_2.拆分index.html页面引入的css样式*/
	li {
	  transition: .5s;
	  overflow: hidden;
	}
	
	.handle {
	  width: 40px;
	  border: 1px solid #ccc;
	  background: #fff;
	  position: absolute;
	  right: 10px;
	  top: 1px;
	  text-align: center;
	}
	
	.handle a {
	  display: block;
	  text-decoration: none;
	}
	
	.list-group-item .centence {
	  padding: 0px 50px;
	}
	
	.user {
	  font-size: 22px;
	}
</style>
