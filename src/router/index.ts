import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import { RouterName, RouterPath } from '@/consts/RouterNamespace'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RouterPath.LOGIN,
      name: RouterName.LOGIN,
      component: LoginView
    },
    {
      path: RouterPath.HOME,
      name: RouterName.HOME,
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: RouterPath.CLIENT_SEARCH,
      name: RouterName.CLIENT_SEARCH,
      component: () => import('@/views/ClientSearchView.vue')
    }
  ]
})

export default router
