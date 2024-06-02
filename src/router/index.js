import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ToursView from '@/views/ToursView.vue'
import BicycleRentalView from '@/views/BicycleRentalView.vue'
import AboutTheGambia from '@/views/AboutTheGambia.vue'
import TourDetailView from '@/views/TourDetailView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/tours',
      name: 'tours',
      component: ToursView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/bicyclerental',
      name: 'bicyclerental',
      component: BicycleRentalView
    },
    {
      path: '/aboutthegambia',
      name: 'aboutthegambia',
      component: AboutTheGambia
    },
    {
      path: '/tours/:id',
      name: 'tour-detail',
      component: TourDetailView,
      props: true
    }
  ]
})

export default router
