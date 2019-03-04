//01.创建store文件
 /*
Vuex核心管理对象store
 */

//01_1.引入相关插件
import Vue from 'vue'
import vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from ' ./actions'
import getters from 'getters'

//01_2.启用Vuex插件
Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})

