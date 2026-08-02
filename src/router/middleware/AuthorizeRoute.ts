import type { RouteLocationNormalized } from 'vue-router';

// Services
import PermissionService from '@/services/permission.service';

export default function (to: RouteLocationNormalized): boolean {
    const permissions = to.meta.permissions as string[];

    if (PermissionService.hasAll(permissions)) {
        return true;
    }

    console.log('Authorization Error');
    return false;
}
