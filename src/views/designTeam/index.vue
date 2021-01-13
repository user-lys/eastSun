<template>
  <div>
    <div class="caseFixed">
      <!-- <div class="caseHeader"><h1>设计团队</h1></div> -->
      <titleBar><div>设计团队</div></titleBar>
      <van-search v-model="value" shape="round" placeholder="请输入您要搜索的内容" />
      <div class="classify">
        <span>北京<i class="iconfont icon-f11-copy"></i></span>
        <span>擅长户型<i class="iconfont icon-f11-copy"></i></span>
        <span>擅长风格<i class="iconfont icon-f11-copy"></i></span>
        <span>类型<i class="iconfont icon-f11-copy"></i></span>

      </div>
    </div>
    <div class="guanggao">
      <img src="https:\/\/imgapp.dyrs.cc\/xcx\/uploads\/20200915\/c2a936a8919154f50f1f691c07668f12.png" alt="">
    </div>
    <ul>
     
       <li v-for="item in list" :key="item.id" @click="tostory(100887)">
        <img :src="item.avatar" alt="">
        <div class="fixHight">
          <h3>{{item.name}}</h3>
          <h4>{{item.level.value}}</h4>
          <h5>作品 : {{ item.case_num }}套  经验 : {{item.work_years}}年</h5>
          <p>擅长风格 : {{ item.house_styles.join('、') }}</p>
        </div>
        <button>找TA设计</button>
      </li>
    </ul>
  </div>
</template>
<script>
import titleBar from "@/components/titleBar/titleBar"
import { getTeam } from '@/api/index.js'
export default {
  components:{
    titleBar,
  },
  data() {
    return {
      value:'',
      list: []
    }
  },
  methods:{
    tostory(id){
      this.$router.push("stylist/" + id);
    },

    async getTeams(){
      let ret = await getTeam(
        // https://xcx2020.dyrs.com.cn/api/subject?site_id=1page=1&pageSize=10&keyword=&house_area_id=0&house_type_id=0
        // https://xcx2020.dyrs.com.cn/api/subject?site_id=1&page=1&pageSize=10&keyword=&house_area_id=0&house_type_id=0
        {
          site_id:'1',
          page:'1',
          pageSize:'10',
          keyword:'',
          house_area_id:'0',
          house_type_id:'0'
        }
        
      )
      console.log(ret);
      this.list = ret.data.list
    }
  
  },
 created(){
    this.getTeams()
    
  }
}
</script>
<style lang="scss" scoped>
  *{
    line-height: 1;
    // font-size: 12px;
    color: #7B7B7B;
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
  }
  .guanggao img{
    width: 100%;
  }
  .guanggao{
    margin: 10px 0 10px 0;
  }
  .fixHight{
    height: 130px;
  }
  ul{
    width: 98%;
    margin: 0 auto;
    display: flex; 
    flex-flow: wrap;
    justify-content: space-around;
  }
  li{
    width: 45%;
    font-size: 12px;
  }
  li img{
    width: 100%;
  }
  ul li h3{
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 16px;
    color: #333333;
  }
  h4,h5{
    font-weight: normal;
    margin-bottom: 12px;
  }
  ul li p{
    line-height: 18px;
    margin-bottom: 12px;
    width: 100%;
  }
  ul li button{
    width: 50%;
    height: 25px;
    display: flex;
    margin: 15px auto;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    color: #D0B969;
    border: 0;



  }
</style>