<template>
  <div>
    <!-- 头部 -->
    <div></div>
    <div class="top">
      <div class="img">
        <img
          src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1561232978,2405921637&fm=111&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="right">
        <h2>机场雷雨</h2>
        <p>浙江省-杭州市-新中式</p>
      </div>
    </div>
    <div class="text">
      哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
    </div>
    <div class="jiazaizhong">加载中...</div>
    <div class="center">
      <p class="p1"></p>
      <p class="p2"></p>
    </div>

    <!-- <div class="share">
        <div @click="fenxing"><van-icon name="share-o" />分享</div>
        <div @click="shouc"><van-icon name="star-o" />收藏</div>
        <div @click="dianzan"><van-icon name="good-job-o" />点赞</div>
    </div> -->
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
export default {
  
  components:{
    erji,
    phone,
    share,
  }
};
</script>
<style lang="scss">
.top {
  width: 100%;
  display: flex;
  .img {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
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

.wojia{
  width: 100%;
  color: #666666;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 800;
}
.changedemo{
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  font-weight: 800;
  .changedemoinner{
    color: #cbb466;
      width: 90%;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
}
.last{
  height: 80px;
  width: 100%;
  display: flex;
    justify-content: center;
    align-items: center;
}
</style>