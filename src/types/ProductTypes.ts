interface ProductType {
    _id: string,
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

export interface CreateProductType extends Omit<ProductType, "_id"> {}

export default ProductType;