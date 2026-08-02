import type { ApiResponse } from './api';

// Types
import type { User } from '@/types/user';

export interface LoginPayload {
    phone_number: string;
    password: string;
}

export interface LoginResponseValue {
    token: string;
    user: User;
}

export interface LoginResponse extends ApiResponse<LoginResponseValue> {}
