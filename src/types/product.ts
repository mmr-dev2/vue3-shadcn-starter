import type { ApiResponse } from './api';

export interface ProductDimensions {
    width: number;
    height: number;
    depth: number;
}

export interface ProductReview {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface ProductMeta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: ProductDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: ProductReview[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: ProductMeta;
    thumbnail: string;
    images: string[];
}

export interface ProductCategory {
    slug: string;
    name: string;
    url: string;
}

export interface ProductsList {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export interface ProductResponse extends ApiResponse<Product> {}
export interface ProductsResponse extends ApiResponse<ProductsList> {}
export interface ProductCategoriesResponse extends ApiResponse<ProductCategory[]> {}
