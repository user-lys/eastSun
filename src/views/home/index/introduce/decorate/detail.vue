<template>
  <div class="bigShowBox">
    <titleBar><div>攻略详情</div></titleBar>
    <div class="smallShowBox">
      <h1>{{ list.title }}</h1>
      <div v-html="list.content" class="showBox"></div>
    </div>
  </div>
</template>

<script>
import { getDecorateDetail } from "@/api/index.js";
import titleBar from "@/components/titleBar/titleBar"
export default {
  data() {
    return {
      value: "",
      list: [],
    };
  },
  methods: {
    async getDecorateDetails() {
      let ret = await getDecorateDetail();
      this.list = ret.data;
    },
  },
  created() {
    this.getDecorateDetails();
  },
  components:{
    titleBar,
  }
};
</script>
<style lang="scss" scoped>
.smallShowBox {
  width: 90%;
  margin: 0 auto;
}
</style>


