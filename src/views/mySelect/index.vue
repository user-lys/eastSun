<template>
  <div class="collect">
    <div class="collec">
    <!-- myselect page 收藏页面 -->
      <div class="header" >
        <span class="sp1" @click="back">
            <img src="../../assets/image/xiaoyuhao1.png" alt="" style="width:30px;margin-left:10px;">
        </span>
        <span class="sp2">
            <img src="../../assets/image/fangzi1.png" alt="" style="width:30px;margin-left:20px;">
        </span>
        <span class="sp3" style="font-weight:800;margin-left:90px;color:black;">我的收藏</span>
      </div>
      <div class="slide">
        <van-tabs line-width="10px" swipe-threshold=4> 
          <van-tab title="案例"></van-tab>
          <van-tab title="设计师"></van-tab>
          <van-tab title="在线工地"></van-tab>
          <van-tab title="业主故事"></van-tab>
          <van-tab title="其他"></van-tab>        
        </van-tabs>
        <hr/>
      </div>
    </div>

    <div class="footer">
      <van-tabs line-width="10px"  ellipsis=false > 
          <van-tab title="最近七天"></van-tab>
          <van-tab title="七天前"></van-tab>  
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

/* 这里需要删除 scoped ，否则 效果出不来 */
<style lang="scss" >
.collect{
  height:100%;
  display: flex;
  flex-direction: column;
}
.collec{
  height:125px;
  background: white;
}
.header{
  margin-top:30px;
  width:100%;
}
.van-tabs .van-tabs__wrap--scrollable .van-tab{
    padding:0 23px;
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
.footer{
  flex:1;
  background: #f7f7f7;
}

.footer .van-tabs__nav{
  width:150px;
  background: transparent;
}
.footer .van-tab:nth-of-type(1) .van-tab__text{
  white-space: nowrap;
  text-emphasis: none;
  border-right:1px solid black;
  padding-right:15px;
}
.slide:hover hr{
  display: block;
}
</style>