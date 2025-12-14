import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('../views/Pricing.vue') // Lazy load
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register/RegisterWizard.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/RedirectLogin.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: () => import('../views/TermsOfService.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
