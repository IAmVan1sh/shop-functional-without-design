interface ProductType {
    _id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[],
}

export interface FetchedProductsType {
    products: ProductType[];
}

export default ProductType;