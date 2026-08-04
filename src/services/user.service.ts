import StorageService from './storage.service';

// Types
import type { AuthUser } from '@/types/auth';

class UserService {
    private static STORAGE_KEY: string = 'auth_user';

    static set(value: AuthUser): void {
        StorageService.set<AuthUser>(this.STORAGE_KEY, value);
    }

    static get(): AuthUser | undefined {
        return StorageService.get<AuthUser>(this.STORAGE_KEY);
    }

    static isExist(): boolean {
        return StorageService.has(this.STORAGE_KEY);
    }

    static clear(): void {
        StorageService.delete(this.STORAGE_KEY);
    }
}

export default UserService;
