import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import layoutRoutes from './autoload'
console.log('layoutRoutes: ', layoutRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRoutes]
})

export const setupRouter = (app: any) => {
  app.use(router)
}

export default router
