import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    isShowFooter: false,
    currentCity: "全国",
    
    // // 当前路径
    // currentPath: "",
    // // 当前距离页面的高度
    // getCurrentTop: 0,
  },
  mutations: {
    setCurrentCity(state,arg){
      // 修改currentCity的值
      state.currentCity = arg; 
    },
    // 设置是否显示底部导航
    setFooter(state,arg){
      // 修改isShowFooter的数据
      state.isShowFooter = arg;
    },
    // 获取当前所在路径
    getCurrentPath(state,[arg0,arg1]){
      // state.currentPath = arg0;
      // 将路径存到sessionStorage里面
      sessionStorage.setItem("currentPath",arg0);
      // state.CurrentTop = arg1;
      sessionStorage.setItem("currentTop",arg1);
    },
    
    


  },
  actions: {},
  modules: {},
})
