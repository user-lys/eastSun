<template>
 <div class="case">
    <div class="caseBigBox">
    <div class="caseFixed">
      <!-- <div class="caseHeader"><h1>装修案例</h1></div> -->
      <titleBar><div>装修案例</div></titleBar>
      <van-search v-model="value" shape="round" placeholder="请输入您要搜索的内容" />
      <div class="classify">
        <span>北京<i class="iconfont icon-f11-copy"></i></span>
        <span>面积<i class="iconfont icon-f11-copy"></i></span>
        <span>户型<i class="iconfont icon-f11-copy"></i></span>
        <span>风格<i class="iconfont icon-f11-copy"></i></span>
      </div>
    </div>
    <div class="guanggao">
      <img src="https:\/\/imgapp.dyrs.cc\/xcx\/uploads\/20200915\/c2a936a8919154f50f1f691c07668f12.png" alt="">
    </div>

    <div class="caseBox" v-for="item in list" :key="item.id" @click="tozxal(123)">
      <h3>{{item.title}}</h3>
      <p>
        <span v-if="item.housetype.name !== null">{{ item.housetype.name }} | </span>
        <span v-if="item.housestyle.name !== null">{{ item.housestyle.name }} | </span>
        <i>{{item.area}}平</i>
      </p>

      <div class="caseImgBox">
        <div v-for="(el,index) in item.photofile" :key="el.id"  >
           <img v-if="index<3" :src="el.image+'!l'" alt="">
      </div>
      </div>
      
      <div class="smalliconfont">
        <p>
          <van-icon name="eye-o"/> <span>{{item.views}}</span>
          <van-icon name="good-job-o" /> 0
        </p>
       <p> <van-icon name="star-o" /> 收藏</p>
      </div>
    </div>

  </div>
 </div>
</template>
<script>
import "@/assets/font/iconfont.css"
import { getCase } from '@/api/index.js'
import Vue from 'vue';
import { Search } from 'vant';
import titleBar from "@/components/titleBar/titleBar"

Vue.use(Search);
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
    tozxal(id){
      this.$router.push("casedel/"+id);
    },
    async getCases(){
      let ret = await getCase({
        // https://xcx2020.dyrs.com.cn/api/subject?site_id=1page=1&pageSize=10&keyword=&house_area_id=0&house_type_id=0
        // https://xcx2020.dyrs.com.cn/api/subject?site_id=1&page=1&pageSize=10&keyword=&house_area_id=0&house_type_id=0
        site_id:'1',
        page:'1',
        pageSize:'10',
        keyword:'',
        house_area_id:'0',
        house_type_id:'0'
        
      })
      console.log(ret);
      console.log(ret.data)
      this.list = ret.data.list
    }
  
  },
 created(){
    this.getCases()
    
  }
}
</script>
<style lang="scss" scoped>
  .case{
    width: 100%;
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
  .classify{
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-grow: 0;
  }
  .caseBigBox{
    background-color: #F7F7F7;
    width: 100%;
    
  }
  .guanggao{
    margin: 10px 0 10px 0;
  }
  .guanggao img{
    width: 100%;
  }
  .caseBox{
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 10px;
    margin-bottom: 10px;
  }
  .caseBox p{
    font-size: 14px;
    margin-bottom: 20px;
    color: #666666;
  }
  h3{
    line-height: 1;
    font-size: 16px;
    color: #333333;
    margin-top: 18px;
    margin-bottom: 12px;
  }
  // .caseImgWarp{
  //   display: flex;
  //   flex-wrap: nowrap;
  // }
  .caseImgBox{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .caseImgBox img{
    width: 98%;
    margin-bottom: 5px;
  }
  .smalliconfont{
    display: flex;
    justify-content: space-between;
  }
  .smalliconfont p span{
    margin-right: 15px;
  }
 
</style>