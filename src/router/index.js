import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import homeRouter from './routes/home'
import wantRouter from './routes/wantDecoration'
import mineRouter from './routes/mine'

const routes = [
  {
    path: "/",
    redirect: "/index/stylists"
  },
  ...homeRouter,
  ...wantRouter,
  ...mineRouter,

];
const router = new VueRouter({
  routes
})

export default router
