import ProductType from "./ProductTypes.ts";

export interface CartItem {
    id: number;
    product: ProductType;
    quantity: number;
}

export interface CartAction extends Omit<CartItem, "id"> {

}

export interface InitialStateType {
    items: CartItem[];
}