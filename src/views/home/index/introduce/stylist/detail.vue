<template>
  <div>
    <titleBar>
      <div>个人简介</div>
    </titleBar>
    <div class="warp">
      <div class="personal">
        <div class="img"><img src="" alt=""></div>
        <div class="detail">
          <h4>周磊</h4>
          <div>案例作品: <span></span> </div>
          <div>从业经验: <span></span> </div>
          <div>
            <button>一对一在线咨询</button>
          </div>
        </div>
      </div>
      <van-tabs v-model="active">
        <van-tab title="个人简介">内容 1</van-tab>
        <van-tab title="相关案例">内容 2</van-tab>
        <van-tab title="服务楼盘">内容 3</van-tab>
        <van-tab title="户型解析">内容 4</van-tab>
        <van-tab title="在线工地">内容 5</van-tab>
      </van-tabs>
    </div>
    <div class="site">
      
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
import titleBar from "@/components/titleBar/titleBar.vue";
export default {
  components: {
    titleBar
  },
}
</script>

<style lang="scss" scoped>
.warp{
  width: 100%;
  background: #F7F7F7;
  overflow: hidden;
  height: 1000px;
  .personal{

    height: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    margin: 12px 15px 30px 15px;
    .img{
      width: 110px;
      height: 130px;
      background:pink;
      margin-left: 15px;
      
    }
   
    .detail{
      width: 190px;
      margin-right: 15px;
    }
  }
}
</style>