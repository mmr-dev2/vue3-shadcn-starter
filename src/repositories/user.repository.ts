import ApiRepository from './api.repository';

// Types
import type { ApiRequestConfig } from '@/types/api';
import type { User, UserResponse, UsersResponse } from '@/types/user';

class UserRepository {
    protected static readonly url: string = 'users';

    static getAll(config?: ApiRequestConfig): Promise<UsersResponse> {
        return ApiRepository.get(this.url, config);
    }

    static search(query: string, config?: ApiRequestConfig): Promise<UsersResponse> {
        return ApiRepository.get(`${this.url}/search`, {
            ...config,
            params: { q: query, ...config?.params }
        });
    }

    static getOneById(id: number, config?: ApiRequestConfig): Promise<UserResponse> {
        return ApiRepository.get(`${this.url}/${id}`, config);
    }

    static add(data: Partial<User>, config?: ApiRequestConfig): Promise<UserResponse> {
        return ApiRepository.post(`${this.url}/add`, data, config);
    }

    static update(
        id: number,
        data: Partial<User>,
        config?: ApiRequestConfig
    ): Promise<UserResponse> {
        return ApiRepository.put(`${this.url}/${id}`, data, config);
    }

    static delete(id: number, config?: ApiRequestConfig): Promise<UserResponse> {
        return ApiRepository.delete(`${this.url}/${id}`, config);
    }
}

export default UserRepository;
