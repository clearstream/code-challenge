import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/qr-codes',
      name: 'qr-codes.index',
      component: () => import('../pages/QrCodes.vue'),
    },
  ],
});

export default router;
