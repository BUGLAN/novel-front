import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import axios from "axios";
import "ant-design-vue/dist/antd.css";
import VueAxios from "vue-axios";

Vue.use(Antd);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;
Vue.prototype.$axios= axios

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
