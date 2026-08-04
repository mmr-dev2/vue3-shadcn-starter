import ApiRepository from './api.repository';

// Types
import type { ApiRequestConfig } from '@/types/api';
import type { Post, PostPayload, PostResponse, PostsResponse } from '@/types/post';

class PostRepository {
    protected static readonly url: string = 'posts';

    static getAll(config?: ApiRequestConfig): Promise<PostsResponse> {
        return ApiRepository.get(this.url, config);
    }

    static search(query: string, config?: ApiRequestConfig): Promise<PostsResponse> {
        return ApiRepository.get(`${this.url}/search`, {
            ...config,
            params: { q: query, ...config?.params }
        });
    }

    static getOneById(id: number, config?: ApiRequestConfig): Promise<PostResponse> {
        return ApiRepository.get(`${this.url}/${id}`, config);
    }

    static add(data: PostPayload, config?: ApiRequestConfig): Promise<PostResponse> {
        return ApiRepository.post(`${this.url}/add`, data, config);
    }

    static update(
        id: number,
        data: Partial<PostPayload>,
        config?: ApiRequestConfig
    ): Promise<PostResponse> {
        return ApiRepository.put(`${this.url}/${id}`, data, config);
    }

    static delete(id: number, config?: ApiRequestConfig): Promise<PostResponse> {
        return ApiRepository.delete(`${this.url}/${id}`, config);
    }

    static getByTag(tag: string, config?: ApiRequestConfig): Promise<PostsResponse> {
        return ApiRepository.get(`${this.url}/tag/${tag}`, config);
    }

    static getByUser(userId: number, config?: ApiRequestConfig): Promise<PostsResponse> {
        return ApiRepository.get(`${this.url}/user/${userId}`, config);
    }
}

export default PostRepository;
