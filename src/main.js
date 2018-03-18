import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import router from './router'
//import goods from './components/goods/goods.vue'
//import ratings from './components/ratings/ratings.vue'
//import seller from './components/seller/seller.vue'
import vgoods from './components/goods/goods.vue'
import vratings from './components/ratings/ratings.vue'
import vseller from './components/seller/seller.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
const routes = [
  { path: '/vratings', component: vratings },
  { path: '/vgoods', component: vgoods},
  { path: '/vseller', component: vseller},

]
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


