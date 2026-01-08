import { createRouter, createWebHistory } from 'vue-router'

// import pages
import MainLayout from './layouts/main-layout.vue'
import Home from './views/Home.vue'

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: Home
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

export default router
