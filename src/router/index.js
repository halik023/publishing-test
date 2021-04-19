import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/manager',
    name: 'Manager',
    component: () => import('../views/Manager.vue')
  },
  {
    path: '/animation',
    name: 'Animation',
    component: () => import('../views/Animation.vue')
  },
  {
    path: '/print-edition',
    name: 'PrintEdition',
    component: () => import('../views/PrintEdition.vue')
  },
  {
    path: '/digital-edition',
    name: 'DigitalEdition',
    component: () => import('../views/DigitalEdition.vue')
  },
  {
    path: '/crop',
    name: 'Crop',
    component: () => import('../views/Crop.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
