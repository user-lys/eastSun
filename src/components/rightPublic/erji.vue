<template>
  <div>
    <div class="erji" @click="erji">
      <van-icon name="service-o" size="35" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);

export default {
  methods: {
    erji() {
      Toast("网络繁忙");
    },
  },
};
</script>
<style lang="scss">
.erji {
  position: absolute;
  right: 10px;
  bottom: 260px;
  z-index: 9999;
  width: 60px;
  height: 60px;
  border: 1px solid #d7cfbf;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
}
</style>
