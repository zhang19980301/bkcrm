import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import store from '../store'
const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        children: []
    },
    {
        path: '/about',
        name: 'About',
        component: Home,
        children: [{
            path: '/about/login',
            name: '用户管理',
            component: () =>
                import ( /* webpackChunkName: "about" */ '@/views/userMeange/userMeange.vue')
        }, {
            path: '/about/login2',
            name: '登录2',
            component: () =>
                import ( /* webpackChunkName: "about" */ '@/components/login')
        }]
    },
    {
        path: '/user',
        name: 'User',
        component: Home,
        children: [{
            path: '/user/meange',
            name: '用户管理',
            component: () =>
                import ( /* webpackChunkName: "about" */ '@/views/userMeange/userMeange.vue')
        }, {
            path: '/about/login2',
            name: '登录2',
            component: () =>
                import ( /* webpackChunkName: "about" */ '@/components/login')
        }]
    },
    {
        path: '/login',
        name: '登录',
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/components/login')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        next()
    } else {
        if (store.state.token) {
            next()
        } else {
            next('/login')
        }
    }
})
export default router