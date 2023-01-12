import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { isUserLoggedIn } from './utils'
import routes from '~pages'
import { canNavigate } from '@layouts/plugins/casl'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ℹ️ We are redirecting to different pages based on role.
    // NOTE: Role is just for UI purposes. ACL is based on abilities.
    {
      path: '/',
      redirect: (to) => {
        const userData = JSON.parse(localStorage.getItem('userData') || '{}')
        const userRole = userData && userData.role ? userData.role : null
        if (userRole !== null) return { name: 'index' }

        return { name: 'login', query: to.query }
      },
    },
    {
      path: '/dashboards/crm',
      redirect: () => ({ name: 'dashboards-crm', params: { tab: 'apps' } }),
    },
    ...setupLayouts(routes),
  ],
})

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach((to) => {
  const isLoggedIn = isUserLoggedIn()

  if (canNavigate(to)) {
    if (to.meta.redirectIfLoggedIn && isLoggedIn) return '/'
  } else {
    if (isLoggedIn) return { name: 'not-authorized' }
    else return { name: 'login', query: { to: to.name !== 'index' ? to.fullPath : undefined } }
  }
})

console.log(' router :', router)

export default router
