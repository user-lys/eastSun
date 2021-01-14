<template>
  <div class="wantouter">
    <div class="headers">
    <div class="header">我要装修</div>
    </div>
    <div class="center">
      <h1>三步搞定装修</h1>

      <div class="img">
        <div>
          <img src="../../../assets/want/woyaozhuanxiu.png" alt="" />
        </div>
      </div>
      <div class="footer">
        <p>
          <img src="../../../assets/want/touxiang.png" alt="" />
        </p>
        <div class="sanbu">10441人在使用3步装修法</div>
      </div>
    </div>

    <div class="zuihou">
      <div class="changedemo">
        <div class="changedemoinner">
          <p>我要装修</p>
        </div>
      </div>
    </div>

    <erji />
    <phone />
  </div>
</template>
<script>
  import erji from "@/components/rightPublic/erji"
  import phone from "@/components/rightPublic/phone"
  import { mapMutations} from 'vuex'

export default {
  components:{
    erji,
    phone,
  },
  methods:{
      ...mapMutations({
        setFooter:"setFooter",
        getCurrentPath:"getCurrentPath"
        }),
  },
  created(){
    this.setFooter(true);
  },
  beforeDestroy(){
    const str = window.location.href.split("#")[1];
    // this.setFooter(false);
    if(str == "/mine"){
        this.setFooter(true);
      }else if(str == "/want"){
        this.setFooter(true);
      }else if(str == "/index/stylists"){
        this.setFooter(true);
      }else{
         this.setFooter(false);
      }
  }
};
</script>

<style lang="scss" scoped>
.wantouter{
  background-color: #f1f1f1;
}
.headers{
  width: 100%;
  height: 70px;
    margin-bottom: 10px;
}
.header {
  width: 100%;
  height: 70px;
  font-size: 20px;
  font-weight: 600;
  font-family: Microsoft YaHei;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
}
.center {
  background-color: white;
  h1 {
    width: 100%;
    height: 90px;
    font-size: 25px;
    font-weight: 900;
    font-family: Microsoft YaHei;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-weight: 600;
  }
  .img {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 92%;
      height: 384px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .footer {
    height: 40px;
    margin-bottom: 30px;
    p {
      img {
        width: 100%;
        height: 100%;
      }
      width: 180px;
      height: 30px;
      // margin-bottom: 10px;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      color: gray;
    }
  }

  .changedemo {
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    font-weight: 800;
    background-color: yellow;
    .changedemoinner {
      color: #cbb466;
      font-family: Microsoft YaHei;
      width: 90%;
      height: 54px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
    }
  }
}
.zuihou{
  width: 100%;
  height: 54px;
  background-color: white;
}
</style>
