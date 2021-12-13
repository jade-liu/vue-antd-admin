import Vue from "vue";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import "./icons";
import "./mock/index.js";
import request from "./utils/request";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.prototype.$request = request;

Vue.config.productionTip = false;

Vue.use(element, {
  size: "mini",
});

Vue.use(Antd);

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
