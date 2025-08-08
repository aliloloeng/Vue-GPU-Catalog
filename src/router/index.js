import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import Compare from '@/view/ComparePage.vue'
import blog from '@/view/BlogPage.vue'
import contact from '@/view/ContactPage.vue'

const routes = [
  {path: '/',component: HomeView},
  {path:'/compare',component: Compare},
  {path:'/blog',component: blog},
  {path:'/contact',component: contact}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

