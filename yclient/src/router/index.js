import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const mainChildRoutes = [
  {
    path:"",
    component:()=>import("@/views/main/index.vue")
  },
  {
    path:"m*/:id",
    component:()=>import('@/views/main/movie/index.vue'),
     },
  {
    path:"n*/:id",
    component:()=>import('@/views/main/novel/index.vue'),
  },
  {
    path:"p*/:id",
    component:()=>import('@/views/main/pic/index.vue'),
  }
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
