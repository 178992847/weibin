import Vue from 'vue'
import VueRouter from 'vue-router'
import success from './views/success.vue'
import home from './views/home.vue'
import dashboard from './views/dashboard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'dashboard',
        component: dashboard
    },
    {
        path: '/success',
        name: 'success',
        component: success
    },
    {
        path: '/home',
        name: 'home',
        component: home
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router