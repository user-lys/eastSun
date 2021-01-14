<template>
  <div>
    <titleBar>
      <div>设计团队</div>
    </titleBar>
    <div class="adv"><img src="" alt=""></div>
    <div class="content-warp">
      <div class="design-center">
        <div class="center-item">
          <img src="" alt="">
          <div class="monicker">
            <h4>中天设计中心</h4>
            <div>
              <div>设计案例:<span>35套</span></div>
              <div>设计师:<span></span>4人</div>
              <div>户型分析:<span>36套</span></div>
            </div>
          </div>
          <div class="dedicated-service">
            <h5>专属服务</h5>
            <div>
              <button>预约到店</button>
              <button>户型解析</button>
              <button>测试评估</button>
            </div>
            <div>
              <button>专车接驾</button>
              <button>大师设计</button>
              <button>工地直通车</button>
            </div>
          </div>
          <div class="contact-us">
            <router-link tag="div" class="contact" to="#">预约门店</router-link>
          </div>
          <router-link tag="div" class="call" to="#">
            <svg t="1610267445656" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3154" width="30" height="20">
              <path
                d="M546.795 400.819h-73.417v73.417h73.417v-73.417z m146.888 0h-73.417v73.417h73.417v-73.417z m110.145 238.648c-44.046 0-88.153-7.317-132.153-21.999-11.073-3.717-25.763 0-36.79 7.31l-80.773 80.788c-102.726-51.417-187.28-139.516-242.35-242.35l80.78-80.789c11.082-10.973 14.736-25.655 7.373-36.682-11.027-40.437-18.344-84.443-18.344-128.535 0-22.054-14.737-36.68-36.728-36.68H216.337c-22.045 0-36.728 14.626-36.728 36.68 0 345.178 279.086 624.21 624.219 624.21 21.998 0 36.68-14.735 36.68-36.727v-128.49c0-22.053-14.683-36.736-36.68-36.736M767.1 474.235h73.41v-73.417H767.1v73.417z"
                p-id="3155"></path>
            </svg>
          139-0129-5637</router-link>
        </div> 
      </div>
      <div class="store-stylist">
        
        <div class="stylist-title"><h4>门店设计师</h4><span>查看更多></span></div>
        <van-swipe class="my-swipe" :width="200" :touchable="true" :loop="false" :show-indicators="false">
          
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>1</van-swipe-item>
          

          
        </van-swipe>
        <div class="stylist-title"><h4>门店案例</h4><span>查看更多></span></div>
        <van-swipe class="my-swipe" :width="150" :touchable="true" :loop="false" :show-indicators="false">
          <div class="swipe-warp-stylist" style="height: 200px;">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
          </div>
        </van-swipe>
        
        <div class="stylist-title"><h4>在线工地</h4><span>查看更多></span></div>
        
        <van-swipe class="my-swipe" :width="120" :touchable="true" :loop="false" :show-indicators="false">
          <div class="swipe-warp-store" style="height: 200px;">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
          </div>
        </van-swipe>
        
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import titleBar from '@/components/titleBar/titleBar.vue'
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  components: {
    titleBar
  }
}
</script>

<style lang="scss" scoped>
  .content-warp{
    height: 2000px;
    .design-center{
      background: white;
      height: 500px;
      margin: 15px;
      .center-item{
        margin: 15px;
        img{
          width: 100%;
          height: 220px;
          background-color: blue;
        }
        .monicker{
          h4{
            margin: 10px 0;
            font-size: 15px;
            font-weight: 800;
          }
          div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #333333;
            font-size: 12px;
            span{
              margin: 0 5px;
            }
          }
        }
        .dedicated-service{
          h5{
            margin: 10px 0;
            color: #666;
          }
          button{
            width: 95px;
            border: none;
            background: #D0B969;
            height: 30px;
            margin: 5px 5px;
            font-size: 12px;
          }
        }
        .contact-us{
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .contact{
            font-size: 18px;
            font-weight: 800;
            margin: 10px 0;
          }
        
        }
        .call{
          display: flex;
          justify-content: center;   
          align-items: center;
        }
        
      }
    }
    .store-stylist{ 
      .stylist-title{
        margin: 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 45px;
        h4{
          font-size: 16px;
          color: black;
          font-weight: 800;
        }
        span{
          color: #ccc;
        }
      }
      .my-swipe  {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        height: 150px;
        padding: 0 10px;
        }
      .van-swipe-item{
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        background-color: #39a9ed;
        height: 150px;
        margin: 0 5px;
      }
      .swipe-warp-stylist{
        padding: 0 100px;
        margin-left: -100px;
        display: flex;
        justify-content: center;   
        align-items: center;
        width: 1500px;
      }
      .swipe-warp-store{
        display: flex;
        justify-content: center;   
        align-items: center;
        width: 1500px;
      }
    }
  }
</style>