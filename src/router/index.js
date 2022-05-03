import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import CoinItemPage from '@/pages/CoinItemPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },

    {
      path: '/coins/:id',
      component: CoinItemPage,
    },
  ],
});

export default router;
