<template>
  <div class="title-warp">
    <Back class="back"></Back>
    <Home class="home"></Home>
    <slot class="title"></slot>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Back from "@/components/homeBack/back.vue";
import Home from "@/components/homeBack/home.vue";
export default {
  components: {
    Back,
    Home
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.title-warp{
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-content: center;
  line-height: 45px;
  position: fixed;
  top: 0px;
  font-size: 18px;
  font-weight: 600;
  background:white;
  z-index: 999;
  .back{
    @include icon-position(10px,-8px)
  }
  .home{
    @include icon-position(10px,-8px)
  }
}

</style>

