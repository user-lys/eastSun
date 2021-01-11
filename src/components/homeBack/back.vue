<template>
  <div>
    <van-icon class="tubiao" name="arrow-left" size="20" @click="prev"/>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
export default {
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
  left: 10px;
  top: 20px;
}

</style>