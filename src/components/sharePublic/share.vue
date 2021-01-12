<template>
  <div>
    <div class="share">
      <div @click="fenxing"><van-icon name="share-o" />分享</div>
      <div @click="shouc"><van-icon name="star-o" />收藏</div>
      <div @click="dianzan"><van-icon name="good-job-o" />点赞</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon,Toast} from "vant";

Vue.use(Icon);
Vue.use(Toast);

export default {
    methods:{
    fenxing(){
      Toast("分享成功");
    },
     shouc(){
      Toast("收藏成功");
    },
     dianzan(){
      Toast("点赞成功");
    }
  },
}
</script>
<style lang="scss">
    .share {
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  div{
    margin: 15px 10px;
  }
}
</style>