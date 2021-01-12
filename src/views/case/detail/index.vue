<template>
  <div>
    <titleBar> 
      <div>装修案例</div>
    </titleBar>
    <div class="adv"><img src="" alt=""></div>
    <div class="item-warp">
      <div class="title-warp"><span class="title">京和园小区-190平米-现代风格-装修效果图</span></div>
      <div class="item-style">
        <ul>
          <li><div>户型:<span>普通住宅</span></div> <div>风格:<span>法式</span></div></li>
          <li><div>小区:<span>更新中</span></div> <div>面积:<span>122m</span></div></li>
        </ul>
      </div>
      <div class="stylist">
        <div class="photo"><img src="" alt=""></div>
        <div class="resume">
          <div class="resume-name">张军李</div>
          <div class="style">擅长风格:</div>
          <div class="style">别墅&emsp;别墅&emsp;复式</div>
        </div>
        <button>更多作品</button>
      </div>
      <div class="detail">
        <h3><span>设计理念</span></h3>
        <div>好的生活费都时间啊好看你说的就喝点酒很可能就看撒发生的航空技术的然后就开始了积分卡就付款了啥红酒快乐撒今日货款收假的咖啡黑色短裤</div>
        <h3><span>户型图</span></h3>
        <div class="floor-plan"><img src="" alt=""></div>
      </div>
      <div>
        <van-tabs style="marginTop:15px" v-model="active">
          <van-tab title="客厅">内容 1</van-tab>
          <van-tab title="餐厅">内容 2</van-tab>
          <van-tab title="卧室">内容 3</van-tab>
        </van-tabs>
      </div>
      
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
   data() {
    return {
      active: 2,
    };
  },
  components: {
    titleBar
  }
}
</script>

<style lang="scss" scoped>
 $a:100%;
.item-warp{
  background-color: #F7F7F7;
  width: $a;
  height: 1000px;
  .title-warp{
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
  }
  .item-style{
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
      li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        div{
          width: 120px;
          margin: 0 30px;
          span{
            margin: 0 10px;
          }
        }

      }
    }
  }
  .stylist{
    width: $a;
    height: 100px;
    margin-top: 25px;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .photo{
      width: 70px;
      height: 70px;
      background-color: blue;
    }
    .resume{
      margin-left: -40px;
      div{
        margin: 6px 0;
      }
      .resume-name{
        font-size: 16px;
        font-weight: 600;
        color: #666666;
      }
      .style{
        font-size: 12px;
        color: #ccc;
      }
    }
    button{
      background-color: #000000;
      color: #D0B969;
      width: 80px;
      height: 30px;
    }
  }
  .detail{
    margin-top: 20px;
    background-color: white;
    h3{
      display: flex;
      justify-content: center;
      align-content: center;
      height: 50px;
      font-size: 18px;
      color: #666666;
      span{
        line-height: 50px;
      }
    }
    .floor-plan{
      width: $a;
      height: 300px;
      background: #000000;
    }
  }
}
</style>

