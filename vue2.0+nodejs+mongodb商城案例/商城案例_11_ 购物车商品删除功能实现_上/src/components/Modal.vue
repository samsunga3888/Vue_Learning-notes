<template>
	<!--01.编写modal静态页面-->
    <div>
			<!--01_8.通过mdShow状态，控制页面是否显示。-->
      <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':mdShow}">
        <div class="md-modal-inner">
          <div class="md-top">
						<!--01_7.调用关闭函数，触发右上角关闭按钮功能-->
            <button class="md-close" @click="closeModal">Close</button>
          </div>
          <div class="md-content">
            <div class="confirm-tips">
							<!--01_5.预留位置，接收从父组件传入的数值-->
              <slot name="message"></slot>
            </div>
            <div class="btn-wrap">
							<!--01_6.预留位置，通过父组件传入的数据来控制页面的显示内容-->
              <slot name="btnGroup"></slot>
            </div>
          </div>
        </div>
      </div>
			<!--01_4.调用关闭函数，点击蒙版任意位置可关闭模页面-->
      <div class="md-overlay" v-if="mdShow" @click="closeModal"></div>
    </div>
</template>
<style>

</style>
<script>
    export default{
				//01_1.接收从父组件传入的数值。用于控制蒙版是否显示
        props:["mdShow"],
        methods:{
					//01_2.编写关闭函数
          closeModal(){
						//01_3.接收从父组件传入的数值。用于控制页面是否关闭
            this.$emit("close");
          }
        }
    }
</script>
