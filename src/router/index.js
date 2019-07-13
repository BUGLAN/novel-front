import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Header = () => import("../modules/index/component/header.vue");
const H = () => import("../modules/index/component/h.vue")

const routes = [
  {
    path: "/",
    name: "root",
    component: Header
  },
  {
    path: "/h",
    name: "h",
    component: H
  }
];

const router = new Router({
  routes
});

export default router;
