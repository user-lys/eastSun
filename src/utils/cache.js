import Vue from 'vue'

const KEY = "keywords"

var cache ={
  add: function(keyword) {
    if(!keyword) return
    let list = new Set
    if(localStorage.getItem(KEY)){
      list = JSON.parse(localStorage.getItem(KEY))
    }
    list.push(keyword)   // 存储 搜索
    localStorage.setItem(KEY,JSON.stringify(list))
  },
  get(){
    return JSON.parse(localStorage.getItem(KEY))
  },
  del(key){
    let list = JSON.parse(localStorage.getItem(KEY))
    list.splice(list.indexOf(key),1)
    localStorage.setItem(KEY,JSON.stringify(list))
  }
}

Vue.use({
  install(vue){
    vue.prototype.$cache=cache
  }
})


//使用方法 
// this.$cache.add(newval)