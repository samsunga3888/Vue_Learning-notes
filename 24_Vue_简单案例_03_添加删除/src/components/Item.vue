<template>
	
	<li class="list-group-item">
	  <div class="handle">
			<!--01.绑定删除按钮，添加事件监听-->
	    <a href="javascript:;" @click="deleteItem">删除</a>
	  </div>
		
	  <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
	  <p class="centence">{{comment.content}}</p>
	</li>
</template>

<script>
	export default{
		
		props:{
			comment:Object,
			//01_7.通过props接收来自父组件List.vue传过来的方法函数。
			deleteComment:Function,
			//01_8.通过props接收来自父组件List.vue传过来的数组下标。
			index:Number
		},
		//01_1.编写删除按钮事件监听对应的methods
		methods:{
			deleteItem(){
				//01_2.从props里取出comment的数值
				//01_9.从props里取出deleteComment函数和index的数值
				const {comment, deleteComment, index} = this
				if(window.confirm(`确定删除${comment.name}的评论吗？`)){
					//01_10.调用从props接收来自父组件List.vue传过来的方法函数。
					deleteComment(index)
				}
			}
		}
	}
</script>

<style>
	
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
