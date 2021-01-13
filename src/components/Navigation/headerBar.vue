<template>
  <div>
    <div class="header">
      <div>
        <router-link to="/city" tag="div" id="city">{{this.$store.state.currentCity}}</router-link>
        <label for="#city" class="icon"></label>
      </div>
      <h1>
        EastSun
      </h1>
    </div>
  </div>
</template>

<script>
// import from
import store from "vuex";

export default {
  // data:{
  //   currentCity: "全国",
  // },
  mounted(){
    window.onscroll = () => {
      console.log(123);
    }
  },
  computed:{
    currentCity(){
      return store.state.currentCity;
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 45px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    top: 0;
    z-index: 11;

    // display: none;
  h1 {
    flex: 1;
    margin-top: 5px;
    
    color: #000;
    font: 600 22px "微软雅黑";
    text-shadow:1px 1px 1px #000, -1px -1px 1px #fff;
  }
  #city {
    font-size: 15px;
    position: absolute;
    left: 15px;
    top: 55%;
    transform: translateY(-50%);
  }
  .icon {
    width:0;
    height:0;
    border-left:6px solid transparent;
    border-bottom:6px solid #ccc;
    position: absolute;
    left: 44px;
    top: 29px;
    }
  }
</style>
