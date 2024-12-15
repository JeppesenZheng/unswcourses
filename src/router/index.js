import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CourseDetail from '@/views/CourseDetail.vue';
import TutorialDetail from '@/components/courses/TutorialDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/course/:type/:code',
    name: 'CourseDetail',
    component: CourseDetail,
  },
  {
    path: '/course/:courseCode/revision/:revisionId',
    name: 'CourseRevision',
    component: () =>
      import('../components/courses/revisions/DPST109124T3Revision.vue'),
  },
  {
    path: '/course/:courseCode/revision/:revisionId/exercise/:topicName',
    name: 'TopicExercise',
    component: () => import('../components/courses/revisions/exercises/DynamicTopicLoader.vue'),
    props: true, // Pass route params as props
  },
  {
    path: '/course/:courseCode/tutorial/:week',
    name: 'TutorialDetail',
    component: TutorialDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHashHistory('/unswcourses/'),
  routes,
});

export default router;