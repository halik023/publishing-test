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
    path: '/animation',
    name: 'Animation',
    component: () => import('../views/Animation.vue')
  },
  {
    path: '/velocity',
    name: 'Velocity',
    component: () => import('../views/Velocity.vue')
  },
  {
    path: '/fabric',
    name: 'Fabric',
    component: () => import('../views/Fabric.vue')
  },
  {
    path: '/crop-image',
    name: 'Crop',
    component: () => import('../views/Crop.vue')
  },
  {
    path: '/filter',
    name: 'Filter',
    component: () => import('../views/Filter.vue')
  },
  {
    path: '/text',
    name: 'Text',
    component: () => import('../views/Text.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
