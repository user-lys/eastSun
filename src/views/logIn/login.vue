<template>
  <div class="bdy">
    <van-form @submit="onSubmit" class="form">
      <titleBar><div>登录</div></titleBar>
      <div class="text">
        <h1>东易日盛装饰</h1>
      </div>
      <div class="u_p">
        <div>
          <input
            type="text"
            placeholder="请输入手机号"
            autocomplete="off"
            class="username"
            v-model="mobile"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="请输入密码"
            autocomplete="off"
            class="password"
            v-model="password"
          />
        </div>
      </div>
      <div class="footer">
        <div
          style="margin: 20px; margin-left: 0px; margin-bottom: 30px"
          class="login"
        >
          <button type="info" native-type="submit">登录</button>
        </div>
        <div style="margin: 20px; margin-left: 0px" class="express">
          <button round block>微信用户快捷登录</button>
        </div>
        <p class="read">
          点击登录，即表示您已阅读并同意<a href="">《东易日盛用户协议》</a>
        </p>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Form ,Toast} from "vant";
import titleBar from "@/components/titleBar/titleBar";
import { getLogin } from "@/api/index";
Vue.use(Form);
export default {
  data() {
    return {
      mobile: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      const a = await getLogin({
      mobile: this.mobile,
      password: this.password,
    });
    console.log(a);
    if(a.message == "ok"){
        this.$router.push("/index/stylists");
    }else{
        Toast("手机号或密码错误");
    }
    },
    back() {
      this.$router.go(-1);
    },
  },

  components: {
    titleBar,
  },
};
</script>

<style lang="scss" scoped>
.bdy {
  padding: 0px;
  overflow: hidden;
  width: 100%;
  height: 668px;
  background: url("../../assets/image/bj.png") no-repeat;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.form {
  padding-top: 30px;
}
.header {
  width: 100%;
  height: 50px;
}
.u_p {
  width: 100%;
  position: absolute;
  bottom: 300px;
}
.u_p > div {
  color: black;
  border-bottom: 1px solid black;
  width: 80%;
  margin-left: 10%;
}
.u_p input {
  line-height: 40px;
  width: 80%;
  margin-left: 10%;
  margin-top: 10px;
  border: 0;
  background: transparent;
}
.text > h1 {
  color: white;
  letter-spacing: 1px;
  font-size: 30px;
  position: absolute;
  width: 200px;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
}

.footer {
  background: transparent;
  position: absolute;

  bottom: 80px;
  width: 80%;
  margin: 10%;
}
.footer > div {
  text-align: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}
button {
  margin: 0;
  border: 0;
  outline: none;
  background: rgba(255, 255, 255, 0.8);
}
.read {
  // color:white;
  font-size: 12px;
  position: absolute;
  bottom: -100px;
}
.read > a {
  color: yellow;
}
</style>