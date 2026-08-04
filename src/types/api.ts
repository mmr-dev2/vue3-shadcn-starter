import type {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig
} from 'axios';

export interface ApiRequestConfig<T = unknown> extends AxiosRequestConfig<T> {}

export interface ApiResponse<T = unknown> extends AxiosResponse<T> {}

export type RequestOnFulfilled = (
    config: InternalAxiosRequestConfig
) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;

export type ResponseOnFulfilled<T = unknown> = (
    response: ApiResponse<T>
) => ApiResponse<T> | Promise<ApiResponse<T>>;

export type ResponseOnRejected = (error: AxiosError) => unknown;
