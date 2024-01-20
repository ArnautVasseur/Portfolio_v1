import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/Projects.vue'
import MMIView from '../views/MMIView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {   path: '/',   name: 'home',   component: HomeView   },
    {   path: '/projects',   name: 'projects',   component: ProjectsView   },
    {   path: '/MMI',   name: 'mmi',   component: MMIView   },
  ]
})

export default router