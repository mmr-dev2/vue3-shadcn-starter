import type { ApiResponse } from './api';

export interface User {
    id: number;
    first_name: string | null;
    last_name: string | null;
    phone_number: string;
    email: string | null;
    created_at: string | null;
    updated_at: string | null;
}

export interface UserResponseValue {
    user: User;
}

export interface UsersResponseValue {
    users: User[];
}

export interface UserResponse extends ApiResponse<UserResponseValue> {}
export interface UsersResponse extends ApiResponse<UsersResponseValue> {}
