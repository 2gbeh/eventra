import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from './auth.routes'
import dashboardRoutes from './dashboard.routes'
import APP from '@/constants/APP'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authRoutes, ...dashboardRoutes]
})

router.afterEach(
  (to, from) =>
    (document.title = to.meta?.title ? APP.title.replace('%', to.meta.title) : APP.name)
)

export default router
