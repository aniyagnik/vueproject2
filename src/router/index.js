import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DeathNote from '../views/DeathNote.vue'
import DBZ from '../views/DBZ.vue'
import Anime from '../views/Anime.vue'
import Character from '../views/Character.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/DeathNote',
    name: 'DeathNote',
    component: DeathNote
  },
  {
    path: '/DBZ',
    name: 'DBZ',
    component: DBZ
  },
  {
    path: '/Anime',
    name: 'Anime',
    component: Anime
  },
  {
    path: '/Character/:id',
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
