import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Payment_NaijaView from '../views/Payment_NaijaView.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/naija-payment',
        name: 'payment',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/Payment_NaijaView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;