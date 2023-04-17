import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@views/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@views/auth/login.vue')
  }
]

export default routes
