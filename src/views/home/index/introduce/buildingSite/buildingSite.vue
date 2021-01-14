<template>
  <div class="index-warp">
    <div class="site-warp" @click="go('/sitedel/'+item.construction_id)" v-for="item in onlineSite" :key="item.id">
      <img :src="item.cover_image" alt="">
      <div class="site-content">
        <h4>{{item.title}}</h4>
        <div>装修风格:<span>{{item.housestyle.name}}</span></div>
        <div>户型:<span>{{item.housetype.name}}</span>面积:<span>{{item.area}}平米</span> </div>
      </div>
    </div>
   <router-link tag="div" to="/storys" class="site-more"><span>查看更多></span> </router-link>
  </div>
</template>

<script>
import {getOnlineSite} from '@/api/index'
export default {
  data () {
    return {
      onlineSite:[],
    }
  },
  methods: {
    go(url){
      this.$router.push(url)
    },
    async getOnlineSites() {
      let ret = await getOnlineSite();
      this.onlineSite = ret.data.list;
      console.log(ret);
    }
  },
  created () {
    this.getOnlineSites();
  }

}
</script>

<style lang="scss" scoped>
.index-warp{
  .site-warp{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px 0;
  img{
    width: 120px;
    height: 100px;
    background-color: red;
  }
  .site-content{
    height: 100px;
    h4{
      width: 220px;
      font-size: 16px;
      color: #666;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    div{
      margin: 10px 0;
      span{
        margin: 0 5px;
      }
    }
  }
  }
  .site-more{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
  }
}
</style>