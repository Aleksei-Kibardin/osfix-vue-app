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
    {
      name: "about",
      path: "/about/:id",
      component: () => import("./components/about.vue"),
    },
    {
      name: "engineering",
      path: "/engineering",
      component: () => import("./components/engineering.vue"),
    },
    {
      name: "co-engineering",
      path: "/co-engineering",
      component: () => import("./components/coEngineering.vue"),
    },
    {
      name: "activity",
      path: "/activity/:id",
      component: () => import("./components/activity.vue"),
    },
    {
      name: "gost",
      path: "/gost",
      component: () => import("./components/gostPage.vue"),
    },
    {
      name: "download",
      path: "/download/:id",
      component: () => import("./components/downloadPage.vue"),
    },
    {
      name: "engineeringBureau",
      path: "/engineeringBureau",
      component: () => import("./components/sub-components/engineeringBureau.vue"),
    },
    {
      name: "3Dmodel",
      path: "/3Dmodel",
      component: () => import("./components/sub-components/3Dmodel.vue"),
    },
    {
      name: "3Dscan",
      path: "/3Dscan",
      component: () => import("./components/sub-components/3Dscan.vue"),
    },
    {
      name: "DevelopmentTecDoc",
      path: "/DevelopmentTecDoc",
      component: () => import("./components/sub-components/DevelopmentTecDoc.vue"),
    },
    {
      name: "digitizationDrawings",
      path: "/digitizationDrawings",
      component: () => import("./components/sub-components/digitizationDrawings.vue"),
    },
    {
      name: "IndustrialDesign",
      path: "/IndustrialDesign",
      component: () => import("./components/sub-components/IndustrialDesign.vue"),
    },
    {
      name: "3Dmodel",
      path: "/3Dmodel",
      component: () => import("./components/sub-components/3Dmodel.vue"),
    },
    {
      name: "orderingDrawings",
      path: "/orderingDrawings",
      component: () => import("./components/sub-components/orderingDrawings.vue"),
    },
    {
      name: "productDev",
      path: "/productDev",
      component: () => import("./components/sub-components/productDev.vue"),
    },
    {
      name: "reverseEngineering",
      path: "/reverseEngineering",
      component: () => import("./components/sub-components/reverseEngineering.vue"),
    },
    {
      name: "tecDoc",
      path: "/tecDoc",
      component: () => import("./components/sub-components/tecDoc.vue"),
    },
    {
      name: "scanProcessing",
      path: "/scanProcessing",
      component: () => import("./components/sub-components/scanProcessing.vue"),
    },
  ],
})
