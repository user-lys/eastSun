<template>
  <div>
    <div class="swiper-container" :key="ProcessInfo.length">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in ProcessInfo"
          :key="index" style="height: 220px
          "
        >
          <div class="img">
            <img :src="item.image + '!l'" alt="" />
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
// 导入网络请求
import { getPhotoInfo } from "@/api/index";
export default {
  data() {
    return {
      show: false,
      ProcessInfo: [],
    };
  },
  name: "Slider",
  methods: {
    showPopup() {
      this.show = true;
    },
    _initSwiper() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          scrollbar: ".swiper-scrollbar",
          slidesPerView: "auto",
          spaceBetween: 30,
        });
      });
    },
    // 发送请求
    async getPhotoInfos() {
      const PhotoInfo = await getPhotoInfo();
      console.log(PhotoInfo);
      console.log(PhotoInfo.data.list);
      this.ProcessInfo = PhotoInfo.data.list;
      this._initSwiper();
    },
  },
  created() {
    this.getPhotoInfos();
  },
};

</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 250px;
  margin: 0px auto;
  // background-color: #f7f7f7;
}
.swiper-slide {
  .img{
    width: 260px;
    height: 220px;
    img {
    width: 100%;
    height: 100%;
  }
  }
  margin: 5px 0px;
  font-size: 18px;
  background: #fff;
  width: 260px;
  height: 250px;
  display: flex;
  flex-direction: column;
  // background-color: white;

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