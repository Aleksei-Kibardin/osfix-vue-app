import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("./components/homePage.vue"),
    },
    {
      name: "stamping",
      path: "/cold-stamping",
      component: () => import("./components/stampingPage.vue"),
    },
    {
      name: "services",
      path: "/services",
      component: () => import("./components/servicesPage.vue"),
    },
    {
      name: "studies",
      path: "/studies",
      component: () => import("./components/studiesPage.vue"),
    },
    {
      name: "news",
      path: "/news",
      component: () => import("./components/newsPage.vue"),
    },
    {
      name: "vacancies",
      path: "/vacancies",
      component: () => import("./components/vacanciesPage.vue"),
    },
    {
      name: "contacts",
      path: "/contacts",
      component: () => import("./components/contactsPage.vue"),
    },

  ],
});
