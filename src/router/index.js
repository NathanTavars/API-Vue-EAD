import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import MySupports from '../views/supports/MySupports'
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue'
import Auth from '@/views/auth/AuthView.vue'
import ForgetPassword from '@/views/auth/ForgetPassword.vue'
import ResetPassword from '@/views/auth/ResetPassword.vue'

import store from "@/store"
import { TOKEN_NAME } from "@/configs"

const routes = [
  {
    path: '/campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: MySupports,

      },
      {
        path: 'modulos',
        name: 'campus.modules',
        component: ModulesAndLessons
      },
      {
        path: '',
        name: 'campus.home',
        component: HomeView
      },
    ]

    
  },
  {
    path: '/',
    name: 'auth',
    component: Auth
  }, {
    path: '/recuperar-senha',
    name: 'forget.password',
    component: ForgetPassword
  },
  {
    path: '/reset/:token',
    name: 'reset.password',
    component: ResetPassword,
    props: true,
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, _, next) => {
  const loggedIn = store.state.users.loggedIn
  if (to.name != 'reset.password' && !loggedIn) {
    const token = await localStorage.getItem(TOKEN_NAME)
    if (!token && to.name != 'auth' && to.name != 'forgot.password') {
      return router.push({name: 'auth'})
    }

    await store.dispatch('getMe')
                .catch(() => {
                  if (to.name != 'auth') return router.push({name: 'auth'})
                })
  }

  next()
})

export default router
