import Vue from 'vue'
import Router from 'vue-router'
 
 Vue.use(Router)

const Hello = () => import('../components/Hello.vue')

const routes = [
    {
        path: '/index',
        name: 'index',
        component: Hello
    }
]

const router = new Router({
    routes
});

export default router;