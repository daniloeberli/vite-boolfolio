import { createWebHistory, createRouter } from 'vue-router';

import HomePage from './pages/HomePage.vue';

export { router };

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
    ]
});