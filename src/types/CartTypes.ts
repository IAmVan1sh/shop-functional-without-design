import ProductType from "./ProductTypes.ts";

interface CartItem {
    id: number;
    product: ProductType;
    quantity: number;
}

export default CartItem;