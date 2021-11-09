import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Checkout from '../components/Checkout.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/checkout/:id',
        name: 'Checkout',
        component: Checkout
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
