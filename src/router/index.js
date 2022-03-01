import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
}

const routes = [
  {
    path: "",
    name: "home",
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/antdForm",
    name: "antdForm",
    component: () => import("@/views/AntdForm/index.vue"),
  },
  {
    path: "/largeDataDomRenderTest",
    name: "largeDataDomRenderTest",
    component: () => import("@/views/LargeDataDomRenderTest/index.vue"),
  },
  {
    path: "/testRender",
    name: "testRender",
    component: () => import("@/views/TestRender/index.vue"),
  },
  {
    path: "/antdTable",
    name: "antdTable",
    component: () => import("@/views/AntdTable/index.vue"),
  },
  {
    path: "/vxeTable",
    name: "vxeTable",
    component: () => import("@/views/VxeTable/index.vue"),
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
