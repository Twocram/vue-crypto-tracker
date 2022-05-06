import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import CoinItemPage from "@/pages/CoinItemPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },

    {
      path: "/coins/:id",
      component: CoinItemPage,
      name: "coin-item",
    },
  ],
});

export default router;
