// Repositories
import ApiRepository from '@/repositories/api.repository';
import AuthRepository from '@/repositories/auth.repository';

// Services
import TokenService from '@/services/token.service';
import UserService from '@/services/user.service';

// Enums
import HttpHeader from '@/enums/HttpHeader';

// Types
import type { ApiRequestConfig } from '@/types/api';
import type { LoginPayload, LoginResponse } from '@/types/auth';

class AuthService {
    static async login(data: LoginPayload, config?: ApiRequestConfig): Promise<LoginResponse> {
        const response = await AuthRepository.login(data, config);

        const { token, user } = response.data.value;

        TokenService.set(token);
        UserService.set(user);

        ApiRepository.setHeader(HttpHeader.AUTHORIZATION, `Bearer ${token}`);

        return response;
    }

    static logout(): void {
        TokenService.clear();
        UserService.clear();
        ApiRepository.deleteHeader(HttpHeader.AUTHORIZATION);
    }

    static isLoggedIn(): boolean {
        return TokenService.isExist();
    }
}

export default AuthService;
