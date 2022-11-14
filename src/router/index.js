import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  
  {
    path: '/home/:id',
    name: 'homepage',
    component: HomePage,
  },
]

const router = new VueRouter({
  routes
})

export default router
