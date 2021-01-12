<template>
  <div>
    装修攻略
    <!-- <div class="loupan" v-for="item in list" :key="item.id"> -->
    <div class="loupan">
      <!-- <img :src="item.cover_image" alt=""> -->
      <img src="https:\/\/img.dyrs.cc\/store\/765\/083\/000\/249572085af45846.jpg" alt="">
      <div class="smallBox">
        <h3><i>房子再小也要把这七个地方装...</i> <b><van-icon name="eye-o" />72</b></h3>
        <p>家里杂物多怎么办?家杂物越来越多怎么办?快看过来,对于小户型..</p>
        <!-- <p>地点： {{item.address.length > 25 ? item.address.substr(0,25) + '...' : item.address}}</p> -->
      </div>
    </div>
    <div class="loupan">
      <!-- <img :src="item.cover_image" alt=""> -->
      <img src="https:\/\/img.dyrs.cc\/store\/765\/083\/000\/249572085af45846.jpg" alt="">
      <div class="smallBox">
        <h3><i>房子再小也要把这七个地方装...</i> <b><van-icon name="eye-o" />72</b></h3>
        <p>家里杂物多怎么办?家杂物越来越多怎么办?快看过来,对于小户型..</p>
        <!-- <p>地点： {{item.address.length > 25 ? item.address.substr(0,25) + '...' : item.address}}</p> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .loupan{
    display: flex;
    width: 95%;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 10px;
    margin-bottom: 3px;
    font-size: 12px;
  }
  .loupan img{
    width: 30%;
    margin-right: 10px;
   
  }
  .smallBox h3{
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    width: 230px;
  }
  .smallBox h3 b{
    font-weight: normal;
  }
  .smallBox p{
    margin-top: 10px;
  }
  .smallBox p:nth-of-type(3){
    line-height: 22px;
  }
</style>