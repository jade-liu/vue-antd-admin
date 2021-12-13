import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "",
    name: "home",
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/largeDataDomRenderTest",
    name: "largeDataDomRenderTest",
    component: () => import("../views/LargeDataDomRenderTest/index.vue"),
  },
];

const router = new Router({
  mode: "history", // require service support
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: routes,
});

export default router;
