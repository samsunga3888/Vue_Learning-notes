<template>
	
	<div class="col-md-4">
	  <form class="form-horizontal">
	    <div class="form-group">
	      <label>用户名</label>
		  <!--01.调用v-model，自动绑定输入到input的数据-->
	      <input type="text" class="form-control" placeholder="用户名" v-model="name">
	    </div>
	    <div class="form-group">
	      <label>评论内容</label>
		  <!--01_1.调用v-model,自动绑定输入到input的数据-->
	      <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
	    </div>
	    <div class="form-group">
	      <div class="col-sm-offset-2 col-sm-10">
			<!--02.绑定提交按钮的事件监听-->
	        <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
	      </div>
	    </div>
	  </form>
	</div>
</template>

<script>
	
	export default {
		//02_6.通过props接收来自父组件App.vue传过来的数值
		props:{//完整版写法
			addComment:{//02_07.指定属性名
				type:Function,//02_8.指定属性值的类型
				required:true//02_9.指定该属性是否必须
			}
		},
		//01_2.初始化input里面的数据为空
		data(){
			return{
				name:'',
				content:''
			}
		},
		//02_1.编写提交按钮事件监听对应的methods
		methods:{
			add(){
				//02_2.检查input输入的合法性（简易示意）
				const name = this.name.trim()
				const content = this.content.trim()
				if(!name || !content){
					alert('姓名或内容不能为空')
					return
				}
				//02_3.将输入input的数据，封装成一个comment对象
				const comment = {
					name,
					content
				}
				//02_10.调用addComment函数，将用户提交的评论内容添加到App.vue的data里面。
				this.addComment(comment)
				//02_11.最后清除input里面的内容。
				this.name = ''
				this.content = ''
			}
		}
	}
</script>

<style>
</style>
