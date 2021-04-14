import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

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
            name: '登录1',
            component: () =>
                import ( /* webpackChunkName: "about" */ '@/components/login')
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
        if (sessionStorage['userInfo']) {
            next()
        } else {
            next('/login')
        }
    }
})
export default router