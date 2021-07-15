import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('./src/components/Login')
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});