import StorageService from './storage.service';

// Types
import type { User } from '@/types/user';

class UserService {
    private static STORAGE_KEY: string = 'auth_user';

    static set(value: User): void {
        StorageService.set<User>(this.STORAGE_KEY, value);
    }

    static get(): User | undefined {
        return StorageService.get<User>(this.STORAGE_KEY);
    }

    static isExist(): boolean {
        return StorageService.has(this.STORAGE_KEY);
    }

    static clear(): void {
        StorageService.delete(this.STORAGE_KEY);
    }
}

export default UserService;
