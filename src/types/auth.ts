import type { ApiResponse } from './api';

// Types
import type { User } from '@/types/user';

export interface LoginPayload {
    username: string;
    password: string;
}

export interface LoginResponse extends ApiResponse<User> {}
