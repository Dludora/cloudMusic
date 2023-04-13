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
      redirect: '/browser',
      children: [
        {
          path: 'browser',
          name: 'browser',
          component: () => import('../views/Browsers/Browser.vue')
        },
        {
          path: 'room',
          name: 'room',
          component: () => import('../views/Browsers/Room.vue')
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('../views/PlayList/PlayList.vue')
        }
      ]
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../components/Cards/MusicCard.vue')
    },
  ]
})

router.beforeEach((to, from) => {

})

export default router
