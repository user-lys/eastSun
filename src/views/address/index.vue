<template>
  <div class="bigBox">
     <div class="caseFixed">
      <div class="caseHeader"><h1>线下门店</h1></div>
      <div class="guanggao">
      <img src="https:\/\/imgapp.dyrs.cc\/xcx\/uploads\/20200915\/c2a936a8919154f50f1f691c07668f12.png" alt="">
    </div>
      <van-search v-model="value" shape="round" placeholder="请输入您要搜索的内容" />
    </div>
    

    <div class="address" v-for="item in list" :key="item.id">
      <img :src="item.cover_image" alt="">
      <div class="smallBox">
        <h3>{{ item.name }}</h3>
        <p class="smallAddress">
          <i>设计案例 : {{ item.case_count }}套</i>
          <b>设计师 : {{ item.designer_count }}人</b>
        </p>
        <p>户型解析 : {{ item.house_analysis_count }}套</p>
        <button>到店预约</button>
        <p class="phone"><van-icon name="phone-o" />{{ item.tel }}</p>
      </div>
    </div>

  </div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
import { getAddress } from '@/api/index.js'
export default {
  data() {
    return {
      value:'',
      list: []
    }
  },
  methods:{
    async getAddresss(){
      let ret = await getAddress({
        site_id:1,
        page:1,
        pageSize:10
      })
      this.list = ret.data.list
    }
  
  },
 created(){
    this.getAddresss()
    
  }
}
</script>
<style lang="scss" scoped>
  *{
    line-height: 1;
    color: #666666;
  }
  .caseFixed{
    background-color: #ffffff;
    // position: fixed;
    // top: 0;
    width: 100%;
  }
  .caseHeader h1{
    font-size: 18px;
    text-align: center;
  }
  .guanggao{
    margin: 10px 0 10px 0;
  }
  .guanggao img{
    width: 100%;
  }
  .bigBox{
    background-color: #F7F7F7;
  }
  .address{
    display: flex;
    width: 95%;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 10px;
    margin-bottom: 3px;
  }
  .address img{
    width: 40%;
    margin-right: 10px;
  }
  .smallBox{
    font-size: 12px;
    color: #979797;
    line-height: 30px;
    width: 60%;
  }
  .smallBox h3{
    margin-bottom: 10px;
    font-size: 14px;
    color: #333333;
  }
  .smallBox button{
    width: 100%;
    background-color: #D0B969;
    color: #000000;
    height: 30px;
    border: 0;
    margin: 5px auto 5px;
  }
  .smallAddress{
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  .smallAddress b{
    font-weight: normal;
  }
  .phone{
    text-align: center;
  }

</style>