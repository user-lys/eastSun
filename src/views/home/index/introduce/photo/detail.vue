<template>
  <div class="content-warp">
    <titleBar>
      <div>空间相册</div>
    </titleBar>
    <div class="swiper-warp" style="overflow:hidden">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
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
      </div>
    </div>
    
    <div class="space-warp">
      <div class="space-stylist">
        <h4>凤凰城-120平米</h4>
      </div>
      <div class="space-item">
        <img src="" alt="">
        <div class="space-content">
          <h6>王旺旺</h6>
          <div>别墅高级专家</div>
          <div>从业10年 fdsaf</div>
          <button>找TA设计</button>
        </div>
      </div>
    </div>
    <div class="contact-us">
 <router-link tag="div" class="contact" to="#">联系我们</router-link>
    <router-link tag="div" class="call" to="#">
      <svg t="1610267445656" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="3154" width="30" height="20">
        <path
          d="M546.795 400.819h-73.417v73.417h73.417v-73.417z m146.888 0h-73.417v73.417h73.417v-73.417z m110.145 238.648c-44.046 0-88.153-7.317-132.153-21.999-11.073-3.717-25.763 0-36.79 7.31l-80.773 80.788c-102.726-51.417-187.28-139.516-242.35-242.35l80.78-80.789c11.082-10.973 14.736-25.655 7.373-36.682-11.027-40.437-18.344-84.443-18.344-128.535 0-22.054-14.737-36.68-36.728-36.68H216.337c-22.045 0-36.728 14.626-36.728 36.68 0 345.178 279.086 624.21 624.219 624.21 21.998 0 36.68-14.735 36.68-36.727v-128.49c0-22.053-14.683-36.736-36.68-36.736M767.1 474.235h73.41v-73.417H767.1v73.417z"
          p-id="3155"></path>
      </svg>
    139-0129-5637</router-link>
    </div>
   
  </div>

</template>

<script>
import swiper from "swiper"
import titleBar from '@/components/titleBar/titleBar.vue'
export default {
  components: {
    titleBar
  },
  mounted () {
    var swiper = new Swiper('.swiper-container');   
  }

}
</script>

<style lang="scss" scoped>
    html,
    body {
      position: relative;
      height: 100%;
    }

    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      margin: 0;
      padding: 0;
    }
    .swiper-warp{
      height: 300px;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      height: 300px;
      background: #fff;
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
    .space-warp{
    background: white;
    margin-top: 15px;
    padding-bottom: 10px;
    .space-stylist{
    display: flex;
    justify-content: start;
    align-items: center;
    h4{
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    }

    }
    .space-item{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: white;
    img{
    width: 120px;
    height: 120px;
    background: red;
    }
    .space-content{
    margin-left: 15px;
    width: 200px;
    font-size: 16px;
    height: 120px;
    h6{
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 15px;
    }
    div{
    font-size: 13px;
    color: #ccc;
    margin: 6px 0;
    }
    button{
    background-color: white;
    font-size: 14px;
    width: 100px;
    height: 25px;
    border: 1px solid #333;
    }
    }
    }
    }
    .contact-us{
      margin-top: 12px;
      background: white;
      .contact {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 33px;
        font-size: 18px;
        font-weight: 800;
        margin: 0 auto;
      }

      .call {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160px;
        font-size: 15px;
        font-weight: 500;
        margin: 0 auto; 

      }
    }
    
</style>