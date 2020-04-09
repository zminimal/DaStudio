import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUp.vue'
import Normalize from 'normalize.css'

Vue.use(VueRouter)
Vue.use(Normalize)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
