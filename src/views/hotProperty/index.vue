<template>
  <div class="bigBox">
     <div class="caseFixed">
      <!-- <div class="caseHeader"><h1>热装楼盘</h1></div> -->
      <titleBar><div>热门楼盘</div></titleBar>
      <van-search v-model="value" shape="round" placeholder="请输入您要搜索的内容" />
    </div>
    <div class="guanggao">
      <img src="https:\/\/imgapp.dyrs.cc\/xcx\/uploads\/20200915\/c2a936a8919154f50f1f691c07668f12.png" alt="">
    </div>

    <div class="loupan" v-for="item in list" :key="item.id" @click="tormlp(123)">
      <img :src="item.cover_image" alt="">
      <div class="smallBox">
        <h3><i>{{ item.name }}</i> <b><van-icon name="eye-o" />{{ item.views }}</b></h3>
        <p>在施工地 : <i>{{ item.construction_num ?  item.construction_num + "户" : "更新中..."}} </i></p>
        <p>相关案例 :  {{ item.case_num ?  item.case_num + "户" : "更新中..."}}</p>
        <p>地点： {{item.address.length > 25 ? item.address.substr(0,25) + '...' : item.address}}</p>
      </div>
    </div>
    
  </div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';
import titleBar from "@/components/titleBar/titleBar"
Vue.use(Icon);
import { getHotProperty } from '@/api/index.js'
export default {
  data() {
    return {
      value:'',
      list: []
    }
  },
  components:{
    titleBar,
  },
  methods:{
    tormlp(id){
      this.$router.push("hotprodel/"+id);
    },
    async getHotPropertys(){
      let ret = await getHotProperty({
        site_id:1,
        page:1,
        pageSize:10
      })
      this.list = ret.data.list
    }
  
  },
 created(){
    this.getHotPropertys()
    
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
    width: 40%;
    margin-right: 10px;
   
  }
  .smallBox h3{
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    width: 200px;
  }
  .smallBox h3 b{
    font-weight: normal;
  }
  .smallBox p, .smallBox span{
    margin-top: 10px;
  }
  .smallBox p:nth-of-type(3){
    line-height: 22px;
  }
</style>