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
    meta: {
      name: "首页",
    },
  },
  {
    path: "/antdForm",
    name: "antdForm",
    component: () => import("@/views/AntdForm/index.vue"),
    meta: {
      name: "Ant Design Form测试",
    },
  },
  {
    path: "/largeDataDomRenderTest",
    name: "largeDataDomRenderTest",
    component: () => import("@/views/LargeDataDomRenderTest/index.vue"),
    meta: {
      name: "大数据渲染bug修改",
    },
  },
  {
    path: "/testRender",
    name: "testRender",
    component: () => import("@/views/TestRender/index.vue"),
    meta: {
      name: "测试render",
    },
  },
  {
    path: "/antdTable",
    name: "antdTable",
    component: () => import("@/views/AntdTable/index.vue"),
    meta: {
      name: "Ant Design Table测试",
    },
  },
  {
    path: "/vxeTable",
    name: "vxeTable",
    component: () => import("@/views/VxeTable/index.vue"),
    meta: {
      name: "Vxe Table测试",
    },
  },
  {
    path: "/eventBubblingAndCapturing",
    name: "eventBubblingAndCapturing",
    component: () => import("@/views/EventBubblingAndCapturing/index.vue"),
    meta: {
      name: "事件冒泡和捕获",
    },
  },
  {
    path: "/nestedTest",
    name: "NestedTest",
    component: () => import("@/views/NestedTest/index.vue"),
    meta: {
      name: "嵌套测试",
    },
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
