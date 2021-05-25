import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ItemList from '../views/ItemList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/:tag',
    name: 'ItemList',
    component: ItemList,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
