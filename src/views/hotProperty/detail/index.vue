<template>
  <div>
    <titleBar>
      <div>热门楼盘详情页</div>
    </titleBar>
    <div>
    <div class="content-warp">
      <div class="building-dish">
        <div class="img-warp"><img src="" alt=""></div>
        <div class="content-hotpro">
          <h5>红杉溪谷</h5>
          <div>施工工地:<span>更新中...</span></div>
          <div>户型分析:<span>更新中...</span></div>
          <div>相关案例:<span>更新中...</span></div>
          <div>地&emsp;&emsp;址: <span class="building-address">汇金大厦开房间打计收款啦就会离开会是</span></div>
        </div>
      </div>
      <div class="building-team">
        <h4>楼盘设计服务团队<span>查看更多></span></h4>
        <div class="swipe-warp" style="width:1040px,height: 200px;">
          <van-swipe class="my-swipe" :width="120" :touchable="true" :loop="false" :show-indicators="false">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="corps-team">
        <h4>楼盘施工队<span>查看更多></span></h4>
        <div class="swipe-warp" style="width:1040px,height: 200px;">
          <van-swipe class="my-swipe" :width="120" :touchable="true" :loop="false" :show-indicators="false">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
    <div class="team-title">
      
    </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import titleBar from "@/components/titleBar/titleBar.vue";
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  components: {
    titleBar
  }
}
</script>

<style lang="scss" scoped>
  $a:100%;
  .content-warp{
    .building-dish{
      width: $a;
      height: 180px;
      background: white;
      margin-top: 15px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .img-warp{
        width: 120px;
        height: 120px;
        background: red;
        margin-left: -20px;
      }
      .content-hotpro{
        font-size: 14px;
        margin-left: -15px;
        width: 180px;
        h5{
          font-size: 18px;
        }
        div{
          margin: 5px 0;
          span{
            font-size: 12px;
            color: #ccc;
            margin-left: 10px;
          }
          .building-address{
            font-size: 14px;
            color: #333;
          
          }  
        }

      }
    }
    .building-team,.corps-team{
      h4{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        font-size: 16px;
        span{
          color: #cccccc;
          font-size: 14px;
        }
      }
      .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
        margin:0 5px;
      }
      .swipe-warp{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>