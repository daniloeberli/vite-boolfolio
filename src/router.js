import { createWebHistory, createRouter } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import ProjectDetailPage from './pages/ProjectDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

export { router };

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectPage
        },
        {
            path: '/projects/:id',
            name: 'projectDetail',
            component: ProjectDetailPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});