import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './scss/main.scss';
import "normalize.css";
import "./filters.js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'jquery';
Vue.config.productionTip = false;

library.add(fab, fas, far);

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon);

import VueRouter from "vue-router";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
Vue.use(VueRouter);
Vue.use(VueSidebarMenu);

const Installation = {
  template: "<div>Installation</div>"
};

const BasicUsage = {
  template: "<div>basic-usage</div>"
};

 new VueRouter({
  routes: [
    {
      path: "/",
      name: "Dresses",
      component: Installation
    },
    {
      path: "/basic-usage",
      name: "Skirts",
      component: BasicUsage
    }
  ]
});

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
