import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Header = () => import("../modules/index/component/header.vue");
const Content = () => import("../modules/index/component/content.vue")
const Index = () => import("../modules/index/page/index.vue")


const routes = [
  {
    path: "/",
    name: "root",
    component: Index,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "content",
        component: Content,
      }
    ]
  }
];

const router = new Router({
  routes
});

export default router;
