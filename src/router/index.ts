import { createRouter, createWebHistory } from 'vue-router';

// Middlewares
import AuthenticateRoute from './middleware/AuthenticateRoute';
import AuthorizeRoute from './middleware/AuthorizeRoute';
import RedirectIfAuthenticated from './middleware/RedirectIfAuthenticated';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'App',
            component: () => import('@/views/AppView.vue'),
            beforeEnter: [AuthenticateRoute],
            children: [
                {
                    path: '',
                    name: 'Dashboard',
                    component: () => import('@/views/DashboardView.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/auth/LoginView.vue'),
            beforeEnter: [RedirectIfAuthenticated]
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('@/views/auth/RegisterView.vue'),
            beforeEnter: [RedirectIfAuthenticated]
        }
    ]
});

export default router;
