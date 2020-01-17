import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const mainChildRoutes = [
  {
    path:"",
    component:()=>import("@/views/main/index.vue")
  },
  {
    path:"movie/:id",
    component:()=>import('@/views/main/movie/index.vue'),
  },
  {
    path:"video/:id",
    component:()=>import('@/views/main/movie/index.vue'),
  },
  {
    path:"novel/:id",
    component:()=>import('@/views/main/novel/index.vue'),
  },
  {
    path:"pic/:id",
    component:()=>import('@/views/main/pic/index.vue'),
  },
  {
    path:"game/:id",
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
