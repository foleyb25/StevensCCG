import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/HomeView.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../pages/AboutView.vue"),
    },
    {
      path: "/services",
      name: "Services",
      component: () => import("../pages/ServicesView.vue"),
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("../pages/ProjectsView.vue"),
    },
    {
      path: "/request",
      name: "Request",
      component: () => import("../pages/RequestQuoteView.vue"),
    },
  ],
});

export default router;
