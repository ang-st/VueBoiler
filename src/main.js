// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'


Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/', component: App },
]
 
const router = new VueRouter({
    routes // short for routes: routes
})

/* eslint-disable no-new *'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  store,
  router,
  render: h => h(App)
})


