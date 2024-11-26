import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CourseDetail from '@/views/CourseDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/course/:type/:code',
    name: 'CourseDetail',
    component: CourseDetail
  },
  {
    path: '/course/:courseCode/revision/:revisionId',
    name: 'CourseRevision',
    component: () => import('../components/courses/revisions/DPST109124T3Revision.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory('/unswcourses/'),
  routes
})

export default router