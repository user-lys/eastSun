import Center from "@/views/logIn/index"
import Login from "@/views/logIn/login"
import Collect from "@/views/mySelect/index.vue"
import MySelect from "@/views/mySelect"//没用整个，用了上面的
import Price from "@/views/offer/index"
import Mine from "@/views/home/mine"
let login = [
  {
    path: '/center',
    component: Center,
    // children:[
    //   {path:"collect",component:Collect},
    // ],
  },
  {
    path: '/center/collect',
    component: Collect,
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/myselect',
    component: MySelect
  },
  {
    path: '/price',
    component: Price
  },
  {
    path: '/mine',
    component: Mine
  },

]

export default login