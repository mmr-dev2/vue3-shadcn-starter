import ApiRepository from './api.repository';

// Types
import type { ApiRequestConfig } from '@/types/api';
import type { AuthUser, LoginPayload, LoginResponse } from '@/types/auth';

class AuthRepository {
    protected static readonly url: string = 'auth';

    static login(data: LoginPayload, config?: ApiRequestConfig): Promise<LoginResponse> {
        return ApiRepository.post<AuthUser>(`${this.url}/login`, data, config);
    }
}

export default AuthRepository;
