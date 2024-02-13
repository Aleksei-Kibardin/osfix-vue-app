import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   name: "services",
    //   path: "/services/:id(\\d+)",
    //   component: () => import("./components/services.vue"),
    // },
    // {
    //   name: "about",
    //   path: "/",
    //   component: () => import("./components/about.vue"),
    // },
  ],
});
