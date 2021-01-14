<template>
  <div>
    <div class="swiper-container" :key="ProcessInfo.length">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in ProcessInfo"
          :key="index" style="height: px
          "
          @click="sjs(item.designer_id)"
        >
          <div class="img" style="margin-bottom:0px">
            <img :src="item.avatar" alt="" />
          </div>
          <h3>{{item.name}}</h3>
          <p class="congye">从业{{item.work_years}}年,作品{{item.case_num}}套</p>
          <div class="design">
            <p @click="design">找TA设计</p>
          </div>
        </div>
      </div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>
<script>
// 引入swiper
import Vue from "vue";
import { Icon, Popup, Toast } from "vant";
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Toast);
import "../../../../../../node_modules/swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
import { getshejishiInfo } from "@/api/index";
export default {
  data() {
    return {
      show: false,
      ProcessInfo: [],
    };
  },
  name: "Slider",
  methods: {
    sjs(designId){
      this.$router.push("/stylist/"+ designId);
    },
    design(){
      Toast("您已预约成功");
    },
    showPopup() {
      this.show = true;
    },
    _initSwiper() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          scrollbar: ".swiper-scrollbar",
          // scrollbarHide: true,
          slidesPerView: "auto",
          // centeredSlides: true,
          spaceBetween: 30,
          // grabCursor: true,
        });
      });
    },
    async getshejishiInfos() {
      const shejishiInfo = await getshejishiInfo();
      console.log(shejishiInfo.data.list);

      this.ProcessInfo = shejishiInfo.data.list;
      this._initSwiper() ;
    },
  },
  created() {
    this.getshejishiInfos();

  },
};
</script>
<style lang="scss">
.swiper-container {
  width: 100%;
  height: 350px;
  margin: 0px auto;
  background-color: #f7f7f7;
}
.swiper-slide {
  .img{
    width: 170px;
    height: 200px;
    img {
    width: 100%;
    height: 100%;
  }
  }
  h3{
    margin-top: 10px;
  }
  .congye{
    color: gray;
    font-size: 13px;
    margin: 10px;
  }
  .design{
    font-size: 14px;
    p{
      padding: 2px 10px;
      border: 1px solid black;
    }
  }
  margin: 5px 0px;
  font-size: 18px;
  background: #fff;
  width: 170px;
  height: 320px;
  display: flex;
  flex-direction: column;
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
</style>
