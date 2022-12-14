import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkoutViewVue from '/src/views/WorkoutView.vue'
import TrackingViewVue from '@/views/TrackingView.vue'
import LoginView from '/src/components/Login/LoginSetup.vue'
import ActivityView from '@/views/ActivityView.vue'

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
    },
    {
      path: '/Activity',
      name: 'Activity Log',
      component: ActivityView
    },
    {
      path: "/Login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import('/src/components/Login/SignUpSetup.vue'),
    }
   
  ]
})





export default router;