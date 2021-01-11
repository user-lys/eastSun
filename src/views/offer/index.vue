<template>
  <div class="entire">
    <!-- offer page -->
     <div class="head">
       <div class="header" >
          <span class="sp1" @click="back">
              <img src="../../assets/image/xiaoyuhao1.png" alt="" style="width:25px;margin-left:10px;">
          </span>
          <span style="margin-left:10px;font-size:16px;line-height:1;" @click="back">返回</span>
          <span class="sp2">
              <img src="../../assets/image/fangzi1.png" alt="" style="width:25px;margin-left:10px;">
          </span>
          <span class="sp3" style="font-weight:800;color:black;">装修报价</span>
        </div>
        <div class="center" style="margin-top:10px;"> 
          <img src="../../assets/image/calculate.png" alt="" style="height:200px;width:100%;">
          <h1>快速报价，做好预算更省钱</h1>
        </div>
     </div>
     <div class="bdy">
       <div class="content">
          <h1>算一算我家装修要花多少钱</h1>
          <div class="radioBox">
        　　<input type="radio" value="yes" name="reserve" id="radio_yes" checked class="inp1">
        　　<label for="radio_yes">新房装修</label>
        　　<input type="radio" value="no" name="reserve" id="radio_no">
        　　<label for="radio_no">旧房改造</label>
          </div>
          <div class="area">
            <input type="text" placeholder="我家的户型 普通住宅1室0厅0卫"><span class="span1">></span>
            <input type="text" placeholder="我家的面积 输入面积，快速报价"><span class="span2">m<sup>2</sup></span>
            <input type="button" value="立即获取报价">
          </div>
          <div class="phone">
            <span>
              <img src="../../assets/image/dianhua.png" alt="">
            </span>
            <em>400-0060-251</em>
          </div>
        </div>
       </div>
  </div>
  
</template>

<script>
export default {
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>


<style lang="scss" scoped>
body{
  overflow: scroll;
}
.entire{
  display: flex;
  flex-direction: column;
}
.entire .head{
  height:260px;
   position: relative;
}
.header{
  background: white;
  height:40px;
  position: fixed;
  top:0;
  left:0;
  z-index: 1;
}
.header .sp3{
  line-height:1;
  font-size:20px;
  position: absolute;
  left:50%;
  transform: translateX(-50%);
}
.center{
  top:55px;
  position: absolute;
  width:100%;
  height: 200px;

}
.center h1{
  margin-left:10%;
  top:50%;
  transform: translateY(-50%);
  position: absolute;
  font-weight: 800;
  font-size: 25px;

}
.content h1{
  margin-bottom: 25px;
}
.entire .bdy{
  flex:1;
  padding:20px;
  background:#f7f7f7;
}
.bdy .content{
  width:100%;
  height:100%;
  background: white;
  text-align: center;
  padding-top:20px;
}
.radioBox input{
   display: none;
}
.radioBox label{
  margin-right:10px;
    cursor: pointer;
    position: relative;
}
.radioBox label:nth-of-type(2){
  margin-left:30px;
   
}
.radioBox label::before{
    display: inline-block;
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid rgba(193, 200, 211, 1);
    margin-right: 4px;
    margin-top:-3px;
    vertical-align: middle;
}
/* 选中 */
.radioBox input:checked+label::after{
    display: inline-block;
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    left: 1.5px;
    bottom: 1.5px;
    background-color: rgb(218, 233, 15);
}
.inp1 > label{
  margin-right:25px;
}
.area{
  width: 100%;
  height:230px;
  position: relative;

}
.area .span1{
  font-size: 20px;
  position: absolute;
  top:35px;
  right:15px;
}
.area .span2{
  font-size: 15px;
  position: absolute;
  top:100px;
  right:15px;
}
.area input{
  width:95%;
  height:50px;
}
.area input:nth-of-type(1){
  margin-top:25px;
  margin-bottom: 15px;

}
.area input:nth-of-type(3){
  font-size: 18px;
  font-weight: 700;
  margin-top:15px;
  margin-bottom: 15px;
  color:gold;
  background: black;
  border:0;
}
.phone > span > img{
  width:15px;
  height:15px;
}
</style>