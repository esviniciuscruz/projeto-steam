import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/infoGame/:id',
      name: 'infoGame',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/infoGame/index.vue')
    },
    {
      path: '/comprar/:id',
      name: 'Comprar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/comprar/index.vue')
    }
  ]
})

export default router
