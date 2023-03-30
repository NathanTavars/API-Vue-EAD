import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import MySupports from '../views/Supports/MySupports'

const routes = [
  {
    path: '/campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: MySupports
      },
      {
        path: '',
        name: 'campus.home',
        component: HomeView
      },
    ]
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
