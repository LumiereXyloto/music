import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

import 'common/stylus/index.styl'

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

Vue.config.productionTip = false
// window.$uri = 'http://47.96.100.173'
// window.$uri = 'http://192.168.31.118'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
