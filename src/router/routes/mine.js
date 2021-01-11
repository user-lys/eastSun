import Center from "@/views/logIn/index"
import Login from "@/views/logIn/login"
import Collect from "@/views/mySelect/index.vue"
import MySelect from "@/views/mySelect"//没用整个，用了上面的
import Price from "@/views/offer/index"
import Mine from "@/views/home/mine"
let login = [
  {
    //个人中心页面
    path: '/center',
    component: Center,
    // children:[
    //   {path:"collect",component:Collect},
    // ],
  },
  {
    //收藏页面
    path: '/center/collect',
    component: Collect,
  },
  {
    //登录页面
    path: '/login',
    component: Login
  },
  {
    path: '/myselect',
    component: MySelect
  },
  {
    //我要报价
    path: '/center/price',
    component: Price
  },
  {
    path: '/mine',
    component: Mine
  },

]

export default login