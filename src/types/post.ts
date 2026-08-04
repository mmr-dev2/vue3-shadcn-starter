import type { ApiResponse } from './api';

export interface PostReactions {
    likes: number;
    dislikes: number;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: PostReactions;
    views: number;
    userId: number;
}

export interface PostPayload {
    title: string;
    body: string;
    userId: number;
}

export interface PostsList {
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
}

export interface PostResponse extends ApiResponse<Post> {}
export interface PostsResponse extends ApiResponse<PostsList> {}
