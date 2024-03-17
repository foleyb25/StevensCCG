import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/HomeView.vue"),
      meta: { scrollToTop: true },
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../pages/AboutView.vue"),
      meta: { scrollToTop: true },
    },
    {
      path: "/services",
      name: "Services",
      component: () => import("../pages/ServicesView.vue"),
      meta: { scrollToTop: true },
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("../pages/ProjectsView.vue"),
      meta: { scrollToTop: true },
    },
    {
      path: "/request",
      name: "Request",
      component: () => import("../pages/RequestQuoteView.vue"),
      meta: { scrollToTop: true },
    },
  ],
});

export default router;
