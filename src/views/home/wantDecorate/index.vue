<template>
  <div>
    <div class="header">我要装修</div>
    <div class="center">
      <h2>三步搞定装修</h2>

      <div class="img">
        <div>
          <img src="../../../assets/want/woyaozhuanxiu.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
body {
  background-color: #f1f1f1;
}
.header {
  width: 100%;
  height: 70px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background-color: white;
}
.center {
  background-color: white;
  h2 {
    width: 100%;
    height: 90px;
    font-size: 25px;
    font-weight: 600;
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
    div{
      width: 92%;
      height: 384px;
      img{
        width: 100%;
        height: 100%;
      }
    }

  }
}
</style>