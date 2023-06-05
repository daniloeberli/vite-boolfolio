import { createWebHistory, createRouter } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import ProjectDetailPage from './pages/ProjectDetailPage.vue';
import TypePage from './pages/TypePage.vue';
import TechnologyPage from './pages/TechnologyPage.vue';
import LeadPage from './pages/LeadPage.vue';
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
            path: '/types/:slug',
            name: 'type',
            component: TypePage
        },
        {
            path: '/technologies/:slug',
            name: 'technology',
            component: TechnologyPage
        },
        {
            path: '/leads',
            name: 'lead',
            component: LeadPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});