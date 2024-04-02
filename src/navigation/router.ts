import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "./auth.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
import APP from "@/constants/APP";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRoutes,
    ...dashboardRoutes,
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/components/not-found/NotFound.vue"),
      meta: { title: "Not Found" },
    },
  ],
});

router.afterEach(
  (to, from) =>
    (document.title = to.meta?.title
      ? `${to.meta.title} | ${APP.name}`
      : APP.name),
);

export default router;
