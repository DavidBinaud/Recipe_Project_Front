import Vue from "vue";
import store from "./vuex";
import router from "./router";
import App from "./App";

Vue.config.productionTip = false;

new Vue({
  router: router,
  store: store,
  render: (h) => h(App)
}).$mount("#app");
