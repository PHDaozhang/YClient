import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const mainChildRoutes = [
  {
    path:"",
    component:()=>import("@/views/main/index.vue")
  },
  {
    name:"movieIndex",
    path:"movie/:id",
    component:()=>import('@/views/main/movie/index.vue'),
  },
  {
    name:"videoIndex",
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
  },
  {
    path:"picDetial/:id",
    component:()=>import('@/views/main/pic/detail.vue'),
  },
  {
    path:"NovelDetial/:id",
    component:()=>import('@/views/main/novel/detail.vue'),
  },
  {
    path:"movieDetial/:id",
    component:()=>import('@/views/main/movie/detail.vue'),
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
