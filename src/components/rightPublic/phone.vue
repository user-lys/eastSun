<template>
  <div>
    <div class="phone" @click="phone">
      <van-icon name="phone-o" size="35" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);

export default {
  methods: {
    phone() {
      Toast("无人接听");
    },
  },
};
</script>
<style lang="scss">
.phone {
   position: fixed;
  right: 10px;
  bottom: 170px;
  z-index: 9999;
  width: 50px;
  height: 50px;
  border: 1px solid #d7cfbf;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
}
</style>