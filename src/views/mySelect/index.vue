<template>
  <div class="collect">
    <div class="collec">
    <!-- myselect page 收藏页面 -->
      <div class="header1" >
        <span class="sp1" @click="back">
            <img src="../../assets/image/xiaoyuhao1.png" alt="" style="width:30px;margin-left:10px;">
        </span>
        <span class="sp2">
            <img src="../../assets/image/fangzi1.png" alt="" style="width:30px;margin-left:20px;">
        </span>
        <span class="sp3" style="font-weight:800;color:black;margin-left:80px;">我的收藏</span>
      </div>
      <div class="slide">
        <van-tabs line-width="10px" swipe-threshold=4 > 
          <van-tab title="案例" ellipsis="false"></van-tab>
          <van-tab title="设计师" ellipsis="false"></van-tab>
          <van-tab title="在线工地" ellipsis="false"></van-tab>
          <van-tab title="业主故事" ellipsis="false"></van-tab>
          <van-tab title="其他" ellipsis="false"></van-tab>        
        </van-tabs>
        <hr/>
      </div>
    </div>

    <div class="footeer">
      <van-tabs line-width="10px" class="van" background="transparent"> 
          <van-tab title="最近七天" ellipsis=false></van-tab>
          <van-tab title="七天前"   ellipsis=false></van-tab>  
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
export default {
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}

</script>

<style lang="scss" scoped>
.header1{
  padding-top:15px;
}
.collec{
  height:100px;
  overflow:hidden;
}

.collect{
  height:100px;
  margin-bottom:15px;
  background: white;
  padding-top:0;
}
.van-tabs .van-tabs__wrap--scrollable .van-tab{
    padding:0;
    font-weight: 700;
}
hr{
  position: absolute;
  width:80%;
  margin-left:0;
  height:7px; 
  background: #7f7f7f;
  margin-top:-5px;
  border:0;
  border-radius: 5px;
  display: none;
}
.slide:hover hr{
  display: block;
}
.collect .footeer .van{
  width:150px;
}

</style>