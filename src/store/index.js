import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // namespaced: true,
  state: {
  //   // 控制底部的导航是否显示
  //   isShowFooter: true,
    currentCity: "全国",
  },
  mutations: {
    setCurrentCity(state,arg){
      // 修改currentCity的值
      state.currentCity = arg; 
    }
  },
  actions: {},
  modules: {},
})
