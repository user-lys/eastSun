<template>
  <div>
    <div class="title-warp">
      <back />
      <div class="title">裝修流程</div>
      <home />
    </div>

    <div class="xiazhengti">
      <div class="img">
        <img
          src="https://imgs.easyliao.com/M00/3D/BE/Ch6jw1-17MiAH-67AAGlDrAWx4I604.png"
          alt=""
        />
      </div>
      <van-cell is-link @click="showPopup">
      <div class="process">
        <div class="process1">
          <img src="../../assets/process/img/process1.png" alt="" />
        </div>
        <div class="process2">
          <img src="../../assets/process/img/process2.png" alt="" />
        </div>
      </div>
      </van-cell>
      <van-popup v-model="show">预约成功，我们会</van-popup>


    </div>

    <div class="demo">
      <h3>推荐案例</h3>
      <div @click="more">更多></div>
    </div>

    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/process/img/tuijian-img.png" alt="">
          <div>
            <h5>东方瑞景-91.7平米-现代风格...</h5>
            <p><span class="span1">北京市</span> <span class="span2"><van-icon name="eye-o" />23</span>  <span class="span3"><van-icon name="good-job-o" />1</span></p>
          </div>
        </div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
        <div class="swiper-slide">Slide 10</div>
      </div>
      <!-- Add Scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>


    <div class="dixian">
      <div><van-icon name="minus" />我们是有底线的<van-icon name="minus" /></div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import {Icon,Popup} from 'vant'; 
Vue.use(Icon);
Vue.use(Popup);
import back from "@/components/homeBack/back";
import home from "@/components/homeBack/home";

// 引入swiper

import "../../../node_modules/swiper/dist/js/swiper.js";
import Swiper from "swiper";

export default {
    data() {
    return {
      show: false,
    };
  },

  components: {
    back,
    home,
  },
  name: "Slider",
  methods: {
    showPopup() {
      this.show = true;
    },

    more(){
      this.$router.push('/case');
    },
    _initSwiper() {
       new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
    });
    },
  },
  mounted() {
    this._initSwiper();
  },
};
</script>
<style lang="scss" scoped>
@import "../../../node_modules/swiper/dist/css/swiper.min.css";

.title-warp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: white;
  .title {
    font-size: 18px;
    font-family: "Courier New", Courier, monospace;
    position: fixed;
  }
}

.xiazhengti {
  z-index: -1;
  .img {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .process {
    width: 100%;
    height: 820px;
    margin-top: 40px;
    .process1 {
      width: 100%;
      height: 500px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .process2 {
      width: 100%;
      height: 300px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.demo {
  width: 100%;
  height: 85px;
  background-color: #f7f7f7;
  padding: 0px 15px;
  h3 {
    line-height: 85px;
    float: left;
    font-size: 18px;
  }
  div {
    line-height: 85px;
    float: right;
    color: gray;
  }
}

.swiper-container {
  width: 100%;
  height: 300px;
  margin: 0px auto;
  background-color: #f7f7f7;
}
.swiper-slide {
  img{
    width: 100%;
    height: 100%;
  }
  h5{
    margin-left: 10px;
    width: 280px;
    margin: 10px 0px;
  }
  p{
    color: gray;
    margin: 10px 0px 20px 10px;
    display: flex;
    // justify-content: center;
    align-items: center;
    .span1{
      display: flex;
      align-items: center;
      margin: 0px 120px 10px -10px;
    }
    .span2{
      display: flex;
      // justify-content: center;
      align-items: center;
      margin-right: 20px;
    }
  }
  font-size: 18px;
  background: #fff;
  width: 320px;
  height: 280px;
  display: flex;
  flex-direction: column;
  background-color: white;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.dixian{
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  background-color:#f7f7f7;
  van-icon{
    display: flex;
    align-items: center;
  }
}
</style>