import ApiRepository from './api.repository';

// Types
import type { ApiRequestConfig } from '@/types/api';
import type {
    Product,
    ProductCategoriesResponse,
    ProductResponse,
    ProductsResponse
} from '@/types/product';

class ProductRepository {
    protected static readonly url: string = 'products';

    static getAll(config?: ApiRequestConfig): Promise<ProductsResponse> {
        return ApiRepository.get(this.url, config);
    }

    static search(query: string, config?: ApiRequestConfig): Promise<ProductsResponse> {
        return ApiRepository.get(`${this.url}/search`, {
            ...config,
            params: { q: query, ...config?.params }
        });
    }

    static getOneById(id: number, config?: ApiRequestConfig): Promise<ProductResponse> {
        return ApiRepository.get(`${this.url}/${id}`, config);
    }

    static add(data: Partial<Product>, config?: ApiRequestConfig): Promise<ProductResponse> {
        return ApiRepository.post(`${this.url}/add`, data, config);
    }

    static update(
        id: number,
        data: Partial<Product>,
        config?: ApiRequestConfig
    ): Promise<ProductResponse> {
        return ApiRepository.put(`${this.url}/${id}`, data, config);
    }

    static delete(id: number, config?: ApiRequestConfig): Promise<ProductResponse> {
        return ApiRepository.delete(`${this.url}/${id}`, config);
    }

    static getCategories(config?: ApiRequestConfig): Promise<ProductCategoriesResponse> {
        return ApiRepository.get(`${this.url}/categories`, config);
    }

    static getByCategory(category: string, config?: ApiRequestConfig): Promise<ProductsResponse> {
        return ApiRepository.get(`${this.url}/category/${category}`, config);
    }
}

export default ProductRepository;
