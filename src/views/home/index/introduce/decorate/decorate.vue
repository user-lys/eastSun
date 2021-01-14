<template>
  <div>
    装修攻略
    <div class="loupan" v-for="(item,index) in zxglInfo" :key="index" @click="toDetail(item.id)">
      <img
        :src="item.title_image"
        alt=""
      />
      <div class="smallBox">
        <h3>
          <i>{{item.title}}</i>
          <b><van-icon name="eye-o" />72</b>
        </h3>
        <p>家里杂物多怎么办?家杂物越来越多怎么办?快看过来,对于小户型..</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getzxgy } from "@/api/index";
export default {
  data(){
    return {
      zxglInfo:[],
    }
  },
    methods:{
      async getzxgys() {
      const zxgy = await getzxgy();
      console.log(zxgy.data.list); 
      this.zxglInfo = zxgy.data.list;
    },

    toDetail(zxglid){
      // console.log(zxglid);
      // 跳转详情页
      this.$router.push("/decoratedel/"+zxglid);
    }

    },
    created(){
      this.getzxgys();
    }
}
</script>
<style lang="scss" scoped>
.loupan {
  display: flex;
  width: 95%;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 3px;
  font-size: 12px;
}
.loupan img {
  width: 30%;
  margin-right: 10px;
}
.smallBox h3 {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  width: 230px;
}
.smallBox h3 b {
  font-weight: normal;
}
.smallBox p {
  margin-top: 10px;
}
.smallBox p:nth-of-type(3) {
  line-height: 22px;
}
</style>