import type { RouteLocationNormalized } from 'vue-router';

// Services
import AuthService from '@/services/auth.service';

export default function (to: RouteLocationNormalized): boolean | object {
    if (AuthService.isLoggedIn()) {
        return true;
    }

    return { name: 'Login' };
}
