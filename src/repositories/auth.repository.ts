import ApiRepository from './api.repository';

// Types
import type { ApiRequestConfig } from '@/types/api';
import type { LoginPayload, LoginResponse } from '@/types/auth';
import type { User } from '@/types/user';

class AuthRepository {
    protected static readonly url: string = 'auth';

    static login(data: LoginPayload, config?: ApiRequestConfig): Promise<LoginResponse> {
        return ApiRepository.post<User>(`${this.url}/login`, data, config);
    }
}

export default AuthRepository;
