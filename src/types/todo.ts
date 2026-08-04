import type { ApiResponse } from './api';

export interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

export interface TodoPayload {
    todo: string;
    completed: boolean;
    userId: number;
}

export interface TodosList {
    todos: Todo[];
    total: number;
    skip: number;
    limit: number;
}

export interface TodoResponse extends ApiResponse<Todo> {}
export interface TodosResponse extends ApiResponse<TodosList> {}
