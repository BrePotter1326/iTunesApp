import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ItunesApp from './components/iTunes.vue'
import HomePage from './components/home.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/home', component: HomePage },
  { path: '/iTunes', component: ItunesApp },
  { path: '/hello', component: HelloWorld }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
