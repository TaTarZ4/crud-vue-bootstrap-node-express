import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView.vue'
import CreateView from '../views/CreateView.vue'
import EditView from '@/views/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UsersView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditView
    }
  ]
})

export default router
