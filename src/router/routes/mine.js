import Login from "@/views/logIn/login"
import MySelect from "@/views/mySelect/index"
import Price from "@/views/offer/index"
import Mine from "@/views/home/mine/index"
let login = [

  {
    //登录页面
    path: '/mine/login',
    component: Login
  },
  {
    path: '/mine/myselect',
    component: MySelect
  },
  {
    //我要报价
    path: '/mine/price',
    component: Price
  },
  {
    path: '/mine',
    component: Mine
  },
]

export default login