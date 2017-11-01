import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store/index.js'

import fastclick from 'fastclick'
fastclick.attach(document.body)

import router from './router'

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
	loading: require('./base/loading/loading.gif')
})

Vue.config.productionTip = false

import './common/stylus/index.styl'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
