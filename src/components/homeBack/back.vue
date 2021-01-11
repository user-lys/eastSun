<template>
  <div>
    <van-icon class="tubiao" name="arrow-left" size="18" @click="prev"/>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
export default {
//   data() {
//     return {
//         top: 20,
//         left: 20,
//     };
//   },
  methods: {
    prev() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.tubiao {
  position: absolute;
  left: 20px;
  top: 20px;
}
</style>