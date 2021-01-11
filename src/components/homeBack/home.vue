<template>
  <div>
    <van-icon class="fangzi" name="wap-home-o" size="18" @click="home" />
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

export default {
    methods:{
        home(){
            this.$router.push("/");
        }
    }
};
</script>
<style lang="scss" scoped>
.fangzi {
  position: absolute;
  left: 50px;
  top: 20px;
}
</style>