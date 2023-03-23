import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomePage,
      redirect: '/broswer',
      children: [
        {
          path: 'broswer',
          name: 'broswer',
          component: () => import('../views/Browsers/Browser.vue')
        }
      ]
    },
  ]
})

router.beforeEach((to, from) => {

})

export default router
