<template>
  <div class="index-warp">
   <div class="site-warp">
     <img src="" alt="">
     <div class="site-content">
       <h4>是梵蒂冈是否大风十大范德萨发</h4>
       <div>装修风格:<span></span></div>
       <div>户型:<span></span>面积:<span></span> </div>
     </div>
   </div>
   <div class="site-more"><span>查看更多></span> </div>
  </div>
</template>

<style lang="scss" scoped>
.index-warp{
  .site-warp{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px 0;
  img{
    width: 120px;
    height: 100px;
    background-color: red;
  }
  .site-content{
    height: 100px;
    h4{
      width: 220px;
      font-size: 16px;
      color: #666;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    div{
      margin: 10px 0;
      span{
        margin: 0 5px;
      }
    }
  }
  }
  .site-more{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
  }
}
</style>