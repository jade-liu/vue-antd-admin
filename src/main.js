import Vue from "vue";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons";
import "./mock/index.js";
import request from "./utils/request";

import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";

Vue.use(VXETable);

Vue.prototype.$request = request;

Vue.config.productionTip = false;

Vue.use(element, {
  size: "mini",
});

Vue.use(Antd);

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
