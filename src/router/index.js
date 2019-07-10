import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Header = () => import("../modules/index/component/header.vue");

const routes = [
  {
    path: "/",
    name: "root",
    component: Header
  }
];

const router = new Router({
  routes
});

export default router;
