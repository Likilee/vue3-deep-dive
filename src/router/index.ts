import HomePage from '@/components/HomePage/HomePage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/ref',
      name: 'ref',
      component:  () => import('@/pages/RefPage.vue')
    },
    {
      path: '/reactive',
      name: 'reactive',
      component:  () => import('@/pages/ReactivePage.vue')
    },
  ]
})

export default router
