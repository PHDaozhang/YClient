// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as filters from './filters'
import common from './utils/common'

import VueVideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import md5 from 'js-md5'
import store from './store'
import i18n from './lang'

Vue.config.productionTip = false
Vue.prototype.$md5 = md5

Vue.use(common)

Vue.use( Element,{
  i18n:(key,value)=>i18n.t(key,value)
} );

Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

Object.keys(filters).forEach( key => {
  Vue.filter(key,filters[key]);
} );

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  i18n:i18n,
  components: { App },
  template: '<App/>'
})
