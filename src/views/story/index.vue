<template>
  <div class="header" style="padding:0px">
    <titleBar><div>业主故事详情</div></titleBar>
    <!-- 头部 -->
    <div class="top">
      <div class="img">
        <img
          :src="storyList.avatar"
          alt=""
        />
      </div>
      <div class="right">
        <h2>{{storyList.add_user}}</h2>
        <p>{{storyList.provinces_cities}}</p>
      </div>
    </div>
    <div class="text">
      {{storyList.sgz_content}}
    </div>
    <div class="jiazaizhong">加载中...</div>
    <div class="center">
      <p class="p1">
        <img :src="storyList.title_image" alt="">
      </p>
      <p class="p2">
        <img :src="storyList.title_image" alt="">
      </p>
    </div>
    <share></share>
    <div class="wojia"><p>我家也要装成这样</p></div>

    <div class="changedemo">
      <div class="changedemoinner">
        <p>立即获取装修方案</p>
      </div>
    </div>

    <div class="last"><van-icon name="phone-o" /><span>400-0060-250</span></div>

    <erji></erji>
    <phone></phone>
  </div>
</template>
<script>

import erji from "@/components/rightPublic/erji";
import phone from "@/components/rightPublic/phone";
import share from "@/components/sharePublic/share";
import titleBar from "@/components/titleBar/titleBar"
import { getStoryDel,getLogin } from "@/api/index";
export default {
  data(){
    return{
      storyList:[],
    }
    
  },
  components:{
    erji,
    phone,
    share,
    titleBar,
  },
  methods:{
    async getStoryDels() {
      console.log(this.$route.params.storyId);
      const storyDel = await getStoryDel({id:this.$route.params.storyId})
      this.storyList = storyDel.data;    
      },
  },
  async created() {
    this.getStoryDels()
  }
}
</script>
<style lang="scss">
.header{
  overflow-x: hidden;
}
.top {
  width: 100%;
  display: flex;
  margin-left: 10px;
  .img {
    width: 60px;
    height: 60px;
    // border: 1px solid #cccccc;
    border-radius: 30px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .right {
    margin-left: 10px;
    h2 {
      font-size: 18px;
      margin: 5px;
    }
    p {
      margin: 5px;
      color: gray;
    }
  }
}
.text {
  margin: 30px 20px 30px 10px;
  font-size: 20px;
}
.jiazaizhong {
  margin: 0px 0px 30px 10px;
  font-size: 20px;
}
.center {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .p1 {
    width: 350px;
    height: 400px;
    background: red;
    margin-bottom: 10px;
  }
  .p2 {
    width: 350px;
    height: 400px;
    background-color: gray;
  }
}
// .share {
//   font-size: 20px;
//   display: flex;
//   justify-content: flex-end;
//   width: 100%;
//   div{
//     margin: 15px 20px;
//   }
// }

.wojia {
  width: 100%;
  color: #666666;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 800;
}
.changedemo {
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  font-weight: 800;
  .changedemoinner {
    color: #cbb466;
    width: 90%;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
}
.last {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
// .main{
//   padding-bottom: 0px;
// }
</style>