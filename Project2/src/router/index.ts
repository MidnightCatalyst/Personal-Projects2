import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkoutViewVue from '@/views/WorkoutView.vue'
import TrackingViewVue from '@/views/TrackingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/workout',
      name: 'workout',
      component: WorkoutViewVue
    },
    {
      path: '/Tracker',
      name: 'Tracker',
      component: TrackingViewVue
    }
   
  ]
})

export default router
