import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import EventBus from "./directives/eventbus";
import "./registerServiceWorker";
import ArgonDashboard from "./plugins/argon-dashboard";

Vue.prototype.$bus = EventBus;
Vue.use(ArgonDashboard);

// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
