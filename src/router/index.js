import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/healing',
    name: 'Healing',
    component: () => import(/* webpackChunkName: "healing" */ '../views/Healing')
  },
  {
    path: '/wands',
    name: 'Wands',
    component: () => import(/* webpackChunkName: "magic-wands" */ '../views/Wands')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
