import ApiRepository from './api.repository';

// Types
import type { ApiRequestConfig } from '@/types/api';
import type { Todo, TodoPayload, TodoResponse, TodosResponse } from '@/types/todo';

class TodoRepository {
    protected static readonly url: string = 'todos';

    static getAll(config?: ApiRequestConfig): Promise<TodosResponse> {
        return ApiRepository.get(this.url, config);
    }

    static getOneById(id: number, config?: ApiRequestConfig): Promise<TodoResponse> {
        return ApiRepository.get(`${this.url}/${id}`, config);
    }

    static add(data: TodoPayload, config?: ApiRequestConfig): Promise<TodoResponse> {
        return ApiRepository.post(`${this.url}/add`, data, config);
    }

    static update(
        id: number,
        data: Partial<TodoPayload>,
        config?: ApiRequestConfig
    ): Promise<TodoResponse> {
        return ApiRepository.put(`${this.url}/${id}`, data, config);
    }

    static delete(id: number, config?: ApiRequestConfig): Promise<TodoResponse> {
        return ApiRepository.delete(`${this.url}/${id}`, config);
    }

    static getByUser(userId: number, config?: ApiRequestConfig): Promise<TodosResponse> {
        return ApiRepository.get(`${this.url}/user/${userId}`, config);
    }
}

export default TodoRepository;
