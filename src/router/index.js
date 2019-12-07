import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Australia from '../views/Australia.vue'
import India from '../views/India.vue'
import Team from '../views/Team.vue'
import Character from '../views/Character.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Australia',
    name: 'Australia',
    component: Australia
  },
  {
    path: '/India',
    name: 'India',
    component: India
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team
  },
  {
    path: '/Character/:Team/:name',
    name: 'Character',
    component: Character
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
