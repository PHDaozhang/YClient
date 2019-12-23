import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const mainChildRoutes = [
];

const constantRoutes = [
  {
    path:"/",
    component:()=>import("@/views/index/start"),
    children:mainChildRoutes,
  }
]; 


export default new Router({
  mode:'history',
  routes:constantRoutes
})
