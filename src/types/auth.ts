import type { ApiResponse } from './api';

export interface AuthUser {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
}

export interface LoginPayload {
    username: string;
    password: string;
}

export interface LoginResponse extends ApiResponse<AuthUser> {}
